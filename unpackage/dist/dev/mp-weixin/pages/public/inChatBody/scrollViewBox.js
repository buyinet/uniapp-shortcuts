(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/public/inChatBody/scrollViewBox"],{

/***/ 536:
/*!***************************************************************************!*\
  !*** E:/Code/Project-5/uni-ovo/pages/public/inChatBody/scrollViewBox.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollViewBox_vue_vue_type_template_id_682a24a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollViewBox.vue?vue&type=template&id=682a24a6&scoped=true& */ 537);
/* harmony import */ var _scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollViewBox.vue?vue&type=script&lang=js& */ 539);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _scrollViewBox_vue_vue_type_style_index_0_id_682a24a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollViewBox.vue?vue&type=style&index=0&id=682a24a6&lang=scss&scoped=true& */ 541);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 47);

var renderjs





/* normalize component */

var component = Object(_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _scrollViewBox_vue_vue_type_template_id_682a24a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _scrollViewBox_vue_vue_type_template_id_682a24a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "682a24a6",
  null,
  false,
  _scrollViewBox_vue_vue_type_template_id_682a24a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/public/inChatBody/scrollViewBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 537:
/*!**********************************************************************************************************************!*\
  !*** E:/Code/Project-5/uni-ovo/pages/public/inChatBody/scrollViewBox.vue?vue&type=template&id=682a24a6&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_template_id_682a24a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./scrollViewBox.vue?vue&type=template&id=682a24a6&scoped=true& */ 538);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_template_id_682a24a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_template_id_682a24a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_template_id_682a24a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_template_id_682a24a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 538:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Code/Project-5/uni-ovo/pages/public/inChatBody/scrollViewBox.vue?vue&type=template&id=682a24a6&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    userCard: function () {
      return __webpack_require__.e(/*! import() | components/user-card/user-card */ "components/user-card/user-card").then(__webpack_require__.bind(null, /*! @/components/user-card/user-card.vue */ 418))
    },
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
  var g0 = _vm.isToBottom && _vm.bodyData.content.length > 0
  var g1 = _vm.bodyData.content.length
  var g2 = g1 == 0 ? _vm.$kt.file.byPath("image/tabbar/msg.svg") : null
  var l0 = _vm.__map(_vm.bodyData.content, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g3 =
      item.isShowTime || index == 0
        ? _vm.$kt.util.readableDate(item.gmtCreate)
        : null
    var m0 = _vm.isMeSend(item)
    var m1 = item.typeCode == "image" ? _vm.isMeSend(item) : null
    var g4 = item.typeCode == "image" ? _vm.$kt.file.visit(item.content) : null
    var g5 = item.typeCode == "image" ? _vm.$kt.file.visit(item.content) : null
    var m2 = item.typeCode == "video" ? _vm.isMeSend(item) : null
    var g6 = item.typeCode == "video" ? _vm.$kt.file.visit(item.content) : null
    var m3 = item.typeCode == "voice" ? _vm.voiceToWidth(item) : null
    var m4 = item.typeCode == "voice" ? _vm.isMeSend(item) : null
    var m5 =
      item.typeCode == "voice"
        ? item.duration != null && item.duration != "" && _vm.isMeSend(item)
        : null
    var g7 =
      item.typeCode == "voice" && m5 ? (item.duration / 1000).toFixed(0) : null
    var t0 = item.typeCode == "voice" && m5 ? '"' : null
    var m6 =
      item.typeCode == "voice" &&
      (!_vm.isPlayingVoice || _vm.playingVoiceItem.content != item.content)
        ? _vm.isMeSend(item)
        : null
    var g8 =
      item.typeCode == "voice" &&
      (!_vm.isPlayingVoice || _vm.playingVoiceItem.content != item.content)
        ? _vm.$kt.file.byPath("image/icon/voice.svg")
        : null
    var m7 =
      item.typeCode == "voice" &&
      _vm.isPlayingVoice &&
      _vm.playingVoiceItem.content == item.content
        ? _vm.isMeSend(item)
        : null
    var g9 =
      item.typeCode == "voice" &&
      _vm.isPlayingVoice &&
      _vm.playingVoiceItem.content == item.content &&
      _vm.voiceIconIndex == 0
        ? _vm.$kt.file.byPath("image/icon/voiceInPlay0.png")
        : null
    var g10 =
      item.typeCode == "voice" &&
      _vm.isPlayingVoice &&
      _vm.playingVoiceItem.content == item.content &&
      _vm.voiceIconIndex == 1
        ? _vm.$kt.file.byPath("image/icon/voiceInPlay1.png")
        : null
    var g11 =
      item.typeCode == "voice" &&
      _vm.isPlayingVoice &&
      _vm.playingVoiceItem.content == item.content &&
      _vm.voiceIconIndex == 2
        ? _vm.$kt.file.byPath("image/icon/voice.svg")
        : null
    var m8 =
      item.typeCode == "voice"
        ? item.duration != null && item.duration != "" && !_vm.isMeSend(item)
        : null
    var g12 =
      item.typeCode == "voice" && m8 ? (item.duration / 1000).toFixed(0) : null
    var t1 = item.typeCode == "voice" && m8 ? '"' : null
    var m9 = _vm.isMeSend(item)
    var m10 = !m9 & !item.isRead ? _vm.read(item) : null
    var m11 = _vm.isMeSend(item)
    return {
      $orig: $orig,
      g3: g3,
      m0: m0,
      m1: m1,
      g4: g4,
      g5: g5,
      m2: m2,
      g6: g6,
      m3: m3,
      m4: m4,
      m5: m5,
      g7: g7,
      t0: t0,
      m6: m6,
      g8: g8,
      m7: m7,
      g9: g9,
      g10: g10,
      g11: g11,
      m8: m8,
      g12: g12,
      t1: t1,
      m9: m9,
      m10: m10,
      m11: m11,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 539:
/*!****************************************************************************************************!*\
  !*** E:/Code/Project-5/uni-ovo/pages/public/inChatBody/scrollViewBox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./scrollViewBox.vue?vue&type=script&lang=js& */ 540);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 540:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Code/Project-5/uni-ovo/pages/public/inChatBody/scrollViewBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var recorderManager = uni.getRecorderManager();
var innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
var _default2 = {
  props: {
    room: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  data: function data() {
    return {
      // 是否到底部
      isToBottom: false,
      // 是否显示刷新
      isRefresherTriggered: false,
      // 是否不能再刷新
      isRefresherEnabled: true,
      requestParam: {
        typeCode: "privateChat",
        roomId: "",
        otherUserId: "",
        pageNumber: 1
      },
      bodyData: {
        content: []
      },
      // 是否加载完毕
      isLoadOver: false,
      // 正在播放的语音的item
      playingVoiceItem: {
        content: ""
      },
      // 是否正在播放语音
      isPlayingVoice: false,
      // 语音图片显示的index
      voiceIconIndex: 0,
      // 语音图片显示的定时器
      voiceIconInterval: null,
      roomIdNumber: 0
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (this.room.id != null) {
      uni.showLoading({
        title: '加载中'
      });
      this.roomIdNumber++;
      this.onRoomChat();
      this.requestParam.roomId = this.room.roomId;
      this.requestParam.typeCode = this.room.typeCode;
      if (this.room.typeCode == "privateChat") {
        this.requestParam.otherUserId = this.room.otherUser.userId;
      }
      this.getBodyData();
      return false;
    }
    setTimeout(function () {
      _this.isToBottom = false;
    }, 100);
    setTimeout(function () {
      _this.isToBottom = true;
    }, 1000);
  },
  methods: {
    read: function read(item) {
      var _this2 = this;
      setTimeout(function () {
        console.log("read-------");
        if (item.isRead) {
          return "";
        }
        item.isRead = true;
        // 删除未读消息记录
        _this2.$ovo.removeUnreadMessage(item);
      }, 500);
      return "";
    },
    voiceToWidth: function voiceToWidth(item) {
      if (item.duration == null && item.duration == '') {
        return '90rpx';
      }
      if (item.duration < 1000) {
        this.item.duration = 1000;
      }
      if (item.duration > 60000) {
        this.item.duration = 60000;
      }
      if (item.duration / 1000 < 3) {
        return '90rpx';
      }
      if (item.duration / 1000 * 10 + 50 < 380) {
        return item.duration / 1000 * 10 + 50 + "rpx";
      }
      return '380rpx';
    },
    /**
     * 监听聊天
     * @param {} item 
     */
    onRoomChat: function onRoomChat() {
      var _this3 = this;
      console.log("onRoomChat发起了监听");
      uni.$on("newChat:roomId:" + this.room.roomId, function (data) {
        // 判断是否有重复
        if (_this3.isRepeat(data)) {
          return false;
        }

        // 如果是私聊，且不是我发的，就添加到bodyData
        if (_this3.requestParam.typeCode == "privateChat" && !_this3.isMeSend(data)) {
          data.ovoUserOfSend = _this3.room.otherUser;
          data.isMeSend = false;
          _this3.toBottom();
        }
        if (_this3.requestParam.typeCode == "privateChat" && _this3.isMeSend(data)) {
          data.ovoUserOfSend = _this3.$ovo.getSelf();
          data.isMeSend = true;
          _this3.toBottom();
        }
        if (_this3.$ovo.isUnreadMessage(data.id)) {
          _this3.read(data);
        }
        data.isRead = true;
        _this3.bodyDataPush(data);
      });
    },
    playVoice: function playVoice(item) {
      var _this4 = this;
      if (this.playingVoiceItem.content == item.content) {
        this.isPlayingVoice = false;
        clearInterval(this.voiceIconInterval);
        innerAudioContext.stop();
        this.playingVoiceItem = {
          content: ""
        };
        return false;
      }
      clearInterval(this.voiceIconInterval);
      this.isPlayingVoice = true;
      this.playingVoiceItem = item;
      innerAudioContext.stop();
      setTimeout(function () {
        innerAudioContext.src = _this4.$kt.file.visit(item.content);
        console.log(innerAudioContext.src);
        innerAudioContext.play();
        _this4.voiceIconInterval = setInterval(function () {
          _this4.voiceIconIndex++;
          if (_this4.voiceIconIndex > 2) {
            _this4.voiceIconIndex = 0;
          }
        }, 500);
        setTimeout(function () {
          clearInterval(_this4.voiceIconInterval);
          _this4.voiceIconIndex = 0;
          _this4.isPlayingVoice = false;
        }, item.duration);
      }, 100);
    },
    /**
     * 前往底部
     */
    toBottom: function toBottom() {
      var _this5 = this;
      this.isToBottom = false;
      setTimeout(function () {
        _this5.isToBottom = true;
      }, 10);
    },
    refresherpulling: function refresherpulling() {
      var _this6 = this;
      if (this.isRefresherTriggered) {
        return false;
      }
      this.isRefresherTriggered = true;
      setTimeout(function () {
        _this6.isRefresherTriggered = false;
      }, 1000);
      if (!this.isRefresherEnabled) {
        return false;
      }
      this.findLess();
    },
    findLess: function findLess() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this7.room.id == null || _this7.room.id == '')) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", false);
              case 2:
                _this7.requestParam.roomId = _this7.room.id;
                _context.next = 5;
                return new Promise(function (resolve, reject) {
                  _this7.$kt.request.request({
                    api: _this7.$api.business.ovo.chat.findLess,
                    data: {
                      roomId: _this7.requestParam.roomId,
                      id: _this7.bodyData.content[0].id
                    },
                    stateSuccess: function stateSuccess(res) {
                      var jsonArr = res.data.content;
                      if (jsonArr.length == 0) {
                        // 关闭刷新
                        _this7.isRefresherEnabled = false;
                        // 没有数据，不再请求
                        return false;
                      }
                      for (var i = 0; i < jsonArr.length; i++) {
                        // 是否显示时间
                        if (i == 0) {
                          jsonArr[i].isShowTime = true;
                        } else {
                          jsonArr[i].isShowTime = jsonArr[i].gmtCreate - jsonArr[i - 1].gmtCreate > 5 * 60 * 1000;
                        }
                        if (_this7.$ovo.isUnreadMessage(jsonArr[i].id)) {
                          jsonArr[i].isRead = false;
                        } else {
                          jsonArr[i].isRead = true;
                        }
                        _this7.bodyDataAdd(jsonArr[i]);
                        if (!_this7.isLoadOver) {
                          _this7.toBottom();
                        }
                      }
                      if (!_this7.isLoadOver) {
                        uni.hideLoading();
                      }
                      _this7.isLoadOver = true;
                      resolve();
                    }
                  });
                });
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getBodyData: function getBodyData() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this8.room.id == null || _this8.room.id == '')) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return", false);
              case 2:
                _this8.requestParam.roomId = _this8.room.id;
                _context2.next = 5;
                return new Promise(function (resolve, reject) {
                  _this8.$kt.request.request({
                    api: _this8.$api.business.ovo.chat.getByRoomId,
                    data: _this8.requestParam,
                    stateSuccess: function stateSuccess(res) {
                      var jsonArr = res.data.content;
                      if (jsonArr.length == 0) {
                        _this8.requestParam.pageNumber--;
                        // 关闭刷新
                        _this8.isRefresherEnabled = false;
                        // 没有数据，不再请求
                        return false;
                      }
                      // 添加分页，为了下一次请求
                      _this8.requestParam.pageNumber++;
                      for (var i = 0; i < jsonArr.length; i++) {
                        // 是否显示时间
                        if (i == 0) {
                          jsonArr[i].isShowTime = true;
                        } else {
                          jsonArr[i].isShowTime = jsonArr[i].gmtCreate - jsonArr[i - 1].gmtCreate > 5 * 60 * 1000;
                        }
                        if (_this8.$ovo.isUnreadMessage(jsonArr[i].id)) {
                          jsonArr[i].isRead = false;
                        } else {
                          jsonArr[i].isRead = true;
                        }
                        _this8.bodyDataAdd(jsonArr[i]);
                        if (!_this8.isLoadOver) {
                          _this8.toBottom();
                        }
                      }
                      if (!_this8.isLoadOver) {
                        uni.hideLoading();
                      }
                      _this8.isLoadOver = true;
                      resolve();
                    }
                  });
                });
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    bodyDataAdd: function bodyDataAdd(item) {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // 是否是自己发送的，用于判断消息显示在左边还是右边
                item.isMeSend = _this9.isMeSend(item);
                _context3.next = 3;
                return new Promise(function (resolve, reject) {
                  if (_this9.isLoadOver) {
                    setTimeout(function () {
                      // 判断是否有重复
                      if (_this9.isRepeat(item)) {
                        resolve();
                        return false;
                      }
                      _this9.bodyData.content.unshift(item);
                      resolve();
                    }, 200);
                  } else {
                    _this9.bodyData.content.unshift(item);
                    _this9.toBottom();
                    resolve();
                  }
                });
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    bodyDataPush: function bodyDataPush(item) {
      console.log('bodyDataPush');
      this.bodyData.content.push(item);
    },
    isMeSend: function isMeSend(item) {
      return item.userIdOfSend == this.$ovo.getSelf().userId;
    },
    // 判断新增的消息是否有重复
    isRepeat: function isRepeat(item) {
      for (var i = 0; i < this.bodyData.content.length; i++) {
        if (this.bodyData.content[i].id == item.id) {
          return true;
        }
      }
      return false;
    },
    /**
     * 查看图片
     */
    previewImage: function previewImage(url) {
      uni.previewImage({
        urls: [url],
        current: url
      });
    }
  },
  watch: {
    // 监听数据变化
    room: {
      handler: function handler(val, oldVal) {
        if (this.room.id != null && this.room.id != '') {
          console.log("room.id:" + this.room.id);
          if (this.roomIdNumber == 0) {
            this.onRoomChat();
            this.$forceUpdate();
          }
          // this.roomIdNumber++;
        }
      },

      deep: true,
      immediate: true
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 541:
/*!*************************************************************************************************************************************!*\
  !*** E:/Code/Project-5/uni-ovo/pages/public/inChatBody/scrollViewBox.vue?vue&type=style&index=0&id=682a24a6&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_style_index_0_id_682a24a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./scrollViewBox.vue?vue&type=style&index=0&id=682a24a6&lang=scss&scoped=true& */ 542);
/* harmony import */ var _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_style_index_0_id_682a24a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_style_index_0_id_682a24a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_style_index_0_id_682a24a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_style_index_0_id_682a24a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Application_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scrollViewBox_vue_vue_type_style_index_0_id_682a24a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 542:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Code/Project-5/uni-ovo/pages/public/inChatBody/scrollViewBox.vue?vue&type=style&index=0&id=682a24a6&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/public/inChatBody/scrollViewBox.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/public/inChatBody/scrollViewBox-create-component',
    {
        'pages/public/inChatBody/scrollViewBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(536))
        })
    },
    [['pages/public/inChatBody/scrollViewBox-create-component']]
]);
