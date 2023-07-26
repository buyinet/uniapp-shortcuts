<template>
	<view class="content">
		<view :style="'height:' + statusBarHeight + 'px'"></view>
		<view style="padding: 20rpx;
		box-sizing: border-box;
		">

			<view style="height: 200rpx;"></view>


			<textarea class="textarea" maxlength="-1" style="min-height: 200rpx;" :auto-height="true"
				v-model="requestParam.text" placeholder="请输入内容" placeholder-class="textarea-placeholder" />



			<view
			 class="text-view"
			 style="font-size: 30rpx;"
			>

				<template
				v-for="(item, index) in this.requestParam.text"
				>
					
				<text
				v-if="item!=' '"
				@dblclick="changeLocation(index)"
					:class="index <= requestParam.textIndex ? 'text-def text-readed' : 'text-def'">
					{{  item }}
				</text>

				<view
				v-if="item==' '"
				style="width: 10rpx;display: inline-block;"
				@dblclick="changeLocation(index)"
				></view>

				
				</template>
				
			</view>


			<view style="height: 200rpx;"></view>
			<kt-button type="primary" @click="start()">开始播放</kt-button>

			<view style="height: 200rpx;"></view>
			<kt-button type="primary" @click="init">初始化</kt-button>
			<view style="height: 20rpx;"></view>

			<kt-button type="primary" @click="speakUtterance">开始播放/重新生成音频</kt-button>
			<view style="height: 20rpx;"></view>
			<kt-button type="primary" @click="pauseSpeakingAtBoundary">暂停播放/生成</kt-button>
			<view style="height: 20rpx;"></view>

			<kt-button type="primary" @click="continueSpeaking">继续播放/生成</kt-button>
			<view style="height: 20rpx;"></view>

			<kt-button type="primary" @click="stopSpeakingAtBoundary">停止播放/生成</kt-button>
			<view style="height: 20rpx;"></view>

			<kt-button type="primary" @click="writeUtterance">生成音频到本地路径</kt-button>
			<view style="height: 20rpx;"></view>

			<kt-button type="primary" @click="isSpeaking">是否在播放</kt-button>
			<view style="height: 20rpx;"></view>

			<kt-button type="primary" @click="isPaused">是否暂停播放</kt-button>
			<view style="height: 20rpx;"></view>


			<kt-button type="primary" @click="getSpeechVoicesLanguage">获取支持播放的语音</kt-button>
		</view>
	</view>
</template>

<script>
const KJSpeechSynthesizer = uni.requireNativePlugin('KJ-SpeechSynthesizer');
const KJSpeechSynthesizerWrite = uni.requireNativePlugin('KJ-SpeechSynthesizerWrite'); //注意：如果需要同时播放和生成音频，可以用这个组件


export default {
	data() {
		return {
			statusBarHeight: 0,
			title: 'Hello',
			filePath: plus.io.convertLocalFileSystemURL("_doc/KJSpeechSynthesizer/test.caf"),
			requestParam: {
				text: "",
				textIndex: 0
			},
			map:new Map(),
			
			// 朗读的内容
			readContent: '',

			// 暂停的位置
			pauseIndex: 0,

		}
	},

	mounted() {

		this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	},

	methods: {
		start(){
			this.readContent=this.requestParam.text;
			this.init();
			this.speakUtterance();
		},

		init() {
			
			var dic = {
				"speechString": this.readContent, //文本
				"usesApplicationAudioSession": true, //是否使用了音频会话, ios13及以上才支持
				"mixToTelephonyUplink": true, //是否混合到电话上行链路 ios13及以上才支持
				"language": "zh-CN", //语言
				"rate": .2, //速率
				"volume": 1, //音量, 0-1 
				"pitchMultiplier": 1, //声调, 0.5-2
				"prefersAssistiveTechnologySettings": true, //是否辅助技术, ios14及以上才支持
				"preUtteranceDelay": 0.0, //播放后的延
				"postUtteranceDelay": 0.0 //播放前的延迟
			}
			
			this.speakUtterance();


			KJSpeechSynthesizer.init(dic, (res) => {
				console.log("init:" + JSON.stringify(res));
				if (res.type == "init") {
					console.log("初始化完成")
				} else if (res.type == "didStartSpeechUtterance") {
					console.log("开始播放/重新生成")
				} else if (res.type == "didFinishSpeechUtterance") {
					console.log("完成播放/生成")
					//this.init();
				} else if (res.type == "didPauseSpeechUtterance") {
					console.log("暂停播放/生成")
				} else if (res.type == "didContinueSpeechUtterance") {
					console.log("继续播放/生成")
				} else if (res.type == "didCancelSpeechUtterance") {
					console.log("取消播放/生成")
				} else if (res.type == "willSpeakRangeOfSpeechString") {
					this.requestParam.textIndex = res.location-(-this.pauseIndex);
					console.log("播放/生成文本的位置，第" + res.location + "字符")
				}
			})

			KJSpeechSynthesizerWrite.init(dic, (res) => {
				console.log("Writeinit:" + JSON.stringify(res));
				if (res.type == "init") {
					console.log("Write初始化完成")
				} else if (res.type == "didStartSpeechUtterance") {
					console.log("Write开始播放/重新生成")
				} else if (res.type == "didFinishSpeechUtterance") {
					console.log("Write完成播放/生成")
					const innerAudioContext = uni.createInnerAudioContext();
					innerAudioContext.autoplay = true;
					innerAudioContext.src = this.filePath;
					innerAudioContext.onPlay(() => {
						console.log('开始播放');
					});
					innerAudioContext.onError((res) => {
						console.log(res.errMsg);
						console.log(res.errCode);
					});
				} else if (res.type == "didPauseSpeechUtterance") {
					console.log("Write暂停播放/生成")
				} else if (res.type == "didContinueSpeechUtterance") {
					console.log("Write继续播放/生成")
				} else if (res.type == "didCancelSpeechUtterance") {
					console.log("Write取消播放/生成")
				} else if (res.type == "willSpeakRangeOfSpeechString") {
					console.log("Write播放/生成文本的位置，第" + res.location + "字符")
				}
			})
		},

		// 根据index修改播放位置
		changeLocation(index) {
			this.pauseIndex = index;
			this.readContent=this.requestParam.text.substring(this.pauseIndex);
			this.stopSpeakingAtBoundary();
			setTimeout(()=>{
				this.init();
				this.speakUtterance();
			},100);

		},


		speakUtterance() {
			KJSpeechSynthesizer.speakUtterance((res) => {
				console.log("speakUtterance:" + JSON.stringify(res))
			});
		},
		pauseSpeakingAtBoundary() {
			KJSpeechSynthesizer.pauseSpeakingAtBoundary({
				"boundary": 0
			}, (res) => {
				console.log("pauseSpeakingAtBoundary:" + JSON.stringify(res))
			});
		},
		continueSpeaking() {
			KJSpeechSynthesizer.continueSpeaking((res) => {
				console.log("continueSpeaking:" + JSON.stringify(res))
			});
		},
		stopSpeakingAtBoundary() {
			KJSpeechSynthesizer.stopSpeakingAtBoundary({
				"boundary": 0
			}, (res) => {
				console.log("stopSpeakingAtBoundary:" + JSON.stringify(res))
			});
		},
		writeUtterance() {
			/**
			 * ios13及以上才支持
			 * */
			var dic = {
				"filePath": this.filePath,
				"commonFormat": 3, //写入文件时使用的处理格式 0(Other) 1(Float32) 2(Float64) 3(Int16) 4(Int32)
				"interleaved": false //是否使用交错处理格式
				// "settings": {
				//  "AVLinearPCMBitDepthKey": 16,
				//  "AVLinearPCMIsBigEndianKey": 0,
				//  "AVLinearPCMIsFloatKey": 0,
				//  "AVLinearPCMIsNonInterleaved": 0,
				//  "AVNumberOfChannelsKey": 1,
				//  "AVSampleRateKey": 22050
				// }
			}
			KJSpeechSynthesizerWrite.writeUtterance(dic, (res) => {
				console.log("writeUtterance:" + JSON.stringify(res));
			})
		},
		isSpeaking() {
			KJSpeechSynthesizer.isSpeaking((res) => {
				console.log("isSpeaking:" + JSON.stringify(res))
			});
		},
		isPaused() {
			KJSpeechSynthesizer.isPaused((res) => {
				console.log("isPaused:" + JSON.stringify(res))
			});
		},
		getSpeechVoicesLanguage() {
			KJSpeechSynthesizer.getSpeechVoicesLanguage((res) => {
				console.log("getSpeechVoicesLanguage:" + JSON.stringify(res))
			});
		}
	}
}
</script>


<style lang="scss" scoped>
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

.text-def {
	color: #666;
}

.text-readed {
	color: red;
}

.text-view{
	// 解决ios下英文单词换行的问题
	word-break: break-all;
	word-wrap: break-word;

}
</style>
