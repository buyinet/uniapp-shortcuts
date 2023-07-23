<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show');
			if (plus.runtime.launcher == 'shortcut') { //快捷方式唤醒扫一扫功能
				var cmd = JSON.parse(plus.runtime.arguments);
				var type = cmd && cmd.type;
				console.log(type) //sweep
				if (type && type == "sweep") {
					// 、、、、、、快捷操作要执行的逻辑
				}
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
