<template>
	<view class="content">
		<image
		v-if="fileId != ''&&fileId!=null&&fileId!=undefined"
		:style="{
			'width':size,
			'height':size,
			'border':border
		}"
		:src="$kt.file.visit(fileId)" class="t-head" mode="aspectFill"></image>
		<image
		:style="{
			'width':size,
			'height':size,
			'border':border
		}"
		v-else
		:src="$kt.file.byPath('image/icon/rabbitAvatar.svg')" class="t-head" mode="aspectFill"></image>
		<view 
		v-if="online"
		class="radius radius-line"></view>
	</view>
</template>

<script>
export default {
	name: "avatar",
	props: {
		fileId: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: '100rpx'
		},
		border: {
			type: String,
			default: '0rpx'
		},
		// 是否在线
		online: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {

		};
	}
}
</script>

<style lang="scss" scoped>
.content {
	position: relative;
	display: inline-block;
	border-radius: 50%;
}

.t-head {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
}

.radius {
	position: absolute;
	background-color: black;
	width: 20rpx;
	height: 20rpx;
	border: 5rpx solid white;
	border-radius: 50%;
	bottom: 0rpx;
	right:0rpx;
}

.radius-line{
	background-color: rgb(8,241,117);
}

.radius-no-line{
	background-color: rgb(155,156,156);
}


</style>