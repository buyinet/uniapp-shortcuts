<template>
	<view>
		<view v-if="!isInitFinish" class="btn" style="opacity: .5;" :style="{
			'background-color': ovoUserInfo.user.gender == 0 ? '#ff4d64' : ovoUserInfo.user.gender == 1 ? '#00a0e9' : '#f0f0f0'
		}">
			加载中
		</view>

		<view v-if="!isMe && !isFollow && isInitFinish && !isMutual" class="btn" @click="follow" :style="{
			'background-color': ovoUserInfo.user.gender == 0 ? '#ff4d64' : ovoUserInfo.user.gender == 1 ? '#00a0e9' : '#f0f0f0'
		}">
			关注
		</view>

		<view v-if="!isMe && isFollow && isInitFinish && !isMutual" class="btn" style="opacity: .8;" :style="{
			'background-color': ovoUserInfo.user.gender == 0 ? '#ff4d64' : ovoUserInfo.user.gender == 1 ? '#00a0e9' : '#f0f0f0'
		}">
			<u-tooltip
			:showCopy="false"
			style="text-align: center;background-color: #000;"
			 text="已关注"
			 @click="unFollow"
			color="#fff"
			 :buttons="['取消关注']" ></u-tooltip>
		</view>

		<view v-if="!isMe && isMutual && isInitFinish" class="btn" style="opacity: .8;" :style="{
			'background-color': ovoUserInfo.user.gender == 0 ? '#ff4d64' : ovoUserInfo.user.gender == 1 ? '#00a0e9' : '#f0f0f0'
		}">
			<u-tooltip
			:showCopy="false"
			font-size="26rpx"
			style="text-align: center;background-color: #000;"
			 text="互相关注"
			 @click="unFollow"
			color="#fff"
			 :buttons="['取消关注']" ></u-tooltip>
		</view>

		<view v-if="isMe && isInitFinish" class="btn" style="opacity: .5;" :style="{
			'background-color': ovoUserInfo.user.gender == 0 ? '#ff4d64' : ovoUserInfo.user.gender == 1 ? '#00a0e9' : '#f0f0f0'
		}">
			自己
		</view>

	</view>
</template>

<script>
export default {
	name: "follow-btn",
	props: {
		ovoUserInfo: {
			type: Object,
			default() {
				return {
					userId: -1,
					user: {
						gender: -1,
					}
				}
			}
		}
	},
	data() {
		return {
			isMe: false,
			isFollow: false,
			isMutual: false,
			// 是否初始化完成
			isInitFinish: false,
		};
	},
	methods: {
		// 是否关注
		isFollowTo() {
			this.$kt.request.request({
				api: this.$api.business.ovo.userBind.isFollow,
				data: {
					userId: this.ovoUserInfo.userId,
				},
				stateSuccess: (res) => {
					this.isFollow = res.data;
					this.isInitFinish = true;
				},
			});
		},
		// 是否互相关注
		isMutualTo() {
			this.$kt.request.request({
				api: this.$api.business.ovo.userBind.isMutual,
				data: {
					userId: this.ovoUserInfo.userId,
				},
				stateSuccess: (res) => {
					this.isMutual = res.data;
					this.isInitFinish = true;
				},
			});
		},

		// 关注
		follow() {
			this.isFollow = true;
			this.$kt.request.request({
				api: this.$api.business.ovo.userBind.follow,
				data: {
					userId: this.ovoUserInfo.userId,
				},
				stateSuccess: (res) => {
					this.isFollow = true;
					this.$ovo.setSelf(res.data);
					this.isMutualTo();
					this.$emit('follow');
					uni.$emit('follow');
				},
				stateFail: (res) => {
					uni.showToast({
						title: res.errMsg,
						icon: 'none',
					});
					this.isFollow = false;
				},
				fail: (res) => {
					this.isFollow = false;
				},
			});
		},
		// 取消关注
		unFollow() {
			this.isFollow = false;
			setTimeout(() => {
				this.showModal = false;
			}, 20);
			this.$kt.request.request({
				api: this.$api.business.ovo.userBind.unFollow,
				data: {
					userId: this.ovoUserInfo.userId,
				},
				stateSuccess: (res) => {
					this.isFollow = false;
					this.isMutual = false;
					this.modalShow = false;
					this.$ovo.setSelf(res.data);
					this.$emit('unFollow');
					uni.$emit('unFollow');
				},
				stateFail: (res) => {
					uni.showToast({
						title: res.errMsg,
						icon: 'none',
					});
					this.isFollow = true;
				},
				fail: (res) => {
					this.isFollow = true;
					this.modalShow = false;
				},

			});
		},
	},
	watch: {
		ovoUserInfo: {
			handler: function (newVal, oldVal) {
				this.isMe = this.ovoUserInfo.userId == this.$ovo.getSelf().userId;
				if (this.isMe) {
					this.isInitFinish = true;
					return false;
				}
				this.isMutualTo();
				this.isFollowTo();
			},
			deep: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.btn {
	display: inline-block;
	// 圆角
	border-radius: 50rpx;
	padding: 12rpx 30rpx;
	// 字体颜色
	color: #ffffff;
	font-size: 26rpx;
	text-align: center;
	// 文字间距
	letter-spacing: 1rpx;
}
</style>