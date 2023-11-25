<template>
  <u-popup :show="show" mode="left" @close="close()">
		
    <view >
    <scroll-view
        class="box"
        scroll-y="true"
	>

      <view class="in-box">
        <view class="title">语言设置</view>
        <view class="content">
          <u-row gutter="10rpx">
            <u-col :span="6"
                   v-for="(item,index) in languageList">
              <u-button
                  @click="toSelectLanguage(item.code)"
                  :custom-style="item.code == requestParam.languageCodeOfSelect ? 'background-color: #333;color: #fff;' : ''"
              >{{ item.name }}
              </u-button>
            </u-col>
          </u-row>
        </view>
      </view>

      <!-- 语速设置  -->
      <view class="in-box">
        <view class="title">语速设置 - {{ requestParam.rate }}</view>
        <view class="content">
          <u-slider v-model="requestParam.rate" min="0.1" max="1"
                    step="0.1"
          ></u-slider>
        </view>
      </view>

      <view class="in-box">
        <view class="title">您希望TOT Reader了解您的哪些信息以提供更好的响应？</view>
        <view class="content">
          <textarea
              @input="input"
              placeholder="输入内容"
              type="textarea"
              class="textarea"
              :auto-height="true"
              maxlength="1000"
              v-model="requestParam.responseText"
          ></textarea>
          <view
              style="font-size: 18rpx;
          text-align: right;
          margin-top: 10rpx;
"
          >{{ requestParam.responseText.length }}/1000
          </view>
        </view>
      </view>

      <view class="in-box">
        <view class="title">您希望TOT Reader如何响应？</view>
        <view class="content">
          <textarea
              @input="input"
              placeholder="输入内容"
              type="textarea"
              class="textarea"
              :auto-height="true"
              maxlength="1000"
              v-model="requestParam.wouldResponseText"
          ></textarea>
          <view
              style="font-size: 18rpx;
          text-align: right;
          margin-top: 10rpx;">
            {{ requestParam.wouldResponseText.length }}/1000
          </view>
        </view>
      </view>


	</scroll-view>
    </view>
	
  </u-popup>
</template>

<script>
import UButton from "../../uni_modules/uview-ui/components/u-button/u-button.vue";
import UInput from "../../uni_modules/uview-ui/components/u--input/u--input.vue";

export default {
  components: {UInput, UButton},
  data() {
    return {
      show: true,
      languageList: [
        {
          code: "zh-CN",
          description: "中文",
          name: "中文(简体)"
        },
        {
          code: "en-US",
          description: "英语",
          name: "English"
        },
      ],

      requestParam: {
        languageCodeOfSelect: "zh-CN",
        rate: 1,
        responseText: "",
        wouldResponseText: "",
      }

    }
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false
    },
    toSelectLanguage(code) {
      this.requestParam.languageCodeOfSelect = code;
      uni.setStorageSync("languageCode", code);
      this.$emit("change");
    },
    input(e) {
      this.$emit("change");
    }
  },
  mounted() {
    this.requestParam.languageCodeOfSelect = uni.getStorageSync("languageCode") || "zh-CN";
    this.requestParam.rate = uni.getStorageSync("rate") || 0.8;
    this.requestParam.responseText = uni.getStorageSync("responseText") || "假设你是教授，请根据所给文本，先举一个例子，然后幽默生动地解释文本要点";
    this.requestParam.wouldResponseText = uni.getStorageSync("wouldResponseText") || "为了大家理解，先举个例子：...";
  },
  watch: {
    // 监听requestParam的变化
    requestParam: {
      handler: function (val, oldVal) {
        // 保存rate小数点后一位
        this.requestParam.rate = parseFloat(this.requestParam.rate.toFixed(1));
        uni.setStorageSync("rate",this.requestParam.rate );
        uni.setStorageSync("responseText",this.requestParam.responseText );
        uni.setStorageSync("wouldResponseText",this.requestParam.wouldResponseText );
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 20rpx;
  width: 80vw;
  height: 100vh;
  .in-box {
    margin: 10rpx 0 40rpx 0;
    box-sizing: border-box;
    padding: 20rpx;
    border: 1px solid #eee;
    border-radius: 10rpx;

    .title {
      margin-bottom: 20rpx;
    }

    .textarea {
      font-size: 28rpx;
      border: 1px solid #eee;
      border-radius: 10rpx;
      padding: 20rpx;
      box-sizing: border-box;
      max-height: 300rpx;
      overflow: auto;
      width: 100%;
    }
  }

}
</style>