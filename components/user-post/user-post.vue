<template>
  <view>
    <user-card v-if="mode == 'community' || mode == 'body'" :ovoUserInfo="bodyDataCopy.ovoUser"
      :publishDate="bodyDataCopy.gmtCreate" :bottomTextShow="false"></user-card>
    <view style="height: 10rpx"></view>
    <userPostContent :bodyData="bodyDataCopy" :mode="mode"></userPostContent>


    <view style="height: 10rpx"></view>

    <view style="height: 20rpx"></view>

    <view>
      <address-lab v-if="bodyDataCopy.addressTitleOfSelect != null && bodyDataCopy.addressTitleOfSelect != ''
        " :addressTitle="bodyDataCopy.addressTitleOfSelect"></address-lab>
      <eye-lab v-if="bodyDataCopy.visibleCode != null && bodyDataCopy.visibleCode != '' && bodyDataCopy.visibleCode != 'all'"
        :visibleCode="bodyDataCopy.visibleCode"></eye-lab>
    </view>


    <!-- 点赞、留言、收藏 -->
    <view v-if="bodyDataCopy.auditStatusCode == 'pass'" class="post-list-content-item-bottom">
      <view style="position: absolute; left: 10rpx" :style="{
        opacity: bodyDataCopy.auditStatusCode == 'pass' ? 1 : 0.4,
      }" @click="giftClick()" class="post-list-content-item-bottom-item">
        <image :src="$kt.file.byPath('image/icon/gift.svg')" mode="widthFix"
          class="post-list-content-item-bottom-item-icon"></image>
      </view>

      <view class="post-list-content-item-bottom-item">

        <image :src="$kt.file.byPath('image/icon/forward.svg')" mode="widthFix"
          class="post-list-content-item-bottom-item-icon"></image>

      </view>
      <view :style="isLikeOpting ? 'opacity:.6;' : 'opacity:1;'" @click="bodyDataCopy.likeFlag ? toUnLike() : toLike()"
        class="post-list-content-item-bottom-item">
        <image :style="isLikeOpting ? 'opacity:.6;' : 'opacity:1;'" :src="bodyDataCopy.likeFlag
          ? $kt.file.byPath('image/icon/likeFill.svg')
          : $kt.file.byPath('image/icon/like.svg')
          " mode="widthFix" class="post-list-content-item-bottom-item-icon"></image>
        <text v-if="bodyDataCopy.likeCount > 0" :style="{
          color: bodyDataCopy.likeFlag ? '#ff6781' : '#333333',
        }">{{ bodyDataCopy.likeCount }}</text>
      </view>
      <view v-if="mode == 'community' || mode == 'home'"
        @click="$kt.util.navTo('/pages/public/post-body?postId=' + bodyData.id)" style="margin-right: 20rpx"
        class="post-list-content-item-bottom-item">
        <image :src="$kt.file.byPath('image/icon/message.svg')" mode="widthFix"
          class="post-list-content-item-bottom-item-icon"></image>
        <text v-if="bodyDataCopy.commentCount > 0">{{ bodyDataCopy.commentCount }}</text>
      </view>
    </view>
    <view v-if="bodyDataCopy.auditStatusCode == 'wait'">
      <view style="
      position: relative;
      background-color:rgba(0,0,0,.6);width:100%;
      border-radius: 10rpx;
      padding:20rpx;
      box-sizing: border-box;
      text-align: center;
      ">
        <image style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10rpx;
      opacity: 0.05;
      " :src="$kt.file.byPath('image/zebraStripe.jpg')"></image>
        <view style="color: #f8f8f8;font-size:30rpx;font-weight: bold;">
          审核中
        </view>
      </view>
    </view>

    <view v-if="bodyDataCopy.auditStatusCode == 'reject'" class="post-list-content-item-bottom">
      <view style="
      position: relative;
      background-color:rgba(255,0,0,.6);width:100%;
      border-radius: 10rpx;
      padding:20rpx;
      box-sizing: border-box;
      text-align: center;
      ">
        <image style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10rpx;
      opacity: 0.05;
      " :src="$kt.file.byPath('image/zebraStripe.jpg')"></image>
        <view style="color: #f8f8f8;font-size:30rpx;font-weight: bold;">
          审核不通过
        </view>
        <view style="color: #f8f8f8;font-size:28rpx;margin-top:10rpx;">
          {{ bodyDataCopy.auditRejectReason }}
        </view>
      </view>
    </view>

    <gift-popup ref="giftPopup"></gift-popup>
    <view style="height: 10rpx;"></view>
    <view style="
                    width: 100%;
                    height: 5rpx;
                    border-radius: 50rpx;
                    background-color: #f8f8f8;
                    "></view>
    <view style="height: 10rpx;"></view>
  </view>
</template>

<script>
import userPostContent from "./userPostContent.vue";

export default {
  components: {
    userPostContent,
  },
  props: {
    mode: {
      type: String,
      // 社区、主页
      default: "community",
    },
    bodyData: {
      type: Object,
      default() {
        return {
          likeCount: 0,
          addressOfSelect: "桥头陈村车站汽车服务有限公司",
          addressTitleOfSelect: "车栈婚车",
          adCode: "330109",
          adCodeOfSelect: "330109",
          auditStatusCode: "wait",
          city: "杭州市",
          cityOfSelect: "杭州市",
          content: "1111222",
          district: "萧山区",
          districtOfSelect: "萧山区",
          gmtCreate: 1686312747458,
          gmtModified: 1686312747458,
          id: 426706313084933,
          imageList: [
            {
              fileId: 233,
              id: 426706315182085,
              postId: 426706313084933,
            },
          ],
          latitude: 30.18534,
          latitudeOfSelect: 30.18534,
          longitude: 120.26457,
          longitudeOfSelect: 120.26457,
          province: "浙江省",
          provinceOfSelect: "浙江省",
          userId: 426705870446597,
          visibleCode: "all",
        };
      },
    },
  },
  data() {
    let appFront = this.$kt.i18n.getAppFront();
    return {
      isLikeOpting: false,
      isMe: false,
      bodyDataCopy: {
        likeFlag: false,
        likeCount: 0,
        commentCount: 0,
      },
    };
  },
  created() {
    this.navHeight = 44;
    // #ifdef MP-WEIXIN
    this.navHeight = uni.getSystemInfoSync().system.indexOf("ios") != -1 ? 44 : 48;
    // #endif
    uni.$on("changeOvoPost", (data) => {
      if (data.id == this.bodyData.id) {
        this.bodyDataCopy = data;
      }
    });


    uni.$on("postChange:postId:" + this.bodyData.id, (res)=>{
      console.log(res,"=-=-=");
      this.bodyDataCopy = res;
    });


    var userId = this.$ovo.getSelf().userId;
    if (userId == this.bodyData.userId) {
      this.isMe = true;
    }
  },
  methods: {
    giftClick() {
      if (this.mode == 'body') {
        this.$refs.giftPopup.open({
          toPostId: this.bodyData.id,
        });
      } else {
        this.$kt.util.navTo('/pages/public/post-body?postId=' + this.bodyData.id)
      }
    },

    toUnLike() {
      if (this.isLikeOpting) {
        return false;
      }

      var likeFlag = this.bodyDataCopy.likeFlag;

      this.bodyDataCopy.likeFlag = true;

      this.isLikeOpting = true;

      this.$kt.request.request({
        api: this.$api.business.ovo.post.unLike,
        isNoInterceptor: true,
        data: {
          id: this.bodyData.id,
        },
        stateSuccess: (res) => {
          this.bodyDataCopy.likeFlag = false;
          this.bodyDataCopy.likeCount = this.bodyDataCopy.likeCount-1;
          // this.bodyDataCopy.commentCount = res.data.commentCount;

          setTimeout(() => {
            this.isLikeOpting = false;
            this.getById(this.bodyData.id);
          }, 500);
        },
        stateFail: (res) => {
          // 跳转登录
          uni.navigateTo({
            url: '/pages/login/login'
          });

          this.bodyDataCopy.likeFlag = likeFlag;
          setTimeout(() => {
            this.isLikeOpting = false;
          }, 500);
        }
      });
    },

    toLike() {
      if (this.isLikeOpting) {
        return false;
      }


      var likeFlag = this.bodyDataCopy.likeFlag;

      this.bodyDataCopy.like = true;

      this.isLikeOpting = true;

      this.$kt.request.request({
        api: this.$api.business.ovo.post.like,
        isNoInterceptor: true,
        data: {
          id: this.bodyData.id,
        },
        stateSuccess: (res) => {
          this.bodyDataCopy.likeFlag = true;
          // this.bodyDataCopy.likeCount = res.data.likeCount;
          // this.bodyDataCopy.commentCount = res.data.commentCount;
          
          setTimeout(() => {
            this.isLikeOpting = false;
            this.getById(this.bodyData.id);
          }, 500);
        },
        stateFail: (res) => {
          // 跳转登录
          uni.navigateTo({
            url: '/pages/login/login'
          });

          this.bodyDataCopy.likeFlag = likeFlag;
          setTimeout(() => {
            this.isLikeOpting = false;
          }, 500);
        }
      });

      // this.$forceUpdate();
    },
    getById(id) {
      this.$kt.request.request({
        api: this.$api.business.ovo.post.getById,
        data: {
          id,
        },
        stateSuccess: (res) => {
          this.bodyDataCopy = res.data;
          this.$forceUpdate();
        },
      });
    },
    imageListToUrls(imageList) {
      let urls = [];
      imageList.forEach((image) => {
        urls.push(this.$kt.file.visit(image.fileId));
      });
      return urls;
    },
  },
  watch: {
    bodyData: {
      handler(val) {
        this.bodyDataCopy = val;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wair-audit {
  font-size: 24rpx;
  color: #333;
  border-radius: 10rpx;
  box-sizing: border-box;
  margin-bottom: 15rpx;
}

.post-list-content-item-bottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0rpx;
  margin-bottom: 20rpx;

  .post-list-content-item-bottom-item {
    display: flex;
    align-items: center;
    margin-left: 30rpx;
    font-size: 24rpx;
    color: #333333;

    .post-list-content-item-bottom-item-icon {
      width: 35rpx;
      height: 35rpx;
      margin-right: 10rpx;
    }
  }
}

.post-list-content-item-bottom-item:active {
  opacity: 0.5;
}

.btn:active {
  opacity: 0.5;
}
</style>
