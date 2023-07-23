<template>
    <view>
        <view v-if="show">
            <!-- #ifdef MP-WEIXIN -->
            <!-- 全部遮盖 -->
            <view class="mask-view"></view>
            <!-- #endif -->
        </view>
    </view>
</template>

<script>
export default {
    name: "ktPay",
    data() {
        return {
            show: false,
        }
    },
    created() {

    },
    methods: {
        toPay(orderId) {
            this.show = true;
            // #ifdef MP-WEIXIN
            // 微信小程序支付
            this.wechatPay(orderId, "mp");
            // #endif

        },

        wechatPay(orderId, sceneCode) {
            uni.login({
                provider: "weixin",
                success: (loginRes) => {
                    var code = loginRes.code;
                    this.$kt.request.request({
                        api: this.$api.pay.pay.wechatPay,
                        data: {
                            orderId,
                            sceneCode,
                            code
                        },
                        stateSuccess: (res) => {
                            uni.requestPayment({
                                provider: 'wxpay',
                                timeStamp: res.data.timeStamp,
                                nonceStr: res.data.nonceStr,
                                package: res.data.package,
                                signType: res.data.signType,
                                paySign: res.data.paySign,
                                success: (res)=> {
                                    this.show = false;
                                    console.log('success:' + JSON.stringify(res));
                                },
                                fail: (err)=> {
                                    this.show = false;
                                    console.log('fail:' + JSON.stringify(err));
                                }
                            });
                        }
                    });
                },
                fail: (err) => {
                    reject(err);
                },
            });

        }

    }

}

</script>


<style lang="scss" scoped>
.mask-view {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

</style>