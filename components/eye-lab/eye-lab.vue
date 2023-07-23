<template>
				<view class="opt-btn" @click="$emit('click')">
					<image :src="$kt.file.byPath('image/icon/eye2.svg')" class="opt-icon">
					</image>
					<text class="opt-text" v-if="visibleCode == null || visibleCode == ''">
						所有人可见
					</text>
					<text class="opt-text" v-else>
						{{ getVisibleText(visibleCode) }}
					</text>
				</view>
</template>

<script>
    export default {
        props: {
            visibleCode: {
                type: String,
                default: 'all'
            }
        },
        data(){
            return {
             visibleList:[{
                text: "所有人可见",
                code: "all",
                imgSrc: this.$kt.file.byPath('image/icon/lockPublic.svg')
            },
            {
                text: "仅互相关注可见",
                code: "mutual",
                imgSrc: this.$kt.file.byPath('image/icon/friend.svg')

            },
            {
                text: "仅关注我的人可见",
                code: "follower",
                imgSrc: this.$kt.file.byPath('image/icon/follower.svg')

            },
            {
                text: "仅自己可见",
                code: "self",
                imgSrc: this.$kt.file.byPath('image/icon/lockPrivate.svg')

            }]   
            }
        },
        methods: {
            getVisibleText(code) {
                let visibleText = '';
                this.visibleList.forEach(item => {
                    if (item.code == code) {
                        visibleText = item.text;
                    }
                });
                return visibleText;
            }
        },
    }
</script>

<style lang="scss" scoped>

.opt-btn {
    margin: 10rpx 20rpx 10rpx 0;


		.opt-icon {
            width: 30rpx;
			height: 30rpx;
			display: inline-block;
			vertical-align: top;
		}

		.opt-text {
			display: inline-block;
			vertical-align: bottom;
			margin-left: 10rpx;
			font-size: 25rpx;
            vertical-align: top;
		}

		display: inline-block;
		background-color: rgb(245, 245, 245);
		border-radius: 10px;
		color: #666;
		padding: 10rpx 20rpx 5rpx 20rpx;
		font-size: 29rpx;
	}

	.opt-btn:active {
		opacity: .8;
	}
</style>
