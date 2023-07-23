<template>
	<view>
    <view
    :style="'height:'+statusBarHeight+'px'"
    ></view>
    
    <view
    style="height: 48px;"
    ></view>
		<view class="box">
			<kt-button
			@click="a()"
			>下载快捷捷径</kt-button>
      <view style="height: 20rpx;"></view>
			<kt-button
			@click="b()"
			>下载快捷捷径</kt-button>
      <view style="height: 20rpx;"></view>
			<kt-button
			@click="c()"
			>下载快捷捷径</kt-button>
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
    },
	methods:{
		a(){
			plus.runtime.openURL("https://www.baidu.com")
		},
		b(){
			
		},
		c(){
			
		}
	}
  }
</script>

<style lang="scss" scoped>
.box{
  padding: 30rpx;
  box-sizing: border-box;
}
</style>
