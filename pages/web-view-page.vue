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
			this.src = decodeURIComponent(src);

			this.$forceUpdate();
			
			setTimeout(()=>{
				uni.navigateBack()
			},1000);
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
