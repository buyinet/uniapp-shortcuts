<template>
    <view>

        <view class="box" v-if="isShow">
            <view class="box-back"></view>
            <view class="box-content">
                <image :class="'box-img' + (item.costOfOMoney >= 100 ? ' box-img-big' : ' box-img-small')"
                    :src="$kt.file.visit(item.fileIdOfEffect)" mode="widthFix" />

            </view>
        </view>
    </view>
</template>


<script>
export default {
    data() {
        return {
            item: {},
            isShow: false,
        }
    },
    methods: {
        open(item) {
            this.item = item;
            this.isShow = true;
            if (item.costOfOMoney >= 100) {
                setTimeout(() => {
                    this.isShow = false;
                }, 4000);
                return false;
            }
            setTimeout(() => {
                this.isShow = false;
            }, 2000);

        },
        close() {
            this.isShow = false;
        }
    },
}
</script>

<style lang="scss" scoped>
.box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999999;
}

.box-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    background-size: 100% 100%;
}

.box-img {
    position: fixed;
    width: 750rpx;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}

.box-img-big {
    // 动画效果，由大到小
    animation: scale 4s linear;
}

@keyframes scale {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }

    25% {
        transform: translate(-50%, -50%) scale(.8);
    }

    75% {
        transform: translate(-50%, -50%) scale(1);
    }

    100% {
        transform: translate(-50%, -50%) scale(0);
    }
}

.box-img-small {
    // 动画效果，由大到小
    animation: scaleSamll 2s linear;
}

@keyframes scaleSamll {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }

    25% {
        transform: translate(-50%, -50%) scale(1);
    }

    100% {
        transform: translate(-50%, -50%) scale(.6);
    }
}

</style>