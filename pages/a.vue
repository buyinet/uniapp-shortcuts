<template>
	<view>
		<view :style="'height:' + statusBarHeight + 'px'"></view>
		<view style="height: 48px;"></view>
		<view class="box">
			<view>
				<textarea class="textarea" maxlength="-1" style="min-height: 200rpx;" :auto-height="true"
					v-model="requestParam.text" placeholder="请输入内容" placeholder-class="textarea-placeholder" />
			</view>
			
			<image 
			:src="$kt.file.byPath('image/test1.png')"
			@click="pImg()"
			></image>
			
			<view style="height: 60rpx;"></view>

			<kt-button @click="a()">生成文本</kt-button>
			
			<view style="height: 20rpx;"></view>

			<kt-button @click="iosSpeechToVoice(requestParam.text)">播放</kt-button>
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
		this.iosSpeechToVoice("123")
	},


	mounted() {
	},
	

	methods: {
		
		
		iosSpeechToVoice(text) {
			console.log(text);
			 uni.speak({text:text})
			// var AVSpeechSynthesizer = plus.ios.importClass('AVSpeechSynthesizer');
			// var AVSpeechUtterance = plus.ios.importClass('AVSpeechUtterance');
			// var AVSpeechSynthesisVoice = plus.ios.import('AVSpeechSynthesisVoice');
			// var sppech = new AVSpeechSynthesizer();
			// var voice = AVSpeechSynthesisVoice.voiceWithLanguage('zh-CN');
			// var utterance = AVSpeechUtterance.speechUtteranceWithString(text);
			// // utterance.plusSetAttribute("rate",30.1);
			// utterance.setVoice(voice);
			// sppech.speakUtterance(utterance);
			// //停止
			// sppech.stopSpeakingAtBoundary(0);
			// //暂停
			// sppech.pauseSpeakingAtBoundary(90);
			// //继续
			// sppech.continueSpeaking(90);
			// plus.ios.deleteObject(voice);
			// plus.ios.deleteObject(utterance);
			// plus.ios.deleteObject(sppech);
		},
		exportFile() {

		    },
		toWeb(src) {
			var src1 = encodeURIComponent(src);
			uni.navigateTo({
				url: "/pages/web-view-page?src=" + src1
			});
		},
		pImg(){
			var test1=this.$kt.file.byPath('image/test1.png');
			uni.previewImage({
				urls:[test1],
				current:0
			})
		},
		
		a() {
			var text = this.requestParam.text;
			var enText = encodeURI(text);
			plus.runtime.openURL(`shortcuts://run-shortcut?name=goodbuddy&input=${enText}`);
		},
		// 读取mp3文件
		readFile(filePath) {
			
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
