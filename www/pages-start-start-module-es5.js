function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-start-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStartStartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    -->\n    <ion-menu-button color=\"primary\"></ion-menu-button>\n            \n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"refresh()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n            \n    </ion-buttons>\n\n    <ion-title>start</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"pane\"> \n\n  <ion-list #lista >\n  <ion-item-sliding *ngFor=\"let code of dataLocal.guardados; let i = index \" > \n  <ion-item >\n  <ion-label> {{ code[0].name }} \n    <h2>{{ code[0].num }}</h2>\n    <p> {{ code[0].created | date: 'medium'}}</p>\n  </ion-label>\n  </ion-item>\n\n   <ion-item-options side=\"end\">\n\n      <ion-item-option color=\"danger\" (click)=\"delete(code[0])\">\n      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n\n      <ion-item-option color=\"grey\" (click)=\"brute(code[0])\">\n      <ion-icon slot=\"icon-only\" name=\"redo\"></ion-icon>\n      </ion-item-option>\n \n      <ion-item-option (click)=\"view(code[0])\">\n      <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-item-option>\n \n    </ion-item-options>\n\n  </ion-item-sliding>\n  </ion-list>\n  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/start/start-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/start/start-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: StartPageRoutingModule */

  /***/
  function srcAppPagesStartStartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function () {
      return StartPageRoutingModule;
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


    var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./start.page */
    "./src/app/pages/start/start.page.ts");

    var routes = [{
      path: '',
      component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }];

    var StartPageRoutingModule = function StartPageRoutingModule() {
      _classCallCheck(this, StartPageRoutingModule);
    };

    StartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StartPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/start/start.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/start/start.module.ts ***!
    \*********************************************/

  /*! exports provided: StartPageModule */

  /***/
  function srcAppPagesStartStartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartPageModule", function () {
      return StartPageModule;
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


    var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./start-routing.module */
    "./src/app/pages/start/start-routing.module.ts");
    /* harmony import */


    var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./start.page */
    "./src/app/pages/start/start.page.ts");

    var StartPageModule = function StartPageModule() {
      _classCallCheck(this, StartPageModule);
    };

    StartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"]],
      declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
    })], StartPageModule);
    /***/
  },

  /***/
  "./src/app/pages/start/start.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/start/start.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStartStartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pane {\n  --background: url('barcode-logo-sm3.png');\n  --background-repeat: no-repeat;\n  --background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXIvRG9jdW1lbnRzL2lvbmljL2JhcmNvZGUtaW5qL3NyYy9hcHAvcGFnZXMvc3RhcnQvc3RhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGFydC9zdGFydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0L3N0YXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5le1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFyY29kZS1sb2dvLXNtMy5wbmcpO1xuICAgIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAtLWJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxufSIsIi5wYW5lIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYXJjb2RlLWxvZ28tc20zLnBuZyk7XG4gIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLS1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/start/start.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/start/start.page.ts ***!
    \*******************************************/

  /*! exports provided: StartPage */

  /***/
  function srcAppPagesStartStartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartPage", function () {
      return StartPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data-local.service */
    "./src/app/services/data-local.service.ts");

    var StartPage = /*#__PURE__*/function () {
      function StartPage(alertController, navCtrl, menuCtrl, dataLocal) {
        _classCallCheck(this, StartPage);

        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.dataLocal = dataLocal;

        if (this.dataLocal.guardados.length < 1) {// this.dataLocal.guardarRegistro('Code QR', '012345678', 'sample data');
        } // this.dataLocal.cargarStorage();

      }

      _createClass(StartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.dataLocal.cargarStorage();
        }
      }, {
        key: "refresh",
        value: function refresh() {
          location.reload();
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.menuCtrl.toggle();
        }
      }, {
        key: "delete",
        value: function _delete(item) {
          this.dataLocal.eliminarRegistro(item.num);
          this.lista.closeSlidingItems(); // this.navCtrl.setRoot(this.navCtrl.getActive().component);

          location.reload();
        }
      }, {
        key: "brute",
        value: function brute(item) {
          this.lista.closeSlidingItems();
          this.namenormalize(item);
          this.dataLocal.codevalue = item.num;
          this.dataLocal.codeformat = this.codeformat; // this.dataLocal.codeformat = item.format.replace(/\s+/g, '').replace(/\b\w/g, l => l.toUpperCase());

          this.navCtrl.navigateForward('/brute');
        }
      }, {
        key: "view",
        value: function view(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var msj, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.lista.closeSlidingItems();
                    this.namenormalize(item);
                    msj = "<img src='https://barcode.tec-it.com/barcode.ashx?data=" + item.num + "&code=" + this.codeformat + "&dpi=96&dataseparator='/> <br> <p>Name: " + item.name + "</p><p>Format: " + item.format + "</p>";
                    _context.next = 5;
                    return this.alertController.create({
                      header: 'Code details:',
                      // subHeader: item.name + ' ' + item.format,
                      message: msj,
                      buttons: ['OK']
                    });

                  case 5:
                    alert = _context.sent;
                    _context.next = 8;
                    return alert.present();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "namenormalize",
        value: function namenormalize(item) {
          this.codeformat = item.format; // console.log(item.format);

          if (this.codeformat.startsWith('CODE') === true) {
            this.codeformat = this.codeformat.replace(/\s+/g, '');
            this.codeformat = this.codeformat.replace(/_/g, '');
            this.codeformat = this.codeformat.toLowerCase();
            this.codeformat = this.codeformat.charAt(0).toUpperCase() + this.codeformat.slice(1);
          } else if (this.codeformat.startsWith('QR_') === true) {
            this.codeformat = this.codeformat.replace(/\s+/g, '');
            this.codeformat = this.codeformat.replace(/_/g, '');
            this.codeformat = this.codeformat.toLowerCase();
            this.codeformat = this.codeformat.charAt(0).toUpperCase() + this.codeformat.charAt(1).toUpperCase() + this.codeformat.charAt(2).toUpperCase() + this.codeformat.slice(3);
          } else if (this.codeformat.startsWith('DATA_') === true) {
            this.codeformat = this.codeformat.replace(/\s+/g, '');
            this.codeformat = this.codeformat.replace(/_/g, '');
            this.codeformat = this.codeformat.toLowerCase();
            this.codeformat = this.codeformat.charAt(0).toUpperCase() + this.codeformat.charAt(1).toLowerCase() + this.codeformat.charAt(2).toLowerCase() + this.codeformat.charAt(3).toLowerCase() + this.codeformat.charAt(4).toUpperCase() + this.codeformat.slice(5);
          } else if (this.codeformat.startsWith('ITF') === true) {
            this.codeformat = 'RSS14';
          } else {
            this.codeformat = this.codeformat.replace(/\s+/g, '');
            this.codeformat = this.codeformat.replace(/_/g, '');
          }
        }
      }]);

      return StartPage;
    }();

    StartPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_3__["DataLocalService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lista'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"])], StartPage.prototype, "lista", void 0);
    StartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./start.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./start.page.scss */
      "./src/app/pages/start/start.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_services_data_local_service__WEBPACK_IMPORTED_MODULE_3__["DataLocalService"]])], StartPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-start-start-module-es5.js.map