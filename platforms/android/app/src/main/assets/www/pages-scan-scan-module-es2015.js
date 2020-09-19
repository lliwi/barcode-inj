(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scan-scan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    -->\n    <ion-menu-button color=\"primary\"></ion-menu-button>\n            \n    </ion-buttons>\n    <ion-title>scan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Format</ion-label>\n      <ion-input type=\"text\" value=\"\" [(ngModel)]=\"format\"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label fixed>Number</ion-label>\n      <ion-input type=\"text\" value=\"\" [(ngModel)]=\"num\"></ion-input>\n    </ion-item>\n    <ion-item>\n    <ion-label fixed>Name</ion-label>\n    <ion-input type=\"text\" placeholder=\"Enter a name\" value=\"\" [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n    <ion-button color=\"primary\" (click)=\"add()\">add</ion-button>  \n  </ion-list>\n  \n</ion-content>\n<ion-footer no-shadow>\n\t<ion-toolbar position=\"bottom\">\n\t\t<ion-button expand=\"block\" color=\"primary\" (click)=\"scan()\">scan</ion-button>\n\t</ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/scan/scan-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/scan/scan-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ScanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageRoutingModule", function() { return ScanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan.page */ "./src/app/pages/scan/scan.page.ts");




const routes = [
    {
        path: '',
        component: _scan_page__WEBPACK_IMPORTED_MODULE_3__["ScanPage"]
    }
];
let ScanPageRoutingModule = class ScanPageRoutingModule {
};
ScanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScanPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/scan/scan.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.module.ts ***!
  \*******************************************/
/*! exports provided: ScanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scan-routing.module */ "./src/app/pages/scan/scan-routing.module.ts");
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan.page */ "./src/app/pages/scan/scan.page.ts");







let ScanPageModule = class ScanPageModule {
};
ScanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanPageRoutingModule"]
        ],
        declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]]
    })
], ScanPageModule);



/***/ }),

/***/ "./src/app/pages/scan/scan.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjYW4vc2Nhbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/scan/scan.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/scan/scan.page.ts ***!
  \*****************************************/
/*! exports provided: ScanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPage", function() { return ScanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _services_data_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data-local.service */ "./src/app/services/data-local.service.ts");





let ScanPage = class ScanPage {
    constructor(navCtrl, barcodeScanner, dataLocal) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.dataLocal = dataLocal;
    }
    ngOnInit() {
    }
    scan() {
        this.barcodeScanner.scan().then(data => {
            // this is called when a barcode is found
            this.num = data.text;
            this.format = data.format;
            if (!data.cancelled) {
            }
        }).catch(err => {
            console.log('Error', err);
        });
    }
    add() {
        this.dataLocal.guardarRegistro(this.format, this.num, this.name);
        //this.dataLocal.cargarStorage();
    }
};
ScanPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
    { type: _services_data_local_service__WEBPACK_IMPORTED_MODULE_4__["DataLocalService"] }
];
ScanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scan.page.scss */ "./src/app/pages/scan/scan.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"], _services_data_local_service__WEBPACK_IMPORTED_MODULE_4__["DataLocalService"]])
], ScanPage);



/***/ })

}]);
//# sourceMappingURL=pages-scan-scan-module-es2015.js.map