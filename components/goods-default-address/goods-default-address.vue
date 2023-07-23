<template>
    <view class="scroll-box">
        <view style="height: 10rpx;"></view>

        <view class="box-box" v-if="isLoadingDefaultAddress">
            <u-loading-icon size="60rpx"></u-loading-icon>
        </view>

        <view class="box-box" v-if="!isLoadingDefaultAddress && !defaultAddress">

            <view class="scroll-box-item">
                <view class="scroll-box-item-title">收货人
                </view>
                <view class="scroll-box-item-content">暂无</view>
            </view>
            <view class="scroll-box-item">
                <view class="scroll-box-item-title">联系电话
                </view>
                <view class="scroll-box-item-content">暂无</view>
            </view>
            <view class="scroll-box-item">
                <view class="scroll-box-item-title">收货地址
                </view>
                <view class="scroll-box-item-content">暂无</view>
            </view>

            <view style="height: 20rpx;"></view>


            <kt-button :borderRadius="'20rpx'" @click="toEditAddress">设置收货地址</kt-button>
        </view>

        <view class="box-box" v-if="defaultAddress">
            <view style="font-size: 28rpx;">
                <image :src="$kt.file.byPath('image/icon/location.svg')" :style="{
                    width: '28rpx',
                    height: '28rpx',
                }" mode="aspectFit"></image>

                <text v-if="defaultAddress.provinceName" :style="{
                    marginLeft: '10rpx',
                    marginRight: '10rpx',
                }">
                    {{ defaultAddress.provinceName }}
                </text>
                <text v-if="defaultAddress.cityName" :style="{
                    marginLeft: '10rpx',
                    marginRight: '10rpx',
                }">
                    {{ defaultAddress.cityName }}
                </text>
                <text v-if="defaultAddress.countyName" :style="{
                    marginLeft: '10rpx',
                    marginRight: '10rpx',
                }">
                    {{ defaultAddress.countyName }}
                </text>
            </view>

            <view class="scroll-box-item">
                <view class="scroll-box-item-title">收货人
                </view>
                <view class="scroll-box-item-content">{{ defaultAddress.userName }}</view>
            </view>
            <view class="scroll-box-item">
                <view class="scroll-box-item-title">联系电话
                </view>
                <view class="scroll-box-item-content">{{ defaultAddress.telNumber }}</view>
            </view>
            <view class="scroll-box-item">
                <view class="scroll-box-item-title">收货地址
                </view>
                <view class="scroll-box-item-content">{{ defaultAddress.detailInfo }}</view>
            </view>
        </view>

        <view style="height: 30rpx;"></view>

    </view>
</template>

<script>

export default {
    props: {
        navBarHeight: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            segmentHeight: 0,
            userSelf: {},
            defaultAddress: null,
            // 是否正在加载defaultAddress
            isLoadingDefaultAddress: true,
        }
    },
    created() {
        this.userSelf = this.$ovo.getSelf();

        uni.$on('changeOvoSelfInfo', (userSelf) => {
            this.userSelf = userSelf;
        });
        this.getDefalutAddress();

        uni.$on('changeDefaultAddress', (defaultAddress) => {
            this.defaultAddress = defaultAddress;
        });
    },
    mounted() {

    },
    methods: {
        flushAddress() {
            this.$emit('flush', this.defaultAddress);
        },
        setAddress(address) {
            this.defaultAddress = address;
            this.hideAddressInfo();
        },

        toEditAddress() {
            // #ifdef MP-WEIXIN

            uni.chooseAddress({
                success: (res) => {
                    console.log(JSON.stringify(res));
                    this.$kt.request.request({
                        api: this.$api.system.address.save,
                        data: {
                            userName: res.userName,
                            telNumber: res.telNumber,
                            provinceName: res.provinceName,
                            cityName: res.cityName,
                            countyName: res.countyName,
                            detailInfo: res.detailInfo,
                            nationalCode: res.nationalCode,
                            postalCode: res.postalCode,
                            isDefault: true,
                        },
                        stateSuccess: (res) => {
                            this.getDefalutAddress();
                        },
                        fail: (error) => { }
                    });

                },
                fail: (error) => { }
            })

            // #endif

        },

        getDefalutAddress() {
            this.isLoadingDefaultAddress = true;
            // 从缓存中获取默认地址
            let defaultAddress = uni.getStorageSync('defaultAddress');

            if (defaultAddress) {
                this.defaultAddress = defaultAddress;
                this.isLoadingDefaultAddress = false;
                this.flushAddress();
            }

            this.$kt.request.request({
                api: this.$api.system.address.getDefault,
                stateSuccess: (res) => {
                    this.defaultAddress = res.data;
                    if (!this.defaultAddress) {
                        this.isLoadingDefaultAddress = false;
                        return null;
                    }
                    this.hideAddressInfo();
                    this.flushAddress();                    
                    // 将位置存入缓存
                    uni.setStorageSync('defaultAddress', this.defaultAddress);

                    this.isLoadingDefaultAddress = false;
                }
            });
        },

        // 隐藏关键信息
        hideAddressInfo() {
            // 如果收货人只有2个字，就将最后一个字替换成*
            if (this.defaultAddress.userName.length == 2) {
                this.defaultAddress.userName = this.defaultAddress.userName.replace(/.$/, '*');
            }
            // 如果收货人大于2个字，就将中间的字替换成*
            if (this.defaultAddress.userName.length > 2) {
                this.defaultAddress.userName = this.defaultAddress.userName.replace(/^(.).*(.)$/, "$1*$2");
            }

            // 将手机号中间4位替换成*，可能不是国内手机号
            // 获取手机号的长度
            let telNumberLength = this.defaultAddress.telNumber.length;
            // 获取手机号中间4位的起始位置
            let telNumberStart = Math.floor(telNumberLength / 2) - 2;
            // 获取手机号中间4位的结束位置
            let telNumberEnd = Math.floor(telNumberLength / 2) + 2;
            // 将手机号中间4位替换成*
            this.defaultAddress.telNumber = this.defaultAddress.telNumber.replace(this.defaultAddress.telNumber.substring(telNumberStart, telNumberEnd), '****');

        }

    },
}

</script>

<style lang="scss" scoped>
.scroll-box {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    background-color: #fff;
}

.u-grid-item-content {
    text-align: center;

    .u-grid-item-content-num {
        font-size: 30rpx;
        color: #333;
    }

    .u-grid-item-content-text {
        font-size: 28rpx;
        color: #666;
    }
}

.box-box {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    padding: 20rpx;
    background-color: #fff;
    border-radius: 20rpx;
    font-size: 30rpx;
    border:2rpx solid #eee;
    margin-top: 10rpx;

    .de-text {
        font-size: 24rpx;
        margin-left: 10rpx;
    }

}

.scroll-box-title {
    font-size: 30rpx;
    color: #333;
}

.scroll-box-item {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    padding: 20rpx 0 20rpx 0;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 1rpx solid #eee;

    .scroll-box-item-title {
        font-size: 28rpx;
        color: #333;
    }

    .scroll-box-item-content {
        font-size: 28rpx;
        color: #666;
    }

}


.icon-btn:active {
    transform: scale(0.9);
}
</style>