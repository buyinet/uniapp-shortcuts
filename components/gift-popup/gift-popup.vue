<template>
    <view>


        <u-popup :show="show" @close="close" @open="open" round="40rpx">
            <gift-effect ref="giftEffect"></gift-effect>

            <!-- 分段器：礼物、背包 -->
            <view class="box" style="padding: 20rpx 40rpx 0 40rpx;">
                <view class="box-sub">

                    <view :class="codeOfSubSelect == 'gift' ? 'box-sub-item box-sub-item-select' : 'box-sub-item'"
                        @click="codeOfSubSelect = 'gift'">礼物</view>

                    <view :class="codeOfSubSelect == 'knapsack' ? 'box-sub-item box-sub-item-select' : 'box-sub-item'"
                        @click="toCodeOfSubSelect('knapsack')">背包</view>
                </view>
                <view style="font-size: 28rpx;color:#333;margin-top: 5rpx;">
                    <view @click="$kt.util.navTo('/pages/public/o-money-recharge')"
                        style="position: relative;margin-left:20rpx">
                        <view style="
                position: absolute;
                left: -15rpx;
                top: -15rpx;
                ">
                            <o-money size="65rpx"></o-money>
                        </view>
                        <view style="background-color:#eeeeee;color:#333;font-size:28rpx;
                    font-weight: bold;
                    display: inline-block;padding: 2rpx 10rpx 2rpx 50rpx;border-radius: 20rpx;
                    ">
                            {{ balanceSelfMap.oMoney }}
                        </view>
                    </view>
                </view>
            </view>



            <view class="box" style="padding-top: 0;" v-if="codeOfSubSelect == 'gift'">
                <view style="display: inline-block;margin: 20rpx 0 20rpx 0;" v-for="(item, index) in bodyData"
                    @click="toSelectGift(index)">
                    <gift :item="item" :isSelect="selectIndex === index"></gift>
                </view>
            </view>

            <view class="box" v-if="codeOfSubSelect == 'knapsack'" style="height: 400rpx;"></view>

            <view v-if="false" style="padding:0 20rpx 0 20rpx;box-sizing: border-box;">
                <view class="line"></view>
            </view>

            <view style="padding: 20rpx 40rpx 40rpx 40rpx;">
                <kt-button ref="submitButton" @click="submit" v-if="selectIndex != null">赠送于TA</kt-button>
                <kt-button style="opacity: .7;" v-if="selectIndex == null">请选择礼物</kt-button>

            </view>

        </u-popup>

    </view>
</template>

<script>
export default {
    data() {
        return {
            balanceSelfMap: {},
            show: false,
            selectIndex: null,
            codeOfSubSelect: "gift",
            bodyData: [],
            // 赠送出去的礼物
            selectIndexOfGive: null,
            // 请求参数
            requestParam: {
                giftCode: null,
                toUserId: null,
                toPostId: null,
                number: 1
            }
        }
    },
    created() {

        this.balanceSelfMap = this.$system.getBalanceSelfMap();
        uni.$on("changeBalanceSelfMap", () => {
            this.balanceSelfMap = this.$system.getBalanceSelfMap();
        });

        this.init();
    },

    methods: {
        toSelectGift(index) {
            if (index == this.selectIndex) {
                this.selectIndex = null;
                return null;
            }

            this.selectIndex = index;
        },
        toCodeOfSubSelect(code) {
            if (code == "knapsack") {
                uni.showToast({
                    title: "暂未开启背包功能",
                    icon: "none"
                })
            }
        },
        init() {


            // 从缓存中获取礼物列表
            let giftList = uni.getStorageSync("giftList");
            let giftListTime = uni.getStorageSync("giftListTime");

            // 如果缓存中有礼物列表，且缓存时间小于1天，则直接使用缓存中的礼物列表
            if (giftList && new Date().getTime() - giftListTime < 1000 * 60 * 60 * 24) {
                this.bodyData = giftList;
                return null;
            }

            this.getAllGift();


        },

        open(requestParam) {
            console.log("requestParam111", requestParam);
            this.show = true;

            if (requestParam.toUserId) {
                this.requestParam.toUserId = requestParam.toUserId;
            }
            if (requestParam.toPostId) {
                this.requestParam.toPostId = requestParam.toPostId;
            }

            // 如果小于1秒，不刷新
            let giftPopupCliekTime = uni.getStorageSync("giftPopupCliekTime");
            if (giftPopupCliekTime) {
                let nowTime = new Date().getTime();
                if (nowTime - giftPopupCliekTime < 1000) {
                    return;
                }
            }

            this.getBalanceSelfMap();
            // 获取当前时间
            uni.setStorageSync("giftPopupCliekTime", new Date().getTime());
        },
        close() {
            this.show = false
        },
        getBalanceSelfMap() {
            this.$kt.request.request({
                api: this.$api.system.balance.getSelfMap,
                isNoInterceptor: true,
                stateSuccess: (res) => {
                    this.$system.setBalanceMap(res.data);
                },
            });
        },
        getAllGift() {
            this.$kt.request.request({
                api: this.$api.business.ovo.gift.getAll,
                stateSuccess: (res) => {
                    this.bodyData = res.data;

                    // 加到缓存中
                    uni.setStorageSync("giftList", res.data);
                    // 缓存的时间也加到缓存中
                    uni.setStorageSync("giftListTime", new Date().getTime());

                }
            })
        },
        submit() {
            if (this.selectIndex === null) {
                return;
            }

            this.requestParam.number = 1;
            this.requestParam.giftCode = this.bodyData[this.selectIndex].code;

            this.balanceSelfMap = this.$system.getBalanceSelfMap();
            if (this.balanceSelfMap.oMoney >= this.bodyData[this.selectIndex].costOfOMoney * this.requestParam.number) {
                this.$refs.giftEffect.open(
                    this.bodyData[this.selectIndex]
                );
            }


            this.$kt.request.request({
                api: this.$api.business.ovo.gift.give,
                data: this.requestParam,
                stateSuccess: (res) => {
                    this.getBalanceSelfMap();
                },
                stateFail: (res) => {

                    if (res.stateCode == 'oMoneyNotEnough') {
                        this.$refs.giftEffect.close();
                        this.$refs.submitButton.error("O币余额不足");
                        this.getBalanceSelfMap();
                    }

                }
            })
        }
    }

}

</script>

<style lang="scss" scoped>
.box {
    padding: 20rpx 20rpx 0rpx 10rpx;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.box-sub {
    display: flex;
    justify-content: space-between;
    color: #666;
    // 文字间距
    letter-spacing: 2rpx;

    .box-sub-item {
        font-size: 32rpx;
        margin: 10rpx;
    }

    .box-sub-item-select {
        color: #333;
        font-weight: bold;
        border-bottom: 2px solid #333;
    }

}

.line {
    height: 1px;
    background-color: #eee;
    margin: 0rpx 0 20rpx 0;
}
</style>