function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scan-scan-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScanScanPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    -->\n    <ion-menu-button color=\"primary\"></ion-menu-button>\n            \n    </ion-buttons>\n    <ion-title>scan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Format</ion-label>\n      <ion-input type=\"text\" value=\"\" [(ngModel)]=\"format\"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label fixed>Number</ion-label>\n      <ion-input type=\"text\" value=\"\" [(ngModel)]=\"num\"></ion-input>\n    </ion-item>\n    <ion-item>\n    <ion-label fixed>Name</ion-label>\n    <ion-input type=\"text\" placeholder=\"Enter a name\" value=\"\" [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n    <ion-button color=\"primary\" (click)=\"add()\">add</ion-button>  \n  </ion-list>\n  \n</ion-content>\n<ion-footer no-shadow>\n\t<ion-toolbar position=\"bottom\">\n\t\t<ion-button expand=\"block\" color=\"primary\" (click)=\"scan()\">scan</ion-button>\n\t</ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/scan/scan-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/scan/scan-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ScanPageRoutingModule */

  /***/
  function srcAppPagesScanScanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScanPageRoutingModule", function () {
      return ScanPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _scan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scan.page */
    "./src/app/pages/scan/scan.page.ts");

    var routes = [{
      path: '',
      component: _scan_page__WEBPACK_IMPORTED_MODULE_3__["ScanPage"]
    }];

    var ScanPageRoutingModule = function ScanPageRoutingModule() {
      _classCallCheck(this, ScanPageRoutingModule);
    };

    ScanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ScanPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/scan/scan.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/scan/scan.module.ts ***!
    \*******************************************/

  /*! exports provided: ScanPageModule */

  /***/
  function srcAppPagesScanScanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScanPageModule", function () {
      return ScanPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./scan-routing.module */
    "./src/app/pages/scan/scan-routing.module.ts");
    /* harmony import */


    var _scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./scan.page */
    "./src/app/pages/scan/scan.page.ts");

    var ScanPageModule = function ScanPageModule() {
      _classCallCheck(this, ScanPageModule);
    };

    ScanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanPageRoutingModule"]],
      declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]]
    })], ScanPageModule);
    /***/
  },

  /***/
  "./src/app/pages/scan/scan.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/scan/scan.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScanScanPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjYW4vc2Nhbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/scan/scan.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/scan/scan.page.ts ***!
    \*****************************************/

  /*! exports provided: ScanPage */

  /***/
  function srcAppPagesScanScanPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScanPage", function () {
      return ScanPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _services_data_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/data-local.service */
    "./src/app/services/data-local.service.ts");

    var ScanPage = /*#__PURE__*/function () {
      function ScanPage(navCtrl, barcodeScanner, dataLocal) {
        _classCallCheck(this, ScanPage);

        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.dataLocal = dataLocal;
      }

      _createClass(ScanPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scan",
        value: function scan() {
          var _this = this;

          this.barcodeScanner.scan().then(function (data) {
            // this is called when a barcode is found
            _this.num = data.text;
            _this.format = data.format;

            if (!data.cancelled) {}
          })["catch"](function (err) {
            console.log('Error', err);
          });
        }
      }, {
        key: "add",
        value: function add() {
          this.dataLocal.guardarRegistro(this.format, this.num, this.name); //this.dataLocal.cargarStorage();
        }
      }]);

      return ScanPage;
    }();

    ScanPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]
      }, {
        type: _services_data_local_service__WEBPACK_IMPORTED_MODULE_4__["DataLocalService"]
      }];
    };

    ScanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scan',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./scan.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./scan.page.scss */
      "./src/app/pages/scan/scan.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"], _services_data_local_service__WEBPACK_IMPORTED_MODULE_4__["DataLocalService"]])], ScanPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-scan-scan-module-es5.js.map