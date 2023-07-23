<template>
    <view>
        <u-popup :closeOnClickOverlay="true" @close="show = false" round="20rpx" :show="show">
            <view>
                <view class="box">
                    <view style="height: 40rpx;"></view>
                    <user-card :ovoUserInfo="ovoUserInfo"></user-card>
                    <view style="height: 20rpx;"></view>
                    <view class="ff-box">

                        <view class="in-ff-box" v-if="followerAndFollowingCount.followCount != null">
                            <text class="num-in-ff-box">{{ followerAndFollowingCount.followCount }}</text>
                            <text class="text-in-ff-box">关注</text>
                        </view>

                        <view class="in-ff-box" v-if="followerAndFollowingCount.followersCount != null">
                            <text class="num-in-ff-box">{{ followerAndFollowingCount.followersCount }}</text>
                            <text class="text-in-ff-box">被关注</text>
                        </view>

                    </view>

                    <view class="btn-box">
                        <view class="btn" style="width: 10%;filter: invert(0);"
                        @click="openGiftPopup()"
                        >
                            <image :src="$kt.file.byPath('image/icon/gift.svg')" style="filter: invert(0%);" mode="widthFix"
                                class="icon-of-btn" />
                        </view>
                        <view class="btn">
                            <follow-btn @follow="follow" @unFollow="unFollow" :ovoUserInfo="ovoUserInfo"></follow-btn>
                        </view>
                        <view class="btn" @click="toPrivateChat()">
                            <image :src="$kt.file.byPath('image/tabbar/msg.svg')" mode="widthFix" class="icon-of-btn" />
                            <text class="btn-text">私信</text>
                        </view>
                        <view class="btn">
                            <image :src="$kt.file.byPath('image/icon/home.svg')" mode="widthFix" class="icon-of-btn" />
                            <text class="btn-text">查看主页</text>
                        </view>
                    </view>

                </view>
            </view>
        </u-popup>

        <gift-popup ref="giftPopup"></gift-popup>
    </view>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            ovoUserInfo: {},
            followerAndFollowingCount: {
                followersCount: 0,
                followCount: 0
            }
        }
    },
    methods: {
        openGiftPopup() {
            console.log("openGiftPopup", this.ovoUserInfo.userId);
            var json = {
                toUserId: this.ovoUserInfo.userId,
            };
            
            this.$refs.giftPopup.open(json);
        },
        open(item) {
            this.show = true;
            this.ovoUserInfo = item;
            this.getFollowerAndFollowingCountByUserId(item.userId);
        },
        close() {
            this.show = false;
        },
        toPrivateChat() {
            uni.setStorageSync("userId:" + this.ovoUserInfo.userId + ":ovoUserInfo", this.ovoUserInfo);
            this.$kt.util.navTo('/pages/public/chat-body?roomTypeCode=privateChat&otherUserId=' + this.ovoUserInfo.userId);

            setTimeout(() => {
                this.show = false;
            }, 200);
        },
        follow() {
            this.followerAndFollowingCount.followersCount++;
            this.$emit("follow", this.ovoUserInfo);
        },
        unFollow() {
            this.followerAndFollowingCount.followersCount--;
            this.$emit("unFollow", this.ovoUserInfo);
        },
        getFollowerAndFollowingCountByUserId(userId) {
            this.$kt.request.request({
                api: this.$api.business.ovo.userBind.getFollowerAndFollowingCountByUserId,
                data: {
                    userId: userId,
                },
                stateSuccess: (res) => {
                    this.followerAndFollowingCount = res.data;
                },
            })
        }
    }
}

</script>


<style lang="scss" scoped>
.box {
    width: 100%;
    padding: 20rpx;
    box-sizing: border-box;

    .btn-box {
        margin: 30rpx 0 0rpx 0;
    }

    .btn {
        display: inline-block;
        width: 30%;
        border-radius: 10rpx;
        padding: 10rpx 0 10rpx 0;
        text-align: center;

        .icon-of-btn {
            width: 30rpx;
            height: 30rpx;
            // 颜色反转
            filter: invert(70%);
            margin-right: 10rpx;

        }

        .btn-text {
            font-size: 30rpx;
            color: #666;
            // 文字间距
            letter-spacing: 2rpx;
        }
    }
}

.ff-box {
    display: flex;
    justify-content: space-around;
    font-size: 30rpx;
    color: #666;

    .in-ff-box {
        width: 100%;
        text-align: center;
        // 间距2rpx
        letter-spacing: 2rpx;

        .num-in-ff-box {
            color: #333;
            margin-right: 10rpx;
        }

        .text-in-ff-box {
            color: #666;
        }
    }
}
</style>
