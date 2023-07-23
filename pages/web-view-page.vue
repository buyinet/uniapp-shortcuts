<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
			}
		},
		onLoad(options) {
			var src = options.src;
			// 解码
			this.src = "https://test.kantboot.com/index.html?url="+decodeURIComponent(src);

			this.$forceUpdate();
			
			// setTimeout(()=>{
			// 	uni.navigateBack()
			// },1000);
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
