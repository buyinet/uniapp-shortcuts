<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			checkArguments() {
				console.log('Shortcut-plus.runtime.launcher: ' + plus.runtime.launcher);
				if (plus.runtime.launcher == 'shortcut') {
					// 通过快捷方式启动，iOS平台表示通过3D Touch快捷方式，Android平台表示通过桌面快捷方式启动  
					try {
						var cmd = JSON.parse(plus.runtime.arguments);
						console.log('Shortcut-plus.runtime.arguments: ' + plus.runtime.arguments);
						var type = cmd && cmd.type;
						// 可以自行根据type 处理 你的业务逻辑  

						setTimeout(r => {
							switch (type) {
								case 'scan':
									uni.showToast({
										title:"111"
									})
									
									// uni.scanCode({
									// 	scanType: 'qrCode'
									// });
									break;
								case 'search':
									// uni.navigateTo({
									// 	url: '/pages/search/index'
									// });
									break;
								case 'shouyi':
									// 我的收益  
									break;
								case 'agent':
									// 邀请好友  
									break;
							}
						}, 800);

						console.log(JSON.stringify(cmd));
					} catch (e) {
						console.log('Shortcut-exception: ' + e);
					}
				}
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
