<template>
	<view :style="'height:'+systemInfo.statusBarHeight+'px'">
	</view>
</template>

<script>
	export default {
		data() {
			var systemInfo=uni.getSystemInfoSync();
			return {
				systemInfo
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
