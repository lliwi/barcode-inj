(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-brute-brute-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brute/brute.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brute/brute.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text =\"Atras\" color=\"primary\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title > brute </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n<div style='text-align: center;'>\n  <!-- insert your custom barcode setting your data in the GET parameter \"data\" -->\n  <img class=\"code\" alt='Barcode Generator TEC-IT'\n       src='https://barcode.tec-it.com/barcode.ashx?data=\"{{rangeCurrentValue || codevalue}}\"&code={{codeformat}}&dpi=96&dataseparator='/>\n       <p></p>\n</div>\n\n</ion-content>\n  <!-- Control for number barcodes-->\n<ion-footer class=\"ion-padding\" class=\"ion-no-border\" *ngIf=\"codetype == 'number'\">\n\n  <ion-item>\n    <ion-label>Min / Max range</ion-label>\n    <ion-input type=\"number\" step=\"10\" value=\"10\" [(ngModel)]=\"rangeMM\" ></ion-input>\n    <button item-right class=\"ion-padding\" (click)=\"btnRdown()\">-</button>\n    <button item-right class=\"ion-padding\" (click)=\"btnRup()\">+</button>\n  </ion-item>\n  <ion-item>\n    <ion-label>Step</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"step\"></ion-input>\n    <button item-right class=\"ion-padding\" (click)=\"btnSdown()\">-</button>\n    <button item-right class=\"ion-padding\" (click)=\"btnSup()\">+</button>\n    \n  </ion-item>\n   <ion-item>\n    <ion-range  min={{rangemin}} max={{rangemax}}  step={{step}}  color=\"primary\" [(ngModel)]=\"rangeCurrentValue\">\n      <ion-label slot=\"start\">{{rangemin}}</ion-label>\n      <ion-label slot=\"end\">{{rangemax}}</ion-label>\n    </ion-range>\n    <ion-badge>{{rangeCurrentValue}}</ion-badge>\n    <ion-button expand=\"block\"  (click)=\"play()\" >\n      <ion-icon name=\"play\"></ion-icon>\n    </ion-button>\n    <ion-button expand=\"block\" (click)=\"stoppressed()\" >\n      <ion-icon name=\"square\"></ion-icon>\n    </ion-button>\n  </ion-item>\n\n\n</ion-footer>\n<!-- Control for string barcodes-->\n<ion-footer class=\"ion-padding\" class=\"ion-no-border\" *ngIf=\"codetype == 'string'\">\n  <ion-item>\n    <ion-label>Code value</ion-label>\n    <ion-input value=\"{{codevalue}}\" [(ngModel)]=\"codevalue\"></ion-input>\n  </ion-item>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/brute/brute-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/brute/brute-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BrutePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrutePageRoutingModule", function() { return BrutePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _brute_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brute.page */ "./src/app/pages/brute/brute.page.ts");




const routes = [
    {
        path: '',
        component: _brute_page__WEBPACK_IMPORTED_MODULE_3__["BrutePage"]
    }
];
let BrutePageRoutingModule = class BrutePageRoutingModule {
};
BrutePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BrutePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/brute/brute.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/brute/brute.module.ts ***!
  \*********************************************/
/*! exports provided: BrutePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrutePageModule", function() { return BrutePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _brute_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brute-routing.module */ "./src/app/pages/brute/brute-routing.module.ts");
/* harmony import */ var _brute_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brute.page */ "./src/app/pages/brute/brute.page.ts");







let BrutePageModule = class BrutePageModule {
};
BrutePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _brute_routing_module__WEBPACK_IMPORTED_MODULE_5__["BrutePageRoutingModule"]
        ],
        declarations: [_brute_page__WEBPACK_IMPORTED_MODULE_6__["BrutePage"]]
    })
], BrutePageModule);



/***/ }),

/***/ "./src/app/pages/brute/brute.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/brute/brute.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".code {\n  transform: rotate(270deg);\n  height: 100%;\n  width: 100%;\n  display: block;\n  padding-top: 50%;\n  padding-bottom: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL2lvbmljL2JhcmNvZGUtaW5qL3NyYy9hcHAvcGFnZXMvYnJ1dGUvYnJ1dGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9icnV0ZS9icnV0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JydXRlL2JydXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2RlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MCU7XG5cbiAgfSIsIi5jb2RlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG4gIHBhZGRpbmctYm90dG9tOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/brute/brute.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/brute/brute.page.ts ***!
  \*******************************************/
/*! exports provided: BrutePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrutePage", function() { return BrutePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-local.service */ "./src/app/services/data-local.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");




let BrutePage = class BrutePage {
    constructor(dataLocal) {
        this.dataLocal = dataLocal;
        this.codevalue = this.dataLocal.codevalue;
        this.codeformat = this.dataLocal.codeformat;
        this.rangeMM = 0;
        this.step = 0;
    }
    ngOnInit() {
        if (Number(this.codevalue) - 1000 < 0) {
            this.rangemin = '0';
        }
        this.codetype = 'number';
        if (isNaN(Number(this.codevalue)) === true) {
            this.codetype = 'string';
            console.log(this.codevalue);
        }
    }
    btnRup() {
        this.rangeMM = this.rangeMM + 10;
        this.rangemax = String(Number(this.codevalue) + this.rangeMM);
        this.rangemin = String(Number(this.codevalue) - this.rangeMM);
    }
    btnRdown() {
        if (this.rangeMM > 0) {
            this.rangeMM = this.rangeMM - 10;
            this.rangemax = String(Number(this.codevalue) + this.rangeMM);
            this.rangemin = String(Number(this.codevalue) - this.rangeMM);
        }
    }
    btnSup() {
        this.step = this.step + 1;
    }
    btnSdown() {
        if (this.step > 0) {
            this.step = this.step - 1;
        }
    }
    play() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.stop = 0;
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            console.log(Number(this.rangemin));
            for (let i = Number(this.rangemin); i < Number(this.rangemax);) {
                this.rangeCurrentValue = i;
                yield sleep(1000);
                i = i + Number(this.step);
                if (this.stop > 0) {
                    i = Number(this.rangemax);
                }
            }
        });
    }
    stoppressed() {
        this.stop = 1;
    }
};
BrutePage.ctorParameters = () => [
    { type: src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_2__["DataLocalService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('range'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRange"])
], BrutePage.prototype, "range", void 0);
BrutePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brute',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./brute.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/brute/brute.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./brute.page.scss */ "./src/app/pages/brute/brute.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_2__["DataLocalService"]])
], BrutePage);



/***/ })

}]);
//# sourceMappingURL=pages-brute-brute-module-es2015.js.map