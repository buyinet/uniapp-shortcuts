<template>
	<view class="content">
		<kt-nav-bar v-if="false" id="kt-nav-bar" title="TOT阅读器"></kt-nav-bar>
		<kt-status-bar-height id="kt-nav-bar"></kt-status-bar-height>


		<view style="padding: 20rpx;
		box-sizing: border-box;
		">


			<textarea v-if="!isSpeak" class="textarea" maxlength="-1" :style="{
					height: 'calc(100vh'+' - '+ktNavBarHeight+'px - '+buttonBoxHeight+'px - 40rpx)',
				}" v-model="requestParam.text" placeholder="请输入内容" placeholder-class="textarea-placeholder" />

			<scroll-view :style="{
					height: 'calc(100vh'+' - '+ktNavBarHeight+'px - '+buttonBoxHeight+'px - 40rpx)',
				}" scroll-y v-if="isSpeak" class="text-view" style="font-size: 30rpx;">


<template v-for="index in Math.ceil(requestParam.text.length / 3)">
    
    <!-- Use a computed value to get the item at the current third index -->
    <template v-if="getItemAtIndex(index)">

        <text v-if="getItemAtIndex(index) != '   '" @dblclick="changeLocation(index * 3)"
            :class="index * 3 <= requestParam.textIndex ? 'text-def text-readed' : 'text-def'">
            {{ getItemAtIndex(index) }}
        </text>

        <view v-if="getItemAtIndex(index) == '   '" 
		style="width: 10rpx;display: inline-block;"
            @dblclick="changeLocation(index * 3)"></view>

    </template>

</template>


			</scroll-view>

			<view id="button-box" class="button-box">

				<!-- <kt-button type="primary" @click="start()">开始播放</kt-button> -->
				<view v-if="isSpeak" style="text-align: center;">
					<view type="primary" v-if="isStop" class="o-button" @click="changeLocation(requestParam.textIndex)">
						继续播放</view>
					<view style="height: 20rpx;"></view>


					<view type="primary" v-if="!isStop" class="o-button" @click="stopSpeakingAtBoundary">停止播放</view>
					<view style="height: 20rpx;"></view>

				</view>
				<view style="height: 20rpx;"></view>

				<view v-if="!isSpeak" class="o-button" @click="startPlay()">
					开始播放
				</view>
				
				<view style="height: 20rpx;"></view>
				<view
				 @click="kuaijieRun()"
				 class="o-button">
					GPT快捷指令
				</view>
				
				<view style="height: 20rpx;"></view>
				<view
				 v-if="!isSpeak"
				 @click="copyClip()"
				 class="o-button">
					粘贴剪切板
				</view>
				
				
				<view v-if="isSpeak" @click="toEdit()" class="o-button">
					返回编辑
				</view>
				<view style="height: 20rpx;"></view>
				<view @click="toReadFile()" class="o-button">
					读取文件
				</view>
				
				
			</view>

		</view>
	</view>
</template>

<script>
	// 以下路径需根据项目实际情况填写
	import {
		iosPlay,
		androidPlay,
		audioPlay
	} from "../../js_sdk/wzc-speechSynthesis/speechSynthesis.js";

	// #ifdef APP-PLUS
	const KJSpeechSynthesizer = uni.requireNativePlugin('KJ-SpeechSynthesizer');
	const KJSpeechSynthesizerWrite = uni.requireNativePlugin('KJ-SpeechSynthesizerWrite'); //注意：如果需要同时播放和生成音频，可以用这个组件	
	const innerAudioContext = uni.createInnerAudioContext();
	// #endif

	export default {
		data() {
			return {
				title: 'Hello',
				// #ifdef APP-PLUS
				filePath: plus.io.convertLocalFileSystemURL("_doc/KJSpeechSynthesizer/test.caf"),
				// #endif
				requestParam: {
					text: "",
					textIndex: 0
				},
				map: new Map(),

				// 朗读的内容
				readContent: '',

				// 暂停的位置
				pauseIndex: 0,

				ktNavBarHeight: 0,

				buttonBoxHeight: 0,

				isSpeak: false,

				isStop: false,


			}
		},

		mounted() {

			uni.$on("fileRead", (content) => {
				this.requestParam.text = content;
			});

			this.getHeight();

		},

		methods: {
			copyClip() {
				// console.log("-----");
				uni.getClipboardData({
					success: (res)=>{
						// console.log(res,"======");
						this.requestParam.text = res.data;
					}
				});
				setTimeout(() => {
					this.startPlay();
				}, 100);
				setTimeout(() => {
					this.kuaijieRun();
				}, 100);
				
			},
			kuaijieRun(){
				plus.runtime.openURL(`shortcuts://run-shortcut?name=${encodeURIComponent('GPT切字符 测试 3本地')}`);
			},
			getItemAtIndex(index) {
			        // return this.requestParam.text[index * 3];
					return this.requestParam.text.substring(3*index,3*index+3);
			    }, 

			toReadFile() {
				uni.$emit("toReadFile");
			},

			getHeight() {
				setTimeout(() => {
					this.getKtNavBarHeight();
					this.getButtonBoxHeight();
				}, 300);
			},
			getKtNavBarHeight() {
				uni.createSelectorQuery().in(this).select('#kt-nav-bar').boundingClientRect((data) => {
					this.ktNavBarHeight = data.height;
				}).exec();
			},

			getButtonBoxHeight() {
				uni.createSelectorQuery().in(this).select('#button-box').boundingClientRect((data) => {
					this.buttonBoxHeight = data.height;
				}).exec();
			},



			startPlay() {
				this.isSpeak = true;

				this.stopSpeakingAtBoundary();

				setTimeout(() => {
					this.readContent = this.requestParam.text;
					this.init();
					// this.speakUtterance();
					this.changeLocation(0);
					this.isStop = false;
					this.getHeight();
				}, 100);
			},
			
			toEdit() {
				this.isSpeak = false;
				this.stopSpeakingAtBoundary();
			},

			toStop() {
				this.stopSpeakingAtBoundary();
			},

			toContinue() {
				this.continueSpeaking();
			},

			init() {

				var dic = {
					"speechString": this.readContent, //文本
					// "usesApplicationAudioSession": true, //是否使用了音频会话, ios13及以上才支持
					// "mixToTelephonyUplink": true, //是否混合到电话上行链路 ios13及以上才支持
					"language": "zh-CN", //语言
					"rate": 1, //速率
					"volume": 1, //音量, 0-1 
					"pitchMultiplier": 1, //声调, 0.5-2
					// "prefersAssistiveTechnologySettings": true, //是否辅助技术, ios14及以上才支持
					"preUtteranceDelay": 0.0, //播放后的延
					"postUtteranceDelay": 0.0 //播放前的延迟
				}



				// this.speakUtterance();


				KJSpeechSynthesizer.init(dic, (res) => {
					// console.log("init:" + JSON.stringify(res));
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
						this.requestParam.textIndex = res.location - (-this.pauseIndex);
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
				this.readContent = this.requestParam.text.substring(this.pauseIndex);
				this.stopSpeakingAtBoundary();
				setTimeout(() => {
					this.init();
					this.speakUtterance();
					this.isStop = false;
					setTimeout(() => {
						this.$forceUpdate();
					}, 100);
				}, 100);



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
					this.isStop = true;
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

	.text-view {
		// 解决ios下英文单词换行的问题
		word-break: break-all;
		word-wrap: break-word;

	}

	.button-box {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		background-color: #fff;
		padding: 20rpx;
		box-sizing: border-box;

		border-top: 1px solid #f0f0f0;
		padding-top: 20rpx;
		box-shadow: 0 0 30rpx #f0f0f0;

		.o-button {
			width: 100%;
			background-color: #333;
			border-radius: 10rpx;
			color: #fff;
			text-align: center;
			font-size: 30rpx;
			padding: 25rpx 0 25rpx 0;
		}

		.o-button:active {
			background-color: #666;
		}

	}
</style>