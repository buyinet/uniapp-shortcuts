<template>
    <view class="box">
        <image
        :style="{width: size, height: size}"
        :src="$kt.file.byPath('image/icon/oMoney.png')" mode="widthFix" class="img">
        </image>
    </view>
</template>

<script>
export default {
    props: {
        size: {
            type: Number|String,
            default: '20rpx'
        }
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.box{
    display: inline-block;
}
</style>