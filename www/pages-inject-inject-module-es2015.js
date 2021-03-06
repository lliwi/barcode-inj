(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inject-inject-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inject/inject.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inject/inject.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    -->\n    <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>inject</ion-title>\n    <ion-item slot=\"end\">\n      <ion-label>Code types</ion-label>\n      <ion-select  [(ngModel)]=\"code\" (ionChange)=\"onSelectChange($event)\" value=\"Code 93\" okText=\"Ok\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"Code 93\">Code 93</ion-select-option>\n        <ion-select-option value=\"Code 39\">Code 39</ion-select-option>\n        <ion-select-option value=\"Code 39 Ext\">Code 39 Ext</ion-select-option>\n        <ion-select-option value=\"Code 128 a\">Code 128 a</ion-select-option>\n        <ion-select-option value=\"Code 128 b\">Code 128 b</ion-select-option>\n        <ion-select-option value=\"Code 128 c\">Code 128 c</ion-select-option>\n        <ion-select-option value=\"Code QR\">Code QR</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!--\n  <ion-label padding >Code 93</ion-label>\n  <ion-item padding *ngFor=\"let code of codes93\">\n    <ion-img [src]=\"code.src\"></ion-img>\n    <ion-label>{{code.text}}</ion-label>\n  </ion-item>\n-->\n\n\n<ion-img class=\"code\" src=\"{{codesrc}}\"></ion-img>\n\n\n</ion-content>\n\n<ion-footer no-shadow>\n  <ion-label class=\"ion-padding\" >{{codelabel}}</ion-label>\n  <ion-label class=\"ion-padding\" >{{codetext}}</ion-label>\n\t<ion-toolbar position=\"bottom\" expand=\"block\">\n    <ion-button id=\"btnback\" position=\"start\"  color=\"primary\" (click)=\"back()\">back</ion-button>\n    <ion-button id=\"btnnext\" position=\"end\"  color=\"primary\" (click)=\"next()\">next</ion-button>\n    <ion-label> Code {{codepos + 1}} of {{codemax}}</ion-label>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/inject/inject-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inject/inject-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InjectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectPageRoutingModule", function() { return InjectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inject_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inject.page */ "./src/app/pages/inject/inject.page.ts");




const routes = [
    {
        path: '',
        component: _inject_page__WEBPACK_IMPORTED_MODULE_3__["InjectPage"]
    }
];
let InjectPageRoutingModule = class InjectPageRoutingModule {
};
InjectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InjectPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inject/inject.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inject/inject.module.ts ***!
  \***********************************************/
/*! exports provided: InjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectPageModule", function() { return InjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _inject_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inject-routing.module */ "./src/app/pages/inject/inject-routing.module.ts");
/* harmony import */ var _inject_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inject.page */ "./src/app/pages/inject/inject.page.ts");







let InjectPageModule = class InjectPageModule {
};
InjectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inject_routing_module__WEBPACK_IMPORTED_MODULE_5__["InjectPageRoutingModule"]
        ],
        declarations: [_inject_page__WEBPACK_IMPORTED_MODULE_6__["InjectPage"]]
    })
], InjectPageModule);



/***/ }),

/***/ "./src/app/pages/inject/inject.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/inject/inject.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".code {\n  transform: rotate(270deg);\n  height: 100%;\n  width: 100%;\n}\n\n.pane {\n  --background: url('background.png');\n  --background-repeat: no-repeat;\n  --background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL2lvbmljL2JhcmNvZGUtaW5qL3NyYy9hcHAvcGFnZXMvaW5qZWN0L2luamVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luamVjdC9pbmplY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0csbUNBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0FDQUgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmplY3QvaW5qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2RlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICB9XG4gIFxuLnBhbmV7XG4gICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nKTtcbiAgIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgIC0tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXG59IiwiLmNvZGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFuZSB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmcpO1xuICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC0tYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/inject/inject.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inject/inject.page.ts ***!
  \*********************************************/
/*! exports provided: InjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectPage", function() { return InjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");



let InjectPage = class InjectPage {
    constructor() {
        this.codeselected = '"Code 93"';
        this.codes = [
            {
                type: 'Code 93',
                src: 'assets/barcodes/code-93/1.png',
                text: '<script>alert("test")</script>'
            },
            {
                type: 'Code 93',
                src: 'assets/barcodes/code-93/2.png',
                text: ' or 1=1 --'
            },
            {
                type: 'Code 93',
                src: 'assets/barcodes/code-93/3.png',
                text: '`'
            },
            {
                type: 'Code 93',
                src: 'assets/barcodes/code-93/4.png',
                text: '--'
            },
            {
                type: 'Code 93',
                src: 'assets/barcodes/code-93/5.png',
                text: '"'
            },
            {
                type: 'Code 93',
                src: 'assets/barcodes/code-93/6.png',
                text: '>'
            },
            {
                type: 'Code 93',
                src: 'assets/barcodes/code-93/7.png',
                text: '<'
            },
            {
                type: 'Code 93',
                src: 'assets/barcodes/code-93/8.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 93',
                src: 'assets/barcodes/code-93/9.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 39',
                src: 'assets/barcodes/code-39/1.png',
                text: '<script>alert("test")</script>'
            },
            {
                type: 'Code 39',
                src: 'assets/barcodes/code-39/2.png',
                text: ' or 1=1 --'
            },
            {
                type: 'Code 39',
                src: 'assets/barcodes/code-39/3.png',
                text: '`'
            },
            {
                type: 'Code 39',
                src: 'assets/barcodes/code-39/4.png',
                text: '--'
            },
            {
                type: 'Code 39',
                src: 'assets/barcodes/code-39/5.png',
                text: '"'
            },
            {
                type: 'Code 39',
                src: 'assets/barcodes/code-39/6.png',
                text: '>'
            },
            {
                type: 'Code 39',
                src: 'assets/barcodes/code-39/7.png',
                text: '<'
            },
            {
                type: 'Code 39',
                src: 'assets/barcodes/code-39/8.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 39',
                src: 'assets/barcodes/code-39/9.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 39 Ext',
                src: 'assets/barcodes/code-39-ext/1.png',
                text: '<script>alert("test")</script>'
            },
            {
                type: 'Code 39 Ext',
                src: 'assets/barcodes/code-39-ext/2.png',
                text: ' or 1=1 --'
            },
            {
                type: 'Code 39 Ext',
                src: 'assets/barcodes/code-39-ext/3.png',
                text: '`'
            },
            {
                type: 'Code 39 Ext',
                src: 'assets/barcodes/code-39-ext/4.png',
                text: '--'
            },
            {
                type: 'Code 39 Ext',
                src: 'assets/barcodes/code-39-ext/5.png',
                text: '"'
            },
            {
                type: 'Code 39 Ext',
                src: 'assets/barcodes/code-39-ext/6.png',
                text: '>'
            },
            {
                type: 'Code 39 Ext',
                src: 'assets/barcodes/code-39-ext/7.png',
                text: '<'
            },
            {
                type: 'Code 39 Ext',
                src: 'assets/barcodes/code-39-ext/8.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 39 Ext',
                src: 'assets/barcodes/code-39-ext/9.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 128 a',
                src: 'assets/barcodes/code-128-a/1.png',
                text: '<script>alert("test")</script>'
            },
            {
                type: 'Code 128 a',
                src: 'assets/barcodes/code-128-a/2.png',
                text: ' or 1=1 --'
            },
            {
                type: 'Code 128 a',
                src: 'assets/barcodes/code-128-a/3.png',
                text: '`'
            },
            {
                type: 'Code 128 a',
                src: 'assets/barcodes/code-128-a/4.png',
                text: '--'
            },
            {
                type: 'Code 128 a',
                src: 'assets/barcodes/code-128-a/5.png',
                text: '"'
            },
            {
                type: 'Code 128 a',
                src: 'assets/barcodes/code-128-a/6.png',
                text: '>'
            },
            {
                type: 'Code 128 a',
                src: 'assets/barcodes/code-128-a/7.png',
                text: '<'
            },
            {
                type: 'Code 128 a',
                src: 'assets/barcodes/code-128-a/8.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 128 a',
                src: 'assets/barcodes/code-128-a/9.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 128 b',
                src: 'assets/barcodes/code-128-b/1.png',
                text: '<script>alert("test")</script>'
            },
            {
                type: 'Code 128 b',
                src: 'assets/barcodes/code-128-b/2.png',
                text: ' or 1=1 --'
            },
            {
                type: 'Code 128 b',
                src: 'assets/barcodes/code-128-b/3.png',
                text: '`'
            },
            {
                type: 'Code 128 b',
                src: 'assets/barcodes/code-128-b/4.png',
                text: '--'
            },
            {
                type: 'Code 128 b',
                src: 'assets/barcodes/code-128-b/5.png',
                text: '"'
            },
            {
                type: 'Code 128 b',
                src: 'assets/barcodes/code-128-b/6.png',
                text: '>'
            },
            {
                type: 'Code 128 b',
                src: 'assets/barcodes/code-128-b/7.png',
                text: '<'
            },
            {
                type: 'Code 128 b',
                src: 'assets/barcodes/code-128-b/8.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 128 b',
                src: 'assets/barcodes/code-128-b/9.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 128 c',
                src: 'assets/barcodes/code-128-c/1.png',
                text: '<script>alert("test")</script>'
            },
            {
                type: 'Code 128 c',
                src: 'assets/barcodes/code-128-c/2.png',
                text: ' or 1=1 --'
            },
            {
                type: 'Code 128 c',
                src: 'assets/barcodes/code-128-c/3.png',
                text: '`'
            },
            {
                type: 'Code 128 c',
                src: 'assets/barcodes/code-128-c/4.png',
                text: '--'
            },
            {
                type: 'Code 128 c',
                src: 'assets/barcodes/code-128-c/5.png',
                text: '"'
            },
            {
                type: 'Code 128 c',
                src: 'assets/barcodes/code-128-c/6.png',
                text: '>'
            },
            {
                type: 'Code 128 c',
                src: 'assets/barcodes/code-128-c/7.png',
                text: '<'
            },
            {
                type: 'Code 128 c',
                src: 'assets/barcodes/code-128-c/8.png',
                text: 'Can t print this'
            },
            {
                type: 'Code 128 c',
                src: 'assets/barcodes/code-128-c/9.png',
                text: 'Can t print this'
            },
            {
                type: 'Code QR',
                src: 'assets/barcodes/code-qr/1.png',
                text: '<script>alert("test")</script>'
            },
            {
                type: 'Code QR',
                src: 'assets/barcodes/code-qr/2.png',
                text: ' or 1=1 --'
            },
            {
                type: 'Code QR',
                src: 'assets/barcodes/code-qr/3.png',
                text: '`'
            },
            {
                type: 'Code QR',
                src: 'assets/barcodes/code-qr/4.png',
                text: '--'
            },
            {
                type: 'Code QR',
                src: 'assets/barcodes/code-qr/5.png',
                text: '"'
            },
            {
                type: 'Code QR',
                src: 'assets/barcodes/code-qr/6.png',
                text: '>'
            },
            {
                type: 'Code QR',
                src: 'assets/barcodes/code-qr/7.png',
                text: '<'
            },
            {
                type: 'Code QR',
                src: 'assets/barcodes/code-qr/8.png',
                text: 'Can t print this'
            },
            {
                type: 'Code QR',
                src: 'assets/barcodes/code-qr/9.png',
                text: 'Can t print this'
            }
        ];
        this.printcodes2 = [];
    }
    ngOnInit() {
        this.codepos = 0;
        //console.log(this.codes);
        var printcodes = this.codes.filter(function (code) {
            return code.type == "Code 93";
        });
        this.printcodes2 = printcodes;
        // console.log(printcodes)
        this.codelabel = printcodes[this.codepos].type;
        this.codesrc = printcodes[this.codepos].src;
        this.codetext = printcodes[this.codepos].text;
        this.codemax = printcodes.length;
    }
    onSelectChange(selectedValue) {
        this.codeselected = selectedValue.detail.value;
        // console.log(this.codeselected);
        if (this.codeselected == 'Code 93') {
            this.codepos = 0;
            //console.log(this.codes);
            var printcodes = this.codes.filter(function (code) {
                return code.type == "Code 93";
            });
            this.printcodes2 = printcodes;
            // console.log(printcodes)
            this.codelabel = printcodes[this.codepos].type;
            this.codesrc = printcodes[this.codepos].src;
            this.codetext = printcodes[this.codepos].text;
            this.codemax = printcodes.length;
        }
        else if (this.codeselected == 'Code 39') {
            this.codepos = 0;
            //console.log(this.codes);
            var printcodes = this.codes.filter(function (code) {
                return code.type == "Code 39";
            });
            this.printcodes2 = printcodes;
            // console.log(printcodes)
            this.codelabel = printcodes[this.codepos].type;
            this.codesrc = printcodes[this.codepos].src;
            this.codetext = printcodes[this.codepos].text;
            this.codemax = printcodes.length;
        }
        else if (this.codeselected == 'Code 39 Ext') {
            this.codepos = 0;
            //console.log(this.codes);
            var printcodes = this.codes.filter(function (code) {
                return code.type == "Code 39 Ext";
            });
            this.printcodes2 = printcodes;
            // console.log(printcodes)
            this.codelabel = printcodes[this.codepos].type;
            this.codesrc = printcodes[this.codepos].src;
            this.codetext = printcodes[this.codepos].text;
            this.codemax = printcodes.length;
        }
        else if (this.codeselected == 'Code 128 a') {
            this.codepos = 0;
            //console.log(this.codes);
            var printcodes = this.codes.filter(function (code) {
                return code.type == "Code 128 a";
            });
            this.printcodes2 = printcodes;
            // console.log(printcodes)
            this.codelabel = printcodes[this.codepos].type;
            this.codesrc = printcodes[this.codepos].src;
            this.codetext = printcodes[this.codepos].text;
            this.codemax = printcodes.length;
        }
        else if (this.codeselected == 'Code 128 b') {
            this.codepos = 0;
            //console.log(this.codes);
            var printcodes = this.codes.filter(function (code) {
                return code.type == "Code 128 b";
            });
            this.printcodes2 = printcodes;
            // console.log(printcodes)
            this.codelabel = printcodes[this.codepos].type;
            this.codesrc = printcodes[this.codepos].src;
            this.codetext = printcodes[this.codepos].text;
            this.codemax = printcodes.length;
        }
        else if (this.codeselected == 'Code 128 c') {
            this.codepos = 0;
            //console.log(this.codes);
            var printcodes = this.codes.filter(function (code) {
                return code.type == "Code 128 c";
            });
            this.printcodes2 = printcodes;
            // console.log(printcodes)
            this.codelabel = printcodes[this.codepos].type;
            this.codesrc = printcodes[this.codepos].src;
            this.codetext = printcodes[this.codepos].text;
            this.codemax = printcodes.length;
        }
        else if (this.codeselected == 'Code QR') {
            this.codepos = 0;
            //console.log(this.codes);
            var printcodes = this.codes.filter(function (code) {
                return code.type == "Code QR";
            });
            this.printcodes2 = printcodes;
            // console.log(printcodes)
            this.codelabel = printcodes[this.codepos].type;
            this.codesrc = printcodes[this.codepos].src;
            this.codetext = printcodes[this.codepos].text;
            this.codemax = printcodes.length;
        }
    }
    next() {
        if (this.codepos === this.codemax - 1) {
            // this.codepos = 0;
            console.log('reset codepost ' + this.codepos);
            this.btnext.disabled = true;
            this.btnback.disabled = false;
        }
        else {
            this.btnext.disabled = false;
            this.codepos = this.codepos + 1;
            this.codelabel = this.printcodes2[this.codepos].type;
            this.codesrc = this.printcodes2[this.codepos].src;
            this.codetext = this.printcodes2[this.codepos].text;
        }
    }
    back() {
        if (this.codepos === 0) {
            // this.codepos = 0;
            console.log('reset codepost ' + this.codepos);
            this.btnback.disabled = true;
            this.btnext.disabled = false;
        }
        else {
            this.btnback.disabled = false;
            this.codepos = this.codepos - 1;
            this.codelabel = this.printcodes2[this.codepos].type;
            this.codesrc = this.printcodes2[this.codepos].src;
            this.codetext = this.printcodes2[this.codepos].text;
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"])
], InjectPage.prototype, "btnback", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"])
], InjectPage.prototype, "btnext", void 0);
InjectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inject',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inject.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inject/inject.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inject.page.scss */ "./src/app/pages/inject/inject.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InjectPage);



/***/ })

}]);
//# sourceMappingURL=pages-inject-inject-module-es2015.js.map