<template>
  <view class="post">
    <!-- 发布时间 -->
    <view v-if="mode == 'home'" class="post-time" style="margin-bottom: 20rpx;">
      <text>发布时间：</text>
      <text>{{ toDateText(bodyData.gmtCreate) }}</text>
    </view>

    <view class="post-content">
      <view v-if="bodyData.content != null">
        <view v-for="(item, index) in bodyData.content.split('\n')">
          {{ item }}
        </view>
      </view>
    </view>

    <image v-if="bodyData.imageList.length == 1" @click="previewImage($kt.file.visit(bodyData.imageList[0].fileId))"
      :src="$kt.file.visit(bodyData.imageList[0].fileId)" :style="{
        'border-radius': '20rpx',
        'marginRight': '10rpx'
      }" style="background-color: rgba(0,0,0,0);position: relative;" mode="widthFix">
    </image>

    <image v-if="bodyData.imageList.length > 1" v-for="(item, index) in bodyData.imageList"
      @click="previewImage($kt.file.visit(item.fileId))" :src="$kt.file.visit(item.fileId)" :style="{
        'border-radius': '20rpx',
        'marginRight': '10rpx'
      }" style="background-color: rgba(0,0,0,0);position: relative;"
      :class="bodyData.imageList.length == 2 ? 'img2' : bodyData.imageList.length > 2 ? 'img3' : ''" mode="aspectFill">
    </image>



    <!-- 遮挡 -->
    <view class="occlusion" v-if="mode == 'home' || mode == 'community'"
      @click="$kt.util.navTo('/pages/public/post-body?postId=' + bodyData.id)"></view>
  </view>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "community",
    },
    bodyData: {
      type: Object,
      default: () => ({
        content: "content",
        imageList: [
          {
            fileId: "fileId",
          },
        ],
      }),
    },
  },
  methods: {
    imageListToUrls(imageList) {
      let urls = [];
      imageList.forEach((image) => {
        urls.push(this.$kt.file.visit(image.fileId));
      });
      return urls;
    },
    /**
     * 查看图片
     */
    previewImage(src) {
      var imageUrlList = this.imageListToUrls(this.bodyData.imageList);
      uni.previewImage({
        current: src,
        urls: imageUrlList,
      });
    },
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
  },
};
</script>

<style lang="scss" scoped>
.post {
  position: relative;

  .occlusion {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .post-time {
    text-align: right;
    font-size: 24rpx;
    color: #999999;
  }

  .post-content {
    font-size: 30rpx;
    color: #333333;
    margin-bottom: 20rpx;
    // 文字间距
    letter-spacing: 2rpx;
  }
}

.img2 {
  width: 320rpx;
  height: 320rpx;
  border-radius: 10rpx;
}

.img2:active {
  opacity: .7;
}

.img3 {
  width: 222rpx;
  height: 222rpx;
  border-radius: 10rpx;
}
</style>
