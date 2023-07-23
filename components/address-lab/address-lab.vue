<template>
	<view 
    @click="$emit('click')"
    class="opt-btn">
		<image :src="$kt.file.byPath('image/icon/location.svg')" class="opt-icon">
		</image>
		<text v-if="addressTitle == null || addressTitle == ''" class="opt-text">
			不显示位置
		</text>
		<text class="opt-text" v-else>
			{{ addressTitle }}
		</text>
	</view>
</template>

<script>
    export default {
        props: {
            addressTitle: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

.opt-btn {
		margin: 10rpx 20rpx 10rpx 0;

		.opt-icon {
			width: 24rpx;
			height: 24rpx;
			margin: 3rpx 0 3rpx 0;
			display: inline-block;
		}

		.opt-text {
			display: inline-block;
			vertical-align: bottom;
			margin-left: 10rpx;
			font-size: 26rpx;
			vertical-align: top;
		}

		display: inline-block;
		background-color: rgb(245, 245, 245);
		border-radius: 10px;
		color: #666;
		padding: 10rpx 20rpx 5rpx 20rpx;
		font-size: 26rpx;
	}

	.opt-btn:active {
		opacity: .8;
	}
</style>
