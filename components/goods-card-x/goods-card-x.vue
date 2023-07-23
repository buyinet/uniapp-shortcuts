<template>
    <view class="card">
        <view
        class="card-image-box"
        >
            <image :src="$kt.file.visit(JSON.parse(bodyData.bodyFileListStr)[0].fileId)" mode="scaleToFill"
                class="card-image" />
        </view>
        <view
        class="card-body"
        >
            <!-- 商品标题 -->
            <view class="card-title">{{ bodyData.title }}</view>
            <!-- 商品需要的情趣碎片 -->
            <view class="card-fragment">
                <view class="card-fragment-text">需要碎片</view>
                <view class="card-fragment-number">{{ bodyData.charmPoint }}</view>
            </view>
            <!-- 商品编码 -->
            <view class="card-code">
                <view class="card-code-text">商品编码</view>
                <view class="card-code-number">{{ bodyData.id }}</view>
            </view>


        </view>
    </view>
</template>

<script>
export default {
    props: {
        bodyData: {
            type: Object,
            default() {
                return {}
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.card {
}

.card-image {
    width: 150rpx;
    height: 150rpx;
    border-radius: 10px;
}

.card-image-box {
    display: inline-block;
    width: 150rpx;
    height: 150rpx;
    border-radius: 10px;
    overflow: hidden;
}

.card-body {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 150rpx - 20rpx);
    margin-left: 20rpx;

    .card-title {
        font-size: 28rpx;
        color: #333;
        margin-top: 10rpx;
        margin-bottom: 10rpx;
    }

    .card-fragment {
        display: flex;
        align-items: center;
        .card-fragment-text {
            font-size: 24rpx;
            color: #999;
        }

        .card-fragment-number {
            font-size: 24rpx;
            color: #333;
            margin-left: 10rpx;
        }
    }

    .card-code {
        display: flex;
        align-items: center;
        margin-top: 10rpx;
        .card-code-text {
            font-size: 24rpx;
            color: #999;
        }

        .card-code-number {
            font-size: 24rpx;
            color: #333;
            margin-left: 10rpx;
        }
    }
}
</style>