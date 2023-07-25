<template>
	<view>
    <view
    :style="'height:'+statusBarHeight+'px'"
    ></view>
    
    <view
    style="height: 48px;"
    ></view>
		<view class="box">
			<view>
				<textarea
				class="textarea"
					v-model="requestParam.text"
					placeholder="请输入内容"
					placeholder-class="textarea-placeholder"
				/>
			</view>

			<view style="height: 60rpx;"></view>
			
			<kt-button
			@click="a()"
			>生成文本</kt-button>
		</view>
	</view>
</template>

<script>
	export default {
    data(){
      return {
        statusBarHeight: 0,
		requestParam: {
			text:""
		}
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

.textarea{
	  width: 100%;
  height: 300rpx;
  border: 1px solid #ccc;
  border-radius: 10rpx;
  padding: 20rpx;
  box-sizing: border-box;
  font-size: 30rpx;
  line-height: 40rpx;
  color: #333;
  resize: none;
}
</style>
