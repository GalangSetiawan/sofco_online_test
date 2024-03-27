function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"mt-3\">\n  <app-header ></app-header>\n\n</div>\n<div class=\"mt-5\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n<!-- <div class=\"navbar fixed-bottom \">\n    <app-footer></app-footer>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/catalog/catalog.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/catalog/catalog.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentCatalogCatalogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid uk-animation-slide-right\">\n\n\n    <div class=\"uk-search uk-search-large mb-5\" style=\"zoom: 0.6;\">\n        <span uk-search-icon></span>\n        <input class=\"uk-search-input\" type=\"search\" placeholder=\"Search...\" [(ngModel)]=\"filterText\" (input)=\"Search()\">\n    </div>\n\n\n        \n    <div uk-slider=\"center: true;autoplay: true;autoplay-interval: 10000\">\n\n        <ul class=\"uk-slider-items uk-grid\">\n            \n            <li class=\"uk-width-3-4 uk-transition-toggle\" tabindex=\"0\">\n                <div class=\"uk-panel\">\n                    <img src=\"https://getuikit.com/docs/images/light.jpg\" alt=\"\">\n                    \n                </div>\n            </li>\n            <li class=\"uk-width-3-4 uk-transition-toggle\" tabindex=\"0\">\n                <div class=\"uk-panel\">\n                    <img src=\"https://getuikit.com/docs/images/photo2.jpg\" alt=\"\">\n                    \n                </div>\n            </li>\n            <li class=\"uk-width-3-4 uk-transition-toggle\" tabindex=\"0\">\n                <div class=\"uk-panel\">\n                    <img src=\"https://getuikit.com/docs/images/photo3.jpg\" alt=\"\">\n                    \n                </div>\n            </li>\n        </ul>\n\n        <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n    </div>\n\n\n\n        <div class=\"d-flex justify-content-around mt-3 mb-3 uk-text-uppercase\">\n            <a class=\"p-2\" uk-tooltip=\"title: hanya desain, tidak dengan fungsinya; pos: bottom\">Sejarah</a>\n            <a class=\"p-2\" uk-tooltip=\"title: hanya desain, tidak dengan fungsinya; pos: bottom\">Sosial</a>\n            <a class=\"p-2\" uk-tooltip=\"title: hanya desain, tidak dengan fungsinya; pos: bottom\">Teknologi</a>\n        </div>\n\n\n        \n                   \n\n        <div class=\"container cardItem\">\n            <div class=\"uk-grid-large uk-child-width-1-3\" uk-grid uk-height-match=\"target: > div > .uk-card\">\n                <div *ngFor=\"let data of currentPageItem; let idx = index\">\n                    <div class=\"uk-card uk-card-default\">\n\n                        <div class=\"uk-inline-clip uk-transition-toggle\" (click)=\"modalDetailItem(data,idx)\">\n                            <img src={{data.picture}} class=\"imgItem\" alt=\"\">\n                            <div class=\"uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default\">\n                                <div class=\"uk-margin d-flex justify-content-center\">\n                                    <span>Stok Tersedia </span> &nbsp; <span>[ {{data.stock}} ]</span>\n                                </div>\n\n                            </div>\n                        </div>\n\n                        \n                        <div class=\"uk-card-body uk-padding-small\">\n\n                            <div class=\"d-flex justify-content-center mt-4\" style=\"margin-bottom: -5px;\">\n                                <span class=\"uk-text-bold\">{{data.title}}</span>\n                            </div>\n\n                            <div class=\"d-flex justify-content-center\" style=\"margin-bottom: -10px;\">\n                                <span class=\"uk-text-italic\">{{data.author}}</span>\n                            </div>\n\n                            <div class=\"uk-margin d-flex justify-content-center\">\n                                <p style=\"margin-bottom:-1px\"><span class=\"uk-text-bold\">Rp. </span>{{ data.price | number }},-</p>\n                            </div>\n\n                            <div class=\"d-flex justify-content-center\" style=\"margin-top: -20px;\" uk-tooltip=\"title: hanya desain, tidak dengan fungsinya; pos: bottom\">    \n                                <div>\n                                    <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\n                                    <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\n                                    <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\n                                    <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\n                                    <span uk-icon=\"icon: star\"></span>\n                                    <span class=\"uk-text-muted \">  (100)</span>\n                                </div>\n                            </div>\n                            \n                           \n\n                            <div class=\"uk-margin d-flex justify-content-center\">\n                                <button class=\"uk-button uk-button-primary  roundedBorder-sx gsShadow\" (click)=\"addToCart(data)\" [disabled]=\"data.isDisable\">Add to Cart</button>\n                            </div>\n    \n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n        \n\n\n\n\n        <div class=\"container\" id=\"pagination\">\n            <div class=\"d-flex justify-content-between mt-5\">\n                <div class=\"p-2\"><a id=\"prevBtn\" class=\"uk-slidenav-large\" uk-slidenav-previous (click)=\"prevPage()\"></a></div>\n                <div class=\"p-2\">{{currentPage}}</div>\n                <div class=\"p-2\"><a id=\"nextBtn\" class=\"uk-slidenav-large\" uk-slidenav-next (click)=\"nextPage()\"></a></div>\n            </div>\n        </div>\n\n        \n\n</div>\n\n\n\n\n\n<!-- ===============Modal Detaill Item==================== -->\n<div id=\"detailView\" uk-modal>\n    <div class=\"uk-modal-dialog uk-margin-auto-vertical uk-modal-body\">\n\n        <div class=\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin\" uk-grid>\n            <div class=\"uk-card-media-left uk-cover-container\">\n                <img src=\"{{detailBook.picture}}\" alt=\"\" uk-cover>\n                <canvas width=\"600\" height=\"400\"></canvas>\n            </div>\n            <div>\n                <div class=\"uk-card-body\">\n                    <h3 class=\"uk-card-title\">{{detailBook.title}}</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>\n\n                    <div class=\"d-flex justify-content-center\" style=\"margin-bottom: -10px;\">\n                        <span class=\"uk-text-italic\">{{detailBook.author}}</span>\n                    </div>\n\n                    <div class=\"uk-margin d-flex justify-content-center\" style=\"margin-bottom:-20px\">\n                        <span>Stok Tersedia </span> &nbsp; <span>[ {{detailBook.stock}} ]</span>\n                    </div>\n\n                    <div class=\"uk-margin d-flex justify-content-center\">\n                        <p style=\"margin-bottom:-1px\"><span class=\"uk-text-bold\">Rp. </span>{{ detailBook.price | number }},-</p>\n                    </div>\n\n                    <div class=\"d-flex justify-content-center\" style=\"margin-top: -20px;\" uk-tooltip=\"title: hanya desain, tidak dengan fungsinya; pos: bottom\">    \n                        <div>\n                            <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\n                            <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\n                            <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\n                            <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\n                            <span uk-icon=\"icon: star\"></span>\n                            <span class=\"uk-text-muted \"> (100)</span>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n\n\n        <p class=\"uk-text-right\">\n            <button class=\"uk-button uk-button-default uk-modal-close roundedBorder-sx gsShadow\" type=\"button\">Cancel</button> &nbsp;\n            <button class=\"uk-button uk-button-primary roundedBorder-sx gsShadow\" [disabled]=\"detailBook.isDisable\" (click)=\"addToCart(detailBook)\" type=\"button\">Add to Cart</button>\n        </p>\n\n\n        <!-- <p class=\"uk-text-right\">\n            <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>\n            <button class=\"uk-button uk-button-primary\" type=\"button\">Save</button>\n        </p> -->\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/detailbook/detailbook.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/detailbook/detailbook.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentDetailbookDetailbookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"container\">\r\n\r\n    <div class=\"uk-card uk-card-default uk-card-body uk-width-1-1@m barJudul\" >\r\n        <div class=\"uk-card-badge uk-label\">BEST SELLER</div>\r\n\r\n        \r\n        <h3 class=\"uk-card-title\">     \r\n            <a skipLocationChange [routerLink]=\"['/catalog']\" class=\"uk-slidenav-large\" uk-slidenav-previous></a>\r\n            &nbsp; {{detailBuku.title}}</h3>\r\n    </div>\r\n\r\n\r\n    <div class=\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin bodyDetail\" uk-grid>\r\n        <div class=\"uk-card-media-left uk-cover-container\">\r\n            <img src=\"{{detailBuku.picture}}\" alt=\"\" uk-cover>\r\n            <canvas width=\"600\" height=\"1000\"></canvas>\r\n        </div>\r\n        <div>\r\n            <div class=\"uk-card-body\">\r\n                <h3 class=\"uk-card-title\">{{detailBuku.title}}</h3>\r\n                <p>{{detailBuku.description}}</p>\r\n    \r\n                <div class=\"d-flex justify-content-center\" style=\"margin-bottom: -10px;\">\r\n                    <span class=\"uk-text-italic\">{{detailBuku.author}}</span>\r\n                </div>\r\n    \r\n                <div class=\"uk-margin d-flex justify-content-center\" style=\"margin-bottom:-20px\">\r\n                    <span>Stok Tersedia </span> &nbsp; <span>[ {{detailBuku.stock}} ]</span>\r\n                </div>\r\n    \r\n                <div class=\"uk-margin d-flex justify-content-center\">\r\n                    <p style=\"margin-bottom:-1px\"><span class=\"uk-text-bold\">Rp. </span>{{ detailBuku.price | number }},-</p>\r\n                </div>\r\n    \r\n                <div class=\"d-flex justify-content-center\" style=\"margin-top: -20px;\" uk-tooltip=\"title: hanya desain, tidak dengan fungsinya; pos: bottom\">    \r\n                    <div>\r\n                        <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\r\n                        <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\r\n                        <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\r\n                        <span uk-icon=\"icon: star\" class=\"uk-text-warning\"></span>\r\n                        <span uk-icon=\"icon: star\"></span>\r\n                        <span class=\"uk-text-muted \"> (100)</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"uk-margin d-flex justify-content-center\">\r\n                    <button class=\"uk-button uk-button-primary roundedBorder-sx gsShadow\" [disabled]=\"detailBuku.isDisable\" (click)=\"addToCart(detailBuku)\" type=\"button\">Add to Cart</button>\r\n                </div>\r\n    \r\n    \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n\r\n    <ul class=\"uk-comment-list\">\r\n        <li>\r\n            <article class=\"uk-comment uk-visible-toggle\" tabindex=\"-1\">\r\n                <header class=\"uk-comment-header uk-position-relative\">\r\n                    <div class=\"uk-grid-medium uk-flex-middle\" uk-grid>\r\n                        <div class=\"uk-width-auto\">\r\n                            <img class=\"uk-comment-avatar\" src=\"https://getuikit.com/docs/images/avatar.jpg\" width=\"80\" height=\"80\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"uk-width-expand\">\r\n                            <h4 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\">Buyer 1</a></h4>\r\n                            <p class=\"uk-comment-meta uk-margin-remove-top\"><a class=\"uk-link-reset\" >12 days ago</a></p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"uk-position-top-right uk-position-small uk-hidden-hover\"><a class=\"uk-link-muted\" >Reply</a></div>\r\n                </header>\r\n                <div class=\"uk-comment-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\r\n                </div>\r\n            </article>\r\n            <ul>\r\n                <li>\r\n                    <article class=\"uk-comment uk-comment-primary uk-visible-toggle\" tabindex=\"-1\">\r\n                        <header class=\"uk-comment-header uk-position-relative\">\r\n                            <div class=\"uk-grid-medium uk-flex-middle\" uk-grid>\r\n                                <div class=\"uk-width-auto\">\r\n                                    <img class=\"uk-comment-avatar\" src=\"https://getuikit.com/docs/images/avatar.jpg\" width=\"80\" height=\"80\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"uk-width-expand\">\r\n                                    <h4 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" >Seller</a></h4>\r\n                                    <p class=\"uk-comment-meta uk-margin-remove-top\"><a class=\"uk-link-reset\" >12 days ago</a></p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"uk-position-top-right uk-position-small uk-hidden-hover\"><a class=\"uk-link-muted\" >Reply</a></div>\r\n                        </header>\r\n                        <div class=\"uk-comment-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\r\n                        </div>\r\n                    </article>\r\n                </li>\r\n                \r\n               \r\n            </ul>\r\n        </li>\r\n    </ul>\r\n\r\n    <ul class=\"uk-comment-list\">\r\n        <li>\r\n            <article class=\"uk-comment uk-visible-toggle\" tabindex=\"-1\">\r\n                <header class=\"uk-comment-header uk-position-relative\">\r\n                    <div class=\"uk-grid-medium uk-flex-middle\" uk-grid>\r\n                        <div class=\"uk-width-auto\">\r\n                            <img class=\"uk-comment-avatar\" src=\"https://getuikit.com/docs/images/avatar.jpg\" width=\"80\" height=\"80\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"uk-width-expand\">\r\n                            <h4 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" >Buyer 2</a></h4>\r\n                            <p class=\"uk-comment-meta uk-margin-remove-top\"><a class=\"uk-link-reset\" >12 days ago</a></p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"uk-position-top-right uk-position-small uk-hidden-hover\"><a class=\"uk-link-muted\" >Reply</a></div>\r\n                </header>\r\n                <div class=\"uk-comment-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\r\n                </div>\r\n            </article>\r\n            <ul>\r\n                <li>\r\n                    <article class=\"uk-comment uk-comment-primary uk-visible-toggle\" tabindex=\"-1\">\r\n                        <header class=\"uk-comment-header uk-position-relative\">\r\n                            <div class=\"uk-grid-medium uk-flex-middle\" uk-grid>\r\n                                <div class=\"uk-width-auto\">\r\n                                    <img class=\"uk-comment-avatar\" src=\"https://getuikit.com/docs/images/avatar.jpg\" width=\"80\" height=\"80\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"uk-width-expand\">\r\n                                    <h4 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" >Seller</a></h4>\r\n                                    <p class=\"uk-comment-meta uk-margin-remove-top\"><a class=\"uk-link-reset\" >12 days ago</a></p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"uk-position-top-right uk-position-small uk-hidden-hover\"><a class=\"uk-link-muted\" >Reply</a></div>\r\n                        </header>\r\n                        <div class=\"uk-comment-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\r\n                        </div>\r\n                    </article>\r\n                </li>\r\n                \r\n               \r\n            </ul>\r\n        </li>\r\n    </ul>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"zoom: 0.9;\">\n    <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n    <!-- <a class=\"uk-navbar-item uk-logo oleoFont storeNameHeading\" skipLocationChange [routerLink]=\"['/']\">Book Store <span >.</span></a> -->\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\" id=\"listMenu\">\n       \n\n\n        <li class=\"nav-item mr-4\">\n          <a class=\"nav-link ralewayFont\"  skipLocationChange [routerLink]=\"['/']\" > \n            <span uk-icon=\"icon: home\" skipLocationChange [routerLink]=\"['/']\"></span> \n            <span class=\"uk-margin-small-left\" id=\"titleHome\">Home</span>\n          </a>\n        </li>\n\n\n        <li class=\"nav-item mr-4\">\n            <a class=\"nav-link ralewayFont\" skipLocationChange [routerLink]=\"['/catalog']\">\n              <span uk-icon=\"icon: tag\" skipLocationChange [routerLink]=\"['/catalog']\"  ></span> \n              <span class=\"uk-margin-small-left\" id=\"titleCatalog\" >Catalog</span>\n            </a>\n        </li>\n       \n      </ul>\n    </div>\n\n\n\n\n    <div>\n      <div class=\"form-inline my-2 my-lg-0\">\n        <a uk-icon=\"icon: info\" uk-toggle href=\"#aboutModal\"></a>\n        <a uk-icon=\"icon: heart\" class=\"ml-4\" uk-tooltip=\"title: hanya desain, tidak dengan fungsinya; pos: bottom\"></a>\n        <a class=\"mr-2 ml-3 customColor\" id=\"titleShoplist\" skipLocationChange [routerLink]=\"['/shoplist']\" style=\"text-decoration: none;\"> \n          <span uk-icon=\"icon: cart\"></span> \n          <span class=\"uk-badge\" style=\"background-color:#ff701c;\">{{dataCart.length}}</span>\n        </a>\n      </div>\n    </div>\n    \n\n    \n</nav>\n\n\n  \n<!-- <nav class=\"uk-navbar-container\" uk-navbar>\n\n  <div class=\"uk-navbar-left\">\n\n      <ul class=\"uk-navbar-nav\">\n        <li class=\"uk-active\"><a><span uk-icon=\"icon: home\" skipLocationChange id=\"titleHome\"    [routerLink]=\"['/']\"></span></a></li>\n        <li class=\"uk-active\"><a><span uk-icon=\"icon: tag\"  skipLocationChange id=\"titleCatalog\" [routerLink]=\"['/catalog']\"></span></a></li>\n      </ul>\n\n  </div>\n\n  <div class=\"uk-navbar-right\">\n\n      <ul class=\"uk-navbar-nav\">\n          <li class=\"uk-active\"><a uk-icon=\"icon: info\" uk-toggle href=\"#aboutModal\"></a></li>\n          <li><a uk-icon=\"icon: heart\" class=\"\" uk-tooltip=\"title: hanya desain, tidak dengan fungsinya; pos: bottom\"></a></li>\n          <li><a class=\"customColor\" id=\"titleShoplist\" skipLocationChange [routerLink]=\"['/shoplist']\" style=\"text-decoration: none;\"> \n            <span uk-icon=\"icon: cart\"></span> \n            <span class=\"uk-badge\" style=\"background-color:#ff701c;\">{{dataCart.length}}</span>\n          </a>\n        </li>\n      </ul>\n\n  </div>\n\n</nav> -->\n\n\n\n<!-- This is the modal -->\n<div id=\"aboutModal\" uk-modal>\n    <div class=\"uk-modal-dialog uk-modal-body\">\n        <h2 class=\"uk-modal-title\">Sofco Recruitment Test</h2>\n\n        build with library & framework \n       \n        <table class=\"uk-table uk-table-small uk-table-divider\">\n          \n          <tbody>\n\n            <tr>\n              <td>\n                <img src=\"https://angular.io/assets/images/logos/angular/angular.png\" width=\"20\" alt=\"\">\n              </td>\n              <td>Angular 8</td>\n              <td><a href=\"https://angular.io/docs\">https://angular.io/</a></td>\n            </tr>\n\n            <tr>\n              <td>\n                <img src=\"https://cdn.iconscout.com/icon/free/png-512/uikit-285322.png\" width=\"20\" alt=\"\">\n              </td>\n              <td>UI Kit</td>\n              <td><a href=\"https://getuikit.com/\">https://getuikit.com/</a></td>\n            </tr>\n\n\n            <tr>\n              <td >\n                <img src=\"https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social-logo.png\" width=\"20\" alt=\"\">\n              </td>\n              <td>Bootstrap</td>\n              <td><a href=\"https://getbootstrap.com/\">https://getbootstrap.com/</a></td>\n            </tr>\n        \n            <!-- <tr>\n              <td>\n                <img src=\"https://www.drupal.org/files/project-images/font_awesome_logo.png\" width=\"20\" alt=\"\">\n              </td>\n              <td>Fontawesome</td>\n              <td><a href=\"https://fontawesome.com/v4.7.0/icons/\">https://fontawesome.com/v4.7.0/icons/</a></td>\n            </tr> -->\n        \n            \n            \n            <tr>\n              <td>\n                <img src=\"https://www.pikpng.com/pngl/m/440-4404136_jquery-jquery-logo-transparent-background-clipart.png\" width=\"20\" alt=\"\">\n              </td>\n              <td>jQuery</td>\n              <td><a href=\"https://jquery.com/\">https://jquery.com/</a></td>\n            </tr>\n          \n        \n            <tr>\n              <td>\n                <img src=\"https://i.pinimg.com/originals/5c/a1/dc/5ca1dc984117b0bb5e647ffea7fe6b0d.png\" width=\"20\" alt=\"\">\n              </td>\n              <td>Lodash</td>\n              <td><a href=\"https://lodash.com/\">https://lodash.com/</a></td>\n            </tr>\n        \n            \n        \n            \n          </tbody>\n      </table>\n\n        <p class=\"uk-text-right\">\n            <button class=\"uk-button uk-button-default uk-modal-close roundedBorder-sx\" type=\"button\">Cancel</button> &nbsp;\n            <button class=\"uk-button uk-button-primary roundedBorder-sx\" type=\"button\">Save</button>\n        </p>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"uk-navbar-container uk-margin uk-animation-slide-right\" uk-navbar id=\"welcomeBoard\" >\n\n    <!-- <div class=\"uk-navbar-left\">\n      <ul class=\"uk-navbar-nav\">\n          <li><a href=\"#\">Parent</a></li>\n      </ul>\n    </div> -->\n  \n  \n    <div class=\"uk-navbar-center\">\n        <div class=\"uk-navbar-center-left\">\n            <ul class=\"uk-navbar-nav\">\n                <li><a style=\"color: #A3A3A3; cursor:text;\">Welcome to my</a></li>\n            </ul>\n        </div>\n  \n        <a class=\"uk-navbar-item uk-logo oleoFont storeNameHeading\" skipLocationChange [routerLink]=\"['/']\">Book Store <span >.</span></a>\n  \n        <div class=\"uk-navbar-center-right\">\n            <ul class=\"uk-navbar-nav\">\n                <li><a style=\"color: #A3A3A3; cursor:text;\">Enjoy Shopping</a></li>\n            </ul>\n        </div>\n        \n    </div>\n  \n    <!-- <div class=\"uk-navbar-right\">\n      <ul class=\"uk-navbar-nav\">\n        <li><a href=\"#\">Parent</a></li>\n      </ul>\n    </div> -->\n  \n  \n  </nav>\n\n\n\n\n<div uk-slider=\"center: true;autoplay: true;autoplay-interval: 10000\" class=\"uk-animation-slide-right\">\n\n    <ul class=\"uk-slider-items uk-grid\">\n        \n        <li class=\"uk-width-3-4 uk-transition-toggle\" tabindex=\"0\">\n            <div class=\"uk-panel\">\n                <img src=\"https://getuikit.com/docs/images/light.jpg\" alt=\"\">\n                \n            </div>\n        </li>\n        <li class=\"uk-width-3-4 uk-transition-toggle\" tabindex=\"0\">\n            <div class=\"uk-panel\">\n                <img src=\"https://getuikit.com/docs/images/photo2.jpg\" alt=\"\">\n                \n            </div>\n        </li>\n        <li class=\"uk-width-3-4 uk-transition-toggle\" tabindex=\"0\">\n            <div class=\"uk-panel\">\n                <img src=\"https://getuikit.com/docs/images/photo3.jpg\" alt=\"\">\n                \n            </div>\n        </li>\n    </ul>\n\n    <ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul>\n\n</div>\n\n<div class=\"uk-margin d-flex justify-content-center\">\n    <div class=\"uk-margin\">\n        <button class=\"uk-button uk-button-primary uk-button-large\" skipLocationChange [routerLink]=\"['/catalog']\"> Go to Catalog <span uk-icon=\"icon: tag\"></span> </button>\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shoplist/shoplist.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shoplist/shoplist.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentShoplistShoplistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container uk-animation-slide-right\">\n    <table class=\"uk-table uk-table-justify uk-table-divider\" style=\"width: 100%;\">\n        <tbody>\n\n\n            <tr *ngFor=\"let data of dataCart\">\n                <td class=\"icon\">\n                    <a uk-tooltip=\"title: Hapus barang; pos: bottom\" (click)=\"hapusBuku(data)\">\n                        <i class=\"fa fa-close\" aria-hidden=\"true\" style=\"color:#90a4ae\"></i>\n                    </a> &nbsp;\n                    <a uk-tooltip=\"title: Tambah ke wishlist; pos: bottom\">\n                        <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color:#e91e63\" ></i>\n                    </a>\n                </td>\n\n                <td class=\"image\">\n                    <div class=\"uk-width-auto\">\n                        <img class=\"uk-comment-avatar\" src=\"{{data.picture}}\" width=\"80\" height=\"80\" alt=\"\">\n                    </div>\n                </td>\n                <td class=\"description\"  >\n                    <span>{{data.title}}</span><br>\n                    <span>{{data.author}}</span>\n                </td>\n                <td class=\"quantity\">\n\n                    <a class=\"plus-btn\" uk-tooltip=\"title: Tambah Item; pos: bottom\" type=\"button\" name=\"button\" (click)=\"editQty(data,'tambah')\">\n                        <span uk-icon=\"plus\"></span>\n                    </a>\n                    <input type=\"text\" name=\"name\" [(ngModel)]=\"data.qty\" readonly>\n                    <a class=\"minus-btn\"  uk-tooltip=\"title: Kurangi Item; pos: bottom\" type=\"button\" name=\"button\" (click)=\"editQty(data,'kurang')\">\n                        <span uk-icon=\"minus\"></span>\n                    </a>\n                </td>\n                <td class=\"total-price\">Rp{{data.price | number}}</td>\n            </tr>\n\n            \n\n\n        </tbody>\n\n\n    </table>\n\n\n    <table style=\"width: 100%;\">\n        <tr style=\"line-height: 5px;\">\n            <td class=\"description uk-text-bold\"> Ringkasan belanja </td>\n            <td class=\"image\"></td>\n            <td class=\"icon\"></td>\n            <td class=\"quantity\"></td>\n            <td class=\"total-price\"></td>\n        </tr>\n\n        <tr style=\"line-height: 5px;\">\n            <td class=\"description\">Harga <span>( {{totalBuku}} buku)</span></td>\n            <td class=\"image\"></td>\n            <td class=\"icon\"></td>\n            <td class=\"quantity\"></td>\n            <td class=\"total-price\" *ngIf=\"dataCart.length > 0\">Rp{{totalHarga | number}}</td>\n            <td class=\"total-price\" *ngIf=\"dataCart.length == 0\">Rp{{ 0 | number}}</td>\n        </tr>\n\n        <tr style=\"line-height: 5px;\">\n            <td class=\"description\">Diskon</td>\n            <td class=\"image\"></td>\n            <td class=\"icon\"></td>\n            <td class=\"quantity\"></td>\n            <td class=\"total-price\">Rp{{ 0 | number}}</td>\n        </tr>\n\n        <tr style=\"line-height: 5px;\">\n            <td class=\"description\">Ongkos Kirim</td>\n            <td class=\"image\"></td>\n            <td class=\"icon\"></td>\n            <td class=\"quantity\"></td>\n            <td class=\"total-price\">Rp{{ 0 | number}}</td>\n        </tr>\n\n        <tr style=\"line-height: 5px;\">\n            <td class=\"description\">Total Harga</td>\n            <td class=\"image\"></td>\n            <td class=\"icon\"></td>\n            <td class=\"quantity\"></td>\n            <td class=\"total-price customColor font-weight-bold\" *ngIf=\"dataCart.length > 0\">Rp{{ totalHarga | number}}</td>\n            <td class=\"total-price customColor font-weight-bold\" *ngIf=\"dataCart.length == 0\">Rp{{ 0 | number}}</td>\n        </tr>\n\n\n    </table>\n\n  \n\n        \n       \n        \n   \n\n    \n</div>\n\n<br><br>\n\n\n<div class=\"container-fluid mt-5\">\n    <div class=\"navbar fixed-bottom \">\n\n        <button uk-tooltip=\"title: hanya desain, tidak dengan fungsinya; pos: bottom\" class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom roundedBorder-sx gsShadow\" (click)=\"lanjutkan()\" >Lanjutkan <span uk-icon=\"icon: cart\"></span>\n        </button>\n\n\n    </div>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _component_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/catalog/catalog.component */
    "./src/app/component/catalog/catalog.component.ts");
    /* harmony import */


    var _component_shoplist_shoplist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/shoplist/shoplist.component */
    "./src/app/component/shoplist/shoplist.component.ts");
    /* harmony import */


    var _component_detailbook_detailbook_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/detailbook/detailbook.component */
    "./src/app/component/detailbook/detailbook.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: '',
      component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'catalog',
      component: _component_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"]
    }, {
      path: 'shoplist',
      component: _component_shoplist_shoplist_component__WEBPACK_IMPORTED_MODULE_5__["ShoplistComponent"]
    }, {
      path: 'detail',
      component: _component_detailbook_detailbook_component__WEBPACK_IMPORTED_MODULE_6__["DetailbookComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap');\r\n  \r\n.oleoFont{\r\n  font-family: 'Oleo Script', cursive;\r\n\r\n}\r\n  \r\n.storeNameHeading span{\r\n  font-weight: bold;\r\n  font-size: 31px;\r\n  color: #ff701c;\r\n}\r\n  \r\n@media only screen and (max-device-width: 480px) {\r\n  #welcomeBoard{\r\n    zoom: 0.6;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGOztBQUVoRjtFQUNFLG1DQUFtQzs7QUFFckM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PbGVvK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcclxuICBcclxuLm9sZW9Gb250e1xyXG4gIGZvbnQtZmFtaWx5OiAnT2xlbyBTY3JpcHQnLCBjdXJzaXZlO1xyXG5cclxufVxyXG5cclxuLnN0b3JlTmFtZUhlYWRpbmcgc3BhbntcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDMxcHg7XHJcbiAgY29sb3I6ICNmZjcwMWM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XHJcbiAgI3dlbGNvbWVCb2FyZHtcclxuICAgIHpvb206IDAuNjtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'sofcotest';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _component_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/catalog/catalog.component */
    "./src/app/component/catalog/catalog.component.ts");
    /* harmony import */


    var _component_shoplist_shoplist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/shoplist/shoplist.component */
    "./src/app/component/shoplist/shoplist.component.ts");
    /* harmony import */


    var _component_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/header/header.component */
    "./src/app/component/header/header.component.ts");
    /* harmony import */


    var _component_detailbook_detailbook_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/detailbook/detailbook.component */
    "./src/app/component/detailbook/detailbook.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _component_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__["CatalogComponent"], _component_shoplist_shoplist_component__WEBPACK_IMPORTED_MODULE_8__["ShoplistComponent"], _component_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _component_detailbook_detailbook_component__WEBPACK_IMPORTED_MODULE_10__["DetailbookComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/component/catalog/catalog.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/component/catalog/catalog.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentCatalogCatalogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".itemMarker{\n    background-color: black;\n    color: white;\n    padding: 5px;\n    width:30px;\n    height: 30px;\n}\n\n@media only screen and (max-device-width: 480px) {\n    .cardItem{\n        padding: 3px !important;\n        zoom: 0.5;\n    }\n\n    .imgItem{\n        min-height: 300px !important;\n    }\n\n    \n}\n\n.imgItem{\n    min-height: 400px;\n    -o-object-fit: cover;\n       object-fit: cover\n}\n\n.cardItem{\n    padding: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtRQUN2QixTQUFTO0lBQ2I7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7OztBQUdKOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFnQjtPQUFoQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1NYXJrZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDozMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgICAuY2FyZEl0ZW17XG4gICAgICAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xuICAgICAgICB6b29tOiAwLjU7XG4gICAgfVxuXG4gICAgLmltZ0l0ZW17XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgXG59XG5cblxuLmltZ0l0ZW17XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXJcbn1cblxuLmNhcmRJdGVte1xuICAgIHBhZGRpbmc6IDUlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/component/catalog/catalog.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/component/catalog/catalog.component.ts ***!
    \********************************************************/

  /*! exports provided: CatalogComponent */

  /***/
  function srcAppComponentCatalogCatalogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogComponent", function () {
      return CatalogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_bookstore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/bookstore.service */
    "./src/app/service/bookstore.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CatalogComponent = /*#__PURE__*/function () {
      function CatalogComponent(bookSvc, router) {
        _classCallCheck(this, CatalogComponent);

        this.bookSvc = bookSvc;
        this.router = router;
        this.masterBook = [];
        this.dataCart = [];
        this.title = "catalog";
        this.currentPageItem = [];
        this.arrPagination = [];
        this.filterText = "";
        this.detailBook = {};
        this.currentPage = 1;
      }

      _createClass(CatalogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataCart = this.bookSvc.getDataCart();

          if (this.dataCart.length == 0) {
            this.masterBook = this.bookSvc.generateListBook();
          } else {
            this.masterBook = this.bookSvc.getDataMasterBook();
          }

          console.log('master book ===>', this.masterBook);
          this.selectActiveMenu(this.title);
          this.pagination(1);
          jquery__WEBPACK_IMPORTED_MODULE_3__('#pagination #nextBtn').addClass('customColor');
        }
      }, {
        key: "selectActiveMenu",
        value: function selectActiveMenu(opened) {
          this.removeActiveMenu();

          if (opened == 'catalog') {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleCatalog').addClass('customColorNav');
          } else if (opened == 'home') {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleHome').addClass('customColorNav');
          } else if (opened == 'shoplist') {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleShoplist').addClass('customColorNav');
          }
        }
      }, {
        key: "removeActiveMenu",
        value: function removeActiveMenu() {
          jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleHome').removeClass('customColorNav');
          jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleCatalog').removeClass('customColorNav');
          jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleShoplist').removeClass('customColorNav');
        }
      }, {
        key: "pagination",
        value: function pagination(page) {
          this.arrPagination = [];
          this.currentPageItem = [];
          var itemInPage = 6;
          var arr = this.masterBook;
          this.arrPagination = arr.map(function (e, i) {
            return i % itemInPage === 0 ? arr.slice(i, i + itemInPage) : null;
          }).filter(function (e) {
            return e;
          });
          console.log('pagination | this.arrPagination ===>', this.arrPagination);
          this.currentPageItem = this.arrPagination[parseInt(page) - 1];
          console.log('currentPageItem ===> o', this.currentPageItem);
        }
      }, {
        key: "addToCart",
        value: function addToCart(data) {
          UIkit.notification.closeAll();
          UIkit.notification(data.title + " berhasil masuk keranjang", {
            status: 'warning',
            timeout: 600
          });
          console.log('addToCart | data ===>', data);
          data.qty = 1;
          this.dataCart.push(data);
          this.bookSvc.sendDataCart(this.dataCart);
          this.checkDisableButton(data);
          console.log('dataCart ===>', this.dataCart);
        }
      }, {
        key: "checkDisableButton",
        value: function checkDisableButton(data) {
          for (var j in this.masterBook) {
            if (data.id == this.masterBook[j].id) {
              this.masterBook[j].isDisable = true;
              this.masterBook[j].stock -= 1;
            }
          }

          this.bookSvc.updateMasterBook(this.masterBook);
        }
      }, {
        key: "Search",
        value: function Search() {
          var _this = this;

          if (this.filterText != "") {
            this.currentPageItem = this.masterBook.filter(function (res) {
              return res.title.toLocaleLowerCase().match(_this.filterText.toLocaleLowerCase());
            });
          } else if (this.filterText == "") {
            this.ngOnInit();
          }
        }
      }, {
        key: "modalDetailItem",
        value: function modalDetailItem(data, index) {
          console.log('modalDetailItem | index ===>', index);
          console.log('modalDetailItem | data  ===>', data);
          this.detailBook = this.currentPageItem[index]; // UIkit.modal('#detailView').show();

          this.router.navigate(['/detail'], {
            skipLocationChange: true,
            queryParams: {
              detail: JSON.stringify(data)
            }
          });
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.currentPage == 1) this.currentPage = 1;else this.currentPage -= 1;
          console.log('prev page | currentPage ===>', this.currentPage);
          this.pagination(this.currentPage);

          if (this.currentPage == 1) {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#pagination #prevBtn').removeClass('customColor');
            jquery__WEBPACK_IMPORTED_MODULE_3__('#pagination #nextBtn').addClass('customColor');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#pagination #prevBtn').addClass('customColor');
            jquery__WEBPACK_IMPORTED_MODULE_3__('#pagination #nextBtn').addClass('customColor');
          }
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          if (this.currentPage == this.arrPagination.length) this.currentPage = this.arrPagination.length;else this.currentPage += 1;
          console.log('next page | currentPage ===>', this.currentPage);
          this.pagination(this.currentPage);

          if (this.currentPage == this.arrPagination.length) {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#pagination #nextBtn').removeClass('customColor');
            jquery__WEBPACK_IMPORTED_MODULE_3__('#pagination #prevBtn').addClass('customColor');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#pagination #nextBtn').addClass('customColor');
            jquery__WEBPACK_IMPORTED_MODULE_3__('#pagination #prevBtn').addClass('customColor');
          }
        }
      }]);

      return CatalogComponent;
    }();

    CatalogComponent.ctorParameters = function () {
      return [{
        type: _service_bookstore_service__WEBPACK_IMPORTED_MODULE_2__["BookstoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-catalog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./catalog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/catalog/catalog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./catalog.component.css */
      "./src/app/component/catalog/catalog.component.css"))["default"]]
    })], CatalogComponent);
    /***/
  },

  /***/
  "./src/app/component/detailbook/detailbook.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/component/detailbook/detailbook.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentDetailbookDetailbookComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media only screen and (max-device-width: 480px) {\n    .barJudul,\n    .bodyDetail{\n        zoom: 0.5 !important ;\n    }\n\n    .uk-comment-list{\n        zoom: 0.6 !important ;\n    }\n    \n    \n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2RldGFpbGJvb2svZGV0YWlsYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7O1FBRUkscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOzs7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kZXRhaWxib29rL2RldGFpbGJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmJhckp1ZHVsLFxuICAgIC5ib2R5RGV0YWlse1xuICAgICAgICB6b29tOiAwLjUgIWltcG9ydGFudCA7XG4gICAgfVxuXG4gICAgLnVrLWNvbW1lbnQtbGlzdHtcbiAgICAgICAgem9vbTogMC42ICFpbXBvcnRhbnQgO1xuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/detailbook/detailbook.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/component/detailbook/detailbook.component.ts ***!
    \**************************************************************/

  /*! exports provided: DetailbookComponent */

  /***/
  function srcAppComponentDetailbookDetailbookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailbookComponent", function () {
      return DetailbookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_bookstore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/bookstore.service */
    "./src/app/service/bookstore.service.ts");

    var DetailbookComponent = /*#__PURE__*/function () {
      function DetailbookComponent(activateRoute, bookSvc) {
        _classCallCheck(this, DetailbookComponent);

        this.activateRoute = activateRoute;
        this.bookSvc = bookSvc;
        this.detailBuku = {};
        this.dataCart = [];
      }

      _createClass(DetailbookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.activateRoute.queryParams.subscribe(function (params) {
            _this2.detailBuku = JSON.parse(params['detail']);
            console.log('detailBuku ====>', _this2.detailBuku);
          });
          this.dataCart = this.bookSvc.getDataCart();

          if (this.dataCart.length == 0) {
            this.masterBook = this.bookSvc.generateListBook();
          } else {
            this.masterBook = this.bookSvc.getDataMasterBook();
          }
        }
      }, {
        key: "addToCart",
        value: function addToCart(data) {
          UIkit.notification.closeAll();
          UIkit.notification(data.title + " berhasil masuk keranjang", {
            status: 'warning',
            timeout: 600
          });
          console.log('addToCart | data ===>', data);
          data.qty = 1;
          data.isDisable = true;
          data.stock -= 1;
          this.dataCart.push(data);
          this.bookSvc.sendDataCart(this.dataCart);
          this.checkDisableButton(data);
          console.log('dataCart ===>', this.dataCart);
        }
      }, {
        key: "checkDisableButton",
        value: function checkDisableButton(data) {
          for (var j in this.masterBook) {
            if (data.id == this.masterBook[j].id) {
              this.masterBook[j].isDisable = true;
              this.masterBook[j].stock -= 1;
            }
          }

          this.bookSvc.updateMasterBook(this.masterBook);
        }
      }]);

      return DetailbookComponent;
    }();

    DetailbookComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service_bookstore_service__WEBPACK_IMPORTED_MODULE_3__["BookstoreService"]
      }];
    };

    DetailbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detailbook',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detailbook.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/detailbook/detailbook.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detailbook.component.css */
      "./src/app/component/detailbook/detailbook.component.css"))["default"]]
    })], DetailbookComponent);
    /***/
  },

  /***/
  "./src/app/component/header/header.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/component/header/header.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500&family=Unna:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');\r\n.josefinFont{\r\n    font-family: 'Josefin Slab', serif;\r\n}\r\n.unnaFont{\r\n    font-family: 'Unna', serif;\r\n}\r\n.cinzelFont{\r\n    font-family: 'Cinzel', serif;\r\n    text-transform: uppercase;\r\n}\r\n.ralewayFont{\r\n    font-family: 'Raleway', sans-serif;\r\n\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBaUY7QUFDakYseUdBQXlHO0FBQ3pHLDRFQUE0RTtBQUU1RTtJQUNJLGtDQUFrQztBQUN0QztBQUdBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxrQ0FBa0M7O0FBRXRDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2xhYiZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2luemVsOndnaHRANTAwJmZhbWlseT1Vbm5hOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmpvc2VmaW5Gb250e1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWInLCBzZXJpZjtcclxufVxyXG5cclxuXHJcbi51bm5hRm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVW5uYScsIHNlcmlmO1xyXG59XHJcblxyXG4uY2luemVsRm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucmFsZXdheUZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/header/header.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/header/header.component.ts ***!
    \******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_bookstore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/bookstore.service */
    "./src/app/service/bookstore.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(bookSvc) {
        _classCallCheck(this, HeaderComponent);

        this.bookSvc = bookSvc;
        this.dataCart = [];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          console.log('dataCart | shoplist===>', this.dataCart);
          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000);
          this.subscription = source.subscribe(function (val) {
            return _this3.dataCart = _this3.bookSvc.getDataCart();
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _service_bookstore_service__WEBPACK_IMPORTED_MODULE_2__["BookstoreService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/component/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/component/home/home.component.css":
  /*!***************************************************!*\
    !*** ./src/app/component/home/home.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap');\r\n  \r\n.oleoFont{\r\n  font-family: 'Oleo Script', cursive;\r\n\r\n}\r\n  \r\n.storeNameHeading span{\r\n  font-weight: bold;\r\n  font-size: 31px;\r\n  color: #ff701c;\r\n}\r\n  \r\n@media only screen and (max-device-width: 480px) {\r\n  #welcomeBoard{\r\n    zoom: 0.6;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjs7QUFFaEY7RUFDRSxtQ0FBbUM7O0FBRXJDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9sZW8rU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xyXG4gIFxyXG4ub2xlb0ZvbnR7XHJcbiAgZm9udC1mYW1pbHk6ICdPbGVvIFNjcmlwdCcsIGN1cnNpdmU7XHJcblxyXG59XHJcblxyXG4uc3RvcmVOYW1lSGVhZGluZyBzcGFue1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzFweDtcclxuICBjb2xvcjogI2ZmNzAxYztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcclxuICAjd2VsY29tZUJvYXJke1xyXG4gICAgem9vbTogMC42O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_bookstore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/bookstore.service */
    "./src/app/service/bookstore.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(bookSvc) {
        _classCallCheck(this, HomeComponent);

        this.bookSvc = bookSvc;
        this.title = "home";
        this.masterBook = [];
        this.sliderImg = [{
          image: "https://getuikit.com/docs/images/photo.jpg",
          name: "gambar 1",
          idx: 1
        }, {
          image: "https://getuikit.com/docs/images/dark.jpg",
          name: "gambar 2",
          idx: 2
        }, {
          image: "https://getuikit.com/docs/images/light.jpg",
          name: "gambar 3",
          idx: 3
        }, {
          image: "https://getuikit.com/docs/images/photo2.jpg",
          name: "gambar 4",
          idx: 4
        }, {
          image: "https://getuikit.com/docs/images/photo3.jpg",
          name: "gambar 5",
          idx: 5
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.masterBook = this.bookSvc.getDataSearch();
          this.selectActiveMenu(this.title);
        }
      }, {
        key: "selectActiveMenu",
        value: function selectActiveMenu(opened) {
          this.removeActiveMenu();

          if (opened == 'catalog') {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleCatalog').addClass('customColorNav');
          } else if (opened == 'home') {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleHome').addClass('customColorNav');
          } else if (opened == 'shoplist') {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleShoplist').addClass('customColorNav');
          }
        }
      }, {
        key: "removeActiveMenu",
        value: function removeActiveMenu() {
          jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleHome').removeClass('customColorNav');
          jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleCatalog').removeClass('customColorNav');
          jquery__WEBPACK_IMPORTED_MODULE_3__('#listMenu #titleShoplist').removeClass('customColorNav');
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _service_bookstore_service__WEBPACK_IMPORTED_MODULE_2__["BookstoreService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/component/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/component/shoplist/shoplist.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/component/shoplist/shoplist.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentShoplistShoplistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".quantity {\n    padding-top: 20px;\n    margin-right: 60px;\n    width: 10%;\n}\n.quantity input {\n    -webkit-appearance: none;\n    border: none;\n    text-align: center;\n    width: 32px;\n    font-size: 16px;\n    color: #43484D;\n    font-weight: 300;\n}\n.quantity{\n    width: 100%;\n    text-align: center;\n    margin: 6px 0;\n}\n.minus-btn {\n    margin-bottom: 3px;\n    width: 30px;\n    height: 30px;\n    background-color: #E1E8EE;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n  }\n.plus-btn {\n    margin-top: 3px;\n    width: 30px;\n    height: 30px;\n    background-color: #E1E8EE;\n    border-radius: 6px;\n    border: none;\n    cursor: pointer;\n}\n.showMobile{\n    display: none;\n}\n@media only screen and (max-device-width: 480px) {\n   \n\n    .showMobile{\n        display: block;\n    }\n\n    table{\n        zoom: 0.6;\n    }\n\n    .image{\n        display: none;\n    }\n\n\n    .minus-btn,\n    .plus-btn{\n        zoom: 0.6;\n    }\n\n\n\n    .description{\n        width: 45%;\n    }\n\n    .icon{\n        width: 20% !important;\n    }\n    \n}\n.icon{\n    padding-top: 25px;\n    width: 10%;\n}\n.image {\n    margin-top: 30px;\n    width: 10%;\n    text-align: left;\n    margin: 6px 0;\n}\n.total-price {\n    padding-top: 25px;\n    text-align: center;\n    font-size: 16px;\n    color: #43484D;\n    font-weight: 300;\n}\n.description {\n    width: 50%;\n    padding-top: 10px;\n    margin-right: 60px;\n}\n.description span {\n    font-size: 14px;\n    color: #43484D;\n    font-weight: 400;\n}\n.description span:first-child {\n    margin-bottom: 5px;\n  }\n.description span:last-child {\n    font-weight: 300;\n    margin-top: 8px;\n    color: #86939E;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Nob3BsaXN0L3Nob3BsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBR0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFDRjtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFHQTtJQUNJLGFBQWE7QUFDakI7QUFDQTs7O0lBR0k7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7O0lBR0E7O1FBRUksU0FBUztJQUNiOzs7O0lBSUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7O0FBRUo7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFJQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFHQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc2hvcGxpc3Qvc2hvcGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWFudGl0eSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMCU7XG59XG4ucXVhbnRpdHkgaW5wdXQge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzQzNDg0RDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5cbi5xdWFudGl0eXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA2cHggMDtcbn1cblxuLm1pbnVzLWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFOEVFO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4ucGx1cy1idG4ge1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRThFRTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uc2hvd01vYmlsZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgIFxuXG4gICAgLnNob3dNb2JpbGV7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIHRhYmxle1xuICAgICAgICB6b29tOiAwLjY7XG4gICAgfVxuXG4gICAgLmltYWdle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuXG4gICAgLm1pbnVzLWJ0bixcbiAgICAucGx1cy1idG57XG4gICAgICAgIHpvb206IDAuNjtcbiAgICB9XG5cblxuXG4gICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgIH1cblxuICAgIC5pY29ue1xuICAgICAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxufVxuXG5cbi5pY29ue1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHdpZHRoOiAxMCU7XG59XG5cblxuXG4uaW1hZ2Uge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogNnB4IDA7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzQzNDg0RDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiBzcGFuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0MzQ4NEQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuIFxuLmRlc2NyaXB0aW9uIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuZGVzY3JpcHRpb24gc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBjb2xvcjogIzg2OTM5RTtcbiAgfVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/shoplist/shoplist.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/component/shoplist/shoplist.component.ts ***!
    \**********************************************************/

  /*! exports provided: ShoplistComponent */

  /***/
  function srcAppComponentShoplistShoplistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoplistComponent", function () {
      return ShoplistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_bookstore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/bookstore.service */
    "./src/app/service/bookstore.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);

    var ShoplistComponent = /*#__PURE__*/function () {
      function ShoplistComponent(bookSvc, router) {
        _classCallCheck(this, ShoplistComponent);

        this.bookSvc = bookSvc;
        this.router = router;
        this.title = "shoplist";
        this.dataCart = [];
        this.totalBuku = 0;
        this.totalHarga = 0;
        this.qty = "";
      }

      _createClass(ShoplistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataCart = this.bookSvc.getDataCart();
          this.masterBook = this.bookSvc.getDataMasterBook();
          console.log('dataCart | shoplist===>', this.dataCart);
          this.calculate();
          this.selectActiveMenu(this.title);

          if (this.dataCart.length == 0) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Upps Keranjangmu Kosong", "Silahkan pilih buku dulu dimenu katalog ya kak", 'warning');
            this.router.navigate(['catalog'], {
              skipLocationChange: true
            });
          }
        }
      }, {
        key: "selectActiveMenu",
        value: function selectActiveMenu(opened) {
          this.removeActiveMenu();

          if (opened == 'catalog') {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#listMenu #titleCatalog').addClass('customColorNav');
          } else if (opened == 'home') {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#listMenu #titleHome').addClass('customColorNav');
          } else if (opened == 'shoplist') {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#listMenu #titleShoplist').addClass('customColorNav');
          }
        }
      }, {
        key: "removeActiveMenu",
        value: function removeActiveMenu() {
          jquery__WEBPACK_IMPORTED_MODULE_5__('#listMenu #titleHome').removeClass('customColorNav');
          jquery__WEBPACK_IMPORTED_MODULE_5__('#listMenu #titleCatalog').removeClass('customColorNav');
          jquery__WEBPACK_IMPORTED_MODULE_5__('#listMenu #titleShoplist').removeClass('customColorNav');
        }
      }, {
        key: "calculate",
        value: function calculate() {
          this.totalBuku = 0;
          this.totalHarga = 0;

          for (var i in this.dataCart) {
            if (this.dataCart[i].qty == 0) {
              this.hapusBuku(this.dataCart[i]);
            } else {
              this.totalBuku += this.dataCart[i].qty;
              this.totalHarga += this.dataCart[i].price * this.dataCart[i].qty;
            }
          }
        }
      }, {
        key: "hapusBuku",
        value: function hapusBuku(data) {
          var _this4 = this;

          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Hapus Buku?",
            text: "Apakah anda yakin ingin menghapus buku ini dari keranjang?",
            type: 'warning',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (willDelete) {
            if (willDelete.value) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Berhasil', 'buku berhasil dihapus', 'success');
              var tmpData = data;
              _this4.dataCart = lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](_this4.dataCart, function (n) {
                return n.id != tmpData.id;
              });

              for (var i in _this4.masterBook) {
                if (_this4.masterBook[i].id == tmpData.id) {
                  _this4.masterBook[i].stock = 10;
                  _this4.masterBook[i].isDisable = false;
                }
              }

              _this4.bookSvc.sendDataCart(_this4.dataCart);

              _this4.bookSvc.updateMasterBook(_this4.masterBook);

              _this4.calculate();
            } else {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire("buku tidak terhapus");
            }

            console.log(willDelete);
          });
        }
      }, {
        key: "editQty",
        value: function editQty(buku, method) {
          if (buku.qty == 0 && method == 'kurang') {
            this.hapusBuku(buku);
          } else {
            for (var i in this.dataCart) {
              if (this.dataCart[i].id == buku.id) {
                if (method == 'tambah') {
                  if (buku.qty == 10) {
                    UIkit.notification.closeAll();
                    UIkit.notification("hanya tersedia 10 buku untuk judul ini", {
                      status: 'danger',
                      timeout: 1000
                    });
                  } else this.dataCart[i].qty += 1;
                } else if (method == 'kurang') this.dataCart[i].qty -= 1;
              }
            }
          }

          for (var i in this.masterBook) {
            if (this.masterBook[i].id == buku.id) {
              if (method == 'tambah') {
                if (this.masterBook[i].stock > 0) this.masterBook[i].stock -= 1;
              } else if (method == 'kurang') {
                if (this.masterBook[i].stock < 10) this.masterBook[i].stock += 1;
              }
            }
          }

          console.log('this.dataCart[i].qty ====>', this.dataCart);
          this.bookSvc.sendDataCart(this.dataCart);
          this.bookSvc.updateMasterBook(this.masterBook);
          this.calculate();
        }
      }, {
        key: "lanjutkan",
        value: function lanjutkan() {
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Whoops Unexpected Feature",
            text: "Maaf ya kak fiturnya ga sampe sini, lanjut lain waktu yaa ",
            type: 'warning',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (willFinish) {
            if (willFinish.value) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Yeay', 'Aplikasinya selesai, see you next time', 'success');
            } else {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Yeay', 'Aplikasinya selesai, see you next time', 'success');
            }
          });
        }
      }]);

      return ShoplistComponent;
    }();

    ShoplistComponent.ctorParameters = function () {
      return [{
        type: _service_bookstore_service__WEBPACK_IMPORTED_MODULE_2__["BookstoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ShoplistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shoplist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shoplist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shoplist/shoplist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shoplist.component.css */
      "./src/app/component/shoplist/shoplist.component.css"))["default"]]
    })], ShoplistComponent);
    /***/
  },

  /***/
  "./src/app/service/bookstore.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/bookstore.service.ts ***!
    \**********************************************/

  /*! exports provided: BookstoreService */

  /***/
  function srcAppServiceBookstoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookstoreService", function () {
      return BookstoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookstoreService = /*#__PURE__*/function () {
      function BookstoreService() {
        _classCallCheck(this, BookstoreService);

        this.dataCart = [];
        this.dataSearch = [];
        this.masterBook = [];
        this.dataMaster = [];
      }

      _createClass(BookstoreService, [{
        key: "getDataCart",
        value: function getDataCart() {
          // console.log('Service | getDataCart ====>',this.dataCart)
          return this.dataCart;
        }
      }, {
        key: "sendDataCart",
        value: function sendDataCart(data) {
          // console.log('Service | sendDataCart ====>',data)
          this.dataCart = data;
          return this.dataCart;
        }
      }, {
        key: "sendDataSearch",
        value: function sendDataSearch(data) {
          this.dataSearch = data;
          return data;
        }
      }, {
        key: "getDataSearch",
        value: function getDataSearch() {
          return this.dataSearch;
        }
      }, {
        key: "getDataMasterBook",
        value: function getDataMasterBook() {
          return this.masterBook;
        }
      }, {
        key: "updateMasterBook",
        value: function updateMasterBook(data) {
          this.masterBook = data;
          return this.masterBook;
        }
      }, {
        key: "generateListBook",
        value: function generateListBook() {
          this.dataMaster = [{
            "id": 0,
            "title": "Orang Maiyah",
            "author": "Emha Ainun Nadjib",
            "description": "Tahun 2007 Penerbit Progres menerbitkan buku setebal 196 ini. Tahun 2015 Penerbit Bentang kemudian menerbitkan ulang. Sesuai judul, subjek utama pembahasan buku ini adalah Orang Maiyah. Cak Nun menulis, “Orang Maiyah adalah orang yang membaca dirinya berulang-ulang, ribuan kali. Di dalam Maiyah tak ada guru dan murid. Semua orang adalah murid, sang penghendak ilmu. Hidup orang Maiyah tidak tergantung kekayaan dan atau kemiskinan, tetapi tergantung pada proses pembelajaran menggunakan akal dan nuraninya untuk menyutradarai hidup menuju yang pantas dituju.”",
            "price": 14.748454,
            "star": 3,
            "stock": 10,
            "picture": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447027327l/27738068.jpg"
          }, {
            "id": 1,
            "title": "Indonesia Bagian Dari Desa Saya",
            "author": "Emha Ainun Nadjib",
            "description": "Ternyata sejak tahun 1970-an Emha Ainun Nadjib sudah memiliki pemikiran yang jauh ke depan mengenai bangsa kita. Emha sangat bersedih bahwa “zaman edan” tiga dekade lalu sudah membuat kepala pusing, tetapi sekarang ini ”zaman edan” malah membuat kepala kita pecah! Keprihatinan dan konsistensi pemikiran Emha terhadap masalah sosial budaya bangsa ini membuat kita lebih sensitif. Lebih peduli pada persoalan mendasar yang dihadapi masyarakat sehari-hari. Pemikiran reflektif Emha seolah mendialogkan kembali pemikiran masa lalu dengan realitas sekarang, bahkan di masa mendatang.",
            "price": 58.261178,
            "star": 3,
            "stock": 10,
            "picture": "https://mojokstore.com/wp-content/uploads/2020/12/Indonesia-Bagian-dari-Desa-Saya.jpg"
          }, {
            "id": 2,
            "title": "Jejak Tinju Pak Kyai",
            "author": "Emha Ainun Nadjib",
            "description": "Andaikanpun di seluruh Indonesia tak ada lagi koruptor di segala level dan lini, tak ada kejahatan, keserakahan, maksiat atau segala macam nilai kacau lainnya: tidak serta merta lantas bangsa kita akan menjadi selamat atau apalagi pasti mengalami kemajuan. Baik buruk jahat tak jahat bukan satu-satunya faktor penentu nasib manusia. Dimensi dasar nilai hidup manusia adalah baik dan buruk, benar dan salah, indah dan tidak indah. Sebenarnya belum cukup. Masih ada dimensi mendasar lainnya, belum variabel-variabel dan detailnya.",
            "price": 28.602393,
            "star": 3,
            "stock": 10,
            "picture": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470468442l/4652364._SY475_.jpg"
          }, {
            "id": 3,
            "title": "Arus Bawah",
            "author": "Emha Ainun Nadjib",
            "description": "Buku ini pertama kali terbit tahun 1994 dengan judul Gerakan Punawakan Atawa Arus Bawah. Penerbit Bentang Pustaka akhirnya menerbitkan ulang tahun 2015. Cak Nun memainkan tokoh punakawan di sini sebagai simbol rakyat yang kerap kali berbincang dan membahas persoalan sehari-hari. Sekalipun begitu, punakawan di tangan Cak Nun ini seperti memberikan nasihat atau komentar sosial-kemasyarakatan yang kala itu relevan diperbincangkan. Buku ini sesungguhnya lahir ketika konteks politik Orde Baru berada di ujung tanduk. Cak Nun menulis, “Setiap kekuasaan itu cenderung menumpas dirinya sendiri. Rakyat itu sendiri tak bergantung kepada kekuasaan. Hanya kekuasaan yang sangat bergantung kepada rakyat. Seperti kesementaraan bergantung kepada keabadian.”",
            "price": 17.549837,
            "star": 3,
            "stock": 10,
            "picture": "https://cf.shopee.co.id/file/8b20387749b1f06b4e81a57dbf4ec52e"
          }, {
            "id": 4,
            "title": "Markesot Bertutur Lagi",
            "author": "Emha Ainun Nadjib",
            "description": "Buku ini merupakan kelanjutan dari Markesot Bertutur. Pertama kali diterbitkan Ikapi, Jakarta, tahun 1994. Pada tahun itu Kompas menulis, “Buku ini (Markesot Bertutur Lagi) mampu mengharu-biru perasaan pembacanya dengan humor, keseriusan, sikap kritis, kepolosan, kesedihan, dan kekaguman.” Cak Nun masih konsisten mengambil karakter Markesot sebagai individu yang menjelaskan realitas sosial dalam konteks apa pun. Pada bagian kedua Markesot, pembaca akan disuguhkan hakikat kehidupan tapi, sebagaimana laiknya gaya kepenulisan Cak Nun, tak kering humor.",
            "price": 75.033285,
            "star": 3,
            "stock": 10,
            "picture": "https://www.bukukita.com/babacms/displaybuku/85778_f.jpg"
          }, {
            "id": 5,
            "title": "Spiritual Journey",
            "author": "Emha Ainun Nadjib",
            "description": "Manusia mencapai taraf kesempurnaan dan keparipurnaan manakala perkembangan intelektual dan spiritualnya telah mengantarkannya pada pencapaian harmoni pada kehidupan dan alam semesta. Pencapaian harmoni ini hanya bisa terealisasi jika melampaui taraf-taraf paradoks fenomena alam dan kehidupan. Boleh jadi, akan tiba suatu masa di mana proses evolusi fisik telah mencapai titik kulminasi. Saat evolusi spiritual melakukan seleksi alami bahwa yang mampu bertahan hidup hanyalah mereka yang matang secara intelektual dan spiritual.",
            "price": 80.35224,
            "star": 3,
            "stock": 10,
            "picture": "https://1.bp.blogspot.com/-I896zPtiM04/VUSEuOIOJlI/AAAAAAAAf2g/-NDtfqj5-2k/s1600/Spiritual%2BJourney.jpg"
          }, {
            "id": 6,
            "title": "Sedang Tuhanpun Cemburu",
            "author": "Emha Ainun Nadjib",
            "description": "Buku ini telah mengalami cetak ulang lebih dari lima kali. Kumpulan tulisan yang dibukukan tersebut pertama diterbitkan tahun 1994 oleh SiPress. Tahun 2018 dicetak ulang oleh Bentang Pustaka. Banyak tulisan di buku ini berangkat dari pertanyaan-pertanyaan kontekstual yang dihadapi Cak Nun pada usia 20 sampai 30-an, sebuah angka yang kita tahu menandakan masih sangat muda. Tuhan sebagai subjek utama banyak disasar Cak Nun sebagai tema integral, namun ia juga mengembalikan konteks pembahasan pada manusia yang makin “disingkirkan” secara struktural. Cak Nun banyak menggunakan pendekatan sosio-kultural sebagai metode penguraian tekstual dalam bukunya ini.",
            "price": 58.757277,
            "star": 3,
            "stock": 10,
            "picture": "https://mojokstore.com/wp-content/uploads/2019/01/Sedang-Tuhan-Pun-Cemburu.jpg"
          }, {
            "id": 7,
            "title": "Tuhan pun Berpuasa",
            "author": "Emha Ainun Nadjib",
            "description": "Buku ini diterbitkan pertama kali oleh Zaituna tahun 1997. Tahun 2016 dicetak ulang oleh Kompas. Cak Nun menulis, “Allah begitu sabar terhadap manusia, cinta dan romantisme-Nya tidak berdasarkan kekuasaan belaka. Allah pun mempunyai rasa ‘memiliki’ terhadap manusia. Dengan setia Allah tetap menerbitkan matahari tanpa peduli apakah manusia mensyukuri atau tidak. Allah tetap memancarkan cahaya matahari tanpa memperhitungkan berbagai pengkhianatan manusia terhadap-Nya. Allah ‘berpuasa’ menahan diri dari murka-Nya terhadap manusia. Puasa adalah ‘milik khusus’ di haribaan-Nya. Sampai-sampai Ia mengorbankan diri-Nya seakan-akan Ia butuh sesuatu dari ibadah manusia, padahal puasa merupakan proses dasar pembebasan dan penyelamatan manusia atas dirinya sendiri. Cak Nun dengan sangat jernih memandang semua ‘puasa’ dari berbagai sisi yang mampu menjernihkan batin dan mencerahkan pikiran kita”.",
            "price": 55.360955,
            "star": 3,
            "stock": 10,
            "picture": "https://3.bp.blogspot.com/-bl73tcQexWQ/V0znVjIqESI/AAAAAAAAAXA/VNPcM-eg1OkkT1TTU4HxUVyr5JaQ5X5wACKgB/s1600/16245623.jpg"
          }, {
            "id": 8,
            "title": "Gelandangan diKampung Sendiri",
            "author": "Emha Ainun Nadjib",
            "description": "Buku ini pertama kali diterbitkan Pustaka Pelajar tahun 1995. Karena begitu relevannya pembahasan Cak Nun, maka buku ini telah dicetak ulang. Terakhir Bentang Pustaka yang menerbitkannya. Kumpulan tulisan yang diantologikan tersebut banyak mengulas relasi antara rakyat dan pejabat yang acap kali salah sangka. Pandangan terhadap rakyat yang menjadi bawahan pejabat “digugat” Cak Nun. Ia menawarkan upaya dekonstruktif terhadap posisi hierarkis itu. Lebih lanjut, Cak Nun menulis, “Inilah tatanan dunia yang dibolak-balik. Bukankah hak atas segala aturan berada di tangan rakyat? Kalau rakyat tidak setuju, itu berarti bos tidak setuju. Hamba sahaya harus punya telinga selebar mungkin untuk mendengarkan apa kata juragannya. Maka menjadi aneh jika rakyat terus menerus diwajibkan berpartisipasi dalam pembangunan.”",
            "price": 39.239698,
            "star": 3,
            "stock": 10,
            "picture": "https://www.bukukita.com/babacms/displaybuku/83962_f.jpg"
          }, {
            "id": 9,
            "title": "Secangkir Kopi Jon Parkir",
            "author": "Emha Ainun Nadjib",
            "description": "Ini kopi bukan sembarang kopi. Ini kopi bikinan koki bernama Jon Pakir alias “Jon yang Faqir” — seorang pakar kondang asal Jombang yang piawai dalam meracik gagasan dan merakit kata-kata. Kali ini, si Jon ingin menghibur pembaca sekaligus menyajikan secangkir kopi yang mat-matan untuk dinikmati kapan dan di mana saja. Ada kopi “Modal untuk Pelit”, kopi “Amenangi Zaman Jahiliah”, kopi “Jurnalisme Absolut”, kopi “Syahadat Kiai Jangkung”, kopi “Sosiologi Munyuk”, kopi “Fastabiqul Fulus”, dan kopi-kopi lain yang ditanggung lebih sip ketimbang kopi nasgithel (panas, legi, lan kenthel).",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://www.mizan.com/wp-content/uploads/2019/08/secangkir-kopi-jon-pakir-republish-3.jpg"
          }, {
            "id": 10,
            "title": "Bola Bola Kultural",
            "author": "Emha Ainun Nadjib",
            "description": "Tak jamak orang tahu sekitar tahun 90 awal Cak Nun menulis kolom olahraga. Buah penanya melampaui segi teknis sebagaimana ditulis kebanyakan kolumis saat itu karena di satu sisi pesan-pesan filosofis dan kultural terejawantah jelas. Ini yang membedakan genre tulisan konvensional lain. Pendekatan ini menjadi menarik bagi pembaca, terutama penggandrung cabang olahraga sepak bola, tinju, dan silat karena sudut pandang yang diteroka relatif unik.",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://cdn.caknun.com/media/2018/04/20180405-asepi-bola-kultural-1.jpg"
          }, {
            "id": 11,
            "title": "Demokrasi Tolol Versi Saridin",
            "author": "Emha Ainun Nadjib",
            "description": "Saridin bukan tidak sadar dan bukan tanpa perhitungan kenapa dia memilih nyantri ke pondoknya Sunan Kudus. Saridin itu tipe seorang murid yang cerdas dan mengerti apa yang dilakukannya. Harap dimengerti murid itu bukan padanan kata dari siswa atau student, sebagaimana manusia zaman modern memaknainya secara tolol. Memang manusia dalam kebudayaan dan peradaban modern kerjanya selalu melawak. Mereka lucu, dan bahkan sangat lucu karena mereka sendiri tidak sadar bahwa mereka lucu. Coba lihat saja. Di dunia modern ada yang namanya universitas . Wah gagahnya bukan main lembaga pendidikan tertinggi ini. Penuh gengsi dan keangkuhan. Kalau sudah lulus darinya, orang di sebut “sarjana”. Padahal sesungguhnya Saridin membuktikan sendiri bahwa para pelaku lembaga pendidikan dunia modern ini ndagel atawa melawak. Mereka pura-pura bikin universitas adalah manusia universal. Padahal nanti para sarjana keluaran universitas itu kualitas dan cakrawala pandangnya tak lebih dari manusia fakultif.        ",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1296563033l/2578284.jpg"
          }, {
            "id": 12,
            "title": "Indonesia Apa Adanya",
            "author": "Emha Ainun Nadjib",
            "description": "Buku penuh ilustrasi visual berwarna ini berisi 120 kutipan Cak Nun. Sidang pembaca akan menikmati penggalan kalimat singkat, padat, dan penuh kearifan yang di satu sisi dapat menjadi “pengingat” sekaligus “refleksi” tentang hidup dan kehidupan. Cak Nun menulis, “Sekarang ini di Indonesia Siapa saja bisa menjabat apa saja, bisa dijadikan bukan apa-apa Bukan apa-apa bisa dijadikan apa-apa Perkara tidak diperkarakan Bukan perkara diperkarakan Salah dibenarkan, benar disalahkan Sangat sukar membayangkan bahwa kita akan selamat dari kehancuran.”        ",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://cf.shopee.co.id/file/7a447135452ab72753420f60f27728f5"
          }, {
            "id": 13,
            "title": "Cahaya Maha Cahaya: Kumpulan Sajak",
            "author": "Emha Ainun Nadjib",
            "description": "Melalui sajak-sajaknya Cak Nun mengungkapkan konflik batin seorang Muslim — sebagai manusia bisa, bukan tokoh di mimbar. Ia, tentu saja, mengangkat tema-tema keagamaan, keresahan manusia yang tak habis-habisnya mempertanyakan dan mencoba menegaskan kedudukan dan perannya di dunia dalam kaitannya dengan kepastian kuasa Tuhan yang tidak perlu dipertanyakan dan ditegas-tegaskan lagi.",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470460419l/6271877._SX318_.jpg"
          }, {
            "id": 14,
            "title": "Seribu Masjid Satu Jumlahnya: Tahajjud Cinta Seorang Hamba",
            "author": "Emha Ainun Nadjib",
            "description": "Dalam buku gabungan antara kumpulan prosa dan puisi (proisi) ini, pembaca akan mendapati ungkapan cinta seorang manusia kepada sesamanya dan Penciptanya. Meskipun tetap dengan nada yang kadang menusuk tajam — karena sarat kritik atas kehidupan sosial kita yang pincang — kelima puluh proisi yang tampil di sini mencuatkan kepekaan dan kedalaman pemikiran seorang seniman dalam menangkap ayat-ayat Tuhan.",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://inc.mizanstore.com/aassets/img/com_cart/produk/covUA-214.jpg"
          }, {
            "id": 15,
            "title": "Slilit Sang Kiai",
            "author": "Emha Ainun Nadjib",
            "description": "Ide-ide dan sepak terjangnya sering bernada kritis dan mengejutkan. Minatnya luas, mencakup berbagai masalah hangat di bidang sosial, budaya, dan politik. Buku ini jelas memperlihatkan sosok penulisnya, Emha Ainun Nadjib, sebagai cendekiawan yang kritis sekaligus penyair yang kerap lebih suka menafikan aturan-aturan konvensional. Di dalamnya, Emha menuangkan segenap gagasan dan uneg-uneg-nya tentang “persoalan-persoalan darurat bagi bangsa yang berduka”.",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://mojokstore.com/wp-content/uploads/2018/04/Slilit-Sang-Kiai.jpg"
          }, {
            "id": 16,
            "title": "Doa Mohon Kutukan",
            "author": "Emha Ainun Nadjib",
            "description": "Buku ini terdiri atas tiga bagian, yaitu Doa Mohon Kutukan (20 puisi), Nasionalisme Burung-burung (13 puisi) dan Perjalanan Dusta (1 puisi). Cak Nun menulis, “Bukan hanya engkau: aku pun bertanya kepada diriku sendiri: Kenapa kau minta dikutuk oleh Tuhanmu? Bukankah Ia dalah sesembahan yang justru bersifat Maha Pemurah dan Pengampun? Betapa sombong engkau! Allah senantiasa menghamparkan rahmat dan rezekinya kepada siapa dan apa saja, bahkan pun kepada seekor cecak atau seorang maling: sedemikian angkuhkah hatimu sehingga justru mohon kutukan dari-Nya?”",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://3.bp.blogspot.com/-v1IHsGAd2k8/VOtcav-MioI/AAAAAAAADe8/k5fyPH4zzRo/s1600/doa%2Bmohon%2Bkutukan.jpg"
          }, {
            "id": 17,
            "title": "Kiai Sudrun Gugat",
            "author": "Emha Ainun Nadjib",
            "description": "Dalam kumpulan artikelnya ini, Cak Nun — dengan gaya dan watak kritisnya yang menggemaskan itu — berbicara tentang banyak hal. Ia bukan hanya fasih mengangkat soal keagamaan, seperti ihwal tauhid serta pengalaman nilai akidah dan syariah, tetapi juga menguasai pelbagai masalah kemasyarakatan. Tengok saja, misalnya, cara ia menanggapi dialog anggota Petisi 50 dengan Sudomo, kasuh Nipah dan Kedungombo, serta lain sebagainya.",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Q1zvd9wnsYB2o5LfVCvPCfgytzV3_RZ-7A&usqp=CAU"
          }, {
            "id": 18,
            "title": "Yang Terhormat Nama Saya",
            "author": "Emha Ainun Nadjib",
            "description": "Semua cerpen yang ditulis Cak Nun di sini mengisahkan kegelisahan batin manusia yang tak terlepas dari kondisi sosial-ekonomi tahun 1977-1981. Cak Nun tak mendramatisasi tokoh dan penokohan yang dibangunnya. Ia menawarkan kisah sebagaimana adanya, tanpa tedeng aling-aling, bahkan pretensi mencapai tingkat sastrawi. Sidang pembaca akan disodorkan bagaimana individu menghadapi problem hidupnya dengan pasrah-sumarah, namun tetap memiliki daya juang yang arif dan bijaksana. Dalam penggalan cerpen berjudul Pesta, Cak Nun menulis, “Aku berusaha dengan sebijaksana mungkin melepaskan segala wujud hubungan dengan orang lain yang kira-kira bisa merupakan kesetiaanku padamu.”",
            "price": 98000,
            "star": 3,
            "stock": 10,
            "picture": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1228270027l/5970406.jpg"
          }];
          return this.dataMaster;
        }
      }]);

      return BookstoreService;
    }();

    BookstoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BookstoreService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /workspaces/sofco_onlineTest/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map