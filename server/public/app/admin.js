webpackJsonp([1],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(e,t){if(!o.installed){if(o.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==( false?"undefined":_typeof(exports))?module.exports=o: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return o}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.axios&&Vue.use(o,window.axios)}();

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_App__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__core_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_router_js__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_store_js__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_axios__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_components_TabChooseLanguage_vue__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_components_TabChooseLanguage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__core_components_TabChooseLanguage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_components_InputFile_vue__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_components_InputFile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__core_components_InputFile_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vee_validate__ = __webpack_require__(628);







// Setting axios


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_4_axios___default.a);
__WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.post["Content-Type"] = "application/json";
__WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.baseURL = "/api/";

// Global Component



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("tab-choose-language", __WEBPACK_IMPORTED_MODULE_6__core_components_TabChooseLanguage_vue___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("input-file", __WEBPACK_IMPORTED_MODULE_7__core_components_InputFile_vue___default.a);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_8_vee_validate__["a" /* default */]);

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__core_App___default.a
  },
  router: __WEBPACK_IMPORTED_MODULE_2__core_router_js__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__core_store_js__["a" /* default */],
  render: h => h("app")
}).$mount("#app");

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_home__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__modules_home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_portfolio__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_portfolio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__modules_portfolio__);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
	routes: [{ path: "/", component: __WEBPACK_IMPORTED_MODULE_2__modules_home___default.a }, { path: "/portfolio", component: __WEBPACK_IMPORTED_MODULE_3__modules_portfolio___default.a }]
}));

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index_js__ = __webpack_require__(361);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
  modules: {
    global: __WEBPACK_IMPORTED_MODULE_2__store_index_js__["a" /* default */]
  }
}));

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const state = {
  languages: [{ name: "Thai", abbr: "th" }, { name: "English", abbr: "en" }]
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state
});

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PageHeader_header__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PageHeader_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_PageHeader_header__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        PageHeader: __WEBPACK_IMPORTED_MODULE_1__components_PageHeader_header___default.a
    },
    mounted: function () {}
});

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        value: {
            type: Object
        },
        options: {
            type: Array,
            required: true
        }

    },
    data: function () {
        return {
            _id: "",
            keyword: "",
            isShow: false
        };
    },
    methods: {
        onSelected: function (option) {
            this.keyword = option.title;
            this._id = option._id;
            this.isShow = false;
            let inventorSelected = {
                title: option.title,
                _id: this._id
            };
            this.$emit('input', inventorSelected);
        },
        onTyping: function () {
            this.isShow = true;
            this.$emit('reload', this.keyword);
        }
    },
    created() {
        this.keyword = this.value.title;
    }
});

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        intialIsRemove: {
            type: Boolean
        },
        value: {
            type: Object
        }
    },
    data: function () {
        return {
            isRemove: false,
            image: "",
            filename: ""
        };
    },
    watch: {
        value(value) {
            this.setValue(value);
        }
    },
    methods: {
        setValue(value) {
            if (value.type === 0) {
                this.image = value.url;
            } else {
                if (value.file !== undefined) {
                    var reader = new FileReader();
                    reader.onload = event => {
                        this.image = event.target.result;
                    };
                    reader.readAsDataURL(value.file);
                    this.filename = value.file.name;
                }
            }
        },
        fileSelected(event) {
            var files = event.target.files || event.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(fileImage) {
            let img = {
                type: 1,
                file: fileImage
            };
            this.$emit('input', img);
        },
        removeFile() {
            if (this.isRemove) {
                this.$emit('remove');
            } else {
                this.filename = "";
                this.image = "";
                let img = {
                    type: 1,
                    file: undefined
                };
                this.$emit('input', img);
            }
        },
        init() {
            if (this.value) {
                this.setValue(this.value);
            }
        }
    },
    mounted() {
        this.init();
    },
    created() {
        if (this.intialIsRemove !== undefined) {
            this.isRemove = this.intialIsRemove;
        }
    }
});

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "page-header",
    created: function () {},
    mounted: function () {
        document.addEventListener("DOMContentLoaded", function () {
            // Get all "navbar-burger" elements
            var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

            // Check if there are any nav burgers
            if ($navbarBurgers.length > 0) {
                // Add a click event on each of them
                $navbarBurgers.forEach(function ($el) {
                    $el.addEventListener("click", function () {
                        // Get the target from the "data-target" attribute
                        var target = $el.dataset.target;
                        var $target = document.getElementById(target);

                        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                        $el.classList.toggle("is-active");
                        $target.classList.toggle("is-active");
                    });
                });
            }
        });
    },
    data: function () {
        return {};
    },
    methods: {}
});

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        indexLanguage: {
            type: Number,
            required: true
        }
    },
    data: function () {
        return {
            languages: this.$store.state.global.languages
        };
    },
    methods: {
        isSelected: function (index) {
            return index === this.indexLanguage;
        }
    }
});

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        initialPortfolio: {
            type: Object
        },
        index: {
            type: Number,
            required: true
        }
    },
    data: function () {
        return {
            title: this.initialPortfolio.title,
            detail: this.initialPortfolio.detail
        };
    },
    methods: {
        update: function (event) {
            var translation = {};
            translation['language'] = this.initialPortfolio.language;
            translation['title'] = this.title;
            translation['detail'] = this.detail;
            this.$emit('update-value', this.index, translation);
        }
    }

});

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FieldPortfolio__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FieldPortfolio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__FieldPortfolio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_AutoComplete__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_AutoComplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__core_components_AutoComplete__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        mode: {
            type: Number,
            required: true
        },
        categories: {
            type: Array
        },
        statuses: {
            type: Array
        },
        initialPortfolio: {
            Object
        }
    },
    data: function () {
        return {
            indexLanguage: 0,
            languages: this.$store.state.global.languages,
            translations: [],
            _id: "",
            images: [],
            isLoading: false,
            categorySelected: "",
            removePics: []
        };
    },
    components: {
        AutoComplete: __WEBPACK_IMPORTED_MODULE_2__core_components_AutoComplete___default.a,
        FieldPortfolio: __WEBPACK_IMPORTED_MODULE_1__FieldPortfolio___default.a
    },
    computed: {
        title: function () {
            if (this.mode === 0) {
                return "Add";
            } else {
                return "Edit";
            }
        },
        selectedLang: function () {
            return this.translation[this.indexLanguage];
        }
    },
    methods: {
        updateValue: function (index, translation) {
            this.translations[index] = translation;
        },
        selectLanguage(index) {
            this.indexLanguage = Number.parseInt(index);
        },
        updatePortfolio() {
            this.$validator.validateAll('portfolio-scope').then(result => {
                if (result) {
                    this.isLoading = true;
                    var portfolioTmp = {
                        translations: JSON.stringify(this.translations),
                        category: this.categorySelected
                    };
                    if (this.mode === 0) {
                        this.axios.post('portfolio/', portfolioTmp).then(res => {
                            this._id = res.data.content._id;
                            this.updateImagePortfolio();
                        });
                    } else {
                        this.axios.put('portfolio/' + this._id, portfolioTmp).then(res => {
                            this.updateImagePortfolio();
                        });
                    }
                }
            });
        },
        updateImagePortfolio() {
            for (let path of this.removePics) {
                this.axios.post('portfolio/' + this._id + '/removeImage', { path: path }).then(res => {
                    console.log(res.data);
                });
            }
            if (this.images.length > 0) {
                let lenImages = this.images.length;
                let countRound = 0;
                for (let image of this.images) {
                    if (image.type === 1 && image.file !== undefined) {
                        const formData = new FormData();
                        formData.append('image', image.file);
                        this.axios.post('portfolio/' + this._id + '/uploadImage', formData).then(res => {
                            console.log(res.data);
                            countRound++;
                            if (countRound >= lenImages) {
                                this.updateFinish();
                            }
                        });
                    } else {
                        countRound++;
                        if (countRound >= lenImages) {
                            this.updateFinish();
                        }
                    }
                }
            } else {
                this.updateFinish();
            }
        },
        deletePortfolio() {
            this.$validator.validate('delete').then(result => {
                if (result) {
                    this.isLoading = true;
                    this.axios.delete('portfolio/' + this._id).then(res => {
                        this.isFillDelete = false;
                        this.updateFinish();
                    });
                }
            });
        },
        updateFileImage(file) {
            this.fileImage = file;
        },
        updateFinish() {
            this.isLoading = false;
            this.$emit('reload-list');
            this.$emit('close');
        },
        addImage() {
            let img = {
                type: 1,
                file: undefined
            };
            this.images.push(img);
            this.$nextTick();
        },
        removeImage(index) {
            if (this.images[index].type === 0) {
                this.removePics.push(this.images[index].url);
            }
            this.images.splice(index, 1);
            this.$nextTick();
        },
        getUUID() {
            return __WEBPACK_IMPORTED_MODULE_0_uuid_v1___default()();
        }
    },
    created() {
        if (this.mode === 0) {
            for (let i = 0; i < this.languages.length; i++) {
                var translation = {};
                translation['language'] = this.languages[i].abbr;
                translation['title'] = "";
                translation['detail'] = "";
                this.translations.push(translation);
            }
        } else {
            for (let imageUrl of this.initialPortfolio.image) {
                let img = {
                    type: 0,
                    url: imageUrl
                };
                this.images.push(img);
            }
            this._id = this.initialPortfolio._id;
            this.categorySelected = this.initialPortfolio.category._id;
            for (let i = 0; i < this.initialPortfolio.translations.length; i++) {
                var translation = {};
                translation['language'] = this.languages[i].abbr;
                translation['title'] = this.initialPortfolio.translations[i].title;
                translation['detail'] = this.initialPortfolio.translations[i].detail;
                this.translations.push(translation);
            }
        }
    }
});

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ModalPortfolio__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ModalPortfolio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ModalPortfolio__);
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


const LIMIT = 9;

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            portfolios: [],
            portfolioSelected: -1,
            categories: [],
            categorySelected: "",
            showModal: false,
            mode: 0,
            count: 0,
            currentPage: 1,
            totalPage: 0,
            keyword: "",
            isLoading: false
        };
    },
    components: {
        ModalPortfolio: __WEBPACK_IMPORTED_MODULE_0__components_ModalPortfolio___default.a
    },
    methods: {
        loadCategory: function () {
            this.axios.get("category/").then(res => {
                this.categories = res.data;
            }).catch(function (e) {
                console.log(e);
            });
        },
        loadPortfolio: _.debounce(function (offset) {
            this.isLoading = true;
            this.axios.get("portfolio/?limit=" + LIMIT + "&offset=" + offset + "&keyword=" + this.keyword + "&category=" + this.categorySelected).then(res => {
                this.count = res.data.count;
                this.portfolios = res.data.content;
                console.log(this.portfolios);
                this.totalPage = Math.ceil(this.count / LIMIT);
                this.currentPage = offset + 1;
                this.isLoading = false;
            }).catch(function (thrown) {
                console.log(thrown);
            });
        }, 500),
        isCurrentPage: function (index) {
            return {
                'is-current': index === this.currentPage
            };
        },
        changePage: function (index) {
            this.loadPortfolio(index - 1);
        },
        getTitlePortfolio(portfolio) {
            if (this.$i18n.locale == 'en') {
                return portfolio.translations.find(obj => obj.language === "en").title;
            } else if (this.$i18n.locale == 'th') {
                return portfolio.translations.find(obj => obj.language === "th").title;
            } else if (this.$i18n.locale == 'ja') {
                return portfolio.translations.find(obj => obj.language === "ja").title;
            }
        },
        getDescPortfolio(portfolio) {
            if (this.$i18n.locale == 'en') {
                return portfolio.translations.find(obj => obj.language === "en").detail;
            } else if (this.$i18n.locale == 'th') {
                return portfolio.translations.find(obj => obj.language === "th").detail;
            } else if (this.$i18n.locale == 'ja') {
                return portfolio.translations.find(obj => obj.language === "ja").detail;
            }
        }
    },
    watch: {
        keyword: function (value) {
            this.loadPortfolio(0);
        }
    },
    created() {
        this.loadCategory();
        this.loadPortfolio(0);
    }
});

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var rng = __webpack_require__(626);
var bytesToUuid = __webpack_require__(625);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export install */
/* unused harmony export use */
/* unused harmony export mapFields */
/* unused harmony export Validator */
/* unused harmony export ErrorBag */
/* unused harmony export version */
/**
 * vee-validate v2.0.0-rc.17
 * (c) 2017 Abdelrahman Awad
 * @license MIT
 */
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate (argument, dirtyOptions) {
  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits === undefined ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (argument instanceof Date) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate$1(restDateString, year);

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset();
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate$1 (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    date.setUTCFullYear(year, month);
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    date.setUTCFullYear(year, 0, dayOfYear);
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    date.setUTCFullYear(year, month, day);
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0
  }

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds added
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount, dirtyOptions) {
  var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
  var amount = Number(dirtyAmount);
  return new Date(timestamp + amount)
}

function cloneObject (dirtyObject) {
  dirtyObject = dirtyObject || {};
  var object = {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      object[property] = dirtyObject[property];
    }
  }

  return object
}

var MILLISECONDS_IN_MINUTE$2 = 60000;

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the minutes added
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  var amount = Number(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$2, dirtyOptions)
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is valid
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid('2014-02-31')
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  return !isNaN(date)
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance (token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result
    } else {
      return result + ' ago'
    }
  }

  return result
}

var tokensToBeShortedPattern = /MMMM|MM|DD|dddd/g;

function buildShortLongFormat (format) {
  return format.replace(tokensToBeShortedPattern, function (token) {
    return token.slice(1)
  })
}

/**
 * @name buildFormatLongFn
 * @category Locale Helpers
 * @summary Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 *
 * @description
 * Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 * Returns a function which takes one of the following tokens as the argument:
 * `'LTS'`, `'LT'`, `'L'`, `'LL'`, `'LLL'`, `'l'`, `'ll'`, `'lll'`, `'llll'`
 * and returns a long format string written as `format` token strings.
 * See [format]{@link https://date-fns.org/docs/format}
 *
 * `'l'`, `'ll'`, `'lll'` and `'llll'` formats are built automatically
 * by shortening some of the tokens from corresponding unshortened formats
 * (e.g., if `LL` is `'MMMM DD YYYY'` then `ll` will be `MMM D YYYY`)
 *
 * @param {Object} obj - the object with long formats written as `format` token strings
 * @param {String} obj.LT - time format: hours and minutes
 * @param {String} obj.LTS - time format: hours, minutes and seconds
 * @param {String} obj.L - short date format: numeric day, month and year
 * @param {String} [obj.l] - short date format: numeric day, month and year (shortened)
 * @param {String} obj.LL - long date format: day, month in words, and year
 * @param {String} [obj.ll] - long date format: day, month in words, and year (shortened)
 * @param {String} obj.LLL - long date and time format
 * @param {String} [obj.lll] - long date and time format (shortened)
 * @param {String} obj.LLLL - long date, time and weekday format
 * @param {String} [obj.llll] - long date, time and weekday format (shortened)
 * @returns {Function} `formatLong` property of the locale
 *
 * @example
 * // For `en-US` locale:
 * locale.formatLong = buildFormatLongFn({
 *   LT: 'h:mm aa',
 *   LTS: 'h:mm:ss aa',
 *   L: 'MM/DD/YYYY',
 *   LL: 'MMMM D YYYY',
 *   LLL: 'MMMM D YYYY h:mm aa',
 *   LLLL: 'dddd, MMMM D YYYY h:mm aa'
 * })
 */
function buildFormatLongFn (obj) {
  var formatLongLocale = {
    LTS: obj.LTS,
    LT: obj.LT,
    L: obj.L,
    LL: obj.LL,
    LLL: obj.LLL,
    LLLL: obj.LLLL,
    l: obj.l || buildShortLongFormat(obj.L),
    ll: obj.ll || buildShortLongFormat(obj.LL),
    lll: obj.lll || buildShortLongFormat(obj.LLL),
    llll: obj.llll || buildShortLongFormat(obj.LLLL)
  };

  return function (token) {
    return formatLongLocale[token]
  }
}

var formatLong = buildFormatLongFn({
  LT: 'h:mm aa',
  LTS: 'h:mm:ss aa',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D YYYY',
  LLL: 'MMMM D YYYY h:mm aa',
  LLLL: 'dddd, MMMM D YYYY h:mm aa'
});

var formatRelativeLocale = {
  lastWeek: '[last] dddd [at] LT',
  yesterday: '[yesterday at] LT',
  today: '[today at] LT',
  tomorrow: '[tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  other: 'L'
};

function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}

/**
 * @name buildLocalizeFn
 * @category Locale Helpers
 * @summary Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale
 * used by `format` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * `localize.weekday` function takes the weekday index as argument (0 - Sunday).
 * `localize.month` takes the month index (0 - January).
 * `localize.timeOfDay` takes the hours. Use `indexCallback` to convert them to an array index (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @param {Function} [indexCallback] - the callback which takes the resulting function argument
 *   and converts it into value array index
 * @returns {Function} the resulting function
 *
 * @example
 * var timeOfDayValues = {
 *   uppercase: ['AM', 'PM'],
 *   lowercase: ['am', 'pm'],
 *   long: ['a.m.', 'p.m.']
 * }
 * locale.localize.timeOfDay = buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
 *   // 0 is a.m. array index, 1 is p.m. array index
 *   return (hours / 12) >= 1 ? 1 : 0
 * })
 * locale.localize.timeOfDay(16, {type: 'uppercase'}) //=> 'PM'
 * locale.localize.timeOfDay(5) //=> 'a.m.'
 */
function buildLocalizeFn (values, defaultType, indexCallback) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var valuesArray = values[type] || values[defaultType];
    var index = indexCallback ? indexCallback(Number(dirtyIndex)) : Number(dirtyIndex);
    return valuesArray[index]
  }
}

/**
 * @name buildLocalizeArrayFn
 * @category Locale Helpers
 * @summary Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @returns {Function} the resulting function
 *
 * @example
 * var weekdayValues = {
 *   narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
 *   short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
 *   long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 * }
 * locale.localize.weekdays = buildLocalizeArrayFn(weekdayValues, 'long')
 * locale.localize.weekdays({type: 'narrow'}) //=> ['Su', 'Mo', ...]
 * locale.localize.weekdays() //=> ['Sunday', 'Monday', ...]
 */
function buildLocalizeArrayFn (values, defaultType) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    return values[type] || values[defaultType]
  }
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var weekdayValues = {
  narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var monthValues = {
  short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var timeOfDayValues = {
//     any: ['in the night', 'in the morning', 'in the afternoon', 'in the evening']
//   }
//
// And later:
//
//   var localize = {
//     // The callback takes the hours as the argument and returns the array index
//     timeOfDay: buildLocalizeFn(timeOfDayValues, 'any', function (hours) {
//       if (hours >= 17) {
//         return 3
//       } else if (hours >= 12) {
//         return 2
//       } else if (hours >= 4) {
//         return 1
//       } else {
//         return 0
//       }
//     }),
//     timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'any')
//   }
var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['a.m.', 'p.m.']
};

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'month', 'quarter', 'week', 'isoWeek', 'dayOfYear',
  // 'dayOfMonth' or 'dayOfWeek'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    return (hours / 12) >= 1 ? 1 : 0
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
};

/**
 * @name buildMatchFn
 * @category Locale Helpers
 * @summary Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale used by `parse` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 * The result of the match function will be passed into corresponding parser function
 * (`match.weekday`, `match.month` or `match.timeOfDay` respectively. See `buildParseFn`).
 *
 * @param {Object} values - the object with RegExps
 * @param {String} defaultType - the default type for the match function
 * @returns {Function} the resulting function
 *
 * @example
 * var matchWeekdaysPatterns = {
 *   narrow: /^(su|mo|tu|we|th|fr|sa)/i,
 *   short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
 *   long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
 * }
 * locale.match.weekdays = buildMatchFn(matchWeekdaysPatterns, 'long')
 * locale.match.weekdays('Sunday', {type: 'narrow'}) //=> ['Su', 'Su', ...]
 * locale.match.weekdays('Sunday') //=> ['Sunday', 'Sunday', ...]
 */
function buildMatchFn (patterns, defaultType) {
  return function (dirtyString, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var pattern = patterns[type] || patterns[defaultType];
    var string = String(dirtyString);
    return string.match(pattern)
  }
}

/**
 * @name buildParseFn
 * @category Locale Helpers
 * @summary Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale used by `parse` function.
 * The argument of the resulting function is the result of the corresponding match function
 * (`match.weekdays`, `match.months` or `match.timesOfDay` respectively. See `buildMatchFn`).
 *
 * @param {Object} values - the object with arrays of RegExps
 * @param {String} defaultType - the default type for the parser function
 * @returns {Function} the resulting function
 *
 * @example
 * var parseWeekdayPatterns = {
 *   any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
 * }
 * locale.match.weekday = buildParseFn(matchWeekdaysPatterns, 'long')
 * var matchResult = locale.match.weekdays('Friday')
 * locale.match.weekday(matchResult) //=> 5
 */
function buildParseFn (patterns, defaultType) {
  return function (matchResult, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var patternsArray = patterns[type] || patterns[defaultType];
    var string = matchResult[1];

    return patternsArray.findIndex(function (pattern) {
      return pattern.test(string)
    })
  }
}

/**
 * @name buildMatchPatternFn
 * @category Locale Helpers
 * @summary Build match function from a single RegExp.
 *
 * @description
 * Build match function from a single RegExp.
 * Usually used for building `match.ordinalNumbers` property of the locale.
 *
 * @param {Object} pattern - the RegExp
 * @returns {Function} the resulting function
 *
 * @example
 * locale.match.ordinalNumbers = buildMatchPatternFn(/^(\d+)(th|st|nd|rd)?/i)
 * locale.match.ordinalNumbers('3rd') //=> ['3rd', '3', 'rd', ...]
 */
function buildMatchPatternFn (pattern) {
  return function (dirtyString) {
    var string = String(dirtyString);
    return string.match(pattern)
  }
}

/**
 * @name parseDecimal
 * @category Locale Helpers
 * @summary Parses the match result into decimal number.
 *
 * @description
 * Parses the match result into decimal number.
 * Uses the string matched with the first set of parentheses of match RegExp.
 *
 * @param {Array} matchResult - the object returned by matching function
 * @returns {Number} the parsed value
 *
 * @example
 * locale.match = {
 *   ordinalNumbers: (dirtyString) {
 *     return String(dirtyString).match(/^(\d+)(th|st|nd|rd)?/i)
 *   },
 *   ordinalNumber: parseDecimal
 * }
 */
function parseDecimal (matchResult) {
  return parseInt(matchResult[1], 10)
}

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;

var matchWeekdaysPatterns = {
  narrow: /^(su|mo|tu|we|th|fr|sa)/i,
  short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};

var parseWeekdayPatterns = {
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var matchTimesOfDayPatterns = {
//     long: /^((in the)? (night|morning|afternoon|evening?))/i
//   }
//
//   var parseTimeOfDayPatterns = {
//     any: [/(night|morning)/i, /(afternoon|evening)/i]
//   }
var matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
};

var parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
};

var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal,
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 */
var locale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};

var MILLISECONDS_IN_DAY$1 = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY$1) + 1
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = 1;

  var date = toDate(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear (dirtyDate, dirtyOptions) {
  var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
  return date
}

var MILLISECONDS_IN_WEEK$2 = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getUTCMonth() + 1
  },

  // Month: 1st, 2nd, ..., 12th
  'Mo': function (date, options) {
    var month = date.getUTCMonth() + 1;
    return options.locale.localize.ordinalNumber(month, {unit: 'month'})
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getUTCMonth() + 1, 2)
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': function (date, options) {
    return options.locale.localize.month(date.getUTCMonth(), {type: 'short'})
  },

  // Month: January, February, ..., December
  'MMMM': function (date, options) {
    return options.locale.localize.month(date.getUTCMonth(), {type: 'long'})
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getUTCMonth() + 1) / 3)
  },

  // Quarter: 1st, 2nd, 3rd, 4th
  'Qo': function (date, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    return options.locale.localize.ordinalNumber(quarter, {unit: 'quarter'})
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getUTCDate()
  },

  // Day of month: 1st, 2nd, ..., 31st
  'Do': function (date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDate(), {unit: 'dayOfMonth'})
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getUTCDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getUTCDayOfYear(date)
  },

  // Day of year: 1st, 2nd, ..., 366th
  'DDDo': function (date, options) {
    return options.locale.localize.ordinalNumber(getUTCDayOfYear(date), {unit: 'dayOfYear'})
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getUTCDayOfYear(date), 3)
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': function (date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), {type: 'narrow'})
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': function (date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), {type: 'short'})
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': function (date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), {type: 'long'})
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getUTCDay()
  },

  // Day of week: 0th, 1st, 2nd, ..., 6th
  'do': function (date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDay(), {unit: 'dayOfWeek'})
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getUTCDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getUTCISOWeek(date)
  },

  // ISO week: 1st, 2nd, ..., 53th
  'Wo': function (date, options) {
    return options.locale.localize.ordinalNumber(getUTCISOWeek(date), {unit: 'isoWeek'})
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getUTCISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getUTCFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getUTCFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getUTCISOWeekYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getUTCISOWeekYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getUTCHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getUTCHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getUTCHours();
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getUTCMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getUTCMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getUTCSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getUTCSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getUTCMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getUTCMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getUTCMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date, options) {
    var originalDate = options._originalDate || date;
    return Math.floor(originalDate.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date, options) {
    var originalDate = options._originalDate || date;
    return originalDate.getTime()
  },

  // AM, PM
  'A': function (date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), {type: 'uppercase'})
  },

  // am, pm
  'a': function (date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), {type: 'lowercase'})
  },

  // a.m., p.m.
  'aa': function (date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), {type: 'long'})
  }
};

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return output
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function addUTCMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var amount = Number(dirtyAmount);
  date.setUTCMinutes(date.getUTCMinutes() + amount);
  return date
}

var longFormattingTokensRegExp = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultFormattingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 * | Long format             | LT    | 05:30 a.m.                       |
 * |                         | LTS   | 05:30:15 a.m.                    |
 * |                         | L     | 07/02/1995                       |
 * |                         | l     | 7/2/1995                         |
 * |                         | LL    | July 2 1995                      |
 * |                         | ll    | Jul 2 1995                       |
 * |                         | LLL   | July 2 1995 05:30 a.m.           |
 * |                         | lll   | Jul 2 1995 05:30 a.m.            |
 * |                         | LLLL  | Sunday, July 2 1995 05:30 a.m.   |
 * |                         | llll  | Sun, Jul 2 1995 05:30 a.m.       |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the formatted date string
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};

  var locale$$1 = options.locale || locale;

  if (!locale$$1.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale$$1.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var localeFormatters = locale$$1.formatters || {};
  var formattingTokensRegExp = locale$$1.formattingTokensRegExp || defaultFormattingTokensRegExp;
  var formatLong = locale$$1.formatLong;

  var originalDate = toDate(dirtyDate, options);

  if (!isValid(originalDate, options)) {
    return 'Invalid Date'
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = originalDate.getTimezoneOffset();
  var utcDate = addUTCMinutes(originalDate, -timezoneOffset, options);

  var formatterOptions = cloneObject(options);
  formatterOptions.locale = locale$$1;
  formatterOptions.formatters = formatters;

  // When UTC functions will be implemented, options._originalDate will likely be a part of public API.
  // Right now, please don't use it in locales. If you have to use an original date,
  // please restore it from `date`, adding a timezone offset to it.
  formatterOptions._originalDate = originalDate;

  var result = formatStr
    .replace(longFormattingTokensRegExp, function (substring) {
      if (substring[0] === '[') {
        return substring
      }

      if (substring[0] === '\\') {
        return cleanEscapedString(substring)
      }

      return formatLong(substring)
    })
    .replace(formattingTokensRegExp, function (substring) {
      var formatter = localeFormatters[substring] || formatters[substring];

      if (formatter) {
        return formatter(utcDate, formatterOptions)
      } else {
        return cleanEscapedString(substring)
      }
    });

  return result
}

function cleanEscapedString (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the mintues subtracted
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  var amount = Number(dirtyAmount);
  return addMinutes(dirtyDate, -amount, dirtyOptions)
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is after the second date
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() > dateToCompare.getTime()
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is before the second date
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() < dateToCompare.getTime()
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are equal
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual$1 (dirtyLeftDate, dirtyRightDate, dirtyOptions) {
  var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
  var dateRight = toDate(dirtyRightDate, dirtyOptions);
  return dateLeft.getTime() === dateRight.getTime()
}

var patterns$1 = {
  'M': /^(1[0-2]|0?\d)/, // 0 to 12
  'D': /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  'DDD': /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  'W': /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  'YYYY': /^(\d{1,4})/, // 0 to 9999
  'H': /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  'm': /^([0-5]?\d)/, // 0 to 59
  'Z': /^([+-])(\d{2}):(\d{2})/,
  'ZZ': /^([+-])(\d{2})(\d{2})/,
  singleDigit: /^(\d)/,
  twoDigits: /^(\d{2})/,
  threeDigits: /^(\d{3})/,
  fourDigits: /^(\d{4})/,
  anyDigits: /^(\d+)/
};

function parseDecimal$1 (matchResult) {
  return parseInt(matchResult[1], 10)
}

var parsers = {
  // Year: 00, 01, ..., 99
  'YY': {
    unit: 'twoDigitYear',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult)
    }
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': {
    unit: 'year',
    match: patterns$1.YYYY,
    parse: parseDecimal$1
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': {
    unit: 'isoYear',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) + 1900
    }
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': {
    unit: 'isoYear',
    match: patterns$1.YYYY,
    parse: parseDecimal$1
  },

  // Quarter: 1, 2, 3, 4
  'Q': {
    unit: 'quarter',
    match: patterns$1.singleDigit,
    parse: parseDecimal$1
  },

  // Ordinal quarter
  'Qo': {
    unit: 'quarter',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'quarter'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'quarter'})
    }
  },

  // Month: 1, 2, ..., 12
  'M': {
    unit: 'month',
    match: patterns$1.M,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) - 1
    }
  },

  // Ordinal month
  'Mo': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'month'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'month'}) - 1
    }
  },

  // Month: 01, 02, ..., 12
  'MM': {
    unit: 'month',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) - 1
    }
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.months(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.month(matchResult, {type: 'short'})
    }
  },

  // Month: January, February, ..., December
  'MMMM': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.months(string, {type: 'long'}) ||
        options.locale.match.months(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.month(matchResult, {type: 'long'});

      if (parseResult == null) {
        parseResult = options.locale.match.month(matchResult, {type: 'short'});
      }

      return parseResult
    }
  },

  // ISO week: 1, 2, ..., 53
  'W': {
    unit: 'isoWeek',
    match: patterns$1.W,
    parse: parseDecimal$1
  },

  // Ordinal ISO week
  'Wo': {
    unit: 'isoWeek',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'isoWeek'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'isoWeek'})
    }
  },

  // ISO week: 01, 02, ..., 53
  'WW': {
    unit: 'isoWeek',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Day of week: 0, 1, ..., 6
  'd': {
    unit: 'dayOfWeek',
    match: patterns$1.singleDigit,
    parse: parseDecimal$1
  },

  // Ordinal day of week
  'do': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfWeek'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfWeek'})
    }
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.weekday(matchResult, {type: 'narrow'})
    }
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'short'}) ||
        options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, {type: 'short'});

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, {type: 'narrow'});
      }

      return parseResult
    }
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'long'}) ||
        options.locale.match.weekdays(string, {type: 'short'}) ||
        options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, {type: 'long'});

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, {type: 'short'});

        if (parseResult == null) {
          parseResult = options.locale.match.weekday(matchResult, {type: 'narrow'});
        }
      }

      return parseResult
    }
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': {
    unit: 'dayOfISOWeek',
    match: patterns$1.singleDigit,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult)
    }
  },

  // Day of month: 1, 2, ..., 31
  'D': {
    unit: 'dayOfMonth',
    match: patterns$1.D,
    parse: parseDecimal$1
  },

  // Ordinal day of month
  'Do': {
    unit: 'dayOfMonth',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfMonth'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfMonth'})
    }
  },

  // Day of month: 01, 02, ..., 31
  'DD': {
    unit: 'dayOfMonth',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Day of year: 1, 2, ..., 366
  'DDD': {
    unit: 'dayOfYear',
    match: patterns$1.DDD,
    parse: parseDecimal$1
  },

  // Ordinal day of year
  'DDDo': {
    unit: 'dayOfYear',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfYear'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfYear'})
    }
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': {
    unit: 'dayOfYear',
    match: patterns$1.threeDigits,
    parse: parseDecimal$1
  },

  // AM, PM
  'A': {
    unit: 'timeOfDay',
    match: function (string, options) {
      return options.locale.match.timesOfDay(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.timeOfDay(matchResult, {type: 'short'})
    }
  },

  // a.m., p.m.
  'aa': {
    unit: 'timeOfDay',
    match: function (string, options) {
      return options.locale.match.timesOfDay(string, {type: 'long'}) ||
        options.locale.match.timesOfDay(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.timeOfDay(matchResult, {type: 'long'});

      if (parseResult == null) {
        parseResult = options.locale.match.timeOfDay(matchResult, {type: 'short'});
      }

      return parseResult
    }
  },

  // Hour: 0, 1, ... 23
  'H': {
    unit: 'hours',
    match: patterns$1.H,
    parse: parseDecimal$1
  },

  // Hour: 00, 01, ..., 23
  'HH': {
    unit: 'hours',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Hour: 1, 2, ..., 12
  'h': {
    unit: 'timeOfDayHours',
    match: patterns$1.M,
    parse: parseDecimal$1
  },

  // Hour: 01, 02, ..., 12
  'hh': {
    unit: 'timeOfDayHours',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Minute: 0, 1, ..., 59
  'm': {
    unit: 'minutes',
    match: patterns$1.m,
    parse: parseDecimal$1
  },

  // Minute: 00, 01, ..., 59
  'mm': {
    unit: 'minutes',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Second: 0, 1, ..., 59
  's': {
    unit: 'seconds',
    match: patterns$1.m,
    parse: parseDecimal$1
  },

  // Second: 00, 01, ..., 59
  'ss': {
    unit: 'seconds',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': {
    unit: 'milliseconds',
    match: patterns$1.singleDigit,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) * 100
    }
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': {
    unit: 'milliseconds',
    match: patterns$1.twoDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) * 10
    }
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': {
    unit: 'milliseconds',
    match: patterns$1.threeDigits,
    parse: parseDecimal$1
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': {
    unit: 'timezone',
    match: patterns$1.Z,
    parse: function (matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return (sign === '+') ? absoluteOffset : -absoluteOffset
    }
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': {
    unit: 'timezone',
    match: patterns$1.ZZ,
    parse: function (matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return (sign === '+') ? absoluteOffset : -absoluteOffset
    }
  },

  // Seconds timestamp: 512969520
  'X': {
    unit: 'timestamp',
    match: patterns$1.anyDigits,
    parse: function (matchResult) {
      return parseDecimal$1(matchResult) * 1000
    }
  },

  // Milliseconds timestamp: 512969520900
  'x': {
    unit: 'timestamp',
    match: patterns$1.anyDigits,
    parse: parseDecimal$1
  }
};

parsers['a'] = parsers['A'];

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay (dirtyDate, dirtyDay, dirtyOptions) {
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var day = Number(dirtyDay);

  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay (dirtyDate, dirtyDay, dirtyOptions) {
  var day = Number(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek (dirtyDate, dirtyISOWeek, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var isoWeek = Number(dirtyISOWeek);
  var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date
}

var MILLISECONDS_IN_DAY$3 = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeekYear (dirtyDate, dirtyISOYear, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var isoYear = Number(dirtyISOYear);
  var dateStartOfYear = startOfUTCISOWeekYear(date, dirtyOptions);
  var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY$3);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(isoYear, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  date = startOfUTCISOWeekYear(fourthOfJanuary, dirtyOptions);
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

var MILLISECONDS_IN_MINUTE$7 = 60000;

function setTimeOfDay (hours, timeOfDay) {
  var isAM = timeOfDay === 0;

  if (isAM) {
    if (hours === 12) {
      return 0
    }
  } else {
    if (hours !== 12) {
      return 12 + hours
    }
  }

  return hours
}

var units = {
  twoDigitYear: {
    priority: 10,
    set: function (dateValues, value) {
      var century = Math.floor(dateValues.date.getUTCFullYear() / 100);
      var year = century * 100 + value;
      dateValues.date.setUTCFullYear(year, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  year: {
    priority: 10,
    set: function (dateValues, value) {
      dateValues.date.setUTCFullYear(value, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  isoYear: {
    priority: 10,
    set: function (dateValues, value, options) {
      dateValues.date = startOfUTCISOWeekYear(setUTCISOWeekYear(dateValues.date, value, options), options);
      return dateValues
    }
  },

  quarter: {
    priority: 20,
    set: function (dateValues, value) {
      dateValues.date.setUTCMonth((value - 1) * 3, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  month: {
    priority: 30,
    set: function (dateValues, value) {
      dateValues.date.setUTCMonth(value, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  isoWeek: {
    priority: 40,
    set: function (dateValues, value, options) {
      dateValues.date = startOfUTCISOWeek(setUTCISOWeek(dateValues.date, value, options), options);
      return dateValues
    }
  },

  dayOfWeek: {
    priority: 50,
    set: function (dateValues, value, options) {
      dateValues.date = setUTCDay(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  dayOfISOWeek: {
    priority: 50,
    set: function (dateValues, value, options) {
      dateValues.date = setUTCISODay(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  dayOfMonth: {
    priority: 50,
    set: function (dateValues, value) {
      dateValues.date.setUTCDate(value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  dayOfYear: {
    priority: 50,
    set: function (dateValues, value) {
      dateValues.date.setUTCMonth(0, value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues
    }
  },

  timeOfDay: {
    priority: 60,
    set: function (dateValues, value, options) {
      dateValues.timeOfDay = value;
      return dateValues
    }
  },

  hours: {
    priority: 70,
    set: function (dateValues, value, options) {
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues
    }
  },

  timeOfDayHours: {
    priority: 70,
    set: function (dateValues, value, options) {
      var timeOfDay = dateValues.timeOfDay;
      if (timeOfDay != null) {
        value = setTimeOfDay(value, timeOfDay);
      }
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues
    }
  },

  minutes: {
    priority: 80,
    set: function (dateValues, value) {
      dateValues.date.setUTCMinutes(value, 0, 0);
      return dateValues
    }
  },

  seconds: {
    priority: 90,
    set: function (dateValues, value) {
      dateValues.date.setUTCSeconds(value, 0);
      return dateValues
    }
  },

  milliseconds: {
    priority: 100,
    set: function (dateValues, value) {
      dateValues.date.setUTCMilliseconds(value);
      return dateValues
    }
  },

  timezone: {
    priority: 110,
    set: function (dateValues, value) {
      dateValues.date = new Date(dateValues.date.getTime() - value * MILLISECONDS_IN_MINUTE$7);
      return dateValues
    }
  },

  timestamp: {
    priority: 120,
    set: function (dateValues, value) {
      dateValues.date = new Date(value);
      return dateValues
    }
  }
};

var TIMEZONE_UNIT_PRIORITY = 110;
var MILLISECONDS_IN_MINUTE$6 = 60000;

var longFormattingTokensRegExp$1 = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultParsingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format.
 *
 * Accepted format tokens:
 * | Unit                    | Priority | Token | Input examples                   |
 * |-------------------------|----------|-------|----------------------------------|
 * | Year                    | 10       | YY    | 00, 01, ..., 99                  |
 * |                         |          | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | 10       | GG    | 00, 01, ..., 99                  |
 * |                         |          | GGGG  | 1900, 1901, ..., 2099            |
 * | Quarter                 | 20       | Q     | 1, 2, 3, 4                       |
 * |                         |          | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Month                   | 30       | M     | 1, 2, ..., 12                    |
 * |                         |          | Mo    | 1st, 2nd, ..., 12th              |
 * |                         |          | MM    | 01, 02, ..., 12                  |
 * |                         |          | MMM   | Jan, Feb, ..., Dec               |
 * |                         |          | MMMM  | January, February, ..., December |
 * | ISO week                | 40       | W     | 1, 2, ..., 53                    |
 * |                         |          | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         |          | WW    | 01, 02, ..., 53                  |
 * | Day of week             | 50       | d     | 0, 1, ..., 6                     |
 * |                         |          | do    | 0th, 1st, ..., 6th               |
 * |                         |          | dd    | Su, Mo, ..., Sa                  |
 * |                         |          | ddd   | Sun, Mon, ..., Sat               |
 * |                         |          | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | 50       | E     | 1, 2, ..., 7                     |
 * | Day of month            | 50       | D     | 1, 2, ..., 31                    |
 * |                         |          | Do    | 1st, 2nd, ..., 31st              |
 * |                         |          | DD    | 01, 02, ..., 31                  |
 * | Day of year             | 50       | DDD   | 1, 2, ..., 366                   |
 * |                         |          | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         |          | DDDD  | 001, 002, ..., 366               |
 * | Time of day             | 60       | A     | AM, PM                           |
 * |                         |          | a     | am, pm                           |
 * |                         |          | aa    | a.m., p.m.                       |
 * | Hour                    | 70       | H     | 0, 1, ... 23                     |
 * |                         |          | HH    | 00, 01, ... 23                   |
 * | Time of day hour        | 70       | h     | 1, 2, ..., 12                    |
 * |                         |          | hh    | 01, 02, ..., 12                  |
 * | Minute                  | 80       | m     | 0, 1, ..., 59                    |
 * |                         |          | mm    | 00, 01, ..., 59                  |
 * | Second                  | 90       | s     | 0, 1, ..., 59                    |
 * |                         |          | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | 100      | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | 100      | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | 100      | SSS   | 000, 001, ..., 999               |
 * | Timezone                | 110      | Z     | -01:00, +00:00, ... +12:00       |
 * |                         |          | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | 120      | X     | 512969520                        |
 * | Milliseconds timestamp  | 120      | x     | 512969520900                     |
 *
 * Values will be assigned to the date in the ascending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/DD/YYYY', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * Also, `parse` unfolds long formats like those in [format]{@link https://date-fns.org/docs/format}:
 * | Token | Input examples                 |
 * |-------|--------------------------------|
 * | LT    | 05:30 a.m.                     |
 * | LTS   | 05:30:15 a.m.                  |
 * | L     | 07/02/1995                     |
 * | l     | 7/2/1995                       |
 * | LL    | July 2 1995                    |
 * | ll    | Jul 2 1995                     |
 * | LLL   | July 2 1995 05:30 a.m.         |
 * | lll   | Jul 2 1995 05:30 a.m.          |
 * | LLLL  | Sunday, July 2 1995 05:30 a.m. |
 * | llll  | Sun, Jul 2 1995 05:30 a.m.     |
 *
 * The characters wrapped in square brackets in the format string are escaped.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - the date to took the missing higher priority values from
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the parsed date
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/DD/YYYY',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in English locale in the context of 2010 year:
 * import eoLocale from 'date-fns/locale/eo'
 * var result = parse(
 *   '28-a de februaro',
 *   'Do [de] MMMM',
 *   new Date(2010, 0, 1)
 *   {locale: eoLocale}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse (dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
  var dateString = String(dirtyDateString);
  var options = dirtyOptions || {};

  var weekStartsOn = options.weekStartsOn === undefined ? 0 : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var locale$$1 = options.locale || locale;
  var localeParsers = locale$$1.parsers || {};
  var localeUnits = locale$$1.units || {};

  if (!locale$$1.match) {
    throw new RangeError('locale must contain match property')
  }

  if (!locale$$1.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var formatString = String(dirtyFormatString)
    .replace(longFormattingTokensRegExp$1, function (substring) {
      if (substring[0] === '[') {
        return substring
      }

      if (substring[0] === '\\') {
        return cleanEscapedString$1(substring)
      }

      return locale$$1.formatLong(substring)
    });

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBaseDate, options)
    } else {
      return new Date(NaN)
    }
  }

  var subFnOptions = cloneObject(options);
  subFnOptions.locale = locale$$1;

  var tokens = formatString.match(locale$$1.parsingTokensRegExp || defaultParsingTokensRegExp);
  var tokensLength = tokens.length;

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    set: dateToSystemTimezone,
    index: 0
  }];

  var i;
  for (i = 0; i < tokensLength; i++) {
    var token = tokens[i];
    var parser = localeParsers[token] || parsers[token];
    if (parser) {
      var matchResult;

      if (parser.match instanceof RegExp) {
        matchResult = parser.match.exec(dateString);
      } else {
        matchResult = parser.match(dateString, subFnOptions);
      }

      if (!matchResult) {
        return new Date(NaN)
      }

      var unitName = parser.unit;
      var unit = localeUnits[unitName] || units[unitName];

      setters.push({
        priority: unit.priority,
        set: unit.set,
        value: parser.parse(matchResult, subFnOptions),
        index: setters.length
      });

      var substring = matchResult[0];
      dateString = dateString.slice(substring.length);
    } else {
      var head = tokens[i].match(/^\[.*]$/) ? tokens[i].replace(/^\[|]$/g, '') : tokens[i];
      if (dateString.indexOf(head) === 0) {
        dateString = dateString.slice(head.length);
      } else {
        return new Date(NaN)
      }
    }
  }

  var uniquePrioritySetters = setters
    .map(function (setter) {
      return setter.priority
    })
    .sort(function (a, b) {
      return a - b
    })
    .filter(function (priority, index, array) {
      return array.indexOf(priority) === index
    })
    .map(function (priority) {
      return setters
        .filter(function (setter) {
          return setter.priority === priority
        })
        .reverse()
    })
    .map(function (setterArray) {
      return setterArray[0]
    });

  var date = toDate(dirtyBaseDate, options);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = subMinutes(date, date.getTimezoneOffset());

  var dateValues = {date: utcDate};

  var settersLength = uniquePrioritySetters.length;
  for (i = 0; i < settersLength; i++) {
    var setter = uniquePrioritySetters[i];
    dateValues = setter.set(dateValues, setter.value, subFnOptions);
  }

  return dateValues.date
}

function dateToSystemTimezone (dateValues) {
  var date = dateValues.date;
  var time = date.getTime();

  // Get the system timezone offset at (moment of time - offset)
  var offset = date.getTimezoneOffset();

  // Get the system timezone offset at the exact moment of time
  offset = new Date(time + offset * MILLISECONDS_IN_MINUTE$6).getTimezoneOffset();

  // Convert date in timezone "UTC+00:00" to the system timezone
  dateValues.date = new Date(time + offset * MILLISECONDS_IN_MINUTE$6);

  return dateValues
}

function cleanEscapedString$1 (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.

/**
 * Gets the data attribute. the name must be kebab-case.
 */
var getDataAttribute = function (el, name) { return el.getAttribute(("data-vv-" + name)); };

/**
 * Checks if the value is either null or undefined.
 * @param {*} value 
 */
var isNullOrUndefined = function (value) {
  return value === null || value === undefined;
};

/**
 * Sets the data attribute.
 * @param {*} el
 * @param {String} name
 * @param {String} value
 */
var setDataAttribute = function (el, name, value) { return el.setAttribute(("data-vv-" + name), value); };

/**
 * Custom parse behavior on top of date-fns parse function.
 * @param {String} date
 * @param {String} format
 * @return {Date|null}
 */
var parseDate = function (date, format$$1) {
  var parsed = parse(date, format$$1, new Date());

  // if date is not valid or the formatted output after parsing does not match
  // the string value passed in (avoids overflows)
  if (!isValid(parsed) || format(parsed, format$$1) !== date) {
    return null;
  }

  return parsed;
};

var createProxy = function (target, handler) {
  if (typeof Proxy === 'undefined') {
    return target;
  }

  return new Proxy(target, handler);
};

var createFlags = function () { return ({
  untouched: true,
  touched: false,
  dirty: false,
  pristine: true,
  valid: null,
  invalid: null,
  validated: false,
  pending: false,
  required: false
}); };

/**
 * Shallow object comparison.
 *
 * @param {*} lhs 
 * @param {*} rhs 
 * @return {Boolean}
 */
var isEqual = function (lhs, rhs) {
  if (lhs instanceof RegExp && rhs instanceof RegExp) {
    return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
  }

  if (Array.isArray(lhs) && Array.isArray(rhs)) {
    if (lhs.length !== rhs.length) { return false; }

    for (var i = 0; i < lhs.length; i++) {
      if (!isEqual(lhs[i], rhs[i])) {
        return false;
      }
    }

    return true;
  }

  // if both are objects, compare each key recursively.
  if (isObject(lhs) && isObject(rhs)) {
    return Object.keys(lhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    }) && Object.keys(rhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    });
  }

  return lhs === rhs;
};

/**
 * Determines the input field scope.
 */
var getScope = function (el) {
  var scope = getDataAttribute(el, 'scope');
  if (! scope && el.form) {
    scope = getDataAttribute(el.form, 'scope');
  }

  return scope || null;
};

/**
 * Gets the value in an object safely.
 * @param {String} propPath
 * @param {Object} target
 * @param {*} def
 */
var getPath = function (propPath, target, def) {
  if ( def === void 0 ) def = undefined;

  if (!propPath || !target) { return def; }
  var value = target;
  propPath.split('.').every(function (prop) {
    if (! Object.prototype.hasOwnProperty.call(value, prop) && value[prop] === undefined) {
      value = def;

      return false;
    }

    value = value[prop];

    return true;
  });

  return value;
};

/**
 * Checks if path exists within an object.
 *
 * @param {String} path
 * @param {Object} target
 */
var hasPath = function (path, target) {
  var obj = target;
  return path.split('.').every(function (prop) {
    if (! Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }

    obj = obj[prop];

    return true;
  });
};

/**
 * @param {String} rule
 */
var parseRule = function (rule) {
  var params = [];
  var name = rule.split(':')[0];

  if (~rule.indexOf(':')) {
    params = rule.split(':').slice(1).join(':').split(',');
  }

  return { name: name, params: params };
};

/**
 * Normalizes the given rules expression.
 *
 * @param {Object|String} rules
 */
var normalizeRules = function (rules) {
  // if falsy value return an empty object.
  if (!rules) {
    return {};
  }

  var validations = {};
  if (isObject(rules)) {
    Object.keys(rules).forEach(function (rule) {
      var params = [];
      if (rules[rule] === true) {
        params = [];
      } else if (Array.isArray(rules[rule])) {
        params = rules[rule];
      } else {
        params = [rules[rule]];
      }

      if (rules[rule] !== false) {
        validations[rule] = params;
      }
    });

    return validations;
  }

  if (typeof rules !== 'string') {
    warn('rules must be either a string or an object.');
    return {};
  }

  rules.split('|').forEach(function (rule) {
    var parsedRule = parseRule(rule);
    if (! parsedRule.name) {
      return;
    }

    validations[parsedRule.name] = parsedRule.params;
  });

  return validations;
};

/**
 * Debounces a function.
 */
var debounce = function (fn, wait, immediate) {
  if ( wait === void 0 ) wait = 0;
  if ( immediate === void 0 ) immediate = false;

  if (wait === 0) {
    return fn;
  }

  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var later = function () {
      timeout = null;
      if (!immediate) { fn.apply(void 0, args); }
    };
    /* istanbul ignore next */
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    /* istanbul ignore next */
    if (callNow) { fn.apply(void 0, args); }
  };
};

/**
 * Emits a warning to the console.
 */
var warn = function (message) {
  console.warn(("[vee-validate] " + message)); // eslint-disable-line
};

/**
 * Creates a branded error object.
 * @param {String} message
 */
var createError = function (message) { return new Error(("[vee-validate] " + message)); };

/**
 * Checks if the value is an object.
 */
var isObject = function (object) { return object !== null && object && typeof object === 'object' && ! Array.isArray(object); };

/**
 * Checks if a function is callable.
 */
var isCallable = function (func) { return typeof func === 'function'; };

/**
 * Check if element has the css class on it.
 */
var hasClass = function (el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }

  return !!el.className.match(new RegExp(("(\\s|^)" + className + "(\\s|$)")));
};

/**
 * Adds the provided css className to the element.
 */
var addClass = function (el, className) {
  if (el.classList) {
    el.classList.add(className);
    return;
  }

  if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

/**
 * Remove the provided css className from the element.
 */
var removeClass = function (el, className) {
  if (el.classList) {
    el.classList.remove(className);
    return;
  }

  if (hasClass(el, className)) {
    var reg = new RegExp(("(\\s|^)" + className + "(\\s|$)"));
    el.className = el.className.replace(reg, ' ');
  }
};

/**
 * Adds or removes a class name on the input depending on the status flag.
 */
var toggleClass = function (el, className, status) {
  if (!el || !className) { return; }

  if (status) {
    return addClass(el, className);
  }

  removeClass(el, className);
};

/**
 * Converts an array-like object to array.
 * Simple polyfill for Array.from
 */
var toArray = function (arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }

  var array = [];
  var length = arrayLike.length;
  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
};

/**
 * Assign polyfill from the mdn.
 * @param {Object} target
 * @return {Object}
 */
var assign = function (target) {
  var others = [], len = arguments.length - 1;
  while ( len-- > 0 ) others[ len ] = arguments[ len + 1 ];

  /* istanbul ignore else */
  if (isCallable(Object.assign)) {
    return Object.assign.apply(Object, [ target ].concat( others ));
  }

  /* istanbul ignore next */
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  /* istanbul ignore next */
  var to = Object(target);
  /* istanbul ignore next */
  others.forEach(function (arg) {
    // Skip over if undefined or null
    if (arg != null) {
      Object.keys(arg).forEach(function (key) {
        to[key] = arg[key];
      });
    }
  });
  /* istanbul ignore next */
  return to;
};

/**
 * Generates a unique id.
 * @return {String}
 */
var uniqId = function () { return ("_" + (Math.random().toString(36).substr(2, 9))); };

/**
 * polyfills array.find
 * @param {Array} array
 * @param {Function} predicate
 */
var find = function (array, predicate) {
  if (isObject(array)) {
    array = toArray(array);
  }
  if (array.find) {
    return array.find(predicate);
  }
  var result;
  array.some(function (item) {
    if (predicate(item)) {
      result = item;
      return true;
    }

    return false;
  });

  return result;
};

var getInputEventName = function (el) {
  if (el && (el.tagName === 'SELECT' || ~['radio', 'checkbox', 'file'].indexOf(el.type))) {
    return 'change';
  }

  return 'input';
};

var ErrorBag = function ErrorBag () {
  this.items = [];
};

/**
   * Adds an error to the internal array.
   *
   * @param {Object} error The error object.
   */
ErrorBag.prototype.add = function add (error) {
  // handle old signature.
  if (arguments.length > 1) {
    error = {
      field: arguments[0],
      msg: arguments[1],
      rule: arguments[2],
      scope: arguments[3] || null
    };
  }

  error.scope = error.scope || null;
  this.items.push(error);
};

/**
 * Updates a field error with the new field scope.
 *
 * @param {String} id 
 * @param {Object} error 
 */
ErrorBag.prototype.update = function update (id, error) {
  var item = find(this.items, function (i) { return i.id === id; });
  if (!item) {
    return;
  }

  var idx = this.items.indexOf(item);
  this.items.splice(idx, 1);
  item.scope = error.scope;
  this.items.push(item);
};

/**
   * Gets all error messages from the internal array.
   *
   * @param {String} scope The Scope name, optional.
   * @return {Array} errors Array of all error messages.
   */
ErrorBag.prototype.all = function all (scope) {
  if (! scope) {
    return this.items.map(function (e) { return e.msg; });
  }

  return this.items.filter(function (e) { return e.scope === scope; }).map(function (e) { return e.msg; });
};

/**
   * Checks if there are any errors in the internal array.
   * @param {String} scope The Scope name, optional.
   * @return {boolean} result True if there was at least one error, false otherwise.
   */
ErrorBag.prototype.any = function any (scope) {
  if (! scope) {
    return !! this.items.length;
  }

  return !! this.items.filter(function (e) { return e.scope === scope; }).length;
};

/**
   * Removes all items from the internal array.
   *
   * @param {String} scope The Scope name, optional.
   */
ErrorBag.prototype.clear = function clear (scope) {
    var this$1 = this;

  if (! scope) {
    scope = null;
  }

  var removeCondition = function (e) { return e.scope === scope; };

  for (var i = 0; i < this.items.length; ++i) {
    if (removeCondition(this$1.items[i])) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
   * Collects errors into groups or for a specific field.
   *
   * @param{string} field The field name.
   * @param{string} scope The scope name.
   * @param {Boolean} map If it should map the errors to strings instead of objects.
   * @return {Array} errors The errors for the specified field.
   */
ErrorBag.prototype.collect = function collect (field, scope, map) {
    if ( map === void 0 ) map = true;

  if (! field) {
    var collection = {};
    this.items.forEach(function (e) {
      if (! collection[e.field]) {
        collection[e.field] = [];
      }

      collection[e.field].push(map ? e.msg : e);
    });

    return collection;
  }

  field = !isNullOrUndefined(field) ? String(field) : field;
  if (! scope) {
    return this.items.filter(function (e) { return e.field === field; }).map(function (e) { return (map ? e.msg : e); });
  }

  return this.items.filter(function (e) { return e.field === field && e.scope === scope; })
    .map(function (e) { return (map ? e.msg : e); });
};
/**
   * Gets the internal array length.
   *
   * @return {Number} length The internal array length.
   */
ErrorBag.prototype.count = function count () {
  return this.items.length;
};

/**
 * Finds and fetches the first error message for the specified field id.
 *
 * @param {String} id 
 */
ErrorBag.prototype.firstById = function firstById (id) {
  var error = find(this.items, function (i) { return i.id === id; });

  return error ? error.msg : null;
};

/**
   * Gets the first error message for a specific field.
   *
   * @param{String} field The field name.
   * @return {String|null} message The error message.
   */
ErrorBag.prototype.first = function first (field, scope) {
    var this$1 = this;
    if ( scope === void 0 ) scope = null;

  field = !isNullOrUndefined(field) ? String(field) : field;
  var selector = this._selector(field);
  var scoped = this._scope(field);

  if (scoped) {
    var result = this.first(scoped.name, scoped.scope);
    // if such result exist, return it. otherwise it could be a field.
    // with dot in its name.
    if (result) {
      return result;
    }
  }

  if (selector) {
    return this.firstByRule(selector.name, selector.rule, scope);
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].field === field && (this$1.items[i].scope === scope)) {
      return this$1.items[i].msg;
    }
  }

  return null;
};

/**
   * Returns the first error rule for the specified field
   *
   * @param {string} field The specified field.
   * @return {string|null} First error rule on the specified field if one is found, otherwise null
   */
ErrorBag.prototype.firstRule = function firstRule (field, scope) {
  var errors = this.collect(field, scope, false);

  return (errors.length && errors[0].rule) || null;
};

/**
   * Checks if the internal array has at least one error for the specified field.
   *
   * @param{string} field The specified field.
   * @return {Boolean} result True if at least one error is found, false otherwise.
   */
ErrorBag.prototype.has = function has (field, scope) {
    if ( scope === void 0 ) scope = null;

  return !! this.first(field, scope);
};

/**
   * Gets the first error message for a specific field and a rule.
   * @param {String} name The name of the field.
   * @param {String} rule The name of the rule.
   * @param {String} scope The name of the scope (optional).
   */
ErrorBag.prototype.firstByRule = function firstByRule (name, rule, scope) {
  var error = this.collect(name, scope, false).filter(function (e) { return e.rule === rule; })[0];

  return (error && error.msg) || null;
};
/**
   * Gets the first error message for a specific field that not match the rule.
   * @param {String} name The name of the field.
   * @param {String} rule The name of the rule.
   * @param {String} scope The name of the scope (optional).
   */
ErrorBag.prototype.firstNot = function firstNot (name, rule, scope) {
    if ( rule === void 0 ) rule = 'required';

  var error = this.collect(name, scope, false).filter(function (e) { return e.rule !== rule; })[0];

  return (error && error.msg) || null;
};

/**
 * Removes errors by matching against the id.
 * @param {String} id 
 */
ErrorBag.prototype.removeById = function removeById (id) {
    var this$1 = this;

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].id === id) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
   * Removes all error messages associated with a specific field.
   *
   * @param{String} field The field which messages are to be removed.
   * @param {String} scope The Scope name, optional.
   * @param {String} id The field id, optional.
   */
ErrorBag.prototype.remove = function remove (field, scope, id) {
    var this$1 = this;

  field = !isNullOrUndefined(field) ? String(field) : field;
  var removeCondition = function (e) {
    if (e.id && id) {
      return e.id === id;
    }

    if (scope) {
      return e.field === field && e.scope === scope;
    }

    return e.field === field && e.scope === null;
  };

  for (var i = 0; i < this.items.length; ++i) {
    if (removeCondition(this$1.items[i])) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
   * Get the field attributes if there's a rule selector.
   *
   * @param{String} field The specified field.
   * @return {Object|null}
   */
ErrorBag.prototype._selector = function _selector (field) {
  if (field.indexOf(':') > -1) {
    var ref = field.split(':');
      var name = ref[0];
      var rule = ref[1];

    return { name: name, rule: rule };
  }

  return null;
};

/**
   * Get the field scope if specified using dot notation.
   *
   * @param {String} field the specifie field.
   * @return {Object|null}
   */
ErrorBag.prototype._scope = function _scope (field) {
  if (field.indexOf('.') > -1) {
    var ref = field.split('.');
      var scope = ref[0];
      var name = ref[1];

    return { name: name, scope: scope };
  }

  return null;
};

var Dictionary = function Dictionary (dictionary) {
  if ( dictionary === void 0 ) dictionary = {};

  this.container = {};
  this.merge(dictionary);
};

Dictionary.prototype.hasLocale = function hasLocale (locale) {
  return !! this.container[locale];
};

Dictionary.prototype.setDateFormat = function setDateFormat (locale, format) {
  if (!this.container[locale]) {
    this.container[locale] = {};
  }

  this.container[locale].dateFormat = format;
};

Dictionary.prototype.getDateFormat = function getDateFormat (locale) {
  if (!this.container[locale]) {
    return undefined;
  }

  return this.container[locale].dateFormat;
};

Dictionary.prototype.getMessage = function getMessage (locale, key, fallback) {
  if (! this.hasMessage(locale, key)) {
    return fallback || this._getDefaultMessage(locale);
  }

  return this.container[locale].messages[key];
};

/**
 * Gets a specific message for field. fallsback to the rule message.
 *
 * @param {String} locale
 * @param {String} field
 * @param {String} key
 */
Dictionary.prototype.getFieldMessage = function getFieldMessage (locale, field, key) {
  if (! this.hasLocale(locale)) {
    return this.getMessage(locale, key);
  }

  var dict = this.container[locale].custom && this.container[locale].custom[field];
  if (! dict || ! dict[key]) {
    return this.getMessage(locale, key);
  }

  return dict[key];
};

Dictionary.prototype._getDefaultMessage = function _getDefaultMessage (locale) {
  if (this.hasMessage(locale, '_default')) {
    return this.container[locale].messages._default;
  }

  return this.container.en.messages._default;
};

Dictionary.prototype.getAttribute = function getAttribute (locale, key, fallback) {
    if ( fallback === void 0 ) fallback = '';

  if (! this.hasAttribute(locale, key)) {
    return fallback;
  }

  return this.container[locale].attributes[key];
};

Dictionary.prototype.hasMessage = function hasMessage (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].messages &&
          this.container[locale].messages[key]
  );
};

Dictionary.prototype.hasAttribute = function hasAttribute (locale, key) {
  return !! (
    this.hasLocale(locale) &&
          this.container[locale].attributes &&
          this.container[locale].attributes[key]
  );
};

Dictionary.prototype.merge = function merge (dictionary) {
  this._merge(this.container, dictionary);
};

Dictionary.prototype.setMessage = function setMessage (locale, key, message) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].messages[key] = message;
};

Dictionary.prototype.setAttribute = function setAttribute (locale, key, attribute) {
  if (! this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].attributes[key] = attribute;
};

Dictionary.prototype._merge = function _merge (target, source) {
    var this$1 = this;

  if (! (isObject(target) && isObject(source))) {
    return target;
  }

  Object.keys(source).forEach(function (key) {
    if (isObject(source[key])) {
      if (! target[key]) {
        assign(target, ( obj = {}, obj[key] = {}, obj ));
          var obj;
      }

      this$1._merge(target[key], source[key]);
      return;
    }

    assign(target, ( obj$1 = {}, obj$1[key] = source[key], obj$1 ));
      var obj$1;
  });

  return target;
};

/**
 * Formates file size.
 *
 * @param {Number|String} size
 */
var formatFileSize = function (size) {
  var units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var threshold = 1024;
  size = Number(size) * threshold;
  var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
  return (((size / Math.pow(threshold, i)).toFixed(2) * 1) + " " + (units[i]));
};

/**
 * Checks if vee-validate is defined globally.
 */
var isDefinedGlobally = function () {
  return typeof VeeValidate !== 'undefined';
};

var messages = {
  _default: function (field) { return ("The " + field + " value is not valid."); },
  after: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be after " + (inclusion ? 'or equal to ' : '') + target + ".");
},
  alpha_dash: function (field) { return ("The " + field + " field may contain alpha-numeric characters as well as dashes and underscores."); },
  alpha_num: function (field) { return ("The " + field + " field may only contain alpha-numeric characters."); },
  alpha_spaces: function (field) { return ("The " + field + " field may only contain alphabetic characters as well as spaces."); },
  alpha: function (field) { return ("The " + field + " field may only contain alphabetic characters."); },
  before: function (field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return ("The " + field + " must be before " + (inclusion ? 'or equal to ' : '') + target + ".");
},
  between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " field must be between " + min + " and " + max + ".");
},
  confirmed: function (field) { return ("The " + field + " confirmation does not match."); },
  credit_card: function (field) { return ("The " + field + " field is invalid."); },
  date_between: function (field, ref) {
    var min = ref[0];
    var max = ref[1];

    return ("The " + field + " must be between " + min + " and " + max + ".");
},
  date_format: function (field, ref) {
    var format = ref[0];

    return ("The " + field + " must be in the format " + format + ".");
},
  decimal: function (field, ref) {
    if ( ref === void 0 ) ref = ['*'];
    var decimals = ref[0];

    return ("The " + field + " field must be numeric and may contain " + (!decimals || decimals === '*' ? '' : decimals) + " decimal points.");
},
  digits: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be numeric and exactly contain " + length + " digits.");
},
  dimensions: function (field, ref) {
    var width = ref[0];
    var height = ref[1];

    return ("The " + field + " field must be " + width + " pixels by " + height + " pixels.");
},
  email: function (field) { return ("The " + field + " field must be a valid email."); },
  ext: function (field) { return ("The " + field + " field must be a valid file."); },
  image: function (field) { return ("The " + field + " field must be an image."); },
  in: function (field) { return ("The " + field + " field must be a valid value."); },
  integer: function (field) { return ("The " + field + " field must be an integer."); },
  ip: function (field) { return ("The " + field + " field must be a valid ip address."); },
  length: function (field, ref) {
    var length = ref[0];
    var max = ref[1];

    if (max) {
      return ("The " + field + " length be between " + length + " and " + max + ".");
    }

    return ("The " + field + " length must be " + length + ".");
  },
  max: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field may not be greater than " + length + " characters.");
},
  max_value: function (field, ref) {
    var max = ref[0];

    return ("The " + field + " field must be " + max + " or less.");
},
  mimes: function (field) { return ("The " + field + " field must have a valid file type."); },
  min: function (field, ref) {
    var length = ref[0];

    return ("The " + field + " field must be at least " + length + " characters.");
},
  min_value: function (field, ref) {
    var min = ref[0];

    return ("The " + field + " field must be " + min + " or more.");
},
  not_in: function (field) { return ("The " + field + " field must be a valid value."); },
  numeric: function (field) { return ("The " + field + " field may only contain numeric characters."); },
  regex: function (field) { return ("The " + field + " field format is invalid."); },
  required: function (field) { return ("The " + field + " field is required."); },
  size: function (field, ref) {
    var size = ref[0];

    return ("The " + field + " size must be less than " + (formatFileSize(size)) + ".");
},
  url: function (field) { return ("The " + field + " field is not a valid URL."); }
};

var locale$1 = {
  name: 'en',
  messages: messages,
  attributes: {}
};

if (isDefinedGlobally()) {
  // eslint-disable-next-line
  VeeValidate.Validator.addLocale(locale$1);
}

/**
 * Generates the options required to construct a field.
 */
var Generator = function Generator () {};

Generator.generate = function generate (el, binding, vnode, options) {
    if ( options === void 0 ) options = {};

  var model = Generator.resolveModel(binding, vnode);

  return {
    name: Generator.resolveName(el, vnode),
    el: el,
    listen: !binding.modifiers.disable,
    scope: Generator.resolveScope(el, binding, vnode),
    vm: Generator.makeVM(vnode.context),
    expression: binding.value,
    component: vnode.child,
    classes: options.classes,
    classNames: options.classNames,
    getter: Generator.resolveGetter(el, vnode, model),
    events: Generator.resolveEvents(el, vnode) || options.events,
    model: model,
    delay: Generator.resolveDelay(el, vnode, options),
    rules: Generator.resolveRules(el, binding),
    initial: !!binding.modifiers.initial,
    alias: Generator.resolveAlias(el, vnode),
    validity: options.validity,
    aria: options.aria,
    initialValue: Generator.resolveInitialValue(vnode)
  };
};

/**
 * 
 * @param {*} el 
 * @param {*} binding 
 */
Generator.resolveRules = function resolveRules (el, binding) {
  if (!binding || !binding.expression) {
    return getDataAttribute(el, 'rules');
  }

  if (typeof binding.value === 'string') {
    return binding.value;
  }

  if (~['string', 'object'].indexOf(typeof binding.value.rules)) {
    return binding.value.rules;
  }

  return binding.value;
};

/**
 * @param {*} vnode 
 */
Generator.resolveInitialValue = function resolveInitialValue (vnode) {
  var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });

  return model && model.value;
};

/**
 * Creates a non-circular partial VM instance from a Vue instance.
 * @param {*} vm 
 */
Generator.makeVM = function makeVM (vm) {
  return {
    get $el () {
      return vm.$el;
    },
    get $refs () {
      return vm.$refs;
    },
    $watch: vm.$watch ? vm.$watch.bind(vm) : function () {},
    $validator: vm.$validator ? {
      errors: vm.$validator.errors,
      validate: vm.$validator.validate.bind(vm.$validator),
      update: vm.$validator.update.bind(vm.$validator)
    } : null
  };
};

/**
 * Resolves the delay value.
 * @param {*} el
 * @param {*} vnode
 * @param {Object} options
 */
Generator.resolveDelay = function resolveDelay (el, vnode, options) {
    if ( options === void 0 ) options = {};

  return getDataAttribute(el, 'delay') || (vnode.child && vnode.child.$attrs && vnode.child.$attrs['data-vv-delay']) || options.delay;
};

/**
 * Resolves the alias for the field.
 * @param {*} el 
 * @param {*} vnode 
 * @return {Function} alias getter
 */
Generator.resolveAlias = function resolveAlias (el, vnode) {
  return function () { return getDataAttribute(el, 'as') || (vnode.child && vnode.child.$attrs && vnode.child.$attrs['data-vv-as']) || el.title || null; };
};

/**
 * Resolves the events to validate in response to.
 * @param {*} el
 * @param {*} vnode
 */
Generator.resolveEvents = function resolveEvents (el, vnode) {
  if (vnode.child) {
    return getDataAttribute(el, 'validate-on') || (vnode.child.$attrs && vnode.child.$attrs['data-vv-validate-on']);
  }

  return getDataAttribute(el, 'validate-on');
};

/**
 * Resolves the scope for the field.
 * @param {*} el
 * @param {*} binding
 */
Generator.resolveScope = function resolveScope (el, binding, vnode) {
    if ( vnode === void 0 ) vnode = {};

  var scope = null;
  if (isObject(binding.value)) {
    scope = binding.value.scope;
  }

  if (vnode.child && !scope) {
    scope = vnode.child.$attrs && vnode.child.$attrs['data-vv-scope'];
  }

  return scope || getScope(el);
};

/**
 * Checks if the node directives contains a v-model or a specified arg.
 * Args take priority over models.
 *
 * @return {Object}
 */
Generator.resolveModel = function resolveModel (binding, vnode) {
  if (binding.arg) {
    return binding.arg;
  }

  if (isObject(binding.value) && binding.value.arg) {
    return binding.value.arg;
  }

  var model = vnode.data.model || find(vnode.data.directives, function (d) { return d.name === 'model'; });
  if (!model) {
    return null;
  }

  var watchable = /^[a-z_]+[0-9]*(\w*\.[a-z_]\w*)*$/i.test(model.expression) && hasPath(model.expression, vnode.context);

  if (!watchable) {
    return null;
  }

  return model.expression;
};

/**
   * Resolves the field name to trigger validations.
   * @return {String} The field name.
   */
Generator.resolveName = function resolveName (el, vnode) {
  if (vnode.child) {
    return getDataAttribute(el, 'name') || (vnode.child.$attrs && (vnode.child.$attrs['data-vv-name'] || vnode.child.$attrs['name'])) || vnode.child.name;
  }

  return getDataAttribute(el, 'name') || el.name;
};

/**
 * Returns a value getter input type.
 */
Generator.resolveGetter = function resolveGetter (el, vnode, model) {
  if (model) {
    return function () {
      return getPath(model, vnode.context);
    };
  }

  if (vnode.child) {
    return function () {
      var path = getDataAttribute(el, 'value-path') || (vnode.child.$attrs && vnode.child.$attrs['data-vv-value-path']);
      if (path) {
        return getPath(path, vnode.child);
      }
      return vnode.child.value;
    };
  }

  switch (el.type) {
  case 'checkbox': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));

    els = toArray(els).filter(function (el) { return el.checked; });
    if (!els.length) { return undefined; }

    return els.map(function (checkbox) { return checkbox.value; });
  };
  case 'radio': return function () {
    var els = document.querySelectorAll(("input[name=\"" + (el.name) + "\"]"));
    var elm = find(els, function (el) { return el.checked; });

    return elm && elm.value;
  };
  case 'file': return function (context) {
    return toArray(el.files);
  };
  case 'select-multiple': return function () {
    return toArray(el.options).filter(function (opt) { return opt.selected; }).map(function (opt) { return opt.value; });
  };
  default: return function () {
    return el && el.value;
  };
  }
};

var DEFAULT_OPTIONS = {
  targetOf: null,
  initial: false,
  scope: null,
  listen: true,
  name: null,
  active: true,
  required: false,
  rules: {},
  vm: null,
  classes: false,
  validity: true,
  aria: true,
  events: 'input|blur',
  delay: 0,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
};

var Field = function Field (el, options) {
  if ( options === void 0 ) options = {};

  this.id = uniqId();
  this.el = el;
  this.updated = false;
  this.dependencies = [];
  this.watchers = [];
  this.events = [];
  this.rules = {};
  if (!this.isHeadless && !options.targetOf) {
    setDataAttribute(this.el, 'id', this.id); // cache field id if it is independent and has a root element.
  }
  options = assign({}, DEFAULT_OPTIONS, options);
  this.validity = options.validity;
  this.aria = options.aria;
  this.flags = createFlags();
  this.vm = options.vm;
  this.component = options.component;
  this.update(options);
  this.updated = false;
};

var prototypeAccessors$1 = { isVue: {},validator: {},isRequired: {},isDisabled: {},isHeadless: {},displayName: {},value: {},rejectsFalse: {} };

prototypeAccessors$1.isVue.get = function () {
  return !!this.component;
};

prototypeAccessors$1.validator.get = function () {
  if (!this.vm || !this.vm.$validator) {
    warn('No validator instance detected.');
    return { validate: function () {} };
  }

  return this.vm.$validator;
};

prototypeAccessors$1.isRequired.get = function () {
  return !!this.rules.required;
};

prototypeAccessors$1.isDisabled.get = function () {
  return (this.isVue && this.component.disabled) || (this.el && this.el.disabled);
};

prototypeAccessors$1.isHeadless.get = function () {
  return !this.el;
};

/**
 * Gets the display name (user-friendly name).
 * @return {String}
 */
prototypeAccessors$1.displayName.get = function () {
  return isCallable(this.alias) ? this.alias() : this.alias;
};

/**
 * Gets the input value.
 * @return {*}
 */
prototypeAccessors$1.value.get = function () {
  if (!isCallable(this.getter)) {
    return undefined;
  }

  return this.getter();
};

/**
 * If the field rejects false as a valid value for the required rule. 
 */
prototypeAccessors$1.rejectsFalse.get = function () {
  if (this.isVue || this.isHeadless) {
    return false;
  }

  return this.el.type === 'checkbox';
};

/**
 * Determines if the instance matches the options provided.
 * @param {Object} options The matching options.
 */
Field.prototype.matches = function matches (options) {
  if (options.id) {
    return this.id === options.id;
  }

  if (options.name === undefined && options.scope === undefined) {
    return true;
  }

  if (options.scope === undefined) {
    return this.name === options.name;
  }

  if (options.name === undefined) {
    return this.scope === options.scope;
  }

  return options.name === this.name && options.scope === this.scope;
};

/**
 *
 * @param {Object} options
 */
Field.prototype.update = function update (options) {
  this.targetOf = options.targetOf || null;
  this.initial = options.initial || this.initial || false;

  // update errors scope if the field scope was changed.
  if (this.updated && options.scope && options.scope !== this.scope && isCallable(this.validator.update)) {
    this.validator.update(this.id, { scope: options.scope });
  }
  this.scope = options.scope || this.scope || null;
  this.name = (!isNullOrUndefined(options.name) ? String(options.name) : options.name) || this.name || null;
  this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
  this.model = options.model || this.model;
  this.listen = options.listen !== undefined ? options.listen : this.listen;
  this.classes = options.classes || this.classes || false;
  this.classNames = options.classNames || this.classNames || DEFAULT_OPTIONS.classNames;
  this.alias = options.alias || this.alias;
  this.getter = isCallable(options.getter) ? options.getter : this.getter;
  this.delay = options.delay || this.delay || 0;
  this.events = typeof options.events === 'string' && options.events.length ? options.events.split('|') : this.events;
  this.updateDependencies();
  this.addActionListeners();

  // update required flag flags
  if (options.rules !== undefined) {
    this.flags.required = this.isRequired;
  }

  // validate if it was validated before and field was updated and there was a rules mutation.
  if (this.flags.validated && options.rules !== undefined && this.updated) {
    this.validator.validate(("#" + (this.id)));
  }

  this.updated = true;

  // no need to continue.
  if (this.isHeadless) {
    return;
  }

  this.updateClasses();
  this.addValueListeners();
  this.updateAriaAttrs();
};

/**
 * Resets field flags and errors.
 */
Field.prototype.reset = function reset () {
    var this$1 = this;

  var def = createFlags();
  Object.keys(this.flags).forEach(function (flag) {
    this$1.flags[flag] = def[flag];
  });

  this.addActionListeners();
  this.updateClasses();
  if (this.validator.errors && isCallable(this.validator.errors.removeById)) {
    this.validator.errors.removeById(this.id);
  }
};

/**
 * Sets the flags and their negated counterparts, and updates the classes and re-adds action listeners.
 * @param {Object} flags 
 */
Field.prototype.setFlags = function setFlags (flags) {
    var this$1 = this;

  var negated = {
    pristine: 'dirty',
    dirty: 'pristine',
    valid: 'invalid',
    invalid: 'valid',
    touched: 'untouched',
    untouched: 'touched'
  };

  Object.keys(flags).forEach(function (flag) {
    this$1.flags[flag] = flags[flag];
    // if it has a negation and was not specified, set it as well.
    if (negated[flag] && flags[negated[flag]] === undefined) {
      this$1.flags[negated[flag]] = !flags[flag];
    }
  });

  if (
    flags.untouched !== undefined ||
    flags.touched !== undefined ||
    flags.dirty !== undefined ||
    flags.pristine !== undefined
  ) {
    this.addActionListeners();
  }
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Determines if the field requires references to target fields.
*/
Field.prototype.updateDependencies = function updateDependencies () {
    var this$1 = this;

  // reset dependencies.
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];

  // we get the selectors for each field.
  var fields = Object.keys(this.rules).reduce(function (prev, r) {
    if (r === 'confirmed') {
      prev.push({ selector: this$1.rules[r][0] || ((this$1.name) + "_confirmation"), name: r });
    } else if (/after|before/.test(r)) {
      prev.push({ selector: this$1.rules[r][0], name: r });
    }

    return prev;
  }, []);

  if (!fields.length || !this.vm || !this.vm.$el) { return; }

  // must be contained within the same component, so we use the vm root element constrain our dom search.
  fields.forEach(function (ref) {
      var selector = ref.selector;
      var name = ref.name;

    var el = null;
    // vue ref selector.
    if (selector[0] === '$') {
      el = this$1.vm.$refs[selector.slice(1)];
    } else {
      try {
        // try query selector
        el = this$1.vm.$el.querySelector(selector);
      } catch (err) {
        el = null;
      }
    }

    if (!el) {
      el = this$1.vm.$el.querySelector(("input[name=\"" + selector + "\"]"));
    }

    if (!el) {
      return;
    }

    var options = {
      vm: this$1.vm,
      classes: this$1.classes,
      classNames: this$1.classNames,
      delay: this$1.delay,
      scope: this$1.scope,
      events: this$1.events.join('|'),
      initial: this$1.initial,
      targetOf: this$1.id
    };

    // probably a component.
    if (isCallable(el.$watch)) {
      options.component = el;
      options.el = el.$el;
      options.alias = Generator.resolveAlias(el.$el, { child: el });
      options.getter = Generator.resolveGetter(el.$el, { child: el });
    } else {
      options.el = el;
      options.alias = Generator.resolveAlias(el, {});
      options.getter = Generator.resolveGetter(el, {});
    }

    this$1.dependencies.push({ name: name, field: new Field(options.el, options) });
  });
};

/**
 * Removes listeners.
 * @param {RegExp} tag
 */
Field.prototype.unwatch = function unwatch (tag) {
    if ( tag === void 0 ) tag = null;

  if (!tag) {
    this.watchers.forEach(function (w) { return w.unwatch(); });
    this.watchers = [];
    return;
  }
  this.watchers.filter(function (w) { return tag.test(w.tag); }).forEach(function (w) { return w.unwatch(); });
  this.watchers = this.watchers.filter(function (w) { return !tag.test(w.tag); });
};

/**
 * Updates the element classes depending on each field flag status.
 */
Field.prototype.updateClasses = function updateClasses () {
  if (!this.classes) { return; }

  toggleClass(this.el, this.classNames.dirty, this.flags.dirty);
  toggleClass(this.el, this.classNames.pristine, this.flags.pristine);
  toggleClass(this.el, this.classNames.valid, !!this.flags.valid);
  toggleClass(this.el, this.classNames.invalid, !!this.flags.invalid);
  toggleClass(this.el, this.classNames.touched, this.flags.touched);
  toggleClass(this.el, this.classNames.untouched, this.flags.untouched);
};

/**
 * Adds the listeners required for automatic classes and some flags.
 */
Field.prototype.addActionListeners = function addActionListeners () {
    var this$1 = this;

  // remove previous listeners.
  this.unwatch(/class/);

  var onBlur = function () {
    this$1.flags.touched = true;
    this$1.flags.untouched = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.touched, true);
      toggleClass(this$1.el, this$1.classNames.untouched, false);
    }

    // only needed once.
    this$1.unwatch(/^class_blur$/);
  };

  var inputEvent = getInputEventName(this.el);
  var onInput = function () {
    this$1.flags.dirty = true;
    this$1.flags.pristine = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.pristine, false);
      toggleClass(this$1.el, this$1.classNames.dirty, true);
    }

    // only needed once.
    this$1.unwatch(/^class_input$/);
  };

  if (this.isVue && isCallable(this.component.$once)) {
    this.component.$once('input', onInput);
    this.component.$once('blur', onBlur);
    this.watchers.push({
      tag: 'class_input',
      unwatch: function () {
        this$1.component.$off('input', onInput);
      }
    });
    this.watchers.push({
      tag: 'class_blur',
      unwatch: function () {
        this$1.component.$off('blur', onBlur);
      }
    });
    return;
  }

  if (this.isHeadless) { return; }

  this.el.addEventListener(inputEvent, onInput);
  // Checkboxes and radio buttons on Mac don't emit blur naturally, so we listen on click instead.
  var blurEvent = ['radio', 'checkbox'].indexOf(this.el.type) === -1 ? 'blur' : 'click';
  this.el.addEventListener(blurEvent, onBlur);
  this.watchers.push({
    tag: 'class_input',
    unwatch: function () {
      this$1.el.removeEventListener(inputEvent, onInput);
    }
  });

  this.watchers.push({
    tag: 'class_blur',
    unwatch: function () {
      this$1.el.removeEventListener(blurEvent, onBlur);
    }
  });
};

/**
 * Adds the listeners required for validation.
 */
Field.prototype.addValueListeners = function addValueListeners () {
    var this$1 = this;

  this.unwatch(/^input_.+/);
  if (!this.listen) { return; }

  var fn = this.targetOf ? function () {
    this$1.validator.validate(("#" + (this$1.targetOf)));
  } : function () {
    this$1.validator.validate(("#" + (this$1.id)));
  };

  var validate = debounce(fn, this.delay);
  var inputEvent = getInputEventName(this.el);
  // replace input event with suitable one.
  var events = this.events.map(function (e) {
    return e === 'input' ? inputEvent : e;
  });

  // if there is a watchable model and an on input validation is requested.
  if (this.model && events.indexOf(inputEvent) !== -1) {
    var unwatch = this.vm.$watch(this.model, validate);
    this.watchers.push({
      tag: 'input_model',
      unwatch: unwatch
    });
    // filter out input event as it is already handled by the watcher API.
    events = events.filter(function (e) { return e !== inputEvent; });
  }

  // Add events.
  events.forEach(function (e) {
    if (this$1.isVue) {
      this$1.component.$on(e, validate);
      this$1.watchers.push({
        tag: 'input_vue',
        unwatch: function () {
          this$1.component.$off(e, validate);
        }
      });
      return;
    }

    if (~['radio', 'checkbox'].indexOf(this$1.el.type)) {
      var els = document.querySelectorAll(("input[name=\"" + (this$1.el.name) + "\"]"));
      toArray(els).forEach(function (el) {
        el.addEventListener(e, validate);
        this$1.watchers.push({
          tag: 'input_native',
          unwatch: function () {
            el.removeEventListener(e, validate);
          }
        });
      });

      return;
    }

    this$1.el.addEventListener(e, validate);
    this$1.watchers.push({
      tag: 'input_native',
      unwatch: function () {
        this$1.el.removeEventListener(e, validate);
      }
    });
  });
};

/**
 * Updates aria attributes on the element.
 */
Field.prototype.updateAriaAttrs = function updateAriaAttrs () {
  if (!this.aria || this.isHeadless || !isCallable(this.el.setAttribute)) { return; }

  this.el.setAttribute('aria-required', this.isRequired ? 'true' : 'false');
  this.el.setAttribute('aria-invalid', this.flags.invalid ? 'true' : 'false');
};

/**
 * Updates the custom validity for the field.
 */
Field.prototype.updateCustomValidity = function updateCustomValidity () {
  if (!this.validity || this.isHeadless || !isCallable(this.el.setCustomValidity)) { return; }

  this.el.setCustomValidity(this.flags.valid ? '' : (this.validator.errors.firstById(this.id) || ''));
};

/**
 * Removes all listeners.
 */
Field.prototype.destroy = function destroy () {
  this.watchers.forEach(function (w) { return w.unwatch(); });
  this.watchers = [];
  this.dependencies.forEach(function (d) { return d.field.destroy(); });
  this.dependencies = [];
};

Object.defineProperties( Field.prototype, prototypeAccessors$1 );

var FieldBag = function FieldBag () {
  this.items = [];
};

var prototypeAccessors$2 = { length: {} };

/**
 * @return {Number} The current collection length.
 */
prototypeAccessors$2.length.get = function () {
  return this.items.length;
};

/**
 * Finds the first field that matches the provided matcher object.
 * @param {Object} matcher
 * @return {Field|undefined} The first matching item.
 */
FieldBag.prototype.find = function find$1 (matcher) {
  return find(this.items, function (item) { return item.matches(matcher); });
};

/**
 * @param {Object|Array} matcher
 * @return {Array} Array of matching field items.
 */
FieldBag.prototype.filter = function filter (matcher) {
  // multiple matchers to be tried.
  if (Array.isArray(matcher)) {
    return this.items.filter(function (item) { return matcher.some(function (m) { return item.matches(m); }); });
  }

  return this.items.filter(function (item) { return item.matches(matcher); });
};

/**
 * Maps the field items using the mapping function.
 *
 * @param {Function} mapper
 */
FieldBag.prototype.map = function map (mapper) {
  return this.items.map(mapper);
};

/**
 * Finds and removes the first field that matches the provided matcher object, returns the removed item.
 * @param {Object|Field} matcher
 * @return {Field|null}
 */
FieldBag.prototype.remove = function remove (matcher) {
  var item = null;
  if (matcher instanceof Field) {
    item = matcher;
  } else {
    item = this.find(matcher);
  }

  if (!item) { return null; }

  var index = this.items.indexOf(item);
  this.items.splice(index, 1);

  return item;
};

/**
 * Adds a field item to the list.
 *
 * @param {Field} item
 */
FieldBag.prototype.push = function push (item) {
  if (! (item instanceof Field)) {
    throw createError('FieldBag only accepts instances of Field that has an id defined.');
  }

  if (!item.id) {
    throw createError('Field id must be defined.');
  }

  if (this.find({ id: item.id })) {
    throw createError(("Field with id " + (item.id) + " is already added."));
  }

  this.items.push(item);
};

Object.defineProperties( FieldBag.prototype, prototypeAccessors$2 );

var RULES = {};
var LOCALE = 'en';
var STRICT_MODE = true;
var DICTIONARY = new Dictionary({
  en: {
    messages: messages,
    attributes: {},
    custom: {}
  }
});

var Validator = function Validator (validations, options) {
  var this$1 = this;
  if ( options === void 0 ) options = { vm: null, fastExit: true };

  this.strict = STRICT_MODE;
  this.errors = new ErrorBag();
  this.fields = new FieldBag();
  this.flags = {};
  this._createFields(validations);
  this.paused = false;
  this.fastExit = options.fastExit || false;
  this.ownerId = options.vm && options.vm._uid;
  // create it statically since we don't need constant access to the vm.
  this.reset = options.vm && isCallable(options.vm.$nextTick) ? function () {
    options.vm.$nextTick(function () {
      this$1.fields.items.forEach(function (i) { return i.reset(); });
      this$1.errors.clear();
    });
  } : function () {
    this$1.fields.items.forEach(function (i) { return i.reset(); });
    this$1.errors.clear();
  };
  /* istanbul ignore next */
  this.clean = function () {
    warn('validator.clean is marked for deprecation, please use validator.reset instead.');
    this$1.reset();
  };
};

var prototypeAccessors = { dictionary: {},locale: {},rules: {} };
var staticAccessors = { dictionary: {},locale: {},rules: {} };

/**
 * @return {Dictionary}
 */
prototypeAccessors.dictionary.get = function () {
  return DICTIONARY;
};

/**
 * @return {Dictionary}
 */
staticAccessors.dictionary.get = function () {
  return DICTIONARY;
};

/**
 * @return {String}
 */
prototypeAccessors.locale.get = function () {
  return LOCALE;
};

/**
 * @param {String} value
 */
prototypeAccessors.locale.set = function (value) {
  Validator.locale = value;
};

/**
* @return {String}
*/
staticAccessors.locale.get = function () {
  return LOCALE;
};

/**
 * @param {String} value
 */
staticAccessors.locale.set = function (value) {
  /* istanbul ignore if */
  if (!DICTIONARY.hasLocale(value)) {
    // eslint-disable-next-line
    warn('You are setting the validator locale to a locale that is not defined in the dictionary. English messages may still be generated.');
  }

  LOCALE = value;
};

/**
 * @return {Object}
 */
prototypeAccessors.rules.get = function () {
  return RULES;
};

/**
 * @return {Object}
 */
staticAccessors.rules.get = function () {
  return RULES;
};

/**
 * Static constructor.
 *
 * @param{object} validations The validations object.
 * @return {Validator} validator A validator object.
 */
Validator.create = function create (validations, options) {
  return new Validator(validations, options);
};

/**
 * Adds a custom validator to the list of validation rules.
 *
 * @param{string} name The name of the validator.
 * @param{object|function} validator The validator object/function.
 */
Validator.extend = function extend (name, validator) {
  Validator._guardExtend(name, validator);
  Validator._merge(name, validator);
};

/**
 * Removes a rule from the list of validators.
 * @param {String} name The name of the validator/rule.
 */
Validator.remove = function remove (name) {
  delete RULES[name];
};

/**
 * Sets the default locale for all validators.
 * @deprecated
 * @param {String} language The locale id.
 */
Validator.setLocale = function setLocale (language) {
    if ( language === void 0 ) language = 'en';

  Validator.locale = language;
};

/**
 * @deprecated
 */
Validator.installDateTimeValidators = function installDateTimeValidators () {
  /* istanbul ignore next */
  warn('Date validations are now installed by default, you no longer need to install it.');
};

/**
 * @deprecated
 */
Validator.prototype.installDateTimeValidators = function installDateTimeValidators () {
  /* istanbul ignore next */
  warn('Date validations are now installed by default, you no longer need to install it.');
};

/**
 * Sets the operating mode for all newly created validators.
 * strictMode = true: Values without a rule are invalid and cause failure.
 * strictMode = false: Values without a rule are valid and are skipped.
 * @param {Boolean} strictMode.
 */
Validator.setStrictMode = function setStrictMode (strictMode) {
    if ( strictMode === void 0 ) strictMode = true;

  STRICT_MODE = strictMode;
};

/**
 * Updates the dictionary, overwriting existing values and adding new ones.
 * @deprecated
 * @param{object} data The dictionary object.
 */
Validator.updateDictionary = function updateDictionary (data) {
  DICTIONARY.merge(data);
};

/**
 * Adds a locale object to the dictionary.
 * @deprecated
 * @param {Object} locale 
 */
Validator.addLocale = function addLocale (locale) {
  if (! locale.name) {
    warn('Your locale must have a name property');
    return;
  }

  this.updateDictionary(( obj = {}, obj[locale.name] = locale, obj ));
    var obj;
};

/**
 * Adds a locale object to the dictionary.
 * @deprecated
 * @param {Object} locale 
 */
Validator.prototype.addLocale = function addLocale (locale) {
  Validator.addLocale(locale);
};

/**
 * Adds and sets the current locale for the validator.
 *
 * @param {String} lang
 * @param {Object} dictionary
 */
Validator.prototype.localize = function localize (lang, dictionary) {
  Validator.localize(lang, dictionary);
};

/**
 * Adds and sets the current locale for the validator.
 * 
 * @param {String} lang
 * @param {Object} dictionary
 */
Validator.localize = function localize (lang, dictionary) {
  // merge the dictionary.
  if (dictionary) {
    dictionary = assign({}, dictionary, { name: lang });
    Validator.addLocale(dictionary);
  }

  // set the locale.
  Validator.locale = lang;
};

/**
 * Registers a field to be validated.
 *
 * @param{Field|Object} name The field name.
 * @return {Field}
 */
Validator.prototype.attach = function attach (field) {
  // deprecate: handle old signature.
  if (arguments.length > 1) {
    field = assign({}, {
      name: arguments[0],
      rules: arguments[1]
    }, arguments[2] || { vm: { $validator: this } });
  }

  // fixes initial value detection with v-model and select elements.
  var value = field.initialValue;
  if (!(field instanceof Field)) {
    field = new Field(field.el || null, field);
  }

  this.fields.push(field);

  // validate the field initially
  if (field.initial) {
    this.validate(("#" + (field.id)), value || field.value);
  } else {
    this._validate(field, value || field.value, true).then(function (valid) {
      field.flags.valid = valid;
      field.flags.invalid = !valid;
    });
  }

  this._addFlag(field, field.scope);
  return field;
};

/**
 * Sets the flags on a field.
 *
 * @param {String} name
 * @param {Object} flags
 */
Validator.prototype.flag = function flag (name, flags) {
  var field = this._resolveField(name);
  if (! field || !flags) {
    return;
  }

  field.setFlags(flags);
};

/**
 * Removes a field from the validator.
 *
 * @param{String} name The name of the field.
 * @param {String} scope The name of the field scope.
 */
Validator.prototype.detach = function detach (name, scope) {
  var field = name instanceof Field ? name : this._resolveField(name, scope);
  if (!field) { return; }

  field.destroy();
  this.errors.remove(field.name, field.scope, field.id);
  this.fields.remove(field);
  var flags = this.flags;
  if (field.scope && flags[("$" + (field.scope))]) {
    delete flags[("$" + (field.scope))][field.name];
  } else if (!field.scope) {
    delete flags[field.name];
  }

  this.flags = assign({}, flags);
};

/**
 * Adds a custom validator to the list of validation rules.
 *
 * @param{string} name The name of the validator.
 * @param{object|function} validator The validator object/function.
 */
Validator.prototype.extend = function extend (name, validator) {
  Validator.extend(name, validator);
};

/**
 * Updates a field, updating both errors and flags.
 *
 * @param {String} id 
 * @param {Object} diff 
 */
Validator.prototype.update = function update (id, ref) {
    var scope = ref.scope;

  var field = this._resolveField(("#" + id));
  this.errors.update(id, { scope: scope });

  // remove old scope.
  if (field.scope && this.flags[("$" + (field.scope))]) {
    delete this.flags[("$" + (field.scope))][field.name];
  } else if (!field.scope) {
    delete this.flags[field.name];
  }

  this._addFlag(field, scope);
};

/**
 * Removes a rule from the list of validators.
 * @param {String} name The name of the validator/rule.
 */
Validator.prototype.remove = function remove (name) {
  Validator.remove(name);
};

/**
 * Sets the validator current langauge.
 *
 * @param {string} language locale or language id.
 */
Validator.prototype.setLocale = function setLocale (language) {
  this.locale = language;
};

/**
 * Updates the messages dictionary, overwriting existing values and adding new ones.
 * @deprecated
 * @param{object} data The messages object.
 */
Validator.prototype.updateDictionary = function updateDictionary (data) {
  Validator.updateDictionary(data);
};

/**
 * Validates a value against a registered field validations.
 *
 * @param{string} name the field name.
 * @param{*} value The value to be validated.
 * @param {String} scope The scope of the field.
 * @return {Promise}
 */
Validator.prototype.validate = function validate (name, value, scope) {
    if ( scope === void 0 ) scope = null;

  if (this.paused) { return Promise.resolve(true); }

  // overload to validate all.
  if (arguments.length === 0) {
    return this.validateScopes();
  }

  // overload to validate scopeless fields.
  if (arguments.length === 1 && arguments[0] === '*') {
    return this.validateAll();
  }

  // overload to validate a scope.
  if (arguments.length === 1 && typeof arguments[0] === 'string' && /^(.+)\.\*$/.test(arguments[0])) {
    var matched = arguments[0].match(/^(.+)\.\*$/)[1];
    return this.validateAll(matched);
  }

  var field = this._resolveField(name, scope);
  if (!field) {
    return this._handleFieldNotFound(name, scope);
  }

  this.errors.remove(field.name, field.scope, field.id);
  field.flags.pending = true;
  if (arguments.length === 1) {
    value = field.value;
  }

  var silentRun = field.isDisabled;

  return this._validate(field, value, silentRun).then(function (result) {
    field.setFlags({
      pending: false,
      valid: result,
      validated: true
    });

    if (silentRun) {
      return Promise.resolve(true);
    }

    return result;
  });
};

/**
 * Pauses the validator.
 *
 * @return {Validator}
 */
Validator.prototype.pause = function pause () {
  this.paused = true;

  return this;
};

/**
 * Resumes the validator.
 *
 * @return {Validator}
 */
Validator.prototype.resume = function resume () {
  this.paused = false;

  return this;
};

/**
 * Validates each value against the corresponding field validations.
 * @param{Object|String} values The values to be validated.
 * @return {Promise} Returns a promise with the validation result.
 */
Validator.prototype.validateAll = function validateAll (values) {
    var arguments$1 = arguments;
    var this$1 = this;

  if (this.paused) { return Promise.resolve(true); }

  var matcher = null;
  var providedValues = false;

  if (typeof values === 'string') {
    matcher = { scope: values };
  } else if (isObject(values)) {
    matcher = Object.keys(values).map(function (key) {
      return { name: key, scope: arguments$1[1] || null };
    });
    providedValues = true;
  } else if (arguments.length === 0) {
    matcher = { scope: null }; // global scope.
  }

  var promises = this.fields.filter(matcher).map(function (field) { return this$1.validate(
    ("#" + (field.id)),
    providedValues ? values[field.name] : field.value
  ); });

  return Promise.all(promises).then(function (results) { return results.every(function (t) { return t; }); });
};

/**
 * Validates all scopes.
 *
 * @returns {Promise} All promises resulted from each scope.
 */
Validator.prototype.validateScopes = function validateScopes () {
    var this$1 = this;

  if (this.paused) { return Promise.resolve(true); }

  var promises = this.fields.map(function (field) { return this$1.validate(
    ("#" + (field.id)),
    field.value
  ); });

  return Promise.all(promises).then(function (results) { return results.every(function (t) { return t; }); });
};

/**
 * Creates the fields to be validated.
 *
 * @param{object} validations
 * @return {object} Normalized object.
 */
Validator.prototype._createFields = function _createFields (validations) {
    var this$1 = this;

  if (!validations) { return; }

  Object.keys(validations).forEach(function (field) {
    var options = assign({}, { name: field, rules: validations[field] });
    this$1.attach(options);
  });
};

/**
 * Date rules need the existance of a format, so date_format must be supplied.
 * @param {String} name The rule name.
 * @param {Array} validations the field validations.
 */
Validator.prototype._getDateFormat = function _getDateFormat (validations) {
  var format = null;
  if (validations.date_format && Array.isArray(validations.date_format)) {
    format = validations.date_format[0];
  }

  return format || this.dictionary.getDateFormat(this.locale);
};

/**
 * Checks if the passed rule is a date rule.
 */
Validator.prototype._isADateRule = function _isADateRule (rule) {
  return !! ~['after', 'before', 'date_between', 'date_format'].indexOf(rule);
};

/**
 * Formats an error message for field and a rule.
 *
 * @param{Field} field The field object.
 * @param{object} rule Normalized rule object.
 * @param {object} data Additional Information about the validation result.
 * @return {string} Formatted error message.
 */
Validator.prototype._formatErrorMessage = function _formatErrorMessage (field, rule, data, targetName) {
    if ( data === void 0 ) data = {};
    if ( targetName === void 0 ) targetName = null;

  var name = this._getFieldDisplayName(field);
  var params = this._getLocalizedParams(rule, targetName);
  // Defaults to english message.
  if (!this.dictionary.hasLocale(LOCALE)) {
    var msg$1 = this.dictionary.getFieldMessage('en', field.name, rule.name);

    return isCallable(msg$1) ? msg$1(name, params, data) : msg$1;
  }

  var msg = this.dictionary.getFieldMessage(LOCALE, field.name, rule.name);

  return isCallable(msg) ? msg(name, params, data) : msg;
};

/**
 * Translates the parameters passed to the rule (mainly for target fields).
 */
Validator.prototype._getLocalizedParams = function _getLocalizedParams (rule, targetName) {
    if ( targetName === void 0 ) targetName = null;

  if (~['after', 'before', 'confirmed'].indexOf(rule.name) && rule.params && rule.params[0]) {
    var localizedName = targetName || this.dictionary.getAttribute(LOCALE, rule.params[0], rule.params[0]);
    return [localizedName].concat(rule.params.slice(1));
  }

  return rule.params;
};

/**
 * Resolves an appropiate display name, first checking 'data-as' or the registered 'prettyName'
 * Then the dictionary, then fallsback to field name.
 * @param {Field} field The field object.
 * @return {String} The name to be used in the errors.
 */
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName (field) {
  return field.displayName || this.dictionary.getAttribute(LOCALE, field.name, field.name);
};

/**
 * Adds a field flags to the flags collection.
 * @param {Field} field 
 * @param {String|null} scope 
 */
Validator.prototype._addFlag = function _addFlag (field, scope) {
    if ( scope === void 0 ) scope = null;

  if (!scope) {
    this.flags = assign({}, this.flags, ( obj = {}, obj[("" + (field.name))] = field.flags, obj ));
      var obj;
    return;
  }

  var scopeObj = assign({}, this.flags[("$" + scope)] || {}, ( obj$1 = {}, obj$1[("" + (field.name))] = field.flags, obj$1 ));
    var obj$1;
  this.flags = assign({}, this.flags, ( obj$2 = {}, obj$2[("$" + scope)] = scopeObj, obj$2 ));
    var obj$2;
};

/**
 * Tests a single input value against a rule.
 *
 * @param{Field} field The field under validation.
 * @param{*} valuethe value of the field.
 * @param{object} rule the rule object.
 * @return {boolean} Whether it passes the check.
 */
Validator.prototype._test = function _test (field, value, rule, silent) {
    var this$1 = this;

  var validator = RULES[rule.name];
  var params = Array.isArray(rule.params) ? toArray(rule.params) : [];
  var targetName = null;
  if (!validator || typeof validator !== 'function') {
    throw createError(("No such validator '" + (rule.name) + "' exists."));
  }

  // has field depenencies
  if (/(confirmed|after|before)/.test(rule.name)) {
    var target = find(field.dependencies, function (d) { return d.name === rule.name; });
    if (target) {
      targetName = target.field.displayName;
      params = [target.field.value].concat(params.slice(1));
    }
  } else if (rule.name === 'required' && field.rejectsFalse) {
    // invalidate false if no args were specified and the field rejects false by default.
    params = params.length ? params : [true];
  }

  if (this._isADateRule(rule.name)) {
    var dateFormat = this._getDateFormat(field.rules);
    if (rule.name !== 'date_format') {
      params.push(dateFormat);
    }
  }

  var result = validator(value, params);

  // If it is a promise.
  if (isCallable(result.then)) {
    return result.then(function (values) {
      var allValid = true;
      var data = {};
      if (Array.isArray(values)) {
        allValid = values.every(function (t) { return (isObject(t) ? t.valid : t); });
      } else { // Is a single object/boolean.
        allValid = isObject(values) ? values.valid : values;
        data = values.data;
      }

      if (!allValid && !silent) {
        this$1.errors.add({
          id: field.id,
          field: field.name,
          msg: this$1._formatErrorMessage(field, rule, data, targetName),
          rule: rule.name,
          scope: field.scope
        });
      }

      return allValid;
    });
  }

  if (!isObject(result)) {
    result = { valid: result, data: {} };
  }

  if (!result.valid && !silent) {
    this.errors.add({
      id: field.id,
      field: field.name,
      msg: this._formatErrorMessage(field, rule, result.data, targetName),
      rule: rule.name,
      scope: field.scope
    });
  }

  return result.valid;
};

/**
 * Merges a validator object into the RULES and Messages.
 *
 * @param{string} name The name of the validator.
 * @param{function|object} validator The validator object.
 */
Validator._merge = function _merge (name, validator) {
  if (isCallable(validator)) {
    RULES[name] = validator;
    return;
  }

  RULES[name] = validator.validate;
  if (isCallable(validator.getMessage)) {
    DICTIONARY.setMessage(LOCALE, name, validator.getMessage);
  }

  if (validator.messages) {
    DICTIONARY.merge(
      Object.keys(validator.messages).reduce(function (prev, curr) {
        var dict = prev;
        dict[curr] = {
          messages: ( obj = {}, obj[name] = validator.messages[curr], obj )
        };
          var obj;

        return dict;
      }, {})
    );
  }
};

/**
 * Guards from extnsion violations.
 *
 * @param{string} name name of the validation rule.
 * @param{object} validator a validation rule object.
 */
Validator._guardExtend = function _guardExtend (name, validator) {
  if (isCallable(validator)) {
    return;
  }

  if (!isCallable(validator.validate)) {
    throw createError(
      // eslint-disable-next-line
      ("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.")
    );
  }

  if (!isCallable(validator.getMessage) && !isObject(validator.messages)) {
    throw createError(
      // eslint-disable-next-line
      ("Extension Error: The validator '" + name + "' must have a 'getMessage' method or have a 'messages' object.")
    );
  }
};

/**
 * Tries different strategies to find a field.
 * @param {String} name
 * @param {String} scope
 * @return {Field}
 */
Validator.prototype._resolveField = function _resolveField (name, scope) {
  if (scope) {
    return this.fields.find({ name: name, scope: scope });
  }

  if (name[0] === '#') {
    return this.fields.find({ id: name.slice(1) });
  }

  if (name.indexOf('.') > -1) {
    var parts = name.split('.');
    var field = this.fields.find({ name: parts[1], scope: parts[0] });
    if (field) {
      return field;
    }
  }

  return this.fields.find({ name: name, scope: null });
};

/**
 * Handles when a field is not found depending on the strict flag.
 *
 * @param {String} name
 * @param {String} scope
 */
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound (name, scope) {
  if (!this.strict) { return Promise.resolve(true); }

  var fullName = scope ? name : ("" + (scope ? scope + '.' : '') + name);
  throw createError(
    ("Validating a non-existant field: \"" + fullName + "\". Use \"attach()\" first.")
  );
};

/**
 * Starts the validation process.
 *
 * @param {Field} field
 * @param {Promise} value
 * @param {Boolean} silent
 */
Validator.prototype._validate = function _validate (field, value, silent) {
    var this$1 = this;
    if ( silent === void 0 ) silent = false;

  if (!field.isRequired && (isNullOrUndefined(value) || value === '')) {
    return Promise.resolve(true);
  }

  var promises = [];
  var isExitEarly = false;
  // use of '.some()' is to break iteration in middle by returning true
  Object.keys(field.rules).some(function (rule) {
    var result = this$1._test(field, value, { name: rule, params: field.rules[rule] }, silent);

    if (isCallable(result.then)) {
      promises.push(result);
    } else if (this$1.fastExit && !result) {
      isExitEarly = true;
    } else {
      var resultAsPromise = new Promise(function (resolve) {
        resolve(result);
      });
      promises.push(resultAsPromise);
    }

    return isExitEarly;
  });

  if (isExitEarly) { return Promise.resolve(false); }

  return Promise.all(promises).then(function (values) { return values.every(function (t) { return t; }); });
};

Object.defineProperties( Validator.prototype, prototypeAccessors );
Object.defineProperties( Validator, staticAccessors );

var fakeFlags = createProxy({}, {
  get: function get (target, key) {
    // is a scope
    if (String(key).indexOf('$') === 0) {
      return fakeFlags;
    }

    return createFlags();
  }
});

/**
 * Checks if a parent validator instance was requested.
 * @param {Object|Array} injections
 */
var requestsValidator = function (injections) {
  if (! injections) {
    return false;
  }

  /* istanbul ignore next */
  if (Array.isArray(injections) && ~injections.indexOf('$validator')) {
    return true;
  }

  if (isObject(injections) && injections.$validator) {
    return true;
  }

  return false;
};

/**
 * Creates a validator instance.
 * @param {Vue} vm
 * @param {Object} options
 */
var createValidator = function (vm, options) { return new Validator(null, { vm: vm, fastExit: options.fastExit }); };

var makeMixin = function (Vue, options) {
  if ( options === void 0 ) options = {};

  var mixin = {};
  mixin.provide = function providesValidator () {
    if (this.$validator) {
      return {
        $validator: this.$validator
      };
    }

    return {};
  };

  mixin.beforeCreate = function beforeCreate () {
    // if its a root instance, inject anyways, or if it requested a new instance.
    if (this.$options.$validates || !this.$parent) {
      this.$validator = createValidator(this, options);
    }

    var requested = requestsValidator(this.$options.inject);

    // if automatic injection is enabled and no instance was requested.
    if (! this.$validator && options.inject && !requested) {
      this.$validator = createValidator(this, options);
    }

    // don't inject errors or fieldBag as no validator was resolved.
    if (! requested && ! this.$validator) {
      return;
    }

    // There is a validator but it isn't injected, mark as reactive.
    if (! requested && this.$validator) {
      Vue.util.defineReactive(this.$validator, 'errors', this.$validator.errors);
      Vue.util.defineReactive(this.$validator, 'flags', this.$validator.flags);
    }

    if (! this.$options.computed) {
      this.$options.computed = {};
    }

    this.$options.computed[options.errorBagName || 'errors'] = function errorBagGetter () {
      return this.$validator.errors;
    };
    this.$options.computed[options.fieldsBagName || 'fields'] = function fieldBagGetter () {
      if (!Object.keys(this.$validator.flags).length) {
        return fakeFlags;
      }

      return this.$validator.flags;
    };
  };

  mixin.beforeDestroy = function beforeDestroy () {
    // mark the validator paused to prevent delayed validation.
    if (this.$validator && this.$validator.ownerId === this._uid && isCallable(this.$validator.pause)) {
      this.$validator.pause();
    }
  };

  return mixin;
};

var config = {
  locale: 'en',
  delay: 0,
  errorBagName: 'errors',
  dictionary: null,
  strict: true,
  fieldsBagName: 'fields',
  classes: false,
  classNames: undefined,
  events: 'input|blur',
  inject: true,
  fastExit: true,
  aria: true,
  validity: false
};

/**
 * 
 * 
 * Finds the requested field by id from the context object.
 * @param {Object} context
 * @return {Field|null}
 */
var findField = function (el, context) {
  if (!context || !context.$validator) {
    return null;
  }

  return context.$validator.fields.find({ id: getDataAttribute(el, 'id') });
};

var createDirective$1 = function (options) {
  options = assign({}, config, options);

  return {
    bind: function bind (el, binding, vnode) {
      var validator = vnode.context.$validator;
      if (! validator) {
        warn("No validator instance is present on vm, did you forget to inject '$validator'?");
        return;
      }
      var fieldOptions = Generator.generate(el, binding, vnode, options);
      validator.attach(fieldOptions);
    },
    inserted: function (el, binding, vnode) {
      var field = findField(el, vnode.context);
      var scope = Generator.resolveScope(el, binding, vnode);

      // skip if scope hasn't changed.
      if (!field || scope === field.scope) { return; }

      // only update scope.
      field.update({ scope: scope });

      // allows the field to re-evaluated once more in the update hook.
      field.updated = false;
    },
    update: function (el, binding, vnode) {
      var field = findField(el, vnode.context);

      // make sure we don't do uneccessary work if no important change was done.
      if (!field || (field.updated && isEqual(binding.value, binding.oldValue))) { return; }
      var scope = Generator.resolveScope(el, binding, vnode);
      var rules = Generator.resolveRules(el, binding);

      field.update({
        scope: scope,
        rules: rules
      });
    },
    unbind: function unbind (el, binding, ref) {
      var context = ref.context;

      var field = findField(el, context);
      if (!field) { return; }

      context.$validator.detach(field);
    }
  };
};

var Vue;

function install (_Vue, options) {
  if ( options === void 0 ) options = {};

  if (Vue) {
    warn('already installed, Vue.use(VeeValidate) should only be called once.');
    return;
  }

  Vue = _Vue;
  var config$$1 = assign({}, config, options);
  if (config$$1.dictionary) {
    Validator.updateDictionary(config$$1.dictionary);
  }

  if (options) {
    if (options.locale) {
      Validator.locale = options.locale;
    }

    if (options.strict) {
      Validator.setStrictMode(config$$1.strict);
    }
  }

  Vue.mixin(makeMixin(Vue, config$$1));
  Vue.directive('validate', createDirective$1(config$$1));
}

var after = function (value, ref) {
  var otherValue = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  value = parseDate(value, format);
  otherValue = parseDate(otherValue, format);

  // if either is not valid.
  if (!value || !otherValue) {
    return false;
  }

  return isAfter(value, otherValue) || (inclusion && isEqual$1(value, otherValue));
};

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

var alpha$1 = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/
};

var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/
};

var validate = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
  }

  return (alpha$1[locale] || alpha$1.en).test(value);
};

var validate$1 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$1(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var validate$2 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$2(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var validate$3 = function (value, ref) {
  if ( ref === void 0 ) ref = [null];
  var locale = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$3(val, [locale]); });
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var before = function (value, ref) {
  var otherValue = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  value = parseDate(value, format);
  otherValue = parseDate(otherValue, format);

  // if either is not valid.
  if (!value || !otherValue) {
    return false;
  }

  return isBefore(value, otherValue) || (inclusion && isEqual$1(value, otherValue));
};

var validate$4 = function (value, ref) {
  var min = ref[0];
  var max = ref[1];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$4(val, [min, max]); });
  }

  return Number(min) <= value && Number(max) >= value;
};

var confirmed = function (value, other) { return String(value) === String(other); };

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];
});

unwrapExports(assertString_1);

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];
});

var isCreditCard = unwrapExports(isCreditCard_1);

var credit_card = function (value) { return isCreditCard(String(value)); };

var validate$5 = function (value, params) {
  var decimals = Array.isArray(params) ? (params[0] || '*') : '*';
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$5(val, params); });
  }

  if (value === null || value === undefined || value === '') {
    return true;
  }

  // if is 0.
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(value);
  }

  var regexPart = decimals === '*' ? '+' : ("{1," + decimals + "}");
  var regex = new RegExp(("^-?\\d*(\\.\\d" + regexPart + ")?$"));

  if (! regex.test(value)) {
    return false;
  }

  var parsedValue = parseFloat(value);

  // eslint-disable-next-line
    return parsedValue === parsedValue;
};

var date_between = function (value, params) {
  var min;
  var max;
  var format;
  var inclusivity = '()';

  if (params.length > 3) {
    var assign$$1;
    (assign$$1 = params, min = assign$$1[0], max = assign$$1[1], inclusivity = assign$$1[2], format = assign$$1[3]);
  } else {
    var assign$1;
    (assign$1 = params, min = assign$1[0], max = assign$1[1], format = assign$1[2]);
  }

  var minDate = parseDate(min, format);
  var maxDate = parseDate(max, format);
  var dateVal = parseDate(value, format);

  if (!minDate || !maxDate || !dateVal) {
    return false;
  }

  if (inclusivity === '()') {
    return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate);
  }

  if (inclusivity === '(]') {
    return isAfter(dateVal, minDate) && (isEqual$1(dateVal, maxDate) || isBefore(dateVal, maxDate));
  }

  if (inclusivity === '[)') {
    return isBefore(dateVal, maxDate) && (isEqual$1(dateVal, minDate) || isAfter(dateVal, minDate));
  }

  return isEqual$1(dateVal, maxDate) || isEqual$1(dateVal, minDate) ||
        (isBefore(dateVal, maxDate) && isAfter(dateVal, minDate));
};

var date_format = function (value, ref) {
  var format = ref[0];

  return !!parseDate(value, format);
};

var validate$6 = function (value, ref) {
  var length = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$6(val, [length]); });
  }
  var strVal = String(value);

  return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();
    image.onerror = function () { return resolve({ valid: false }); };
    image.onload = function () { return resolve({
      valid: image.width === Number(width) && image.height === Number(height)
    }); };

    image.src = URL.createObjectURL(file);
  });
};

var dimensions = function (files, ref) {
  var width = ref[0];
  var height = ref[1];

  var list = [];
  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (! /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return false;
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) { return validateImage(file, width, height); }));
};

var merge_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];
});

unwrapExports(merge_1);

var isByteLength_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];
});

unwrapExports(isByteLength_1);

var isFQDN = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
});

unwrapExports(isFQDN);

var isEmail_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;



var _assertString2 = _interopRequireDefault(assertString_1);



var _merge2 = _interopRequireDefault(merge_1);



var _isByteLength2 = _interopRequireDefault(isByteLength_1);



var _isFQDN2 = _interopRequireDefault(isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];
});

var isEmail = unwrapExports(isEmail_1);

var validate$7 = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return isEmail(String(val)); });
  }

  return isEmail(String(value));
};

var ext = function (files, extensions) {
  var regex = new RegExp((".(" + (extensions.join('|')) + ")$"), 'i');

  return files.every(function (file) { return regex.test(file.name); });
};

var image = function (files) { return files.every(function (file) { return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name); }
); };

var validate$8 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$8(val, options); });
  }

  // eslint-disable-next-line
  return !! options.filter(function (option) { return option == value; }).length;
};

var isIP_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;



var _assertString2 = _interopRequireDefault(assertString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];
});

var isIP = unwrapExports(isIP_1);

var ip = function (value, ref) {
  if ( ref === void 0 ) ref = [4];
  var version = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) { return isIP(val, [version]); });
  }

  return isIP(value, version);
};

/**
 * @param {Array} value 
 * @param {Number?} max 
 */
var compare = function (value, length, max) {
  if (max === undefined) {
    return value.length === length;
  }

  // cast to number.
  max = Number(max);

  return value.length >= length && value.length <= max;
};

var length = function (value, ref) {
  var length = ref[0];
  var max = ref[1]; if ( max === void 0 ) max = undefined;

  if (value === undefined || value === null) {
    return false;
  }

  if (!value.length) {
    value = toArray(value);
  }

  return compare(value, length, max);
};

var integer = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
  }

  return /^-?[0-9]+$/.test(String(value));
};

var max$1 = function (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return length >= 0;
  }

  return String(value).length <= length;
};

var max_value = function (value, ref) {
  var max = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) <= max;
};

var mimes = function (files, mimes) {
  var regex = new RegExp(((mimes.join('|').replace('*', '.+')) + "$"), 'i');

  return files.every(function (file) { return regex.test(file.type); });
};

var min$1 = function (value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return false;
  }
  return String(value).length >= length;
};

var min_value = function (value, ref) {
  var min = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) >= min;
};

var validate$9 = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return validate$9(val, options); });
  }

  // eslint-disable-next-line
  return ! options.filter(function (option) { return option == value; }).length;
};

var numeric = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) { return /^[0-9]+$/.test(String(val)); });
  }

  return /^[0-9]+$/.test(String(value));
};

var regex = function (value, ref) {
  var regex = ref[0];
  var flags = ref.slice(1);

  if (regex instanceof RegExp) {
    return regex.test(value);
  }

  return new RegExp(regex, flags).test(String(value));
};

var required = function (value, params) {
  if ( params === void 0 ) params = [false];

  if (Array.isArray(value)) {
    return !! value.length;
  }

  // incase a field considers `false` as an empty value like checkboxes.
  var invalidateFalse = params[0];
  if (value === false && invalidateFalse) {
    return false;
  }

  if (value === undefined || value === null) {
    return false;
  }

  return !! String(value).trim().length;
};

var size = function (files, ref) {
  var size = ref[0];

  if (isNaN(size)) {
    return false;
  }

  var nSize = Number(size) * 1024;
  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var isURL_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;



var _assertString2 = _interopRequireDefault(assertString_1);



var _isFQDN2 = _interopRequireDefault(isFQDN);



var _isIP2 = _interopRequireDefault(isIP_1);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];
});

var isURL = unwrapExports(isURL_1);

var url = function (value, ref) {
  if ( ref === void 0 ) ref = [true];
  var requireProtocol = ref[0];

  var options = { require_protocol: !!requireProtocol, allow_underscores: true };
  if (Array.isArray(value)) {
    return value.every(function (val) { return isURL(val, options); });
  }

  return isURL(value, options);
};

/* eslint-disable camelcase */
var Rules = {
  after: after,
  alpha_dash: validate$1,
  alpha_num: validate$2,
  alpha_spaces: validate$3,
  alpha: validate,
  before: before,
  between: validate$4,
  confirmed: confirmed,
  credit_card: credit_card,
  date_between: date_between,
  date_format: date_format,
  decimal: validate$5,
  digits: validate$6,
  dimensions: dimensions,
  email: validate$7,
  ext: ext,
  image: image,
  in: validate$8,
  integer: integer,
  length: length,
  ip: ip,
  max: max$1,
  max_value: max_value,
  mimes: mimes,
  min: min$1,
  min_value: min_value,
  not_in: validate$9,
  numeric: numeric,
  regex: regex,
  required: required,
  size: size,
  url: url
};

function use (plugin, options) {
  if ( options === void 0 ) options = {};

  if (!isCallable(plugin)) {
    return warn('The plugin must be a callable function');
  }

  plugin({ Validator: Validator, ErrorBag: ErrorBag, Rules: Validator.rules }, options);
}

var normalize = function (fields) {
  if (Array.isArray(fields)) {
    return fields.reduce(function (prev, curr) {
      if (~curr.indexOf('.')) {
        prev[curr.split('.')[1]] = curr;
      } else {
        prev[curr] = curr;
      }

      return prev;
    }, {});
  }

  return fields;
};

/**
 * Maps fields to computed functions.
 *
 * @param {Array|Object} fields
 */
var mapFields = function (fields) {
  var normalized = normalize(fields);
  return Object.keys(normalized).reduce(function (prev, curr) {
    var field = normalized[curr];
    prev[curr] = function mappedField () {
      if (this.$validator.flags[field]) {
        return this.$validator.flags[field];
      }

      var index = field.indexOf('.');
      if (index <= 0) {
        return {};
      }
      var ref = field.split('.');
      var scope = ref[0];
      var name = ref[1];

      return getPath(("$" + scope + "." + name), this.$validator.flags, {});
    };

    return prev;
  }, {});
};

var version = '2.0.0-rc.17';

var rulesPlugin = function (ref) {
  var Validator$$1 = ref.Validator;

  Object.keys(Rules).forEach(function (rule) {
    Validator$$1.extend(rule, Rules[rule]);
  });
};

use(rulesPlugin);

var index_esm = {
  install: install,
  use: use,
  mapFields: mapFields,
  Validator: Validator,
  ErrorBag: ErrorBag,
  version: version
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(401)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(366),
  /* template */
  __webpack_require__(663),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(396)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(367),
  /* template */
  __webpack_require__(656),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-05b7c590",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(398)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(368),
  /* template */
  __webpack_require__(659),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-184f4866",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(404)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(369),
  /* template */
  __webpack_require__(666),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(403)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(370),
  /* template */
  __webpack_require__(665),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-55d342f8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(408)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(371),
  /* template */
  __webpack_require__(672),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(410)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(372),
  /* template */
  __webpack_require__(674),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a45b967e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(399)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(373),
  /* template */
  __webpack_require__(661),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-42b975ee",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(395)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(374),
  /* template */
  __webpack_require__(654),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-00cdeb6c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "columns is-mobile"
  }, [_c('div', {
    staticClass: "column is-narrow"
  }, [_c('a', {
    staticClass: "button is-info",
    on: {
      "click": function($event) {
        _vm.showModal = true, _vm.mode = 0
      }
    }
  }, [_vm._v("Add Portfolio")])]), _c('div', {
    staticClass: "column is-narrow"
  }, [_c('div', {
    staticClass: "field has-addons"
  }, [_vm._m(0), _c('div', {
    staticClass: "control is-expanded"
  }, [_c('div', {
    staticClass: "select is-fullwidth"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.categorySelected),
      expression: "categorySelected"
    }],
    on: {
      "input": function($event) {
        _vm.loadPortfolio(0)
      },
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.categorySelected = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    domProps: {
      "value": ''
    }
  }, [_vm._v("All")]), _vm._l((_vm.categories), function(category) {
    return _c('option', {
      domProps: {
        "value": category._id
      }
    }, [_vm._v(_vm._s(category.translations[0].name))])
  })], 2)])])])]), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "field has-addons"
  }, [_c('div', {
    staticClass: "control is-expanded has-icons-right"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Find an portfolio"
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }
    }
  }), (_vm.isLoading) ? _c('span', {
    staticClass: "icon is-small is-right"
  }, [_c('i', {
    staticClass: "fa fa-circle-o-notch fa-spin"
  })]) : _vm._e()]), _vm._m(1)])])]), (_vm.portfolios.length === 0) ? _c('p', {
    staticClass: "has-text-centered"
  }, [_vm._v("No portfolio found ")]) : _vm._e(), _c('div', {
    staticClass: "columns portfolios is-multiline"
  }, _vm._l((_vm.portfolios), function(portfolio, index) {
    return _c('div', {
      staticClass: "column is-4"
    }, [_c('div', {
      staticClass: "card j-grow",
      on: {
        "click": function($event) {
          _vm.showModal = true, _vm.mode = 1, _vm.portfolioSelected = index
        }
      }
    }, [(portfolio.image.length > 0) ? _c('div', {
      staticClass: "card-image"
    }, [_c('figure', {
      staticClass: "image is-4by3"
    }, [_c('img', {
      attrs: {
        "src": portfolio.image[0],
        "alt": "portfolio"
      }
    })])]) : _vm._e(), _c('div', {
      staticClass: "card-content"
    }, [_c('div', {
      staticClass: "media"
    }, [_c('div', {
      staticClass: "media-content"
    }, [_c('p', {
      staticClass: "title is-4"
    }, [_vm._v(_vm._s(portfolio.translations[0].title))])])]), _c('div', {
      staticClass: "content"
    }, [_c('p', {
      staticClass: "detail"
    }, [_vm._v(_vm._s(portfolio.translations[0].detail))]), _c('div', {
      staticClass: "tags"
    }, [_c('span', {
      staticClass: "tag is-primary"
    }, [_vm._v(_vm._s(portfolio.category.translations[0].name) + " ")])])])])])])
  })), _c('nav', {
    staticClass: "pagination",
    attrs: {
      "role": "navigation",
      "aria-label": "pagination"
    }
  }, [_c('ul', {
    staticClass: "pagination-list"
  }, _vm._l((_vm.totalPage), function(index) {
    return _c('li', [_c('a', {
      staticClass: "pagination-link",
      class: _vm.isCurrentPage(index),
      on: {
        "click": function($event) {
          _vm.changePage(index)
        }
      }
    }, [_vm._v(_vm._s(index))])])
  }))]), (_vm.showModal) ? _c('ModalPortfolio', {
    attrs: {
      "mode": _vm.mode,
      "initialPortfolio": _vm.portfolios[_vm.portfolioSelected],
      "categories": _vm.categories
    },
    on: {
      "close": function($event) {
        _vm.showModal = false
      },
      "reload-list": function($event) {
        _vm.loadPortfolio(0)
      }
    }
  }) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button is-static is-text-grey-dark"
  }, [_vm._v("Category")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button is-info"
  }, [_vm._v("Search")])])
}]}

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "autocomplete"
  }, [_c('div', {
    staticClass: "field has-addons"
  }, [_c('div', {
    staticClass: "control is-expanded has-icons-right"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Search..."
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }, _vm.onTyping]
    }
  }), _vm._m(0)]), _c('div', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.$emit('remove')
      }
    }
  }, [_vm._v("Remove")])])]), (_vm.isShow) ? _c('ul', {
    staticClass: "menu-list"
  }, _vm._l((_vm.options), function(option) {
    return _c('li', {
      staticClass: "is-hoverable"
    }, [_c('a', {
      on: {
        "click": function($event) {
          _vm.onSelected(option)
        }
      }
    }, [_vm._v(_vm._s(option.title))])])
  })) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-small is-right"
  }, [_c('i', {
    staticClass: "fa fa-angle-down"
  })])
}]}

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "file has-name is-fullwidth is-right"
  }, [_c('label', {
    staticClass: "file-label"
  }, [_c('input', {
    staticClass: "file-input",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.fileSelected
    }
  }), _vm._m(0), _c('span', {
    staticClass: "file-name"
  }, [_vm._v(_vm._s(_vm.filename))])])])]), (_vm.filename || _vm.isRemove) ? _c('div', {
    staticClass: "column is-narrow"
  }, [_c('a', {
    staticClass: "button is-danger is-outlined",
    on: {
      "click": _vm.removeFile
    }
  }, [_vm._m(1), _c('span', [_vm._v("Remove")])])]) : _vm._e()]), (_vm.image) ? _c('img', {
    attrs: {
      "src": _vm.image
    }
  }) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "file-cta"
  }, [_c('span', {
    staticClass: "file-icon"
  }, [_c('i', {
    staticClass: "fa fa-upload"
  })]), _c('span', {
    staticClass: "file-label"
  }, [_vm._v("Choose a file…")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-times"
  })])
}]}

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "modal is-active"
  }, [_c('div', {
    staticClass: "modal-background"
  }), _c('div', {
    staticClass: "modal-card"
  }, [_c('header', {
    staticClass: "modal-card-head"
  }, [_c('p', {
    staticClass: "modal-card-title"
  }, [_vm._v(_vm._s(_vm.title) + " Portfolio")])]), _c('section', {
    staticClass: "modal-card-body"
  }, [_c('tab-choose-language', {
    attrs: {
      "indexLanguage": _vm.indexLanguage
    },
    on: {
      "select-language": _vm.selectLanguage
    }
  }), _vm._l((_vm.languages), function(lang, index) {
    return _c('FieldPortfolio', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.indexLanguage == index),
        expression: "indexLanguage == index"
      }],
      key: _vm.getUUID(),
      attrs: {
        "initialPortfolio": _vm.translations[index],
        "index": index
      },
      on: {
        "update-value": _vm.updateValue
      }
    })
  }), _c('div', {
    staticClass: "underline"
  }), _c('form', {
    attrs: {
      "data-vv-scope": "portfolio-scope"
    }
  }, [_c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Category"), _c('div', {
    staticClass: "control is-expaned"
  }, [_c('div', {
    staticClass: "select is-fullwidth",
    class: {
      'is-danger': _vm.errors.has('portfolio-scope.category')
    }
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.categorySelected),
      expression: "categorySelected"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: ('required'),
      expression: "'required'"
    }],
    attrs: {
      "name": "category"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.categorySelected = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    domProps: {
      "value": ''
    }
  }, [_vm._v("Select category")]), _vm._l((_vm.categories), function(category) {
    return _c('option', {
      domProps: {
        "value": category._id
      }
    }, [_vm._v(_vm._s(category.translations[0].name))])
  })], 2), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('portfolio-scope.category')),
      expression: "errors.has('portfolio-scope.category')"
    }],
    staticClass: "help is-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('portfolio-scope.category')))])])])])]), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Image")]), _vm._l((_vm.images), function(image, index) {
    return _c('input-file', {
      key: _vm.getUUID(),
      attrs: {
        "intialIsRemove": true
      },
      on: {
        "remove": function($event) {
          _vm.removeImage(index)
        }
      },
      model: {
        value: (_vm.images[index]),
        callback: function($$v) {
          var $$exp = _vm.images,
            $$idx = index;
          if (!Array.isArray($$exp)) {
            _vm.images[index] = $$v
          } else {
            $$exp.splice($$idx, 1, $$v)
          }
        },
        expression: "images[index]"
      }
    })
  }), _c('div', {
    staticClass: "has-text-centered mar-bot-15"
  }, [_c('a', {
    staticClass: "button",
    on: {
      "click": _vm.addImage
    }
  }, [_vm._m(0), _c('span', [_vm._v("Add")])])])], 2)]), (_vm.mode === 1) ? _c('div', {
    staticClass: "field fieldDelete"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ('required|regex:delete'),
      expression: "'required|regex:delete'"
    }],
    staticClass: "input",
    class: {
      'is-danger': _vm.errors.has('delete')
    },
    attrs: {
      "type": "text",
      "name": "delete",
      "placeholder": "Please fill delete before deleting"
    }
  }), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('delete')),
      expression: "errors.has('delete')"
    }],
    staticClass: "help is-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('delete')))])])]), _c('div', {
    staticClass: "column is-narrow"
  }, [_c('a', {
    staticClass: "button is-danger is-outlined",
    on: {
      "click": _vm.deletePortfolio
    }
  }, [_c('span', [_vm._v("Delete")])])])])]) : _vm._e()], 2), _c('footer', {
    staticClass: "modal-card-foot"
  }, [_c('button', {
    staticClass: "button is-success",
    class: {
      'is-loading': _vm.isLoading
    },
    on: {
      "click": _vm.updatePortfolio
    }
  }, [_vm._v(_vm._s(_vm.title))]), _c('button', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.$emit('close')
      }
    }
  }, [_vm._v("Cancel")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })])
}]}

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('PageHeader'), _c('div', {
    staticClass: "content-main"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('keep-alive', [_c('router-view')], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tabs is-toggle is-fullwidth"
  }, [_c('ul', _vm._l((_vm.languages), function(lang, index) {
    return _c('li', {
      class: {
        'is-selected': _vm.isSelected(index)
      },
      on: {
        "click": function($event) {
          _vm.$emit('select-language', index)
        }
      }
    }, [_c('a', [_c('span', [_vm._v(_vm._s(lang.name) + " ")])])])
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _c('section', {
    staticClass: "hero is-info"
  }, [_vm._m(1), _c('div', {
    staticClass: "hero-foot"
  }, [_c('nav', {
    staticClass: "tabs"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('ul', [_c('router-link', {
    attrs: {
      "tag": "li",
      "to": "/"
    }
  }, [_c('a', [_vm._v("Home")])]), _c('router-link', {
    attrs: {
      "tag": "li",
      "to": "/Portfolio"
    }
  }, [_c('a', [_vm._v("Portfolio")])])], 1)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar nav-top is-blue"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "navbar-end"
  }, [_c('a', {
    staticClass: "navbar-item is-hoverable is-text-white",
    attrs: {
      "href": "/admin/logout"
    }
  }, [_vm._v("Logout")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("Settings")]), _c('div', {
    staticClass: "subtitle"
  }, [_vm._v("Everything you need Utaisupply website to be")])])])
}]}

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero is-medium"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container has-text-centered"
  }, [_c('h1', {
    staticClass: "title is-text-grey is-4"
  }, [_vm._v("Hello! Let’s change your site.")]), _c('h2', {
    staticClass: "subtitle is-text-grey"
  })])])])
}]}

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fieldProduct"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Title")]), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.title),
      expression: "title"
    }],
    staticClass: "input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.title)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.title = $event.target.value
      }, _vm.update]
    }
  })])]), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Detail")]), _c('div', {
    staticClass: "control"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.detail),
      expression: "detail"
    }],
    staticClass: "textarea",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.detail)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.detail = $event.target.value
      }, _vm.update]
    }
  })])])])
},staticRenderFns: []}

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(314);


/***/ })

},[692]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1heGlvcy9kaXN0L3Z1ZS1heGlvcy5taW4uanM/N2ZkZiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9hZG1pbi9tYWluLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vY29yZS9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9hZG1pbi9jb3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vY29yZS9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQXBwLnZ1ZT84ZjliIiwid2VicGFjazovLy9BdXRvQ29tcGxldGUudnVlIiwid2VicGFjazovLy9JbnB1dEZpbGUudnVlIiwid2VicGFjazovLy9oZWFkZXIudnVlP2Y1OGUiLCJ3ZWJwYWNrOi8vL1RhYkNob29zZUxhbmd1YWdlLnZ1ZSIsIndlYnBhY2s6Ly8vRmllbGRQb3J0Zm9saW8udnVlIiwid2VicGFjazovLy9Nb2RhbFBvcnRmb2xpby52dWU/MjdhOSIsIndlYnBhY2s6Ly8vaW5kZXgudnVlPzcxOTAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9hZG1pbi9tb2R1bGVzL3BvcnRmb2xpby9pbmRleC52dWU/YzBlZSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9BdXRvQ29tcGxldGUudnVlPzUzYjAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9hZG1pbi9jb3JlL2NvbXBvbmVudHMvSW5wdXRGaWxlLnZ1ZT9lOTcyIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9Nb2RhbFBvcnRmb2xpby52dWU/ODQwYSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvQXBwLnZ1ZT8zMzNjIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vY29yZS9jb21wb25lbnRzL1RhYkNob29zZUxhbmd1YWdlLnZ1ZT8xOGQwIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vY29yZS9jb21wb25lbnRzL1BhZ2VIZWFkZXIvaGVhZGVyLnZ1ZT8zOTg1Iiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9ob21lL2luZGV4LnZ1ZT9jYzIyIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9GaWVsZFBvcnRmb2xpby52dWU/MzBmMSIsIndlYnBhY2s6Ly8vLi9+L3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL34vdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi91dWlkL3YxLmpzIiwid2VicGFjazovLy8uL34vdmVlLXZhbGlkYXRlL2Rpc3QvdmVlLXZhbGlkYXRlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9BdXRvQ29tcGxldGUudnVlIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vY29yZS9jb21wb25lbnRzL0lucHV0RmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9hZG1pbi9jb3JlL2NvbXBvbmVudHMvUGFnZUhlYWRlci9oZWFkZXIudnVlIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vY29yZS9jb21wb25lbnRzL1RhYkNob29zZUxhbmd1YWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL21vZHVsZXMvaG9tZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9hZG1pbi9tb2R1bGVzL3BvcnRmb2xpby9jb21wb25lbnRzL0ZpZWxkUG9ydGZvbGlvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL21vZHVsZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvTW9kYWxQb3J0Zm9saW8udnVlIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9wb3J0Zm9saW8vaW5kZXgudnVlIiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9wb3J0Zm9saW8vaW5kZXgudnVlP2VmNWMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9hZG1pbi9jb3JlL2NvbXBvbmVudHMvQXV0b0NvbXBsZXRlLnZ1ZT82OGE0Iiwid2VicGFjazovLy8uL2NsaWVudC9hcHAvYWRtaW4vY29yZS9jb21wb25lbnRzL0lucHV0RmlsZS52dWU/MmQ2MSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL21vZHVsZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvTW9kYWxQb3J0Zm9saW8udnVlPzhlMTQiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC9hZG1pbi9jb3JlL0FwcC52dWU/NmQ4MSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9UYWJDaG9vc2VMYW5ndWFnZS52dWU/ZTJkZSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9QYWdlSGVhZGVyL2hlYWRlci52dWU/ZDEwNiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL21vZHVsZXMvaG9tZS9pbmRleC52dWU/OWUyYSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwL2FkbWluL21vZHVsZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvRmllbGRQb3J0Zm9saW8udnVlP2Q3NWEiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwiYmFzZVVSTCIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJBcHAiLCJyb3V0ZXIiLCJzdG9yZSIsInJlbmRlciIsImgiLCIkbW91bnQiLCJyb3V0ZXMiLCJwYXRoIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsImdsb2JhbCIsInN0YXRlIiwibGFuZ3VhZ2VzIiwibmFtZSIsImFiYnIiXSwibWFwcGluZ3MiOiI7Ozs7OztnRUFBYSxvRkFBb0YsZ0JBQWdCLGFBQWEscUdBQXFHLFlBQVksZ0JBQWdCLGlCQUFpQiw0RUFBNEUsK0NBQStDLE9BQU8sZUFBZSxVQUFVLFFBQVEsZUFBZSxXQUFXLEdBQUcsdUpBQWlKLFNBQVM7QUFBQSx1SkFBb0QsRzs7Ozs7OztBQ0E5cEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQUFBLENBQUlDLEdBQUosQ0FBUSxpREFBUixFQUFrQiw2Q0FBbEI7QUFDQSw2Q0FBQUMsQ0FBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxrQkFBOUM7QUFDQSw2Q0FBQUgsQ0FBTUMs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Q0FBLHlDOzs7Ozs7O0FDQUEseUM7Ozs7Ozs7QUNBQSx5Qzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLEVBQUU7QUFDZDtBQUNBLGNBQWMsRUFBRTtBQUNoQixjQUFjLEVBQUU7QUFDaEIsY0FBYyxFQUFFO0FBQ2hCO0FBQ0EsY0FBYyxFQUFFO0FBQ2hCO0FBQ0EsY0FBYyxFQUFFO0FBQ2hCLGNBQWMsRUFBRTtBQUNoQixjQUFjLEVBQUU7QUFDaEI7O0FBRUE7QUFDQSxhQUFhLEVBQUU7QUFDZixlQUFlLEVBQUU7QUFDakIsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFO0FBQzNCLGdCQUFnQixFQUFFO0FBQ2xCLGlCQUFpQixFQUFFLE9BQU8sRUFBRTs7QUFFNUIsWUFBWSxFQUFFO0FBQ2QsY0FBYyxFQUFFLE9BQU8sRUFBRTtBQUN6QixnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFOztBQUVwQztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsRUFBRTtBQUM1Qiw0QkFBNEIsRUFBRSxPQUFPLEVBQUU7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxRQUFRLG9EQUFvRDtBQUN2RSxXQUFXLE1BQU07QUFDakIsYUFBYSxLQUFLO0FBQ2xCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0JBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxP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QUFHOztBQUVIO0FBQ0E7QUFDQSx5RUFBeUUsa0JBQWtCO0FBQzNGLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsOERBQThELGVBQWU7QUFDN0UsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsOERBQThELGNBQWM7QUFDNUUsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsOERBQThELGFBQWE7QUFDM0UsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxvRUFBb0Usa0JBQWtCO0FBQ3RGLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSx1RUFBdUUsZ0JBQWdCO0FBQ3ZGLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGtFQUFrRSxrQkFBa0I7QUFDcEYsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esa0VBQWtFLGtCQUFrQjtBQUNwRixHQUFHOztBQUVIO0FBQ0E7QUFDQSxrRUFBa0UsYUFBYTtBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUSxvREFBb0Q7QUFDdkUsV0FBVyxNQUFNLGlFQUFpRTtBQUNsRixXQUFXLE9BQU8sa0VBQWtFO0FBQ3BGLGFBQWEsT0FBTztBQUNwQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUSxvREFBb0Q7QUFDdkUsV0FBVyxNQUFNLGlFQUFpRTtBQUNsRixhQUFhLEtBQUs7QUFDbEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLFFBQVEsb0RBQW9EO0FBQ3ZFLFdBQVcsTUFBTSxpRUFBaUU7QUFDbEYsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLFFBQVEsb0RBQW9EO0FBQ3ZFLFdBQVcsTUFBTSxpRUFBaUU7QUFDbEYsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLFFBQVEsb0RBQW9EO0FBQ3ZFLFdBQVcsTUFBTSxpRUFBaUU7QUFDbEYsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSTtBQUNwQjtBQUNBO0FBQ0EsbUJBQW1CLEVBQUUsTUFBTSxFQUFFO0FBQzdCLG9CQUFvQixFQUFFLEtBQUssRUFBRTtBQUM3QjtBQUNBLG1CQUFtQixFQUFFO0FBQ3JCLHFCQUFxQixFQUFFO0FBQ3ZCLG9CQUFvQixFQUFFO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUUsS0FBSztBQUNMO0FBQ0EsOERBQThELGdCQUFnQjtBQUM5RTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGNBQWM7QUFDeEUsS0FBSztBQUNMO0FBQ0EsOERBQThELGNBQWM7QUFDNUU7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFLEtBQUs7QUFDTDtBQUNBLHNEQUFzRCxjQUFjO0FBQ3BFO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxhQUFhO0FBQy9ELDZDQUE2QyxjQUFjO0FBQzNELEtBQUs7QUFDTDtBQUNBLGlFQUFpRSxhQUFhOztBQUU5RTtBQUNBLCtEQUErRCxjQUFjO0FBQzdFOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGdCQUFnQjtBQUMxRSxLQUFLO0FBQ0w7QUFDQSw4REFBOEQsZ0JBQWdCO0FBQzlFO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxrQkFBa0I7QUFDNUUsS0FBSztBQUNMO0FBQ0EsOERBQThELGtCQUFrQjtBQUNoRjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZUFBZTtBQUNuRSxLQUFLO0FBQ0w7QUFDQSx3REFBd0QsZUFBZTtBQUN2RTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRSwrQ0FBK0MsZUFBZTtBQUM5RCxLQUFLO0FBQ0w7QUFDQSxtRUFBbUUsY0FBYzs7QUFFakY7QUFDQSxpRUFBaUUsZUFBZTtBQUNoRjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxhQUFhO0FBQ2pFLCtDQUErQyxjQUFjO0FBQzdELCtDQUErQyxlQUFlO0FBQzlELEtBQUs7QUFDTDtBQUNBLG1FQUFtRSxhQUFhOztBQUVoRjtBQUNBLGlFQUFpRSxjQUFjOztBQUUvRTtBQUNBLG1FQUFtRSxlQUFlO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELG1CQUFtQjtBQUM3RSxLQUFLO0FBQ0w7QUFDQSw4REFBOEQsbUJBQW1CO0FBQ2pGO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxrQkFBa0I7QUFDNUUsS0FBSztBQUNMO0FBQ0EsOERBQThELGtCQUFrQjtBQUNoRjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsY0FBYztBQUNwRSxLQUFLO0FBQ0w7QUFDQSwwREFBMEQsY0FBYztBQUN4RTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsYUFBYTtBQUNuRSxpREFBaUQsY0FBYztBQUMvRCxLQUFLO0FBQ0w7QUFDQSxxRUFBcUUsYUFBYTs7QUFFbEY7QUFDQSxtRUFBbUUsY0FBYztBQUNqRjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFOzs7Ozs7O0FDck1ELGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxxQjs7Ozs7OztBQ1JELGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyxxQjs7Ozs7OztBQ2ZELGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsRTs7Ozs7OztBQzNDRCxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0EsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLEU7Ozs7Ozs7QUNkRCxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxxQiIsImZpbGUiOiJhZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfdHlwZW9mPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihvKXtyZXR1cm4gdHlwZW9mIG99OmZ1bmN0aW9uKG8pe3JldHVybiBvJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJm8uY29uc3RydWN0b3I9PT1TeW1ib2wmJm8hPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG99OyFmdW5jdGlvbigpe2Z1bmN0aW9uIG8oZSx0KXtpZighby5pbnN0YWxsZWQpe2lmKG8uaW5zdGFsbGVkPSEwLCF0KXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJZb3UgaGF2ZSB0byBpbnN0YWxsIGF4aW9zXCIpO2UuYXhpb3M9dCxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSx7YXhpb3M6e2dldDpmdW5jdGlvbigpe3JldHVybiB0fX0sJGh0dHA6e2dldDpmdW5jdGlvbigpe3JldHVybiB0fX19KX19XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBleHBvcnRzP1widW5kZWZpbmVkXCI6X3R5cGVvZihleHBvcnRzKSk/bW9kdWxlLmV4cG9ydHM9bzpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG99KTp3aW5kb3cuVnVlJiZ3aW5kb3cuYXhpb3MmJlZ1ZS51c2Uobyx3aW5kb3cuYXhpb3MpfSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYXhpb3MvZGlzdC92dWUtYXhpb3MubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gdGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvcmUvQXBwXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL2NvcmUvcm91dGVyLmpzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vY29yZS9zdG9yZS5qc1wiO1xuXG4vLyBTZXR0aW5nIGF4aW9zXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgVnVlQXhpb3MgZnJvbSBcInZ1ZS1heGlvc1wiO1xuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0W1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCIvYXBpL1wiO1xuXG4vLyBHbG9iYWwgQ29tcG9uZW50XG5pbXBvcnQgVGFiQ2hvb3NlTGFuZ3VhZ2UgZnJvbSBcIi4vY29yZS9jb21wb25lbnRzL1RhYkNob29zZUxhbmd1YWdlLnZ1ZVwiO1xuaW1wb3J0IElucHV0RmlsZSBmcm9tIFwiLi9jb3JlL2NvbXBvbmVudHMvSW5wdXRGaWxlLnZ1ZVwiO1xuXG5WdWUuY29tcG9uZW50KFwidGFiLWNob29zZS1sYW5ndWFnZVwiLCBUYWJDaG9vc2VMYW5ndWFnZSk7XG5WdWUuY29tcG9uZW50KFwiaW5wdXQtZmlsZVwiLCBJbnB1dEZpbGUpO1xuXG5pbXBvcnQgVmVlVmFsaWRhdGUgZnJvbSAndmVlLXZhbGlkYXRlJztcblZ1ZS51c2UoVmVlVmFsaWRhdGUpO1xuXG5uZXcgVnVlKHtcbiAgY29tcG9uZW50czoge1xuICAgIEFwcFxuICB9LFxuICByb3V0ZXIsXG4gIHN0b3JlLFxuICByZW5kZXI6IGggPT4gaChcImFwcFwiKVxufSkuJG1vdW50KFwiI2FwcFwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hcHAvYWRtaW4vbWFpbi5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuLi9tb2R1bGVzL2hvbWVcIjtcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4uL21vZHVsZXMvcG9ydGZvbGlvXCI7XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZVJvdXRlcih7XG5cdHJvdXRlczogW1xuXHRcdHsgcGF0aDogXCIvXCIsIGNvbXBvbmVudDogSG9tZSB9LFxuXHRcdHsgcGF0aDogXCIvcG9ydGZvbGlvXCIsIGNvbXBvbmVudDogUG9ydGZvbGlvICB9XG5cdF1cbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvcm91dGVyLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgVnVleCBmcm9tIFwidnVleFwiO1xuXG5pbXBvcnQgZ2xvYmFsIGZyb20gXCIuL3N0b3JlL2luZGV4LmpzXCI7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczoge1xuICAgIGdsb2JhbFxuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hcHAvYWRtaW4vY29yZS9zdG9yZS5qcyIsImNvbnN0IHN0YXRlID0ge1xuICBsYW5ndWFnZXM6IFtcbiAgICB7IG5hbWU6IFwiVGhhaVwiLCBhYmJyOiBcInRoXCIgfSxcbiAgICB7IG5hbWU6IFwiRW5nbGlzaFwiLCBhYmJyOiBcImVuXCIgfVxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FwcC9hZG1pbi9jb3JlL3N0b3JlL2luZGV4LmpzIiwiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbiAgICBkaXZcbiAgICAgICAgUGFnZUhlYWRlclxuICAgICAgICAuY29udGVudC1tYWluXG4gICAgICAgICAgICB0cmFuc2l0aW9uKG5hbWU9XCJmYWRlXCIpXG4gICAgICAgICAgICAgICAga2VlcC1hbGl2ZVxuICAgICAgICAgICAgICAgICAgICByb3V0ZXItdmlld1xuICAgICAgICAgICAgXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuICAgIGltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvUGFnZUhlYWRlci9oZWFkZXJcIlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgUGFnZUhlYWRlcixcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gICAgLmZhZGUtZW50ZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICBcbiAgICAuZmFkZS1lbnRlci1hY3RpdmUge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcbiAgICB9XG4gICAgLmNvbnRlbnQtbWFpbntcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cbjwvc3R5bGU+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBcHAudnVlP2U0MTRmODJlIiwiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbi5hdXRvY29tcGxldGVcbiAgICAuZmllbGQuaGFzLWFkZG9uc1xuICAgICAgICAuY29udHJvbC5pcy1leHBhbmRlZC5oYXMtaWNvbnMtcmlnaHRcbiAgICAgICAgICAgIGlucHV0LmlucHV0KHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB2LW1vZGVsPVwia2V5d29yZFwiIEBpbnB1dD1cIm9uVHlwaW5nXCIpXG4gICAgICAgICAgICBzcGFuLmljb24uaXMtc21hbGwuaXMtcmlnaHRcbiAgICAgICAgICAgICAgICBpLmZhLmZhLWFuZ2xlLWRvd25cbiAgICAgICAgLmNvbnRyb2xcbiAgICAgICAgICAgIGEuYnV0dG9uKEBjbGljaz1cIiRlbWl0KCdyZW1vdmUnKVwiKSBSZW1vdmVcbiAgICAgICBcbiAgICB1bC5tZW51LWxpc3Qodi1pZj1cImlzU2hvd1wiKVxuICAgICAgICBsaS5pcy1ob3ZlcmFibGUodi1mb3I9XCJvcHRpb24gaW4gb3B0aW9uc1wiKSAgXG4gICAgICAgICAgICBhKEBjbGljaz1cIm9uU2VsZWN0ZWQob3B0aW9uKVwiKSB7e29wdGlvbi50aXRsZX19XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgX2lkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGtleXdvcmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgaXNTaG93OiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25TZWxlY3RlZDogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXl3b3JkID0gb3B0aW9uLnRpdGxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gb3B0aW9uLl9pZDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBpbnZlbnRvclNlbGVjdGVkID0ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogb3B0aW9uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBfaWQ6IHRoaXMuX2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgaW52ZW50b3JTZWxlY3RlZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UeXBpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdyZWxvYWQnLCB0aGlzLmtleXdvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG4gICAgICAgICAgICB0aGlzLmtleXdvcmQgPSB0aGlzLnZhbHVlLnRpdGxlO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiAgICAuYXV0b2NvbXBsZXRlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEF1dG9Db21wbGV0ZS52dWU/MDVjNDQxYjIiLCI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuLmZpZWxkXG4gICAgLmNvbHVtbnNcbiAgICAgICAgLmNvbHVtblxuICAgICAgICAgICAgLmZpbGUuaGFzLW5hbWUuaXMtZnVsbHdpZHRoLmlzLXJpZ2h0XG4gICAgICAgICAgICAgICAgbGFiZWwuZmlsZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5maWxlLWlucHV0KHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVTZWxlY3RlZFwiKVxuICAgICAgICAgICAgICAgICAgICBzcGFuLmZpbGUtY3RhXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmZpbGUtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZmEuZmEtdXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmZpbGUtbGFiZWwgQ2hvb3NlIGEgZmlsZeKAplxuICAgICAgICAgICAgICAgICAgICBzcGFuLmZpbGUtbmFtZSB7e2ZpbGVuYW1lfX1cbiAgICAgICAgLmNvbHVtbi5pcy1uYXJyb3codi1pZj1cImZpbGVuYW1lIHx8IGlzUmVtb3ZlXCIpXG4gICAgICAgICAgICBhLmJ1dHRvbi5pcy1kYW5nZXIuaXMtb3V0bGluZWQoQGNsaWNrPVwicmVtb3ZlRmlsZVwiKVxuICAgICAgICAgICAgICAgIHNwYW4uaWNvbi5pcy1zbWFsbFxuICAgICAgICAgICAgICAgICAgICBpLmZhLmZhLXRpbWVzXG4gICAgICAgICAgICAgICAgc3BhbiBSZW1vdmVcbiAgICBpbWcoOnNyYz1cImltYWdlXCIgdi1pZj1cImltYWdlXCIpXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGludGlhbElzUmVtb3ZlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlbW92ZTogZmFsc2UsXG4gICAgICAgICAgICBpbWFnZTogXCJcIixcbiAgICAgICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgICAgIH07XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHZhbHVlLnVybDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmZpbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHZhbHVlLmZpbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVuYW1lID0gdmFsdWUuZmlsZS5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmlsZVNlbGVjdGVkKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXMgfHwgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbWFnZShmaWxlc1swXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUltYWdlKGZpbGVJbWFnZSkge1xuICAgICAgICAgICAgbGV0IGltZyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgIGZpbGU6IGZpbGVJbWFnZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGltZyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUZpbGUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3JlbW92ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsZXQgaW1nID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgaW1nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmludGlhbElzUmVtb3ZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZW1vdmUgPSB0aGlzLmludGlhbElzUmVtb3ZlO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBJbnB1dEZpbGUudnVlP2U1MTA4M2RjIiwiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbmRpdlxuICAgIG5hdi5uYXZiYXIubmF2LXRvcC5pcy1ibHVlXG4gICAgICAgIC5jb250YWluZXJcbiAgICAgICAgICAgIC5uYXZiYXItZW5kXG4gICAgICAgICAgICAgICAgYS5uYXZiYXItaXRlbS5pcy1ob3ZlcmFibGUuaXMtdGV4dC13aGl0ZShocmVmPVwiL2FkbWluL2xvZ291dFwiKSBMb2dvdXRcbiAgICBzZWN0aW9uLmhlcm8uaXMtaW5mbyBcbiAgICAgICAgLmhlcm8tYm9keVxuICAgICAgICAgICAgLmNvbnRhaW5lclxuICAgICAgICAgICAgICAgIC50aXRsZSBTZXR0aW5nc1xuICAgICAgICAgICAgICAgIC5zdWJ0aXRsZSBFdmVyeXRoaW5nIHlvdSBuZWVkIFV0YWlzdXBwbHkgd2Vic2l0ZSB0byBiZVxuICAgICAgICAuaGVyby1mb290XG4gICAgICAgICAgICBuYXYudGFic1xuICAgICAgICAgICAgICAgIC5jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgdWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci1saW5rKHRhZz1cImxpXCIgLCB0bz1cIi9cIikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSBIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXItbGluayh0YWc9XCJsaVwiICwgdG89XCIvUG9ydGZvbGlvXCIpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgUG9ydGZvbGlvXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgXG48L3NlY3Rpb24+ICBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJwYWdlLWhlYWRlclwiLFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkgeyB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgXCJuYXZiYXItYnVyZ2VyXCIgZWxlbWVudHNcbiAgICAgICAgICAgIHZhciAkbmF2YmFyQnVyZ2VycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2YmFyLWJ1cmdlclwiKSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG5hdiBidXJnZXJzXG4gICAgICAgICAgICBpZiAoJG5hdmJhckJ1cmdlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIGNsaWNrIGV2ZW50IG9uIGVhY2ggb2YgdGhlbVxuICAgICAgICAgICAgICAgICRuYXZiYXJCdXJnZXJzLmZvckVhY2goZnVuY3Rpb24oJGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRhcmdldCBmcm9tIHRoZSBcImRhdGEtdGFyZ2V0XCIgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJGVsLmRhdGFzZXQudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGNsYXNzIG9uIGJvdGggdGhlIFwibmF2YmFyLWJ1cmdlclwiIGFuZCB0aGUgXCJuYXZiYXItbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAkZWwuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuXG4gICAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbm5hdiB7XG4gICAgLm5hdmJhci1pdGVtOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XG4gICAgICAgIC5mbGFnLXRpdGxlIHtcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDhweCkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBoZWFkZXIudnVlPzdiZDYyNjA2IiwiPHRlbXBsYXRlIGxhbmc9XCJwdWdcIj5cbi50YWJzLmlzLXRvZ2dsZS5pcy1mdWxsd2lkdGhcbiAgICB1bFxuICAgICAgICBsaSh2LWZvcj1cIihsYW5nLGluZGV4KSBpbiBsYW5ndWFnZXNcIiB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLXNlbGVjdGVkJyA6IGlzU2VsZWN0ZWQoaW5kZXgpfVwiIEBjbGljaz1cIiRlbWl0KCdzZWxlY3QtbGFuZ3VhZ2UnLCBpbmRleClcIilcbiAgICAgICAgICAgIGFcbiAgICAgICAgICAgICAgICBzcGFuIHt7bGFuZy5uYW1lfX0gXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGluZGV4TGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFuZ3VhZ2VzOiB0aGlzLiRzdG9yZS5zdGF0ZS5nbG9iYWwubGFuZ3VhZ2VzXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT09IHRoaXMuaW5kZXhMYW5ndWFnZTtcbiAgICAgICAgfSxcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmlzLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIHotaW5kZXg6IDE7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRhYkNob29zZUxhbmd1YWdlLnZ1ZT8wMzk0Zjg1MiIsIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4uZmllbGRQcm9kdWN0XG4gICAgLmZpZWxkXG4gICAgICAgIGxhYmVsLmxhYmVsIFRpdGxlXG4gICAgICAgIC5jb250cm9sXG4gICAgICAgICAgICBpbnB1dC5pbnB1dCh2LW1vZGVsPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIEBpbnB1dD1cInVwZGF0ZVwiKVxuICAgIC5maWVsZFxuICAgICAgICBsYWJlbC5sYWJlbCBEZXRhaWxcbiAgICAgICAgLmNvbnRyb2xcbiAgICAgICAgICAgIHRleHRhcmVhLnRleHRhcmVhKHYtbW9kZWw9XCJkZXRhaWxcIiB0eXBlPVwidGV4dFwiIEBpbnB1dD1cInVwZGF0ZVwiKSAgIFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpbml0aWFsUG9ydGZvbGlvOntcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmRleDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuaW5pdGlhbFBvcnRmb2xpby50aXRsZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMuaW5pdGlhbFBvcnRmb2xpby5kZXRhaWwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uID0ge307XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25bJ2xhbmd1YWdlJ10gPSB0aGlzLmluaXRpYWxQb3J0Zm9saW8ubGFuZ3VhZ2U7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25bJ3RpdGxlJ10gPSB0aGlzLnRpdGxlO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uWydkZXRhaWwnXSA9IHRoaXMuZGV0YWlsO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZS12YWx1ZScsIHRoaXMuaW5kZXgsIHRyYW5zbGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICBcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAgIC5maWVsZFByb2R1Y3R7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBGaWVsZFBvcnRmb2xpby52dWU/MDcyYjEwZWEiLCI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuZGl2XG4gICAgLm1vZGFsLmlzLWFjdGl2ZVxuICAgICAgICAubW9kYWwtYmFja2dyb3VuZFxuICAgICAgICAubW9kYWwtY2FyZFxuICAgICAgICAgICAgaGVhZGVyLm1vZGFsLWNhcmQtaGVhZFxuICAgICAgICAgICAgICAgIHAubW9kYWwtY2FyZC10aXRsZSB7e3RpdGxlfX0gUG9ydGZvbGlvXG4gICAgICAgICAgICBzZWN0aW9uLm1vZGFsLWNhcmQtYm9keVxuICAgICAgICAgICAgICAgIHRhYi1jaG9vc2UtbGFuZ3VhZ2UoOmluZGV4TGFuZ3VhZ2U9XCJpbmRleExhbmd1YWdlXCIgQHNlbGVjdC1sYW5ndWFnZT1cInNlbGVjdExhbmd1YWdlXCIpXG4gICAgICAgICAgICAgICAgRmllbGRQb3J0Zm9saW8odi1mb3I9XCIobGFuZywgaW5kZXgpIGluIGxhbmd1YWdlc1wiIHYtYmluZDprZXk9XCJnZXRVVUlEKClcIiB2LWJpbmQ6aW5pdGlhbFBvcnRmb2xpbz1cInRyYW5zbGF0aW9uc1tpbmRleF1cIiB2LWJpbmQ6aW5kZXg9XCJpbmRleFwiIHYtc2hvdz1cImluZGV4TGFuZ3VhZ2UgPT0gaW5kZXhcIiB2LW9uOnVwZGF0ZS12YWx1ZT1cInVwZGF0ZVZhbHVlXCIpXG4gICAgICAgICAgICAgICAgLnVuZGVybGluZVxuICAgICAgICAgICAgICAgIGZvcm0oZGF0YS12di1zY29wZT1cInBvcnRmb2xpby1zY29wZVwiKVxuICAgICAgICAgICAgICAgICAgICAuZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmxhYmVsIENhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRyb2wuaXMtZXhwYW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LmlzLWZ1bGx3aWR0aCh2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWRhbmdlcic6IGVycm9ycy5oYXMoJ3BvcnRmb2xpby1zY29wZS5jYXRlZ29yeScpfVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0KG5hbWU9XCJjYXRlZ29yeVwiIHYtbW9kZWw9XCJjYXRlZ29yeVNlbGVjdGVkXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24odi1iaW5kOnZhbHVlPVwiJydcIikgU2VsZWN0IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uKHYtZm9yPSdjYXRlZ29yeSBpbiBjYXRlZ29yaWVzJyB2LWJpbmQ6dmFsdWU9XCJjYXRlZ29yeS5faWRcIikge3tjYXRlZ29yeS50cmFuc2xhdGlvbnNbMF0ubmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmhlbHAuaXMtZGFuZ2VyKHYtc2hvdz1cImVycm9ycy5oYXMoJ3BvcnRmb2xpby1zY29wZS5jYXRlZ29yeScpXCIpIHt7ZXJyb3JzLmZpcnN0KCdwb3J0Zm9saW8tc2NvcGUuY2F0ZWdvcnknKX19XG4gICAgICAgICAgICAgICAgICAgIC5maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwubGFiZWwgSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWZpbGUodi1mb3I9XCIoaW1hZ2UsaW5kZXgpIGluIGltYWdlc1wiIHYtYmluZDprZXk9XCJnZXRVVUlEKClcIiB2LW1vZGVsPVwiaW1hZ2VzW2luZGV4XVwiIHYtYmluZDppbnRpYWxJc1JlbW92ZT1cInRydWVcIiBAcmVtb3ZlPVwicmVtb3ZlSW1hZ2UoaW5kZXgpXCIgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhcy10ZXh0LWNlbnRlcmVkLm1hci1ib3QtMTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmJ1dHRvbihAY2xpY2s9XCJhZGRJbWFnZVwiKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmZhLmZhLXBsdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiBBZGRcbiAgICAgICAgICAgICAgICAuZmllbGQuZmllbGREZWxldGUodi1pZj1cIm1vZGUgPT09IDFcIilcbiAgICAgICAgICAgICAgICAgICAgLmNvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dCggdHlwZT1cInRleHRcIiB2LWJpbmQ6Y2xhc3M9XCJ7J2lzLWRhbmdlcic6IGVycm9ycy5oYXMoJ2RlbGV0ZScpfVwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWR8cmVnZXg6ZGVsZXRlJ1wiIG5hbWU9XCJkZWxldGVcIiBwbGFjZWhvbGRlcj1cIlBsZWFzZSBmaWxsIGRlbGV0ZSBiZWZvcmUgZGVsZXRpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5oZWxwLmlzLWRhbmdlcih2LXNob3c9XCJlcnJvcnMuaGFzKCdkZWxldGUnKVwiKSB7e2Vycm9ycy5maXJzdCgnZGVsZXRlJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbHVtbi5pcy1uYXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmJ1dHRvbi5pcy1kYW5nZXIuaXMtb3V0bGluZWQoQGNsaWNrPVwiZGVsZXRlUG9ydGZvbGlvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4gRGVsZXRlXG4gICAgICAgICAgICBmb290ZXIubW9kYWwtY2FyZC1mb290XG4gICAgICAgICAgICAgICAgYnV0dG9uLmJ1dHRvbi5pcy1zdWNjZXNzKEBjbGljaz1cInVwZGF0ZVBvcnRmb2xpb1wiIHYtYmluZDpjbGFzcz1cInsgJ2lzLWxvYWRpbmcnOiBpc0xvYWRpbmcgfVwiKSB7e3RpdGxlfX1cbiAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9uKEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCIpIENhbmNlbFxuICAgICAgICAgICAgXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHV1aWR2MSBmcm9tIFwidXVpZC92MVwiO1xuaW1wb3J0IEZpZWxkUG9ydGZvbGlvIGZyb20gXCIuL0ZpZWxkUG9ydGZvbGlvXCI7XG5pbXBvcnQgQXV0b0NvbXBsZXRlIGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbXBvbmVudHMvQXV0b0NvbXBsZXRlXCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXlcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRpYWxQb3J0Zm9saW86IHtcbiAgICAgICAgICAgIE9iamVjdFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4TGFuZ3VhZ2U6IDAsXG4gICAgICAgICAgICBsYW5ndWFnZXM6IHRoaXMuJHN0b3JlLnN0YXRlLmdsb2JhbC5sYW5ndWFnZXMsXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM6IFtdLFxuICAgICAgICAgICAgX2lkOiBcIlwiLFxuICAgICAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdGVkOiBcIlwiLFxuICAgICAgICAgICAgcmVtb3ZlUGljczogW11cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQXV0b0NvbXBsZXRlLFxuICAgICAgICBGaWVsZFBvcnRmb2xpb1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdGl0bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkZFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFZGl0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkTGFuZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvblt0aGlzLmluZGV4TGFuZ3VhZ2VdO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZVZhbHVlOiBmdW5jdGlvbihpbmRleCwgdHJhbnNsYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zW2luZGV4XSA9IHRyYW5zbGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RMYW5ndWFnZShpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5pbmRleExhbmd1YWdlID0gTnVtYmVyLnBhcnNlSW50KGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlUG9ydGZvbGlvKCkge1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCdwb3J0Zm9saW8tc2NvcGUnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcnRmb2xpb1RtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uczogSlNPTi5zdHJpbmdpZnkodGhpcy50cmFuc2xhdGlvbnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuY2F0ZWdvcnlTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJ3BvcnRmb2xpby8nLCBwb3J0Zm9saW9UbXApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHJlcy5kYXRhLmNvbnRlbnQuX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2VQb3J0Zm9saW8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wdXQoJ3BvcnRmb2xpby8nICsgdGhpcy5faWQsIHBvcnRmb2xpb1RtcCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW1hZ2VQb3J0Zm9saW8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUltYWdlUG9ydGZvbGlvKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgcGF0aCBvZiB0aGlzLnJlbW92ZVBpY3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJ3BvcnRmb2xpby8nICsgdGhpcy5faWQgKyAnL3JlbW92ZUltYWdlJywgeyBwYXRoOiBwYXRoIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbGVuSW1hZ2VzID0gdGhpcy5pbWFnZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGxldCBjb3VudFJvdW5kID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbWFnZSBvZiB0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2UudHlwZSA9PT0gMSAmJiBpbWFnZS5maWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UuZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJ3BvcnRmb2xpby8nICsgdGhpcy5faWQgKyAnL3VwbG9hZEltYWdlJywgZm9ybURhdGEpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRSb3VuZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudFJvdW5kID49IGxlbkltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRSb3VuZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50Um91bmQgPj0gbGVuSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaW5pc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlUG9ydGZvbGlvKCkge1xuICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlKCdkZWxldGUnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvcy5kZWxldGUoJ3BvcnRmb2xpby8nICsgdGhpcy5faWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGaWxsRGVsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRmlsZUltYWdlKGZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUltYWdlID0gZmlsZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRmluaXNoKCkge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3JlbG9hZC1saXN0Jyk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgIH0sXG4gICAgICAgIGFkZEltYWdlKCkge1xuICAgICAgICAgICAgbGV0IGltZyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgIGZpbGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKGltZyk7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVJbWFnZShpbmRleCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzW2luZGV4XS50eXBlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVQaWNzLnB1c2godGhpcy5pbWFnZXNbaW5kZXhdLnVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmltYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VVVJRCgpe1xuICAgICAgICAgICAgcmV0dXJuIHV1aWR2MSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uID0ge307XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25bJ2xhbmd1YWdlJ10gPSB0aGlzLmxhbmd1YWdlc1tpXS5hYmJyO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uWyd0aXRsZSddID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblsnZGV0YWlsJ10gPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zLnB1c2godHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaW1hZ2VVcmwgb2YgdGhpcy5pbml0aWFsUG9ydGZvbGlvLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGltZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMCxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBpbWFnZVVybCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkID0gdGhpcy5pbml0aWFsUG9ydGZvbGlvLl9pZDtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZCA9IHRoaXMuaW5pdGlhbFBvcnRmb2xpby5jYXRlZ29yeS5faWQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5pdGlhbFBvcnRmb2xpby50cmFuc2xhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRpb24gPSB7fTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblsnbGFuZ3VhZ2UnXSA9IHRoaXMubGFuZ3VhZ2VzW2ldLmFiYnI7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25bJ3RpdGxlJ10gPSB0aGlzLmluaXRpYWxQb3J0Zm9saW8udHJhbnNsYXRpb25zW2ldLnRpdGxlO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uWydkZXRhaWwnXSA9IHRoaXMuaW5pdGlhbFBvcnRmb2xpby50cmFuc2xhdGlvbnNbaV0uZGV0YWlsO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zLnB1c2godHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5tYXItYm90LTE1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBNb2RhbFBvcnRmb2xpby52dWU/NjljODBhYTgiLCI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICAgIC5jb250YWluZXJcbiAgICAgICAgLmNvbHVtbnMuaXMtbW9iaWxlXG4gICAgICAgICAgICAuY29sdW1uLmlzLW5hcnJvd1xuICAgICAgICAgICAgICAgIGEuYnV0dG9uLmlzLWluZm8oQGNsaWNrPVwic2hvd01vZGFsID0gdHJ1ZSwgbW9kZSA9IDBcIikgQWRkIFBvcnRmb2xpb1xuICAgICAgICAgICAgLmNvbHVtbi5pcy1uYXJyb3dcbiAgICAgICAgICAgICAgICAuZmllbGQuaGFzLWFkZG9uc1xuICAgICAgICAgICAgICAgICAgICAuY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5idXR0b24uaXMtc3RhdGljLmlzLXRleHQtZ3JleS1kYXJrIENhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgIC5jb250cm9sLmlzLWV4cGFuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LmlzLWZ1bGx3aWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdCh2LW1vZGVsPVwiY2F0ZWdvcnlTZWxlY3RlZFwiIEBpbnB1dD1cImxvYWRQb3J0Zm9saW8oMClcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uKHYtYmluZDp2YWx1ZT1cIicnXCIpIEFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24odi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCIgIHYtYmluZDp2YWx1ZT1cImNhdGVnb3J5Ll9pZFwiKSB7e2NhdGVnb3J5LnRyYW5zbGF0aW9uc1swXS5uYW1lfX1cbiAgICAgICAgICAgIC5jb2x1bW5cbiAgICAgICAgICAgICAgICAuZmllbGQuaGFzLWFkZG9uc1xuICAgICAgICAgICAgICAgICAgICAuY29udHJvbC5pcy1leHBhbmRlZC5oYXMtaWNvbnMtcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmlucHV0KHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGaW5kIGFuIHBvcnRmb2xpb1wiIHYtbW9kZWw9XCJrZXl3b3JkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmljb24uaXMtc21hbGwuaXMtcmlnaHQodi1pZj1cImlzTG9hZGluZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZmEuZmEtY2lyY2xlLW8tbm90Y2guZmEtc3BpblxuICAgICAgICAgICAgICAgICAgICAuY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5idXR0b24uaXMtaW5mbyBTZWFyY2hcbiAgICAgICAgcC5oYXMtdGV4dC1jZW50ZXJlZCh2LWlmPVwicG9ydGZvbGlvcy5sZW5ndGggPT09IDBcIikgTm8gcG9ydGZvbGlvIGZvdW5kIFxuICAgICAgICAuY29sdW1ucy5wb3J0Zm9saW9zLmlzLW11bHRpbGluZVxuICAgICAgICAgICAgLmNvbHVtbi5pcy00KHYtZm9yPVwiKHBvcnRmb2xpbyxpbmRleCkgaW4gcG9ydGZvbGlvc1wiKVxuICAgICAgICAgICAgICAgIC5jYXJkKEBjbGljaz1cInNob3dNb2RhbCA9IHRydWUsIG1vZGUgPSAxLCBwb3J0Zm9saW9TZWxlY3RlZCA9IGluZGV4XCIpLmotZ3Jvd1xuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbWFnZSh2LWlmPVwicG9ydGZvbGlvLmltYWdlLmxlbmd0aCA+IDBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ3VyZS5pbWFnZS5pcy00YnkzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nKDpzcmM9XCJwb3J0Zm9saW8uaW1hZ2VbMF1cIiBhbHQ9XCJwb3J0Zm9saW9cIilcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1lZGlhLWNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC50aXRsZS5pcy00IHt7cG9ydGZvbGlvLnRyYW5zbGF0aW9uc1swXS50aXRsZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmRldGFpbCB7e3BvcnRmb2xpby50cmFuc2xhdGlvbnNbMF0uZGV0YWlsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLnRhZy5pcy1wcmltYXJ5IHt7cG9ydGZvbGlvLmNhdGVnb3J5LnRyYW5zbGF0aW9uc1swXS5uYW1lfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIG5hdi5wYWdpbmF0aW9uKHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cInBhZ2luYXRpb25cIilcbiAgICAgICAgICAgIHVsLnBhZ2luYXRpb24tbGlzdFxuICAgICAgICAgICAgICAgIGxpKHYtZm9yPVwiaW5kZXggaW4gdG90YWxQYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgIGEucGFnaW5hdGlvbi1saW5rKHYtYmluZDpjbGFzcz1cImlzQ3VycmVudFBhZ2UoaW5kZXgpXCIgdi1vbjpjbGljaz1cImNoYW5nZVBhZ2UoaW5kZXgpXCIpIHt7aW5kZXh9fVxuICAgICAgICBNb2RhbFBvcnRmb2xpbyh2LWlmPVwic2hvd01vZGFsXCIgQGNsb3NlPVwic2hvd01vZGFsID0gZmFsc2VcIiB2LWJpbmQ6bW9kZT1cIm1vZGVcIiB2LWJpbmQ6aW5pdGlhbFBvcnRmb2xpbz0ncG9ydGZvbGlvc1twb3J0Zm9saW9TZWxlY3RlZF0nIHYtb246cmVsb2FkLWxpc3Q9XCJsb2FkUG9ydGZvbGlvKDApXCIgdi1iaW5kOmNhdGVnb3JpZXM9XCJjYXRlZ29yaWVzXCIgKVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNb2RhbFBvcnRmb2xpbyBmcm9tIFwiLi9jb21wb25lbnRzL01vZGFsUG9ydGZvbGlvXCI7XG5jb25zdCBMSU1JVCA9IDk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvcnRmb2xpb3M6IFtdLFxuICAgICAgICAgICAgcG9ydGZvbGlvU2VsZWN0ZWQ6IC0xLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICBjYXRlZ29yeVNlbGVjdGVkOiBcIlwiLFxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIG1vZGU6IDAsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICAgICAgdG90YWxQYWdlOiAwLFxuICAgICAgICAgICAga2V5d29yZDogXCJcIixcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTW9kYWxQb3J0Zm9saW9cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZENhdGVnb3J5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuYXhpb3MuZ2V0KFwiY2F0ZWdvcnkvXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUG9ydGZvbGlvOiBfLmRlYm91bmNlKGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5heGlvcy5nZXQoXCJwb3J0Zm9saW8vP2xpbWl0PVwiICsgTElNSVQgKyBcIiZvZmZzZXQ9XCIgKyBvZmZzZXQgKyBcIiZrZXl3b3JkPVwiICsgdGhpcy5rZXl3b3JkICsgXCImY2F0ZWdvcnk9XCIgKyB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gcmVzLmRhdGEuY291bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3J0Zm9saW9zID0gcmVzLmRhdGEuY29udGVudDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvcnRmb2xpb3MpO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlID0gTWF0aC5jZWlsKHRoaXMuY291bnQgLyBMSU1JVCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG9mZnNldCArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHRocm93bikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRocm93bik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNTAwKSxcbiAgICAgICAgaXNDdXJyZW50UGFnZTogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ2lzLWN1cnJlbnQnOiBpbmRleCA9PT0gdGhpcy5jdXJyZW50UGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VQYWdlOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkUG9ydGZvbGlvKGluZGV4IC0gMSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRpdGxlUG9ydGZvbGlvKHBvcnRmb2xpbykge1xuICAgICAgICAgIGlmICh0aGlzLiRpMThuLmxvY2FsZSA9PSAnZW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9ydGZvbGlvLnRyYW5zbGF0aW9ucy5maW5kKG9iaiA9PiBvYmoubGFuZ3VhZ2UgPT09IFwiZW5cIikudGl0bGU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLiRpMThuLmxvY2FsZSA9PSAndGgnKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9ydGZvbGlvLnRyYW5zbGF0aW9ucy5maW5kKG9iaiA9PiBvYmoubGFuZ3VhZ2UgPT09IFwidGhcIikudGl0bGU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLiRpMThuLmxvY2FsZSA9PSAnamEnKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9ydGZvbGlvLnRyYW5zbGF0aW9ucy5maW5kKG9iaiA9PiBvYmoubGFuZ3VhZ2UgPT09IFwiamFcIikudGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXREZXNjUG9ydGZvbGlvKHBvcnRmb2xpbykge1xuICAgICAgICAgIGlmICh0aGlzLiRpMThuLmxvY2FsZSA9PSAnZW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9ydGZvbGlvLnRyYW5zbGF0aW9ucy5maW5kKG9iaiA9PiBvYmoubGFuZ3VhZ2UgPT09IFwiZW5cIikuZGV0YWlsO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy4kaTE4bi5sb2NhbGUgPT0gJ3RoJykge1xuICAgICAgICAgICAgcmV0dXJuIHBvcnRmb2xpby50cmFuc2xhdGlvbnMuZmluZChvYmogPT4gb2JqLmxhbmd1YWdlID09PSBcInRoXCIpLmRldGFpbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuJGkxOG4ubG9jYWxlID09ICdqYScpIHtcbiAgICAgICAgICAgIHJldHVybiBwb3J0Zm9saW8udHJhbnNsYXRpb25zLmZpbmQob2JqID0+IG9iai5sYW5ndWFnZSA9PT0gXCJqYVwiKS5kZXRhaWw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAga2V5d29yZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFBvcnRmb2xpbygwKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkQ2F0ZWdvcnkoKTtcbiAgICAgICAgdGhpcy5sb2FkUG9ydGZvbGlvKDApO1xuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAuZGV0YWlsIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIH1cbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5kZXgudnVlPzBhODQ4NDJlIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IS4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wMGNkZWI2Y1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vcG9zdGNzcy1sb2FkZXIvbGliIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2xpZW50L2FwcC9hZG1pbi9tb2R1bGVzL3BvcnRmb2xpby9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDM5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTA1YjdjNTkwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi9wb3N0Y3NzLWxvYWRlci9saWIhLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9BdXRvQ29tcGxldGUudnVlXG4vLyBtb2R1bGUgaWQgPSAzOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IS4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xODRmNDg2NlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vcG9zdGNzcy1sb2FkZXIvbGliIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2xpZW50L2FwcC9hZG1pbi9jb3JlL2NvbXBvbmVudHMvSW5wdXRGaWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSEuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDJiOTc1ZWVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9+L3Bvc3Rjc3MtbG9hZGVyL2xpYiEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9Nb2RhbFBvcnRmb2xpby52dWVcbi8vIG1vZHVsZSBpZCA9IDM5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRiYmRjYjkwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vcG9zdGNzcy1sb2FkZXIvbGliIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2xpZW50L2FwcC9hZG1pbi9jb3JlL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDQwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTU1ZDM0MmY4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vfi9wb3N0Y3NzLWxvYWRlci9saWIhLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9UYWJDaG9vc2VMYW5ndWFnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTYzNTQzZDAwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL34vcG9zdGNzcy1sb2FkZXIvbGliIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2xpZW50L2FwcC9hZG1pbi9jb3JlL2NvbXBvbmVudHMvUGFnZUhlYWRlci9oZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IS4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi05MWJkNTJkZVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9+L3Bvc3Rjc3MtbG9hZGVyL2xpYiEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9ob21lL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSEuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYTQ1Yjk2N2VcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9+L3Bvc3Rjc3MtbG9hZGVyL2xpYiEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9GaWVsZFBvcnRmb2xpby52dWVcbi8vIG1vZHVsZSBpZCA9IDQxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91dWlkL2xpYi9ieXRlc1RvVXVpZC5qc1xuLy8gbW9kdWxlIGlkID0gNjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG52YXIgcm5nO1xuXG52YXIgY3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG87IC8vIGZvciBJRSAxMVxuaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3V1aWQvbGliL3JuZy1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIFdlIGZlYXR1cmVcbi8vIGRldGVjdCB0byBkZXRlcm1pbmUgdGhlIGJlc3QgUk5HIHNvdXJjZSwgbm9ybWFsaXppbmcgdG8gYSBmdW5jdGlvbiB0aGF0XG4vLyByZXR1cm5zIDEyOC1iaXRzIG9mIHJhbmRvbW5lc3MsIHNpbmNlIHRoYXQncyB3aGF0J3MgdXN1YWxseSByZXF1aXJlZFxudmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG4vLyByYW5kb20gIydzIHdlIG5lZWQgdG8gaW5pdCBub2RlIGFuZCBjbG9ja3NlcVxudmFyIF9zZWVkQnl0ZXMgPSBybmcoKTtcblxuLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG52YXIgX25vZGVJZCA9IFtcbiAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG4gIF9zZWVkQnl0ZXNbMV0sIF9zZWVkQnl0ZXNbMl0sIF9zZWVkQnl0ZXNbM10sIF9zZWVkQnl0ZXNbNF0sIF9zZWVkQnl0ZXNbNV1cbl07XG5cbi8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG52YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMCwgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3V1aWQvdjEuanNcbi8vIG1vZHVsZSBpZCA9IDYyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIHZlZS12YWxpZGF0ZSB2Mi4wLjAtcmMuMTdcbiAqIChjKSAyMDE3IEFiZGVscmFobWFuIEF3YWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG52YXIgTUlMTElTRUNPTkRTX0lOX0hPVVIgPSAzNjAwMDAwO1xudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMDtcbnZhciBERUZBVUxUX0FERElUSU9OQUxfRElHSVRTID0gMjtcblxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltZXRlcjogL1tUIF0vLFxuICBwbGFpblRpbWU6IC86LyxcblxuICAvLyB5ZWFyIHRva2Vuc1xuICBZWTogL14oXFxkezJ9KSQvLFxuICBZWVk6IFtcbiAgICAvXihbKy1dXFxkezJ9KSQvLCAvLyAwIGFkZGl0aW9uYWwgZGlnaXRzXG4gICAgL14oWystXVxcZHszfSkkLywgLy8gMSBhZGRpdGlvbmFsIGRpZ2l0XG4gICAgL14oWystXVxcZHs0fSkkLyAvLyAyIGFkZGl0aW9uYWwgZGlnaXRzXG4gIF0sXG4gIFlZWVk6IC9eKFxcZHs0fSkvLFxuICBZWVlZWTogW1xuICAgIC9eKFsrLV1cXGR7NH0pLywgLy8gMCBhZGRpdGlvbmFsIGRpZ2l0c1xuICAgIC9eKFsrLV1cXGR7NX0pLywgLy8gMSBhZGRpdGlvbmFsIGRpZ2l0XG4gICAgL14oWystXVxcZHs2fSkvIC8vIDIgYWRkaXRpb25hbCBkaWdpdHNcbiAgXSxcblxuICAvLyBkYXRlIHRva2Vuc1xuICBNTTogL14tKFxcZHsyfSkkLyxcbiAgREREOiAvXi0/KFxcZHszfSkkLyxcbiAgTU1ERDogL14tPyhcXGR7Mn0pLT8oXFxkezJ9KSQvLFxuICBXd3c6IC9eLT9XKFxcZHsyfSkkLyxcbiAgV3d3RDogL14tP1coXFxkezJ9KS0/KFxcZHsxfSkkLyxcblxuICBISDogL14oXFxkezJ9KFsuLF1cXGQqKT8pJC8sXG4gIEhITU06IC9eKFxcZHsyfSk6PyhcXGR7Mn0oWy4sXVxcZCopPykkLyxcbiAgSEhNTVNTOiAvXihcXGR7Mn0pOj8oXFxkezJ9KTo/KFxcZHsyfShbLixdXFxkKik/KSQvLFxuXG4gIC8vIHRpbWV6b25lIHRva2Vuc1xuICB0aW1lem9uZTogLyhbWistXS4qKSQvLFxuICB0aW1lem9uZVo6IC9eKFopJC8sXG4gIHRpbWV6b25lSEg6IC9eKFsrLV0pKFxcZHsyfSkkLyxcbiAgdGltZXpvbmVISE1NOiAvXihbKy1dKShcXGR7Mn0pOj8oXFxkezJ9KSQvXG59O1xuXG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiBhbiBhcmd1bWVudCBpcyBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIHRyaWVzIHRvIHBhcnNlIGl0LlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIGFsbCBhYm92ZSBmYWlscywgdGhlIGZ1bmN0aW9uIHBhc3NlcyB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gRGF0ZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqIEFsbCAqZGF0ZS1mbnMqIGZ1bmN0aW9ucyB3aWxsIHRocm93IGBSYW5nZUVycm9yYCBpZiBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBpcyBub3QgMCwgMSwgMiBvciB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogdmFyIHJlc3VsdCA9IHRvRGF0ZSgnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSB0b0RhdGUoJyswMjAxNDEwMScsIHthZGRpdGlvbmFsRGlnaXRzOiAxfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHRvRGF0ZSAoYXJndW1lbnQsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcblxuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA6IE51bWJlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpXG4gIH1cblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KVxuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcblxuICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICB2YXIgeWVhciA9IHBhcnNlWWVhclJlc3VsdC55ZWFyO1xuICB2YXIgcmVzdERhdGVTdHJpbmcgPSBwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmc7XG5cbiAgdmFyIGRhdGUgPSBwYXJzZURhdGUkMShyZXN0RGF0ZVN0cmluZywgeWVhcik7XG5cbiAgaWYgKGRhdGUpIHtcbiAgICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgdmFyIHRpbWUgPSAwO1xuICAgIHZhciBvZmZzZXQ7XG5cbiAgICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBnZXQgb2Zmc2V0IGFjY3VyYXRlIHRvIGhvdXIgaW4gdGltZXpvbmVzIHRoYXQgY2hhbmdlIG9mZnNldFxuICAgICAgb2Zmc2V0ID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgIG9mZnNldCA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nIChkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1ldGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgaWYgKHBhdHRlcm5zLnBsYWluVGltZS50ZXN0KGFycmF5WzBdKSkge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBudWxsO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzXG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhciAoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcGF0dGVybllZWSA9IHBhdHRlcm5zLllZWVthZGRpdGlvbmFsRGlnaXRzXTtcbiAgdmFyIHBhdHRlcm5ZWVlZWSA9IHBhdHRlcm5zLllZWVlZW2FkZGl0aW9uYWxEaWdpdHNdO1xuXG4gIHZhciB0b2tlbjtcblxuICAvLyBZWVlZIG9yIMKxWVlZWVlcbiAgdG9rZW4gPSBwYXR0ZXJucy5ZWVlZLmV4ZWMoZGF0ZVN0cmluZykgfHwgcGF0dGVybllZWVlZLmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIHZhciB5ZWFyU3RyaW5nID0gdG9rZW5bMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHBhcnNlSW50KHllYXJTdHJpbmcsIDEwKSxcbiAgICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKHllYXJTdHJpbmcubGVuZ3RoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFlZIG9yIMKxWVlZXG4gIHRva2VuID0gcGF0dGVybnMuWVkuZXhlYyhkYXRlU3RyaW5nKSB8fCBwYXR0ZXJuWVlZLmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIHZhciBjZW50dXJ5U3RyaW5nID0gdG9rZW5bMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHBhcnNlSW50KGNlbnR1cnlTdHJpbmcsIDEwKSAqIDEwMCxcbiAgICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKGNlbnR1cnlTdHJpbmcubGVuZ3RoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZSQxIChkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHZhciB0b2tlbjtcbiAgdmFyIGRhdGU7XG4gIHZhciBtb250aDtcbiAgdmFyIHdlZWs7XG5cbiAgLy8gWVlZWVxuICBpZiAoZGF0ZVN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyKTtcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgLy8gWVlZWS1NTVxuICB0b2tlbiA9IHBhdHRlcm5zLk1NLmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxO1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgpO1xuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICAvLyBZWVlZLURERCBvciBZWVlZREREXG4gIHRva2VuID0gcGF0dGVybnMuRERELmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKTtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGRheU9mWWVhcik7XG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktTU0tREQgb3IgWVlZWU1NRERcbiAgdG9rZW4gPSBwYXR0ZXJucy5NTURELmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxO1xuICAgIHZhciBkYXkgPSBwYXJzZUludCh0b2tlblsyXSwgMTApO1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIGRheSk7XG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktV3d3IG9yIFlZWVlXd3dcbiAgdG9rZW4gPSBwYXR0ZXJucy5Xd3cuZXhlYyhkYXRlU3RyaW5nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgd2VlayA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxO1xuICAgIHJldHVybiBkYXlPZklTT1llYXIoeWVhciwgd2VlaylcbiAgfVxuXG4gIC8vIFlZWVktV3d3LUQgb3IgWVlZWVd3d0RcbiAgdG9rZW4gPSBwYXR0ZXJucy5Xd3dELmV4ZWMoZGF0ZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIHdlZWsgPSBwYXJzZUludCh0b2tlblsxXSwgMTApIC0gMTtcbiAgICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAtIDE7XG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgZGF0ZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUgKHRpbWVTdHJpbmcpIHtcbiAgdmFyIHRva2VuO1xuICB2YXIgaG91cnM7XG4gIHZhciBtaW51dGVzO1xuXG4gIC8vIGhoXG4gIHRva2VuID0gcGF0dGVybnMuSEguZXhlYyh0aW1lU3RyaW5nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUZsb2F0KHRva2VuWzFdLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICByZXR1cm4gKGhvdXJzICUgMjQpICogTUlMTElTRUNPTkRTX0lOX0hPVVJcbiAgfVxuXG4gIC8vIGhoOm1tIG9yIGhobW1cbiAgdG9rZW4gPSBwYXR0ZXJucy5ISE1NLmV4ZWModGltZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGhvdXJzID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKTtcbiAgICBtaW51dGVzID0gcGFyc2VGbG9hdCh0b2tlblsyXS5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIH1cblxuICAvLyBoaDptbTpzcyBvciBoaG1tc3NcbiAgdG9rZW4gPSBwYXR0ZXJucy5ISE1NU1MuZXhlYyh0aW1lU3RyaW5nKTtcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApO1xuICAgIG1pbnV0ZXMgPSBwYXJzZUludCh0b2tlblsyXSwgMTApO1xuICAgIHZhciBzZWNvbmRzID0gcGFyc2VGbG9hdCh0b2tlblszXS5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICtcbiAgICAgIHNlY29uZHMgKiAxMDAwXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lICh0aW1lem9uZVN0cmluZykge1xuICB2YXIgdG9rZW47XG4gIHZhciBhYnNvbHV0ZU9mZnNldDtcblxuICAvLyBaXG4gIHRva2VuID0gcGF0dGVybnMudGltZXpvbmVaLmV4ZWModGltZXpvbmVTdHJpbmcpO1xuICBpZiAodG9rZW4pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gwrFoaFxuICB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lSEguZXhlYyh0aW1lem9uZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGFic29sdXRlT2Zmc2V0ID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAqIDYwO1xuICAgIHJldHVybiAodG9rZW5bMV0gPT09ICcrJykgPyAtYWJzb2x1dGVPZmZzZXQgOiBhYnNvbHV0ZU9mZnNldFxuICB9XG5cbiAgLy8gwrFoaDptbSBvciDCsWhobW1cbiAgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZUhITU0uZXhlYyh0aW1lem9uZVN0cmluZyk7XG4gIGlmICh0b2tlbikge1xuICAgIGFic29sdXRlT2Zmc2V0ID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAqIDYwICsgcGFyc2VJbnQodG9rZW5bM10sIDEwKTtcbiAgICByZXR1cm4gKHRva2VuWzFdID09PSAnKycpID8gLWFic29sdXRlT2Zmc2V0IDogYWJzb2x1dGVPZmZzZXRcbiAgfVxuXG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPWWVhciAoaXNvWWVhciwgd2VlaywgZGF5KSB7XG4gIHdlZWsgPSB3ZWVrIHx8IDA7XG4gIGRheSA9IGRheSB8fCAwO1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9IHdlZWsgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlXG59XG5cbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWRcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiB2YXIgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCwgZGlydHlPcHRpb25zKSB7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpXG59XG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0IChkaXJ0eU9iamVjdCkge1xuICBkaXJ0eU9iamVjdCA9IGRpcnR5T2JqZWN0IHx8IHt9O1xuICB2YXIgb2JqZWN0ID0ge307XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGlydHlPYmplY3QpIHtcbiAgICBpZiAoZGlydHlPYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICBvYmplY3RbcHJvcGVydHldID0gZGlydHlPYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmplY3Rcbn1cblxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUkMiA9IDYwMDAwO1xuXG4vKipcbiAqIEBuYW1lIGFkZE1pbnV0ZXNcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbnV0ZXMgdG8gYmUgYWRkZWRcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaW51dGVzIGFkZGVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMzAgbWludXRlcyB0byAxMCBKdWx5IDIwMTQgMTI6MDA6MDA6XG4gKiB2YXIgcmVzdWx0ID0gYWRkTWludXRlcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDApLCAzMClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjMwOjAwXG4gKi9cbmZ1bmN0aW9uIGFkZE1pbnV0ZXMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGFtb3VudCAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUkMiwgZGlydHlPcHRpb25zKVxufVxuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9ucy4gU2VlIFtPcHRpb25zXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL09wdGlvbnN9XG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gcGFzc2VkIHRvIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZCAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gIWlzTmFOKGRhdGUpXG59XG5cbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXREaXN0YW5jZSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciByZXN1bHQ7XG4gIGlmICh0eXBlb2YgZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxudmFyIHRva2Vuc1RvQmVTaG9ydGVkUGF0dGVybiA9IC9NTU1NfE1NfEREfGRkZGQvZztcblxuZnVuY3Rpb24gYnVpbGRTaG9ydExvbmdGb3JtYXQgKGZvcm1hdCkge1xuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UodG9rZW5zVG9CZVNob3J0ZWRQYXR0ZXJuLCBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4uc2xpY2UoMSlcbiAgfSlcbn1cblxuLyoqXG4gKiBAbmFtZSBidWlsZEZvcm1hdExvbmdGblxuICogQGNhdGVnb3J5IExvY2FsZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBCdWlsZCBgZm9ybWF0TG9uZ2AgcHJvcGVydHkgZm9yIGxvY2FsZSB1c2VkIGJ5IGBmb3JtYXRgLCBgZm9ybWF0UmVsYXRpdmVgIGFuZCBgcGFyc2VgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJ1aWxkIGBmb3JtYXRMb25nYCBwcm9wZXJ0eSBmb3IgbG9jYWxlIHVzZWQgYnkgYGZvcm1hdGAsIGBmb3JtYXRSZWxhdGl2ZWAgYW5kIGBwYXJzZWAgZnVuY3Rpb25zLlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIG9uZSBvZiB0aGUgZm9sbG93aW5nIHRva2VucyBhcyB0aGUgYXJndW1lbnQ6XG4gKiBgJ0xUUydgLCBgJ0xUJ2AsIGAnTCdgLCBgJ0xMJ2AsIGAnTExMJ2AsIGAnbCdgLCBgJ2xsJ2AsIGAnbGxsJ2AsIGAnbGxsbCdgXG4gKiBhbmQgcmV0dXJucyBhIGxvbmcgZm9ybWF0IHN0cmluZyB3cml0dGVuIGFzIGBmb3JtYXRgIHRva2VuIHN0cmluZ3MuXG4gKiBTZWUgW2Zvcm1hdF17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9mb3JtYXR9XG4gKlxuICogYCdsJ2AsIGAnbGwnYCwgYCdsbGwnYCBhbmQgYCdsbGxsJ2AgZm9ybWF0cyBhcmUgYnVpbHQgYXV0b21hdGljYWxseVxuICogYnkgc2hvcnRlbmluZyBzb21lIG9mIHRoZSB0b2tlbnMgZnJvbSBjb3JyZXNwb25kaW5nIHVuc2hvcnRlbmVkIGZvcm1hdHNcbiAqIChlLmcuLCBpZiBgTExgIGlzIGAnTU1NTSBERCBZWVlZJ2AgdGhlbiBgbGxgIHdpbGwgYmUgYE1NTSBEIFlZWVlgKVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHdpdGggbG9uZyBmb3JtYXRzIHdyaXR0ZW4gYXMgYGZvcm1hdGAgdG9rZW4gc3RyaW5nc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MVCAtIHRpbWUgZm9ybWF0OiBob3VycyBhbmQgbWludXRlc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MVFMgLSB0aW1lIGZvcm1hdDogaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmouTCAtIHNob3J0IGRhdGUgZm9ybWF0OiBudW1lcmljIGRheSwgbW9udGggYW5kIHllYXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb2JqLmxdIC0gc2hvcnQgZGF0ZSBmb3JtYXQ6IG51bWVyaWMgZGF5LCBtb250aCBhbmQgeWVhciAoc2hvcnRlbmVkKVxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MTCAtIGxvbmcgZGF0ZSBmb3JtYXQ6IGRheSwgbW9udGggaW4gd29yZHMsIGFuZCB5ZWFyXG4gKiBAcGFyYW0ge1N0cmluZ30gW29iai5sbF0gLSBsb25nIGRhdGUgZm9ybWF0OiBkYXksIG1vbnRoIGluIHdvcmRzLCBhbmQgeWVhciAoc2hvcnRlbmVkKVxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MTEwgLSBsb25nIGRhdGUgYW5kIHRpbWUgZm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gW29iai5sbGxdIC0gbG9uZyBkYXRlIGFuZCB0aW1lIGZvcm1hdCAoc2hvcnRlbmVkKVxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5MTExMIC0gbG9uZyBkYXRlLCB0aW1lIGFuZCB3ZWVrZGF5IGZvcm1hdFxuICogQHBhcmFtIHtTdHJpbmd9IFtvYmoubGxsbF0gLSBsb25nIGRhdGUsIHRpbWUgYW5kIHdlZWtkYXkgZm9ybWF0IChzaG9ydGVuZWQpXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGBmb3JtYXRMb25nYCBwcm9wZXJ0eSBvZiB0aGUgbG9jYWxlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBgZW4tVVNgIGxvY2FsZTpcbiAqIGxvY2FsZS5mb3JtYXRMb25nID0gYnVpbGRGb3JtYXRMb25nRm4oe1xuICogICBMVDogJ2g6bW0gYWEnLFxuICogICBMVFM6ICdoOm1tOnNzIGFhJyxcbiAqICAgTDogJ01NL0REL1lZWVknLFxuICogICBMTDogJ01NTU0gRCBZWVlZJyxcbiAqICAgTExMOiAnTU1NTSBEIFlZWVkgaDptbSBhYScsXG4gKiAgIExMTEw6ICdkZGRkLCBNTU1NIEQgWVlZWSBoOm1tIGFhJ1xuICogfSlcbiAqL1xuZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4gKG9iaikge1xuICB2YXIgZm9ybWF0TG9uZ0xvY2FsZSA9IHtcbiAgICBMVFM6IG9iai5MVFMsXG4gICAgTFQ6IG9iai5MVCxcbiAgICBMOiBvYmouTCxcbiAgICBMTDogb2JqLkxMLFxuICAgIExMTDogb2JqLkxMTCxcbiAgICBMTExMOiBvYmouTExMTCxcbiAgICBsOiBvYmoubCB8fCBidWlsZFNob3J0TG9uZ0Zvcm1hdChvYmouTCksXG4gICAgbGw6IG9iai5sbCB8fCBidWlsZFNob3J0TG9uZ0Zvcm1hdChvYmouTEwpLFxuICAgIGxsbDogb2JqLmxsbCB8fCBidWlsZFNob3J0TG9uZ0Zvcm1hdChvYmouTExMKSxcbiAgICBsbGxsOiBvYmoubGxsbCB8fCBidWlsZFNob3J0TG9uZ0Zvcm1hdChvYmouTExMTClcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuIGZvcm1hdExvbmdMb2NhbGVbdG9rZW5dXG4gIH1cbn1cblxudmFyIGZvcm1hdExvbmcgPSBidWlsZEZvcm1hdExvbmdGbih7XG4gIExUOiAnaDptbSBhYScsXG4gIExUUzogJ2g6bW06c3MgYWEnLFxuICBMOiAnTU0vREQvWVlZWScsXG4gIExMOiAnTU1NTSBEIFlZWVknLFxuICBMTEw6ICdNTU1NIEQgWVlZWSBoOm1tIGFhJyxcbiAgTExMTDogJ2RkZGQsIE1NTU0gRCBZWVlZIGg6bW0gYWEnXG59KTtcblxudmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogJ1tsYXN0XSBkZGRkIFthdF0gTFQnLFxuICB5ZXN0ZXJkYXk6ICdbeWVzdGVyZGF5IGF0XSBMVCcsXG4gIHRvZGF5OiAnW3RvZGF5IGF0XSBMVCcsXG4gIHRvbW9ycm93OiAnW3RvbW9ycm93IGF0XSBMVCcsXG4gIG5leHRXZWVrOiAnZGRkZCBbYXRdIExUJyxcbiAgb3RoZXI6ICdMJ1xufTtcblxuZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUgKHRva2VuLCBkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dXG59XG5cbi8qKlxuICogQG5hbWUgYnVpbGRMb2NhbGl6ZUZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIGBsb2NhbGl6ZS53ZWVrZGF5YCwgYGxvY2FsaXplLm1vbnRoYCBhbmQgYGxvY2FsaXplLnRpbWVPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJ1aWxkIGBsb2NhbGl6ZS53ZWVrZGF5YCwgYGxvY2FsaXplLm1vbnRoYCBhbmQgYGxvY2FsaXplLnRpbWVPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZVxuICogdXNlZCBieSBgZm9ybWF0YCBmdW5jdGlvbi5cbiAqIElmIG5vIGB0eXBlYCBpcyBzdXBwbGllZCB0byB0aGUgb3B0aW9ucyBvZiB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uLCBgZGVmYXVsdFR5cGVgIHdpbGwgYmUgdXNlZCAoc2VlIGV4YW1wbGUpLlxuICpcbiAqIGBsb2NhbGl6ZS53ZWVrZGF5YCBmdW5jdGlvbiB0YWtlcyB0aGUgd2Vla2RheSBpbmRleCBhcyBhcmd1bWVudCAoMCAtIFN1bmRheSkuXG4gKiBgbG9jYWxpemUubW9udGhgIHRha2VzIHRoZSBtb250aCBpbmRleCAoMCAtIEphbnVhcnkpLlxuICogYGxvY2FsaXplLnRpbWVPZkRheWAgdGFrZXMgdGhlIGhvdXJzLiBVc2UgYGluZGV4Q2FsbGJhY2tgIHRvIGNvbnZlcnQgdGhlbSB0byBhbiBhcnJheSBpbmRleCAoc2VlIGV4YW1wbGUpLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgb2JqZWN0IHdpdGggYXJyYXlzIG9mIHZhbHVlc1xuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUeXBlIC0gdGhlIGRlZmF1bHQgdHlwZSBmb3IgdGhlIGxvY2FsaXplIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaW5kZXhDYWxsYmFja10gLSB0aGUgY2FsbGJhY2sgd2hpY2ggdGFrZXMgdGhlIHJlc3VsdGluZyBmdW5jdGlvbiBhcmd1bWVudFxuICogICBhbmQgY29udmVydHMgaXQgaW50byB2YWx1ZSBhcnJheSBpbmRleFxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciB0aW1lT2ZEYXlWYWx1ZXMgPSB7XG4gKiAgIHVwcGVyY2FzZTogWydBTScsICdQTSddLFxuICogICBsb3dlcmNhc2U6IFsnYW0nLCAncG0nXSxcbiAqICAgbG9uZzogWydhLm0uJywgJ3AubS4nXVxuICogfVxuICogbG9jYWxlLmxvY2FsaXplLnRpbWVPZkRheSA9IGJ1aWxkTG9jYWxpemVGbih0aW1lT2ZEYXlWYWx1ZXMsICdsb25nJywgZnVuY3Rpb24gKGhvdXJzKSB7XG4gKiAgIC8vIDAgaXMgYS5tLiBhcnJheSBpbmRleCwgMSBpcyBwLm0uIGFycmF5IGluZGV4XG4gKiAgIHJldHVybiAoaG91cnMgLyAxMikgPj0gMSA/IDEgOiAwXG4gKiB9KVxuICogbG9jYWxlLmxvY2FsaXplLnRpbWVPZkRheSgxNiwge3R5cGU6ICd1cHBlcmNhc2UnfSkgLy89PiAnUE0nXG4gKiBsb2NhbGUubG9jYWxpemUudGltZU9mRGF5KDUpIC8vPT4gJ2EubS4nXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbiAodmFsdWVzLCBkZWZhdWx0VHlwZSwgaW5kZXhDYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB0eXBlID0gb3B0aW9ucy50eXBlID8gU3RyaW5nKG9wdGlvbnMudHlwZSkgOiBkZWZhdWx0VHlwZTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSB2YWx1ZXNbdHlwZV0gfHwgdmFsdWVzW2RlZmF1bHRUeXBlXTtcbiAgICB2YXIgaW5kZXggPSBpbmRleENhbGxiYWNrID8gaW5kZXhDYWxsYmFjayhOdW1iZXIoZGlydHlJbmRleCkpIDogTnVtYmVyKGRpcnR5SW5kZXgpO1xuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF1cbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIGJ1aWxkTG9jYWxpemVBcnJheUZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIGBsb2NhbGl6ZS53ZWVrZGF5c2AsIGBsb2NhbGl6ZS5tb250aHNgIGFuZCBgbG9jYWxpemUudGltZXNPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJ1aWxkIGBsb2NhbGl6ZS53ZWVrZGF5c2AsIGBsb2NhbGl6ZS5tb250aHNgIGFuZCBgbG9jYWxpemUudGltZXNPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZS5cbiAqIElmIG5vIGB0eXBlYCBpcyBzdXBwbGllZCB0byB0aGUgb3B0aW9ucyBvZiB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uLCBgZGVmYXVsdFR5cGVgIHdpbGwgYmUgdXNlZCAoc2VlIGV4YW1wbGUpLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgb2JqZWN0IHdpdGggYXJyYXlzIG9mIHZhbHVlc1xuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUeXBlIC0gdGhlIGRlZmF1bHQgdHlwZSBmb3IgdGhlIGxvY2FsaXplIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IHRoZSByZXN1bHRpbmcgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHdlZWtkYXlWYWx1ZXMgPSB7XG4gKiAgIG5hcnJvdzogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICogICBzaG9ydDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAqICAgbG9uZzogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG4gKiB9XG4gKiBsb2NhbGUubG9jYWxpemUud2Vla2RheXMgPSBidWlsZExvY2FsaXplQXJyYXlGbih3ZWVrZGF5VmFsdWVzLCAnbG9uZycpXG4gKiBsb2NhbGUubG9jYWxpemUud2Vla2RheXMoe3R5cGU6ICduYXJyb3cnfSkgLy89PiBbJ1N1JywgJ01vJywgLi4uXVxuICogbG9jYWxlLmxvY2FsaXplLndlZWtkYXlzKCkgLy89PiBbJ1N1bmRheScsICdNb25kYXknLCAuLi5dXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVBcnJheUZuICh2YWx1ZXMsIGRlZmF1bHRUeXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgPyBTdHJpbmcob3B0aW9ucy50eXBlKSA6IGRlZmF1bHRUeXBlO1xuICAgIHJldHVybiB2YWx1ZXNbdHlwZV0gfHwgdmFsdWVzW2RlZmF1bHRUeXBlXVxuICB9XG59XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciB3ZWVrZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgc2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIGxvbmc6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBzaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICBsb25nOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcblxuLy8gYHRpbWVPZkRheWAgaXMgdXNlZCB0byBkZXNpZ25hdGUgd2hpY2ggcGFydCBvZiB0aGUgZGF5IGl0IGlzLCB3aGVuIHVzZWQgd2l0aCAxMi1ob3VyIGNsb2NrLlxuLy8gVXNlIHRoZSBzeXN0ZW0gd2hpY2ggaXMgdXNlZCB0aGUgbW9zdCBjb21tb25seSBpbiB0aGUgbG9jYWxlLlxuLy8gRm9yIGV4YW1wbGUsIGlmIHRoZSBjb3VudHJ5IGRvZXNuJ3QgdXNlIGEubS4vcC5tLiwgeW91IGNhbiB1c2UgYG5pZ2h0YC9gbW9ybmluZ2AvYGFmdGVybm9vbmAvYGV2ZW5pbmdgOlxuLy9cbi8vICAgdmFyIHRpbWVPZkRheVZhbHVlcyA9IHtcbi8vICAgICBhbnk6IFsnaW4gdGhlIG5pZ2h0JywgJ2luIHRoZSBtb3JuaW5nJywgJ2luIHRoZSBhZnRlcm5vb24nLCAnaW4gdGhlIGV2ZW5pbmcnXVxuLy8gICB9XG4vL1xuLy8gQW5kIGxhdGVyOlxuLy9cbi8vICAgdmFyIGxvY2FsaXplID0ge1xuLy8gICAgIC8vIFRoZSBjYWxsYmFjayB0YWtlcyB0aGUgaG91cnMgYXMgdGhlIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRoZSBhcnJheSBpbmRleFxuLy8gICAgIHRpbWVPZkRheTogYnVpbGRMb2NhbGl6ZUZuKHRpbWVPZkRheVZhbHVlcywgJ2FueScsIGZ1bmN0aW9uIChob3Vycykge1xuLy8gICAgICAgaWYgKGhvdXJzID49IDE3KSB7XG4vLyAgICAgICAgIHJldHVybiAzXG4vLyAgICAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4vLyAgICAgICAgIHJldHVybiAyXG4vLyAgICAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbi8vICAgICAgICAgcmV0dXJuIDFcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiAwXG4vLyAgICAgICB9XG4vLyAgICAgfSksXG4vLyAgICAgdGltZXNPZkRheTogYnVpbGRMb2NhbGl6ZUFycmF5Rm4odGltZU9mRGF5VmFsdWVzLCAnYW55Jylcbi8vICAgfVxudmFyIHRpbWVPZkRheVZhbHVlcyA9IHtcbiAgdXBwZXJjYXNlOiBbJ0FNJywgJ1BNJ10sXG4gIGxvd2VyY2FzZTogWydhbScsICdwbSddLFxuICBsb25nOiBbJ2EubS4nLCAncC5tLiddXG59O1xuXG5mdW5jdGlvbiBvcmRpbmFsTnVtYmVyIChkaXJ0eU51bWJlciwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YDpcbiAgLy9cbiAgLy8gICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fVxuICAvLyAgIHZhciB1bml0ID0gU3RyaW5nKG9wdGlvbnMudW5pdClcbiAgLy9cbiAgLy8gd2hlcmUgYHVuaXRgIGNhbiBiZSAnbW9udGgnLCAncXVhcnRlcicsICd3ZWVrJywgJ2lzb1dlZWsnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheU9mTW9udGgnIG9yICdkYXlPZldlZWsnXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0J1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJ1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJ1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJ1xufVxuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIHdlZWtkYXk6IGJ1aWxkTG9jYWxpemVGbih3ZWVrZGF5VmFsdWVzLCAnbG9uZycpLFxuICB3ZWVrZGF5czogYnVpbGRMb2NhbGl6ZUFycmF5Rm4od2Vla2RheVZhbHVlcywgJ2xvbmcnKSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbihtb250aFZhbHVlcywgJ2xvbmcnKSxcbiAgbW9udGhzOiBidWlsZExvY2FsaXplQXJyYXlGbihtb250aFZhbHVlcywgJ2xvbmcnKSxcbiAgdGltZU9mRGF5OiBidWlsZExvY2FsaXplRm4odGltZU9mRGF5VmFsdWVzLCAnbG9uZycsIGZ1bmN0aW9uIChob3Vycykge1xuICAgIHJldHVybiAoaG91cnMgLyAxMikgPj0gMSA/IDEgOiAwXG4gIH0pLFxuICB0aW1lc09mRGF5OiBidWlsZExvY2FsaXplQXJyYXlGbih0aW1lT2ZEYXlWYWx1ZXMsICdsb25nJylcbn07XG5cbi8qKlxuICogQG5hbWUgYnVpbGRNYXRjaEZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIGBtYXRjaC53ZWVrZGF5c2AsIGBtYXRjaC5tb250aHNgIGFuZCBgbWF0Y2gudGltZXNPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEJ1aWxkIGBtYXRjaC53ZWVrZGF5c2AsIGBtYXRjaC5tb250aHNgIGFuZCBgbWF0Y2gudGltZXNPZkRheWAgcHJvcGVydGllcyBmb3IgdGhlIGxvY2FsZSB1c2VkIGJ5IGBwYXJzZWAgZnVuY3Rpb24uXG4gKiBJZiBubyBgdHlwZWAgaXMgc3VwcGxpZWQgdG8gdGhlIG9wdGlvbnMgb2YgdGhlIHJlc3VsdGluZyBmdW5jdGlvbiwgYGRlZmF1bHRUeXBlYCB3aWxsIGJlIHVzZWQgKHNlZSBleGFtcGxlKS5cbiAqIFRoZSByZXN1bHQgb2YgdGhlIG1hdGNoIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkIGludG8gY29ycmVzcG9uZGluZyBwYXJzZXIgZnVuY3Rpb25cbiAqIChgbWF0Y2gud2Vla2RheWAsIGBtYXRjaC5tb250aGAgb3IgYG1hdGNoLnRpbWVPZkRheWAgcmVzcGVjdGl2ZWx5LiBTZWUgYGJ1aWxkUGFyc2VGbmApLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgb2JqZWN0IHdpdGggUmVnRXhwc1xuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUeXBlIC0gdGhlIGRlZmF1bHQgdHlwZSBmb3IgdGhlIG1hdGNoIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IHRoZSByZXN1bHRpbmcgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIG1hdGNoV2Vla2RheXNQYXR0ZXJucyA9IHtcbiAqICAgbmFycm93OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAqICAgc2hvcnQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAqICAgbG9uZzogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbiAqIH1cbiAqIGxvY2FsZS5tYXRjaC53ZWVrZGF5cyA9IGJ1aWxkTWF0Y2hGbihtYXRjaFdlZWtkYXlzUGF0dGVybnMsICdsb25nJylcbiAqIGxvY2FsZS5tYXRjaC53ZWVrZGF5cygnU3VuZGF5Jywge3R5cGU6ICduYXJyb3cnfSkgLy89PiBbJ1N1JywgJ1N1JywgLi4uXVxuICogbG9jYWxlLm1hdGNoLndlZWtkYXlzKCdTdW5kYXknKSAvLz0+IFsnU3VuZGF5JywgJ1N1bmRheScsIC4uLl1cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRjaEZuIChwYXR0ZXJucywgZGVmYXVsdFR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eVN0cmluZywgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgPyBTdHJpbmcob3B0aW9ucy50eXBlKSA6IGRlZmF1bHRUeXBlO1xuICAgIHZhciBwYXR0ZXJuID0gcGF0dGVybnNbdHlwZV0gfHwgcGF0dGVybnNbZGVmYXVsdFR5cGVdO1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybilcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIGJ1aWxkUGFyc2VGblxuICogQGNhdGVnb3J5IExvY2FsZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBCdWlsZCBgbWF0Y2gud2Vla2RheWAsIGBtYXRjaC5tb250aGAgYW5kIGBtYXRjaC50aW1lT2ZEYXlgIHByb3BlcnRpZXMgZm9yIHRoZSBsb2NhbGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBCdWlsZCBgbWF0Y2gud2Vla2RheWAsIGBtYXRjaC5tb250aGAgYW5kIGBtYXRjaC50aW1lT2ZEYXlgIHByb3BlcnRpZXMgZm9yIHRoZSBsb2NhbGUgdXNlZCBieSBgcGFyc2VgIGZ1bmN0aW9uLlxuICogVGhlIGFyZ3VtZW50IG9mIHRoZSByZXN1bHRpbmcgZnVuY3Rpb24gaXMgdGhlIHJlc3VsdCBvZiB0aGUgY29ycmVzcG9uZGluZyBtYXRjaCBmdW5jdGlvblxuICogKGBtYXRjaC53ZWVrZGF5c2AsIGBtYXRjaC5tb250aHNgIG9yIGBtYXRjaC50aW1lc09mRGF5YCByZXNwZWN0aXZlbHkuIFNlZSBgYnVpbGRNYXRjaEZuYCkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSBvYmplY3Qgd2l0aCBhcnJheXMgb2YgUmVnRXhwc1xuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRUeXBlIC0gdGhlIGRlZmF1bHQgdHlwZSBmb3IgdGhlIHBhcnNlciBmdW5jdGlvblxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgcmVzdWx0aW5nIGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBwYXJzZVdlZWtkYXlQYXR0ZXJucyA9IHtcbiAqICAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxuICogfVxuICogbG9jYWxlLm1hdGNoLndlZWtkYXkgPSBidWlsZFBhcnNlRm4obWF0Y2hXZWVrZGF5c1BhdHRlcm5zLCAnbG9uZycpXG4gKiB2YXIgbWF0Y2hSZXN1bHQgPSBsb2NhbGUubWF0Y2gud2Vla2RheXMoJ0ZyaWRheScpXG4gKiBsb2NhbGUubWF0Y2gud2Vla2RheShtYXRjaFJlc3VsdCkgLy89PiA1XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUGFyc2VGbiAocGF0dGVybnMsIGRlZmF1bHRUeXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB0eXBlID0gb3B0aW9ucy50eXBlID8gU3RyaW5nKG9wdGlvbnMudHlwZSkgOiBkZWZhdWx0VHlwZTtcbiAgICB2YXIgcGF0dGVybnNBcnJheSA9IHBhdHRlcm5zW3R5cGVdIHx8IHBhdHRlcm5zW2RlZmF1bHRUeXBlXTtcbiAgICB2YXIgc3RyaW5nID0gbWF0Y2hSZXN1bHRbMV07XG5cbiAgICByZXR1cm4gcGF0dGVybnNBcnJheS5maW5kSW5kZXgoZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3Qoc3RyaW5nKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBAbmFtZSBidWlsZE1hdGNoUGF0dGVybkZuXG4gKiBAY2F0ZWdvcnkgTG9jYWxlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEJ1aWxkIG1hdGNoIGZ1bmN0aW9uIGZyb20gYSBzaW5nbGUgUmVnRXhwLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQnVpbGQgbWF0Y2ggZnVuY3Rpb24gZnJvbSBhIHNpbmdsZSBSZWdFeHAuXG4gKiBVc3VhbGx5IHVzZWQgZm9yIGJ1aWxkaW5nIGBtYXRjaC5vcmRpbmFsTnVtYmVyc2AgcHJvcGVydHkgb2YgdGhlIGxvY2FsZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGF0dGVybiAtIHRoZSBSZWdFeHBcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdGhlIHJlc3VsdGluZyBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiBsb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcnMgPSBidWlsZE1hdGNoUGF0dGVybkZuKC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaSlcbiAqIGxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVycygnM3JkJykgLy89PiBbJzNyZCcsICczJywgJ3JkJywgLi4uXVxuICovXG5mdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuIChwYXR0ZXJuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGRpcnR5U3RyaW5nKTtcbiAgICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pXG4gIH1cbn1cblxuLyoqXG4gKiBAbmFtZSBwYXJzZURlY2ltYWxcbiAqIEBjYXRlZ29yeSBMb2NhbGUgSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2VzIHRoZSBtYXRjaCByZXN1bHQgaW50byBkZWNpbWFsIG51bWJlci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlcyB0aGUgbWF0Y2ggcmVzdWx0IGludG8gZGVjaW1hbCBudW1iZXIuXG4gKiBVc2VzIHRoZSBzdHJpbmcgbWF0Y2hlZCB3aXRoIHRoZSBmaXJzdCBzZXQgb2YgcGFyZW50aGVzZXMgb2YgbWF0Y2ggUmVnRXhwLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoUmVzdWx0IC0gdGhlIG9iamVjdCByZXR1cm5lZCBieSBtYXRjaGluZyBmdW5jdGlvblxuICogQHJldHVybnMge051bWJlcn0gdGhlIHBhcnNlZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBsb2NhbGUubWF0Y2ggPSB7XG4gKiAgIG9yZGluYWxOdW1iZXJzOiAoZGlydHlTdHJpbmcpIHtcbiAqICAgICByZXR1cm4gU3RyaW5nKGRpcnR5U3RyaW5nKS5tYXRjaCgvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2kpXG4gKiAgIH0sXG4gKiAgIG9yZGluYWxOdW1iZXI6IHBhcnNlRGVjaW1hbFxuICogfVxuICovXG5mdW5jdGlvbiBwYXJzZURlY2ltYWwgKG1hdGNoUmVzdWx0KSB7XG4gIHJldHVybiBwYXJzZUludChtYXRjaFJlc3VsdFsxXSwgMTApXG59XG5cbnZhciBtYXRjaE9yZGluYWxOdW1iZXJzUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcblxudmFyIG1hdGNoV2Vla2RheXNQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgc2hvcnQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgbG9uZzogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG5cbnZhciBwYXJzZVdlZWtkYXlQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcblxudmFyIG1hdGNoTW9udGhzUGF0dGVybnMgPSB7XG4gIHNob3J0OiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgbG9uZzogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcblxudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcblxuLy8gYHRpbWVPZkRheWAgaXMgdXNlZCB0byBkZXNpZ25hdGUgd2hpY2ggcGFydCBvZiB0aGUgZGF5IGl0IGlzLCB3aGVuIHVzZWQgd2l0aCAxMi1ob3VyIGNsb2NrLlxuLy8gVXNlIHRoZSBzeXN0ZW0gd2hpY2ggaXMgdXNlZCB0aGUgbW9zdCBjb21tb25seSBpbiB0aGUgbG9jYWxlLlxuLy8gRm9yIGV4YW1wbGUsIGlmIHRoZSBjb3VudHJ5IGRvZXNuJ3QgdXNlIGEubS4vcC5tLiwgeW91IGNhbiB1c2UgYG5pZ2h0YC9gbW9ybmluZ2AvYGFmdGVybm9vbmAvYGV2ZW5pbmdgOlxuLy9cbi8vICAgdmFyIG1hdGNoVGltZXNPZkRheVBhdHRlcm5zID0ge1xuLy8gICAgIGxvbmc6IC9eKChpbiB0aGUpPyAobmlnaHR8bW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZz8pKS9pXG4vLyAgIH1cbi8vXG4vLyAgIHZhciBwYXJzZVRpbWVPZkRheVBhdHRlcm5zID0ge1xuLy8gICAgIGFueTogWy8obmlnaHR8bW9ybmluZykvaSwgLyhhZnRlcm5vb258ZXZlbmluZykvaV1cbi8vICAgfVxudmFyIG1hdGNoVGltZXNPZkRheVBhdHRlcm5zID0ge1xuICBzaG9ydDogL14oYW18cG0pL2ksXG4gIGxvbmc6IC9eKFthcF1cXC4/XFxzP21cXC4/KS9pXG59O1xuXG52YXIgcGFyc2VUaW1lT2ZEYXlQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15hL2ksIC9ecC9pXVxufTtcblxudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyczogYnVpbGRNYXRjaFBhdHRlcm5GbihtYXRjaE9yZGluYWxOdW1iZXJzUGF0dGVybiksXG4gIG9yZGluYWxOdW1iZXI6IHBhcnNlRGVjaW1hbCxcbiAgd2Vla2RheXM6IGJ1aWxkTWF0Y2hGbihtYXRjaFdlZWtkYXlzUGF0dGVybnMsICdsb25nJyksXG4gIHdlZWtkYXk6IGJ1aWxkUGFyc2VGbihwYXJzZVdlZWtkYXlQYXR0ZXJucywgJ2FueScpLFxuICBtb250aHM6IGJ1aWxkTWF0Y2hGbihtYXRjaE1vbnRoc1BhdHRlcm5zLCAnbG9uZycpLFxuICBtb250aDogYnVpbGRQYXJzZUZuKHBhcnNlTW9udGhQYXR0ZXJucywgJ2FueScpLFxuICB0aW1lc09mRGF5OiBidWlsZE1hdGNoRm4obWF0Y2hUaW1lc09mRGF5UGF0dGVybnMsICdsb25nJyksXG4gIHRpbWVPZkRheTogYnVpbGRQYXJzZUZuKHBhcnNlVGltZU9mRGF5UGF0dGVybnMsICdhbnknKVxufTtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICovXG52YXIgbG9jYWxlID0ge1xuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuXG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSQxID0gODY0MDAwMDA7XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyIChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZJDEpICsgMVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrIChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIgKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG5cbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxXG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxXG4gIH1cbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5mdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIgKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVcbn1cblxudmFyIE1JTExJU0VDT05EU19JTl9XRUVLJDIgPSA2MDQ4MDAwMDA7XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUsIGRpcnR5T3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUsIGRpcnR5T3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSyQyKSArIDFcbn1cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIE1vbnRoOiAxLCAyLCAuLi4sIDEyXG4gICdNJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENNb250aCgpICsgMVxuICB9LFxuXG4gIC8vIE1vbnRoOiAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICdNbyc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpICsgMTtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCwge3VuaXQ6ICdtb250aCd9KVxuICB9LFxuXG4gIC8vIE1vbnRoOiAwMSwgMDIsIC4uLiwgMTJcbiAgJ01NJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEsIDIpXG4gIH0sXG5cbiAgLy8gTW9udGg6IEphbiwgRmViLCAuLi4sIERlY1xuICAnTU1NJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUubW9udGgoZGF0ZS5nZXRVVENNb250aCgpLCB7dHlwZTogJ3Nob3J0J30pXG4gIH0sXG5cbiAgLy8gTW9udGg6IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICdNTU1NJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUubW9udGgoZGF0ZS5nZXRVVENNb250aCgpLCB7dHlwZTogJ2xvbmcnfSlcbiAgfSxcblxuICAvLyBRdWFydGVyOiAxLCAyLCAzLCA0XG4gICdRJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpXG4gIH0sXG5cbiAgLy8gUXVhcnRlcjogMXN0LCAybmQsIDNyZCwgNHRoXG4gICdRbyc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge3VuaXQ6ICdxdWFydGVyJ30pXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAxLCAyLCAuLi4sIDMxXG4gICdEJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENEYXRlKClcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDFzdCwgMm5kLCAuLi4sIDMxc3RcbiAgJ0RvJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge3VuaXQ6ICdkYXlPZk1vbnRoJ30pXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAwMSwgMDIsIC4uLiwgMzFcbiAgJ0REJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCAyKVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAxLCAyLCAuLi4sIDM2NlxuICAnREREJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXI6IDFzdCwgMm5kLCAuLi4sIDM2NnRoXG4gICdERERvJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUub3JkaW5hbE51bWJlcihnZXRVVENEYXlPZlllYXIoZGF0ZSksIHt1bml0OiAnZGF5T2ZZZWFyJ30pXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXI6IDAwMSwgMDAyLCAuLi4sIDM2NlxuICAnRERERCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhnZXRVVENEYXlPZlllYXIoZGF0ZSksIDMpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IFN1LCBNbywgLi4uLCBTYVxuICAnZGQnOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS53ZWVrZGF5KGRhdGUuZ2V0VVRDRGF5KCksIHt0eXBlOiAnbmFycm93J30pXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IFN1biwgTW9uLCAuLi4sIFNhdFxuICAnZGRkJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUud2Vla2RheShkYXRlLmdldFVUQ0RheSgpLCB7dHlwZTogJ3Nob3J0J30pXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IFN1bmRheSwgTW9uZGF5LCAuLi4sIFNhdHVyZGF5XG4gICdkZGRkJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUud2Vla2RheShkYXRlLmdldFVUQ0RheSgpLCB7dHlwZTogJ2xvbmcnfSlcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogMCwgMSwgLi4uLCA2XG4gICdkJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENEYXkoKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiAwdGgsIDFzdCwgMm5kLCAuLi4sIDZ0aFxuICAnZG8nOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF5KCksIHt1bml0OiAnZGF5T2ZXZWVrJ30pXG4gIH0sXG5cbiAgLy8gRGF5IG9mIElTTyB3ZWVrOiAxLCAyLCAuLi4sIDdcbiAgJ0UnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFVUQ0RheSgpIHx8IDdcbiAgfSxcblxuICAvLyBJU08gd2VlazogMSwgMiwgLi4uLCA1M1xuICAnVyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldFVUQ0lTT1dlZWsoZGF0ZSlcbiAgfSxcblxuICAvLyBJU08gd2VlazogMXN0LCAybmQsIC4uLiwgNTN0aFxuICAnV28nOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5sb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGdldFVUQ0lTT1dlZWsoZGF0ZSksIHt1bml0OiAnaXNvV2Vlayd9KVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrOiAwMSwgMDIsIC4uLiwgNTNcbiAgJ1dXJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGdldFVUQ0lTT1dlZWsoZGF0ZSksIDIpXG4gIH0sXG5cbiAgLy8gWWVhcjogMDAsIDAxLCAuLi4sIDk5XG4gICdZWSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0Z1bGxZZWFyKCksIDQpLnN1YnN0cigyKVxuICB9LFxuXG4gIC8vIFllYXI6IDE5MDAsIDE5MDEsIC4uLiwgMjA5OVxuICAnWVlZWSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0Z1bGxZZWFyKCksIDQpXG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IDAwLCAwMSwgLi4uLCA5OVxuICAnR0cnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBTdHJpbmcoZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSkpLnN1YnN0cigyKVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiAxOTAwLCAxOTAxLCAuLi4sIDIwOTlcbiAgJ0dHR0cnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRVVENJU09XZWVrWWVhcihkYXRlKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAsIDEsIC4uLiAyM1xuICAnSCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDSG91cnMoKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAwLCAwMSwgLi4uLCAyM1xuICAnSEgnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCAyKVxuICB9LFxuXG4gIC8vIEhvdXI6IDEsIDIsIC4uLiwgMTJcbiAgJ2gnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIHJldHVybiAxMlxuICAgIH0gZWxzZSBpZiAoaG91cnMgPiAxMikge1xuICAgICAgcmV0dXJuIGhvdXJzICUgMTJcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGhvdXJzXG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXI6IDAxLCAwMiwgLi4uLCAxMlxuICAnaGgnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZm9ybWF0dGVyc1snaCddKGRhdGUpLCAyKVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMCwgMSwgLi4uLCA1OVxuICAnbSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDTWludXRlcygpXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwMCwgMDEsIC4uLiwgNTlcbiAgJ21tJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCAyKVxuICB9LFxuXG4gIC8vIFNlY29uZDogMCwgMSwgLi4uLCA1OVxuICAncyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDU2Vjb25kcygpXG4gIH0sXG5cbiAgLy8gU2Vjb25kOiAwMCwgMDEsIC4uLiwgNTlcbiAgJ3NzJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCAyKVxuICB9LFxuXG4gIC8vIDEvMTAgb2Ygc2Vjb25kOiAwLCAxLCAuLi4sIDlcbiAgJ1MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgLyAxMDApXG4gIH0sXG5cbiAgLy8gMS8xMDAgb2Ygc2Vjb25kOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ1NTJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSAvIDEwKSwgMilcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZDogMDAwLCAwMDEsIC4uLiwgOTk5XG4gICdTU1MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSwgMylcbiAgfSxcblxuICAvLyBUaW1lem9uZTogLTAxOjAwLCArMDA6MDAsIC4uLiArMTI6MDBcbiAgJ1onOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUob3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCksICc6JylcbiAgfSxcblxuICAvLyBUaW1lem9uZTogLTAxMDAsICswMDAwLCAuLi4gKzEyMDBcbiAgJ1paJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wOiA1MTI5Njk1MjBcbiAgJ1gnOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMClcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wOiA1MTI5Njk1MjA5MDBcbiAgJ3gnOiBmdW5jdGlvbiAoZGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICByZXR1cm4gb3JpZ2luYWxEYXRlLmdldFRpbWUoKVxuICB9LFxuXG4gIC8vIEFNLCBQTVxuICAnQSc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLnRpbWVPZkRheShkYXRlLmdldFVUQ0hvdXJzKCksIHt0eXBlOiAndXBwZXJjYXNlJ30pXG4gIH0sXG5cbiAgLy8gYW0sIHBtXG4gICdhJzogZnVuY3Rpb24gKGRhdGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubG9jYWxpemUudGltZU9mRGF5KGRhdGUuZ2V0VVRDSG91cnMoKSwge3R5cGU6ICdsb3dlcmNhc2UnfSlcbiAgfSxcblxuICAvLyBhLm0uLCBwLm0uXG4gICdhYSc6IGZ1bmN0aW9uIChkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLmxvY2FsaXplLnRpbWVPZkRheShkYXRlLmdldFVUQ0hvdXJzKCksIHt0eXBlOiAnbG9uZyd9KVxuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZSAob2Zmc2V0LCBkZWxpbWV0ZXIpIHtcbiAgZGVsaW1ldGVyID0gZGVsaW1ldGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIDIpICsgZGVsaW1ldGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpXG59XG5cbmZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyAobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIG91dHB1dFxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIGFkZFVUQ01pbnV0ZXMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBhbW91bnQgPSBOdW1iZXIoZGlydHlBbW91bnQpO1xuICBkYXRlLnNldFVUQ01pbnV0ZXMoZGF0ZS5nZXRVVENNaW51dGVzKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZVxufVxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvKFxcW1teW10qXSl8KFxcXFwpPyhMVFN8TFR8TExMTHxMTEx8TEx8THxsbGxsfGxsbHxsbHxsKS9nO1xudmFyIGRlZmF1bHRGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gLyhcXFtbXltdKl0pfChcXFxcKT8oeHxzc3xzfG1tfG18aGh8aHxkb3xkZGRkfGRkZHxkZHxkfGFhfGF8Wlp8WnxZWVlZfFlZfFh8V298V1d8V3xTU1N8U1N8U3xRb3xRfE1vfE1NTU18TU1NfE1NfE18SEh8SHxHR0dHfEdHfEV8RG98REREb3xEREREfERERHxERHxEfEF8LikvZztcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC5cbiAqXG4gKiBBY2NlcHRlZCB0b2tlbnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgIHwgVG9rZW4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IE1vbnRoICAgICAgICAgICAgICAgICAgIHwgTSAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciB8XG4gKiB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgIHwgUSAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgIHwgRCAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgIHwgREREICAgfCAxLCAyLCAuLi4sIDM2NiAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREbyAgfCAxc3QsIDJuZCwgLi4uLCAzNjZ0aCAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgfCAwMDEsIDAwMiwgLi4uLCAzNjYgICAgICAgICAgICAgICB8XG4gKiB8IERheSBvZiB3ZWVrICAgICAgICAgICAgIHwgZCAgICAgfCAwLCAxLCAuLi4sIDYgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgfCAwdGgsIDFzdCwgLi4uLCA2dGggICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgfCBTdSwgTW8sIC4uLiwgU2EgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGRkICAgfCBTdW4sIE1vbiwgLi4uLCBTYXQgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGRkZCAgfCBTdW5kYXksIE1vbmRheSwgLi4uLCBTYXR1cmRheSAgICB8XG4gKiB8IERheSBvZiBJU08gd2VlayAgICAgICAgIHwgRSAgICAgfCAxLCAyLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IElTTyB3ZWVrICAgICAgICAgICAgICAgIHwgVyAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgV28gICAgfCAxc3QsIDJuZCwgLi4uLCA1M3JkICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgV1cgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICB8XG4gKiB8IFllYXIgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgfCAxOTAwLCAxOTAxLCAuLi4sIDIwOTkgICAgICAgICAgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIHwgR0cgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgfCAxOTAwLCAxOTAxLCAuLi4sIDIwOTkgICAgICAgICAgICB8XG4gKiB8IEFNL1BNICAgICAgICAgICAgICAgICAgIHwgQSAgICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEhvdXIgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgfCAwLCAxLCAuLi4gMjMgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgfCAwMCwgMDEsIC4uLiAyMyAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgIHwgbSAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgIHwgcyAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IDEvMTAgb2Ygc2Vjb25kICAgICAgICAgIHwgUyAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IDEvMTAwIG9mIHNlY29uZCAgICAgICAgIHwgU1MgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbGxpc2Vjb25kICAgICAgICAgICAgIHwgU1NTICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICB8XG4gKiB8IFRpbWV6b25lICAgICAgICAgICAgICAgIHwgWiAgICAgfCAtMDE6MDAsICswMDowMCwgLi4uICsxMjowMCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgWlogICAgfCAtMDEwMCwgKzAwMDAsIC4uLiwgKzEyMDAgICAgICAgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgIHwgWCAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgIHwgeCAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IExvbmcgZm9ybWF0ICAgICAgICAgICAgIHwgTFQgICAgfCAwNTozMCBhLm0uICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTFRTICAgfCAwNTozMDoxNSBhLm0uICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTCAgICAgfCAwNy8wMi8xOTk1ICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgbCAgICAgfCA3LzIvMTk5NSAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgfCBKdWx5IDIgMTk5NSAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGwgICAgfCBKdWwgMiAxOTk1ICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgfCBKdWx5IDIgMTk5NSAwNTozMCBhLm0uICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGxsICAgfCBKdWwgMiAxOTk1IDA1OjMwIGEubS4gICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgfCBTdW5kYXksIEp1bHkgMiAxOTk1IDA1OjMwIGEubS4gICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGxsbCAgfCBTdW4sIEp1bCAyIDE5OTUgMDU6MzAgYS5tLiAgICAgICB8XG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBpbiBzcXVhcmUgYnJhY2tldHMgYXJlIGVzY2FwZWQuXG4gKlxuICogVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDEsIDExKSxcbiAqICAgJ01NL0REL1lZWVknXG4gKiApXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKSxcbiAqICAgJ0RvIFtkZV0gTU1NTSBZWVlZJyxcbiAqICAge2xvY2FsZTogZW9Mb2NhbGV9XG4gKiApXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqL1xuZnVuY3Rpb24gZm9ybWF0IChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuXG4gIHZhciBsb2NhbGUkJDEgPSBvcHRpb25zLmxvY2FsZSB8fCBsb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUkJDEubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpXG4gIH1cblxuICBpZiAoIWxvY2FsZSQkMS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpXG4gIH1cblxuICB2YXIgbG9jYWxlRm9ybWF0dGVycyA9IGxvY2FsZSQkMS5mb3JtYXR0ZXJzIHx8IHt9O1xuICB2YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IGxvY2FsZSQkMS5mb3JtYXR0aW5nVG9rZW5zUmVnRXhwIHx8IGRlZmF1bHRGb3JtYXR0aW5nVG9rZW5zUmVnRXhwO1xuICB2YXIgZm9ybWF0TG9uZyA9IGxvY2FsZSQkMS5mb3JtYXRMb25nO1xuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBvcHRpb25zKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiAnSW52YWxpZCBEYXRlJ1xuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgdmFyIHV0Y0RhdGUgPSBhZGRVVENNaW51dGVzKG9yaWdpbmFsRGF0ZSwgLXRpbWV6b25lT2Zmc2V0LCBvcHRpb25zKTtcblxuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpO1xuICBmb3JtYXR0ZXJPcHRpb25zLmxvY2FsZSA9IGxvY2FsZSQkMTtcbiAgZm9ybWF0dGVyT3B0aW9ucy5mb3JtYXR0ZXJzID0gZm9ybWF0dGVycztcblxuICAvLyBXaGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHdpbGwgbGlrZWx5IGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJLlxuICAvLyBSaWdodCBub3csIHBsZWFzZSBkb24ndCB1c2UgaXQgaW4gbG9jYWxlcy4gSWYgeW91IGhhdmUgdG8gdXNlIGFuIG9yaWdpbmFsIGRhdGUsXG4gIC8vIHBsZWFzZSByZXN0b3JlIGl0IGZyb20gYGRhdGVgLCBhZGRpbmcgYSB0aW1lem9uZSBvZmZzZXQgdG8gaXQuXG4gIGZvcm1hdHRlck9wdGlvbnMuX29yaWdpbmFsRGF0ZSA9IG9yaWdpbmFsRGF0ZTtcblxuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyXG4gICAgLnJlcGxhY2UobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAsIGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAgIGlmIChzdWJzdHJpbmdbMF0gPT09ICdbJykge1xuICAgICAgICByZXR1cm4gc3Vic3RyaW5nXG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJzdHJpbmdbMF0gPT09ICdcXFxcJykge1xuICAgICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcoc3Vic3RyaW5nKVxuICAgIH0pXG4gICAgLnJlcGxhY2UoZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCwgZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGxvY2FsZUZvcm1hdHRlcnNbc3Vic3RyaW5nXSB8fCBmb3JtYXR0ZXJzW3N1YnN0cmluZ107XG5cbiAgICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBmb3JtYXR0ZXJPcHRpb25zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcgKGlucHV0KSB7XG4gIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfF0kL2csICcnKVxuICB9XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKVxufVxuXG4vKipcbiAqIEBuYW1lIHN1Yk1pbnV0ZXNcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWludXRlcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWludXRlcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWludXRlcyB0byBiZSBzdWJ0cmFjdGVkXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWludHVlcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCAzMCBtaW51dGVzIGZyb20gMTAgSnVseSAyMDE0IDEyOjAwOjAwOlxuICogdmFyIHJlc3VsdCA9IHN1Yk1pbnV0ZXMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCAwKSwgMzApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMTozMDowMFxuICovXG5mdW5jdGlvbiBzdWJNaW51dGVzIChkaXJ0eURhdGUsIGRpcnR5QW1vdW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaW51dGVzKGRpcnR5RGF0ZSwgLWFtb3VudCwgZGlydHlPcHRpb25zKVxufVxuXG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogdmFyIHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNBZnRlciAoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKClcbn1cblxuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIHZhciByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCZWZvcmUgKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpXG59XG5cbi8qKlxuICogQG5hbWUgaXNFcXVhbFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGVxdWFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnMuIFNlZSBbT3B0aW9uc117QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9PcHRpb25zfVxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHBhc3NlZCB0byBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgZXF1YWxcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIEp1bHkgMjAxNCAwNjozMDo0NS4wMDAgYW5kIDIgSnVseSAyMDE0IDA2OjMwOjQ1LjUwMCBlcXVhbD9cbiAqIHZhciByZXN1bHQgPSBpc0VxdWFsKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDApXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDMwLCA0NSwgNTAwKVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsJDEgKGRpcnR5TGVmdERhdGUsIGRpcnR5UmlnaHREYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5TGVmdERhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlSaWdodERhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRUaW1lKCkgPT09IGRhdGVSaWdodC5nZXRUaW1lKClcbn1cblxudmFyIHBhdHRlcm5zJDEgPSB7XG4gICdNJzogL14oMVswLTJdfDA/XFxkKS8sIC8vIDAgdG8gMTJcbiAgJ0QnOiAvXigzWzAtMV18WzAtMl0/XFxkKS8sIC8vIDAgdG8gMzFcbiAgJ0RERCc6IC9eKDM2WzAtNl18M1swLTVdXFxkfFswLTJdP1xcZD9cXGQpLywgLy8gMCB0byAzNjZcbiAgJ1cnOiAvXig1WzAtM118WzAtNF0/XFxkKS8sIC8vIDAgdG8gNTNcbiAgJ1lZWVknOiAvXihcXGR7MSw0fSkvLCAvLyAwIHRvIDk5OTlcbiAgJ0gnOiAvXigyWzAtM118WzAtMV0/XFxkKS8sIC8vIDAgdG8gMjNcbiAgJ20nOiAvXihbMC01XT9cXGQpLywgLy8gMCB0byA1OVxuICAnWic6IC9eKFsrLV0pKFxcZHsyfSk6KFxcZHsyfSkvLFxuICAnWlonOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSkvLFxuICBzaW5nbGVEaWdpdDogL14oXFxkKS8sXG4gIHR3b0RpZ2l0czogL14oXFxkezJ9KS8sXG4gIHRocmVlRGlnaXRzOiAvXihcXGR7M30pLyxcbiAgZm91ckRpZ2l0czogL14oXFxkezR9KS8sXG4gIGFueURpZ2l0czogL14oXFxkKykvXG59O1xuXG5mdW5jdGlvbiBwYXJzZURlY2ltYWwkMSAobWF0Y2hSZXN1bHQpIHtcbiAgcmV0dXJuIHBhcnNlSW50KG1hdGNoUmVzdWx0WzFdLCAxMClcbn1cblxudmFyIHBhcnNlcnMgPSB7XG4gIC8vIFllYXI6IDAwLCAwMSwgLi4uLCA5OVxuICAnWVknOiB7XG4gICAgdW5pdDogJ3R3b0RpZ2l0WWVhcicsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudHdvRGlnaXRzLFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwkMShtYXRjaFJlc3VsdClcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhcjogMTkwMCwgMTkwMSwgLi4uLCAyMDk5XG4gICdZWVlZJzoge1xuICAgIHVuaXQ6ICd5ZWFyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5ZWVlZLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ0dHJzoge1xuICAgIHVuaXQ6ICdpc29ZZWFyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCQxKG1hdGNoUmVzdWx0KSArIDE5MDBcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IDE5MDAsIDE5MDEsIC4uLiwgMjA5OVxuICAnR0dHRyc6IHtcbiAgICB1bml0OiAnaXNvWWVhcicsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuWVlZWSxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBRdWFydGVyOiAxLCAyLCAzLCA0XG4gICdRJzoge1xuICAgIHVuaXQ6ICdxdWFydGVyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5zaW5nbGVEaWdpdCxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBPcmRpbmFsIHF1YXJ0ZXJcbiAgJ1FvJzoge1xuICAgIHVuaXQ6ICdxdWFydGVyJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKHN0cmluZywge3VuaXQ6ICdxdWFydGVyJ30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcihtYXRjaFJlc3VsdCwge3VuaXQ6ICdxdWFydGVyJ30pXG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoOiAxLCAyLCAuLi4sIDEyXG4gICdNJzoge1xuICAgIHVuaXQ6ICdtb250aCcsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuTSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gcGFyc2VEZWNpbWFsJDEobWF0Y2hSZXN1bHQpIC0gMVxuICAgIH1cbiAgfSxcblxuICAvLyBPcmRpbmFsIG1vbnRoXG4gICdNbyc6IHtcbiAgICB1bml0OiAnbW9udGgnLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcnMoc3RyaW5nLCB7dW5pdDogJ21vbnRoJ30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcihtYXRjaFJlc3VsdCwge3VuaXQ6ICdtb250aCd9KSAtIDFcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGg6IDAxLCAwMiwgLi4uLCAxMlxuICAnTU0nOiB7XG4gICAgdW5pdDogJ21vbnRoJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCQxKG1hdGNoUmVzdWx0KSAtIDFcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGg6IEphbiwgRmViLCAuLi4sIERlY1xuICAnTU1NJzoge1xuICAgIHVuaXQ6ICdtb250aCcsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5tb250aHMoc3RyaW5nLCB7dHlwZTogJ3Nob3J0J30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gubW9udGgobWF0Y2hSZXN1bHQsIHt0eXBlOiAnc2hvcnQnfSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGg6IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICdNTU1NJzoge1xuICAgIHVuaXQ6ICdtb250aCcsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5tb250aHMoc3RyaW5nLCB7dHlwZTogJ2xvbmcnfSkgfHxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUubWF0Y2gubW9udGhzKHN0cmluZywge3R5cGU6ICdzaG9ydCd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgdmFyIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gubW9udGgobWF0Y2hSZXN1bHQsIHt0eXBlOiAnbG9uZyd9KTtcblxuICAgICAgaWYgKHBhcnNlUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC5tb250aChtYXRjaFJlc3VsdCwge3R5cGU6ICdzaG9ydCd9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlUmVzdWx0XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrOiAxLCAyLCAuLi4sIDUzXG4gICdXJzoge1xuICAgIHVuaXQ6ICdpc29XZWVrJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5XLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIE9yZGluYWwgSVNPIHdlZWtcbiAgJ1dvJzoge1xuICAgIHVuaXQ6ICdpc29XZWVrJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKHN0cmluZywge3VuaXQ6ICdpc29XZWVrJ30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gub3JkaW5hbE51bWJlcihtYXRjaFJlc3VsdCwge3VuaXQ6ICdpc29XZWVrJ30pXG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrOiAwMSwgMDIsIC4uLiwgNTNcbiAgJ1dXJzoge1xuICAgIHVuaXQ6ICdpc29XZWVrJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IDAsIDEsIC4uLiwgNlxuICAnZCc6IHtcbiAgICB1bml0OiAnZGF5T2ZXZWVrJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5zaW5nbGVEaWdpdCxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBPcmRpbmFsIGRheSBvZiB3ZWVrXG4gICdkbyc6IHtcbiAgICB1bml0OiAnZGF5T2ZXZWVrJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKHN0cmluZywge3VuaXQ6ICdkYXlPZldlZWsnfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVyKG1hdGNoUmVzdWx0LCB7dW5pdDogJ2RheU9mV2Vlayd9KVxuICAgIH1cbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3UsIE1vLCAuLi4sIFNhXG4gICdkZCc6IHtcbiAgICB1bml0OiAnZGF5T2ZXZWVrJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXlzKHN0cmluZywge3R5cGU6ICduYXJyb3cnfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ25hcnJvdyd9KVxuICAgIH1cbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3VuLCBNb24sIC4uLiwgU2F0XG4gICdkZGQnOiB7XG4gICAgdW5pdDogJ2RheU9mV2VlaycsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5cyhzdHJpbmcsIHt0eXBlOiAnc2hvcnQnfSkgfHxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheXMoc3RyaW5nLCB7dHlwZTogJ25hcnJvdyd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgdmFyIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheShtYXRjaFJlc3VsdCwge3R5cGU6ICdzaG9ydCd9KTtcblxuICAgICAgaWYgKHBhcnNlUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ25hcnJvdyd9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlUmVzdWx0XG4gICAgfVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdW5kYXksIE1vbmRheSwgLi4uLCBTYXR1cmRheVxuICAnZGRkZCc6IHtcbiAgICB1bml0OiAnZGF5T2ZXZWVrJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXlzKHN0cmluZywge3R5cGU6ICdsb25nJ30pIHx8XG4gICAgICAgIG9wdGlvbnMubG9jYWxlLm1hdGNoLndlZWtkYXlzKHN0cmluZywge3R5cGU6ICdzaG9ydCd9KSB8fFxuICAgICAgICBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5cyhzdHJpbmcsIHt0eXBlOiAnbmFycm93J30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICB2YXIgcGFyc2VSZXN1bHQgPSBvcHRpb25zLmxvY2FsZS5tYXRjaC53ZWVrZGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ2xvbmcnfSk7XG5cbiAgICAgIGlmIChwYXJzZVJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheShtYXRjaFJlc3VsdCwge3R5cGU6ICdzaG9ydCd9KTtcblxuICAgICAgICBpZiAocGFyc2VSZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gud2Vla2RheShtYXRjaFJlc3VsdCwge3R5cGU6ICduYXJyb3cnfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlUmVzdWx0XG4gICAgfVxuICB9LFxuXG4gIC8vIERheSBvZiBJU08gd2VlazogMSwgMiwgLi4uLCA3XG4gICdFJzoge1xuICAgIHVuaXQ6ICdkYXlPZklTT1dlZWsnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnNpbmdsZURpZ2l0LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwkMShtYXRjaFJlc3VsdClcbiAgICB9XG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAxLCAyLCAuLi4sIDMxXG4gICdEJzoge1xuICAgIHVuaXQ6ICdkYXlPZk1vbnRoJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5ELFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIE9yZGluYWwgZGF5IG9mIG1vbnRoXG4gICdEbyc6IHtcbiAgICB1bml0OiAnZGF5T2ZNb250aCcsXG4gICAgbWF0Y2g6IGZ1bmN0aW9uIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVycyhzdHJpbmcsIHt1bml0OiAnZGF5T2ZNb250aCd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXIobWF0Y2hSZXN1bHQsIHt1bml0OiAnZGF5T2ZNb250aCd9KVxuICAgIH1cbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDAxLCAwMiwgLi4uLCAzMVxuICAnREQnOiB7XG4gICAgdW5pdDogJ2RheU9mTW9udGgnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMSwgMiwgLi4uLCAzNjZcbiAgJ0RERCc6IHtcbiAgICB1bml0OiAnZGF5T2ZZZWFyJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5EREQsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gT3JkaW5hbCBkYXkgb2YgeWVhclxuICAnREREbyc6IHtcbiAgICB1bml0OiAnZGF5T2ZZZWFyJyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLm9yZGluYWxOdW1iZXJzKHN0cmluZywge3VuaXQ6ICdkYXlPZlllYXInfSlcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmxvY2FsZS5tYXRjaC5vcmRpbmFsTnVtYmVyKG1hdGNoUmVzdWx0LCB7dW5pdDogJ2RheU9mWWVhcid9KVxuICAgIH1cbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMDAxLCAwMDIsIC4uLiwgMzY2XG4gICdEREREJzoge1xuICAgIHVuaXQ6ICdkYXlPZlllYXInLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnRocmVlRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIEFNLCBQTVxuICAnQSc6IHtcbiAgICB1bml0OiAndGltZU9mRGF5JyxcbiAgICBtYXRjaDogZnVuY3Rpb24gKHN0cmluZywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMubG9jYWxlLm1hdGNoLnRpbWVzT2ZEYXkoc3RyaW5nLCB7dHlwZTogJ3Nob3J0J30pXG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gudGltZU9mRGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ3Nob3J0J30pXG4gICAgfVxuICB9LFxuXG4gIC8vIGEubS4sIHAubS5cbiAgJ2FhJzoge1xuICAgIHVuaXQ6ICd0aW1lT2ZEYXknLFxuICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sb2NhbGUubWF0Y2gudGltZXNPZkRheShzdHJpbmcsIHt0eXBlOiAnbG9uZyd9KSB8fFxuICAgICAgICBvcHRpb25zLmxvY2FsZS5tYXRjaC50aW1lc09mRGF5KHN0cmluZywge3R5cGU6ICdzaG9ydCd9KVxuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCwgb3B0aW9ucykge1xuICAgICAgdmFyIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gudGltZU9mRGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ2xvbmcnfSk7XG5cbiAgICAgIGlmIChwYXJzZVJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlUmVzdWx0ID0gb3B0aW9ucy5sb2NhbGUubWF0Y2gudGltZU9mRGF5KG1hdGNoUmVzdWx0LCB7dHlwZTogJ3Nob3J0J30pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VSZXN1bHRcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91cjogMCwgMSwgLi4uIDIzXG4gICdIJzoge1xuICAgIHVuaXQ6ICdob3VycycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEuSCxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBIb3VyOiAwMCwgMDEsIC4uLiwgMjNcbiAgJ0hIJzoge1xuICAgIHVuaXQ6ICdob3VycycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudHdvRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIEhvdXI6IDEsIDIsIC4uLiwgMTJcbiAgJ2gnOiB7XG4gICAgdW5pdDogJ3RpbWVPZkRheUhvdXJzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5NLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIEhvdXI6IDAxLCAwMiwgLi4uLCAxMlxuICAnaGgnOiB7XG4gICAgdW5pdDogJ3RpbWVPZkRheUhvdXJzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS50d29EaWdpdHMsXG4gICAgcGFyc2U6IHBhcnNlRGVjaW1hbCQxXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwLCAxLCAuLi4sIDU5XG4gICdtJzoge1xuICAgIHVuaXQ6ICdtaW51dGVzJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5tLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMDAsIDAxLCAuLi4sIDU5XG4gICdtbSc6IHtcbiAgICB1bml0OiAnbWludXRlcycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEudHdvRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIFNlY29uZDogMCwgMSwgLi4uLCA1OVxuICAncyc6IHtcbiAgICB1bml0OiAnc2Vjb25kcycsXG4gICAgbWF0Y2g6IHBhdHRlcm5zJDEubSxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAwLCAwMSwgLi4uLCA1OVxuICAnc3MnOiB7XG4gICAgdW5pdDogJ3NlY29uZHMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfSxcblxuICAvLyAxLzEwIG9mIHNlY29uZDogMCwgMSwgLi4uLCA5XG4gICdTJzoge1xuICAgIHVuaXQ6ICdtaWxsaXNlY29uZHMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnNpbmdsZURpZ2l0LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBwYXJzZURlY2ltYWwkMShtYXRjaFJlc3VsdCkgKiAxMDBcbiAgICB9XG4gIH0sXG5cbiAgLy8gMS8xMDAgb2Ygc2Vjb25kOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ1NTJzoge1xuICAgIHVuaXQ6ICdtaWxsaXNlY29uZHMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnR3b0RpZ2l0cyxcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gcGFyc2VEZWNpbWFsJDEobWF0Y2hSZXN1bHQpICogMTBcbiAgICB9XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmQ6IDAwMCwgMDAxLCAuLi4sIDk5OVxuICAnU1NTJzoge1xuICAgIHVuaXQ6ICdtaWxsaXNlY29uZHMnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLnRocmVlRGlnaXRzLFxuICAgIHBhcnNlOiBwYXJzZURlY2ltYWwkMVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDE6MDAsICswMDowMCwgLi4uICsxMjowMFxuICAnWic6IHtcbiAgICB1bml0OiAndGltZXpvbmUnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLlosXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgdmFyIHNpZ24gPSBtYXRjaFJlc3VsdFsxXTtcbiAgICAgIHZhciBob3VycyA9IHBhcnNlSW50KG1hdGNoUmVzdWx0WzJdLCAxMCk7XG4gICAgICB2YXIgbWludXRlcyA9IHBhcnNlSW50KG1hdGNoUmVzdWx0WzNdLCAxMCk7XG4gICAgICB2YXIgYWJzb2x1dGVPZmZzZXQgPSBob3VycyAqIDYwICsgbWludXRlcztcbiAgICAgIHJldHVybiAoc2lnbiA9PT0gJysnKSA/IGFic29sdXRlT2Zmc2V0IDogLWFic29sdXRlT2Zmc2V0XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDEwMCwgKzAwMDAsIC4uLiArMTIwMFxuICAnWlonOiB7XG4gICAgdW5pdDogJ3RpbWV6b25lJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5aWixcbiAgICBwYXJzZTogZnVuY3Rpb24gKG1hdGNoUmVzdWx0KSB7XG4gICAgICB2YXIgc2lnbiA9IG1hdGNoUmVzdWx0WzFdO1xuICAgICAgdmFyIGhvdXJzID0gcGFyc2VJbnQobWF0Y2hSZXN1bHRbMl0sIDEwKTtcbiAgICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQobWF0Y2hSZXN1bHRbM10sIDEwKTtcbiAgICAgIHZhciBhYnNvbHV0ZU9mZnNldCA9IGhvdXJzICogNjAgKyBtaW51dGVzO1xuICAgICAgcmV0dXJuIChzaWduID09PSAnKycpID8gYWJzb2x1dGVPZmZzZXQgOiAtYWJzb2x1dGVPZmZzZXRcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMFxuICAnWCc6IHtcbiAgICB1bml0OiAndGltZXN0YW1wJyxcbiAgICBtYXRjaDogcGF0dGVybnMkMS5hbnlEaWdpdHMsXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHBhcnNlRGVjaW1hbCQxKG1hdGNoUmVzdWx0KSAqIDEwMDBcbiAgICB9XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwOTAwXG4gICd4Jzoge1xuICAgIHVuaXQ6ICd0aW1lc3RhbXAnLFxuICAgIG1hdGNoOiBwYXR0ZXJucyQxLmFueURpZ2l0cyxcbiAgICBwYXJzZTogcGFyc2VEZWNpbWFsJDFcbiAgfVxufTtcblxucGFyc2Vyc1snYSddID0gcGFyc2Vyc1snQSddO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIHNldFVUQ0RheSAoZGlydHlEYXRlLCBkaXJ0eURheSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PT0gdW5kZWZpbmVkID8gMCA6IE51bWJlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiBOdW1iZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKVxuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF5ID0gTnVtYmVyKGRpcnR5RGF5KTtcblxuICB2YXIgY3VycmVudERheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgdmFyIHJlbWFpbmRlciA9IGRheSAlIDc7XG4gIHZhciBkYXlJbmRleCA9IChyZW1haW5kZXIgKyA3KSAlIDc7XG5cbiAgdmFyIGRpZmYgPSAoZGF5SW5kZXggPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSBjdXJyZW50RGF5O1xuXG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbmZ1bmN0aW9uIHNldFVUQ0lTT0RheSAoZGlydHlEYXRlLCBkaXJ0eURheSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBkYXkgPSBOdW1iZXIoZGlydHlEYXkpO1xuXG4gIGlmIChkYXkgJSA3ID09PSAwKSB7XG4gICAgZGF5ID0gZGF5IC0gNztcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBjdXJyZW50RGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICB2YXIgcmVtYWluZGVyID0gZGF5ICUgNztcbiAgdmFyIGRheUluZGV4ID0gKHJlbWFpbmRlciArIDcpICUgNztcblxuICB2YXIgZGlmZiA9IChkYXlJbmRleCA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIGN1cnJlbnREYXk7XG5cbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gc2V0VVRDSVNPV2VlayAoZGlydHlEYXRlLCBkaXJ0eUlTT1dlZWssIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBpc29XZWVrID0gTnVtYmVyKGRpcnR5SVNPV2Vlayk7XG4gIHZhciBkaWZmID0gZ2V0VVRDSVNPV2VlayhkYXRlLCBkaXJ0eU9wdGlvbnMpIC0gaXNvV2VlaztcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZiAqIDcpO1xuICByZXR1cm4gZGF0ZVxufVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSQzID0gODY0MDAwMDA7XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuZnVuY3Rpb24gc2V0VVRDSVNPV2Vla1llYXIgKGRpcnR5RGF0ZSwgZGlydHlJU09ZZWFyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgaXNvWWVhciA9IE51bWJlcihkaXJ0eUlTT1llYXIpO1xuICB2YXIgZGF0ZVN0YXJ0T2ZZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkaWZmID0gTWF0aC5mbG9vcigoZGF0ZS5nZXRUaW1lKCkgLSBkYXRlU3RhcnRPZlllYXIuZ2V0VGltZSgpKSAvIE1JTExJU0VDT05EU19JTl9EQVkkMyk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKGlzb1llYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZm91cnRoT2ZKYW51YXJ5LCBkaXJ0eU9wdGlvbnMpO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGVcbn1cblxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUkNyA9IDYwMDAwO1xuXG5mdW5jdGlvbiBzZXRUaW1lT2ZEYXkgKGhvdXJzLCB0aW1lT2ZEYXkpIHtcbiAgdmFyIGlzQU0gPSB0aW1lT2ZEYXkgPT09IDA7XG5cbiAgaWYgKGlzQU0pIHtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaG91cnMgIT09IDEyKSB7XG4gICAgICByZXR1cm4gMTIgKyBob3Vyc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBob3Vyc1xufVxuXG52YXIgdW5pdHMgPSB7XG4gIHR3b0RpZ2l0WWVhcjoge1xuICAgIHByaW9yaXR5OiAxMCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgdmFyIGNlbnR1cnkgPSBNYXRoLmZsb29yKGRhdGVWYWx1ZXMuZGF0ZS5nZXRVVENGdWxsWWVhcigpIC8gMTAwKTtcbiAgICAgIHZhciB5ZWFyID0gY2VudHVyeSAqIDEwMCArIHZhbHVlO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDEpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgeWVhcjoge1xuICAgIHByaW9yaXR5OiAxMCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCAwLCAxKTtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIGlzb1llYXI6IHtcbiAgICBwcmlvcml0eTogMTAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrWWVhcihzZXRVVENJU09XZWVrWWVhcihkYXRlVmFsdWVzLmRhdGUsIHZhbHVlLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICBxdWFydGVyOiB7XG4gICAgcHJpb3JpdHk6IDIwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDTW9udGgoKHZhbHVlIC0gMSkgKiAzLCAxKTtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIG1vbnRoOiB7XG4gICAgcHJpb3JpdHk6IDMwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDTW9udGgodmFsdWUsIDEpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgaXNvV2Vlazoge1xuICAgIHByaW9yaXR5OiA0MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoc2V0VVRDSVNPV2VlayhkYXRlVmFsdWVzLmRhdGUsIHZhbHVlLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICBkYXlPZldlZWs6IHtcbiAgICBwcmlvcml0eTogNTAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZSA9IHNldFVUQ0RheShkYXRlVmFsdWVzLmRhdGUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIGRheU9mSVNPV2Vlazoge1xuICAgIHByaW9yaXR5OiA1MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlID0gc2V0VVRDSVNPRGF5KGRhdGVWYWx1ZXMuZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgZGF5T2ZNb250aDoge1xuICAgIHByaW9yaXR5OiA1MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0RhdGUodmFsdWUpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgZGF5T2ZZZWFyOiB7XG4gICAgcHJpb3JpdHk6IDUwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUuc2V0VVRDTW9udGgoMCwgdmFsdWUpO1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgdGltZU9mRGF5OiB7XG4gICAgcHJpb3JpdHk6IDYwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBkYXRlVmFsdWVzLnRpbWVPZkRheSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgaG91cnM6IHtcbiAgICBwcmlvcml0eTogNzAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZVZhbHVlc1xuICAgIH1cbiAgfSxcblxuICB0aW1lT2ZEYXlIb3Vyczoge1xuICAgIHByaW9yaXR5OiA3MCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgdmFyIHRpbWVPZkRheSA9IGRhdGVWYWx1ZXMudGltZU9mRGF5O1xuICAgICAgaWYgKHRpbWVPZkRheSAhPSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gc2V0VGltZU9mRGF5KHZhbHVlLCB0aW1lT2ZEYXkpO1xuICAgICAgfVxuICAgICAgZGF0ZVZhbHVlcy5kYXRlLnNldFVUQ0hvdXJzKHZhbHVlLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIG1pbnV0ZXM6IHtcbiAgICBwcmlvcml0eTogODAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENNaW51dGVzKHZhbHVlLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIHNlY29uZHM6IHtcbiAgICBwcmlvcml0eTogOTAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENTZWNvbmRzKHZhbHVlLCAwKTtcbiAgICAgIHJldHVybiBkYXRlVmFsdWVzXG4gICAgfVxuICB9LFxuXG4gIG1pbGxpc2Vjb25kczoge1xuICAgIHByaW9yaXR5OiAxMDAsXG4gICAgc2V0OiBmdW5jdGlvbiAoZGF0ZVZhbHVlcywgdmFsdWUpIHtcbiAgICAgIGRhdGVWYWx1ZXMuZGF0ZS5zZXRVVENNaWxsaXNlY29uZHModmFsdWUpO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgdGltZXpvbmU6IHtcbiAgICBwcmlvcml0eTogMTEwLFxuICAgIHNldDogZnVuY3Rpb24gKGRhdGVWYWx1ZXMsIHZhbHVlKSB7XG4gICAgICBkYXRlVmFsdWVzLmRhdGUgPSBuZXcgRGF0ZShkYXRlVmFsdWVzLmRhdGUuZ2V0VGltZSgpIC0gdmFsdWUgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFJDcpO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH0sXG5cbiAgdGltZXN0YW1wOiB7XG4gICAgcHJpb3JpdHk6IDEyMCxcbiAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlVmFsdWVzLCB2YWx1ZSkge1xuICAgICAgZGF0ZVZhbHVlcy5kYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgcmV0dXJuIGRhdGVWYWx1ZXNcbiAgICB9XG4gIH1cbn07XG5cbnZhciBUSU1FWk9ORV9VTklUX1BSSU9SSVRZID0gMTEwO1xudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUkNiA9IDYwMDAwO1xuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAkMSA9IC8oXFxbW15bXSpdKXwoXFxcXCk/KExUU3xMVHxMTExMfExMTHxMTHxMfGxsbGx8bGxsfGxsfGwpL2c7XG52YXIgZGVmYXVsdFBhcnNpbmdUb2tlbnNSZWdFeHAgPSAvKFxcW1teW10qXSl8KFxcXFwpPyh4fHNzfHN8bW18bXxoaHxofGRvfGRkZGR8ZGRkfGRkfGR8YWF8YXxaWnxafFlZWVl8WVl8WHxXb3xXV3xXfFNTU3xTU3xTfFFvfFF8TW98TU1NTXxNTU18TU18TXxISHxIfEdHR0d8R0d8RXxEb3xERERvfERERER8REREfEREfER8QXwuKS9nO1xuXG4vKipcbiAqIEBuYW1lIHBhcnNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkYXRlIHBhcnNlZCBmcm9tIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gZm9ybWF0LlxuICpcbiAqIEFjY2VwdGVkIGZvcm1hdCB0b2tlbnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgIHwgUHJpb3JpdHkgfCBUb2tlbiB8IElucHV0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCBZZWFyICAgICAgICAgICAgICAgICAgICB8IDEwICAgICAgIHwgWVkgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBZWVlZICB8IDE5MDAsIDE5MDEsIC4uLiwgMjA5OSAgICAgICAgICAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgfCAxMCAgICAgICB8IEdHICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgR0dHRyAgfCAxOTAwLCAxOTAxLCAuLi4sIDIwOTkgICAgICAgICAgICB8XG4gKiB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgIHwgMjAgICAgICAgfCBRICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IFFvICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgfFxuICogfCBNb250aCAgICAgICAgICAgICAgICAgICB8IDMwICAgICAgIHwgTSAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBNbyAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IE1NICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgTU1NICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBNTU1NICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyIHxcbiAqIHwgSVNPIHdlZWsgICAgICAgICAgICAgICAgfCA0MCAgICAgICB8IFcgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgV28gICAgfCAxc3QsIDJuZCwgLi4uLCA1M3JkICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBXVyAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgfCA1MCAgICAgICB8IGQgICAgIHwgMCwgMSwgLi4uLCA2ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgZG8gICAgfCAwdGgsIDFzdCwgLi4uLCA2dGggICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBkZCAgICB8IFN1LCBNbywgLi4uLCBTYSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IGRkZCAgIHwgU3VuLCBNb24sIC4uLiwgU2F0ICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgZGRkZCAgfCBTdW5kYXksIE1vbmRheSwgLi4uLCBTYXR1cmRheSAgICB8XG4gKiB8IERheSBvZiBJU08gd2VlayAgICAgICAgIHwgNTAgICAgICAgfCBFICAgICB8IDEsIDIsIC4uLiwgNyAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgfCA1MCAgICAgICB8IEQgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgRG8gICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBERCAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgfCA1MCAgICAgICB8IERERCAgIHwgMSwgMiwgLi4uLCAzNjYgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgREREbyAgfCAxc3QsIDJuZCwgLi4uLCAzNjZ0aCAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBEREREICB8IDAwMSwgMDAyLCAuLi4sIDM2NiAgICAgICAgICAgICAgIHxcbiAqIHwgVGltZSBvZiBkYXkgICAgICAgICAgICAgfCA2MCAgICAgICB8IEEgICAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgSG91ciAgICAgICAgICAgICAgICAgICAgfCA3MCAgICAgICB8IEggICAgIHwgMCwgMSwgLi4uIDIzICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgSEggICAgfCAwMCwgMDEsIC4uLiAyMyAgICAgICAgICAgICAgICAgICB8XG4gKiB8IFRpbWUgb2YgZGF5IGhvdXIgICAgICAgIHwgNzAgICAgICAgfCBoICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IGhoICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICB8IDgwICAgICAgIHwgbSAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgfCBtbSAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgfCA5MCAgICAgICB8IHMgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgIHwgc3MgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IDEvMTAgb2Ygc2Vjb25kICAgICAgICAgIHwgMTAwICAgICAgfCBTICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgMS8xMDAgb2Ygc2Vjb25kICAgICAgICAgfCAxMDAgICAgICB8IFNTICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgfFxuICogfCBNaWxsaXNlY29uZCAgICAgICAgICAgICB8IDEwMCAgICAgIHwgU1NTICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICB8XG4gKiB8IFRpbWV6b25lICAgICAgICAgICAgICAgIHwgMTEwICAgICAgfCBaICAgICB8IC0wMTowMCwgKzAwOjAwLCAuLi4gKzEyOjAwICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICB8IFpaICAgIHwgLTAxMDAsICswMDAwLCAuLi4sICsxMjAwICAgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICB8IDEyMCAgICAgIHwgWCAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgIHwgMTIwICAgICAgfCB4ICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBWYWx1ZXMgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgZGF0ZSBpbiB0aGUgYXNjZW5kaW5nIG9yZGVyIG9mIGl0cyB1bml0J3MgcHJpb3JpdHkuXG4gKiBVbml0cyBvZiBhbiBlcXVhbCBwcmlvcml0eSBvdmVyd3JpdGUgZWFjaCBvdGhlciBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZS5cbiAqXG4gKiBJZiBubyB2YWx1ZXMgb2YgaGlnaGVyIHByaW9yaXR5IGFyZSBwYXJzZWQgKGUuZy4gd2hlbiBwYXJzaW5nIHN0cmluZyAnSmFudWFyeSAxc3QnIHdpdGhvdXQgYSB5ZWFyKSxcbiAqIHRoZSB2YWx1ZXMgd2lsbCBiZSB0YWtlbiBmcm9tIDNyZCBhcmd1bWVudCBgYmFzZURhdGVgIHdoaWNoIHdvcmtzIGFzIGEgY29udGV4dCBvZiBwYXJzaW5nLlxuICpcbiAqIGBiYXNlRGF0ZWAgbXVzdCBiZSBwYXNzZWQgZm9yIGNvcnJlY3Qgd29yayBvZiB0aGUgZnVuY3Rpb24uXG4gKiBJZiB5b3UncmUgbm90IHN1cmUgd2hpY2ggYGJhc2VEYXRlYCB0byBzdXBwbHksIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBEYXRlOlxuICogYHBhcnNlKCcwMi8xMS8yMDE0JywgJ01NL0REL1lZWVknLCBuZXcgRGF0ZSgpKWBcbiAqIEluIHRoaXMgY2FzZSBwYXJzaW5nIHdpbGwgYmUgZG9uZSBpbiB0aGUgY29udGV4dCBvZiB0aGUgY3VycmVudCBkYXRlLlxuICogSWYgYGJhc2VEYXRlYCBpcyBgSW52YWxpZCBEYXRlYCBvciBhIHZhbHVlIG5vdCBjb252ZXJ0aWJsZSB0byB2YWxpZCBgRGF0ZWAsXG4gKiB0aGVuIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQWxzbywgYHBhcnNlYCB1bmZvbGRzIGxvbmcgZm9ybWF0cyBsaWtlIHRob3NlIGluIFtmb3JtYXRde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZm9ybWF0fTpcbiAqIHwgVG9rZW4gfCBJbnB1dCBleGFtcGxlcyAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IExUICAgIHwgMDU6MzAgYS5tLiAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTFRTICAgfCAwNTozMDoxNSBhLm0uICAgICAgICAgICAgICAgICAgfFxuICogfCBMICAgICB8IDA3LzAyLzE5OTUgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGwgICAgIHwgNy8yLzE5OTUgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgTEwgICAgfCBKdWx5IDIgMTk5NSAgICAgICAgICAgICAgICAgICAgfFxuICogfCBsbCAgICB8IEp1bCAyIDE5OTUgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IExMTCAgIHwgSnVseSAyIDE5OTUgMDU6MzAgYS5tLiAgICAgICAgIHxcbiAqIHwgbGxsICAgfCBKdWwgMiAxOTk1IDA1OjMwIGEubS4gICAgICAgICAgfFxuICogfCBMTExMICB8IFN1bmRheSwgSnVseSAyIDE5OTUgMDU6MzAgYS5tLiB8XG4gKiB8IGxsbGwgIHwgU3VuLCBKdWwgMiAxOTk1IDA1OjMwIGEubS4gICAgIHxcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGluIHNxdWFyZSBicmFja2V0cyBpbiB0aGUgZm9ybWF0IHN0cmluZyBhcmUgZXNjYXBlZC5cbiAqXG4gKiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiBJZiBgZm9ybWF0U3RyaW5nYCBtYXRjaGVzIHdpdGggYGRhdGVTdHJpbmdgIGJ1dCBkb2VzIG5vdCBwcm92aWRlcyB0b2tlbnMsIGBiYXNlRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBJZiBwYXJzaW5nIGZhaWxlZCwgYEludmFsaWQgRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGVTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0U3RyaW5nIC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIHRvb2sgdGhlIG1pc3NpbmcgaGlnaGVyIHByaW9yaXR5IHZhbHVlcyBmcm9tXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbWF0Y2hgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUGFyc2UgMTEgRmVicnVhcnkgMjAxNCBmcm9tIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IHBhcnNlKFxuICogICAnMDIvMTEvMjAxNCcsXG4gKiAgICdNTS9ERC9ZWVlZJyxcbiAqICAgbmV3IERhdGUoKVxuICogKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUGFyc2UgMjh0aCBvZiBGZWJydWFyeSBpbiBFbmdsaXNoIGxvY2FsZSBpbiB0aGUgY29udGV4dCBvZiAyMDEwIHllYXI6XG4gKiBpbXBvcnQgZW9Mb2NhbGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IHBhcnNlKFxuICogICAnMjgtYSBkZSBmZWJydWFybycsXG4gKiAgICdEbyBbZGVdIE1NTU0nLFxuICogICBuZXcgRGF0ZSgyMDEwLCAwLCAxKVxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gU3VuIEZlYiAyOCAyMDEwIDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChkaXJ0eURhdGVTdHJpbmcsIGRpcnR5Rm9ybWF0U3RyaW5nLCBkaXJ0eUJhc2VEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIGRhdGVTdHJpbmcgPSBTdHJpbmcoZGlydHlEYXRlU3RyaW5nKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09PSB1bmRlZmluZWQgPyAwIDogTnVtYmVyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5JylcbiAgfVxuXG4gIHZhciBsb2NhbGUkJDEgPSBvcHRpb25zLmxvY2FsZSB8fCBsb2NhbGU7XG4gIHZhciBsb2NhbGVQYXJzZXJzID0gbG9jYWxlJCQxLnBhcnNlcnMgfHwge307XG4gIHZhciBsb2NhbGVVbml0cyA9IGxvY2FsZSQkMS51bml0cyB8fCB7fTtcblxuICBpZiAoIWxvY2FsZSQkMS5tYXRjaCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIG1hdGNoIHByb3BlcnR5JylcbiAgfVxuXG4gIGlmICghbG9jYWxlJCQxLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5JylcbiAgfVxuXG4gIHZhciBmb3JtYXRTdHJpbmcgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHJpbmcpXG4gICAgLnJlcGxhY2UobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAkMSwgZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgICAgaWYgKHN1YnN0cmluZ1swXSA9PT0gJ1snKSB7XG4gICAgICAgIHJldHVybiBzdWJzdHJpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnN0cmluZ1swXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmckMShzdWJzdHJpbmcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhbGUkJDEuZm9ybWF0TG9uZyhzdWJzdHJpbmcpXG4gICAgfSk7XG5cbiAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJycpIHtcbiAgICBpZiAoZGF0ZVN0cmluZyA9PT0gJycpIHtcbiAgICAgIHJldHVybiB0b0RhdGUoZGlydHlCYXNlRGF0ZSwgb3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgICB9XG4gIH1cblxuICB2YXIgc3ViRm5PcHRpb25zID0gY2xvbmVPYmplY3Qob3B0aW9ucyk7XG4gIHN1YkZuT3B0aW9ucy5sb2NhbGUgPSBsb2NhbGUkJDE7XG5cbiAgdmFyIHRva2VucyA9IGZvcm1hdFN0cmluZy5tYXRjaChsb2NhbGUkJDEucGFyc2luZ1Rva2Vuc1JlZ0V4cCB8fCBkZWZhdWx0UGFyc2luZ1Rva2Vuc1JlZ0V4cCk7XG4gIHZhciB0b2tlbnNMZW5ndGggPSB0b2tlbnMubGVuZ3RoO1xuXG4gIC8vIElmIHRpbWV6b25lIGlzbid0IHNwZWNpZmllZCwgaXQgd2lsbCBiZSBzZXQgdG8gdGhlIHN5c3RlbSB0aW1lem9uZVxuICB2YXIgc2V0dGVycyA9IFt7XG4gICAgcHJpb3JpdHk6IFRJTUVaT05FX1VOSVRfUFJJT1JJVFksXG4gICAgc2V0OiBkYXRlVG9TeXN0ZW1UaW1lem9uZSxcbiAgICBpbmRleDogMFxuICB9XTtcblxuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRva2Vuc0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgIHZhciBwYXJzZXIgPSBsb2NhbGVQYXJzZXJzW3Rva2VuXSB8fCBwYXJzZXJzW3Rva2VuXTtcbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICB2YXIgbWF0Y2hSZXN1bHQ7XG5cbiAgICAgIGlmIChwYXJzZXIubWF0Y2ggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgbWF0Y2hSZXN1bHQgPSBwYXJzZXIubWF0Y2guZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGNoUmVzdWx0ID0gcGFyc2VyLm1hdGNoKGRhdGVTdHJpbmcsIHN1YkZuT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgICAgIH1cblxuICAgICAgdmFyIHVuaXROYW1lID0gcGFyc2VyLnVuaXQ7XG4gICAgICB2YXIgdW5pdCA9IGxvY2FsZVVuaXRzW3VuaXROYW1lXSB8fCB1bml0c1t1bml0TmFtZV07XG5cbiAgICAgIHNldHRlcnMucHVzaCh7XG4gICAgICAgIHByaW9yaXR5OiB1bml0LnByaW9yaXR5LFxuICAgICAgICBzZXQ6IHVuaXQuc2V0LFxuICAgICAgICB2YWx1ZTogcGFyc2VyLnBhcnNlKG1hdGNoUmVzdWx0LCBzdWJGbk9wdGlvbnMpLFxuICAgICAgICBpbmRleDogc2V0dGVycy5sZW5ndGhcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc3Vic3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgICBkYXRlU3RyaW5nID0gZGF0ZVN0cmluZy5zbGljZShzdWJzdHJpbmcubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGhlYWQgPSB0b2tlbnNbaV0ubWF0Y2goL15cXFsuKl0kLykgPyB0b2tlbnNbaV0ucmVwbGFjZSgvXlxcW3xdJC9nLCAnJykgOiB0b2tlbnNbaV07XG4gICAgICBpZiAoZGF0ZVN0cmluZy5pbmRleE9mKGhlYWQpID09PSAwKSB7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBkYXRlU3RyaW5nLnNsaWNlKGhlYWQubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHVuaXF1ZVByaW9yaXR5U2V0dGVycyA9IHNldHRlcnNcbiAgICAubWFwKGZ1bmN0aW9uIChzZXR0ZXIpIHtcbiAgICAgIHJldHVybiBzZXR0ZXIucHJpb3JpdHlcbiAgICB9KVxuICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGJcbiAgICB9KVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHByaW9yaXR5LCBpbmRleCwgYXJyYXkpIHtcbiAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKHByaW9yaXR5KSA9PT0gaW5kZXhcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgICByZXR1cm4gc2V0dGVyc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzZXR0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gc2V0dGVyLnByaW9yaXR5ID09PSBwcmlvcml0eVxuICAgICAgICB9KVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uIChzZXR0ZXJBcnJheSkge1xuICAgICAgcmV0dXJuIHNldHRlckFycmF5WzBdXG4gICAgfSk7XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSwgb3B0aW9ucyk7XG5cbiAgaWYgKGlzTmFOKGRhdGUpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zN1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbnV0ZXMoZGF0ZSwgZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcblxuICB2YXIgZGF0ZVZhbHVlcyA9IHtkYXRlOiB1dGNEYXRlfTtcblxuICB2YXIgc2V0dGVyc0xlbmd0aCA9IHVuaXF1ZVByaW9yaXR5U2V0dGVycy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBzZXR0ZXJzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2V0dGVyID0gdW5pcXVlUHJpb3JpdHlTZXR0ZXJzW2ldO1xuICAgIGRhdGVWYWx1ZXMgPSBzZXR0ZXIuc2V0KGRhdGVWYWx1ZXMsIHNldHRlci52YWx1ZSwgc3ViRm5PcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBkYXRlVmFsdWVzLmRhdGVcbn1cblxuZnVuY3Rpb24gZGF0ZVRvU3lzdGVtVGltZXpvbmUgKGRhdGVWYWx1ZXMpIHtcbiAgdmFyIGRhdGUgPSBkYXRlVmFsdWVzLmRhdGU7XG4gIHZhciB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG5cbiAgLy8gR2V0IHRoZSBzeXN0ZW0gdGltZXpvbmUgb2Zmc2V0IGF0IChtb21lbnQgb2YgdGltZSAtIG9mZnNldClcbiAgdmFyIG9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAvLyBHZXQgdGhlIHN5c3RlbSB0aW1lem9uZSBvZmZzZXQgYXQgdGhlIGV4YWN0IG1vbWVudCBvZiB0aW1lXG4gIG9mZnNldCA9IG5ldyBEYXRlKHRpbWUgKyBvZmZzZXQgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFJDYpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgLy8gQ29udmVydCBkYXRlIGluIHRpbWV6b25lIFwiVVRDKzAwOjAwXCIgdG8gdGhlIHN5c3RlbSB0aW1lem9uZVxuICBkYXRlVmFsdWVzLmRhdGUgPSBuZXcgRGF0ZSh0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSQ2KTtcblxuICByZXR1cm4gZGF0ZVZhbHVlc1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmckMSAoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XSQvZywgJycpXG4gIH1cbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpXG59XG5cbi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseSBieSBgc2NyaXB0cy9idWlsZC9pbmRpY2VzLmpzYC4gUGxlYXNlLCBkb24ndCBjaGFuZ2UgaXQuXG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBhdHRyaWJ1dGUuIHRoZSBuYW1lIG11c3QgYmUga2ViYWItY2FzZS5cbiAqL1xudmFyIGdldERhdGFBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZWwsIG5hbWUpIHsgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgoXCJkYXRhLXZ2LVwiICsgbmFtZSkpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgZWl0aGVyIG51bGwgb3IgdW5kZWZpbmVkLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAqL1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBkYXRhIGF0dHJpYnV0ZS5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xudmFyIHNldERhdGFBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbHVlKSB7IHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoKFwiZGF0YS12di1cIiArIG5hbWUpLCB2YWx1ZSk7IH07XG5cbi8qKlxuICogQ3VzdG9tIHBhcnNlIGJlaGF2aW9yIG9uIHRvcCBvZiBkYXRlLWZucyBwYXJzZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0XG4gKiBAcmV0dXJuIHtEYXRlfG51bGx9XG4gKi9cbnZhciBwYXJzZURhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0JCQxKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZShkYXRlLCBmb3JtYXQkJDEsIG5ldyBEYXRlKCkpO1xuXG4gIC8vIGlmIGRhdGUgaXMgbm90IHZhbGlkIG9yIHRoZSBmb3JtYXR0ZWQgb3V0cHV0IGFmdGVyIHBhcnNpbmcgZG9lcyBub3QgbWF0Y2hcbiAgLy8gdGhlIHN0cmluZyB2YWx1ZSBwYXNzZWQgaW4gKGF2b2lkcyBvdmVyZmxvd3MpXG4gIGlmICghaXNWYWxpZChwYXJzZWQpIHx8IGZvcm1hdChwYXJzZWQsIGZvcm1hdCQkMSkgIT09IGRhdGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG52YXIgY3JlYXRlUHJveHkgPSBmdW5jdGlvbiAodGFyZ2V0LCBoYW5kbGVyKSB7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbn07XG5cbnZhciBjcmVhdGVGbGFncyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gIHVudG91Y2hlZDogdHJ1ZSxcbiAgdG91Y2hlZDogZmFsc2UsXG4gIGRpcnR5OiBmYWxzZSxcbiAgcHJpc3RpbmU6IHRydWUsXG4gIHZhbGlkOiBudWxsLFxuICBpbnZhbGlkOiBudWxsLFxuICB2YWxpZGF0ZWQ6IGZhbHNlLFxuICBwZW5kaW5nOiBmYWxzZSxcbiAgcmVxdWlyZWQ6IGZhbHNlXG59KTsgfTtcblxuLyoqXG4gKiBTaGFsbG93IG9iamVjdCBjb21wYXJpc29uLlxuICpcbiAqIEBwYXJhbSB7Kn0gbGhzIFxuICogQHBhcmFtIHsqfSByaHMgXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG52YXIgaXNFcXVhbCA9IGZ1bmN0aW9uIChsaHMsIHJocykge1xuICBpZiAobGhzIGluc3RhbmNlb2YgUmVnRXhwICYmIHJocyBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBpc0VxdWFsKGxocy5zb3VyY2UsIHJocy5zb3VyY2UpICYmIGlzRXF1YWwobGhzLmZsYWdzLCByaHMuZmxhZ3MpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobGhzKSAmJiBBcnJheS5pc0FycmF5KHJocykpIHtcbiAgICBpZiAobGhzLmxlbmd0aCAhPT0gcmhzLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWlzRXF1YWwobGhzW2ldLCByaHNbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlmIGJvdGggYXJlIG9iamVjdHMsIGNvbXBhcmUgZWFjaCBrZXkgcmVjdXJzaXZlbHkuXG4gIGlmIChpc09iamVjdChsaHMpICYmIGlzT2JqZWN0KHJocykpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobGhzKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gaXNFcXVhbChsaHNba2V5XSwgcmhzW2tleV0pO1xuICAgIH0pICYmIE9iamVjdC5rZXlzKHJocykuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGlzRXF1YWwobGhzW2tleV0sIHJoc1trZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaHMgPT09IHJocztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgaW5wdXQgZmllbGQgc2NvcGUuXG4gKi9cbnZhciBnZXRTY29wZSA9IGZ1bmN0aW9uIChlbCkge1xuICB2YXIgc2NvcGUgPSBnZXREYXRhQXR0cmlidXRlKGVsLCAnc2NvcGUnKTtcbiAgaWYgKCEgc2NvcGUgJiYgZWwuZm9ybSkge1xuICAgIHNjb3BlID0gZ2V0RGF0YUF0dHJpYnV0ZShlbC5mb3JtLCAnc2NvcGUnKTtcbiAgfVxuXG4gIHJldHVybiBzY29wZSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBpbiBhbiBvYmplY3Qgc2FmZWx5LlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BQYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0geyp9IGRlZlxuICovXG52YXIgZ2V0UGF0aCA9IGZ1bmN0aW9uIChwcm9wUGF0aCwgdGFyZ2V0LCBkZWYpIHtcbiAgaWYgKCBkZWYgPT09IHZvaWQgMCApIGRlZiA9IHVuZGVmaW5lZDtcblxuICBpZiAoIXByb3BQYXRoIHx8ICF0YXJnZXQpIHsgcmV0dXJuIGRlZjsgfVxuICB2YXIgdmFsdWUgPSB0YXJnZXQ7XG4gIHByb3BQYXRoLnNwbGl0KCcuJykuZXZlcnkoZnVuY3Rpb24gKHByb3ApIHtcbiAgICBpZiAoISBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHByb3ApICYmIHZhbHVlW3Byb3BdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gZGVmO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFsdWUgPSB2YWx1ZVtwcm9wXTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBwYXRoIGV4aXN0cyB3aXRoaW4gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKi9cbnZhciBoYXNQYXRoID0gZnVuY3Rpb24gKHBhdGgsIHRhcmdldCkge1xuICB2YXIgb2JqID0gdGFyZ2V0O1xuICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLmV2ZXJ5KGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKCEgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvYmogPSBvYmpbcHJvcF07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBydWxlXG4gKi9cbnZhciBwYXJzZVJ1bGUgPSBmdW5jdGlvbiAocnVsZSkge1xuICB2YXIgcGFyYW1zID0gW107XG4gIHZhciBuYW1lID0gcnVsZS5zcGxpdCgnOicpWzBdO1xuXG4gIGlmICh+cnVsZS5pbmRleE9mKCc6JykpIHtcbiAgICBwYXJhbXMgPSBydWxlLnNwbGl0KCc6Jykuc2xpY2UoMSkuam9pbignOicpLnNwbGl0KCcsJyk7XG4gIH1cblxuICByZXR1cm4geyBuYW1lOiBuYW1lLCBwYXJhbXM6IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBydWxlcyBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gcnVsZXNcbiAqL1xudmFyIG5vcm1hbGl6ZVJ1bGVzID0gZnVuY3Rpb24gKHJ1bGVzKSB7XG4gIC8vIGlmIGZhbHN5IHZhbHVlIHJldHVybiBhbiBlbXB0eSBvYmplY3QuXG4gIGlmICghcnVsZXMpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgdmFsaWRhdGlvbnMgPSB7fTtcbiAgaWYgKGlzT2JqZWN0KHJ1bGVzKSkge1xuICAgIE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICBpZiAocnVsZXNbcnVsZV0gPT09IHRydWUpIHtcbiAgICAgICAgcGFyYW1zID0gW107XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocnVsZXNbcnVsZV0pKSB7XG4gICAgICAgIHBhcmFtcyA9IHJ1bGVzW3J1bGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0gW3J1bGVzW3J1bGVdXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVzW3J1bGVdICE9PSBmYWxzZSkge1xuICAgICAgICB2YWxpZGF0aW9uc1tydWxlXSA9IHBhcmFtcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9ucztcbiAgfVxuXG4gIGlmICh0eXBlb2YgcnVsZXMgIT09ICdzdHJpbmcnKSB7XG4gICAgd2FybigncnVsZXMgbXVzdCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LicpO1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJ1bGVzLnNwbGl0KCd8JykuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIHZhciBwYXJzZWRSdWxlID0gcGFyc2VSdWxlKHJ1bGUpO1xuICAgIGlmICghIHBhcnNlZFJ1bGUubmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbGlkYXRpb25zW3BhcnNlZFJ1bGUubmFtZV0gPSBwYXJzZWRSdWxlLnBhcmFtcztcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbGlkYXRpb25zO1xufTtcblxuLyoqXG4gKiBEZWJvdW5jZXMgYSBmdW5jdGlvbi5cbiAqL1xudmFyIGRlYm91bmNlID0gZnVuY3Rpb24gKGZuLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgaWYgKCB3YWl0ID09PSB2b2lkIDAgKSB3YWl0ID0gMDtcbiAgaWYgKCBpbW1lZGlhdGUgPT09IHZvaWQgMCApIGltbWVkaWF0ZSA9IGZhbHNlO1xuXG4gIGlmICh3YWl0ID09PSAwKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHRpbWVvdXQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7IGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7IH1cbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChjYWxsTm93KSB7IGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7IH1cbiAgfTtcbn07XG5cbi8qKlxuICogRW1pdHMgYSB3YXJuaW5nIHRvIHRoZSBjb25zb2xlLlxuICovXG52YXIgd2FybiA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2FybigoXCJbdmVlLXZhbGlkYXRlXSBcIiArIG1lc3NhZ2UpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYnJhbmRlZCBlcnJvciBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICovXG52YXIgY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gbmV3IEVycm9yKChcIlt2ZWUtdmFsaWRhdGVdIFwiICsgbWVzc2FnZSkpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICovXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmICEgQXJyYXkuaXNBcnJheShvYmplY3QpOyB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGZ1bmN0aW9uIGlzIGNhbGxhYmxlLlxuICovXG52YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uIChmdW5jKSB7IHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJzsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBlbGVtZW50IGhhcyB0aGUgY3NzIGNsYXNzIG9uIGl0LlxuICovXG52YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuICEhZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKSkpO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBwcm92aWRlZCBjc3MgY2xhc3NOYW1lIHRvIHRoZSBlbGVtZW50LlxuICovXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBwcm92aWRlZCBjc3MgY2xhc3NOYW1lIGZyb20gdGhlIGVsZW1lbnQuXG4gKi9cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKSk7XG4gICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCAnICcpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZHMgb3IgcmVtb3ZlcyBhIGNsYXNzIG5hbWUgb24gdGhlIGlucHV0IGRlcGVuZGluZyBvbiB0aGUgc3RhdHVzIGZsYWcuXG4gKi9cbnZhciB0b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lLCBzdGF0dXMpIHtcbiAgaWYgKCFlbCB8fCAhY2xhc3NOYW1lKSB7IHJldHVybjsgfVxuXG4gIGlmIChzdGF0dXMpIHtcbiAgICByZXR1cm4gYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYW4gYXJyYXktbGlrZSBvYmplY3QgdG8gYXJyYXkuXG4gKiBTaW1wbGUgcG9seWZpbGwgZm9yIEFycmF5LmZyb21cbiAqL1xudmFyIHRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIGlmIChpc0NhbGxhYmxlKEFycmF5LmZyb20pKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyYXlMaWtlKTtcbiAgfVxuXG4gIHZhciBhcnJheSA9IFtdO1xuICB2YXIgbGVuZ3RoID0gYXJyYXlMaWtlLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFycmF5LnB1c2goYXJyYXlMaWtlW2ldKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn07XG5cbi8qKlxuICogQXNzaWduIHBvbHlmaWxsIGZyb20gdGhlIG1kbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIGFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgdmFyIG90aGVycyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBvdGhlcnNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGlzQ2FsbGFibGUoT2JqZWN0LmFzc2lnbikpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsIFsgdGFyZ2V0IF0uY29uY2F0KCBvdGhlcnMgKSk7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBvdGhlcnMuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgLy8gU2tpcCBvdmVyIGlmIHVuZGVmaW5lZCBvciBudWxsXG4gICAgaWYgKGFyZyAhPSBudWxsKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0b1trZXldID0gYXJnW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gdG87XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBpZC5cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xudmFyIHVuaXFJZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChcIl9cIiArIChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSkpKTsgfTtcblxuLyoqXG4gKiBwb2x5ZmlsbHMgYXJyYXkuZmluZFxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZVxuICovXG52YXIgZmluZCA9IGZ1bmN0aW9uIChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGlmIChpc09iamVjdChhcnJheSkpIHtcbiAgICBhcnJheSA9IHRvQXJyYXkoYXJyYXkpO1xuICB9XG4gIGlmIChhcnJheS5maW5kKSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbmQocHJlZGljYXRlKTtcbiAgfVxuICB2YXIgcmVzdWx0O1xuICBhcnJheS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBnZXRJbnB1dEV2ZW50TmFtZSA9IGZ1bmN0aW9uIChlbCkge1xuICBpZiAoZWwgJiYgKGVsLnRhZ05hbWUgPT09ICdTRUxFQ1QnIHx8IH5bJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2ZpbGUnXS5pbmRleE9mKGVsLnR5cGUpKSkge1xuICAgIHJldHVybiAnY2hhbmdlJztcbiAgfVxuXG4gIHJldHVybiAnaW5wdXQnO1xufTtcblxudmFyIEVycm9yQmFnID0gZnVuY3Rpb24gRXJyb3JCYWcgKCkge1xuICB0aGlzLml0ZW1zID0gW107XG59O1xuXG4vKipcbiAgICogQWRkcyBhbiBlcnJvciB0byB0aGUgaW50ZXJuYWwgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvciBUaGUgZXJyb3Igb2JqZWN0LlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGVycm9yKSB7XG4gIC8vIGhhbmRsZSBvbGQgc2lnbmF0dXJlLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBlcnJvciA9IHtcbiAgICAgIGZpZWxkOiBhcmd1bWVudHNbMF0sXG4gICAgICBtc2c6IGFyZ3VtZW50c1sxXSxcbiAgICAgIHJ1bGU6IGFyZ3VtZW50c1syXSxcbiAgICAgIHNjb3BlOiBhcmd1bWVudHNbM10gfHwgbnVsbFxuICAgIH07XG4gIH1cblxuICBlcnJvci5zY29wZSA9IGVycm9yLnNjb3BlIHx8IG51bGw7XG4gIHRoaXMuaXRlbXMucHVzaChlcnJvcik7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSBmaWVsZCBlcnJvciB3aXRoIHRoZSBuZXcgZmllbGQgc2NvcGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFxuICogQHBhcmFtIHtPYmplY3R9IGVycm9yIFxuICovXG5FcnJvckJhZy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChpZCwgZXJyb3IpIHtcbiAgdmFyIGl0ZW0gPSBmaW5kKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpZDsgfSk7XG4gIGlmICghaXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpZHggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIHRoaXMuaXRlbXMuc3BsaWNlKGlkeCwgMSk7XG4gIGl0ZW0uc2NvcGUgPSBlcnJvci5zY29wZTtcbiAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xufTtcblxuLyoqXG4gICAqIEdldHMgYWxsIGVycm9yIG1lc3NhZ2VzIGZyb20gdGhlIGludGVybmFsIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIFNjb3BlIG5hbWUsIG9wdGlvbmFsLlxuICAgKiBAcmV0dXJuIHtBcnJheX0gZXJyb3JzIEFycmF5IG9mIGFsbCBlcnJvciBtZXNzYWdlcy5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gYWxsIChzY29wZSkge1xuICBpZiAoISBzY29wZSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5tc2c7IH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfSkubWFwKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLm1zZzsgfSk7XG59O1xuXG4vKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgZXJyb3JzIGluIHRoZSBpbnRlcm5hbCBhcnJheS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBTY29wZSBuYW1lLCBvcHRpb25hbC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gcmVzdWx0IFRydWUgaWYgdGhlcmUgd2FzIGF0IGxlYXN0IG9uZSBlcnJvciwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiBhbnkgKHNjb3BlKSB7XG4gIGlmICghIHNjb3BlKSB7XG4gICAgcmV0dXJuICEhIHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuICEhIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfSkubGVuZ3RoO1xufTtcblxuLyoqXG4gICAqIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGludGVybmFsIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIFNjb3BlIG5hbWUsIG9wdGlvbmFsLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyIChzY29wZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIHJlbW92ZUNvbmRpdGlvbiA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnNjb3BlID09PSBzY29wZTsgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAocmVtb3ZlQ29uZGl0aW9uKHRoaXMkMS5pdGVtc1tpXSkpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAgICogQ29sbGVjdHMgZXJyb3JzIGludG8gZ3JvdXBzIG9yIGZvciBhIHNwZWNpZmljIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW17c3RyaW5nfSBmaWVsZCBUaGUgZmllbGQgbmFtZS5cbiAgICogQHBhcmFte3N0cmluZ30gc2NvcGUgVGhlIHNjb3BlIG5hbWUuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbWFwIElmIGl0IHNob3VsZCBtYXAgdGhlIGVycm9ycyB0byBzdHJpbmdzIGluc3RlYWQgb2Ygb2JqZWN0cy5cbiAgICogQHJldHVybiB7QXJyYXl9IGVycm9ycyBUaGUgZXJyb3JzIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5jb2xsZWN0ID0gZnVuY3Rpb24gY29sbGVjdCAoZmllbGQsIHNjb3BlLCBtYXApIHtcbiAgICBpZiAoIG1hcCA9PT0gdm9pZCAwICkgbWFwID0gdHJ1ZTtcblxuICBpZiAoISBmaWVsZCkge1xuICAgIHZhciBjb2xsZWN0aW9uID0ge307XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoISBjb2xsZWN0aW9uW2UuZmllbGRdKSB7XG4gICAgICAgIGNvbGxlY3Rpb25bZS5maWVsZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgY29sbGVjdGlvbltlLmZpZWxkXS5wdXNoKG1hcCA/IGUubXNnIDogZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGZpZWxkID0gIWlzTnVsbE9yVW5kZWZpbmVkKGZpZWxkKSA/IFN0cmluZyhmaWVsZCkgOiBmaWVsZDtcbiAgaWYgKCEgc2NvcGUpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuZmllbGQgPT09IGZpZWxkOyB9KS5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChtYXAgPyBlLm1zZyA6IGUpOyB9KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gc2NvcGU7IH0pXG4gICAgLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gKG1hcCA/IGUubXNnIDogZSk7IH0pO1xufTtcbi8qKlxuICAgKiBHZXRzIHRoZSBpbnRlcm5hbCBhcnJheSBsZW5ndGguXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn0gbGVuZ3RoIFRoZSBpbnRlcm5hbCBhcnJheSBsZW5ndGguXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQgKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIEZpbmRzIGFuZCBmZXRjaGVzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkIGlkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBcbiAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmZpcnN0QnlJZCA9IGZ1bmN0aW9uIGZpcnN0QnlJZCAoaWQpIHtcbiAgdmFyIGVycm9yID0gZmluZCh0aGlzLml0ZW1zLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5pZCA9PT0gaWQ7IH0pO1xuXG4gIHJldHVybiBlcnJvciA/IGVycm9yLm1zZyA6IG51bGw7XG59O1xuXG4vKipcbiAgICogR2V0cyB0aGUgZmlyc3QgZXJyb3IgbWVzc2FnZSBmb3IgYSBzcGVjaWZpYyBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFte1N0cmluZ30gZmllbGQgVGhlIGZpZWxkIG5hbWUuXG4gICAqIEByZXR1cm4ge1N0cmluZ3xudWxsfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uIGZpcnN0IChmaWVsZCwgc2NvcGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICBpZiAoIHNjb3BlID09PSB2b2lkIDAgKSBzY29wZSA9IG51bGw7XG5cbiAgZmllbGQgPSAhaXNOdWxsT3JVbmRlZmluZWQoZmllbGQpID8gU3RyaW5nKGZpZWxkKSA6IGZpZWxkO1xuICB2YXIgc2VsZWN0b3IgPSB0aGlzLl9zZWxlY3RvcihmaWVsZCk7XG4gIHZhciBzY29wZWQgPSB0aGlzLl9zY29wZShmaWVsZCk7XG5cbiAgaWYgKHNjb3BlZCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLmZpcnN0KHNjb3BlZC5uYW1lLCBzY29wZWQuc2NvcGUpO1xuICAgIC8vIGlmIHN1Y2ggcmVzdWx0IGV4aXN0LCByZXR1cm4gaXQuIG90aGVyd2lzZSBpdCBjb3VsZCBiZSBhIGZpZWxkLlxuICAgIC8vIHdpdGggZG90IGluIGl0cyBuYW1lLlxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RCeVJ1bGUoc2VsZWN0b3IubmFtZSwgc2VsZWN0b3IucnVsZSwgc2NvcGUpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHRoaXMkMS5pdGVtc1tpXS5maWVsZCA9PT0gZmllbGQgJiYgKHRoaXMkMS5pdGVtc1tpXS5zY29wZSA9PT0gc2NvcGUpKSB7XG4gICAgICByZXR1cm4gdGhpcyQxLml0ZW1zW2ldLm1zZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBlcnJvciBydWxlIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH0gRmlyc3QgZXJyb3IgcnVsZSBvbiB0aGUgc3BlY2lmaWVkIGZpZWxkIGlmIG9uZSBpcyBmb3VuZCwgb3RoZXJ3aXNlIG51bGxcbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3RSdWxlID0gZnVuY3Rpb24gZmlyc3RSdWxlIChmaWVsZCwgc2NvcGUpIHtcbiAgdmFyIGVycm9ycyA9IHRoaXMuY29sbGVjdChmaWVsZCwgc2NvcGUsIGZhbHNlKTtcblxuICByZXR1cm4gKGVycm9ycy5sZW5ndGggJiYgZXJyb3JzWzBdLnJ1bGUpIHx8IG51bGw7XG59O1xuXG4vKipcbiAgICogQ2hlY2tzIGlmIHRoZSBpbnRlcm5hbCBhcnJheSBoYXMgYXQgbGVhc3Qgb25lIGVycm9yIGZvciB0aGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW17c3RyaW5nfSBmaWVsZCBUaGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHQgVHJ1ZSBpZiBhdCBsZWFzdCBvbmUgZXJyb3IgaXMgZm91bmQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChmaWVsZCwgc2NvcGUpIHtcbiAgICBpZiAoIHNjb3BlID09PSB2b2lkIDAgKSBzY29wZSA9IG51bGw7XG5cbiAgcmV0dXJuICEhIHRoaXMuZmlyc3QoZmllbGQsIHNjb3BlKTtcbn07XG5cbi8qKlxuICAgKiBHZXRzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciBhIHNwZWNpZmljIGZpZWxkIGFuZCBhIHJ1bGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmaWVsZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHJ1bGUgVGhlIG5hbWUgb2YgdGhlIHJ1bGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZSBUaGUgbmFtZSBvZiB0aGUgc2NvcGUgKG9wdGlvbmFsKS5cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuZmlyc3RCeVJ1bGUgPSBmdW5jdGlvbiBmaXJzdEJ5UnVsZSAobmFtZSwgcnVsZSwgc2NvcGUpIHtcbiAgdmFyIGVycm9yID0gdGhpcy5jb2xsZWN0KG5hbWUsIHNjb3BlLCBmYWxzZSkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnJ1bGUgPT09IHJ1bGU7IH0pWzBdO1xuXG4gIHJldHVybiAoZXJyb3IgJiYgZXJyb3IubXNnKSB8fCBudWxsO1xufTtcbi8qKlxuICAgKiBHZXRzIHRoZSBmaXJzdCBlcnJvciBtZXNzYWdlIGZvciBhIHNwZWNpZmljIGZpZWxkIHRoYXQgbm90IG1hdGNoIHRoZSBydWxlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZmllbGQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBydWxlIFRoZSBuYW1lIG9mIHRoZSBydWxlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIG5hbWUgb2YgdGhlIHNjb3BlIChvcHRpb25hbCkuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLmZpcnN0Tm90ID0gZnVuY3Rpb24gZmlyc3ROb3QgKG5hbWUsIHJ1bGUsIHNjb3BlKSB7XG4gICAgaWYgKCBydWxlID09PSB2b2lkIDAgKSBydWxlID0gJ3JlcXVpcmVkJztcblxuICB2YXIgZXJyb3IgPSB0aGlzLmNvbGxlY3QobmFtZSwgc2NvcGUsIGZhbHNlKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUucnVsZSAhPT0gcnVsZTsgfSlbMF07XG5cbiAgcmV0dXJuIChlcnJvciAmJiBlcnJvci5tc2cpIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgZXJyb3JzIGJ5IG1hdGNoaW5nIGFnYWluc3QgdGhlIGlkLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFxuICovXG5FcnJvckJhZy5wcm90b3R5cGUucmVtb3ZlQnlJZCA9IGZ1bmN0aW9uIHJlbW92ZUJ5SWQgKGlkKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHRoaXMkMS5pdGVtc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAgICogUmVtb3ZlcyBhbGwgZXJyb3IgbWVzc2FnZXMgYXNzb2NpYXRlZCB3aXRoIGEgc3BlY2lmaWMgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbXtTdHJpbmd9IGZpZWxkIFRoZSBmaWVsZCB3aGljaCBtZXNzYWdlcyBhcmUgdG8gYmUgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBTY29wZSBuYW1lLCBvcHRpb25hbC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBmaWVsZCBpZCwgb3B0aW9uYWwuXG4gICAqL1xuRXJyb3JCYWcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoZmllbGQsIHNjb3BlLCBpZCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGZpZWxkID0gIWlzTnVsbE9yVW5kZWZpbmVkKGZpZWxkKSA/IFN0cmluZyhmaWVsZCkgOiBmaWVsZDtcbiAgdmFyIHJlbW92ZUNvbmRpdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUuaWQgJiYgaWQpIHtcbiAgICAgIHJldHVybiBlLmlkID09PSBpZDtcbiAgICB9XG5cbiAgICBpZiAoc2NvcGUpIHtcbiAgICAgIHJldHVybiBlLmZpZWxkID09PSBmaWVsZCAmJiBlLnNjb3BlID09PSBzY29wZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZS5maWVsZCA9PT0gZmllbGQgJiYgZS5zY29wZSA9PT0gbnVsbDtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAocmVtb3ZlQ29uZGl0aW9uKHRoaXMkMS5pdGVtc1tpXSkpIHtcbiAgICAgIHRoaXMkMS5pdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAtLWk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAgICogR2V0IHRoZSBmaWVsZCBhdHRyaWJ1dGVzIGlmIHRoZXJlJ3MgYSBydWxlIHNlbGVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW17U3RyaW5nfSBmaWVsZCBUaGUgc3BlY2lmaWVkIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R8bnVsbH1cbiAgICovXG5FcnJvckJhZy5wcm90b3R5cGUuX3NlbGVjdG9yID0gZnVuY3Rpb24gX3NlbGVjdG9yIChmaWVsZCkge1xuICBpZiAoZmllbGQuaW5kZXhPZignOicpID4gLTEpIHtcbiAgICB2YXIgcmVmID0gZmllbGQuc3BsaXQoJzonKTtcbiAgICAgIHZhciBuYW1lID0gcmVmWzBdO1xuICAgICAgdmFyIHJ1bGUgPSByZWZbMV07XG5cbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBydWxlOiBydWxlIH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICAgKiBHZXQgdGhlIGZpZWxkIHNjb3BlIGlmIHNwZWNpZmllZCB1c2luZyBkb3Qgbm90YXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCB0aGUgc3BlY2lmaWUgZmllbGQuXG4gICAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICAgKi9cbkVycm9yQmFnLnByb3RvdHlwZS5fc2NvcGUgPSBmdW5jdGlvbiBfc2NvcGUgKGZpZWxkKSB7XG4gIGlmIChmaWVsZC5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgIHZhciByZWYgPSBmaWVsZC5zcGxpdCgnLicpO1xuICAgICAgdmFyIHNjb3BlID0gcmVmWzBdO1xuICAgICAgdmFyIG5hbWUgPSByZWZbMV07XG5cbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBzY29wZTogc2NvcGUgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIERpY3Rpb25hcnkgPSBmdW5jdGlvbiBEaWN0aW9uYXJ5IChkaWN0aW9uYXJ5KSB7XG4gIGlmICggZGljdGlvbmFyeSA9PT0gdm9pZCAwICkgZGljdGlvbmFyeSA9IHt9O1xuXG4gIHRoaXMuY29udGFpbmVyID0ge307XG4gIHRoaXMubWVyZ2UoZGljdGlvbmFyeSk7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5oYXNMb2NhbGUgPSBmdW5jdGlvbiBoYXNMb2NhbGUgKGxvY2FsZSkge1xuICByZXR1cm4gISEgdGhpcy5jb250YWluZXJbbG9jYWxlXTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldERhdGVGb3JtYXQgPSBmdW5jdGlvbiBzZXREYXRlRm9ybWF0IChsb2NhbGUsIGZvcm1hdCkge1xuICBpZiAoIXRoaXMuY29udGFpbmVyW2xvY2FsZV0pIHtcbiAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdID0ge307XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmRhdGVGb3JtYXQgPSBmb3JtYXQ7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXREYXRlRm9ybWF0ID0gZnVuY3Rpb24gZ2V0RGF0ZUZvcm1hdCAobG9jYWxlKSB7XG4gIGlmICghdGhpcy5jb250YWluZXJbbG9jYWxlXSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb250YWluZXJbbG9jYWxlXS5kYXRlRm9ybWF0O1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uIGdldE1lc3NhZ2UgKGxvY2FsZSwga2V5LCBmYWxsYmFjaykge1xuICBpZiAoISB0aGlzLmhhc01lc3NhZ2UobG9jYWxlLCBrZXkpKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrIHx8IHRoaXMuX2dldERlZmF1bHRNZXNzYWdlKGxvY2FsZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlc1trZXldO1xufTtcblxuLyoqXG4gKiBHZXRzIGEgc3BlY2lmaWMgbWVzc2FnZSBmb3IgZmllbGQuIGZhbGxzYmFjayB0byB0aGUgcnVsZSBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBsb2NhbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRGaWVsZE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRGaWVsZE1lc3NhZ2UgKGxvY2FsZSwgZmllbGQsIGtleSkge1xuICBpZiAoISB0aGlzLmhhc0xvY2FsZShsb2NhbGUpKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TWVzc2FnZShsb2NhbGUsIGtleSk7XG4gIH1cblxuICB2YXIgZGljdCA9IHRoaXMuY29udGFpbmVyW2xvY2FsZV0uY3VzdG9tICYmIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uY3VzdG9tW2ZpZWxkXTtcbiAgaWYgKCEgZGljdCB8fCAhIGRpY3Rba2V5XSkge1xuICAgIHJldHVybiB0aGlzLmdldE1lc3NhZ2UobG9jYWxlLCBrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGRpY3Rba2V5XTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLl9nZXREZWZhdWx0TWVzc2FnZSA9IGZ1bmN0aW9uIF9nZXREZWZhdWx0TWVzc2FnZSAobG9jYWxlKSB7XG4gIGlmICh0aGlzLmhhc01lc3NhZ2UobG9jYWxlLCAnX2RlZmF1bHQnKSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzLl9kZWZhdWx0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmVuLm1lc3NhZ2VzLl9kZWZhdWx0O1xufTtcblxuRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0QXR0cmlidXRlID0gZnVuY3Rpb24gZ2V0QXR0cmlidXRlIChsb2NhbGUsIGtleSwgZmFsbGJhY2spIHtcbiAgICBpZiAoIGZhbGxiYWNrID09PSB2b2lkIDAgKSBmYWxsYmFjayA9ICcnO1xuXG4gIGlmICghIHRoaXMuaGFzQXR0cmlidXRlKGxvY2FsZSwga2V5KSkge1xuICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmF0dHJpYnV0ZXNba2V5XTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLmhhc01lc3NhZ2UgPSBmdW5jdGlvbiBoYXNNZXNzYWdlIChsb2NhbGUsIGtleSkge1xuICByZXR1cm4gISEgKFxuICAgIHRoaXMuaGFzTG9jYWxlKGxvY2FsZSkgJiZcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLm1lc3NhZ2VzICYmXG4gICAgICAgICAgdGhpcy5jb250YWluZXJbbG9jYWxlXS5tZXNzYWdlc1trZXldXG4gICk7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5oYXNBdHRyaWJ1dGUgPSBmdW5jdGlvbiBoYXNBdHRyaWJ1dGUgKGxvY2FsZSwga2V5KSB7XG4gIHJldHVybiAhISAoXG4gICAgdGhpcy5oYXNMb2NhbGUobG9jYWxlKSAmJlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlcyAmJlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0uYXR0cmlidXRlc1trZXldXG4gICk7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlIChkaWN0aW9uYXJ5KSB7XG4gIHRoaXMuX21lcmdlKHRoaXMuY29udGFpbmVyLCBkaWN0aW9uYXJ5KTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLnNldE1lc3NhZ2UgPSBmdW5jdGlvbiBzZXRNZXNzYWdlIChsb2NhbGUsIGtleSwgbWVzc2FnZSkge1xuICBpZiAoISB0aGlzLmhhc0xvY2FsZShsb2NhbGUpKSB7XG4gICAgdGhpcy5jb250YWluZXJbbG9jYWxlXSA9IHtcbiAgICAgIG1lc3NhZ2VzOiB7fSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyW2xvY2FsZV0ubWVzc2FnZXNba2V5XSA9IG1lc3NhZ2U7XG59O1xuXG5EaWN0aW9uYXJ5LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUgKGxvY2FsZSwga2V5LCBhdHRyaWJ1dGUpIHtcbiAgaWYgKCEgdGhpcy5oYXNMb2NhbGUobG9jYWxlKSkge1xuICAgIHRoaXMuY29udGFpbmVyW2xvY2FsZV0gPSB7XG4gICAgICBtZXNzYWdlczoge30sXG4gICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgIH07XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcltsb2NhbGVdLmF0dHJpYnV0ZXNba2V5XSA9IGF0dHJpYnV0ZTtcbn07XG5cbkRpY3Rpb25hcnkucHJvdG90eXBlLl9tZXJnZSA9IGZ1bmN0aW9uIF9tZXJnZSAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAoISAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgIGlmICghIHRhcmdldFtrZXldKSB7XG4gICAgICAgIGFzc2lnbih0YXJnZXQsICggb2JqID0ge30sIG9ialtrZXldID0ge30sIG9iaiApKTtcbiAgICAgICAgICB2YXIgb2JqO1xuICAgICAgfVxuXG4gICAgICB0aGlzJDEuX21lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXNzaWduKHRhcmdldCwgKCBvYmokMSA9IHt9LCBvYmokMVtrZXldID0gc291cmNlW2tleV0sIG9iaiQxICkpO1xuICAgICAgdmFyIG9iaiQxO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBGb3JtYXRlcyBmaWxlIHNpemUuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBzaXplXG4gKi9cbnZhciBmb3JtYXRGaWxlU2l6ZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHZhciB1bml0cyA9IFsnQnl0ZScsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddO1xuICB2YXIgdGhyZXNob2xkID0gMTAyNDtcbiAgc2l6ZSA9IE51bWJlcihzaXplKSAqIHRocmVzaG9sZDtcbiAgdmFyIGkgPSBzaXplID09PSAwID8gMCA6IE1hdGguZmxvb3IoTWF0aC5sb2coc2l6ZSkgLyBNYXRoLmxvZyh0aHJlc2hvbGQpKTtcbiAgcmV0dXJuICgoKHNpemUgLyBNYXRoLnBvdyh0aHJlc2hvbGQsIGkpKS50b0ZpeGVkKDIpICogMSkgKyBcIiBcIiArICh1bml0c1tpXSkpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdmVlLXZhbGlkYXRlIGlzIGRlZmluZWQgZ2xvYmFsbHkuXG4gKi9cbnZhciBpc0RlZmluZWRHbG9iYWxseSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBWZWVWYWxpZGF0ZSAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gIF9kZWZhdWx0OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgdmFsdWUgaXMgbm90IHZhbGlkLlwiKTsgfSxcbiAgYWZ0ZXI6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIHRhcmdldCA9IHJlZlswXTtcbiAgICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgbXVzdCBiZSBhZnRlciBcIiArIChpbmNsdXNpb24gPyAnb3IgZXF1YWwgdG8gJyA6ICcnKSArIHRhcmdldCArIFwiLlwiKTtcbn0sXG4gIGFscGhhX2Rhc2g6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgY29udGFpbiBhbHBoYS1udW1lcmljIGNoYXJhY3RlcnMgYXMgd2VsbCBhcyBkYXNoZXMgYW5kIHVuZGVyc2NvcmVzLlwiKTsgfSxcbiAgYWxwaGFfbnVtOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbWF5IG9ubHkgY29udGFpbiBhbHBoYS1udW1lcmljIGNoYXJhY3RlcnMuXCIpOyB9LFxuICBhbHBoYV9zcGFjZXM6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIGFscGhhYmV0aWMgY2hhcmFjdGVycyBhcyB3ZWxsIGFzIHNwYWNlcy5cIik7IH0sXG4gIGFscGhhOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbWF5IG9ubHkgY29udGFpbiBhbHBoYWJldGljIGNoYXJhY3RlcnMuXCIpOyB9LFxuICBiZWZvcmU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIHRhcmdldCA9IHJlZlswXTtcbiAgICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgbXVzdCBiZSBiZWZvcmUgXCIgKyAoaW5jbHVzaW9uID8gJ29yIGVxdWFsIHRvICcgOiAnJykgKyB0YXJnZXQgKyBcIi5cIik7XG59LFxuICBiZXR3ZWVuOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBtaW4gPSByZWZbMF07XG4gICAgdmFyIG1heCA9IHJlZlsxXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYmV0d2VlbiBcIiArIG1pbiArIFwiIGFuZCBcIiArIG1heCArIFwiLlwiKTtcbn0sXG4gIGNvbmZpcm1lZDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGNvbmZpcm1hdGlvbiBkb2VzIG5vdCBtYXRjaC5cIik7IH0sXG4gIGNyZWRpdF9jYXJkOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgaXMgaW52YWxpZC5cIik7IH0sXG4gIGRhdGVfYmV0d2VlbjogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgbWluID0gcmVmWzBdO1xuICAgIHZhciBtYXggPSByZWZbMV07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBtdXN0IGJlIGJldHdlZW4gXCIgKyBtaW4gKyBcIiBhbmQgXCIgKyBtYXggKyBcIi5cIik7XG59LFxuICBkYXRlX2Zvcm1hdDogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgZm9ybWF0ID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgbXVzdCBiZSBpbiB0aGUgZm9ybWF0IFwiICsgZm9ybWF0ICsgXCIuXCIpO1xufSxcbiAgZGVjaW1hbDogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gWycqJ107XG4gICAgdmFyIGRlY2ltYWxzID0gcmVmWzBdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBudW1lcmljIGFuZCBtYXkgY29udGFpbiBcIiArICghZGVjaW1hbHMgfHwgZGVjaW1hbHMgPT09ICcqJyA/ICcnIDogZGVjaW1hbHMpICsgXCIgZGVjaW1hbCBwb2ludHMuXCIpO1xufSxcbiAgZGlnaXRzOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIG51bWVyaWMgYW5kIGV4YWN0bHkgY29udGFpbiBcIiArIGxlbmd0aCArIFwiIGRpZ2l0cy5cIik7XG59LFxuICBkaW1lbnNpb25zOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciB3aWR0aCA9IHJlZlswXTtcbiAgICB2YXIgaGVpZ2h0ID0gcmVmWzFdO1xuXG4gICAgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBcIiArIHdpZHRoICsgXCIgcGl4ZWxzIGJ5IFwiICsgaGVpZ2h0ICsgXCIgcGl4ZWxzLlwiKTtcbn0sXG4gIGVtYWlsOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGVtYWlsLlwiKTsgfSxcbiAgZXh0OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGZpbGUuXCIpOyB9LFxuICBpbWFnZTogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYW4gaW1hZ2UuXCIpOyB9LFxuICBpbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIGludGVnZXI6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGFuIGludGVnZXIuXCIpOyB9LFxuICBpcDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCBpcCBhZGRyZXNzLlwiKTsgfSxcbiAgbGVuZ3RoOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG4gICAgdmFyIG1heCA9IHJlZlsxXTtcblxuICAgIGlmIChtYXgpIHtcbiAgICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGxlbmd0aCBiZSBiZXR3ZWVuIFwiICsgbGVuZ3RoICsgXCIgYW5kIFwiICsgbWF4ICsgXCIuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGxlbmd0aCBtdXN0IGJlIFwiICsgbGVuZ3RoICsgXCIuXCIpO1xuICB9LFxuICBtYXg6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG1heSBub3QgYmUgZ3JlYXRlciB0aGFuIFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtYXhfdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1heCA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtYXggKyBcIiBvciBsZXNzLlwiKTtcbn0sXG4gIG1pbWVzOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgbXVzdCBoYXZlIGEgdmFsaWQgZmlsZSB0eXBlLlwiKTsgfSxcbiAgbWluOiBmdW5jdGlvbiAoZmllbGQsIHJlZikge1xuICAgIHZhciBsZW5ndGggPSByZWZbMF07XG5cbiAgICByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtdXN0IGJlIGF0IGxlYXN0IFwiICsgbGVuZ3RoICsgXCIgY2hhcmFjdGVycy5cIik7XG59LFxuICBtaW5fdmFsdWU6IGZ1bmN0aW9uIChmaWVsZCwgcmVmKSB7XG4gICAgdmFyIG1pbiA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgXCIgKyBtaW4gKyBcIiBvciBtb3JlLlwiKTtcbn0sXG4gIG5vdF9pbjogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIG11c3QgYmUgYSB2YWxpZCB2YWx1ZS5cIik7IH0sXG4gIG51bWVyaWM6IGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gKFwiVGhlIFwiICsgZmllbGQgKyBcIiBmaWVsZCBtYXkgb25seSBjb250YWluIG51bWVyaWMgY2hhcmFjdGVycy5cIik7IH0sXG4gIHJlZ2V4OiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgZm9ybWF0IGlzIGludmFsaWQuXCIpOyB9LFxuICByZXF1aXJlZDogZnVuY3Rpb24gKGZpZWxkKSB7IHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIGZpZWxkIGlzIHJlcXVpcmVkLlwiKTsgfSxcbiAgc2l6ZTogZnVuY3Rpb24gKGZpZWxkLCByZWYpIHtcbiAgICB2YXIgc2l6ZSA9IHJlZlswXTtcblxuICAgIHJldHVybiAoXCJUaGUgXCIgKyBmaWVsZCArIFwiIHNpemUgbXVzdCBiZSBsZXNzIHRoYW4gXCIgKyAoZm9ybWF0RmlsZVNpemUoc2l6ZSkpICsgXCIuXCIpO1xufSxcbiAgdXJsOiBmdW5jdGlvbiAoZmllbGQpIHsgcmV0dXJuIChcIlRoZSBcIiArIGZpZWxkICsgXCIgZmllbGQgaXMgbm90IGEgdmFsaWQgVVJMLlwiKTsgfVxufTtcblxudmFyIGxvY2FsZSQxID0ge1xuICBuYW1lOiAnZW4nLFxuICBtZXNzYWdlczogbWVzc2FnZXMsXG4gIGF0dHJpYnV0ZXM6IHt9XG59O1xuXG5pZiAoaXNEZWZpbmVkR2xvYmFsbHkoKSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgVmVlVmFsaWRhdGUuVmFsaWRhdG9yLmFkZExvY2FsZShsb2NhbGUkMSk7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSBvcHRpb25zIHJlcXVpcmVkIHRvIGNvbnN0cnVjdCBhIGZpZWxkLlxuICovXG52YXIgR2VuZXJhdG9yID0gZnVuY3Rpb24gR2VuZXJhdG9yICgpIHt9O1xuXG5HZW5lcmF0b3IuZ2VuZXJhdGUgPSBmdW5jdGlvbiBnZW5lcmF0ZSAoZWwsIGJpbmRpbmcsIHZub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdmFyIG1vZGVsID0gR2VuZXJhdG9yLnJlc29sdmVNb2RlbChiaW5kaW5nLCB2bm9kZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBHZW5lcmF0b3IucmVzb2x2ZU5hbWUoZWwsIHZub2RlKSxcbiAgICBlbDogZWwsXG4gICAgbGlzdGVuOiAhYmluZGluZy5tb2RpZmllcnMuZGlzYWJsZSxcbiAgICBzY29wZTogR2VuZXJhdG9yLnJlc29sdmVTY29wZShlbCwgYmluZGluZywgdm5vZGUpLFxuICAgIHZtOiBHZW5lcmF0b3IubWFrZVZNKHZub2RlLmNvbnRleHQpLFxuICAgIGV4cHJlc3Npb246IGJpbmRpbmcudmFsdWUsXG4gICAgY29tcG9uZW50OiB2bm9kZS5jaGlsZCxcbiAgICBjbGFzc2VzOiBvcHRpb25zLmNsYXNzZXMsXG4gICAgY2xhc3NOYW1lczogb3B0aW9ucy5jbGFzc05hbWVzLFxuICAgIGdldHRlcjogR2VuZXJhdG9yLnJlc29sdmVHZXR0ZXIoZWwsIHZub2RlLCBtb2RlbCksXG4gICAgZXZlbnRzOiBHZW5lcmF0b3IucmVzb2x2ZUV2ZW50cyhlbCwgdm5vZGUpIHx8IG9wdGlvbnMuZXZlbnRzLFxuICAgIG1vZGVsOiBtb2RlbCxcbiAgICBkZWxheTogR2VuZXJhdG9yLnJlc29sdmVEZWxheShlbCwgdm5vZGUsIG9wdGlvbnMpLFxuICAgIHJ1bGVzOiBHZW5lcmF0b3IucmVzb2x2ZVJ1bGVzKGVsLCBiaW5kaW5nKSxcbiAgICBpbml0aWFsOiAhIWJpbmRpbmcubW9kaWZpZXJzLmluaXRpYWwsXG4gICAgYWxpYXM6IEdlbmVyYXRvci5yZXNvbHZlQWxpYXMoZWwsIHZub2RlKSxcbiAgICB2YWxpZGl0eTogb3B0aW9ucy52YWxpZGl0eSxcbiAgICBhcmlhOiBvcHRpb25zLmFyaWEsXG4gICAgaW5pdGlhbFZhbHVlOiBHZW5lcmF0b3IucmVzb2x2ZUluaXRpYWxWYWx1ZSh2bm9kZSlcbiAgfTtcbn07XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IGVsIFxuICogQHBhcmFtIHsqfSBiaW5kaW5nIFxuICovXG5HZW5lcmF0b3IucmVzb2x2ZVJ1bGVzID0gZnVuY3Rpb24gcmVzb2x2ZVJ1bGVzIChlbCwgYmluZGluZykge1xuICBpZiAoIWJpbmRpbmcgfHwgIWJpbmRpbmcuZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAncnVsZXMnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZTtcbiAgfVxuXG4gIGlmICh+WydzdHJpbmcnLCAnb2JqZWN0J10uaW5kZXhPZih0eXBlb2YgYmluZGluZy52YWx1ZS5ydWxlcykpIHtcbiAgICByZXR1cm4gYmluZGluZy52YWx1ZS5ydWxlcztcbiAgfVxuXG4gIHJldHVybiBiaW5kaW5nLnZhbHVlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IHZub2RlIFxuICovXG5HZW5lcmF0b3IucmVzb2x2ZUluaXRpYWxWYWx1ZSA9IGZ1bmN0aW9uIHJlc29sdmVJbml0aWFsVmFsdWUgKHZub2RlKSB7XG4gIHZhciBtb2RlbCA9IHZub2RlLmRhdGEubW9kZWwgfHwgZmluZCh2bm9kZS5kYXRhLmRpcmVjdGl2ZXMsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgPT09ICdtb2RlbCc7IH0pO1xuXG4gIHJldHVybiBtb2RlbCAmJiBtb2RlbC52YWx1ZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5vbi1jaXJjdWxhciBwYXJ0aWFsIFZNIGluc3RhbmNlIGZyb20gYSBWdWUgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyp9IHZtIFxuICovXG5HZW5lcmF0b3IubWFrZVZNID0gZnVuY3Rpb24gbWFrZVZNICh2bSkge1xuICByZXR1cm4ge1xuICAgIGdldCAkZWwgKCkge1xuICAgICAgcmV0dXJuIHZtLiRlbDtcbiAgICB9LFxuICAgIGdldCAkcmVmcyAoKSB7XG4gICAgICByZXR1cm4gdm0uJHJlZnM7XG4gICAgfSxcbiAgICAkd2F0Y2g6IHZtLiR3YXRjaCA/IHZtLiR3YXRjaC5iaW5kKHZtKSA6IGZ1bmN0aW9uICgpIHt9LFxuICAgICR2YWxpZGF0b3I6IHZtLiR2YWxpZGF0b3IgPyB7XG4gICAgICBlcnJvcnM6IHZtLiR2YWxpZGF0b3IuZXJyb3JzLFxuICAgICAgdmFsaWRhdGU6IHZtLiR2YWxpZGF0b3IudmFsaWRhdGUuYmluZCh2bS4kdmFsaWRhdG9yKSxcbiAgICAgIHVwZGF0ZTogdm0uJHZhbGlkYXRvci51cGRhdGUuYmluZCh2bS4kdmFsaWRhdG9yKVxuICAgIH0gOiBudWxsXG4gIH07XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBkZWxheSB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gZWxcbiAqIEBwYXJhbSB7Kn0gdm5vZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlRGVsYXkgPSBmdW5jdGlvbiByZXNvbHZlRGVsYXkgKGVsLCB2bm9kZSwgb3B0aW9ucykge1xuICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAnZGVsYXknKSB8fCAodm5vZGUuY2hpbGQgJiYgdm5vZGUuY2hpbGQuJGF0dHJzICYmIHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di1kZWxheSddKSB8fCBvcHRpb25zLmRlbGF5O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgYWxpYXMgZm9yIHRoZSBmaWVsZC5cbiAqIEBwYXJhbSB7Kn0gZWwgXG4gKiBAcGFyYW0geyp9IHZub2RlIFxuICogQHJldHVybiB7RnVuY3Rpb259IGFsaWFzIGdldHRlclxuICovXG5HZW5lcmF0b3IucmVzb2x2ZUFsaWFzID0gZnVuY3Rpb24gcmVzb2x2ZUFsaWFzIChlbCwgdm5vZGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldERhdGFBdHRyaWJ1dGUoZWwsICdhcycpIHx8ICh2bm9kZS5jaGlsZCAmJiB2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LWFzJ10pIHx8IGVsLnRpdGxlIHx8IG51bGw7IH07XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBldmVudHMgdG8gdmFsaWRhdGUgaW4gcmVzcG9uc2UgdG8uXG4gKiBAcGFyYW0geyp9IGVsXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKi9cbkdlbmVyYXRvci5yZXNvbHZlRXZlbnRzID0gZnVuY3Rpb24gcmVzb2x2ZUV2ZW50cyAoZWwsIHZub2RlKSB7XG4gIGlmICh2bm9kZS5jaGlsZCkge1xuICAgIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAndmFsaWRhdGUtb24nKSB8fCAodm5vZGUuY2hpbGQuJGF0dHJzICYmIHZub2RlLmNoaWxkLiRhdHRyc1snZGF0YS12di12YWxpZGF0ZS1vbiddKTtcbiAgfVxuXG4gIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAndmFsaWRhdGUtb24nKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHNjb3BlIGZvciB0aGUgZmllbGQuXG4gKiBAcGFyYW0geyp9IGVsXG4gKiBAcGFyYW0geyp9IGJpbmRpbmdcbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVTY29wZSA9IGZ1bmN0aW9uIHJlc29sdmVTY29wZSAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaWYgKCB2bm9kZSA9PT0gdm9pZCAwICkgdm5vZGUgPSB7fTtcblxuICB2YXIgc2NvcGUgPSBudWxsO1xuICBpZiAoaXNPYmplY3QoYmluZGluZy52YWx1ZSkpIHtcbiAgICBzY29wZSA9IGJpbmRpbmcudmFsdWUuc2NvcGU7XG4gIH1cblxuICBpZiAodm5vZGUuY2hpbGQgJiYgIXNjb3BlKSB7XG4gICAgc2NvcGUgPSB2bm9kZS5jaGlsZC4kYXR0cnMgJiYgdm5vZGUuY2hpbGQuJGF0dHJzWydkYXRhLXZ2LXNjb3BlJ107XG4gIH1cblxuICByZXR1cm4gc2NvcGUgfHwgZ2V0U2NvcGUoZWwpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG5vZGUgZGlyZWN0aXZlcyBjb250YWlucyBhIHYtbW9kZWwgb3IgYSBzcGVjaWZpZWQgYXJnLlxuICogQXJncyB0YWtlIHByaW9yaXR5IG92ZXIgbW9kZWxzLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVNb2RlbCA9IGZ1bmN0aW9uIHJlc29sdmVNb2RlbCAoYmluZGluZywgdm5vZGUpIHtcbiAgaWYgKGJpbmRpbmcuYXJnKSB7XG4gICAgcmV0dXJuIGJpbmRpbmcuYXJnO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KGJpbmRpbmcudmFsdWUpICYmIGJpbmRpbmcudmFsdWUuYXJnKSB7XG4gICAgcmV0dXJuIGJpbmRpbmcudmFsdWUuYXJnO1xuICB9XG5cbiAgdmFyIG1vZGVsID0gdm5vZGUuZGF0YS5tb2RlbCB8fCBmaW5kKHZub2RlLmRhdGEuZGlyZWN0aXZlcywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSA9PT0gJ21vZGVsJzsgfSk7XG4gIGlmICghbW9kZWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB3YXRjaGFibGUgPSAvXlthLXpfXStbMC05XSooXFx3KlxcLlthLXpfXVxcdyopKiQvaS50ZXN0KG1vZGVsLmV4cHJlc3Npb24pICYmIGhhc1BhdGgobW9kZWwuZXhwcmVzc2lvbiwgdm5vZGUuY29udGV4dCk7XG5cbiAgaWYgKCF3YXRjaGFibGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBtb2RlbC5leHByZXNzaW9uO1xufTtcblxuLyoqXG4gICAqIFJlc29sdmVzIHRoZSBmaWVsZCBuYW1lIHRvIHRyaWdnZXIgdmFsaWRhdGlvbnMuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGZpZWxkIG5hbWUuXG4gICAqL1xuR2VuZXJhdG9yLnJlc29sdmVOYW1lID0gZnVuY3Rpb24gcmVzb2x2ZU5hbWUgKGVsLCB2bm9kZSkge1xuICBpZiAodm5vZGUuY2hpbGQpIHtcbiAgICByZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZShlbCwgJ25hbWUnKSB8fCAodm5vZGUuY2hpbGQuJGF0dHJzICYmICh2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtbmFtZSddIHx8IHZub2RlLmNoaWxkLiRhdHRyc1snbmFtZSddKSkgfHwgdm5vZGUuY2hpbGQubmFtZTtcbiAgfVxuXG4gIHJldHVybiBnZXREYXRhQXR0cmlidXRlKGVsLCAnbmFtZScpIHx8IGVsLm5hbWU7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSB2YWx1ZSBnZXR0ZXIgaW5wdXQgdHlwZS5cbiAqL1xuR2VuZXJhdG9yLnJlc29sdmVHZXR0ZXIgPSBmdW5jdGlvbiByZXNvbHZlR2V0dGVyIChlbCwgdm5vZGUsIG1vZGVsKSB7XG4gIGlmIChtb2RlbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0UGF0aChtb2RlbCwgdm5vZGUuY29udGV4dCk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh2bm9kZS5jaGlsZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGF0aCA9IGdldERhdGFBdHRyaWJ1dGUoZWwsICd2YWx1ZS1wYXRoJykgfHwgKHZub2RlLmNoaWxkLiRhdHRycyAmJiB2bm9kZS5jaGlsZC4kYXR0cnNbJ2RhdGEtdnYtdmFsdWUtcGF0aCddKTtcbiAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXRoKHBhdGgsIHZub2RlLmNoaWxkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bm9kZS5jaGlsZC52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgc3dpdGNoIChlbC50eXBlKSB7XG4gIGNhc2UgJ2NoZWNrYm94JzogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgoXCJpbnB1dFtuYW1lPVxcXCJcIiArIChlbC5uYW1lKSArIFwiXFxcIl1cIikpO1xuXG4gICAgZWxzID0gdG9BcnJheShlbHMpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNoZWNrZWQ7IH0pO1xuICAgIGlmICghZWxzLmxlbmd0aCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5cbiAgICByZXR1cm4gZWxzLm1hcChmdW5jdGlvbiAoY2hlY2tib3gpIHsgcmV0dXJuIGNoZWNrYm94LnZhbHVlOyB9KTtcbiAgfTtcbiAgY2FzZSAncmFkaW8nOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKChcImlucHV0W25hbWU9XFxcIlwiICsgKGVsLm5hbWUpICsgXCJcXFwiXVwiKSk7XG4gICAgdmFyIGVsbSA9IGZpbmQoZWxzLCBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNoZWNrZWQ7IH0pO1xuXG4gICAgcmV0dXJuIGVsbSAmJiBlbG0udmFsdWU7XG4gIH07XG4gIGNhc2UgJ2ZpbGUnOiByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICByZXR1cm4gdG9BcnJheShlbC5maWxlcyk7XG4gIH07XG4gIGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkoZWwub3B0aW9ucykuZmlsdGVyKGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdC5zZWxlY3RlZDsgfSkubWFwKGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdC52YWx1ZTsgfSk7XG4gIH07XG4gIGRlZmF1bHQ6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVsICYmIGVsLnZhbHVlO1xuICB9O1xuICB9XG59O1xuXG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICB0YXJnZXRPZjogbnVsbCxcbiAgaW5pdGlhbDogZmFsc2UsXG4gIHNjb3BlOiBudWxsLFxuICBsaXN0ZW46IHRydWUsXG4gIG5hbWU6IG51bGwsXG4gIGFjdGl2ZTogdHJ1ZSxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBydWxlczoge30sXG4gIHZtOiBudWxsLFxuICBjbGFzc2VzOiBmYWxzZSxcbiAgdmFsaWRpdHk6IHRydWUsXG4gIGFyaWE6IHRydWUsXG4gIGV2ZW50czogJ2lucHV0fGJsdXInLFxuICBkZWxheTogMCxcbiAgY2xhc3NOYW1lczoge1xuICAgIHRvdWNoZWQ6ICd0b3VjaGVkJywgLy8gdGhlIGNvbnRyb2wgaGFzIGJlZW4gYmx1cnJlZFxuICAgIHVudG91Y2hlZDogJ3VudG91Y2hlZCcsIC8vIHRoZSBjb250cm9sIGhhc24ndCBiZWVuIGJsdXJyZWRcbiAgICB2YWxpZDogJ3ZhbGlkJywgLy8gbW9kZWwgaXMgdmFsaWRcbiAgICBpbnZhbGlkOiAnaW52YWxpZCcsIC8vIG1vZGVsIGlzIGludmFsaWRcbiAgICBwcmlzdGluZTogJ3ByaXN0aW5lJywgLy8gY29udHJvbCBoYXMgbm90IGJlZW4gaW50ZXJhY3RlZCB3aXRoXG4gICAgZGlydHk6ICdkaXJ0eScgLy8gY29udHJvbCBoYXMgYmVlbiBpbnRlcmFjdGVkIHdpdGhcbiAgfVxufTtcblxudmFyIEZpZWxkID0gZnVuY3Rpb24gRmllbGQgKGVsLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHRoaXMuaWQgPSB1bmlxSWQoKTtcbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbXTtcbiAgdGhpcy53YXRjaGVycyA9IFtdO1xuICB0aGlzLmV2ZW50cyA9IFtdO1xuICB0aGlzLnJ1bGVzID0ge307XG4gIGlmICghdGhpcy5pc0hlYWRsZXNzICYmICFvcHRpb25zLnRhcmdldE9mKSB7XG4gICAgc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLmVsLCAnaWQnLCB0aGlzLmlkKTsgLy8gY2FjaGUgZmllbGQgaWQgaWYgaXQgaXMgaW5kZXBlbmRlbnQgYW5kIGhhcyBhIHJvb3QgZWxlbWVudC5cbiAgfVxuICBvcHRpb25zID0gYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpO1xuICB0aGlzLnZhbGlkaXR5ID0gb3B0aW9ucy52YWxpZGl0eTtcbiAgdGhpcy5hcmlhID0gb3B0aW9ucy5hcmlhO1xuICB0aGlzLmZsYWdzID0gY3JlYXRlRmxhZ3MoKTtcbiAgdGhpcy52bSA9IG9wdGlvbnMudm07XG4gIHRoaXMuY29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnQ7XG4gIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMSA9IHsgaXNWdWU6IHt9LHZhbGlkYXRvcjoge30saXNSZXF1aXJlZDoge30saXNEaXNhYmxlZDoge30saXNIZWFkbGVzczoge30sZGlzcGxheU5hbWU6IHt9LHZhbHVlOiB7fSxyZWplY3RzRmFsc2U6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzVnVlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5jb21wb25lbnQ7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS52YWxpZGF0b3IuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMudm0gfHwgIXRoaXMudm0uJHZhbGlkYXRvcikge1xuICAgIHdhcm4oJ05vIHZhbGlkYXRvciBpbnN0YW5jZSBkZXRlY3RlZC4nKTtcbiAgICByZXR1cm4geyB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge30gfTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnZtLiR2YWxpZGF0b3I7XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5pc1JlcXVpcmVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhdGhpcy5ydWxlcy5yZXF1aXJlZDtcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLmlzRGlzYWJsZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKHRoaXMuaXNWdWUgJiYgdGhpcy5jb21wb25lbnQuZGlzYWJsZWQpIHx8ICh0aGlzLmVsICYmIHRoaXMuZWwuZGlzYWJsZWQpO1xufTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEuaXNIZWFkbGVzcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhdGhpcy5lbDtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgZGlzcGxheSBuYW1lICh1c2VyLWZyaWVuZGx5IG5hbWUpLlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS5kaXNwbGF5TmFtZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMuYWxpYXMpID8gdGhpcy5hbGlhcygpIDogdGhpcy5hbGlhcztcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgaW5wdXQgdmFsdWUuXG4gKiBAcmV0dXJuIHsqfVxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMkMS52YWx1ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghaXNDYWxsYWJsZSh0aGlzLmdldHRlcikpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZ2V0dGVyKCk7XG59O1xuXG4vKipcbiAqIElmIHRoZSBmaWVsZCByZWplY3RzIGZhbHNlIGFzIGEgdmFsaWQgdmFsdWUgZm9yIHRoZSByZXF1aXJlZCBydWxlLiBcbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzJDEucmVqZWN0c0ZhbHNlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaXNWdWUgfHwgdGhpcy5pc0hlYWRsZXNzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWwudHlwZSA9PT0gJ2NoZWNrYm94Jztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgaW5zdGFuY2UgbWF0Y2hlcyB0aGUgb3B0aW9ucyBwcm92aWRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBtYXRjaGluZyBvcHRpb25zLlxuICovXG5GaWVsZC5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIG1hdGNoZXMgKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICByZXR1cm4gdGhpcy5pZCA9PT0gb3B0aW9ucy5pZDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm5hbWUgPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lID09PSBvcHRpb25zLm5hbWU7XG4gIH1cblxuICBpZiAob3B0aW9ucy5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhpcy5zY29wZSA9PT0gb3B0aW9ucy5zY29wZTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLm5hbWUgPT09IHRoaXMubmFtZSAmJiBvcHRpb25zLnNjb3BlID09PSB0aGlzLnNjb3BlO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAob3B0aW9ucykge1xuICB0aGlzLnRhcmdldE9mID0gb3B0aW9ucy50YXJnZXRPZiB8fCBudWxsO1xuICB0aGlzLmluaXRpYWwgPSBvcHRpb25zLmluaXRpYWwgfHwgdGhpcy5pbml0aWFsIHx8IGZhbHNlO1xuXG4gIC8vIHVwZGF0ZSBlcnJvcnMgc2NvcGUgaWYgdGhlIGZpZWxkIHNjb3BlIHdhcyBjaGFuZ2VkLlxuICBpZiAodGhpcy51cGRhdGVkICYmIG9wdGlvbnMuc2NvcGUgJiYgb3B0aW9ucy5zY29wZSAhPT0gdGhpcy5zY29wZSAmJiBpc0NhbGxhYmxlKHRoaXMudmFsaWRhdG9yLnVwZGF0ZSkpIHtcbiAgICB0aGlzLnZhbGlkYXRvci51cGRhdGUodGhpcy5pZCwgeyBzY29wZTogb3B0aW9ucy5zY29wZSB9KTtcbiAgfVxuICB0aGlzLnNjb3BlID0gb3B0aW9ucy5zY29wZSB8fCB0aGlzLnNjb3BlIHx8IG51bGw7XG4gIHRoaXMubmFtZSA9ICghaXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucy5uYW1lKSA/IFN0cmluZyhvcHRpb25zLm5hbWUpIDogb3B0aW9ucy5uYW1lKSB8fCB0aGlzLm5hbWUgfHwgbnVsbDtcbiAgdGhpcy5ydWxlcyA9IG9wdGlvbnMucnVsZXMgIT09IHVuZGVmaW5lZCA/IG5vcm1hbGl6ZVJ1bGVzKG9wdGlvbnMucnVsZXMpIDogdGhpcy5ydWxlcztcbiAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWwgfHwgdGhpcy5tb2RlbDtcbiAgdGhpcy5saXN0ZW4gPSBvcHRpb25zLmxpc3RlbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5saXN0ZW4gOiB0aGlzLmxpc3RlbjtcbiAgdGhpcy5jbGFzc2VzID0gb3B0aW9ucy5jbGFzc2VzIHx8IHRoaXMuY2xhc3NlcyB8fCBmYWxzZTtcbiAgdGhpcy5jbGFzc05hbWVzID0gb3B0aW9ucy5jbGFzc05hbWVzIHx8IHRoaXMuY2xhc3NOYW1lcyB8fCBERUZBVUxUX09QVElPTlMuY2xhc3NOYW1lcztcbiAgdGhpcy5hbGlhcyA9IG9wdGlvbnMuYWxpYXMgfHwgdGhpcy5hbGlhcztcbiAgdGhpcy5nZXR0ZXIgPSBpc0NhbGxhYmxlKG9wdGlvbnMuZ2V0dGVyKSA/IG9wdGlvbnMuZ2V0dGVyIDogdGhpcy5nZXR0ZXI7XG4gIHRoaXMuZGVsYXkgPSBvcHRpb25zLmRlbGF5IHx8IHRoaXMuZGVsYXkgfHwgMDtcbiAgdGhpcy5ldmVudHMgPSB0eXBlb2Ygb3B0aW9ucy5ldmVudHMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMuZXZlbnRzLmxlbmd0aCA/IG9wdGlvbnMuZXZlbnRzLnNwbGl0KCd8JykgOiB0aGlzLmV2ZW50cztcbiAgdGhpcy51cGRhdGVEZXBlbmRlbmNpZXMoKTtcbiAgdGhpcy5hZGRBY3Rpb25MaXN0ZW5lcnMoKTtcblxuICAvLyB1cGRhdGUgcmVxdWlyZWQgZmxhZyBmbGFnc1xuICBpZiAob3B0aW9ucy5ydWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5mbGFncy5yZXF1aXJlZCA9IHRoaXMuaXNSZXF1aXJlZDtcbiAgfVxuXG4gIC8vIHZhbGlkYXRlIGlmIGl0IHdhcyB2YWxpZGF0ZWQgYmVmb3JlIGFuZCBmaWVsZCB3YXMgdXBkYXRlZCBhbmQgdGhlcmUgd2FzIGEgcnVsZXMgbXV0YXRpb24uXG4gIGlmICh0aGlzLmZsYWdzLnZhbGlkYXRlZCAmJiBvcHRpb25zLnJ1bGVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy51cGRhdGVkKSB7XG4gICAgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMuaWQpKSk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuXG4gIC8vIG5vIG5lZWQgdG8gY29udGludWUuXG4gIGlmICh0aGlzLmlzSGVhZGxlc3MpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgdGhpcy5hZGRWYWx1ZUxpc3RlbmVycygpO1xuICB0aGlzLnVwZGF0ZUFyaWFBdHRycygpO1xufTtcblxuLyoqXG4gKiBSZXNldHMgZmllbGQgZmxhZ3MgYW5kIGVycm9ycy5cbiAqL1xuRmllbGQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBkZWYgPSBjcmVhdGVGbGFncygpO1xuICBPYmplY3Qua2V5cyh0aGlzLmZsYWdzKS5mb3JFYWNoKGZ1bmN0aW9uIChmbGFnKSB7XG4gICAgdGhpcyQxLmZsYWdzW2ZsYWddID0gZGVmW2ZsYWddO1xuICB9KTtcblxuICB0aGlzLmFkZEFjdGlvbkxpc3RlbmVycygpO1xuICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgaWYgKHRoaXMudmFsaWRhdG9yLmVycm9ycyAmJiBpc0NhbGxhYmxlKHRoaXMudmFsaWRhdG9yLmVycm9ycy5yZW1vdmVCeUlkKSkge1xuICAgIHRoaXMudmFsaWRhdG9yLmVycm9ycy5yZW1vdmVCeUlkKHRoaXMuaWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGZsYWdzIGFuZCB0aGVpciBuZWdhdGVkIGNvdW50ZXJwYXJ0cywgYW5kIHVwZGF0ZXMgdGhlIGNsYXNzZXMgYW5kIHJlLWFkZHMgYWN0aW9uIGxpc3RlbmVycy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBmbGFncyBcbiAqL1xuRmllbGQucHJvdG90eXBlLnNldEZsYWdzID0gZnVuY3Rpb24gc2V0RmxhZ3MgKGZsYWdzKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIG5lZ2F0ZWQgPSB7XG4gICAgcHJpc3RpbmU6ICdkaXJ0eScsXG4gICAgZGlydHk6ICdwcmlzdGluZScsXG4gICAgdmFsaWQ6ICdpbnZhbGlkJyxcbiAgICBpbnZhbGlkOiAndmFsaWQnLFxuICAgIHRvdWNoZWQ6ICd1bnRvdWNoZWQnLFxuICAgIHVudG91Y2hlZDogJ3RvdWNoZWQnXG4gIH07XG5cbiAgT2JqZWN0LmtleXMoZmxhZ3MpLmZvckVhY2goZnVuY3Rpb24gKGZsYWcpIHtcbiAgICB0aGlzJDEuZmxhZ3NbZmxhZ10gPSBmbGFnc1tmbGFnXTtcbiAgICAvLyBpZiBpdCBoYXMgYSBuZWdhdGlvbiBhbmQgd2FzIG5vdCBzcGVjaWZpZWQsIHNldCBpdCBhcyB3ZWxsLlxuICAgIGlmIChuZWdhdGVkW2ZsYWddICYmIGZsYWdzW25lZ2F0ZWRbZmxhZ11dID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMkMS5mbGFnc1tuZWdhdGVkW2ZsYWddXSA9ICFmbGFnc1tmbGFnXTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChcbiAgICBmbGFncy51bnRvdWNoZWQgIT09IHVuZGVmaW5lZCB8fFxuICAgIGZsYWdzLnRvdWNoZWQgIT09IHVuZGVmaW5lZCB8fFxuICAgIGZsYWdzLmRpcnR5ICE9PSB1bmRlZmluZWQgfHxcbiAgICBmbGFncy5wcmlzdGluZSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuYWRkQWN0aW9uTGlzdGVuZXJzKCk7XG4gIH1cbiAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIHRoaXMudXBkYXRlQXJpYUF0dHJzKCk7XG4gIHRoaXMudXBkYXRlQ3VzdG9tVmFsaWRpdHkoKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZmllbGQgcmVxdWlyZXMgcmVmZXJlbmNlcyB0byB0YXJnZXQgZmllbGRzLlxuKi9cbkZpZWxkLnByb3RvdHlwZS51cGRhdGVEZXBlbmRlbmNpZXMgPSBmdW5jdGlvbiB1cGRhdGVEZXBlbmRlbmNpZXMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIHJlc2V0IGRlcGVuZGVuY2llcy5cbiAgdGhpcy5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5maWVsZC5kZXN0cm95KCk7IH0pO1xuICB0aGlzLmRlcGVuZGVuY2llcyA9IFtdO1xuXG4gIC8vIHdlIGdldCB0aGUgc2VsZWN0b3JzIGZvciBlYWNoIGZpZWxkLlxuICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5ydWxlcykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCByKSB7XG4gICAgaWYgKHIgPT09ICdjb25maXJtZWQnKSB7XG4gICAgICBwcmV2LnB1c2goeyBzZWxlY3RvcjogdGhpcyQxLnJ1bGVzW3JdWzBdIHx8ICgodGhpcyQxLm5hbWUpICsgXCJfY29uZmlybWF0aW9uXCIpLCBuYW1lOiByIH0pO1xuICAgIH0gZWxzZSBpZiAoL2FmdGVyfGJlZm9yZS8udGVzdChyKSkge1xuICAgICAgcHJldi5wdXNoKHsgc2VsZWN0b3I6IHRoaXMkMS5ydWxlc1tyXVswXSwgbmFtZTogciB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pO1xuXG4gIGlmICghZmllbGRzLmxlbmd0aCB8fCAhdGhpcy52bSB8fCAhdGhpcy52bS4kZWwpIHsgcmV0dXJuOyB9XG5cbiAgLy8gbXVzdCBiZSBjb250YWluZWQgd2l0aGluIHRoZSBzYW1lIGNvbXBvbmVudCwgc28gd2UgdXNlIHRoZSB2bSByb290IGVsZW1lbnQgY29uc3RyYWluIG91ciBkb20gc2VhcmNoLlxuICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSByZWYuc2VsZWN0b3I7XG4gICAgICB2YXIgbmFtZSA9IHJlZi5uYW1lO1xuXG4gICAgdmFyIGVsID0gbnVsbDtcbiAgICAvLyB2dWUgcmVmIHNlbGVjdG9yLlxuICAgIGlmIChzZWxlY3RvclswXSA9PT0gJyQnKSB7XG4gICAgICBlbCA9IHRoaXMkMS52bS4kcmVmc1tzZWxlY3Rvci5zbGljZSgxKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRyeSBxdWVyeSBzZWxlY3RvclxuICAgICAgICBlbCA9IHRoaXMkMS52bS4kZWwucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZWwgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gdGhpcyQxLnZtLiRlbC5xdWVyeVNlbGVjdG9yKChcImlucHV0W25hbWU9XFxcIlwiICsgc2VsZWN0b3IgKyBcIlxcXCJdXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICB2bTogdGhpcyQxLnZtLFxuICAgICAgY2xhc3NlczogdGhpcyQxLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWVzOiB0aGlzJDEuY2xhc3NOYW1lcyxcbiAgICAgIGRlbGF5OiB0aGlzJDEuZGVsYXksXG4gICAgICBzY29wZTogdGhpcyQxLnNjb3BlLFxuICAgICAgZXZlbnRzOiB0aGlzJDEuZXZlbnRzLmpvaW4oJ3wnKSxcbiAgICAgIGluaXRpYWw6IHRoaXMkMS5pbml0aWFsLFxuICAgICAgdGFyZ2V0T2Y6IHRoaXMkMS5pZFxuICAgIH07XG5cbiAgICAvLyBwcm9iYWJseSBhIGNvbXBvbmVudC5cbiAgICBpZiAoaXNDYWxsYWJsZShlbC4kd2F0Y2gpKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudCA9IGVsO1xuICAgICAgb3B0aW9ucy5lbCA9IGVsLiRlbDtcbiAgICAgIG9wdGlvbnMuYWxpYXMgPSBHZW5lcmF0b3IucmVzb2x2ZUFsaWFzKGVsLiRlbCwgeyBjaGlsZDogZWwgfSk7XG4gICAgICBvcHRpb25zLmdldHRlciA9IEdlbmVyYXRvci5yZXNvbHZlR2V0dGVyKGVsLiRlbCwgeyBjaGlsZDogZWwgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbDtcbiAgICAgIG9wdGlvbnMuYWxpYXMgPSBHZW5lcmF0b3IucmVzb2x2ZUFsaWFzKGVsLCB7fSk7XG4gICAgICBvcHRpb25zLmdldHRlciA9IEdlbmVyYXRvci5yZXNvbHZlR2V0dGVyKGVsLCB7fSk7XG4gICAgfVxuXG4gICAgdGhpcyQxLmRlcGVuZGVuY2llcy5wdXNoKHsgbmFtZTogbmFtZSwgZmllbGQ6IG5ldyBGaWVsZChvcHRpb25zLmVsLCBvcHRpb25zKSB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgbGlzdGVuZXJzLlxuICogQHBhcmFtIHtSZWdFeHB9IHRhZ1xuICovXG5GaWVsZC5wcm90b3R5cGUudW53YXRjaCA9IGZ1bmN0aW9uIHVud2F0Y2ggKHRhZykge1xuICAgIGlmICggdGFnID09PSB2b2lkIDAgKSB0YWcgPSBudWxsO1xuXG4gIGlmICghdGFnKSB7XG4gICAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVud2F0Y2goKTsgfSk7XG4gICAgdGhpcy53YXRjaGVycyA9IFtdO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLndhdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAodykgeyByZXR1cm4gdGFnLnRlc3Qody50YWcpOyB9KS5mb3JFYWNoKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LnVud2F0Y2goKTsgfSk7XG4gIHRoaXMud2F0Y2hlcnMgPSB0aGlzLndhdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAodykgeyByZXR1cm4gIXRhZy50ZXN0KHcudGFnKTsgfSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQgY2xhc3NlcyBkZXBlbmRpbmcgb24gZWFjaCBmaWVsZCBmbGFnIHN0YXR1cy5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXMgPSBmdW5jdGlvbiB1cGRhdGVDbGFzc2VzICgpIHtcbiAgaWYgKCF0aGlzLmNsYXNzZXMpIHsgcmV0dXJuOyB9XG5cbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLmRpcnR5LCB0aGlzLmZsYWdzLmRpcnR5KTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnByaXN0aW5lLCB0aGlzLmZsYWdzLnByaXN0aW5lKTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnZhbGlkLCAhIXRoaXMuZmxhZ3MudmFsaWQpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMuaW52YWxpZCwgISF0aGlzLmZsYWdzLmludmFsaWQpO1xuICB0b2dnbGVDbGFzcyh0aGlzLmVsLCB0aGlzLmNsYXNzTmFtZXMudG91Y2hlZCwgdGhpcy5mbGFncy50b3VjaGVkKTtcbiAgdG9nZ2xlQ2xhc3ModGhpcy5lbCwgdGhpcy5jbGFzc05hbWVzLnVudG91Y2hlZCwgdGhpcy5mbGFncy51bnRvdWNoZWQpO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBsaXN0ZW5lcnMgcmVxdWlyZWQgZm9yIGF1dG9tYXRpYyBjbGFzc2VzIGFuZCBzb21lIGZsYWdzLlxuICovXG5GaWVsZC5wcm90b3R5cGUuYWRkQWN0aW9uTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkQWN0aW9uTGlzdGVuZXJzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyByZW1vdmUgcHJldmlvdXMgbGlzdGVuZXJzLlxuICB0aGlzLnVud2F0Y2goL2NsYXNzLyk7XG5cbiAgdmFyIG9uQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuZmxhZ3MudG91Y2hlZCA9IHRydWU7XG4gICAgdGhpcyQxLmZsYWdzLnVudG91Y2hlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzJDEuY2xhc3Nlcykge1xuICAgICAgdG9nZ2xlQ2xhc3ModGhpcyQxLmVsLCB0aGlzJDEuY2xhc3NOYW1lcy50b3VjaGVkLCB0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMudW50b3VjaGVkLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBuZWVkZWQgb25jZS5cbiAgICB0aGlzJDEudW53YXRjaCgvXmNsYXNzX2JsdXIkLyk7XG4gIH07XG5cbiAgdmFyIGlucHV0RXZlbnQgPSBnZXRJbnB1dEV2ZW50TmFtZSh0aGlzLmVsKTtcbiAgdmFyIG9uSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLmZsYWdzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzJDEuZmxhZ3MucHJpc3RpbmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcyQxLmNsYXNzZXMpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMucHJpc3RpbmUsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHRoaXMkMS5lbCwgdGhpcyQxLmNsYXNzTmFtZXMuZGlydHksIHRydWUpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgbmVlZGVkIG9uY2UuXG4gICAgdGhpcyQxLnVud2F0Y2goL15jbGFzc19pbnB1dCQvKTtcbiAgfTtcblxuICBpZiAodGhpcy5pc1Z1ZSAmJiBpc0NhbGxhYmxlKHRoaXMuY29tcG9uZW50LiRvbmNlKSkge1xuICAgIHRoaXMuY29tcG9uZW50LiRvbmNlKCdpbnB1dCcsIG9uSW5wdXQpO1xuICAgIHRoaXMuY29tcG9uZW50LiRvbmNlKCdibHVyJywgb25CbHVyKTtcbiAgICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgICAgdGFnOiAnY2xhc3NfaW5wdXQnLFxuICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuY29tcG9uZW50LiRvZmYoJ2lucHV0Jywgb25JbnB1dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICAgIHRhZzogJ2NsYXNzX2JsdXInLFxuICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuY29tcG9uZW50LiRvZmYoJ2JsdXInLCBvbkJsdXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmlzSGVhZGxlc3MpIHsgcmV0dXJuOyB9XG5cbiAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGlucHV0RXZlbnQsIG9uSW5wdXQpO1xuICAvLyBDaGVja2JveGVzIGFuZCByYWRpbyBidXR0b25zIG9uIE1hYyBkb24ndCBlbWl0IGJsdXIgbmF0dXJhbGx5LCBzbyB3ZSBsaXN0ZW4gb24gY2xpY2sgaW5zdGVhZC5cbiAgdmFyIGJsdXJFdmVudCA9IFsncmFkaW8nLCAnY2hlY2tib3gnXS5pbmRleE9mKHRoaXMuZWwudHlwZSkgPT09IC0xID8gJ2JsdXInIDogJ2NsaWNrJztcbiAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGJsdXJFdmVudCwgb25CbHVyKTtcbiAgdGhpcy53YXRjaGVycy5wdXNoKHtcbiAgICB0YWc6ICdjbGFzc19pbnB1dCcsXG4gICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoaW5wdXRFdmVudCwgb25JbnB1dCk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLndhdGNoZXJzLnB1c2goe1xuICAgIHRhZzogJ2NsYXNzX2JsdXInLFxuICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGJsdXJFdmVudCwgb25CbHVyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBsaXN0ZW5lcnMgcmVxdWlyZWQgZm9yIHZhbGlkYXRpb24uXG4gKi9cbkZpZWxkLnByb3RvdHlwZS5hZGRWYWx1ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZFZhbHVlTGlzdGVuZXJzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLnVud2F0Y2goL15pbnB1dF8uKy8pO1xuICBpZiAoIXRoaXMubGlzdGVuKSB7IHJldHVybjsgfVxuXG4gIHZhciBmbiA9IHRoaXMudGFyZ2V0T2YgPyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnZhbGlkYXRvci52YWxpZGF0ZSgoXCIjXCIgKyAodGhpcyQxLnRhcmdldE9mKSkpO1xuICB9IDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS52YWxpZGF0b3IudmFsaWRhdGUoKFwiI1wiICsgKHRoaXMkMS5pZCkpKTtcbiAgfTtcblxuICB2YXIgdmFsaWRhdGUgPSBkZWJvdW5jZShmbiwgdGhpcy5kZWxheSk7XG4gIHZhciBpbnB1dEV2ZW50ID0gZ2V0SW5wdXRFdmVudE5hbWUodGhpcy5lbCk7XG4gIC8vIHJlcGxhY2UgaW5wdXQgZXZlbnQgd2l0aCBzdWl0YWJsZSBvbmUuXG4gIHZhciBldmVudHMgPSB0aGlzLmV2ZW50cy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZSA9PT0gJ2lucHV0JyA/IGlucHV0RXZlbnQgOiBlO1xuICB9KTtcblxuICAvLyBpZiB0aGVyZSBpcyBhIHdhdGNoYWJsZSBtb2RlbCBhbmQgYW4gb24gaW5wdXQgdmFsaWRhdGlvbiBpcyByZXF1ZXN0ZWQuXG4gIGlmICh0aGlzLm1vZGVsICYmIGV2ZW50cy5pbmRleE9mKGlucHV0RXZlbnQpICE9PSAtMSkge1xuICAgIHZhciB1bndhdGNoID0gdGhpcy52bS4kd2F0Y2godGhpcy5tb2RlbCwgdmFsaWRhdGUpO1xuICAgIHRoaXMud2F0Y2hlcnMucHVzaCh7XG4gICAgICB0YWc6ICdpbnB1dF9tb2RlbCcsXG4gICAgICB1bndhdGNoOiB1bndhdGNoXG4gICAgfSk7XG4gICAgLy8gZmlsdGVyIG91dCBpbnB1dCBldmVudCBhcyBpdCBpcyBhbHJlYWR5IGhhbmRsZWQgYnkgdGhlIHdhdGNoZXIgQVBJLlxuICAgIGV2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUgIT09IGlucHV0RXZlbnQ7IH0pO1xuICB9XG5cbiAgLy8gQWRkIGV2ZW50cy5cbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAodGhpcyQxLmlzVnVlKSB7XG4gICAgICB0aGlzJDEuY29tcG9uZW50LiRvbihlLCB2YWxpZGF0ZSk7XG4gICAgICB0aGlzJDEud2F0Y2hlcnMucHVzaCh7XG4gICAgICAgIHRhZzogJ2lucHV0X3Z1ZScsXG4gICAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzJDEuY29tcG9uZW50LiRvZmYoZSwgdmFsaWRhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoflsncmFkaW8nLCAnY2hlY2tib3gnXS5pbmRleE9mKHRoaXMkMS5lbC50eXBlKSkge1xuICAgICAgdmFyIGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKFwiaW5wdXRbbmFtZT1cXFwiXCIgKyAodGhpcyQxLmVsLm5hbWUpICsgXCJcXFwiXVwiKSk7XG4gICAgICB0b0FycmF5KGVscykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMkMS53YXRjaGVycy5wdXNoKHtcbiAgICAgICAgICB0YWc6ICdpbnB1dF9uYXRpdmUnLFxuICAgICAgICAgIHVud2F0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgdmFsaWRhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMkMS5lbC5hZGRFdmVudExpc3RlbmVyKGUsIHZhbGlkYXRlKTtcbiAgICB0aGlzJDEud2F0Y2hlcnMucHVzaCh7XG4gICAgICB0YWc6ICdpbnB1dF9uYXRpdmUnLFxuICAgICAgdW53YXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzJDEuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB2YWxpZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIGFyaWEgYXR0cmlidXRlcyBvbiB0aGUgZWxlbWVudC5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZUFyaWFBdHRycyA9IGZ1bmN0aW9uIHVwZGF0ZUFyaWFBdHRycyAoKSB7XG4gIGlmICghdGhpcy5hcmlhIHx8IHRoaXMuaXNIZWFkbGVzcyB8fCAhaXNDYWxsYWJsZSh0aGlzLmVsLnNldEF0dHJpYnV0ZSkpIHsgcmV0dXJuOyB9XG5cbiAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVxdWlyZWQnLCB0aGlzLmlzUmVxdWlyZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRoaXMuZmxhZ3MuaW52YWxpZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBjdXN0b20gdmFsaWRpdHkgZm9yIHRoZSBmaWVsZC5cbiAqL1xuRmllbGQucHJvdG90eXBlLnVwZGF0ZUN1c3RvbVZhbGlkaXR5ID0gZnVuY3Rpb24gdXBkYXRlQ3VzdG9tVmFsaWRpdHkgKCkge1xuICBpZiAoIXRoaXMudmFsaWRpdHkgfHwgdGhpcy5pc0hlYWRsZXNzIHx8ICFpc0NhbGxhYmxlKHRoaXMuZWwuc2V0Q3VzdG9tVmFsaWRpdHkpKSB7IHJldHVybjsgfVxuXG4gIHRoaXMuZWwuc2V0Q3VzdG9tVmFsaWRpdHkodGhpcy5mbGFncy52YWxpZCA/ICcnIDogKHRoaXMudmFsaWRhdG9yLmVycm9ycy5maXJzdEJ5SWQodGhpcy5pZCkgfHwgJycpKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzLlxuICovXG5GaWVsZC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB0aGlzLndhdGNoZXJzLmZvckVhY2goZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcudW53YXRjaCgpOyB9KTtcbiAgdGhpcy53YXRjaGVycyA9IFtdO1xuICB0aGlzLmRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmZpZWxkLmRlc3Ryb3koKTsgfSk7XG4gIHRoaXMuZGVwZW5kZW5jaWVzID0gW107XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggRmllbGQucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMSApO1xuXG52YXIgRmllbGRCYWcgPSBmdW5jdGlvbiBGaWVsZEJhZyAoKSB7XG4gIHRoaXMuaXRlbXMgPSBbXTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMkMiA9IHsgbGVuZ3RoOiB7fSB9O1xuXG4vKipcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBsZW5ndGguXG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycyQyLmxlbmd0aC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbn07XG5cbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IGZpZWxkIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbWF0Y2hlciBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gbWF0Y2hlclxuICogQHJldHVybiB7RmllbGR8dW5kZWZpbmVkfSBUaGUgZmlyc3QgbWF0Y2hpbmcgaXRlbS5cbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kJDEgKG1hdGNoZXIpIHtcbiAgcmV0dXJuIGZpbmQodGhpcy5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0ubWF0Y2hlcyhtYXRjaGVyKTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBtYXRjaGVyXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgbWF0Y2hpbmcgZmllbGQgaXRlbXMuXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiBmaWx0ZXIgKG1hdGNoZXIpIHtcbiAgLy8gbXVsdGlwbGUgbWF0Y2hlcnMgdG8gYmUgdHJpZWQuXG4gIGlmIChBcnJheS5pc0FycmF5KG1hdGNoZXIpKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBtYXRjaGVyLnNvbWUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGl0ZW0ubWF0Y2hlcyhtKTsgfSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLm1hdGNoZXMobWF0Y2hlcik7IH0pO1xufTtcblxuLyoqXG4gKiBNYXBzIHRoZSBmaWVsZCBpdGVtcyB1c2luZyB0aGUgbWFwcGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtYXBwZXJcbiAqL1xuRmllbGRCYWcucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIG1hcCAobWFwcGVyKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLm1hcChtYXBwZXIpO1xufTtcblxuLyoqXG4gKiBGaW5kcyBhbmQgcmVtb3ZlcyB0aGUgZmlyc3QgZmllbGQgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBtYXRjaGVyIG9iamVjdCwgcmV0dXJucyB0aGUgcmVtb3ZlZCBpdGVtLlxuICogQHBhcmFtIHtPYmplY3R8RmllbGR9IG1hdGNoZXJcbiAqIEByZXR1cm4ge0ZpZWxkfG51bGx9XG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKG1hdGNoZXIpIHtcbiAgdmFyIGl0ZW0gPSBudWxsO1xuICBpZiAobWF0Y2hlciBpbnN0YW5jZW9mIEZpZWxkKSB7XG4gICAgaXRlbSA9IG1hdGNoZXI7XG4gIH0gZWxzZSB7XG4gICAgaXRlbSA9IHRoaXMuZmluZChtYXRjaGVyKTtcbiAgfVxuXG4gIGlmICghaXRlbSkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHZhciBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIHJldHVybiBpdGVtO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgZmllbGQgaXRlbSB0byB0aGUgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge0ZpZWxkfSBpdGVtXG4gKi9cbkZpZWxkQmFnLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAoaXRlbSkge1xuICBpZiAoISAoaXRlbSBpbnN0YW5jZW9mIEZpZWxkKSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKCdGaWVsZEJhZyBvbmx5IGFjY2VwdHMgaW5zdGFuY2VzIG9mIEZpZWxkIHRoYXQgaGFzIGFuIGlkIGRlZmluZWQuJyk7XG4gIH1cblxuICBpZiAoIWl0ZW0uaWQpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcignRmllbGQgaWQgbXVzdCBiZSBkZWZpbmVkLicpO1xuICB9XG5cbiAgaWYgKHRoaXMuZmluZCh7IGlkOiBpdGVtLmlkIH0pKSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoKFwiRmllbGQgd2l0aCBpZCBcIiArIChpdGVtLmlkKSArIFwiIGlzIGFscmVhZHkgYWRkZWQuXCIpKTtcbiAgfVxuXG4gIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBGaWVsZEJhZy5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyQyICk7XG5cbnZhciBSVUxFUyA9IHt9O1xudmFyIExPQ0FMRSA9ICdlbic7XG52YXIgU1RSSUNUX01PREUgPSB0cnVlO1xudmFyIERJQ1RJT05BUlkgPSBuZXcgRGljdGlvbmFyeSh7XG4gIGVuOiB7XG4gICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGN1c3RvbToge31cbiAgfVxufSk7XG5cbnZhciBWYWxpZGF0b3IgPSBmdW5jdGlvbiBWYWxpZGF0b3IgKHZhbGlkYXRpb25zLCBvcHRpb25zKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7IHZtOiBudWxsLCBmYXN0RXhpdDogdHJ1ZSB9O1xuXG4gIHRoaXMuc3RyaWN0ID0gU1RSSUNUX01PREU7XG4gIHRoaXMuZXJyb3JzID0gbmV3IEVycm9yQmFnKCk7XG4gIHRoaXMuZmllbGRzID0gbmV3IEZpZWxkQmFnKCk7XG4gIHRoaXMuZmxhZ3MgPSB7fTtcbiAgdGhpcy5fY3JlYXRlRmllbGRzKHZhbGlkYXRpb25zKTtcbiAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgdGhpcy5mYXN0RXhpdCA9IG9wdGlvbnMuZmFzdEV4aXQgfHwgZmFsc2U7XG4gIHRoaXMub3duZXJJZCA9IG9wdGlvbnMudm0gJiYgb3B0aW9ucy52bS5fdWlkO1xuICAvLyBjcmVhdGUgaXQgc3RhdGljYWxseSBzaW5jZSB3ZSBkb24ndCBuZWVkIGNvbnN0YW50IGFjY2VzcyB0byB0aGUgdm0uXG4gIHRoaXMucmVzZXQgPSBvcHRpb25zLnZtICYmIGlzQ2FsbGFibGUob3B0aW9ucy52bS4kbmV4dFRpY2spID8gZnVuY3Rpb24gKCkge1xuICAgIG9wdGlvbnMudm0uJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5maWVsZHMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5yZXNldCgpOyB9KTtcbiAgICAgIHRoaXMkMS5lcnJvcnMuY2xlYXIoKTtcbiAgICB9KTtcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEuZmllbGRzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkucmVzZXQoKTsgfSk7XG4gICAgdGhpcyQxLmVycm9ycy5jbGVhcigpO1xuICB9O1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB0aGlzLmNsZWFuID0gZnVuY3Rpb24gKCkge1xuICAgIHdhcm4oJ3ZhbGlkYXRvci5jbGVhbiBpcyBtYXJrZWQgZm9yIGRlcHJlY2F0aW9uLCBwbGVhc2UgdXNlIHZhbGlkYXRvci5yZXNldCBpbnN0ZWFkLicpO1xuICAgIHRoaXMkMS5yZXNldCgpO1xuICB9O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgZGljdGlvbmFyeToge30sbG9jYWxlOiB7fSxydWxlczoge30gfTtcbnZhciBzdGF0aWNBY2Nlc3NvcnMgPSB7IGRpY3Rpb25hcnk6IHt9LGxvY2FsZToge30scnVsZXM6IHt9IH07XG5cbi8qKlxuICogQHJldHVybiB7RGljdGlvbmFyeX1cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmRpY3Rpb25hcnkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRElDVElPTkFSWTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7RGljdGlvbmFyeX1cbiAqL1xuc3RhdGljQWNjZXNzb3JzLmRpY3Rpb25hcnkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRElDVElPTkFSWTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5wcm90b3R5cGVBY2Nlc3NvcnMubG9jYWxlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIExPQ0FMRTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cbnByb3RvdHlwZUFjY2Vzc29ycy5sb2NhbGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIFZhbGlkYXRvci5sb2NhbGUgPSB2YWx1ZTtcbn07XG5cbi8qKlxuKiBAcmV0dXJuIHtTdHJpbmd9XG4qL1xuc3RhdGljQWNjZXNzb3JzLmxvY2FsZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBMT0NBTEU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICovXG5zdGF0aWNBY2Nlc3NvcnMubG9jYWxlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFESUNUSU9OQVJZLmhhc0xvY2FsZSh2YWx1ZSkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB3YXJuKCdZb3UgYXJlIHNldHRpbmcgdGhlIHZhbGlkYXRvciBsb2NhbGUgdG8gYSBsb2NhbGUgdGhhdCBpcyBub3QgZGVmaW5lZCBpbiB0aGUgZGljdGlvbmFyeS4gRW5nbGlzaCBtZXNzYWdlcyBtYXkgc3RpbGwgYmUgZ2VuZXJhdGVkLicpO1xuICB9XG5cbiAgTE9DQUxFID0gdmFsdWU7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xucHJvdG90eXBlQWNjZXNzb3JzLnJ1bGVzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJVTEVTO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbnN0YXRpY0FjY2Vzc29ycy5ydWxlcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSVUxFUztcbn07XG5cbi8qKlxuICogU3RhdGljIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbXtvYmplY3R9IHZhbGlkYXRpb25zIFRoZSB2YWxpZGF0aW9ucyBvYmplY3QuXG4gKiBAcmV0dXJuIHtWYWxpZGF0b3J9IHZhbGlkYXRvciBBIHZhbGlkYXRvciBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUgKHZhbGlkYXRpb25zLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgVmFsaWRhdG9yKHZhbGlkYXRpb25zLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogQWRkcyBhIGN1c3RvbSB2YWxpZGF0b3IgdG8gdGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBydWxlcy5cbiAqXG4gKiBAcGFyYW17c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IuXG4gKiBAcGFyYW17b2JqZWN0fGZ1bmN0aW9ufSB2YWxpZGF0b3IgVGhlIHZhbGlkYXRvciBvYmplY3QvZnVuY3Rpb24uXG4gKi9cblZhbGlkYXRvci5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQgKG5hbWUsIHZhbGlkYXRvcikge1xuICBWYWxpZGF0b3IuX2d1YXJkRXh0ZW5kKG5hbWUsIHZhbGlkYXRvcik7XG4gIFZhbGlkYXRvci5fbWVyZ2UobmFtZSwgdmFsaWRhdG9yKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIHJ1bGUgZnJvbSB0aGUgbGlzdCBvZiB2YWxpZGF0b3JzLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvci9ydWxlLlxuICovXG5WYWxpZGF0b3IucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChuYW1lKSB7XG4gIGRlbGV0ZSBSVUxFU1tuYW1lXTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgZGVmYXVsdCBsb2NhbGUgZm9yIGFsbCB2YWxpZGF0b3JzLlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZSBUaGUgbG9jYWxlIGlkLlxuICovXG5WYWxpZGF0b3Iuc2V0TG9jYWxlID0gZnVuY3Rpb24gc2V0TG9jYWxlIChsYW5ndWFnZSkge1xuICAgIGlmICggbGFuZ3VhZ2UgPT09IHZvaWQgMCApIGxhbmd1YWdlID0gJ2VuJztcblxuICBWYWxpZGF0b3IubG9jYWxlID0gbGFuZ3VhZ2U7XG59O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cblZhbGlkYXRvci5pbnN0YWxsRGF0ZVRpbWVWYWxpZGF0b3JzID0gZnVuY3Rpb24gaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHdhcm4oJ0RhdGUgdmFsaWRhdGlvbnMgYXJlIG5vdyBpbnN0YWxsZWQgYnkgZGVmYXVsdCwgeW91IG5vIGxvbmdlciBuZWVkIHRvIGluc3RhbGwgaXQuJyk7XG59O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuaW5zdGFsbERhdGVUaW1lVmFsaWRhdG9ycyA9IGZ1bmN0aW9uIGluc3RhbGxEYXRlVGltZVZhbGlkYXRvcnMgKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB3YXJuKCdEYXRlIHZhbGlkYXRpb25zIGFyZSBub3cgaW5zdGFsbGVkIGJ5IGRlZmF1bHQsIHlvdSBubyBsb25nZXIgbmVlZCB0byBpbnN0YWxsIGl0LicpO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBvcGVyYXRpbmcgbW9kZSBmb3IgYWxsIG5ld2x5IGNyZWF0ZWQgdmFsaWRhdG9ycy5cbiAqIHN0cmljdE1vZGUgPSB0cnVlOiBWYWx1ZXMgd2l0aG91dCBhIHJ1bGUgYXJlIGludmFsaWQgYW5kIGNhdXNlIGZhaWx1cmUuXG4gKiBzdHJpY3RNb2RlID0gZmFsc2U6IFZhbHVlcyB3aXRob3V0IGEgcnVsZSBhcmUgdmFsaWQgYW5kIGFyZSBza2lwcGVkLlxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3RNb2RlLlxuICovXG5WYWxpZGF0b3Iuc2V0U3RyaWN0TW9kZSA9IGZ1bmN0aW9uIHNldFN0cmljdE1vZGUgKHN0cmljdE1vZGUpIHtcbiAgICBpZiAoIHN0cmljdE1vZGUgPT09IHZvaWQgMCApIHN0cmljdE1vZGUgPSB0cnVlO1xuXG4gIFNUUklDVF9NT0RFID0gc3RyaWN0TW9kZTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgZGljdGlvbmFyeSwgb3ZlcndyaXRpbmcgZXhpc3RpbmcgdmFsdWVzIGFuZCBhZGRpbmcgbmV3IG9uZXMuXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFte29iamVjdH0gZGF0YSBUaGUgZGljdGlvbmFyeSBvYmplY3QuXG4gKi9cblZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gdXBkYXRlRGljdGlvbmFyeSAoZGF0YSkge1xuICBESUNUSU9OQVJZLm1lcmdlKGRhdGEpO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbG9jYWxlIG9iamVjdCB0byB0aGUgZGljdGlvbmFyeS5cbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gbG9jYWxlIFxuICovXG5WYWxpZGF0b3IuYWRkTG9jYWxlID0gZnVuY3Rpb24gYWRkTG9jYWxlIChsb2NhbGUpIHtcbiAgaWYgKCEgbG9jYWxlLm5hbWUpIHtcbiAgICB3YXJuKCdZb3VyIGxvY2FsZSBtdXN0IGhhdmUgYSBuYW1lIHByb3BlcnR5Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy51cGRhdGVEaWN0aW9uYXJ5KCggb2JqID0ge30sIG9ialtsb2NhbGUubmFtZV0gPSBsb2NhbGUsIG9iaiApKTtcbiAgICB2YXIgb2JqO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgbG9jYWxlIG9iamVjdCB0byB0aGUgZGljdGlvbmFyeS5cbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gbG9jYWxlIFxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmFkZExvY2FsZSA9IGZ1bmN0aW9uIGFkZExvY2FsZSAobG9jYWxlKSB7XG4gIFZhbGlkYXRvci5hZGRMb2NhbGUobG9jYWxlKTtcbn07XG5cbi8qKlxuICogQWRkcyBhbmQgc2V0cyB0aGUgY3VycmVudCBsb2NhbGUgZm9yIHRoZSB2YWxpZGF0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxhbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBkaWN0aW9uYXJ5XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUubG9jYWxpemUgPSBmdW5jdGlvbiBsb2NhbGl6ZSAobGFuZywgZGljdGlvbmFyeSkge1xuICBWYWxpZGF0b3IubG9jYWxpemUobGFuZywgZGljdGlvbmFyeSk7XG59O1xuXG4vKipcbiAqIEFkZHMgYW5kIHNldHMgdGhlIGN1cnJlbnQgbG9jYWxlIGZvciB0aGUgdmFsaWRhdG9yLlxuICogXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZ1xuICogQHBhcmFtIHtPYmplY3R9IGRpY3Rpb25hcnlcbiAqL1xuVmFsaWRhdG9yLmxvY2FsaXplID0gZnVuY3Rpb24gbG9jYWxpemUgKGxhbmcsIGRpY3Rpb25hcnkpIHtcbiAgLy8gbWVyZ2UgdGhlIGRpY3Rpb25hcnkuXG4gIGlmIChkaWN0aW9uYXJ5KSB7XG4gICAgZGljdGlvbmFyeSA9IGFzc2lnbih7fSwgZGljdGlvbmFyeSwgeyBuYW1lOiBsYW5nIH0pO1xuICAgIFZhbGlkYXRvci5hZGRMb2NhbGUoZGljdGlvbmFyeSk7XG4gIH1cblxuICAvLyBzZXQgdGhlIGxvY2FsZS5cbiAgVmFsaWRhdG9yLmxvY2FsZSA9IGxhbmc7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVycyBhIGZpZWxkIHRvIGJlIHZhbGlkYXRlZC5cbiAqXG4gKiBAcGFyYW17RmllbGR8T2JqZWN0fSBuYW1lIFRoZSBmaWVsZCBuYW1lLlxuICogQHJldHVybiB7RmllbGR9XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoIChmaWVsZCkge1xuICAvLyBkZXByZWNhdGU6IGhhbmRsZSBvbGQgc2lnbmF0dXJlLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBmaWVsZCA9IGFzc2lnbih7fSwge1xuICAgICAgbmFtZTogYXJndW1lbnRzWzBdLFxuICAgICAgcnVsZXM6IGFyZ3VtZW50c1sxXVxuICAgIH0sIGFyZ3VtZW50c1syXSB8fCB7IHZtOiB7ICR2YWxpZGF0b3I6IHRoaXMgfSB9KTtcbiAgfVxuXG4gIC8vIGZpeGVzIGluaXRpYWwgdmFsdWUgZGV0ZWN0aW9uIHdpdGggdi1tb2RlbCBhbmQgc2VsZWN0IGVsZW1lbnRzLlxuICB2YXIgdmFsdWUgPSBmaWVsZC5pbml0aWFsVmFsdWU7XG4gIGlmICghKGZpZWxkIGluc3RhbmNlb2YgRmllbGQpKSB7XG4gICAgZmllbGQgPSBuZXcgRmllbGQoZmllbGQuZWwgfHwgbnVsbCwgZmllbGQpO1xuICB9XG5cbiAgdGhpcy5maWVsZHMucHVzaChmaWVsZCk7XG5cbiAgLy8gdmFsaWRhdGUgdGhlIGZpZWxkIGluaXRpYWxseVxuICBpZiAoZmllbGQuaW5pdGlhbCkge1xuICAgIHRoaXMudmFsaWRhdGUoKFwiI1wiICsgKGZpZWxkLmlkKSksIHZhbHVlIHx8IGZpZWxkLnZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl92YWxpZGF0ZShmaWVsZCwgdmFsdWUgfHwgZmllbGQudmFsdWUsIHRydWUpLnRoZW4oZnVuY3Rpb24gKHZhbGlkKSB7XG4gICAgICBmaWVsZC5mbGFncy52YWxpZCA9IHZhbGlkO1xuICAgICAgZmllbGQuZmxhZ3MuaW52YWxpZCA9ICF2YWxpZDtcbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuX2FkZEZsYWcoZmllbGQsIGZpZWxkLnNjb3BlKTtcbiAgcmV0dXJuIGZpZWxkO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBmbGFncyBvbiBhIGZpZWxkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gZmxhZ3NcbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5mbGFnID0gZnVuY3Rpb24gZmxhZyAobmFtZSwgZmxhZ3MpIHtcbiAgdmFyIGZpZWxkID0gdGhpcy5fcmVzb2x2ZUZpZWxkKG5hbWUpO1xuICBpZiAoISBmaWVsZCB8fCAhZmxhZ3MpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmaWVsZC5zZXRGbGFncyhmbGFncyk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBmaWVsZCBmcm9tIHRoZSB2YWxpZGF0b3IuXG4gKlxuICogQHBhcmFte1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZmllbGQuXG4gKiBAcGFyYW0ge1N0cmluZ30gc2NvcGUgVGhlIG5hbWUgb2YgdGhlIGZpZWxkIHNjb3BlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLmRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCAobmFtZSwgc2NvcGUpIHtcbiAgdmFyIGZpZWxkID0gbmFtZSBpbnN0YW5jZW9mIEZpZWxkID8gbmFtZSA6IHRoaXMuX3Jlc29sdmVGaWVsZChuYW1lLCBzY29wZSk7XG4gIGlmICghZmllbGQpIHsgcmV0dXJuOyB9XG5cbiAgZmllbGQuZGVzdHJveSgpO1xuICB0aGlzLmVycm9ycy5yZW1vdmUoZmllbGQubmFtZSwgZmllbGQuc2NvcGUsIGZpZWxkLmlkKTtcbiAgdGhpcy5maWVsZHMucmVtb3ZlKGZpZWxkKTtcbiAgdmFyIGZsYWdzID0gdGhpcy5mbGFncztcbiAgaWYgKGZpZWxkLnNjb3BlICYmIGZsYWdzWyhcIiRcIiArIChmaWVsZC5zY29wZSkpXSkge1xuICAgIGRlbGV0ZSBmbGFnc1soXCIkXCIgKyAoZmllbGQuc2NvcGUpKV1bZmllbGQubmFtZV07XG4gIH0gZWxzZSBpZiAoIWZpZWxkLnNjb3BlKSB7XG4gICAgZGVsZXRlIGZsYWdzW2ZpZWxkLm5hbWVdO1xuICB9XG5cbiAgdGhpcy5mbGFncyA9IGFzc2lnbih7fSwgZmxhZ3MpO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgY3VzdG9tIHZhbGlkYXRvciB0byB0aGUgbGlzdCBvZiB2YWxpZGF0aW9uIHJ1bGVzLlxuICpcbiAqIEBwYXJhbXtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRvci5cbiAqIEBwYXJhbXtvYmplY3R8ZnVuY3Rpb259IHZhbGlkYXRvciBUaGUgdmFsaWRhdG9yIG9iamVjdC9mdW5jdGlvbi5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQgKG5hbWUsIHZhbGlkYXRvcikge1xuICBWYWxpZGF0b3IuZXh0ZW5kKG5hbWUsIHZhbGlkYXRvcik7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgYSBmaWVsZCwgdXBkYXRpbmcgYm90aCBlcnJvcnMgYW5kIGZsYWdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBkaWZmIFxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoaWQsIHJlZikge1xuICAgIHZhciBzY29wZSA9IHJlZi5zY29wZTtcblxuICB2YXIgZmllbGQgPSB0aGlzLl9yZXNvbHZlRmllbGQoKFwiI1wiICsgaWQpKTtcbiAgdGhpcy5lcnJvcnMudXBkYXRlKGlkLCB7IHNjb3BlOiBzY29wZSB9KTtcblxuICAvLyByZW1vdmUgb2xkIHNjb3BlLlxuICBpZiAoZmllbGQuc2NvcGUgJiYgdGhpcy5mbGFnc1soXCIkXCIgKyAoZmllbGQuc2NvcGUpKV0pIHtcbiAgICBkZWxldGUgdGhpcy5mbGFnc1soXCIkXCIgKyAoZmllbGQuc2NvcGUpKV1bZmllbGQubmFtZV07XG4gIH0gZWxzZSBpZiAoIWZpZWxkLnNjb3BlKSB7XG4gICAgZGVsZXRlIHRoaXMuZmxhZ3NbZmllbGQubmFtZV07XG4gIH1cblxuICB0aGlzLl9hZGRGbGFnKGZpZWxkLCBzY29wZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgYSBydWxlIGZyb20gdGhlIGxpc3Qgb2YgdmFsaWRhdG9ycy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IvcnVsZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKG5hbWUpIHtcbiAgVmFsaWRhdG9yLnJlbW92ZShuYW1lKTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgdmFsaWRhdG9yIGN1cnJlbnQgbGFuZ2F1Z2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIGxvY2FsZSBvciBsYW5ndWFnZSBpZC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5zZXRMb2NhbGUgPSBmdW5jdGlvbiBzZXRMb2NhbGUgKGxhbmd1YWdlKSB7XG4gIHRoaXMubG9jYWxlID0gbGFuZ3VhZ2U7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIG1lc3NhZ2VzIGRpY3Rpb25hcnksIG92ZXJ3cml0aW5nIGV4aXN0aW5nIHZhbHVlcyBhbmQgYWRkaW5nIG5ldyBvbmVzLlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbXtvYmplY3R9IGRhdGEgVGhlIG1lc3NhZ2VzIG9iamVjdC5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS51cGRhdGVEaWN0aW9uYXJ5ID0gZnVuY3Rpb24gdXBkYXRlRGljdGlvbmFyeSAoZGF0YSkge1xuICBWYWxpZGF0b3IudXBkYXRlRGljdGlvbmFyeShkYXRhKTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIGEgdmFsdWUgYWdhaW5zdCBhIHJlZ2lzdGVyZWQgZmllbGQgdmFsaWRhdGlvbnMuXG4gKlxuICogQHBhcmFte3N0cmluZ30gbmFtZSB0aGUgZmllbGQgbmFtZS5cbiAqIEBwYXJhbXsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkLlxuICogQHBhcmFtIHtTdHJpbmd9IHNjb3BlIFRoZSBzY29wZSBvZiB0aGUgZmllbGQuXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUgKG5hbWUsIHZhbHVlLCBzY29wZSkge1xuICAgIGlmICggc2NvcGUgPT09IHZvaWQgMCApIHNjb3BlID0gbnVsbDtcblxuICBpZiAodGhpcy5wYXVzZWQpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIC8vIG92ZXJsb2FkIHRvIHZhbGlkYXRlIGFsbC5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVNjb3BlcygpO1xuICB9XG5cbiAgLy8gb3ZlcmxvYWQgdG8gdmFsaWRhdGUgc2NvcGVsZXNzIGZpZWxkcy5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgYXJndW1lbnRzWzBdID09PSAnKicpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUFsbCgpO1xuICB9XG5cbiAgLy8gb3ZlcmxvYWQgdG8gdmFsaWRhdGUgYSBzY29wZS5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ3N0cmluZycgJiYgL14oLispXFwuXFwqJC8udGVzdChhcmd1bWVudHNbMF0pKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBhcmd1bWVudHNbMF0ubWF0Y2goL14oLispXFwuXFwqJC8pWzFdO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlQWxsKG1hdGNoZWQpO1xuICB9XG5cbiAgdmFyIGZpZWxkID0gdGhpcy5fcmVzb2x2ZUZpZWxkKG5hbWUsIHNjb3BlKTtcbiAgaWYgKCFmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLl9oYW5kbGVGaWVsZE5vdEZvdW5kKG5hbWUsIHNjb3BlKTtcbiAgfVxuXG4gIHRoaXMuZXJyb3JzLnJlbW92ZShmaWVsZC5uYW1lLCBmaWVsZC5zY29wZSwgZmllbGQuaWQpO1xuICBmaWVsZC5mbGFncy5wZW5kaW5nID0gdHJ1ZTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICB9XG5cbiAgdmFyIHNpbGVudFJ1biA9IGZpZWxkLmlzRGlzYWJsZWQ7XG5cbiAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKGZpZWxkLCB2YWx1ZSwgc2lsZW50UnVuKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBmaWVsZC5zZXRGbGFncyh7XG4gICAgICBwZW5kaW5nOiBmYWxzZSxcbiAgICAgIHZhbGlkOiByZXN1bHQsXG4gICAgICB2YWxpZGF0ZWQ6IHRydWVcbiAgICB9KTtcblxuICAgIGlmIChzaWxlbnRSdW4pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFBhdXNlcyB0aGUgdmFsaWRhdG9yLlxuICpcbiAqIEByZXR1cm4ge1ZhbGlkYXRvcn1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlICgpIHtcbiAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXN1bWVzIHRoZSB2YWxpZGF0b3IuXG4gKlxuICogQHJldHVybiB7VmFsaWRhdG9yfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSAoKSB7XG4gIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBlYWNoIHZhbHVlIGFnYWluc3QgdGhlIGNvcnJlc3BvbmRpbmcgZmllbGQgdmFsaWRhdGlvbnMuXG4gKiBAcGFyYW17T2JqZWN0fFN0cmluZ30gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYmUgdmFsaWRhdGVkLlxuICogQHJldHVybiB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgdmFsaWRhdGlvbiByZXN1bHQuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGVBbGwgPSBmdW5jdGlvbiB2YWxpZGF0ZUFsbCAodmFsdWVzKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh0aGlzLnBhdXNlZCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpOyB9XG5cbiAgdmFyIG1hdGNoZXIgPSBudWxsO1xuICB2YXIgcHJvdmlkZWRWYWx1ZXMgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBtYXRjaGVyID0geyBzY29wZTogdmFsdWVzIH07XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWVzKSkge1xuICAgIG1hdGNoZXIgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4geyBuYW1lOiBrZXksIHNjb3BlOiBhcmd1bWVudHMkMVsxXSB8fCBudWxsIH07XG4gICAgfSk7XG4gICAgcHJvdmlkZWRWYWx1ZXMgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBtYXRjaGVyID0geyBzY29wZTogbnVsbCB9OyAvLyBnbG9iYWwgc2NvcGUuXG4gIH1cblxuICB2YXIgcHJvbWlzZXMgPSB0aGlzLmZpZWxkcy5maWx0ZXIobWF0Y2hlcikubWFwKGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gdGhpcyQxLnZhbGlkYXRlKFxuICAgIChcIiNcIiArIChmaWVsZC5pZCkpLFxuICAgIHByb3ZpZGVkVmFsdWVzID8gdmFsdWVzW2ZpZWxkLm5hbWVdIDogZmllbGQudmFsdWVcbiAgKTsgfSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7IHJldHVybiByZXN1bHRzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9KTsgfSk7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgc2NvcGVzLlxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBbGwgcHJvbWlzZXMgcmVzdWx0ZWQgZnJvbSBlYWNoIHNjb3BlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlU2NvcGVzID0gZnVuY3Rpb24gdmFsaWRhdGVTY29wZXMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh0aGlzLnBhdXNlZCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpOyB9XG5cbiAgdmFyIHByb21pc2VzID0gdGhpcy5maWVsZHMubWFwKGZ1bmN0aW9uIChmaWVsZCkgeyByZXR1cm4gdGhpcyQxLnZhbGlkYXRlKFxuICAgIChcIiNcIiArIChmaWVsZC5pZCkpLFxuICAgIGZpZWxkLnZhbHVlXG4gICk7IH0pO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAocmVzdWx0cykgeyByZXR1cm4gcmVzdWx0cy5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfSk7IH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBmaWVsZHMgdG8gYmUgdmFsaWRhdGVkLlxuICpcbiAqIEBwYXJhbXtvYmplY3R9IHZhbGlkYXRpb25zXG4gKiBAcmV0dXJuIHtvYmplY3R9IE5vcm1hbGl6ZWQgb2JqZWN0LlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9jcmVhdGVGaWVsZHMgPSBmdW5jdGlvbiBfY3JlYXRlRmllbGRzICh2YWxpZGF0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICghdmFsaWRhdGlvbnMpIHsgcmV0dXJuOyB9XG5cbiAgT2JqZWN0LmtleXModmFsaWRhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhc3NpZ24oe30sIHsgbmFtZTogZmllbGQsIHJ1bGVzOiB2YWxpZGF0aW9uc1tmaWVsZF0gfSk7XG4gICAgdGhpcyQxLmF0dGFjaChvcHRpb25zKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERhdGUgcnVsZXMgbmVlZCB0aGUgZXhpc3RhbmNlIG9mIGEgZm9ybWF0LCBzbyBkYXRlX2Zvcm1hdCBtdXN0IGJlIHN1cHBsaWVkLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIHJ1bGUgbmFtZS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbGlkYXRpb25zIHRoZSBmaWVsZCB2YWxpZGF0aW9ucy5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fZ2V0RGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIF9nZXREYXRlRm9ybWF0ICh2YWxpZGF0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gbnVsbDtcbiAgaWYgKHZhbGlkYXRpb25zLmRhdGVfZm9ybWF0ICYmIEFycmF5LmlzQXJyYXkodmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXQpKSB7XG4gICAgZm9ybWF0ID0gdmFsaWRhdGlvbnMuZGF0ZV9mb3JtYXRbMF07XG4gIH1cblxuICByZXR1cm4gZm9ybWF0IHx8IHRoaXMuZGljdGlvbmFyeS5nZXREYXRlRm9ybWF0KHRoaXMubG9jYWxlKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgcnVsZSBpcyBhIGRhdGUgcnVsZS5cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5faXNBRGF0ZVJ1bGUgPSBmdW5jdGlvbiBfaXNBRGF0ZVJ1bGUgKHJ1bGUpIHtcbiAgcmV0dXJuICEhIH5bJ2FmdGVyJywgJ2JlZm9yZScsICdkYXRlX2JldHdlZW4nLCAnZGF0ZV9mb3JtYXQnXS5pbmRleE9mKHJ1bGUpO1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGFuIGVycm9yIG1lc3NhZ2UgZm9yIGZpZWxkIGFuZCBhIHJ1bGUuXG4gKlxuICogQHBhcmFte0ZpZWxkfSBmaWVsZCBUaGUgZmllbGQgb2JqZWN0LlxuICogQHBhcmFte29iamVjdH0gcnVsZSBOb3JtYWxpemVkIHJ1bGUgb2JqZWN0LlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgQWRkaXRpb25hbCBJbmZvcm1hdGlvbiBhYm91dCB0aGUgdmFsaWRhdGlvbiByZXN1bHQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9mb3JtYXRFcnJvck1lc3NhZ2UgPSBmdW5jdGlvbiBfZm9ybWF0RXJyb3JNZXNzYWdlIChmaWVsZCwgcnVsZSwgZGF0YSwgdGFyZ2V0TmFtZSkge1xuICAgIGlmICggZGF0YSA9PT0gdm9pZCAwICkgZGF0YSA9IHt9O1xuICAgIGlmICggdGFyZ2V0TmFtZSA9PT0gdm9pZCAwICkgdGFyZ2V0TmFtZSA9IG51bGw7XG5cbiAgdmFyIG5hbWUgPSB0aGlzLl9nZXRGaWVsZERpc3BsYXlOYW1lKGZpZWxkKTtcbiAgdmFyIHBhcmFtcyA9IHRoaXMuX2dldExvY2FsaXplZFBhcmFtcyhydWxlLCB0YXJnZXROYW1lKTtcbiAgLy8gRGVmYXVsdHMgdG8gZW5nbGlzaCBtZXNzYWdlLlxuICBpZiAoIXRoaXMuZGljdGlvbmFyeS5oYXNMb2NhbGUoTE9DQUxFKSkge1xuICAgIHZhciBtc2ckMSA9IHRoaXMuZGljdGlvbmFyeS5nZXRGaWVsZE1lc3NhZ2UoJ2VuJywgZmllbGQubmFtZSwgcnVsZS5uYW1lKTtcblxuICAgIHJldHVybiBpc0NhbGxhYmxlKG1zZyQxKSA/IG1zZyQxKG5hbWUsIHBhcmFtcywgZGF0YSkgOiBtc2ckMTtcbiAgfVxuXG4gIHZhciBtc2cgPSB0aGlzLmRpY3Rpb25hcnkuZ2V0RmllbGRNZXNzYWdlKExPQ0FMRSwgZmllbGQubmFtZSwgcnVsZS5uYW1lKTtcblxuICByZXR1cm4gaXNDYWxsYWJsZShtc2cpID8gbXNnKG5hbWUsIHBhcmFtcywgZGF0YSkgOiBtc2c7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgdGhlIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoZSBydWxlIChtYWlubHkgZm9yIHRhcmdldCBmaWVsZHMpLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9nZXRMb2NhbGl6ZWRQYXJhbXMgPSBmdW5jdGlvbiBfZ2V0TG9jYWxpemVkUGFyYW1zIChydWxlLCB0YXJnZXROYW1lKSB7XG4gICAgaWYgKCB0YXJnZXROYW1lID09PSB2b2lkIDAgKSB0YXJnZXROYW1lID0gbnVsbDtcblxuICBpZiAoflsnYWZ0ZXInLCAnYmVmb3JlJywgJ2NvbmZpcm1lZCddLmluZGV4T2YocnVsZS5uYW1lKSAmJiBydWxlLnBhcmFtcyAmJiBydWxlLnBhcmFtc1swXSkge1xuICAgIHZhciBsb2NhbGl6ZWROYW1lID0gdGFyZ2V0TmFtZSB8fCB0aGlzLmRpY3Rpb25hcnkuZ2V0QXR0cmlidXRlKExPQ0FMRSwgcnVsZS5wYXJhbXNbMF0sIHJ1bGUucGFyYW1zWzBdKTtcbiAgICByZXR1cm4gW2xvY2FsaXplZE5hbWVdLmNvbmNhdChydWxlLnBhcmFtcy5zbGljZSgxKSk7XG4gIH1cblxuICByZXR1cm4gcnVsZS5wYXJhbXM7XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIGFuIGFwcHJvcGlhdGUgZGlzcGxheSBuYW1lLCBmaXJzdCBjaGVja2luZyAnZGF0YS1hcycgb3IgdGhlIHJlZ2lzdGVyZWQgJ3ByZXR0eU5hbWUnXG4gKiBUaGVuIHRoZSBkaWN0aW9uYXJ5LCB0aGVuIGZhbGxzYmFjayB0byBmaWVsZCBuYW1lLlxuICogQHBhcmFtIHtGaWVsZH0gZmllbGQgVGhlIGZpZWxkIG9iamVjdC5cbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIG5hbWUgdG8gYmUgdXNlZCBpbiB0aGUgZXJyb3JzLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9nZXRGaWVsZERpc3BsYXlOYW1lID0gZnVuY3Rpb24gX2dldEZpZWxkRGlzcGxheU5hbWUgKGZpZWxkKSB7XG4gIHJldHVybiBmaWVsZC5kaXNwbGF5TmFtZSB8fCB0aGlzLmRpY3Rpb25hcnkuZ2V0QXR0cmlidXRlKExPQ0FMRSwgZmllbGQubmFtZSwgZmllbGQubmFtZSk7XG59O1xuXG4vKipcbiAqIEFkZHMgYSBmaWVsZCBmbGFncyB0byB0aGUgZmxhZ3MgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSB7RmllbGR9IGZpZWxkIFxuICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gc2NvcGUgXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuX2FkZEZsYWcgPSBmdW5jdGlvbiBfYWRkRmxhZyAoZmllbGQsIHNjb3BlKSB7XG4gICAgaWYgKCBzY29wZSA9PT0gdm9pZCAwICkgc2NvcGUgPSBudWxsO1xuXG4gIGlmICghc2NvcGUpIHtcbiAgICB0aGlzLmZsYWdzID0gYXNzaWduKHt9LCB0aGlzLmZsYWdzLCAoIG9iaiA9IHt9LCBvYmpbKFwiXCIgKyAoZmllbGQubmFtZSkpXSA9IGZpZWxkLmZsYWdzLCBvYmogKSk7XG4gICAgICB2YXIgb2JqO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzY29wZU9iaiA9IGFzc2lnbih7fSwgdGhpcy5mbGFnc1soXCIkXCIgKyBzY29wZSldIHx8IHt9LCAoIG9iaiQxID0ge30sIG9iaiQxWyhcIlwiICsgKGZpZWxkLm5hbWUpKV0gPSBmaWVsZC5mbGFncywgb2JqJDEgKSk7XG4gICAgdmFyIG9iaiQxO1xuICB0aGlzLmZsYWdzID0gYXNzaWduKHt9LCB0aGlzLmZsYWdzLCAoIG9iaiQyID0ge30sIG9iaiQyWyhcIiRcIiArIHNjb3BlKV0gPSBzY29wZU9iaiwgb2JqJDIgKSk7XG4gICAgdmFyIG9iaiQyO1xufTtcblxuLyoqXG4gKiBUZXN0cyBhIHNpbmdsZSBpbnB1dCB2YWx1ZSBhZ2FpbnN0IGEgcnVsZS5cbiAqXG4gKiBAcGFyYW17RmllbGR9IGZpZWxkIFRoZSBmaWVsZCB1bmRlciB2YWxpZGF0aW9uLlxuICogQHBhcmFteyp9IHZhbHVldGhlIHZhbHVlIG9mIHRoZSBmaWVsZC5cbiAqIEBwYXJhbXtvYmplY3R9IHJ1bGUgdGhlIHJ1bGUgb2JqZWN0LlxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBpdCBwYXNzZXMgdGhlIGNoZWNrLlxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl90ZXN0ID0gZnVuY3Rpb24gX3Rlc3QgKGZpZWxkLCB2YWx1ZSwgcnVsZSwgc2lsZW50KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIHZhbGlkYXRvciA9IFJVTEVTW3J1bGUubmFtZV07XG4gIHZhciBwYXJhbXMgPSBBcnJheS5pc0FycmF5KHJ1bGUucGFyYW1zKSA/IHRvQXJyYXkocnVsZS5wYXJhbXMpIDogW107XG4gIHZhciB0YXJnZXROYW1lID0gbnVsbDtcbiAgaWYgKCF2YWxpZGF0b3IgfHwgdHlwZW9mIHZhbGlkYXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKChcIk5vIHN1Y2ggdmFsaWRhdG9yICdcIiArIChydWxlLm5hbWUpICsgXCInIGV4aXN0cy5cIikpO1xuICB9XG5cbiAgLy8gaGFzIGZpZWxkIGRlcGVuZW5jaWVzXG4gIGlmICgvKGNvbmZpcm1lZHxhZnRlcnxiZWZvcmUpLy50ZXN0KHJ1bGUubmFtZSkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZmluZChmaWVsZC5kZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgPT09IHJ1bGUubmFtZTsgfSk7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGFyZ2V0TmFtZSA9IHRhcmdldC5maWVsZC5kaXNwbGF5TmFtZTtcbiAgICAgIHBhcmFtcyA9IFt0YXJnZXQuZmllbGQudmFsdWVdLmNvbmNhdChwYXJhbXMuc2xpY2UoMSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChydWxlLm5hbWUgPT09ICdyZXF1aXJlZCcgJiYgZmllbGQucmVqZWN0c0ZhbHNlKSB7XG4gICAgLy8gaW52YWxpZGF0ZSBmYWxzZSBpZiBubyBhcmdzIHdlcmUgc3BlY2lmaWVkIGFuZCB0aGUgZmllbGQgcmVqZWN0cyBmYWxzZSBieSBkZWZhdWx0LlxuICAgIHBhcmFtcyA9IHBhcmFtcy5sZW5ndGggPyBwYXJhbXMgOiBbdHJ1ZV07XG4gIH1cblxuICBpZiAodGhpcy5faXNBRGF0ZVJ1bGUocnVsZS5uYW1lKSkge1xuICAgIHZhciBkYXRlRm9ybWF0ID0gdGhpcy5fZ2V0RGF0ZUZvcm1hdChmaWVsZC5ydWxlcyk7XG4gICAgaWYgKHJ1bGUubmFtZSAhPT0gJ2RhdGVfZm9ybWF0Jykge1xuICAgICAgcGFyYW1zLnB1c2goZGF0ZUZvcm1hdCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvcih2YWx1ZSwgcGFyYW1zKTtcblxuICAvLyBJZiBpdCBpcyBhIHByb21pc2UuXG4gIGlmIChpc0NhbGxhYmxlKHJlc3VsdC50aGVuKSkge1xuICAgIHJldHVybiByZXN1bHQudGhlbihmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICB2YXIgYWxsVmFsaWQgPSB0cnVlO1xuICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgYWxsVmFsaWQgPSB2YWx1ZXMuZXZlcnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIChpc09iamVjdCh0KSA/IHQudmFsaWQgOiB0KTsgfSk7XG4gICAgICB9IGVsc2UgeyAvLyBJcyBhIHNpbmdsZSBvYmplY3QvYm9vbGVhbi5cbiAgICAgICAgYWxsVmFsaWQgPSBpc09iamVjdCh2YWx1ZXMpID8gdmFsdWVzLnZhbGlkIDogdmFsdWVzO1xuICAgICAgICBkYXRhID0gdmFsdWVzLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWxsVmFsaWQgJiYgIXNpbGVudCkge1xuICAgICAgICB0aGlzJDEuZXJyb3JzLmFkZCh7XG4gICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxuICAgICAgICAgIG1zZzogdGhpcyQxLl9mb3JtYXRFcnJvck1lc3NhZ2UoZmllbGQsIHJ1bGUsIGRhdGEsIHRhcmdldE5hbWUpLFxuICAgICAgICAgIHJ1bGU6IHJ1bGUubmFtZSxcbiAgICAgICAgICBzY29wZTogZmllbGQuc2NvcGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGxWYWxpZDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghaXNPYmplY3QocmVzdWx0KSkge1xuICAgIHJlc3VsdCA9IHsgdmFsaWQ6IHJlc3VsdCwgZGF0YToge30gfTtcbiAgfVxuXG4gIGlmICghcmVzdWx0LnZhbGlkICYmICFzaWxlbnQpIHtcbiAgICB0aGlzLmVycm9ycy5hZGQoe1xuICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXG4gICAgICBtc2c6IHRoaXMuX2Zvcm1hdEVycm9yTWVzc2FnZShmaWVsZCwgcnVsZSwgcmVzdWx0LmRhdGEsIHRhcmdldE5hbWUpLFxuICAgICAgcnVsZTogcnVsZS5uYW1lLFxuICAgICAgc2NvcGU6IGZpZWxkLnNjb3BlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LnZhbGlkO1xufTtcblxuLyoqXG4gKiBNZXJnZXMgYSB2YWxpZGF0b3Igb2JqZWN0IGludG8gdGhlIFJVTEVTIGFuZCBNZXNzYWdlcy5cbiAqXG4gKiBAcGFyYW17c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0b3IuXG4gKiBAcGFyYW17ZnVuY3Rpb258b2JqZWN0fSB2YWxpZGF0b3IgVGhlIHZhbGlkYXRvciBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5fbWVyZ2UgPSBmdW5jdGlvbiBfbWVyZ2UgKG5hbWUsIHZhbGlkYXRvcikge1xuICBpZiAoaXNDYWxsYWJsZSh2YWxpZGF0b3IpKSB7XG4gICAgUlVMRVNbbmFtZV0gPSB2YWxpZGF0b3I7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgUlVMRVNbbmFtZV0gPSB2YWxpZGF0b3IudmFsaWRhdGU7XG4gIGlmIChpc0NhbGxhYmxlKHZhbGlkYXRvci5nZXRNZXNzYWdlKSkge1xuICAgIERJQ1RJT05BUlkuc2V0TWVzc2FnZShMT0NBTEUsIG5hbWUsIHZhbGlkYXRvci5nZXRNZXNzYWdlKTtcbiAgfVxuXG4gIGlmICh2YWxpZGF0b3IubWVzc2FnZXMpIHtcbiAgICBESUNUSU9OQVJZLm1lcmdlKFxuICAgICAgT2JqZWN0LmtleXModmFsaWRhdG9yLm1lc3NhZ2VzKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwcmV2O1xuICAgICAgICBkaWN0W2N1cnJdID0ge1xuICAgICAgICAgIG1lc3NhZ2VzOiAoIG9iaiA9IHt9LCBvYmpbbmFtZV0gPSB2YWxpZGF0b3IubWVzc2FnZXNbY3Vycl0sIG9iaiApXG4gICAgICAgIH07XG4gICAgICAgICAgdmFyIG9iajtcblxuICAgICAgICByZXR1cm4gZGljdDtcbiAgICAgIH0sIHt9KVxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogR3VhcmRzIGZyb20gZXh0bnNpb24gdmlvbGF0aW9ucy5cbiAqXG4gKiBAcGFyYW17c3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqIEBwYXJhbXtvYmplY3R9IHZhbGlkYXRvciBhIHZhbGlkYXRpb24gcnVsZSBvYmplY3QuXG4gKi9cblZhbGlkYXRvci5fZ3VhcmRFeHRlbmQgPSBmdW5jdGlvbiBfZ3VhcmRFeHRlbmQgKG5hbWUsIHZhbGlkYXRvcikge1xuICBpZiAoaXNDYWxsYWJsZSh2YWxpZGF0b3IpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFpc0NhbGxhYmxlKHZhbGlkYXRvci52YWxpZGF0ZSkpIHtcbiAgICB0aHJvdyBjcmVhdGVFcnJvcihcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgKFwiRXh0ZW5zaW9uIEVycm9yOiBUaGUgdmFsaWRhdG9yICdcIiArIG5hbWUgKyBcIicgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGhhdmUgYSAndmFsaWRhdGUnIG1ldGhvZC5cIilcbiAgICApO1xuICB9XG5cbiAgaWYgKCFpc0NhbGxhYmxlKHZhbGlkYXRvci5nZXRNZXNzYWdlKSAmJiAhaXNPYmplY3QodmFsaWRhdG9yLm1lc3NhZ2VzKSkge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAoXCJFeHRlbnNpb24gRXJyb3I6IFRoZSB2YWxpZGF0b3IgJ1wiICsgbmFtZSArIFwiJyBtdXN0IGhhdmUgYSAnZ2V0TWVzc2FnZScgbWV0aG9kIG9yIGhhdmUgYSAnbWVzc2FnZXMnIG9iamVjdC5cIilcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIFRyaWVzIGRpZmZlcmVudCBzdHJhdGVnaWVzIHRvIGZpbmQgYSBmaWVsZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gc2NvcGVcbiAqIEByZXR1cm4ge0ZpZWxkfVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9yZXNvbHZlRmllbGQgPSBmdW5jdGlvbiBfcmVzb2x2ZUZpZWxkIChuYW1lLCBzY29wZSkge1xuICBpZiAoc2NvcGUpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IG5hbWU6IG5hbWUsIHNjb3BlOiBzY29wZSB9KTtcbiAgfVxuXG4gIGlmIChuYW1lWzBdID09PSAnIycpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMuZmluZCh7IGlkOiBuYW1lLnNsaWNlKDEpIH0pO1xuICB9XG5cbiAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICB2YXIgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZHMuZmluZCh7IG5hbWU6IHBhcnRzWzFdLCBzY29wZTogcGFydHNbMF0gfSk7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZmllbGRzLmZpbmQoeyBuYW1lOiBuYW1lLCBzY29wZTogbnVsbCB9KTtcbn07XG5cbi8qKlxuICogSGFuZGxlcyB3aGVuIGEgZmllbGQgaXMgbm90IGZvdW5kIGRlcGVuZGluZyBvbiB0aGUgc3RyaWN0IGZsYWcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzY29wZVxuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLl9oYW5kbGVGaWVsZE5vdEZvdW5kID0gZnVuY3Rpb24gX2hhbmRsZUZpZWxkTm90Rm91bmQgKG5hbWUsIHNjb3BlKSB7XG4gIGlmICghdGhpcy5zdHJpY3QpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTsgfVxuXG4gIHZhciBmdWxsTmFtZSA9IHNjb3BlID8gbmFtZSA6IChcIlwiICsgKHNjb3BlID8gc2NvcGUgKyAnLicgOiAnJykgKyBuYW1lKTtcbiAgdGhyb3cgY3JlYXRlRXJyb3IoXG4gICAgKFwiVmFsaWRhdGluZyBhIG5vbi1leGlzdGFudCBmaWVsZDogXFxcIlwiICsgZnVsbE5hbWUgKyBcIlxcXCIuIFVzZSBcXFwiYXR0YWNoKClcXFwiIGZpcnN0LlwiKVxuICApO1xufTtcblxuLyoqXG4gKiBTdGFydHMgdGhlIHZhbGlkYXRpb24gcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0ge0ZpZWxkfSBmaWVsZFxuICogQHBhcmFtIHtQcm9taXNlfSB2YWx1ZVxuICogQHBhcmFtIHtCb29sZWFufSBzaWxlbnRcbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGUgPSBmdW5jdGlvbiBfdmFsaWRhdGUgKGZpZWxkLCB2YWx1ZSwgc2lsZW50KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBzaWxlbnQgPT09IHZvaWQgMCApIHNpbGVudCA9IGZhbHNlO1xuXG4gIGlmICghZmllbGQuaXNSZXF1aXJlZCAmJiAoaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpIHx8IHZhbHVlID09PSAnJykpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICB9XG5cbiAgdmFyIHByb21pc2VzID0gW107XG4gIHZhciBpc0V4aXRFYXJseSA9IGZhbHNlO1xuICAvLyB1c2Ugb2YgJy5zb21lKCknIGlzIHRvIGJyZWFrIGl0ZXJhdGlvbiBpbiBtaWRkbGUgYnkgcmV0dXJuaW5nIHRydWVcbiAgT2JqZWN0LmtleXMoZmllbGQucnVsZXMpLnNvbWUoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyQxLl90ZXN0KGZpZWxkLCB2YWx1ZSwgeyBuYW1lOiBydWxlLCBwYXJhbXM6IGZpZWxkLnJ1bGVzW3J1bGVdIH0sIHNpbGVudCk7XG5cbiAgICBpZiAoaXNDYWxsYWJsZShyZXN1bHQudGhlbikpIHtcbiAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMkMS5mYXN0RXhpdCAmJiAhcmVzdWx0KSB7XG4gICAgICBpc0V4aXRFYXJseSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHRBc1Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0QXNQcm9taXNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFeGl0RWFybHk7XG4gIH0pO1xuXG4gIGlmIChpc0V4aXRFYXJseSkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTsgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAodmFsdWVzKSB7IHJldHVybiB2YWx1ZXMuZXZlcnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH0pOyB9KTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWYWxpZGF0b3IucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWYWxpZGF0b3IsIHN0YXRpY0FjY2Vzc29ycyApO1xuXG52YXIgZmFrZUZsYWdzID0gY3JlYXRlUHJveHkoe30sIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQgKHRhcmdldCwga2V5KSB7XG4gICAgLy8gaXMgYSBzY29wZVxuICAgIGlmIChTdHJpbmcoa2V5KS5pbmRleE9mKCckJykgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWtlRmxhZ3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUZsYWdzKCk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIHBhcmVudCB2YWxpZGF0b3IgaW5zdGFuY2Ugd2FzIHJlcXVlc3RlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBpbmplY3Rpb25zXG4gKi9cbnZhciByZXF1ZXN0c1ZhbGlkYXRvciA9IGZ1bmN0aW9uIChpbmplY3Rpb25zKSB7XG4gIGlmICghIGluamVjdGlvbnMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3Rpb25zKSAmJiB+aW5qZWN0aW9ucy5pbmRleE9mKCckdmFsaWRhdG9yJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc09iamVjdChpbmplY3Rpb25zKSAmJiBpbmplY3Rpb25zLiR2YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHZhbGlkYXRvciBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xudmFyIGNyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICh2bSwgb3B0aW9ucykgeyByZXR1cm4gbmV3IFZhbGlkYXRvcihudWxsLCB7IHZtOiB2bSwgZmFzdEV4aXQ6IG9wdGlvbnMuZmFzdEV4aXQgfSk7IH07XG5cbnZhciBtYWtlTWl4aW4gPSBmdW5jdGlvbiAoVnVlLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHZhciBtaXhpbiA9IHt9O1xuICBtaXhpbi5wcm92aWRlID0gZnVuY3Rpb24gcHJvdmlkZXNWYWxpZGF0b3IgKCkge1xuICAgIGlmICh0aGlzLiR2YWxpZGF0b3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICR2YWxpZGF0b3I6IHRoaXMuJHZhbGlkYXRvclxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH07XG5cbiAgbWl4aW4uYmVmb3JlQ3JlYXRlID0gZnVuY3Rpb24gYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAvLyBpZiBpdHMgYSByb290IGluc3RhbmNlLCBpbmplY3QgYW55d2F5cywgb3IgaWYgaXQgcmVxdWVzdGVkIGEgbmV3IGluc3RhbmNlLlxuICAgIGlmICh0aGlzLiRvcHRpb25zLiR2YWxpZGF0ZXMgfHwgIXRoaXMuJHBhcmVudCkge1xuICAgICAgdGhpcy4kdmFsaWRhdG9yID0gY3JlYXRlVmFsaWRhdG9yKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ZWQgPSByZXF1ZXN0c1ZhbGlkYXRvcih0aGlzLiRvcHRpb25zLmluamVjdCk7XG5cbiAgICAvLyBpZiBhdXRvbWF0aWMgaW5qZWN0aW9uIGlzIGVuYWJsZWQgYW5kIG5vIGluc3RhbmNlIHdhcyByZXF1ZXN0ZWQuXG4gICAgaWYgKCEgdGhpcy4kdmFsaWRhdG9yICYmIG9wdGlvbnMuaW5qZWN0ICYmICFyZXF1ZXN0ZWQpIHtcbiAgICAgIHRoaXMuJHZhbGlkYXRvciA9IGNyZWF0ZVZhbGlkYXRvcih0aGlzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBkb24ndCBpbmplY3QgZXJyb3JzIG9yIGZpZWxkQmFnIGFzIG5vIHZhbGlkYXRvciB3YXMgcmVzb2x2ZWQuXG4gICAgaWYgKCEgcmVxdWVzdGVkICYmICEgdGhpcy4kdmFsaWRhdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgaXMgYSB2YWxpZGF0b3IgYnV0IGl0IGlzbid0IGluamVjdGVkLCBtYXJrIGFzIHJlYWN0aXZlLlxuICAgIGlmICghIHJlcXVlc3RlZCAmJiB0aGlzLiR2YWxpZGF0b3IpIHtcbiAgICAgIFZ1ZS51dGlsLmRlZmluZVJlYWN0aXZlKHRoaXMuJHZhbGlkYXRvciwgJ2Vycm9ycycsIHRoaXMuJHZhbGlkYXRvci5lcnJvcnMpO1xuICAgICAgVnVlLnV0aWwuZGVmaW5lUmVhY3RpdmUodGhpcy4kdmFsaWRhdG9yLCAnZmxhZ3MnLCB0aGlzLiR2YWxpZGF0b3IuZmxhZ3MpO1xuICAgIH1cblxuICAgIGlmICghIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWQgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLiRvcHRpb25zLmNvbXB1dGVkW29wdGlvbnMuZXJyb3JCYWdOYW1lIHx8ICdlcnJvcnMnXSA9IGZ1bmN0aW9uIGVycm9yQmFnR2V0dGVyICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiR2YWxpZGF0b3IuZXJyb3JzO1xuICAgIH07XG4gICAgdGhpcy4kb3B0aW9ucy5jb21wdXRlZFtvcHRpb25zLmZpZWxkc0JhZ05hbWUgfHwgJ2ZpZWxkcyddID0gZnVuY3Rpb24gZmllbGRCYWdHZXR0ZXIgKCkge1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLiR2YWxpZGF0b3IuZmxhZ3MpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFrZUZsYWdzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kdmFsaWRhdG9yLmZsYWdzO1xuICAgIH07XG4gIH07XG5cbiAgbWl4aW4uYmVmb3JlRGVzdHJveSA9IGZ1bmN0aW9uIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIC8vIG1hcmsgdGhlIHZhbGlkYXRvciBwYXVzZWQgdG8gcHJldmVudCBkZWxheWVkIHZhbGlkYXRpb24uXG4gICAgaWYgKHRoaXMuJHZhbGlkYXRvciAmJiB0aGlzLiR2YWxpZGF0b3Iub3duZXJJZCA9PT0gdGhpcy5fdWlkICYmIGlzQ2FsbGFibGUodGhpcy4kdmFsaWRhdG9yLnBhdXNlKSkge1xuICAgICAgdGhpcy4kdmFsaWRhdG9yLnBhdXNlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBtaXhpbjtcbn07XG5cbnZhciBjb25maWcgPSB7XG4gIGxvY2FsZTogJ2VuJyxcbiAgZGVsYXk6IDAsXG4gIGVycm9yQmFnTmFtZTogJ2Vycm9ycycsXG4gIGRpY3Rpb25hcnk6IG51bGwsXG4gIHN0cmljdDogdHJ1ZSxcbiAgZmllbGRzQmFnTmFtZTogJ2ZpZWxkcycsXG4gIGNsYXNzZXM6IGZhbHNlLFxuICBjbGFzc05hbWVzOiB1bmRlZmluZWQsXG4gIGV2ZW50czogJ2lucHV0fGJsdXInLFxuICBpbmplY3Q6IHRydWUsXG4gIGZhc3RFeGl0OiB0cnVlLFxuICBhcmlhOiB0cnVlLFxuICB2YWxpZGl0eTogZmFsc2Vcbn07XG5cbi8qKlxuICogXG4gKiBcbiAqIEZpbmRzIHRoZSByZXF1ZXN0ZWQgZmllbGQgYnkgaWQgZnJvbSB0aGUgY29udGV4dCBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHJldHVybiB7RmllbGR8bnVsbH1cbiAqL1xudmFyIGZpbmRGaWVsZCA9IGZ1bmN0aW9uIChlbCwgY29udGV4dCkge1xuICBpZiAoIWNvbnRleHQgfHwgIWNvbnRleHQuJHZhbGlkYXRvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQuJHZhbGlkYXRvci5maWVsZHMuZmluZCh7IGlkOiBnZXREYXRhQXR0cmlidXRlKGVsLCAnaWQnKSB9KTtcbn07XG5cbnZhciBjcmVhdGVEaXJlY3RpdmUkMSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBhc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIHtcbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgIHZhciB2YWxpZGF0b3IgPSB2bm9kZS5jb250ZXh0LiR2YWxpZGF0b3I7XG4gICAgICBpZiAoISB2YWxpZGF0b3IpIHtcbiAgICAgICAgd2FybihcIk5vIHZhbGlkYXRvciBpbnN0YW5jZSBpcyBwcmVzZW50IG9uIHZtLCBkaWQgeW91IGZvcmdldCB0byBpbmplY3QgJyR2YWxpZGF0b3InP1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGZpZWxkT3B0aW9ucyA9IEdlbmVyYXRvci5nZW5lcmF0ZShlbCwgYmluZGluZywgdm5vZGUsIG9wdGlvbnMpO1xuICAgICAgdmFsaWRhdG9yLmF0dGFjaChmaWVsZE9wdGlvbnMpO1xuICAgIH0sXG4gICAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpbmRGaWVsZChlbCwgdm5vZGUuY29udGV4dCk7XG4gICAgICB2YXIgc2NvcGUgPSBHZW5lcmF0b3IucmVzb2x2ZVNjb3BlKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG5cbiAgICAgIC8vIHNraXAgaWYgc2NvcGUgaGFzbid0IGNoYW5nZWQuXG4gICAgICBpZiAoIWZpZWxkIHx8IHNjb3BlID09PSBmaWVsZC5zY29wZSkgeyByZXR1cm47IH1cblxuICAgICAgLy8gb25seSB1cGRhdGUgc2NvcGUuXG4gICAgICBmaWVsZC51cGRhdGUoeyBzY29wZTogc2NvcGUgfSk7XG5cbiAgICAgIC8vIGFsbG93cyB0aGUgZmllbGQgdG8gcmUtZXZhbHVhdGVkIG9uY2UgbW9yZSBpbiB0aGUgdXBkYXRlIGhvb2suXG4gICAgICBmaWVsZC51cGRhdGVkID0gZmFsc2U7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpbmRGaWVsZChlbCwgdm5vZGUuY29udGV4dCk7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBkbyB1bmVjY2Vzc2FyeSB3b3JrIGlmIG5vIGltcG9ydGFudCBjaGFuZ2Ugd2FzIGRvbmUuXG4gICAgICBpZiAoIWZpZWxkIHx8IChmaWVsZC51cGRhdGVkICYmIGlzRXF1YWwoYmluZGluZy52YWx1ZSwgYmluZGluZy5vbGRWYWx1ZSkpKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHNjb3BlID0gR2VuZXJhdG9yLnJlc29sdmVTY29wZShlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgdmFyIHJ1bGVzID0gR2VuZXJhdG9yLnJlc29sdmVSdWxlcyhlbCwgYmluZGluZyk7XG5cbiAgICAgIGZpZWxkLnVwZGF0ZSh7XG4gICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgcnVsZXM6IHJ1bGVzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kIChlbCwgYmluZGluZywgcmVmKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHJlZi5jb250ZXh0O1xuXG4gICAgICB2YXIgZmllbGQgPSBmaW5kRmllbGQoZWwsIGNvbnRleHQpO1xuICAgICAgaWYgKCFmaWVsZCkgeyByZXR1cm47IH1cblxuICAgICAgY29udGV4dC4kdmFsaWRhdG9yLmRldGFjaChmaWVsZCk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIFZ1ZTtcblxuZnVuY3Rpb24gaW5zdGFsbCAoX1Z1ZSwgb3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICBpZiAoVnVlKSB7XG4gICAgd2FybignYWxyZWFkeSBpbnN0YWxsZWQsIFZ1ZS51c2UoVmVlVmFsaWRhdGUpIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbmNlLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIFZ1ZSA9IF9WdWU7XG4gIHZhciBjb25maWckJDEgPSBhc3NpZ24oe30sIGNvbmZpZywgb3B0aW9ucyk7XG4gIGlmIChjb25maWckJDEuZGljdGlvbmFyeSkge1xuICAgIFZhbGlkYXRvci51cGRhdGVEaWN0aW9uYXJ5KGNvbmZpZyQkMS5kaWN0aW9uYXJ5KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMubG9jYWxlKSB7XG4gICAgICBWYWxpZGF0b3IubG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBWYWxpZGF0b3Iuc2V0U3RyaWN0TW9kZShjb25maWckJDEuc3RyaWN0KTtcbiAgICB9XG4gIH1cblxuICBWdWUubWl4aW4obWFrZU1peGluKFZ1ZSwgY29uZmlnJCQxKSk7XG4gIFZ1ZS5kaXJlY3RpdmUoJ3ZhbGlkYXRlJywgY3JlYXRlRGlyZWN0aXZlJDEoY29uZmlnJCQxKSk7XG59XG5cbnZhciBhZnRlciA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIHZhciBvdGhlclZhbHVlID0gcmVmWzBdO1xuICB2YXIgaW5jbHVzaW9uID0gcmVmWzFdO1xuICB2YXIgZm9ybWF0ID0gcmVmWzJdO1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvcm1hdCA9IGluY2x1c2lvbjtcbiAgICBpbmNsdXNpb24gPSBmYWxzZTtcbiAgfVxuICB2YWx1ZSA9IHBhcnNlRGF0ZSh2YWx1ZSwgZm9ybWF0KTtcbiAgb3RoZXJWYWx1ZSA9IHBhcnNlRGF0ZShvdGhlclZhbHVlLCBmb3JtYXQpO1xuXG4gIC8vIGlmIGVpdGhlciBpcyBub3QgdmFsaWQuXG4gIGlmICghdmFsdWUgfHwgIW90aGVyVmFsdWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNBZnRlcih2YWx1ZSwgb3RoZXJWYWx1ZSkgfHwgKGluY2x1c2lvbiAmJiBpc0VxdWFsJDEodmFsdWUsIG90aGVyVmFsdWUpKTtcbn07XG5cbi8qKlxuICogU29tZSBBbHBoYSBSZWdleCBoZWxwZXJzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2Nocmlzby92YWxpZGF0b3IuanMvYmxvYi9tYXN0ZXIvc3JjL2xpYi9hbHBoYS5qc1xuICovXG5cbnZhciBhbHBoYSQxID0ge1xuICBlbjogL15bQS1aXSokL2ksXG4gIGNzOiAvXltBLVrDgcSMxI7DicSaw43Fh8OTxZjFoMWkw5rFrsOdxb1dKiQvaSxcbiAgZGE6IC9eW0EtWsOGw5jDhV0qJC9pLFxuICBkZTogL15bQS1aw4TDlsOcw59dKiQvaSxcbiAgZXM6IC9eW0EtWsOBw4nDjcORw5PDmsOcXSokL2ksXG4gIGZyOiAvXltBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF0qJC9pLFxuICBsdDogL15bQS1axITEjMSYxJbErsWgxbLFqsW9XSokL2ksXG4gIG5sOiAvXltBLVrDicOLw4/Dk8OWw5xdKiQvaSxcbiAgaHU6IC9eW0EtWsOBw4nDjcOTw5bFkMOaw5zFsF0qJC9pLFxuICBwbDogL15bQS1axITEhsSYxZrFgcWDw5PFu8W5XSokL2ksXG4gIHB0OiAvXltBLVrDg8OBw4DDgsOHw4nDisONw5XDk8OUw5rDnF0qJC9pLFxuICBydTogL15b0JAt0K/QgV0qJC9pLFxuICBzazogL15bQS1aw4HDhMSMxI7DicONxLnEvcWHw5PFlMWgxaTDmsOdxb1dKiQvaSxcbiAgc3I6IC9eW0EtWsSMxIbFvcWgxJBdKiQvaSxcbiAgdHI6IC9eW0EtWsOHxJ7EsMSxw5bFnsOcXSokL2ksXG4gIHVrOiAvXlvQkC3QqdCs0K7Qr9CE0IbQh9KQXSokL2ksXG4gIGFyOiAvXlvYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBdKiQvXG59O1xuXG52YXIgYWxwaGFTcGFjZXMgPSB7XG4gIGVuOiAvXltBLVpcXHNdKiQvaSxcbiAgY3M6IC9eW0EtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvVxcc10qJC9pLFxuICBkYTogL15bQS1aw4bDmMOFXFxzXSokL2ksXG4gIGRlOiAvXltBLVrDhMOWw5zDn1xcc10qJC9pLFxuICBlczogL15bQS1aw4HDicONw5HDk8Oaw5xcXHNdKiQvaSxcbiAgZnI6IC9eW0EtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XFxzXSokL2ksXG4gIGx0OiAvXltBLVrEhMSMxJjElsSuxaDFssWqxb1cXHNdKiQvaSxcbiAgbmw6IC9eW0EtWsOJw4vDj8OTw5bDnFxcc10qJC9pLFxuICBodTogL15bQS1aw4HDicONw5PDlsWQw5rDnMWwXFxzXSokL2ksXG4gIHBsOiAvXltBLVrEhMSGxJjFmsWBxYPDk8W7xblcXHNdKiQvaSxcbiAgcHQ6IC9eW0EtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXFxzXSokL2ksXG4gIHJ1OiAvXlvQkC3Qr9CBXFxzXSokL2ksXG4gIHNrOiAvXltBLVrDgcOExIzEjsOJw43EucS9xYfDk8WUxaDFpMOaw53FvVxcc10qJC9pLFxuICBzcjogL15bQS1axIzEhsW9xaDEkFxcc10qJC9pLFxuICB0cjogL15bQS1aw4fEnsSwxLHDlsWew5xcXHNdKiQvaSxcbiAgdWs6IC9eW9CQLdCp0KzQrtCv0ITQhtCH0pBcXHNdKiQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsFxcc10qJC9cbn07XG5cbnZhciBhbHBoYW51bWVyaWMgPSB7XG4gIGVuOiAvXlswLTlBLVpdKiQvaSxcbiAgY3M6IC9eWzAtOUEtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV0qJC9pLFxuICBkYTogL15bMC05QS1aw4bDmMOFXSQvaSxcbiAgZGU6IC9eWzAtOUEtWsOEw5bDnMOfXSokL2ksXG4gIGVzOiAvXlswLTlBLVrDgcOJw43DkcOTw5rDnF0qJC9pLFxuICBmcjogL15bMC05QS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhdKiQvaSxcbiAgbHQ6IC9eWzAtOUEtWsSExIzEmMSWxK7FoMWyxarFvV0qJC9pLFxuICBodTogL15bMC05QS1aw4HDicONw5PDlsWQw5rDnMWwXSokL2ksXG4gIG5sOiAvXlswLTlBLVrDicOLw4/Dk8OWw5xdKiQvaSxcbiAgcGw6IC9eWzAtOUEtWsSExIbEmMWaxYHFg8OTxbvFuV0qJC9pLFxuICBwdDogL15bMC05QS1aw4PDgcOAw4LDh8OJw4rDjcOVw5PDlMOaw5xdKiQvaSxcbiAgcnU6IC9eWzAtOdCQLdCv0IFdKiQvaSxcbiAgc2s6IC9eWzAtOUEtWsOBw4TEjMSOw4nDjcS5xL3Fh8OTxZTFoMWkw5rDncW9XSokL2ksXG4gIHNyOiAvXlswLTlBLVrEjMSGxb3FoMSQXSokL2ksXG4gIHRyOiAvXlswLTlBLVrDh8SexLDEscOWxZ7DnF0qJC9pLFxuICB1azogL15bMC050JAt0KnQrNCu0K/QhNCG0IfSkF0qJC9pLFxuICBhcjogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBdKiQvXG59O1xuXG52YXIgYWxwaGFEYXNoID0ge1xuICBlbjogL15bMC05QS1aXy1dKiQvaSxcbiAgY3M6IC9eWzAtOUEtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV8tXSokL2ksXG4gIGRhOiAvXlswLTlBLVrDhsOYw4VfLV0qJC9pLFxuICBkZTogL15bMC05QS1aw4TDlsOcw59fLV0qJC9pLFxuICBlczogL15bMC05QS1aw4HDicONw5HDk8Oaw5xfLV0qJC9pLFxuICBmcjogL15bMC05QS1aw4DDgsOGw4fDicOIw4rDi8OPw47DlMWSw5nDm8OcxbhfLV0qJC9pLFxuICBsdDogL15bMC05QS1axITEjMSYxJbErsWgxbLFqsW9Xy1dKiQvaSxcbiAgbmw6IC9eWzAtOUEtWsOJw4vDj8OTw5bDnF8tXSokL2ksXG4gIGh1OiAvXlswLTlBLVrDgcOJw43Dk8OWxZDDmsOcxbBfLV0qJC9pLFxuICBwbDogL15bMC05QS1axITEhsSYxZrFgcWDw5PFu8W5Xy1dKiQvaSxcbiAgcHQ6IC9eWzAtOUEtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXy1dKiQvaSxcbiAgcnU6IC9eWzAtOdCQLdCv0IFfLV0qJC9pLFxuICBzazogL15bMC05QS1aw4HDhMSMxI7DicONxLnEvcWHw5PFlMWgxaTDmsOdxb1fLV0qJC9pLFxuICBzcjogL15bMC05QS1axIzEhsW9xaDEkF8tXSokL2ksXG4gIHRyOiAvXlswLTlBLVrDh8SexLDEscOWxZ7DnF8tXSokL2ksXG4gIHVrOiAvXlswLTnQkC3QqdCs0K7Qr9CE0IbQh9KQXy1dKiQvaSxcbiAgYXI6IC9eW9mg2aHZotmj2aTZpdmm2afZqNmpMC052KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXy1dKiQvXG59O1xuXG52YXIgdmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0gW251bGxdO1xuICB2YXIgbG9jYWxlID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSh2YWwsIFtsb2NhbGVdKTsgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhdCBsZWFzdCBvbmUgbG9jYWxlLlxuICBpZiAoISBsb2NhbGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWxwaGEkMSkuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYSQxW2xvY10udGVzdCh2YWx1ZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIChhbHBoYSQxW2xvY2FsZV0gfHwgYWxwaGEkMS5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkMSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDEodmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhRGFzaCkuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYURhc2hbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhRGFzaFtsb2NhbGVdIHx8IGFscGhhRGFzaC5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkMiA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDIodmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhbnVtZXJpYykuc29tZShmdW5jdGlvbiAobG9jKSB7IHJldHVybiBhbHBoYW51bWVyaWNbbG9jXS50ZXN0KHZhbHVlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gKGFscGhhbnVtZXJpY1tsb2NhbGVdIHx8IGFscGhhbnVtZXJpYy5lbikudGVzdCh2YWx1ZSk7XG59O1xuXG52YXIgdmFsaWRhdGUkMyA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbbnVsbF07XG4gIHZhciBsb2NhbGUgPSByZWZbMF07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbGlkYXRlJDModmFsLCBbbG9jYWxlXSk7IH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYXQgbGVhc3Qgb25lIGxvY2FsZS5cbiAgaWYgKCEgbG9jYWxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscGhhU3BhY2VzKS5zb21lKGZ1bmN0aW9uIChsb2MpIHsgcmV0dXJuIGFscGhhU3BhY2VzW2xvY10udGVzdCh2YWx1ZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIChhbHBoYVNwYWNlc1tsb2NhbGVdIHx8IGFscGhhU3BhY2VzLmVuKS50ZXN0KHZhbHVlKTtcbn07XG5cbnZhciBiZWZvcmUgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgb3RoZXJWYWx1ZSA9IHJlZlswXTtcbiAgdmFyIGluY2x1c2lvbiA9IHJlZlsxXTtcbiAgdmFyIGZvcm1hdCA9IHJlZlsyXTtcblxuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3JtYXQgPSBpbmNsdXNpb247XG4gICAgaW5jbHVzaW9uID0gZmFsc2U7XG4gIH1cbiAgdmFsdWUgPSBwYXJzZURhdGUodmFsdWUsIGZvcm1hdCk7XG4gIG90aGVyVmFsdWUgPSBwYXJzZURhdGUob3RoZXJWYWx1ZSwgZm9ybWF0KTtcblxuICAvLyBpZiBlaXRoZXIgaXMgbm90IHZhbGlkLlxuICBpZiAoIXZhbHVlIHx8ICFvdGhlclZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzQmVmb3JlKHZhbHVlLCBvdGhlclZhbHVlKSB8fCAoaW5jbHVzaW9uICYmIGlzRXF1YWwkMSh2YWx1ZSwgb3RoZXJWYWx1ZSkpO1xufTtcblxudmFyIHZhbGlkYXRlJDQgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbWluID0gcmVmWzBdO1xuICB2YXIgbWF4ID0gcmVmWzFdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ0KHZhbCwgW21pbiwgbWF4XSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIE51bWJlcihtaW4pIDw9IHZhbHVlICYmIE51bWJlcihtYXgpID49IHZhbHVlO1xufTtcblxudmFyIGNvbmZpcm1lZCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3RoZXIpIHsgcmV0dXJuIFN0cmluZyh2YWx1ZSkgPT09IFN0cmluZyhvdGhlcik7IH07XG5cbmZ1bmN0aW9uIHVud3JhcEV4cG9ydHMgKHgpIHtcblx0cmV0dXJuIHggJiYgeC5fX2VzTW9kdWxlID8geFsnZGVmYXVsdCddIDogeDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBhc3NlcnRTdHJpbmdfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFzc2VydFN0cmluZztcbmZ1bmN0aW9uIGFzc2VydFN0cmluZyhpbnB1dCkge1xuICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xuXG4gIGlmICghaXNTdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlzIGxpYnJhcnkgKHZhbGlkYXRvci5qcykgdmFsaWRhdGVzIHN0cmluZ3Mgb25seScpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKGFzc2VydFN0cmluZ18xKTtcblxudmFyIGlzQ3JlZGl0Q2FyZF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNDcmVkaXRDYXJkO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbnZhciBjcmVkaXRDYXJkID0gL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18KDIyMlsxLTldfDIyWzMtOV1bMC05XXwyWzMtNl1bMC05XXsyfXwyN1swMV1bMC05XXwyNzIwKVswLTldezEyfXw2KD86MDExfDVbMC05XVswLTldKVswLTldezEyfXwzWzQ3XVswLTldezEzfXwzKD86MFswLTVdfFs2OF1bMC05XSlbMC05XXsxMX18KD86MjEzMXwxODAwfDM1XFxkezN9KVxcZHsxMX18NjJbMC05XXsxNH0pJC87XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuZnVuY3Rpb24gaXNDcmVkaXRDYXJkKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHNhbml0aXplZCA9IHN0ci5yZXBsYWNlKC9bLSBdKy9nLCAnJyk7XG4gIGlmICghY3JlZGl0Q2FyZC50ZXN0KHNhbml0aXplZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHN1bSA9IDA7XG4gIHZhciBkaWdpdCA9IHZvaWQgMDtcbiAgdmFyIHRtcE51bSA9IHZvaWQgMDtcbiAgdmFyIHNob3VsZERvdWJsZSA9IHZvaWQgMDtcbiAgZm9yICh2YXIgaSA9IHNhbml0aXplZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRpZ2l0ID0gc2FuaXRpemVkLnN1YnN0cmluZyhpLCBpICsgMSk7XG4gICAgdG1wTnVtID0gcGFyc2VJbnQoZGlnaXQsIDEwKTtcbiAgICBpZiAoc2hvdWxkRG91YmxlKSB7XG4gICAgICB0bXBOdW0gKj0gMjtcbiAgICAgIGlmICh0bXBOdW0gPj0gMTApIHtcbiAgICAgICAgc3VtICs9IHRtcE51bSAlIDEwICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgfVxuICAgIHNob3VsZERvdWJsZSA9ICFzaG91bGREb3VibGU7XG4gIH1cbiAgcmV0dXJuICEhKHN1bSAlIDEwID09PSAwID8gc2FuaXRpemVkIDogZmFsc2UpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzQ3JlZGl0Q2FyZCA9IHVud3JhcEV4cG9ydHMoaXNDcmVkaXRDYXJkXzEpO1xuXG52YXIgY3JlZGl0X2NhcmQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGlzQ3JlZGl0Q2FyZChTdHJpbmcodmFsdWUpKTsgfTtcblxudmFyIHZhbGlkYXRlJDUgPSBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuICB2YXIgZGVjaW1hbHMgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyAocGFyYW1zWzBdIHx8ICcqJykgOiAnKic7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ1KHZhbCwgcGFyYW1zKTsgfSk7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlmIGlzIDAuXG4gIGlmIChOdW1iZXIoZGVjaW1hbHMpID09PSAwKSB7XG4gICAgcmV0dXJuIC9eLT9cXGQqJC8udGVzdCh2YWx1ZSk7XG4gIH1cblxuICB2YXIgcmVnZXhQYXJ0ID0gZGVjaW1hbHMgPT09ICcqJyA/ICcrJyA6IChcInsxLFwiICsgZGVjaW1hbHMgKyBcIn1cIik7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoKFwiXi0/XFxcXGQqKFxcXFwuXFxcXGRcIiArIHJlZ2V4UGFydCArIFwiKT8kXCIpKTtcblxuICBpZiAoISByZWdleC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHJldHVybiBwYXJzZWRWYWx1ZSA9PT0gcGFyc2VkVmFsdWU7XG59O1xuXG52YXIgZGF0ZV9iZXR3ZWVuID0gZnVuY3Rpb24gKHZhbHVlLCBwYXJhbXMpIHtcbiAgdmFyIG1pbjtcbiAgdmFyIG1heDtcbiAgdmFyIGZvcm1hdDtcbiAgdmFyIGluY2x1c2l2aXR5ID0gJygpJztcblxuICBpZiAocGFyYW1zLmxlbmd0aCA+IDMpIHtcbiAgICB2YXIgYXNzaWduJCQxO1xuICAgIChhc3NpZ24kJDEgPSBwYXJhbXMsIG1pbiA9IGFzc2lnbiQkMVswXSwgbWF4ID0gYXNzaWduJCQxWzFdLCBpbmNsdXNpdml0eSA9IGFzc2lnbiQkMVsyXSwgZm9ybWF0ID0gYXNzaWduJCQxWzNdKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYXNzaWduJDE7XG4gICAgKGFzc2lnbiQxID0gcGFyYW1zLCBtaW4gPSBhc3NpZ24kMVswXSwgbWF4ID0gYXNzaWduJDFbMV0sIGZvcm1hdCA9IGFzc2lnbiQxWzJdKTtcbiAgfVxuXG4gIHZhciBtaW5EYXRlID0gcGFyc2VEYXRlKG1pbiwgZm9ybWF0KTtcbiAgdmFyIG1heERhdGUgPSBwYXJzZURhdGUobWF4LCBmb3JtYXQpO1xuICB2YXIgZGF0ZVZhbCA9IHBhcnNlRGF0ZSh2YWx1ZSwgZm9ybWF0KTtcblxuICBpZiAoIW1pbkRhdGUgfHwgIW1heERhdGUgfHwgIWRhdGVWYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaW5jbHVzaXZpdHkgPT09ICcoKScpIHtcbiAgICByZXR1cm4gaXNBZnRlcihkYXRlVmFsLCBtaW5EYXRlKSAmJiBpc0JlZm9yZShkYXRlVmFsLCBtYXhEYXRlKTtcbiAgfVxuXG4gIGlmIChpbmNsdXNpdml0eSA9PT0gJyhdJykge1xuICAgIHJldHVybiBpc0FmdGVyKGRhdGVWYWwsIG1pbkRhdGUpICYmIChpc0VxdWFsJDEoZGF0ZVZhbCwgbWF4RGF0ZSkgfHwgaXNCZWZvcmUoZGF0ZVZhbCwgbWF4RGF0ZSkpO1xuICB9XG5cbiAgaWYgKGluY2x1c2l2aXR5ID09PSAnWyknKSB7XG4gICAgcmV0dXJuIGlzQmVmb3JlKGRhdGVWYWwsIG1heERhdGUpICYmIChpc0VxdWFsJDEoZGF0ZVZhbCwgbWluRGF0ZSkgfHwgaXNBZnRlcihkYXRlVmFsLCBtaW5EYXRlKSk7XG4gIH1cblxuICByZXR1cm4gaXNFcXVhbCQxKGRhdGVWYWwsIG1heERhdGUpIHx8IGlzRXF1YWwkMShkYXRlVmFsLCBtaW5EYXRlKSB8fFxuICAgICAgICAoaXNCZWZvcmUoZGF0ZVZhbCwgbWF4RGF0ZSkgJiYgaXNBZnRlcihkYXRlVmFsLCBtaW5EYXRlKSk7XG59O1xuXG52YXIgZGF0ZV9mb3JtYXQgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgZm9ybWF0ID0gcmVmWzBdO1xuXG4gIHJldHVybiAhIXBhcnNlRGF0ZSh2YWx1ZSwgZm9ybWF0KTtcbn07XG5cbnZhciB2YWxpZGF0ZSQ2ID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkNih2YWwsIFtsZW5ndGhdKTsgfSk7XG4gIH1cbiAgdmFyIHN0clZhbCA9IFN0cmluZyh2YWx1ZSk7XG5cbiAgcmV0dXJuIC9eWzAtOV0qJC8udGVzdChzdHJWYWwpICYmIHN0clZhbC5sZW5ndGggPT09IE51bWJlcihsZW5ndGgpO1xufTtcblxudmFyIHZhbGlkYXRlSW1hZ2UgPSBmdW5jdGlvbiAoZmlsZSwgd2lkdGgsIGhlaWdodCkge1xuICB2YXIgVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh7IHZhbGlkOiBmYWxzZSB9KTsgfTtcbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHtcbiAgICAgIHZhbGlkOiBpbWFnZS53aWR0aCA9PT0gTnVtYmVyKHdpZHRoKSAmJiBpbWFnZS5oZWlnaHQgPT09IE51bWJlcihoZWlnaHQpXG4gICAgfSk7IH07XG5cbiAgICBpbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICB9KTtcbn07XG5cbnZhciBkaW1lbnNpb25zID0gZnVuY3Rpb24gKGZpbGVzLCByZWYpIHtcbiAgdmFyIHdpZHRoID0gcmVmWzBdO1xuICB2YXIgaGVpZ2h0ID0gcmVmWzFdO1xuXG4gIHZhciBsaXN0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBpZiBmaWxlIGlzIG5vdCBhbiBpbWFnZSwgcmVqZWN0LlxuICAgIGlmICghIC9cXC4oanBnfHN2Z3xqcGVnfHBuZ3xibXB8Z2lmKSQvaS50ZXN0KGZpbGVzW2ldLm5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGlzdC5wdXNoKGZpbGVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChsaXN0Lm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gdmFsaWRhdGVJbWFnZShmaWxlLCB3aWR0aCwgaGVpZ2h0KTsgfSkpO1xufTtcblxudmFyIG1lcmdlXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBtZXJnZTtcbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGRlZmF1bHRzID0gYXJndW1lbnRzWzFdO1xuXG4gIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvYmpba2V5XSA9IGRlZmF1bHRzW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKG1lcmdlXzEpO1xuXG52YXIgaXNCeXRlTGVuZ3RoXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNCeXRlTGVuZ3RoO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuZnVuY3Rpb24gaXNCeXRlTGVuZ3RoKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIG1pbiA9IHZvaWQgMDtcbiAgdmFyIG1heCA9IHZvaWQgMDtcbiAgaWYgKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgIG1pbiA9IG9wdGlvbnMubWluIHx8IDA7XG4gICAgbWF4ID0gb3B0aW9ucy5tYXg7XG4gIH0gZWxzZSB7XG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHk6IGlzQnl0ZUxlbmd0aChzdHIsIG1pbiBbLCBtYXhdKVxuICAgIG1pbiA9IGFyZ3VtZW50c1sxXTtcbiAgICBtYXggPSBhcmd1bWVudHNbMl07XG4gIH1cbiAgdmFyIGxlbiA9IGVuY29kZVVSSShzdHIpLnNwbGl0KC8lLi58Li8pLmxlbmd0aCAtIDE7XG4gIHJldHVybiBsZW4gPj0gbWluICYmICh0eXBlb2YgbWF4ID09PSAndW5kZWZpbmVkJyB8fCBsZW4gPD0gbWF4KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnVud3JhcEV4cG9ydHMoaXNCeXRlTGVuZ3RoXzEpO1xuXG52YXIgaXNGUUROID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNGRFFOO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cblxuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQobWVyZ2VfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X2ZxZG5fb3B0aW9ucyA9IHtcbiAgcmVxdWlyZV90bGQ6IHRydWUsXG4gIGFsbG93X3VuZGVyc2NvcmVzOiBmYWxzZSxcbiAgYWxsb3dfdHJhaWxpbmdfZG90OiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNGRFFOKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfZnFkbl9vcHRpb25zKTtcblxuICAvKiBSZW1vdmUgdGhlIG9wdGlvbmFsIHRyYWlsaW5nIGRvdCBiZWZvcmUgY2hlY2tpbmcgdmFsaWRpdHkgKi9cbiAgaWYgKG9wdGlvbnMuYWxsb3dfdHJhaWxpbmdfZG90ICYmIHN0cltzdHIubGVuZ3RoIC0gMV0gPT09ICcuJykge1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICB9XG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLicpO1xuICBpZiAob3B0aW9ucy5yZXF1aXJlX3RsZCkge1xuICAgIHZhciB0bGQgPSBwYXJ0cy5wb3AoKTtcbiAgICBpZiAoIXBhcnRzLmxlbmd0aCB8fCAhL14oW2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9fHhuW2EtejAtOS1dezIsfSkkL2kudGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGRpc2FsbG93IHNwYWNlc1xuICAgIGlmICgvW1xcc1xcdTIwMDItXFx1MjAwQlxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdUZFRkZcXHVEQjQwXFx1REMyMF0vLnRlc3QodGxkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHZhciBwYXJ0LCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydCA9IHBhcnRzW2ldO1xuICAgIGlmIChvcHRpb25zLmFsbG93X3VuZGVyc2NvcmVzKSB7XG4gICAgICBwYXJ0ID0gcGFydC5yZXBsYWNlKC9fL2csICcnKTtcbiAgICB9XG4gICAgaWYgKCEvXlthLXpcXHUwMGExLVxcdWZmZmYwLTktXSskL2kudGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBkaXNhbGxvdyBmdWxsLXdpZHRoIGNoYXJzXG4gICAgaWYgKC9bXFx1ZmYwMS1cXHVmZjVlXS8udGVzdChwYXJ0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFydFswXSA9PT0gJy0nIHx8IHBhcnRbcGFydC5sZW5ndGggLSAxXSA9PT0gJy0nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudW53cmFwRXhwb3J0cyhpc0ZRRE4pO1xuXG52YXIgaXNFbWFpbF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNFbWFpbDtcblxuXG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYXNzZXJ0U3RyaW5nXzEpO1xuXG5cblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG1lcmdlXzEpO1xuXG5cblxudmFyIF9pc0J5dGVMZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChpc0J5dGVMZW5ndGhfMSk7XG5cblxuXG52YXIgX2lzRlFETjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGlzRlFETik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X2VtYWlsX29wdGlvbnMgPSB7XG4gIGFsbG93X2Rpc3BsYXlfbmFtZTogZmFsc2UsXG4gIHJlcXVpcmVfZGlzcGxheV9uYW1lOiBmYWxzZSxcbiAgYWxsb3dfdXRmOF9sb2NhbF9wYXJ0OiB0cnVlLFxuICByZXF1aXJlX3RsZDogdHJ1ZVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCAqL1xudmFyIGRpc3BsYXlOYW1lID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXC5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdK1thLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9flxcLFxcLlxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRlxcc10qPCguKyk+JC9pO1xudmFyIGVtYWlsVXNlclBhcnQgPSAvXlthLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9fl0rJC9pO1xudmFyIHF1b3RlZEVtYWlsVXNlciA9IC9eKFtcXHNcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdlXXwoXFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl0pKSokL2k7XG52YXIgZW1haWxVc2VyVXRmOFBhcnQgPSAvXlthLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9flxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rJC9pO1xudmFyIHF1b3RlZEVtYWlsVXNlclV0ZjggPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZVxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkqJC9pO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cblxuZnVuY3Rpb24gaXNFbWFpbChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2VtYWlsX29wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zLnJlcXVpcmVfZGlzcGxheV9uYW1lIHx8IG9wdGlvbnMuYWxsb3dfZGlzcGxheV9uYW1lKSB7XG4gICAgdmFyIGRpc3BsYXlfZW1haWwgPSBzdHIubWF0Y2goZGlzcGxheU5hbWUpO1xuICAgIGlmIChkaXNwbGF5X2VtYWlsKSB7XG4gICAgICBzdHIgPSBkaXNwbGF5X2VtYWlsWzFdO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXF1aXJlX2Rpc3BsYXlfbmFtZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnQCcpO1xuICB2YXIgZG9tYWluID0gcGFydHMucG9wKCk7XG4gIHZhciB1c2VyID0gcGFydHMuam9pbignQCcpO1xuXG4gIHZhciBsb3dlcl9kb21haW4gPSBkb21haW4udG9Mb3dlckNhc2UoKTtcbiAgaWYgKGxvd2VyX2RvbWFpbiA9PT0gJ2dtYWlsLmNvbScgfHwgbG93ZXJfZG9tYWluID09PSAnZ29vZ2xlbWFpbC5jb20nKSB7XG4gICAgdXNlciA9IHVzZXIucmVwbGFjZSgvXFwuL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzQnl0ZUxlbmd0aDIuZGVmYXVsdCkodXNlciwgeyBtYXg6IDY0IH0pIHx8ICEoMCwgX2lzQnl0ZUxlbmd0aDIuZGVmYXVsdCkoZG9tYWluLCB7IG1heDogMjU0IH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzRlFETjIuZGVmYXVsdCkoZG9tYWluLCB7IHJlcXVpcmVfdGxkOiBvcHRpb25zLnJlcXVpcmVfdGxkIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVzZXJbMF0gPT09ICdcIicpIHtcbiAgICB1c2VyID0gdXNlci5zbGljZSgxLCB1c2VyLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBvcHRpb25zLmFsbG93X3V0ZjhfbG9jYWxfcGFydCA/IHF1b3RlZEVtYWlsVXNlclV0ZjgudGVzdCh1c2VyKSA6IHF1b3RlZEVtYWlsVXNlci50ZXN0KHVzZXIpO1xuICB9XG5cbiAgdmFyIHBhdHRlcm4gPSBvcHRpb25zLmFsbG93X3V0ZjhfbG9jYWxfcGFydCA/IGVtYWlsVXNlclV0ZjhQYXJ0IDogZW1haWxVc2VyUGFydDtcblxuICB2YXIgdXNlcl9wYXJ0cyA9IHVzZXIuc3BsaXQoJy4nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB1c2VyX3BhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFwYXR0ZXJuLnRlc3QodXNlcl9wYXJ0c1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7XG5cbnZhciBpc0VtYWlsID0gdW53cmFwRXhwb3J0cyhpc0VtYWlsXzEpO1xuXG52YXIgdmFsaWRhdGUkNyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gaXNFbWFpbChTdHJpbmcodmFsKSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIGlzRW1haWwoU3RyaW5nKHZhbHVlKSk7XG59O1xuXG52YXIgZXh0ID0gZnVuY3Rpb24gKGZpbGVzLCBleHRlbnNpb25zKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoKFwiLihcIiArIChleHRlbnNpb25zLmpvaW4oJ3wnKSkgKyBcIikkXCIpLCAnaScpO1xuXG4gIHJldHVybiBmaWxlcy5ldmVyeShmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gcmVnZXgudGVzdChmaWxlLm5hbWUpOyB9KTtcbn07XG5cbnZhciBpbWFnZSA9IGZ1bmN0aW9uIChmaWxlcykgeyByZXR1cm4gZmlsZXMuZXZlcnkoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIC9cXC4oanBnfHN2Z3xqcGVnfHBuZ3xibXB8Z2lmKSQvaS50ZXN0KGZpbGUubmFtZSk7IH1cbik7IH07XG5cbnZhciB2YWxpZGF0ZSQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWxpZGF0ZSQ4KHZhbCwgb3B0aW9ucyk7IH0pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHJldHVybiAhISBvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiBvcHRpb24gPT0gdmFsdWU7IH0pLmxlbmd0aDtcbn07XG5cbnZhciBpc0lQXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lQO1xuXG5cblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChhc3NlcnRTdHJpbmdfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpcHY0TWF5YmUgPSAvXihcXGR7MSwzfSlcXC4oXFxkezEsM30pXFwuKFxcZHsxLDN9KVxcLihcXGR7MSwzfSkkLztcbnZhciBpcHY2QmxvY2sgPSAvXlswLTlBLUZdezEsNH0kL2k7XG5cbmZ1bmN0aW9uIGlzSVAoc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcblxuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKTtcbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGlzSVAoc3RyLCA0KSB8fCBpc0lQKHN0ciwgNik7XG4gIH0gZWxzZSBpZiAodmVyc2lvbiA9PT0gJzQnKSB7XG4gICAgaWYgKCFpcHY0TWF5YmUudGVzdChzdHIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLicpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICByZXR1cm4gcGFydHNbM10gPD0gMjU1O1xuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICc2Jykge1xuICAgIHZhciBibG9ja3MgPSBzdHIuc3BsaXQoJzonKTtcbiAgICB2YXIgZm91bmRPbWlzc2lvbkJsb2NrID0gZmFsc2U7IC8vIG1hcmtlciB0byBpbmRpY2F0ZSA6OlxuXG4gICAgLy8gQXQgbGVhc3Qgc29tZSBPUyBhY2NlcHQgdGhlIGxhc3QgMzIgYml0cyBvZiBhbiBJUHY2IGFkZHJlc3NcbiAgICAvLyAoaS5lLiAyIG9mIHRoZSBibG9ja3MpIGluIElQdjQgbm90YXRpb24sIGFuZCBSRkMgMzQ5MyBzYXlzXG4gICAgLy8gdGhhdCAnOjpmZmZmOmEuYi5jLmQnIGlzIHZhbGlkIGZvciBJUHY0LW1hcHBlZCBJUHY2IGFkZHJlc3NlcyxcbiAgICAvLyBhbmQgJzo6YS5iLmMuZCcgaXMgZGVwcmVjYXRlZCwgYnV0IGFsc28gdmFsaWQuXG4gICAgdmFyIGZvdW5kSVB2NFRyYW5zaXRpb25CbG9jayA9IGlzSVAoYmxvY2tzW2Jsb2Nrcy5sZW5ndGggLSAxXSwgNCk7XG4gICAgdmFyIGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3MgPSBmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgPyA3IDogODtcblxuICAgIGlmIChibG9ja3MubGVuZ3RoID4gZXhwZWN0ZWROdW1iZXJPZkJsb2Nrcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBpbml0aWFsIG9yIGZpbmFsIDo6XG4gICAgaWYgKHN0ciA9PT0gJzo6Jykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzdHIuc3Vic3RyKDAsIDIpID09PSAnOjonKSB7XG4gICAgICBibG9ja3Muc2hpZnQoKTtcbiAgICAgIGJsb2Nrcy5zaGlmdCgpO1xuICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDIpID09PSAnOjonKSB7XG4gICAgICBibG9ja3MucG9wKCk7XG4gICAgICBibG9ja3MucG9wKCk7XG4gICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAvLyB0ZXN0IGZvciBhIDo6IHdoaWNoIGNhbiBub3QgYmUgYXQgdGhlIHN0cmluZyBzdGFydC9lbmRcbiAgICAgIC8vIHNpbmNlIHRob3NlIGNhc2VzIGhhdmUgYmVlbiBoYW5kbGVkIGFib3ZlXG4gICAgICBpZiAoYmxvY2tzW2ldID09PSAnJyAmJiBpID4gMCAmJiBpIDwgYmxvY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKGZvdW5kT21pc3Npb25CbG9jaykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbXVsdGlwbGUgOjogaW4gYWRkcmVzc1xuICAgICAgICB9XG4gICAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZvdW5kSVB2NFRyYW5zaXRpb25CbG9jayAmJiBpID09PSBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyBpdCBoYXMgYmVlbiBjaGVja2VkIGJlZm9yZSB0aGF0IHRoZSBsYXN0XG4gICAgICAgIC8vIGJsb2NrIGlzIGEgdmFsaWQgSVB2NCBhZGRyZXNzXG4gICAgICB9IGVsc2UgaWYgKCFpcHY2QmxvY2sudGVzdChibG9ja3NbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kT21pc3Npb25CbG9jaykge1xuICAgICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPT09IGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3M7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzSVAgPSB1bndyYXBFeHBvcnRzKGlzSVBfMSk7XG5cbnZhciBpcCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbNF07XG4gIHZhciB2ZXJzaW9uID0gcmVmWzBdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiBpc0lQKHZhbCwgW3ZlcnNpb25dKTsgfSk7XG4gIH1cblxuICByZXR1cm4gaXNJUCh2YWx1ZSwgdmVyc2lvbik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlIFxuICogQHBhcmFtIHtOdW1iZXI/fSBtYXggXG4gKi9cbnZhciBjb21wYXJlID0gZnVuY3Rpb24gKHZhbHVlLCBsZW5ndGgsIG1heCkge1xuICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSBsZW5ndGg7XG4gIH1cblxuICAvLyBjYXN0IHRvIG51bWJlci5cbiAgbWF4ID0gTnVtYmVyKG1heCk7XG5cbiAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+PSBsZW5ndGggJiYgdmFsdWUubGVuZ3RoIDw9IG1heDtcbn07XG5cbnZhciBsZW5ndGggPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbGVuZ3RoID0gcmVmWzBdO1xuICB2YXIgbWF4ID0gcmVmWzFdOyBpZiAoIG1heCA9PT0gdm9pZCAwICkgbWF4ID0gdW5kZWZpbmVkO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICB2YWx1ZSA9IHRvQXJyYXkodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmUodmFsdWUsIGxlbmd0aCwgbWF4KTtcbn07XG5cbnZhciBpbnRlZ2VyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiAvXi0/WzAtOV0rJC8udGVzdChTdHJpbmcodmFsKSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIC9eLT9bMC05XSskLy50ZXN0KFN0cmluZyh2YWx1ZSkpO1xufTtcblxudmFyIG1heCQxID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIGxlbmd0aCA9IHJlZlswXTtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBsZW5ndGggPj0gMDtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpLmxlbmd0aCA8PSBsZW5ndGg7XG59O1xuXG52YXIgbWF4X3ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIG1heCA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gTnVtYmVyKHZhbHVlKSA8PSBtYXg7XG59O1xuXG52YXIgbWltZXMgPSBmdW5jdGlvbiAoZmlsZXMsIG1pbWVzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoKChtaW1lcy5qb2luKCd8JykucmVwbGFjZSgnKicsICcuKycpKSArIFwiJFwiKSwgJ2knKTtcblxuICByZXR1cm4gZmlsZXMuZXZlcnkoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHJlZ2V4LnRlc3QoZmlsZS50eXBlKTsgfSk7XG59O1xuXG52YXIgbWluJDEgPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgbGVuZ3RoID0gcmVmWzBdO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBTdHJpbmcodmFsdWUpLmxlbmd0aCA+PSBsZW5ndGg7XG59O1xuXG52YXIgbWluX3ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCByZWYpIHtcbiAgdmFyIG1pbiA9IHJlZlswXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gTnVtYmVyKHZhbHVlKSA+PSBtaW47XG59O1xuXG52YXIgdmFsaWRhdGUkOSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsaWRhdGUkOSh2YWwsIG9wdGlvbnMpOyB9KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICByZXR1cm4gISBvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiBvcHRpb24gPT0gdmFsdWU7IH0pLmxlbmd0aDtcbn07XG5cbnZhciBudW1lcmljID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7IHJldHVybiAvXlswLTldKyQvLnRlc3QoU3RyaW5nKHZhbCkpOyB9KTtcbiAgfVxuXG4gIHJldHVybiAvXlswLTldKyQvLnRlc3QoU3RyaW5nKHZhbHVlKSk7XG59O1xuXG52YXIgcmVnZXggPSBmdW5jdGlvbiAodmFsdWUsIHJlZikge1xuICB2YXIgcmVnZXggPSByZWZbMF07XG4gIHZhciBmbGFncyA9IHJlZi5zbGljZSgxKTtcblxuICBpZiAocmVnZXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCwgZmxhZ3MpLnRlc3QoU3RyaW5nKHZhbHVlKSk7XG59O1xuXG52YXIgcmVxdWlyZWQgPSBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0gW2ZhbHNlXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gISEgdmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgLy8gaW5jYXNlIGEgZmllbGQgY29uc2lkZXJzIGBmYWxzZWAgYXMgYW4gZW1wdHkgdmFsdWUgbGlrZSBjaGVja2JveGVzLlxuICB2YXIgaW52YWxpZGF0ZUZhbHNlID0gcGFyYW1zWzBdO1xuICBpZiAodmFsdWUgPT09IGZhbHNlICYmIGludmFsaWRhdGVGYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICEhIFN0cmluZyh2YWx1ZSkudHJpbSgpLmxlbmd0aDtcbn07XG5cbnZhciBzaXplID0gZnVuY3Rpb24gKGZpbGVzLCByZWYpIHtcbiAgdmFyIHNpemUgPSByZWZbMF07XG5cbiAgaWYgKGlzTmFOKHNpemUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG5TaXplID0gTnVtYmVyKHNpemUpICogMTAyNDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChmaWxlc1tpXS5zaXplID4gblNpemUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc1VSTF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNVUkw7XG5cblxuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGFzc2VydFN0cmluZ18xKTtcblxuXG5cbnZhciBfaXNGUUROMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoaXNGUUROKTtcblxuXG5cbnZhciBfaXNJUDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGlzSVBfMSk7XG5cblxuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQobWVyZ2VfMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X3VybF9vcHRpb25zID0ge1xuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmdHAnXSxcbiAgcmVxdWlyZV90bGQ6IHRydWUsXG4gIHJlcXVpcmVfcHJvdG9jb2w6IGZhbHNlLFxuICByZXF1aXJlX2hvc3Q6IHRydWUsXG4gIHJlcXVpcmVfdmFsaWRfcHJvdG9jb2w6IHRydWUsXG4gIGFsbG93X3VuZGVyc2NvcmVzOiBmYWxzZSxcbiAgYWxsb3dfdHJhaWxpbmdfZG90OiBmYWxzZSxcbiAgYWxsb3dfcHJvdG9jb2xfcmVsYXRpdmVfdXJsczogZmFsc2Vcbn07XG5cbnZhciB3cmFwcGVkX2lwdjYgPSAvXlxcWyhbXlxcXV0rKVxcXSg/OjooWzAtOV0rKSk/JC87XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5mdW5jdGlvbiBjaGVja0hvc3QoaG9zdCwgbWF0Y2hlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbWF0Y2ggPSBtYXRjaGVzW2ldO1xuICAgIGlmIChob3N0ID09PSBtYXRjaCB8fCBpc1JlZ0V4cChtYXRjaCkgJiYgbWF0Y2gudGVzdChob3N0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVUkwodXJsLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KSh1cmwpO1xuICBpZiAoIXVybCB8fCB1cmwubGVuZ3RoID49IDIwODMgfHwgL1tcXHM8Pl0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodXJsLmluZGV4T2YoJ21haWx0bzonKSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF91cmxfb3B0aW9ucyk7XG4gIHZhciBwcm90b2NvbCA9IHZvaWQgMCxcbiAgICAgIGF1dGggPSB2b2lkIDAsXG4gICAgICBob3N0ID0gdm9pZCAwLFxuICAgICAgaG9zdG5hbWUgPSB2b2lkIDAsXG4gICAgICBwb3J0ID0gdm9pZCAwLFxuICAgICAgcG9ydF9zdHIgPSB2b2lkIDAsXG4gICAgICBzcGxpdCA9IHZvaWQgMCxcbiAgICAgIGlwdjYgPSB2b2lkIDA7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJyMnKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnPycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCc6Ly8nKTtcbiAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICBwcm90b2NvbCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKG9wdGlvbnMucmVxdWlyZV92YWxpZF9wcm90b2NvbCAmJiBvcHRpb25zLnByb3RvY29scy5pbmRleE9mKHByb3RvY29sKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5yZXF1aXJlX3Byb3RvY29sKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dfcHJvdG9jb2xfcmVsYXRpdmVfdXJscyAmJiB1cmwuc3Vic3RyKDAsIDIpID09PSAnLy8nKSB7XG4gICAgc3BsaXRbMF0gPSB1cmwuc3Vic3RyKDIpO1xuICB9XG4gIHVybCA9IHNwbGl0LmpvaW4oJzovLycpO1xuXG4gIGlmICh1cmwgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJy8nKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBpZiAodXJsID09PSAnJyAmJiAhb3B0aW9ucy5yZXF1aXJlX2hvc3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCdAJyk7XG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgYXV0aCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKGF1dGguaW5kZXhPZignOicpID49IDAgJiYgYXV0aC5zcGxpdCgnOicpLmxlbmd0aCA+IDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaG9zdG5hbWUgPSBzcGxpdC5qb2luKCdAJyk7XG5cbiAgcG9ydF9zdHIgPSBudWxsO1xuICBpcHY2ID0gbnVsbDtcbiAgdmFyIGlwdjZfbWF0Y2ggPSBob3N0bmFtZS5tYXRjaCh3cmFwcGVkX2lwdjYpO1xuICBpZiAoaXB2Nl9tYXRjaCkge1xuICAgIGhvc3QgPSAnJztcbiAgICBpcHY2ID0gaXB2Nl9tYXRjaFsxXTtcbiAgICBwb3J0X3N0ciA9IGlwdjZfbWF0Y2hbMl0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBzcGxpdCA9IGhvc3RuYW1lLnNwbGl0KCc6Jyk7XG4gICAgaG9zdCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKHNwbGl0Lmxlbmd0aCkge1xuICAgICAgcG9ydF9zdHIgPSBzcGxpdC5qb2luKCc6Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBvcnRfc3RyICE9PSBudWxsKSB7XG4gICAgcG9ydCA9IHBhcnNlSW50KHBvcnRfc3RyLCAxMCk7XG4gICAgaWYgKCEvXlswLTldKyQvLnRlc3QocG9ydF9zdHIpIHx8IHBvcnQgPD0gMCB8fCBwb3J0ID4gNjU1MzUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoISgwLCBfaXNJUDIuZGVmYXVsdCkoaG9zdCkgJiYgISgwLCBfaXNGUUROMi5kZWZhdWx0KShob3N0LCBvcHRpb25zKSAmJiAoIWlwdjYgfHwgISgwLCBfaXNJUDIuZGVmYXVsdCkoaXB2NiwgNikpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaG9zdCA9IGhvc3QgfHwgaXB2NjtcblxuICBpZiAob3B0aW9ucy5ob3N0X3doaXRlbGlzdCAmJiAhY2hlY2tIb3N0KGhvc3QsIG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChvcHRpb25zLmhvc3RfYmxhY2tsaXN0ICYmIGNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3RfYmxhY2tsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTtcblxudmFyIGlzVVJMID0gdW53cmFwRXhwb3J0cyhpc1VSTF8xKTtcblxudmFyIHVybCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSBbdHJ1ZV07XG4gIHZhciByZXF1aXJlUHJvdG9jb2wgPSByZWZbMF07XG5cbiAgdmFyIG9wdGlvbnMgPSB7IHJlcXVpcmVfcHJvdG9jb2w6ICEhcmVxdWlyZVByb3RvY29sLCBhbGxvd191bmRlcnNjb3JlczogdHJ1ZSB9O1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gaXNVUkwodmFsLCBvcHRpb25zKTsgfSk7XG4gIH1cblxuICByZXR1cm4gaXNVUkwodmFsdWUsIG9wdGlvbnMpO1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG52YXIgUnVsZXMgPSB7XG4gIGFmdGVyOiBhZnRlcixcbiAgYWxwaGFfZGFzaDogdmFsaWRhdGUkMSxcbiAgYWxwaGFfbnVtOiB2YWxpZGF0ZSQyLFxuICBhbHBoYV9zcGFjZXM6IHZhbGlkYXRlJDMsXG4gIGFscGhhOiB2YWxpZGF0ZSxcbiAgYmVmb3JlOiBiZWZvcmUsXG4gIGJldHdlZW46IHZhbGlkYXRlJDQsXG4gIGNvbmZpcm1lZDogY29uZmlybWVkLFxuICBjcmVkaXRfY2FyZDogY3JlZGl0X2NhcmQsXG4gIGRhdGVfYmV0d2VlbjogZGF0ZV9iZXR3ZWVuLFxuICBkYXRlX2Zvcm1hdDogZGF0ZV9mb3JtYXQsXG4gIGRlY2ltYWw6IHZhbGlkYXRlJDUsXG4gIGRpZ2l0czogdmFsaWRhdGUkNixcbiAgZGltZW5zaW9uczogZGltZW5zaW9ucyxcbiAgZW1haWw6IHZhbGlkYXRlJDcsXG4gIGV4dDogZXh0LFxuICBpbWFnZTogaW1hZ2UsXG4gIGluOiB2YWxpZGF0ZSQ4LFxuICBpbnRlZ2VyOiBpbnRlZ2VyLFxuICBsZW5ndGg6IGxlbmd0aCxcbiAgaXA6IGlwLFxuICBtYXg6IG1heCQxLFxuICBtYXhfdmFsdWU6IG1heF92YWx1ZSxcbiAgbWltZXM6IG1pbWVzLFxuICBtaW46IG1pbiQxLFxuICBtaW5fdmFsdWU6IG1pbl92YWx1ZSxcbiAgbm90X2luOiB2YWxpZGF0ZSQ5LFxuICBudW1lcmljOiBudW1lcmljLFxuICByZWdleDogcmVnZXgsXG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgc2l6ZTogc2l6ZSxcbiAgdXJsOiB1cmxcbn07XG5cbmZ1bmN0aW9uIHVzZSAocGx1Z2luLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGlmICghaXNDYWxsYWJsZShwbHVnaW4pKSB7XG4gICAgcmV0dXJuIHdhcm4oJ1RoZSBwbHVnaW4gbXVzdCBiZSBhIGNhbGxhYmxlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBwbHVnaW4oeyBWYWxpZGF0b3I6IFZhbGlkYXRvciwgRXJyb3JCYWc6IEVycm9yQmFnLCBSdWxlczogVmFsaWRhdG9yLnJ1bGVzIH0sIG9wdGlvbnMpO1xufVxuXG52YXIgbm9ybWFsaXplID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZHMpKSB7XG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgIGlmICh+Y3Vyci5pbmRleE9mKCcuJykpIHtcbiAgICAgICAgcHJldltjdXJyLnNwbGl0KCcuJylbMV1dID0gY3VycjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZbY3Vycl0gPSBjdXJyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufTtcblxuLyoqXG4gKiBNYXBzIGZpZWxkcyB0byBjb21wdXRlZCBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGZpZWxkc1xuICovXG52YXIgbWFwRmllbGRzID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZShmaWVsZHMpO1xuICByZXR1cm4gT2JqZWN0LmtleXMobm9ybWFsaXplZCkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7XG4gICAgdmFyIGZpZWxkID0gbm9ybWFsaXplZFtjdXJyXTtcbiAgICBwcmV2W2N1cnJdID0gZnVuY3Rpb24gbWFwcGVkRmllbGQgKCkge1xuICAgICAgaWYgKHRoaXMuJHZhbGlkYXRvci5mbGFnc1tmaWVsZF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZhbGlkYXRvci5mbGFnc1tmaWVsZF07XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmRleCA9IGZpZWxkLmluZGV4T2YoJy4nKTtcbiAgICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIHZhciByZWYgPSBmaWVsZC5zcGxpdCgnLicpO1xuICAgICAgdmFyIHNjb3BlID0gcmVmWzBdO1xuICAgICAgdmFyIG5hbWUgPSByZWZbMV07XG5cbiAgICAgIHJldHVybiBnZXRQYXRoKChcIiRcIiArIHNjb3BlICsgXCIuXCIgKyBuYW1lKSwgdGhpcy4kdmFsaWRhdG9yLmZsYWdzLCB7fSk7XG4gICAgfTtcblxuICAgIHJldHVybiBwcmV2O1xuICB9LCB7fSk7XG59O1xuXG52YXIgdmVyc2lvbiA9ICcyLjAuMC1yYy4xNyc7XG5cbnZhciBydWxlc1BsdWdpbiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIFZhbGlkYXRvciQkMSA9IHJlZi5WYWxpZGF0b3I7XG5cbiAgT2JqZWN0LmtleXMoUnVsZXMpLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBWYWxpZGF0b3IkJDEuZXh0ZW5kKHJ1bGUsIFJ1bGVzW3J1bGVdKTtcbiAgfSk7XG59O1xuXG51c2UocnVsZXNQbHVnaW4pO1xuXG52YXIgaW5kZXhfZXNtID0ge1xuICBpbnN0YWxsOiBpbnN0YWxsLFxuICB1c2U6IHVzZSxcbiAgbWFwRmllbGRzOiBtYXBGaWVsZHMsXG4gIFZhbGlkYXRvcjogVmFsaWRhdG9yLFxuICBFcnJvckJhZzogRXJyb3JCYWcsXG4gIHZlcnNpb246IHZlcnNpb25cbn07XG5cbmV4cG9ydCB7IGluc3RhbGwsIHVzZSwgbWFwRmllbGRzLCBWYWxpZGF0b3IsIEVycm9yQmFnLCB2ZXJzaW9uIH07XG5leHBvcnQgZGVmYXVsdCBpbmRleF9lc207XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdmVlLXZhbGlkYXRlL2Rpc3QvdmVlLXZhbGlkYXRlLmVzbS5qc1xuLy8gbW9kdWxlIGlkID0gNjI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00YmJkY2I5MFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXBvc3Rjc3MtbG9hZGVyIXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwLnZ1ZVwiKVxufVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXBwLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGJiZGNiOTBcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvcHJlcHJvY2Vzc29yP3JhdyZlbmdpbmU9cHVnIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BcHAudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgaW5qZWN0U3R5bGUsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWI3YzU5MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hcG9zdGNzcy1sb2FkZXIhc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BdXRvQ29tcGxldGUudnVlXCIpXG59XG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BdXRvQ29tcGxldGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWI3YzU5MFxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9wcmVwcm9jZXNzb3I/cmF3JmVuZ2luZT1wdWchLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0F1dG9Db21wbGV0ZS52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBpbmplY3RTdHlsZSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0wNWI3YzU5MFwiLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9hcHAvYWRtaW4vY29yZS9jb21wb25lbnRzL0F1dG9Db21wbGV0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDYzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJmdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTg0ZjQ4NjZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXBvc3Rjc3MtbG9hZGVyIXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW5wdXRGaWxlLnZ1ZVwiKVxufVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW5wdXRGaWxlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTg0ZjQ4NjZcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvcHJlcHJvY2Vzc29yP3JhdyZlbmdpbmU9cHVnIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9JbnB1dEZpbGUudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgaW5qZWN0U3R5bGUsXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMTg0ZjQ4NjZcIixcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9JbnB1dEZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA2MzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTYzNTQzZDAwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hcG9zdGNzcy1sb2FkZXIhc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9oZWFkZXIudnVlXCIpXG59XG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9oZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02MzU0M2QwMFxcXCJ9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9wcmVwcm9jZXNzb3I/cmF3JmVuZ2luZT1wdWchLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2hlYWRlci52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBpbmplY3RTdHlsZSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9hcHAvYWRtaW4vY29yZS9jb21wb25lbnRzL1BhZ2VIZWFkZXIvaGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01NWQzNDJmOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hcG9zdGNzcy1sb2FkZXIhc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJDaG9vc2VMYW5ndWFnZS52dWVcIilcbn1cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RhYkNob29zZUxhbmd1YWdlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTVkMzQyZjhcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvcHJlcHJvY2Vzc29yP3JhdyZlbmdpbmU9cHVnIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJDaG9vc2VMYW5ndWFnZS52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBpbmplY3RTdHlsZSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi01NWQzNDJmOFwiLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9hcHAvYWRtaW4vY29yZS9jb21wb25lbnRzL1RhYkNob29zZUxhbmd1YWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi05MWJkNTJkZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXBvc3Rjc3MtbG9hZGVyIXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG59XG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTkxYmQ1MmRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL3ByZXByb2Nlc3Nvcj9yYXcmZW5naW5lPXB1ZyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgaW5qZWN0U3R5bGUsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL2FkbWluL21vZHVsZXMvaG9tZS9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDYzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJmdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYTQ1Yjk2N2VcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IXBvc3Rjc3MtbG9hZGVyIXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRmllbGRQb3J0Zm9saW8udnVlXCIpXG59XG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9GaWVsZFBvcnRmb2xpby52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWE0NWI5NjdlXFxcIn0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL3ByZXByb2Nlc3Nvcj9yYXcmZW5naW5lPXB1ZyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRmllbGRQb3J0Zm9saW8udnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgaW5qZWN0U3R5bGUsXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtYTQ1Yjk2N2VcIixcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvYXBwL2FkbWluL21vZHVsZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvRmllbGRQb3J0Zm9saW8udnVlXG4vLyBtb2R1bGUgaWQgPSA2MzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQyYjk3NWVlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSFwb3N0Y3NzLWxvYWRlciFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsUG9ydGZvbGlvLnZ1ZVwiKVxufVxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTW9kYWxQb3J0Zm9saW8udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MmI5NzVlZVxcXCJ9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9wcmVwcm9jZXNzb3I/cmF3JmVuZ2luZT1wdWchLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01vZGFsUG9ydGZvbGlvLnZ1ZVwiKSxcbiAgLyogc3R5bGVzICovXG4gIGluamVjdFN0eWxlLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTQyYjk3NWVlXCIsXG4gIC8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L2FwcC9hZG1pbi9tb2R1bGVzL3BvcnRmb2xpby9jb21wb25lbnRzL01vZGFsUG9ydGZvbGlvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wMGNkZWI2Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hcG9zdGNzcy1sb2FkZXIhc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIilcbn1cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDBjZGViNmNcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvcHJlcHJvY2Vzc29yP3JhdyZlbmdpbmU9cHVnIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIiksXG4gIC8qIHN0eWxlcyAqL1xuICBpbmplY3RTdHlsZSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0wMGNkZWI2Y1wiLFxuICAvKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbiAgbnVsbFxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9wb3J0Zm9saW8vaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSA2Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tb2JpbGVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtbmFycm93XCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1pbmZvXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zaG93TW9kYWwgPSB0cnVlLCBfdm0ubW9kZSA9IDBcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBZGQgUG9ydGZvbGlvXCIpXSldKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtbmFycm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmllbGQgaGFzLWFkZG9uc1wiXG4gIH0sIFtfdm0uX20oMCksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBpcy1leHBhbmRlZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdCBpcy1mdWxsd2lkdGhcIlxuICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jYXRlZ29yeVNlbGVjdGVkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2F0ZWdvcnlTZWxlY3RlZFwiXG4gICAgfV0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sb2FkUG9ydGZvbGlvKDApXG4gICAgICB9LFxuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0uY2F0ZWdvcnlTZWxlY3RlZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogJydcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBbGxcIildKSwgX3ZtLl9sKChfdm0uY2F0ZWdvcmllcyksIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IGNhdGVnb3J5Ll9pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5LnRyYW5zbGF0aW9uc1swXS5uYW1lKSldKVxuICB9KV0sIDIpXSldKV0pXSksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmllbGQgaGFzLWFkZG9uc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaXMtZXhwYW5kZWQgaGFzLWljb25zLXJpZ2h0XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5rZXl3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwia2V5d29yZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkZpbmQgYW4gcG9ydGZvbGlvXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ua2V5d29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5rZXl3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIChfdm0uaXNMb2FkaW5nKSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHRcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2lyY2xlLW8tbm90Y2ggZmEtc3BpblwiXG4gIH0pXSkgOiBfdm0uX2UoKV0pLCBfdm0uX20oMSldKV0pXSksIChfdm0ucG9ydGZvbGlvcy5sZW5ndGggPT09IDApID8gX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGFzLXRleHQtY2VudGVyZWRcIlxuICB9LCBbX3ZtLl92KFwiTm8gcG9ydGZvbGlvIGZvdW5kIFwiKV0pIDogX3ZtLl9lKCksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBwb3J0Zm9saW9zIGlzLW11bHRpbGluZVwiXG4gIH0sIF92bS5fbCgoX3ZtLnBvcnRmb2xpb3MpLCBmdW5jdGlvbihwb3J0Zm9saW8sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtNFwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjYXJkIGotZ3Jvd1wiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2hvd01vZGFsID0gdHJ1ZSwgX3ZtLm1vZGUgPSAxLCBfdm0ucG9ydGZvbGlvU2VsZWN0ZWQgPSBpbmRleFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgWyhwb3J0Zm9saW8uaW1hZ2UubGVuZ3RoID4gMCkgPyBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWFnZVwiXG4gICAgfSwgW19jKCdmaWd1cmUnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJpbWFnZSBpcy00YnkzXCJcbiAgICB9LCBbX2MoJ2ltZycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IHBvcnRmb2xpby5pbWFnZVswXSxcbiAgICAgICAgXCJhbHRcIjogXCJwb3J0Zm9saW9cIlxuICAgICAgfVxuICAgIH0pXSldKSA6IF92bS5fZSgpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50XCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWNvbnRlbnRcIlxuICAgIH0sIFtfYygncCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTRcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHBvcnRmb2xpby50cmFuc2xhdGlvbnNbMF0udGl0bGUpKV0pXSldKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIlxuICAgIH0sIFtfYygncCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImRldGFpbFwiXG4gICAgfSwgW192bS5fdihfdm0uX3MocG9ydGZvbGlvLnRyYW5zbGF0aW9uc1swXS5kZXRhaWwpKV0pLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGFnc1wiXG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGFnIGlzLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHBvcnRmb2xpby5jYXRlZ29yeS50cmFuc2xhdGlvbnNbMF0ubmFtZSkgKyBcIiBcIildKV0pXSldKV0pXSlcbiAgfSkpLCBfYygnbmF2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyb2xlXCI6IFwibmF2aWdhdGlvblwiLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwicGFnaW5hdGlvblwiXG4gICAgfVxuICB9LCBbX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlzdFwiXG4gIH0sIF92bS5fbCgoX3ZtLnRvdGFsUGFnZSksIGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfYygnYScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgY2xhc3M6IF92bS5pc0N1cnJlbnRQYWdlKGluZGV4KSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmNoYW5nZVBhZ2UoaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KF92bS5fcyhpbmRleCkpXSldKVxuICB9KSldKSwgKF92bS5zaG93TW9kYWwpID8gX2MoJ01vZGFsUG9ydGZvbGlvJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1vZGVcIjogX3ZtLm1vZGUsXG4gICAgICBcImluaXRpYWxQb3J0Zm9saW9cIjogX3ZtLnBvcnRmb2xpb3NbX3ZtLnBvcnRmb2xpb1NlbGVjdGVkXSxcbiAgICAgIFwiY2F0ZWdvcmllc1wiOiBfdm0uY2F0ZWdvcmllc1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xvc2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zaG93TW9kYWwgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIFwicmVsb2FkLWxpc3RcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sb2FkUG9ydGZvbGlvKDApXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXN0YXRpYyBpcy10ZXh0LWdyZXktZGFya1wiXG4gIH0sIFtfdm0uX3YoXCJDYXRlZ29yeVwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWluZm9cIlxuICB9LCBbX3ZtLl92KFwiU2VhcmNoXCIpXSldKVxufV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDBjZGViNmNcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL3ByZXByb2Nlc3Nvci5qcz9yYXcmZW5naW5lPXB1ZyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2xpZW50L2FwcC9hZG1pbi9tb2R1bGVzL3BvcnRmb2xpby9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDY1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdXRvY29tcGxldGVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmaWVsZCBoYXMtYWRkb25zXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBpcy1leHBhbmRlZCBoYXMtaWNvbnMtcmlnaHRcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmtleXdvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJrZXl3b3JkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU2VhcmNoLi4uXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ua2V5d29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ua2V5d29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0sIF92bS5vblR5cGluZ11cbiAgICB9XG4gIH0pLCBfdm0uX20oMCldKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uJGVtaXQoJ3JlbW92ZScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUmVtb3ZlXCIpXSldKV0pLCAoX3ZtLmlzU2hvdykgPyBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWVudS1saXN0XCJcbiAgfSwgX3ZtLl9sKChfdm0ub3B0aW9ucyksIGZ1bmN0aW9uKG9wdGlvbikge1xuICAgIHJldHVybiBfYygnbGknLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJpcy1ob3ZlcmFibGVcIlxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLm9uU2VsZWN0ZWQob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3Mob3B0aW9uLnRpdGxlKSldKV0pXG4gIH0pKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWFuZ2xlLWRvd25cIlxuICB9KV0pXG59XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wNWI3YzU5MFwifSEuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvcHJlcHJvY2Vzc29yLmpzP3JhdyZlbmdpbmU9cHVnIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9BdXRvQ29tcGxldGUudnVlXG4vLyBtb2R1bGUgaWQgPSA2NTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmllbGRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5zXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmlsZSBoYXMtbmFtZSBpcy1mdWxsd2lkdGggaXMtcmlnaHRcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZmlsZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLmZpbGVTZWxlY3RlZFxuICAgIH1cbiAgfSksIF92bS5fbSgwKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1uYW1lXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmZpbGVuYW1lKSldKV0pXSldKSwgKF92bS5maWxlbmFtZSB8fCBfdm0uaXNSZW1vdmUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtbmFycm93XCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1kYW5nZXIgaXMtb3V0bGluZWRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ucmVtb3ZlRmlsZVxuICAgIH1cbiAgfSwgW192bS5fbSgxKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiUmVtb3ZlXCIpXSldKV0pIDogX3ZtLl9lKCldKSwgKF92bS5pbWFnZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1hZ2VcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtY3RhXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtaWNvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11cGxvYWRcIlxuICB9KV0pLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmaWxlLWxhYmVsXCJcbiAgfSwgW192bS5fdihcIkNob29zZSBhIGZpbGXigKZcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiXG4gIH0pXSlcbn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE4NGY0ODY2XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9wcmVwcm9jZXNzb3IuanM/cmF3JmVuZ2luZT1wdWchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NsaWVudC9hcHAvYWRtaW4vY29yZS9jb21wb25lbnRzL0lucHV0RmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDY1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGlzLWFjdGl2ZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJhY2tncm91bmRcIlxuICB9KSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkXCJcbiAgfSwgW19jKCdoZWFkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZC1oZWFkXCJcbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNhcmQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpICsgXCIgUG9ydGZvbGlvXCIpXSldKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZC1ib2R5XCJcbiAgfSwgW19jKCd0YWItY2hvb3NlLWxhbmd1YWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImluZGV4TGFuZ3VhZ2VcIjogX3ZtLmluZGV4TGFuZ3VhZ2VcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInNlbGVjdC1sYW5ndWFnZVwiOiBfdm0uc2VsZWN0TGFuZ3VhZ2VcbiAgICB9XG4gIH0pLCBfdm0uX2woKF92bS5sYW5ndWFnZXMpLCBmdW5jdGlvbihsYW5nLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnRmllbGRQb3J0Zm9saW8nLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgdmFsdWU6IChfdm0uaW5kZXhMYW5ndWFnZSA9PSBpbmRleCksXG4gICAgICAgIGV4cHJlc3Npb246IFwiaW5kZXhMYW5ndWFnZSA9PSBpbmRleFwiXG4gICAgICB9XSxcbiAgICAgIGtleTogX3ZtLmdldFVVSUQoKSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFBvcnRmb2xpb1wiOiBfdm0udHJhbnNsYXRpb25zW2luZGV4XSxcbiAgICAgICAgXCJpbmRleFwiOiBpbmRleFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwidXBkYXRlLXZhbHVlXCI6IF92bS51cGRhdGVWYWx1ZVxuICAgICAgfVxuICAgIH0pXG4gIH0pLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVuZGVybGluZVwiXG4gIH0pLCBfYygnZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhLXZ2LXNjb3BlXCI6IFwicG9ydGZvbGlvLXNjb3BlXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZpZWxkXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJDYXRlZ29yeVwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGlzLWV4cGFuZWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QgaXMtZnVsbHdpZHRoXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdpcy1kYW5nZXInOiBfdm0uZXJyb3JzLmhhcygncG9ydGZvbGlvLXNjb3BlLmNhdGVnb3J5JylcbiAgICB9XG4gIH0sIFtfYygnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNhdGVnb3J5U2VsZWN0ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjYXRlZ29yeVNlbGVjdGVkXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgIHZhbHVlOiAoJ3JlcXVpcmVkJyksXG4gICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZCdcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJjYXRlZ29yeVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0uY2F0ZWdvcnlTZWxlY3RlZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogJydcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTZWxlY3QgY2F0ZWdvcnlcIildKSwgX3ZtLl9sKChfdm0uY2F0ZWdvcmllcyksIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IGNhdGVnb3J5Ll9pZFxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5LnRyYW5zbGF0aW9uc1swXS5uYW1lKSldKVxuICB9KV0sIDIpLCBfYygncCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygncG9ydGZvbGlvLXNjb3BlLmNhdGVnb3J5JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdwb3J0Zm9saW8tc2NvcGUuY2F0ZWdvcnknKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscCBpcy1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdwb3J0Zm9saW8tc2NvcGUuY2F0ZWdvcnknKSkpXSldKV0pXSldKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmaWVsZFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiSW1hZ2VcIildKSwgX3ZtLl9sKChfdm0uaW1hZ2VzKSwgZnVuY3Rpb24oaW1hZ2UsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdpbnB1dC1maWxlJywge1xuICAgICAga2V5OiBfdm0uZ2V0VVVJRCgpLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJpbnRpYWxJc1JlbW92ZVwiOiB0cnVlXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJyZW1vdmVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnJlbW92ZUltYWdlKGluZGV4KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IChfdm0uaW1hZ2VzW2luZGV4XSksXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICB2YXIgJCRleHAgPSBfdm0uaW1hZ2VzLFxuICAgICAgICAgICAgJCRpZHggPSBpbmRleDtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoJCRleHApKSB7XG4gICAgICAgICAgICBfdm0uaW1hZ2VzW2luZGV4XSA9ICQkdlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJGV4cC5zcGxpY2UoJCRpZHgsIDEsICQkdilcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwiaW1hZ2VzW2luZGV4XVwiXG4gICAgICB9XG4gICAgfSlcbiAgfSksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGFzLXRleHQtY2VudGVyZWQgbWFyLWJvdC0xNVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uYWRkSW1hZ2VcbiAgICB9XG4gIH0sIFtfdm0uX20oMCksIF9jKCdzcGFuJywgW192bS5fdihcIkFkZFwiKV0pXSldKV0sIDIpXSksIChfdm0ubW9kZSA9PT0gMSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZpZWxkIGZpZWxkRGVsZXRlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtblwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgIHZhbHVlOiAoJ3JlcXVpcmVkfHJlZ2V4OmRlbGV0ZScpLFxuICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8cmVnZXg6ZGVsZXRlJ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2lzLWRhbmdlcic6IF92bS5lcnJvcnMuaGFzKCdkZWxldGUnKVxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcImRlbGV0ZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBsZWFzZSBmaWxsIGRlbGV0ZSBiZWZvcmUgZGVsZXRpbmdcIlxuICAgIH1cbiAgfSksIF9jKCdwJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdkZWxldGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2RlbGV0ZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJoZWxwIGlzLWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2RlbGV0ZScpKSldKV0pXSksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW5hcnJvd1wiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtZGFuZ2VyIGlzLW91dGxpbmVkXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlbGV0ZVBvcnRmb2xpb1xuICAgIH1cbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIkRlbGV0ZVwiKV0pXSldKV0pXSkgOiBfdm0uX2UoKV0sIDIpLCBfYygnZm9vdGVyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNhcmQtZm9vdFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdpcy1sb2FkaW5nJzogX3ZtLmlzTG9hZGluZ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnVwZGF0ZVBvcnRmb2xpb1xuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRlbWl0KCdjbG9zZScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2FuY2VsXCIpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiXG4gIH0pXSlcbn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQyYjk3NWVlXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9wcmVwcm9jZXNzb3IuanM/cmF3JmVuZ2luZT1wdWchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NsaWVudC9hcHAvYWRtaW4vbW9kdWxlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9Nb2RhbFBvcnRmb2xpby52dWVcbi8vIG1vZHVsZSBpZCA9IDY2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnUGFnZUhlYWRlcicpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtbWFpblwiXG4gIH0sIFtfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9LCBbX2MoJ2tlZXAtYWxpdmUnLCBbX2MoJ3JvdXRlci12aWV3JyldLCAxKV0sIDEpXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRiYmRjYjkwXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9wcmVwcm9jZXNzb3IuanM/cmF3JmVuZ2luZT1wdWchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NsaWVudC9hcHAvYWRtaW4vY29yZS9BcHAudnVlXG4vLyBtb2R1bGUgaWQgPSA2NjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFicyBpcy10b2dnbGUgaXMtZnVsbHdpZHRoXCJcbiAgfSwgW19jKCd1bCcsIF92bS5fbCgoX3ZtLmxhbmd1YWdlcyksIGZ1bmN0aW9uKGxhbmcsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdpcy1zZWxlY3RlZCc6IF92bS5pc1NlbGVjdGVkKGluZGV4KVxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLiRlbWl0KCdzZWxlY3QtbGFuZ3VhZ2UnLCBpbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIFtfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKGxhbmcubmFtZSkgKyBcIiBcIildKV0pXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01NWQzNDJmOFwifSEuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvcHJlcHJvY2Vzc29yLmpzP3JhdyZlbmdpbmU9cHVnIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9UYWJDaG9vc2VMYW5ndWFnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDY2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfdm0uX20oMCksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImhlcm8gaXMtaW5mb1wiXG4gIH0sIFtfdm0uX20oMSksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVyby1mb290XCJcbiAgfSwgW19jKCduYXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFic1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygndWwnLCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBcImxpXCIsXG4gICAgICBcInRvXCI6IFwiL1wiXG4gICAgfVxuICB9LCBbX2MoJ2EnLCBbX3ZtLl92KFwiSG9tZVwiKV0pXSksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogXCJsaVwiLFxuICAgICAgXCJ0b1wiOiBcIi9Qb3J0Zm9saW9cIlxuICAgIH1cbiAgfSwgW19jKCdhJywgW192bS5fdihcIlBvcnRmb2xpb1wiKV0pXSldLCAxKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbmF2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhciBuYXYtdG9wIGlzLWJsdWVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXZiYXItZW5kXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci1pdGVtIGlzLWhvdmVyYWJsZSBpcy10ZXh0LXdoaXRlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIi9hZG1pbi9sb2dvdXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvZ291dFwiKV0pXSldKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZXJvLWJvZHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJTZXR0aW5nc1wiKV0pLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIkV2ZXJ5dGhpbmcgeW91IG5lZWQgVXRhaXN1cHBseSB3ZWJzaXRlIHRvIGJlXCIpXSldKV0pXG59XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02MzU0M2QwMFwifSEuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvcHJlcHJvY2Vzc29yLmpzP3JhdyZlbmdpbmU9cHVnIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jbGllbnQvYXBwL2FkbWluL2NvcmUvY29tcG9uZW50cy9QYWdlSGVhZGVyL2hlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDY2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVybyBpcy1tZWRpdW1cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZXJvLWJvZHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLXRleHQtZ3JleSBpcy00XCJcbiAgfSwgW192bS5fdihcIkhlbGxvISBMZXTigJlzIGNoYW5nZSB5b3VyIHNpdGUuXCIpXSksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZSBpcy10ZXh0LWdyZXlcIlxuICB9KV0pXSldKVxufV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOTFiZDUyZGVcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL3ByZXByb2Nlc3Nvci5qcz9yYXcmZW5naW5lPXB1ZyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2xpZW50L2FwcC9hZG1pbi9tb2R1bGVzL2hvbWUvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSA2NzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmllbGRQcm9kdWN0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmllbGRcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlRpdGxlXCIpXSksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udGl0bGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0aXRsZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRpdGxlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogW2Z1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50aXRsZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0sIF92bS51cGRhdGVdXG4gICAgfVxuICB9KV0pXSksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmllbGRcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIkRldGFpbFwiKV0pLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRldGFpbCksXG4gICAgICBleHByZXNzaW9uOiBcImRldGFpbFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dGFyZWFcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmRldGFpbClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGV0YWlsID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSwgX3ZtLnVwZGF0ZV1cbiAgICB9XG4gIH0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYTQ1Yjk2N2VcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL3ByZXByb2Nlc3Nvci5qcz9yYXcmZW5naW5lPXB1ZyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2xpZW50L2FwcC9hZG1pbi9tb2R1bGVzL3BvcnRmb2xpby9jb21wb25lbnRzL0ZpZWxkUG9ydGZvbGlvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=