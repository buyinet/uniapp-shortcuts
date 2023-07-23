import kt from '@/uni_modules/uniapp-kantboot/index.js'
import api from '../api/index.js'

var result = new Object();

/**
 * 未读消息数量
 */
result.getUnreadMessageCount = function () {
    return uni.getStorageSync('unreadMessageCount');
}

result.setUnreadMessageCount = function (data) {
    uni.setStorageSync('unreadMessageCount', data);
    setTimeout(() => {
        uni.$emit("changeUnreadMessageCount", data);
    }, 10);
}

result.addUnreadMessageCount = function (data) {
    var count = result.getUnreadMessageCount();
    if (count == null||count=="") {
        count = 0;
    }
    count -= -data;
    if (count < 0) {
        count = 0;
    }

    result.setUnreadMessageCount(count);
}


/**
 * 根据房间id获取未读的消息的数量
 * @param {*} roomId
 */
result.getUnreadMessageCountByRoomId = function (roomId) {
    var count = uni.getStorageSync('unreadMessageCountByRoomId:'+roomId);
    if (count == null||count=="") {
        count = 0;
    }
    return count;
}

result.addUnreadMessageCountByRoomId = function (roomId, num) {
    var count = result.getUnreadMessageCountByRoomId(roomId);
    if (count == null||count=="") {
        count = 0;
    }
    count -= -num;
    if (count < 0) {
        count = 0;
    }
    uni.setStorageSync('unreadMessageCountByRoomId:'+roomId, count);
    setTimeout(() => {
        uni.$emit("changeUnreadMessageCountByRoomId:"+roomId, count);
    }, 10);
}


/**
 * 未读的消息
 * @return {Object} 未读的消息
 */
result.getUnreadMessageById = function (id) {
    return uni.getStorageSync('unreadMessageById:'+id);
}

/**
 * 消息是否未读
 */
result.isUnreadMessage = function (id) {
    var arr = result.getUnreadMessageById(id);
    if (arr==null||arr.length==0||arr=="") {
        console.log("isUnreadMessage:"+id);
        return false;
    }
    return true;
}

result.addUnreadMessage = function (data) {
    result.addUnreadMessageCount(1);
    uni.setStorageSync('unreadMessageById:'+data.id, 1);
    this.addUnreadMessageCountByRoomId(data.roomId, 1);
}

/**
 * 删除未读消息
 */
result.removeUnreadMessage = function (data) {
    var arr = this.getUnreadMessageById(data.id);
    if (arr == null||arr=="") {
        return null;
    }
    uni.removeStorageSync('unreadMessageById:'+data.id);
    this.addUnreadMessageCountByRoomId(data.roomId, -1);

    result.addUnreadMessageCount(-1);
}

/**
 * 
 * @returns 
 */

result.getSelf = function () {
    return uni.getStorageSync('ovoSelfInfo');
}

result.setSelf = function (data) {
    uni.setStorageSync('ovoSelfInfo', data);
    setTimeout(() => {
        uni.$emit("changeOvoSelfInfo", data);
    }, 10);
}

result.getSexualOrientationMap = function () {
    return uni.getStorageSync('sexualOrientationMap');
}

result.setSexualOrientationMap = function (data) {
    uni.setStorageSync('sexualOrientationMap', data);
    setTimeout(() => {
        uni.$emit("changeSexualOrientationMap", data);
    }, 10);
}

result.setEmotionalOrientationMap = function (data) {
    uni.setStorageSync('emotionalOrientationMap', data);
    setTimeout(() => {
        uni.$emit("changeEmotionalOrientationMap", data);
    }, 10);
}

result.getEmotionalOrientationMap = function () {
    return uni.getStorageSync('emotionalOrientationMap');
}


result.toSexualOrientationPlus = function (sexualOrientationCode, gender) {
    if (sexualOrientationCode == "male" && gender == 1) {
        return "Gay";
    }
    if (sexualOrientationCode == "woman" && gender == 0) {
        return "Les";
    }
    if ((sexualOrientationCode == "male" && gender == 0) ||
        (sexualOrientationCode == "woman" && gender == 1)) {
        return "异性恋";
    }
    return this.getSexualOrientationMap()[sexualOrientationCode] == null ? "" : this.getSexualOrientationMap()[sexualOrientationCode];

}


result.setSadomasochismAttrMap = function (data) {
    uni.setStorageSync('sadomasochismAttrMap', data);
    setTimeout(() => {
        uni.$emit("changeSadomasochismAttrMap", data);
    }
    , 10);
}

result.getSadomasochismAttrMap = function () {
    return uni.getStorageSync('sadomasochismAttrMap');
}

result.getLocation = function () {
    
    uni.getLocation({
        type: 'gcj02',
        success: function (res) {
            kt.request.request({
                api: api.business.ovo.userBind.updateLocation,
                data: {
                    latitude: res.latitude,
                    longitude: res.longitude
                },
                stateSuccess:(res1)=>{
                    uni.setStorageSync('ovoSelfInfo', res1.data);
                    uni.setStorageSync('pageGetLocationFail', "0");
                    setTimeout(() => {
                        uni.$emit("changeOvoSelfInfo", res1.data);
                    },10);
                }
            })
        }
    });

}


result.setPost= function (data) {
    // 将post存入缓存
    uni.setStorageSync('ovoPostById:'+data.id, data);
    // 将缓存post的key存入缓存
    var ovoPostList = uni.getStorageSync('ovoPostList');
    if(ovoPostList == ""||ovoPostList == null){
        ovoPostList = [];
    }
    if(ovoPostList.indexOf(data.id) == -1){
        ovoPostList.push(data.id);
    }
    // 如果缓存post的key超过300个，删除第一个
    if(ovoPostList.length > 300){
        uni.removeStorageSync('ovoPostById:'+ovoPostList[0]);
        ovoPostList.splice(0,1);
    }

    uni.setStorageSync('ovoPostList', ovoPostList);


    setTimeout(() => {
        uni.$emit("changeOvoPost", data);
    }, 10);
}

result.getPost = function (id) {
    return uni.getStorageSync('ovoPostById'+id);
}


export default result;