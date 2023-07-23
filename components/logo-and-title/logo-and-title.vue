<template>
    <view
    :style="{
        top:statusBarHeight-(-5)+'px',
        left:'30rpx'
    }"
    class="box">
        <image class="box-icon" :src="$kt.file.byPath('image/icon/logo.png')"></image>
        <text class="box-text">OVO</text>
    </view>
</template>

<script>
export default {
    data() {
        let systemInfo = uni.getSystemInfoSync();
        return {
            statusBarHeight:systemInfo.statusBarHeight
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.box {
    position: fixed;
    text-align: center;
    display: inline-block;
    background-color: #f0f0f0;
    padding: 10rpx 20rpx 10rpx 50rpx;
    border-radius: 20rpx;

    .box-icon {
        position: absolute;
        width: 40rpx;
        height: 40rpx;
        border-radius: 55%;
        top:50%;
        transform: translateY(-50%);
        left:10rpx
    }

    .box-text{
        display: inline-block;
        text-align: center;
        font-size: 30rpx;
        color: #333;
        margin-left: 10rpx;
        font-size: 30rpx;
        font-weight: bold;
    }
}
</style>