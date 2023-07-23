(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/user-card/user-card"],{

/***/ 418:
/*!********************************************************************!*\
  !*** E:/Code/Project-5/uni-ovo/components/user-card/user-card.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_card_vue_vue_type_template_id_cbd8ff2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-card.vue?vue&type=template&id=cbd8ff2c&scoped=true& */ 419);
/* harmony import */ var _user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-card.vue?vue&type=script&lang=js& */ 421);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_card_vue_vue_type_style_index_0_id_cbd8ff2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-card.vue?vue&type=style&index=0&id=cbd8ff2c&lang=scss&scoped=true& */ 423);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 47);

var renderjs





/* normalize component */

var component = Object(_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_card_vue_vue_type_template_id_cbd8ff2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_card_vue_vue_type_template_id_cbd8ff2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cbd8ff2c",
  null,
  false,
  _user_card_vue_vue_type_template_id_cbd8ff2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/user-card/user-card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 419:
/*!***************************************************************************************************************!*\
  !*** E:/Code/Project-5/uni-ovo/components/user-card/user-card.vue?vue&type=template&id=cbd8ff2c&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_template_id_cbd8ff2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-card.vue?vue&type=template&id=cbd8ff2c&scoped=true& */ 420);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_template_id_cbd8ff2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_template_id_cbd8ff2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_template_id_cbd8ff2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_template_id_cbd8ff2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 420:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Code/Project-5/uni-ovo/components/user-card/user-card.vue?vue&type=template&id=cbd8ff2c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    avatar: function () {
      return __webpack_require__.e(/*! import() | components/avatar/avatar */ "components/avatar/avatar").then(__webpack_require__.bind(null, /*! @/components/avatar/avatar.vue */ 733))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 =
    _vm.attrShow && _vm.ovoUserInfo.user.gender == "1"
      ? _vm.$kt.file.byPath("image/icon/gender1.svg")
      : null
  var g1 =
    _vm.attrShow && !(_vm.ovoUserInfo.user.gender == "1")
      ? _vm.$kt.file.byPath("image/icon/gender0.svg")
      : null
  var g2 = _vm.attrShow
    ? _vm.ovoUserInfo.sexualOrientationCode != null &&
      _vm.ovoUserInfo.sexualOrientationCode != "" &&
      _vm.ovoUserInfo.emotionalOrientationList != null &&
      _vm.ovoUserInfo.emotionalOrientationList.length > 0
    : null
  var g3 = _vm.attrShow
    ? _vm.ovoUserInfo.emotionalOrientationList != null &&
      _vm.ovoUserInfo.emotionalOrientationList.length > 0
    : null
  var g4 =
    _vm.publishDate != null ? _vm.$kt.util.readableDate(_vm.publishDate) : null
  var g5 =
    _vm.bottomText != null && _vm.bottomText != "" && _vm.bottomTime != null
      ? _vm.$kt.util.readableDate(_vm.bottomTime)
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        g5: g5,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 421:
/*!*********************************************************************************************!*\
  !*** E:/Code/Project-5/uni-ovo/components/user-card/user-card.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-card.vue?vue&type=script&lang=js& */ 422);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 422:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Code/Project-5/uni-ovo/components/user-card/user-card.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 35));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 37));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: "user-card",
  props: {
    nicknameColor: {
      type: String,
      default: "#333"
    },
    nicknameFontSize: {
      type: String,
      default: "30rpx"
    },
    attrShow: {
      type: Boolean,
      default: true
    },
    bottomText: {
      type: String,
      default: null
    },
    bottomTime: {
      type: Number || String,
      default: null
    },
    // 头像大小
    avatarSize: {
      type: String,
      default: "100rpx"
    },
    // 关注按钮
    showFollowButton: {
      type: Boolean,
      default: false
    },
    //高亮
    highlight: {
      type: Boolean,
      default: false
    },
    publishDate: {
      type: Number,
      default: null
    },
    bottomTextShow: {
      type: Boolean,
      default: true
    },
    distanceShow: {
      type: Boolean,
      default: true
    },
    distanceInShow: {
      type: Boolean,
      default: true
    },
    ovoUserInfo: {
      type: Object,
      default: {
        emotionalOrientationList: [{
          code: "sapiosexual",
          genderLimit: -1,
          id: 1,
          name: "加载中",
          sexualOrientationLimit: false
        }],
        gmtCreate: 1685810183318,
        gmtModified: 1685811147296,
        id: 16,
        introduction: "",
        sadomasochismAttrCode: "加载中",
        sexualOrientationCode: "加载中",
        user: {
          birthday: 28800000,
          fileIdOfAvatar: null,
          gmtCreate: 1685797143441,
          gmtModified: 1685811147275,
          id: 424594399051781,
          nickname: "加载中...",
          gender: "-1",
          roles: [{
            code: "user",
            gmtCreate: 1681730486000,
            gmtModified: 1681145855686,
            id: 3,
            name: "普通用户"
          }]
        },
        location: {
          longitude: 0,
          latitude: 0,
          country: null,
          province: null,
          city: null
        },
        userId: 424594399051781
      }
    }
  },
  data: function data() {
    var sexualOrientationMap = this.$ovo.getSexualOrientationMap();
    return {
      textOpcaity: 1,
      sexualOrientationMap: sexualOrientationMap,
      sexualOrientationName: "",
      sadomasochismAttrName: "",
      age: 0,
      // 距离
      distance: null,
      // 距离显示的文本
      distanceText: "",
      userSelf: {
        location: {
          longitude: 0,
          latitude: 0,
          // 国家
          country: null,
          // 省份
          province: null,
          // 城市
          city: null
        },
        gender: "-1"
      },
      // 位置文字
      locationText: "",
      // 是否有经纬度信息
      hasPosition: false,
      toShowDistanceOpt: false,
      publishDateText: "",
      emotionalOrientationMap: {}
    };
  },
  created: function created() {
    this.emotionalOrientationMap = this.$ovo.getEmotionalOrientationMap();
  },
  // 初始化
  mounted: function mounted() {
    var _this = this;
    uni.$on("changeOvoSelfInfo", function (ovoUserInfo) {
      _this.userSelf = ovoUserInfo;
      _this.locationOpt();
    });
    uni.$on("changeSexualOrientationMap", function (sexualOrientationMap) {
      _this.sexualOrientationName = _this.$ovo.toSexualOrientationPlus(_this.ovoUserInfo.sexualOrientationCode, _this.ovoUserInfo.user.gender);
    });
    uni.$on("changeSadomasochismAttrMap", function (sadomasochismAttrMap) {
      // 兴趣取向
      _this.sadomasochismAttrName = _this.$ovo.getSadomasochismAttrMap()[_this.ovoUserInfo.sadomasochismAttrCode];
    });

    //this.$api.business.ovo.emotionalOrientation.getMap,
    uni.$on("changeEmotionalOrientationMap", function (emotionalOrientationMap) {
      _this.emotionalOrientationMap = emotionalOrientationMap;
    });
  },
  methods: {
    /**
     * 
     * @param {*} dateTime 时间戳
     */
    toDateText: function toDateText(dateTime) {
      // 获取当前时间戳
      var now = new Date().getTime();
      // 如果小于一分钟，显示刚刚
      if (now - dateTime < 60 * 1000) {
        return "刚刚";
      }
      // 如果小于五分钟，显示几分钟前
      if (now - dateTime < 5 * 60 * 1000) {
        return "5分钟前";
      }
      // 如果大于五分钟，小于一小时，显示几分钟前
      if (now - dateTime < 60 * 60 * 1000) {
        return "几分钟前";
      }
      // 获取今天的年月日和dateTime的年月日
      var nowDate = new Date(now);
      var dateTimeDate = new Date(dateTime);
      // 如果是同一天，显示hh:mm
      if (nowDate.getFullYear() == dateTimeDate.getFullYear() && nowDate.getMonth() == dateTimeDate.getMonth() && nowDate.getDate() == dateTimeDate.getDate()) {
        return this.$kt.util.dateFromat(dateTime, "hh:mm");
      }
      // 如果是昨天，显示昨天 hh:mm
      if (nowDate.getFullYear() == dateTimeDate.getFullYear() && nowDate.getMonth() == dateTimeDate.getMonth() && nowDate.getDate() - dateTimeDate.getDate() == 1) {
        return "昨天 " + this.$kt.util.dateFromat(dateTime, "hh:mm");
      }
      // 如果是今年，显示MM-dd hh:mm
      if (nowDate.getFullYear() == dateTimeDate.getFullYear() && nowDate.getMonth() == dateTimeDate.getMonth()) {
        return this.$kt.util.dateFromat(dateTime, "MM-dd hh:mm");
      }
      // 如果是去年，显示yyyy-MM-dd hh:mm
      return this.$kt.util.dateFromat(dateTime, "yyyy-MM-dd hh:mm");
    },
    openSetting: function openSetting() {
      var _this2 = this;
      uni.openSetting({
        success: function success(res) {
          if (res.authSetting["scope.userLocation"]) {
            _this2.$ovo.getLocation();
          }
        }
      });
    },
    toShowDistanceClick: function toShowDistanceClick() {
      var _this3 = this;
      this.toShowDistanceOpt = true;
      setTimeout(function () {
        _this3.toShowDistanceOpt = false;
      }, 500);
      uni.getSetting({
        success: function success(res) {
          console.log(res);
          if (res.authSetting["scope.userLocation"] == null) {
            _this3.$ovo.getLocation();
          } else if (!res.authSetting["scope.userLocation"]) {
            _this3.openSetting();
          } else {
            // this.getLocation();
            _this3.$ovo.getLocation();
          }
        }
      });
    },
    click: function click() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (resolve) {
                  setTimeout(function () {
                    _this4.$emit("click");
                    resolve("");
                  }, 10);
                });
              case 2:
                console.log("cardClick", _this4.toShowDistanceOpt);
                if (!_this4.toShowDistanceOpt) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", false);
              case 5:
                _this4.textOpcaity = 0.5;
                setTimeout(function () {
                  _this4.textOpcaity = 1;
                }, 500);
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 根据经纬度计算距离，单位为米
    getDistance: function getDistance(lat1, lng1, lat2, lng2) {
      var lat1Rad = lat1 * Math.PI / 180;
      var lat2Rad = lat2 * Math.PI / 180;
      var lng1Rad = lng1 * Math.PI / 180;
      var lng2Rad = lng2 * Math.PI / 180;
      var a = lat1Rad - lat2Rad;
      var b = lng1Rad - lng2Rad;
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.pow(Math.sin(b / 2), 2)));
      var result = s * 6378137;
      result = Math.round(result * 10000) / 10000;
      return result;
    },
    // 距离显示的文本
    getDistanceText: function getDistanceText(distance) {
      if (distance < 1) {
        return "1m";
      } else if (distance < 1000) {
        // 去除小数点后面的数字
        distance = parseInt(distance);
        return distance + "m";
      } else {
        return (distance / 1000).toFixed(1) + "km";
      }
    },
    getLocationText: function getLocationText(location) {
      if (location == null || location == undefined) {
        return "未知";
      }
      if (location.city != null) {
        return location.city;
      }
      if (location.province != null) {
        return location.province;
      }
      if (location.country != null) {
        return location.country;
      }
      return "未知";
    },
    locationOpt: function locationOpt() {
      this.locationText = this.getLocationText(this.ovoUserInfo.location);
      if (this.ovoUserInfo.location != null && this.ovoUserInfo.location.latitude != null && this.ovoUserInfo.location.longitude != null) {
        this.hasPosition = true;
      }
      if (this.ovoUserInfo.location != null && this.ovoUserInfo.location.latitude != null && this.ovoUserInfo.location.longitude != null && this.userSelf.location != null && this.userSelf.location.latitude != null && this.userSelf.location.longitude != null) {
        this.distance = this.getDistance(this.ovoUserInfo.location.latitude, this.ovoUserInfo.location.longitude, this.userSelf.location.latitude, this.userSelf.location.longitude);
        this.distanceText = this.getDistanceText(this.distance);
      }
      this.$forceUpdate();
    },
    initAge: function initAge() {
      // 性取向
      this.sexualOrientationName = this.$ovo.toSexualOrientationPlus(this.ovoUserInfo.sexualOrientationCode, this.ovoUserInfo.user.gender);
      // 兴趣取向
      this.sadomasochismAttrName = this.$ovo.getSadomasochismAttrMap()[this.ovoUserInfo.sadomasochismAttrCode];

      // 年龄
      var birthdayData = new Date(this.ovoUserInfo.user.birthday);
      // 当前时间
      var timeNowData = new Date();
      // 年龄
      var age = timeNowData.getFullYear() - birthdayData.getFullYear();
      if (timeNowData.getMonth() < birthdayData.getMonth() || timeNowData.getMonth() == birthdayData.getMonth() && timeNowData.getDate() < birthdayData.getDate()) {
        age--;
      }
      this.age = age;
    }
  },
  watch: {
    ovoUserInfo: {
      handler: function handler(val, oldVal) {
        this.userSelf = this.$ovo.getSelf();
        this.initAge();
        if (this.userSelf != null && this.userSelf != "" && this.userSelf.location != null && this.userSelf.location != "" && this.userSelf.location.latitude != null && this.userSelf.location.latitude != "") {
          this.locationOpt();
        }
        this.$forceUpdate();
      },
      immediate: true,
      deep: true
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 423:
/*!******************************************************************************************************************************!*\
  !*** E:/Code/Project-5/uni-ovo/components/user-card/user-card.vue?vue&type=style&index=0&id=cbd8ff2c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_style_index_0_id_cbd8ff2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-card.vue?vue&type=style&index=0&id=cbd8ff2c&lang=scss&scoped=true& */ 424);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_style_index_0_id_cbd8ff2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_style_index_0_id_cbd8ff2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_style_index_0_id_cbd8ff2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_style_index_0_id_cbd8ff2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_card_vue_vue_type_style_index_0_id_cbd8ff2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 424:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Code/Project-5/uni-ovo/components/user-card/user-card.vue?vue&type=style&index=0&id=cbd8ff2c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/user-card/user-card.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/user-card/user-card-create-component',
    {
        'components/user-card/user-card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(418))
        })
    },
    [['components/user-card/user-card-create-component']]
]);
