const api = {

	api: {
		location: {
			/**
			 * 根据经纬度范围查询
	 		 * @param latitude 纬度
	 		 * @param longitude 经度
	 		 * @param range 范围 单位：米
	 		 * @param expand 是否扩大范围 0：不扩大；1：扩大
	 		 * @return 位置信息
			 */
			getLocationInfoByRange: { path: "api/location/getLocationInfoByRange", method: "post", contentType: "application/x-www-form-urlencoded" },
		}
	},

	pay:{
		pay:{
			wechatPay:{path:"pay/pay/wechatPay",method:"post",contentType:"application/x-www-form-urlencoded"},
		}
	},

	system: {
		address: {
			/**
			 * @description 添加地址
			 */
			save: { path: "system/address/save", method: "post", contentType: "application/x-www-form-urlencoded" },
			/**
			 * @description 删除地址
			 */
			remove: { path: "system/address/remove", method: "post", contentType: "application/x-www-form-urlencoded" },
			/**
			 * @description 获取默认地址
			 */
			getDefault: { path: "system/address/getDefault", method: "post", contentType: "application/x-www-form-urlencoded" },
			
		},

		verificationCode: {
			/**
			 * @description 发送验证码
			 */
			send: { path: "system/verificationCode/send", method: "post", contentType: "application/x-www-form-urlencoded" },
		},

		dictI18n: {
			getAppFront: { path: "system/dictI18n/getAppFront", method: "post", contentType: "application/x-www-form-urlencoded" },
		},

		user: {
			updateAvatar: { path: "system/user/updateAvatar", method: "post", contentType: "application/x-www-form-urlencoded" },
			/**
			 * @description 获取用户信息
			*/
			getSelf: { path: "system/user/getSelf", method: "post", contentType: "application/x-www-form-urlencoded" },
			bindEmail: { path: "system/user/bindEmail", method: "post", contentType: "application/x-www-form-urlencoded" },

		},

		file: {
			uploadFile: { path: "system/file/uploadFile", method: "post", contentType: "multipart/form-data", isUploadFile: true },
		},

		util: {
			/**
			 * @description 获取当前的GMT时间戳
			 */
			getGMTTime: { path: "system/util/getGMTTime", method: "post", contentType: "application/x-www-form-urlencoded" },
		},

		balance: {
			/**
			 * @description 获取余额
			 */
			getSelfMap: { path: "system/balance/getSelfMap", method: "post", contentType: "application/x-www-form-urlencoded" },
		}
	},

	thirdParty: {
		wechatUser: {
			/**
			 * @description 微信小程序登录
			 */
			loginInMp: { path: "thirdParty/wechatUser/loginInMp", method: "post", contentType: "application/x-www-form-urlencoded" },
		}
	},

	// /business/ovo/sexualOrientation
	business: {
		push:{
			/**
			 * 绑定
			 **/
			bind: { path: "business/push/push/bind", method: "post", contentType: "application/x-www-form-urlencoded" },
		},

		ovoShop:{
			goodsType:{
				getList: { path: "business/ovoShop/goodsType/getList", method: "post", contentType: "application/x-www-form-urlencoded" },

			},
			goods:{
				getByTypeCode: { path: "business/ovoShop/goods/getByTypeCode", method: "post", contentType: "application/x-www-form-urlencoded" },
				getById: { path: "business/ovoShop/goods/getById", method: "post", contentType: "application/x-www-form-urlencoded" },
				exchange: { path: "business/ovoShop/goods/exchange", method: "post", contentType: "application/json" },
			},
			goodsAttr:{
				getMap: { path: "business/ovoShop/goodsAttr/getMap", method: "post", contentType: "application/x-www-form-urlencoded" },
			},
			goodsExchange:{
				getMapSelf: { path: "business/ovoShop/goodsExchange/getMapSelf", method: "post", contentType: "application/x-www-form-urlencoded" },
			}
		},

		ovo: {
			sexualOrientation: {
				/**
				 * @description 获取性取向列表
				 */
				getList: { path: "business/ovo/sexualOrientation/getList", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 获取性取向字典
				 */
				getMap: { path: "business/ovo/sexualOrientation/getMap", method: "post", contentType: "application/x-www-form-urlencoded" },
			},
			emotionalOrientation: {
				/**
				 * @description 获取情感取向列表
				 */
				getByGenderAndSexualOrientationCode: { path: "business/ovo/emotionalOrientation/getByGenderAndSexualOrientationCode", method: "post", contentType: "application/x-www-form-urlencoded" },
				getMap: { path: "business/ovo/emotionalOrientation/getMap", method: "post", contentType: "application/x-www-form-urlencoded" },
			},
			sadomasochismAttr: {
				/**
				 * @description 获取SM属性列表
				 */
				getList: { path: "business/ovo/sadomasochismAttr/getList", method: "post", contentType: "application/x-www-form-urlencoded" },
				getMap: { path: "business/ovo/sadomasochismAttr/getMap", method: "post", contentType: "application/x-www-form-urlencoded" },
			},
			userBind: {
				findLess: { path: "business/ovo/userBind/findLess", method: "post", contentType: "application/x-www-form-urlencoded" },
				findGreater: { path: "business/ovo/userBind/findGreater", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 绑定用户
				 */
				bind: { path: "business/ovo/userBind/bind", method: "post", contentType: "application/json" },
				/**
				 * @description 用户自身绑定信息
				 */
				getSelf: { path: "business/ovo/userBind/getSelf", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 获取推荐列表
				 * @param {Number} pageNumer 页码
				 * @param {String} sortField 排序字段
				 * @param {String} sortOrderBy 排序方式
				 */
				getRecommendList: { path: "business/ovo/userBind/getRecommendList", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 修改位置
				 */
				updateLocation: { path: "business/ovo/userBind/updateLocation", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 附近的人
				 */
				getNear: { path: "business/ovo/userBind/getNear", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 根据范围获取附近的位置
				 */
				getLocationInfoByRangeSelf: { path: "business/ovo/userBind/getLocationInfoByRangeSelf", method: "post", contentType: "application/x-www-form-urlencoded" },

				/**
				 * @description 是否关注
				 */
				isFollow: { path: "business/ovo/userBind/isFollow", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 是否互相关注
				 */
				isMutual: { path: "business/ovo/userBind/isMutual", method: "post", contentType: "application/x-www-form-urlencoded" },
				
				/**
				 * @description 关注
				 */
				follow: { path: "business/ovo/userBind/follow", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 取消关注
				 */
				unFollow: { path: "business/ovo/userBind/unFollow", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 获取自己的关注列表
				 */
				getFollowingListSelf: { path: "business/ovo/userBind/getFollowingListSelf", method: "post", contentType: "application/x-www-form-urlencoded" },

				/**
				 * @description 获取关注自己的列表
				 */
				getFollowerListSelf: { path: "business/ovo/userBind/getFollowerListSelf", method: "post", contentType: "application/x-www-form-urlencoded" },
				
				/**
				 * @description 获取相互关注的列表
				 */
				getMutualSelf: { path: "business/ovo/userBind/getMutualSelf", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * getFollowerAndFollowingCountByUserId
				 * @description 根据用户id获取关注和粉丝数量
				 */
				getFollowerAndFollowingCountByUserId: { path: "business/ovo/userBind/getFollowerAndFollowingCountByUserId", method: "post", contentType: "application/x-www-form-urlencoded" },
			},
			// bussiness/ovo/post/publish
			post: {
				getFollowDefault: { path: "business/ovo/post/getFollowDefault", method: "post", contentType: "application/x-www-form-urlencoded" },

				getFollowLess: { path: "business/ovo/post/getFollowLess", method: "post", contentType: "application/x-www-form-urlencoded" },

				getFollowGreater: { path: "business/ovo/post/getFollowGreater", method: "post", contentType: "application/x-www-form-urlencoded" },

				getDefaultRecommend: { path: "business/ovo/post/getDefaultRecommend", method: "post", contentType: "application/x-www-form-urlencoded" },

				getGreaterOfRecommend: { path: "business/ovo/post/getGreaterOfRecommend", method: "post", contentType: "application/x-www-form-urlencoded" },

				getLessOfRecommend: { path: "business/ovo/post/getLessOfRecommend", method: "post", contentType: "application/x-www-form-urlencoded" },

				getHot: { path: "business/ovo/post/getHot", method: "post", contentType: "application/x-www-form-urlencoded" },

				getAfterById: { path: "business/ovo/post/getAfterById", method: "post", contentType: "application/x-www-form-urlencoded" },
				
				getDefault: { path: "business/ovo/post/getDefault", method: "post", contentType: "application/x-www-form-urlencoded" },
				
				getBeforeById: { path: "business/ovo/post/getBeforeById", method: "post", contentType: "application/x-www-form-urlencoded" },
				getLikeAndCommentCountAndIsLike: { path: "business/ovo/post/getLikeAndCommentCountAndIsLike", method: "post", contentType: "application/x-www-form-urlencoded" },
				/**
				 * @description 发布动态
				 */
				publish: { path: "business/ovo/post/publish", method: "post", contentType: "application/json" },

				/**
				 * @description 获取自己的动态列表
				 */
				getSelf: { path: "business/ovo/post/getSelf", method: "post", contentType: "application/x-www-form-urlencoded" },

				/**
				 * @description 获取推荐动态列表
				 */
				getRecommend: { path: "business/ovo/post/getRecommend", method: "post", contentType: "application/x-www-form-urlencoded" },
			
				getNear: { path: "business/ovo/post/getNear", method: "post", contentType: "application/x-www-form-urlencoded" },

				like: { path: "business/ovo/post/like", method: "post", contentType: "application/x-www-form-urlencoded" },
				unLike: { path: "business/ovo/post/unLike", method: "post", contentType: "application/x-www-form-urlencoded" },
				getById: { path: "business/ovo/post/getById", method: "post", contentType: "application/x-www-form-urlencoded" },
			},
			postComment: {
				getByPostId: { path: "business/ovo/postComment/getByPostId", method: "post", contentType: "application/x-www-form-urlencoded" },
				like: { path: "business/ovo/postComment/like", method: "post", contentType: "application/x-www-form-urlencoded" },
				publish: { path: "business/ovo/postComment/publish", method: "post", contentType: "application/json" },
			},
			chatRoom:{
				getSelfRoom: { path:"business/ovo/chatRoom/getSelfRoom",method:"post",contentType:"application/x-www-form-urlencoded" },
				getById: { path:"business/ovo/chatRoom/getById",method:"post",contentType:"application/x-www-form-urlencoded" },
				getPrivateChatRoomByOtherUserId: { path:"business/ovo/chatRoom/getPrivateChatRoomByOtherUserId",method:"post",contentType:"application/x-www-form-urlencoded" },
			},
			chat:{
				getByRoomId: { path:"business/ovo/chat/getByRoomId",method:"post",contentType:"application/x-www-form-urlencoded" },
				chatPrivate: { path:"business/ovo/chat/chatPrivate",method:"post",contentType:"application/json" },
				findLess: { path:"business/ovo/chat/findLess",method:"post",contentType:"application/x-www-form-urlencoded" },
			},
			oMoney:{
				getOvoOMoneyList: { path:"business/ovo/oMoney/getOvoOMoneyList",method:"post",contentType:"application/x-www-form-urlencoded" },
				buy: { path:"business/ovo/oMoney/buy",method:"post",contentType:"application/x-www-form-urlencoded" },
			},
			oMoneyDetail:{
				getSelf: { path:"business/ovo/oMoneyDetail/getSelf",method:"post",contentType:"application/x-www-form-urlencoded" },
			},
			gift:{
				getAll: { path:"business/ovo/gift/getAll",method:"post",contentType:"application/x-www-form-urlencoded" },
				give: { path:"business/ovo/gift/give",method:"post",contentType:"application/json" },
				/**
				 * @description 获取礼物字典
				 */
				getMap: { path:"business/ovo/gift/getMap",method:"post",contentType:"application/x-www-form-urlencoded" },
			},
			userCharm:{
				/**
				 * @description 获取魅力榜
				 */
				getTopByTimestamp: { path:"business/ovo/userCharm/getTopByTimestamp",method:"post",contentType:"application/x-www-form-urlencoded" },
				getCharmSelf: { path:"business/ovo/userCharm/getCharmSelf",method:"post",contentType:"application/x-www-form-urlencoded" },
				getGuardiansOfSelf: { path:"business/ovo/userCharm/getGuardiansOfSelf",method:"post",contentType:"application/x-www-form-urlencoded" },
			},
			userCharmDetail:{
				getListOfSelf: { path:"business/ovo/userCharmDetail/getListOfSelf",method:"post",contentType:"application/x-www-form-urlencoded" },
				getContributionListOfSelf: { path:"business/ovo/userCharmDetail/getContributionListOfSelf",method:"post",contentType:"application/x-www-form-urlencoded" },
			},
			vip:{
				getAll: { path:"business/ovo/vip/getAll",method:"post",contentType:"application/x-www-form-urlencoded" },
			}

		}
	}

}

export default api;