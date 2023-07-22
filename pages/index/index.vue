<template>
	<view class="content">
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			this.checkArguments(); // 检测启动参数 // 这是默认的监听参数 也就是应用初始化的时候监听  

			// 监听后台恢复 这是利用5+的方式 处理 APP进入后台后 再进入到APP前台时参数监听  
			plus.globalEvent.addEventListener('newintent', (e) => {
				this.checkArguments(); // 检测启动参数  
			});
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
										title:"test"
									})
									
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
