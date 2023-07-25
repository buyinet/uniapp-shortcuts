<template>
	<view>
		<view :style="'height:' + statusBarHeight + 'px'"></view>

		<view style="height: 48px;"></view>
		<view class="box">
			<view>
				<textarea class="textarea" maxlength="-1" style="min-height: 200rpx;" :auto-height="true"
					v-model="requestParam.text" placeholder="请输入内容" placeholder-class="textarea-placeholder" />
			</view>

			<view style="height: 60rpx;"></view>

			<kt-button @click="a()">生成文本</kt-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: 0,
			requestParam: {
				text: "",
				audioSrc: "",
			}
		}
	},
	created() {
		this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	},
	
	mounted() {
		this.readFile("AA Reader/voice.m4a");
	},

	methods: {
		toWeb(src) {
			var src1 = encodeURIComponent(src);
			uni.navigateTo({
				url: "/pages/web-view-page?src=" + src1
			});
		},
		a() {
			var text = this.requestParam.text;
			var enText = encodeURI(text);
			plus.runtime.openURL(`shortcuts://run-shortcut?name=goodbuddy&input=${enText}`);
		},
		// 读取mp3文件
		readFile(filePath) {
			const res = wx.getSystemInfoSync()
			const innerAudioContext = wx.createInnerAudioContext();
			innerAudioContext.autoplay = true;
			innerAudioContext.src = filePath
			innerAudioContext.onPlay(() => {
				console.log("")
			});
			innerAudioContext.onError(res => {
				console.log(rees.errCode)
				console.log(res.errMsg)
			});
		},
	}
}
</script>

<style lang="scss" scoped>
.box {
	padding: 30rpx;
	box-sizing: border-box;
}

.textarea {
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
