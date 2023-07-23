<template>
  <view class="t-info" @click="click" :style="'color:' + (highlight ? '#FF6C6C;' : '#000;')">
    <avatar :size="avatarSize" :fileId="ovoUserInfo.user.fileIdOfAvatar"
    :online="ovoUserInfo.user.online"
    ></avatar>

    <view class="t-text">
      <view style="font-size: 32rpx">
        <text class="t-has-text" :style="'color:' + nicknameColor + ';font-size:' + nicknameFontSize + ';'">
          {{ ovoUserInfo.user.nickname }}
        </text>
        <text v-if="distanceShow" class="t-distance">
          <text class="t-has-text">
            {{ locationText }}
          </text>

          <text class="t-has-text" v-if="distanceInShow && distance != null">
            {{ "/" }}{{ distanceText }}
          </text>

          <text v-if="distanceInShow && hasPosition && distance == null" @click="toShowDistanceClick()">
            {{ " / " }} <text class="to-show-distance" style="color: #333">显示距离</text>
          </text>
        </text>
      </view>

      <view style="height: 7rpx"></view>

      <view v-if="attrShow" class="t-has-text" style="font-size: 26rpx; color: #666">
        <view class="gender-age" :style="
          'background-color:' +
          (ovoUserInfo.user.gender == '1' ? 'rgb(22,169,250)' : '#FF6C6C')
        ">
          <image :src="
            ovoUserInfo.user.gender == '1'
              ? $kt.file.byPath('image/icon/gender1.svg')
              : $kt.file.byPath('image/icon/gender0.svg')
          " style="width: 20rpx; height: 20rpx" mode="widthFix"></image>
          {{ age }}
        </view>

        <!-- SM属性 -->
        <text :style="highlight ? 'color:rgba(255,255,255,1);' : 'color:#999;'" v-if="
          ovoUserInfo.sadomasochismAttrCode != null &&
          ovoUserInfo.sadomasochismAttrCode != ''
        ">
          {{ " / " }}{{ sadomasochismAttrName }}
        </text>

        <!-- 性取向 -->
        <text :style="highlight ? 'color:rgba(255,255,255,1);' : 'color:#999;'" v-if="
          ovoUserInfo.sexualOrientationCode != null &&
          ovoUserInfo.sexualOrientationCode != ''
        ">
          {{ " / " }}{{ sexualOrientationName }}
        </text>

        <!-- 性取向和兴趣取向之间的分割点 -->
        <text :style="highlight ? 'color:rgba(255,255,255,1);' : 'color:#999;'" v-if="
          ovoUserInfo.sexualOrientationCode != null &&
          ovoUserInfo.sexualOrientationCode != '' &&
          ovoUserInfo.emotionalOrientationList != null &&
          ovoUserInfo.emotionalOrientationList.length > 0
        ">
          {{ "·" }}
        </text>
        <!-- 兴趣取向 -->
        <text :style="highlight ? 'color:rgba(255,255,255,1);' : 'color:#999;'" v-if="
          ovoUserInfo.emotionalOrientationList != null &&
          ovoUserInfo.emotionalOrientationList.length > 0
        ">
          {{ emotionalOrientationMap[ovoUserInfo.emotionalOrientationList[0].code] }}
        </text>
      </view>

      <view v-if="publishDate != null" style="color: #666; font-size: 26rpx">
        <text class="t-has-text">
          {{ $kt.util.readableDate(publishDate) }}
        </text>
        <text>发布</text>
      </view>
      <view v-if="bottomText != null && bottomText != ''" style="color: #333; font-size: 30rpx;">
        <view class="t-has-text" style="display:inline-block;">
          {{ bottomText }}
        </view>
        <view v-if="bottomTime != null"
          style="font-size: 24rpx;color: #999;display:inline-block;vertical-align:bottom;margin-left: 10rpx;">
          {{ $kt.util.readableDate(bottomTime) }}
        </view>
      </view>

      <view v-if="bottomTextShow">
        <view style="height: 15rpx"></view>
        <view :style="highlight ? 'color:rgba(255,255,255,1);' : 'color:#999;'"
          v-if="ovoUserInfo.introduction != null && ovoUserInfo.introduction != ''" class="t-bottom-text">
          {{ ovoUserInfo.introduction }}
        </view>
        <view :style="highlight ? 'color:rgba(255,255,255,1);' : 'color:#999;'" v-else class="t-bottom-text">
          无个人介绍
        </view>
      </view>

    </view>
    <!-- 关注按钮 -->
    <view v-if="showFollowButton"
    :style="{
      'backgroundColor': ovoUserInfo.user.gender == '0' ? '#FF6C6C' : 'rgb(22,169,250)',
    }"
     class="t-follow-button">
      <view>关注</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "user-card",
  props: {
    nicknameColor: {
      type: String,
      default: "#333",
    },
    nicknameFontSize: {
      type: String,
      default: "30rpx",
    },

    attrShow: {
      type: Boolean,
      default: true
    },
    bottomText: {
      type: String,
      default: null,
    },
    bottomTime: {
      type: Number || String,
      default: null,
    },
    // 头像大小
    avatarSize: {
      type: String,
      default: "100rpx",
    },
    // 关注按钮
    showFollowButton: {
      type: Boolean,
      default: false,
    },
    //高亮
    highlight: {
      type: Boolean,
      default: false,
    },
    publishDate: {
      type: Number,
      default: null,
    },
    bottomTextShow: {
      type: Boolean,
      default: true,
    },
    distanceShow: {
      type: Boolean,
      default: true,
    },
    distanceInShow: {
      type: Boolean,
      default: true,
    },
    ovoUserInfo: {
      type: Object,
      default: {
        emotionalOrientationList: [
          {
            code: "sapiosexual",
            genderLimit: -1,
            id: 1,
            name: "加载中",
            sexualOrientationLimit: false,
          },
        ],
        gmtCreate: 1685810183318,
        gmtModified: 1685811147296,
        id: 16,
        introduction: "",
        sadomasochismAttrCode: "加载中",
        sexualOrientationCode: "加载中",
        user: {
          birthday: 28800000,
          fileIdOfAvatar: null,
          gmtCreate: 1685797143441,
          gmtModified: 1685811147275,
          id: 424594399051781,
          nickname: "加载中...",
          gender: "-1",
          roles: [
            {
              code: "user",
              gmtCreate: 1681730486000,
              gmtModified: 1681145855686,
              id: 3,
              name: "普通用户",
            },
          ],
        },
        location: {
          longitude: 0,
          latitude: 0,
          country: null,
          province: null,
          city: null,
        },
        userId: 424594399051781,
      },
    },
  },
  data() {
    let sexualOrientationMap = this.$ovo.getSexualOrientationMap();
    return {
      textOpcaity: 1,
      sexualOrientationMap,
      sexualOrientationName: "",
      sadomasochismAttrName: "",
      age: 0,
      // 距离
      distance: null,
      // 距离显示的文本
      distanceText: "",
      userSelf: {
        location: {
          longitude: 0,
          latitude: 0,
          // 国家
          country: null,
          // 省份
          province: null,
          // 城市
          city: null,
        },
        gender: "-1",
      },
      // 位置文字
      locationText: "",
      // 是否有经纬度信息
      hasPosition: false,
      toShowDistanceOpt: false,
      publishDateText: "",
      emotionalOrientationMap: {},
    };
  },
  created() {
    this.emotionalOrientationMap=this.$ovo.getEmotionalOrientationMap();
   },
  // 初始化
  mounted() {
    uni.$on("changeOvoSelfInfo", (ovoUserInfo) => {
      this.userSelf = ovoUserInfo;
      this.locationOpt();
    });

    uni.$on("changeSexualOrientationMap", (sexualOrientationMap) => {
      this.sexualOrientationName = this.$ovo.toSexualOrientationPlus(
        this.ovoUserInfo.sexualOrientationCode,
        this.ovoUserInfo.user.gender
      );
    });

    uni.$on("changeSadomasochismAttrMap", (sadomasochismAttrMap) => {
      // 兴趣取向
      this.sadomasochismAttrName = this.$ovo.getSadomasochismAttrMap()[
        this.ovoUserInfo.sadomasochismAttrCode
      ];
    });

    //this.$api.business.ovo.emotionalOrientation.getMap,
    uni.$on("changeEmotionalOrientationMap", (emotionalOrientationMap) => {
      this.emotionalOrientationMap = emotionalOrientationMap;
    });


  },
  methods: {
    /**
     * 
     * @param {*} dateTime 时间戳
     */
    toDateText(dateTime) {

      // 获取当前时间戳
      let now = new Date().getTime();
      // 如果小于一分钟，显示刚刚
      if (now - dateTime < 60 * 1000) {
        return "刚刚";
      }
      // 如果小于五分钟，显示几分钟前
      if (now - dateTime < 5 * 60 * 1000) {
        return "5分钟前";
      }
      // 如果大于五分钟，小于一小时，显示几分钟前
      if (now - dateTime < 60 * 60 * 1000) {
        return "几分钟前";
      }
      // 获取今天的年月日和dateTime的年月日
      let nowDate = new Date(now);
      let dateTimeDate = new Date(dateTime);
      // 如果是同一天，显示hh:mm
      if (
        nowDate.getFullYear() == dateTimeDate.getFullYear() &&
        nowDate.getMonth() == dateTimeDate.getMonth() &&
        nowDate.getDate() == dateTimeDate.getDate()
      ) {
        return this.$kt.util.dateFromat(dateTime, "hh:mm");
      }
      // 如果是昨天，显示昨天 hh:mm
      if (
        nowDate.getFullYear() == dateTimeDate.getFullYear() &&
        nowDate.getMonth() == dateTimeDate.getMonth() &&
        nowDate.getDate() - dateTimeDate.getDate() == 1
      ) {
        return "昨天 " + this.$kt.util.dateFromat(dateTime, "hh:mm");
      }
      // 如果是今年，显示MM-dd hh:mm
      if (
        nowDate.getFullYear() == dateTimeDate.getFullYear() &&
        nowDate.getMonth() == dateTimeDate.getMonth()
      ) {
        return this.$kt.util.dateFromat(dateTime, "MM-dd hh:mm");
      }
      // 如果是去年，显示yyyy-MM-dd hh:mm
      return this.$kt.util.dateFromat(dateTime, "yyyy-MM-dd hh:mm");

    },

    openSetting() {
      uni.openSetting({
        success: (res) => {
          if (res.authSetting["scope.userLocation"]) {
            this.$ovo.getLocation();
          }
        },
      });
    },
    toShowDistanceClick() {
      this.toShowDistanceOpt = true;
      setTimeout(() => {
        this.toShowDistanceOpt = false;
      }, 500);
      uni.getSetting({
        success: (res) => {
          console.log(res);
          if (res.authSetting["scope.userLocation"] == null) {
            this.$ovo.getLocation();
          } else if (!res.authSetting["scope.userLocation"]) {
            this.openSetting();
          } else {
            // this.getLocation();
            this.$ovo.getLocation();
          }
        },
      });
    },
    async click() {
      await new Promise((resolve) => {
        setTimeout(() => {
          this.$emit("click");
          resolve("");
        }, 10);
      });

      console.log("cardClick", this.toShowDistanceOpt);

      if (this.toShowDistanceOpt) {
        return false;
      }
      this.textOpcaity = 0.5;
      setTimeout(() => {
        this.textOpcaity = 1;
      }, 500);
    },
    // 根据经纬度计算距离，单位为米
    getDistance(lat1, lng1, lat2, lng2) {
      const lat1Rad = (lat1 * Math.PI) / 180;
      const lat2Rad = (lat2 * Math.PI) / 180;
      const lng1Rad = (lng1 * Math.PI) / 180;
      const lng2Rad = (lng2 * Math.PI) / 180;

      const a = lat1Rad - lat2Rad;
      const b = lng1Rad - lng2Rad;

      const s =
        2 *
        Math.asin(
          Math.sqrt(
            Math.pow(Math.sin(a / 2), 2) +
            Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.pow(Math.sin(b / 2), 2)
          )
        );

      let result = s * 6378137;
      result = Math.round(result * 10000) / 10000;
      return result;
    },
    // 距离显示的文本
    getDistanceText(distance) {
      if (distance < 1) {
        return "1m";
      } else if (distance < 1000) {
        // 去除小数点后面的数字
        distance = parseInt(distance);
        return distance + "m";
      } else {
        return (distance / 1000).toFixed(1) + "km";
      }
    },
    getLocationText(location) {
      if (location == null || location == undefined) {
        return "未知";
      }
      if (location.city != null) {
        return location.city;
      }
      if (location.province != null) {
        return location.province;
      }
      if (location.country != null) {
        return location.country;
      }
      return "未知";
    },
    locationOpt() {
      this.locationText = this.getLocationText(this.ovoUserInfo.location);
      if (
        this.ovoUserInfo.location != null &&
        this.ovoUserInfo.location.latitude != null &&
        this.ovoUserInfo.location.longitude != null
      ) {
        this.hasPosition = true;
      }

      if (
        this.ovoUserInfo.location != null &&
        this.ovoUserInfo.location.latitude != null &&
        this.ovoUserInfo.location.longitude != null &&
        this.userSelf.location != null &&
        this.userSelf.location.latitude != null &&
        this.userSelf.location.longitude != null
      ) {
        this.distance = this.getDistance(
          this.ovoUserInfo.location.latitude,
          this.ovoUserInfo.location.longitude,
          this.userSelf.location.latitude,
          this.userSelf.location.longitude
        );
        this.distanceText = this.getDistanceText(this.distance);
      }
      this.$forceUpdate();
    },
    initAge() {
      // 性取向
      this.sexualOrientationName = this.$ovo.toSexualOrientationPlus(
        this.ovoUserInfo.sexualOrientationCode,
        this.ovoUserInfo.user.gender
      );
      // 兴趣取向
      this.sadomasochismAttrName = this.$ovo.getSadomasochismAttrMap()[
        this.ovoUserInfo.sadomasochismAttrCode
      ];

      
      // 年龄
      var birthdayData = new Date(this.ovoUserInfo.user.birthday);
      // 当前时间
      var timeNowData = new Date();
      // 年龄
      var age = timeNowData.getFullYear() - birthdayData.getFullYear();
      if (
        timeNowData.getMonth() < birthdayData.getMonth() ||
        (timeNowData.getMonth() == birthdayData.getMonth() &&
          timeNowData.getDate() < birthdayData.getDate())
      ) {
        age--;
      }
      this.age = age;
    },

  },
  watch: {

    ovoUserInfo: {
      handler(val, oldVal) {
        this.userSelf = this.$ovo.getSelf();
        this.initAge();

        if (
          this.userSelf != null &&
          this.userSelf != "" &&
          this.userSelf.location != null &&
          this.userSelf.location != "" &&
          this.userSelf.location.latitude != null &&
          this.userSelf.location.latitude != ""
        ) {
          this.locationOpt();
        }

        this.$forceUpdate();
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.gender-age {
  display: inline-block;
  color: #ffffff;
  background-color: #ff6781;
  font-weight: lighter;
  padding: 0 5rpx 0 5rpx;
  border-radius: 10rpx;
  margin-right: 10rpx;
}

.t-info {
  position: relative;
  margin-top: 10rpx;
  margin-bottom: 10rpx;

  .t-text {
    display: inline-block;
    margin-left: 30rpx;
    vertical-align: top;
    width: calc(100% - 150rpx);
  }

  .t-distance {
    display: inline-block;
    color: #999;
    font-size: 26rpx;
    float: right;
  }

  .t-bottom-text {
    font-size: 26rpx;
    color: #999;
  }
}

.t-info {
  .t-hash-text {
    pointer-events: auto;
    /* 启用点击事件 */
  }

  .to-show-distance {
    pointer-events: none;
    /* 启用点击事件 */
  }

}

.t-follow-button {
  position: absolute;
  right: 0;
  top: 0;
  width: 150rpx;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  border-radius: 30rpx;
  background-color: #ff6781;
  color: #ffffff;
  font-size: 26rpx;
  margin-right: 30rpx;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
}

.t-follow-button:active {
  opacity: 0.7;
}

.t-info:active{
  .t-has-text {
    opacity: .7;
  }
}
</style>
