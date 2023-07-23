<template>
	<view>
    <view
    :style="'height:'+statusBarHeight+'px'"
    ></view>
    <view
    style="height: 48px;"
    ></view>
		<view class="box">
			<kt-button>下载快捷捷径</kt-button>
      <view style="height: 20rpx;"></view>
			<kt-button>下载快捷捷径</kt-button>
      <view style="height: 20rpx;"></view>
			<kt-button>下载快捷捷径</kt-button>
		</view>
	</view>
</template>

<script>
	export default {
    data(){
      return {
        statusBarHeight: 0,
      }
    },
    created(){
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
    }
  }
</script>

<style lang="scss" scoped>
.box{
  padding: 30rpx;
  box-sizing: border-box;
}
</style>
