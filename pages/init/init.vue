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
		toWeb(src){
			var src1=encodeURIComponent(src);
			uni.navigateTo({
				url:"/pages/web-view-page?src="+src1
			})
		},
		a(){
			this.toWeb("https://www.taobao.com");
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
