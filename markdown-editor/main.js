(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/src/$$_lazy_route_resource lazy recursive":
/*!***************************************************************!*\
  !*** ./demo/src/$$_lazy_route_resource lazy namespace object ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/src/app/app-routing.module.ts":
/*!********************************************!*\
  !*** ./demo/src/app/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./demo/src/app/app.component.scss":
/*!*****************************************!*\
  !*** ./demo/src/app/app.component.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./demo/src/app/app.component.ts":
/*!***************************************!*\
  !*** ./demo/src/app/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.options = {
            showPreviewPanel: false,
            enablePreviewContentClick: false,
            resizable: true,
            customRender: {
                image: function (href, title, text) {
                    var out = "<img style=\"max-width: 100%; border: 20px solid red;\" src=\"" + href + "\" alt=\"" + text + "\"";
                    if (title) {
                        out += " title=\"" + title + "\"";
                    }
                    out += this.options.xhtml ? "/>" : ">";
                    return out;
                }
            }
        };
        this.mode = 'editor';
    }
    AppComponent.prototype.ngOnInit = function () {
        var contentArr = ['# Hello, Markdown Editor!'];
        contentArr.push('```javascript ');
        contentArr.push('function Test() {');
        contentArr.push('	console.log("Test");');
        contentArr.push('}');
        contentArr.push('```');
        contentArr.push(' Name | Type');
        contentArr.push(' ---- | ----');
        contentArr.push(' A | Test');
        contentArr.push('![](http://lon-yang.github.io/markdown-editor/favicon.ico)');
        contentArr.push('');
        contentArr.push('- [ ] Taks A');
        contentArr.push('- [x] Taks B');
        contentArr.push('- test');
        contentArr.push('');
        contentArr.push('[Link](https://www.google.com)');
        contentArr.push('');
        this.content = contentArr.join('\r\n');
    };
    AppComponent.prototype.togglePreviewPanel = function () {
        this.options.showPreviewPanel = !this.options.showPreviewPanel;
        this.options = Object.assign({}, this.options);
    };
    AppComponent.prototype.changeMode = function () {
        if (this.mode === 'editor') {
            this.mode = 'preview';
        }
        else {
            this.mode = 'editor';
        }
    };
    AppComponent.prototype.togglePreviewClick = function () {
        this.options.enablePreviewContentClick = !this.options.enablePreviewContentClick;
        this.options = Object.assign({}, this.options);
    };
    AppComponent.prototype.toggleResizeAble = function () {
        this.options.resizable = !this.options.resizable;
        this.options = Object.assign({}, this.options);
    };
    AppComponent.prototype.doUpload = function (files) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var result = [];
                for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                    var file = files_1[_i];
                    result.push({
                        name: file.name,
                        url: "https://avatars3.githubusercontent.com/" + file.name,
                        isImg: file.type.indexOf('image') !== -1
                    });
                }
                resolve(result);
            }, 3000);
        });
    };
    AppComponent.prototype.onEditorLoaded = function (editor) {
        console.log("ACE Editor Ins: ", editor);
        // editor.setOption('showLineNumbers', false);
        // setTimeout(() => {
        //   editor.setOption('showLineNumbers', true);
        // }, 2000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./demo/src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./demo/src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/src/app/app.module.ts":
/*!************************************!*\
  !*** ./demo/src/app/app.module.ts ***!
  \************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./demo/src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./demo/src/app/app.component.ts");
/* harmony import */ var _src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../src/public_api */ "./src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _src_public_api__WEBPACK_IMPORTED_MODULE_5__["LMarkdownEditorModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/src/environments/environment.ts":
/*!**********************************************!*\
  !*** ./demo/src/environments/environment.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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


/***/ }),

/***/ "./demo/src/main.ts":
/*!**************************!*\
  !*** ./demo/src/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./demo/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./demo/src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./demo/src/app/app.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/app.component.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin: 20px\">\r\n  <form novalidate #form=\"ngForm\">\r\n    <md-editor #md=\"ngModel\" name=\"Content\" (onEditorLoaded)=\"onEditorLoaded($event)\" [upload]=\"doUpload\" [(ngModel)]=\"content\" [mode]=\"mode\" [options]=\"options\" required maxlength=\"600\" height=\"400px\"></md-editor>\r\n  </form>\r\n  <div class=\"well well-sm\">\r\n    <button class=\"btn btn-default btn-primary\" (click)=\"togglePreviewPanel()\">\r\n      {{ options?.showPreviewPanel ? 'Hide' : 'Show' }} Preview Panel\r\n    </button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"btn btn-default btn-primary\" (click)=\"changeMode()\">Change Mode (Current: {{ mode }})</button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"btn btn-default btn-primary\" (click)=\"togglePreviewClick()\">\r\n      {{ options?.enablePreviewContentClick ? 'Disable' : 'Enable' }} PreviewContentClick\r\n    </button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"btn btn-default btn-primary\" (click)=\"toggleResizeAble()\">\r\n      {{ options?.resizable ? 'Disable' : 'Enable' }} Resizeable\r\n    </button>\r\n  </div>\r\n  <br>\r\n  <div class=\"well well-sm\">\r\n    <label class=\"control-label\">NgModel:</label>\r\n    <textarea class=\"form-control\" rows=\"10\" readonly [value]=\"content\"></textarea>\r\n  </div>\r\n  <div class=\"well well-sm\">\r\n    <label class=\"control-label\">Form validate:</label>\r\n    <p>Required: {{ md?.errors?.required }}</p>\r\n    <p>Maxlength: {{ md?.errors?.maxlength | json }}</p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/lib/md-editor.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/lib/md-editor.html ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"md-editor-container\" [class.font-awesome5]=\"options?.usingFontAwesome5\" [class.fullscreen]=\"isFullScreen\" [class.md-editor-resizable]=\"options?.resizable\"\r\n  [style.height]=\"height\">\r\n  <div class=\"md-layout\">\r\n    <div class=\"tool-bar\" *ngIf=\"!hideToolbar && mode != 'preview'\">\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Bold\" (click)=\"insertContent('Bold')\"\r\n          *ngIf=\"!hideIcons.Bold\">\r\n          <i class=\"fa fa-bold\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Italic\" (click)=\"insertContent('Italic')\"\r\n          *ngIf=\"!hideIcons.Italic\">\r\n          <i class=\"fa fa-italic\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Heading\" (click)=\"insertContent('Heading')\"\r\n          *ngIf=\"!hideIcons.Heading\">\r\n          <i class=\"fa fa-header\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Refrence\" (click)=\"insertContent('Refrence')\"\r\n          *ngIf=\"!hideIcons.Refrence\">\r\n          <i class=\"fa fa-quote-left\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Link\" (click)=\"insertContent('Link')\"\r\n          *ngIf=\"!hideIcons.Link\">\r\n          <i class=\"fa fa-link\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Image\" (click)=\"insertContent('Image')\"\r\n          *ngIf=\"!hideIcons.Image\">\r\n          <i class=\"fa fa-image\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Unordered List\" (click)=\"insertContent('Ul')\"\r\n          *ngIf=\"!hideIcons.Ul\">\r\n          <i class=\"fa fa-list-ul\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Ordered List\" (click)=\"insertContent('Ol')\"\r\n          *ngIf=\"!hideIcons.Ol\">\r\n          <i class=\"fa fa-list-ol\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Code Block\" (click)=\"insertContent('Code')\"\r\n          *ngIf=\"!hideIcons.Code\">\r\n          <i class=\"fa fa-file-code-o\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\"\r\n          [attr.title]=\"showPreviewPanel ? 'Hide Preview' : 'Show Preview'\" (click)=\"togglePreview()\"\r\n          *ngIf=\"!hideIcons.TogglePreview\">\r\n          <i class=\"fa\" [class.fa-eye]=\"!showPreviewPanel\" [class.fa-eye-slash]=\"showPreviewPanel\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group pull-right hide-split\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [class.active]=\"isFullScreen\" (click)=\"fullScreen()\"\r\n          *ngIf=\"!hideIcons.FullScreen\">\r\n          <i class=\"fa\" [class.fa-arrows-alt]=\"!options?.usingFontAwesome5 || !isFullScreen\" [class.fa-compress]=\"options?.usingFontAwesome5 && isFullScreen\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"editor-container\">\r\n      <div [class.dragover]=\"dragover\" [style.display]=\"mode == 'preview' ? 'none' : null\"\r\n        (dragover)=\"onDragover($event)\">\r\n        <div class=\"drag-container\">\r\n          <div class=\"upload-loading\">\r\n            <i class=\"fa fa-upload\" *ngIf=\"!isUploading\"></i>\r\n            <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"isUploading\"></i>\r\n            <div class=\"text\">{{ isUploading ? 'Uploading' : 'Drag it here' }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"drag-container drag-container-mask\" (drop)=\"onDrop($event)\" (dragleave)=\"onDragleave($event)\"></div>\r\n        <div class=\"editor-panel\">\r\n          <div class=\"ace-editor\" #aceEditor></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"preview-container\"[style.display]=\"showPreviewPanel ? 'block' : 'none'\" (click)=\"previewPanelClick($event)\">\r\n        <div class=\"preview-panel\" [innerHtml]=\"previewHtml\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"md-footer\" *ngIf=\"maxlength > 0 && mode != 'preview'\">\r\n      <div class=\"text-right length-view\">\r\n        {{ markdownValue?.length }} / {{ maxlength }}\r\n      </div>\r\n      <div class=\"resize-btn\"></div>\r\n    </div>\r\n  </div>\r\n  <md-editor-resize-sensor *ngIf=\"options?.resizable\" (resize)=\"mdEditorResize($event)\"></md-editor-resize-sensor>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/lib/resize-sensor/resize-sensor.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/lib/resize-sensor/resize-sensor.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"md-editor-resize-sensor\" #resizeSensor></div>\r\n");

/***/ }),

/***/ "./src/lib/md-editor.component.ts":
/*!****************************************!*\
  !*** ./src/lib/md-editor.component.ts ***!
  \****************************************/
/*! exports provided: MarkdownEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditorComponent", function() { return MarkdownEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var MarkdownEditorComponent = /** @class */ (function () {
    function MarkdownEditorComponent(required, maxlength, _renderer2, _domSanitizer) {
        if (required === void 0) { required = false; }
        if (maxlength === void 0) { maxlength = -1; }
        this.required = required;
        this.maxlength = maxlength;
        this._renderer2 = _renderer2;
        this._domSanitizer = _domSanitizer;
        this.hideToolbar = false;
        this.height = "300px";
        this._options = {};
        this.onEditorLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideIcons = {};
        this.showPreviewPanel = true;
        this.isFullScreen = false;
        this.dragover = false;
        this.isUploading = false;
        this._defaultOption = {
            showPreviewPanel: true,
            showBorder: true,
            hideIcons: [],
            usingFontAwesome5: false,
            scrollPastEnd: 0,
            enablePreviewContentClick: false,
            resizable: false
        };
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    MarkdownEditorComponent_1 = MarkdownEditorComponent;
    Object.defineProperty(MarkdownEditorComponent.prototype, "mode", {
        get: function () {
            return this._mode || 'editor';
        },
        set: function (value) {
            if (!value || (value.toLowerCase() !== 'editor' && value.toLowerCase() !== 'preview')) {
                value = 'editor';
            }
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "options", {
        get: function () {
            return this._options || {};
        },
        set: function (value) {
            var _this = this;
            this._options = Object.assign(this._defaultOption, {}, value);
            this.hideIcons = {};
            if (this._options.showPreviewPanel === true || this._options.showPreviewPanel === false) {
                this.showPreviewPanel = this._options.showPreviewPanel;
            }
            if (this._options.hideIcons) {
                this._options.hideIcons.forEach(function (v) { return _this.hideIcons[v] = true; });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "markdownValue", {
        get: function () {
            return this._markdownValue || '';
        },
        set: function (value) {
            var _this = this;
            this._markdownValue = value;
            this._onChange(value);
            if (this.preRender && this.preRender instanceof Function) {
                value = this.preRender(value);
            }
            if (value !== null && value !== undefined) {
                if (this._renderMarkTimeout)
                    clearTimeout(this._renderMarkTimeout);
                this._renderMarkTimeout = setTimeout(function () {
                    var html = marked(value || '', _this._markedOpt);
                    _this.previewHtml = _this._domSanitizer.bypassSecurityTrustHtml(html);
                }, 100);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "_hasUploadFunction", {
        get: function () {
            return this.upload && this.upload instanceof Function;
        },
        enumerable: true,
        configurable: true
    });
    MarkdownEditorComponent.prototype.ngOnInit = function () {
        var markedRender = new marked.Renderer();
        markedRender.image = this.getRender('image');
        markedRender.code = this.getRender('code');
        markedRender.table = this.getRender('table');
        markedRender.listitem = this.getRender('listitem');
        var markedjsOpt = {
            renderer: markedRender,
            highlight: function (code) { return hljs.highlightAuto(code).value; }
        };
        this._markedOpt = Object.assign({}, markedjsOpt, this.options.markedjsOpt);
    };
    MarkdownEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var editorElement = this.aceEditorContainer.nativeElement;
        this._editor = ace.edit(editorElement);
        this._editor.$blockScrolling = Infinity;
        this._editor.getSession().setUseWrapMode(true);
        this._editor.getSession().setMode("ace/mode/markdown");
        this._editor.setValue(this.markdownValue || '', 1);
        this._editor.setOption('scrollPastEnd', this._options.scrollPastEnd || 0);
        this._editor.on("change", function (e) {
            var val = _this._editor.getValue();
            _this.markdownValue = val;
        });
        this.onEditorLoaded.next(this._editor);
    };
    MarkdownEditorComponent.prototype.ngOnDestroy = function () {
        this._editor && this._editor.destroy();
    };
    MarkdownEditorComponent.prototype.writeValue = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.markdownValue = value;
            if (typeof value !== 'undefined' && _this._editor) {
                _this._editor.setValue(value || '', 1);
            }
        }, 1);
    };
    MarkdownEditorComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    MarkdownEditorComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    MarkdownEditorComponent.prototype.validate = function (c) {
        var result = null;
        if (this.required && this.markdownValue.length === 0) {
            result = { required: true };
        }
        if (this.maxlength > 0 && this.markdownValue.length > this.maxlength) {
            result = { maxlength: true };
        }
        return result;
    };
    MarkdownEditorComponent.prototype.insertContent = function (type, customContent) {
        if (!this._editor)
            return;
        var selectedText = this._editor.getSelectedText();
        var isSelected = !!selectedText;
        var startSize = 2;
        var initText = '';
        var range = this._editor.selection.getRange();
        switch (type) {
            case 'Bold':
                initText = 'Bold Text';
                selectedText = "**" + (selectedText || initText) + "**";
                break;
            case 'Italic':
                initText = 'Italic Text';
                selectedText = "*" + (selectedText || initText) + "*";
                startSize = 1;
                break;
            case 'Heading':
                initText = 'Heading';
                selectedText = "# " + (selectedText || initText);
                break;
            case 'Refrence':
                initText = 'Refrence';
                selectedText = "> " + (selectedText || initText);
                break;
            case 'Link':
                selectedText = "[](http://)";
                startSize = 1;
                break;
            case 'Image':
                selectedText = "![](http://)";
                break;
            case 'Ul':
                selectedText = "- " + (selectedText || initText);
                break;
            case 'Ol':
                selectedText = "1. " + (selectedText || initText);
                startSize = 3;
                break;
            case 'Code':
                initText = 'Source Code';
                selectedText = "```language\r\n" + (selectedText || initText) + "\r\n```";
                startSize = 3;
                break;
            case 'Custom':
                selectedText = customContent;
                startSize = 0;
                break;
        }
        this._editor.session.replace(range, selectedText);
        if (!isSelected) {
            range.start.column += startSize;
            range.end.column = range.start.column + initText.length;
            this._editor.selection.setRange(range);
        }
        this._editor.focus();
    };
    MarkdownEditorComponent.prototype.togglePreview = function () {
        this.showPreviewPanel = !this.showPreviewPanel;
        this.editorResize();
    };
    MarkdownEditorComponent.prototype.previewPanelClick = function (event) {
        if (this.options.enablePreviewContentClick !== true) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    MarkdownEditorComponent.prototype.fullScreen = function () {
        this.isFullScreen = !this.isFullScreen;
        this._renderer2.setStyle(document.body, 'overflowY', this.isFullScreen ? 'hidden' : 'auto');
        this.editorResize();
    };
    MarkdownEditorComponent.prototype.mdEditorResize = function (size) {
        this.editorResize();
    };
    MarkdownEditorComponent.prototype.editorResize = function (timeOut) {
        var _this = this;
        if (timeOut === void 0) { timeOut = 100; }
        if (!this._editor)
            return;
        if (this._editorResizeTimer)
            clearTimeout(this._editorResizeTimer);
        this._editorResizeTimer = setTimeout(function () {
            _this._editor.resize();
            _this._editor.focus();
        }, timeOut);
    };
    MarkdownEditorComponent.prototype.onDragover = function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        if (!this._hasUploadFunction)
            return;
        this.dragover = true;
    };
    MarkdownEditorComponent.prototype.onDrop = function (evt) {
        var _this = this;
        evt.stopImmediatePropagation();
        evt.preventDefault();
        if (!this._hasUploadFunction || this.isUploading)
            return;
        if (!evt.dataTransfer.files || evt.dataTransfer.files.length === 0) {
            this.dragover = false;
            return;
        }
        this.isUploading = true;
        Promise.resolve()
            .then(function () {
            return _this.upload(evt.dataTransfer.files);
        })
            .then(function (data) {
            if (Array.isArray(data)) {
                var msg = [];
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    var tempMsg = "[" + item.name + "](" + item.url + ")";
                    if (item.isImg) {
                        tempMsg = "!" + tempMsg;
                    }
                    msg.push(tempMsg);
                }
                _this.insertContent('Custom', msg.join('\r\n'));
            }
            else {
                console.warn('Invalid upload result. Please using follow this type `UploadResult`.');
            }
            _this.isUploading = false;
            _this.dragover = false;
        })
            .catch(function (err) {
            console.error(err);
            _this.isUploading = false;
            _this.dragover = false;
        });
    };
    MarkdownEditorComponent.prototype.onDragleave = function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        if (!this._hasUploadFunction)
            return;
        this.dragover = false;
    };
    MarkdownEditorComponent.prototype.getRender = function (renderType) {
        var customRender = this.options && this.options.customRender && this.options.customRender[renderType];
        if (customRender && typeof customRender === 'function') {
            return customRender;
        }
        else {
            switch (renderType) {
                case 'image':
                    return function (href, title, text) {
                        var out = "<img style=\"max-width: 100%;\" src=\"" + href + "\" alt=\"" + text + "\"";
                        if (title) {
                            out += " title=\"" + title + "\"";
                        }
                        out += this.options.xhtml ? "/>" : ">";
                        return out;
                    };
                case 'code':
                    return function (code, language) {
                        var validLang = !!(language && hljs.getLanguage(language));
                        var highlighted = validLang ? hljs.highlight(language, code).value : code;
                        return "<pre style=\"padding: 0; border-radius: 0;\"><code class=\"hljs " + language + "\">" + highlighted + "</code></pre>";
                    };
                case 'table':
                    return function (header, body) {
                        return "<table class=\"table table-bordered\">\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
                    };
                case 'listitem':
                    return function (text, task, checked) {
                        if (/^\s*\[[x ]\]\s*/.test(text) || text.startsWith('<input')) {
                            if (text.startsWith('<input')) {
                                text = text
                                    .replace('<input disabled="" type="checkbox">', '<i class="fa fa-square-o"></i>')
                                    .replace('<input checked="" disabled="" type="checkbox">', '<i class="fa fa-check-square"></i>');
                            }
                            else {
                                text = text
                                    .replace(/^\s*\[ \]\s*/, '<i class="fa fa-square-o"></i> ')
                                    .replace(/^\s*\[x\]\s*/, '<i class="fa fa-check-square"></i> ');
                            }
                            return "<li>" + text + "</li>";
                        }
                        else {
                            return "<li>" + text + "</li>";
                        }
                    };
            }
        }
        return null;
    };
    var MarkdownEditorComponent_1;
    MarkdownEditorComponent.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['required',] }] },
        { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['maxlength',] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aceEditor', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MarkdownEditorComponent.prototype, "aceEditorContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MarkdownEditorComponent.prototype, "hideToolbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarkdownEditorComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], MarkdownEditorComponent.prototype, "preRender", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], MarkdownEditorComponent.prototype, "upload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MarkdownEditorComponent.prototype, "mode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MarkdownEditorComponent.prototype, "options", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MarkdownEditorComponent.prototype, "onEditorLoaded", void 0);
    MarkdownEditorComponent = MarkdownEditorComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'md-editor',
            template: __importDefault(__webpack_require__(/*! raw-loader!./md-editor.html */ "./node_modules/raw-loader/dist/cjs.js!./src/lib/md-editor.html")).default,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MarkdownEditorComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MarkdownEditorComponent_1; }),
                    multi: true
                }
            ],
            styles: [__importDefault(__webpack_require__(/*! ./md-editor.scss */ "./src/lib/md-editor.scss")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('required')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('maxlength')),
        __metadata("design:paramtypes", [Boolean, Number, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], MarkdownEditorComponent);
    return MarkdownEditorComponent;
}());



/***/ }),

/***/ "./src/lib/md-editor.scss":
/*!********************************!*\
  !*** ./src/lib/md-editor.scss ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.md-editor-container {\n  position: relative;\n  height: 100%;\n  margin-bottom: 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.md-editor-container.fullscreen {\n  margin: 0;\n  position: fixed;\n  border: 0;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n  height: 100% !important;\n  z-index: 99999999;\n}\n.md-editor-container.md-editor-resizable:not(.fullscreen) {\n  resize: both;\n  overflow: hidden;\n  display: inline-block;\n  width: 100%;\n}\n.md-editor-container.md-editor-resizable:not(.fullscreen) .md-layout .editor-container {\n  height: calc(100% - 70px);\n}\n.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer {\n  z-index: -1;\n}\n.md-editor-container.font-awesome5 .fa.fa-header::before {\n  content: \"\";\n}\n.md-editor-container.font-awesome5 .fa.fa-file-code-o::before {\n  content: \"\";\n}\n.md-editor-container.font-awesome5 .fa.fa-arrows-alt::before {\n  content: \"\";\n}\n.md-editor-container .md-layout {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.md-editor-container .md-layout .tool-bar {\n  background-color: whitesmoke;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.md-editor-container .md-layout .tool-bar .btn-group {\n  padding: 6px;\n}\n.md-editor-container .md-layout .tool-bar .btn-group:first-child > .btn:first-child::before {\n  display: none;\n}\n.md-editor-container .md-layout .tool-bar .btn-group > .btn:first-child::before {\n  content: \" \";\n  background-color: darkgray;\n  width: 1px;\n  height: 24px;\n  left: -9px;\n  top: 2px;\n  position: absolute;\n}\n.md-editor-container .md-layout .tool-bar .btn-group.hide-split > .btn:first-child::before {\n  display: none;\n}\n.md-editor-container .md-layout .tool-bar .btn {\n  margin-bottom: 0;\n}\n.md-editor-container .md-layout .editor-container {\n  flex: 1;\n  display: flex;\n  height: calc(100% - 100px);\n}\n.md-editor-container .md-layout .editor-container > div {\n  flex: 1;\n}\n.md-editor-container .md-layout .editor-container > div .drag-container {\n  display: none;\n}\n.md-editor-container .md-layout .editor-container > div.dragover {\n  position: relative;\n}\n.md-editor-container .md-layout .editor-container > div.dragover .drag-container {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 50px;\n  color: white;\n}\n.md-editor-container .md-layout .editor-container > div.dragover .drag-container.drag-container-mask {\n  background-color: transparent;\n  z-index: 11;\n}\n.md-editor-container .md-layout .editor-container > div.dragover .drag-container .upload-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.md-editor-container .md-layout .editor-container > div.dragover .drag-container .upload-loading .text {\n  font-size: 20px;\n  margin-top: 10px;\n}\n.md-editor-container .md-layout .editor-container .editor-panel {\n  height: 100%;\n}\n.md-editor-container .md-layout .editor-container .editor-panel .ace-editor {\n  height: 100%;\n  min-height: 100%;\n}\n.md-editor-container .md-layout .preview-container {\n  overflow: auto;\n}\n.md-editor-container .md-layout .preview-container .preview-panel {\n  height: 100%;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: white;\n  padding: 10px;\n}\n.md-editor-container .md-layout .md-footer {\n  background-color: #f0f0f0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n}\n.md-editor-container .md-layout .md-footer .length-view {\n  flex: 1;\n  padding: 4px 2px 0 2px;\n  font-size: 12px;\n  line-height: 16px;\n}\n.md-editor-container .md-layout .md-footer .resize-btn {\n  width: 17px;\n}\n.md-editor-container .pull-right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvbWQtZWRpdG9yLnNjc3MiLCJzcmMvbGliL0Y6XFxhcHBsaWNhdGlvblxcY29kZVxcZ2l0aHViXFxuZ3gtbWFya2Rvd24tZWRpdG9yL3NyY1xcbGliXFxtZC1lZGl0b3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FERUY7QUNBRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBRENKO0FDQ0k7RUFDRSx5QkFBQTtBRENOO0FDRUk7RUFDRSxXQUFBO0FEQU47QUNVTTtFQUNFLFlBQUE7QURSUjtBQ3FCTTtFQUNFLFlBQUE7QURuQlI7QUMwQk07RUFDRSxZQUFBO0FEeEJSO0FDaUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRC9CSjtBQ2lDSTtFQUNFLDRCQUFBO0VBQ0EsMkNBQUE7QUQvQk47QUNpQ007RUFDRSxZQUFBO0FEL0JSO0FDaUNRO0VBQ0UsYUFBQTtBRC9CVjtBQ2tDUTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBRGhDVjtBQ21DUTtFQUNFLGFBQUE7QURqQ1Y7QUNxQ007RUFDRSxnQkFBQTtBRG5DUjtBQ3VDSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QURyQ047QUN1Q007RUFDRSxPQUFBO0FEckNSO0FDd0NNO0VBQ0UsYUFBQTtBRHRDUjtBQ3lDTTtFQUNFLGtCQUFBO0FEdkNSO0FDeUNRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUR2Q1Y7QUN5Q1U7RUFDRSw2QkFBQTtFQUNBLFdBQUE7QUR2Q1o7QUMwQ1U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRHhDWjtBQzBDWTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRHhDZDtBQzhDTTtFQUNFLFlBQUE7QUQ1Q1I7QUM4Q1E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUQ1Q1Y7QUNpREk7RUFDRSxjQUFBO0FEL0NOO0FDaURNO0VBQ0UsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FEL0NSO0FDbURJO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRGpETjtBQ21ETTtFQUNFLE9BQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGpEUjtBQ29ETTtFQUNFLFdBQUE7QURsRFI7QUN1REU7RUFDRSxZQUFBO0FEckRKIiwiZmlsZSI6InNyYy9saWIvbWQtZWRpdG9yLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubWQtZWRpdG9yLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lci5mdWxsc2NyZWVuIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvcmRlcjogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTk5OTk7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lci5tZC1lZGl0b3ItcmVzaXphYmxlOm5vdCguZnVsbHNjcmVlbikge1xuICByZXNpemU6IGJvdGg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lci5tZC1lZGl0b3ItcmVzaXphYmxlOm5vdCguZnVsbHNjcmVlbikgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lci5tZC1lZGl0b3ItcmVzaXphYmxlOm5vdCguZnVsbHNjcmVlbikgLm1kLWZvb3RlciB7XG4gIHotaW5kZXg6IC0xO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIuZm9udC1hd2Vzb21lNSAuZmEuZmEtaGVhZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+HnFwiO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIuZm9udC1hd2Vzb21lNSAuZmEuZmEtZmlsZS1jb2RlLW86OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74ShXCI7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lci5mb250LWF3ZXNvbWU1IC5mYS5mYS1hcnJvd3MtYWx0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+BpVwiO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLnRvb2wtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLnRvb2wtYmFyIC5idG4tZ3JvdXAge1xuICBwYWRkaW5nOiA2cHg7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IC50b29sLWJhciAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkID4gLmJ0bjpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLnRvb2wtYmFyIC5idG4tZ3JvdXAgPiAuYnRuOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGVmdDogLTlweDtcbiAgdG9wOiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLnRvb2wtYmFyIC5idG4tZ3JvdXAuaGlkZS1zcGxpdCA+IC5idG46Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IC50b29sLWJhciAuYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLmVkaXRvci1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLmVkaXRvci1jb250YWluZXIgPiBkaXYge1xuICBmbGV4OiAxO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciA+IGRpdiAuZHJhZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciA+IGRpdi5kcmFnb3ZlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLmVkaXRvci1jb250YWluZXIgPiBkaXYuZHJhZ292ZXIgLmRyYWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IC5lZGl0b3ItY29udGFpbmVyID4gZGl2LmRyYWdvdmVyIC5kcmFnLWNvbnRhaW5lci5kcmFnLWNvbnRhaW5lci1tYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDExO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciA+IGRpdi5kcmFnb3ZlciAuZHJhZy1jb250YWluZXIgLnVwbG9hZC1sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLmVkaXRvci1jb250YWluZXIgPiBkaXYuZHJhZ292ZXIgLmRyYWctY29udGFpbmVyIC51cGxvYWQtbG9hZGluZyAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLmVkaXRvci1jb250YWluZXIgLmVkaXRvci1wYW5lbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLmVkaXRvci1jb250YWluZXIgLmVkaXRvci1wYW5lbCAuYWNlLWVkaXRvciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLnByZXZpZXctY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IC5wcmV2aWV3LWNvbnRhaW5lciAucHJldmlldy1wYW5lbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAubWQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLm1kLWZvb3RlciAubGVuZ3RoLXZpZXcge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA0cHggMnB4IDAgMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAubWQtZm9vdGVyIC5yZXNpemUtYnRuIHtcbiAgd2lkdGg6IDE3cHg7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn0iLCIubWQtZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgJi5mdWxsc2NyZWVuIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICB9XHJcblxyXG4gICYubWQtZWRpdG9yLXJlc2l6YWJsZTpub3QoLmZ1bGxzY3JlZW4pIHtcclxuICAgIHJlc2l6ZTogYm90aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAubWQtbGF5b3V0IC5lZGl0b3ItY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAubWQtZm9vdGVyIHtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvbnQtYXdlc29tZTUge1xyXG4gICAgLmZhIHtcclxuICAgICAgJi5mYS1ib2xkIHt9XHJcblxyXG4gICAgICAmLmZhLWl0YWxpYyB7fVxyXG5cclxuICAgICAgJi5mYS1oZWFkZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcXGYxZGNcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5mYS1xdW90ZS1sZWZ0IHt9XHJcblxyXG4gICAgICAmLmZhLWxpbmsge31cclxuXHJcbiAgICAgICYuZmEtaW1hZ2Uge31cclxuXHJcbiAgICAgICYuZmEtbGlzdC11bCB7fVxyXG5cclxuICAgICAgJi5mYS1saXN0LW9sIHt9XHJcblxyXG4gICAgICAmLmZhLWZpbGUtY29kZS1vOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMTIxXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZmEtZXllIHt9XHJcblxyXG4gICAgICAmLmZhLWV5ZS1zbGFzaCB7fVxyXG5cclxuICAgICAgJi5mYS1hcnJvd3MtYWx0OjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDY1XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZmEtdXBsb2FkIHt9XHJcblxyXG4gICAgICAmLmZhLXNwaW5uZXIge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZC1sYXlvdXQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLnRvb2wtYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgICAgIC5idG4tZ3JvdXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZD4uYnRuOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY+LmJ0bjpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgIGxlZnQ6IC05cHg7XHJcbiAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuaGlkZS1zcGxpdD4uYnRuOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG5cclxuICAgICAgJj5kaXYge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY+ZGl2IC5kcmFnLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJj5kaXYuZHJhZ292ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmRyYWctY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICYuZHJhZy1jb250YWluZXItbWFzayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXBsb2FkLWxvYWRpbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZWRpdG9yLXBhbmVsIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIC5hY2UtZWRpdG9yIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByZXZpZXctY29udGFpbmVyIHtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAucHJldmlldy1wYW5lbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWQtZm9vdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5sZW5ndGgtdmlldyB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMnB4IDAgMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlc2l6ZS1idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHVsbC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/lib/resize-sensor/resize-sensor.component.ts":
/*!**********************************************************!*\
  !*** ./src/lib/resize-sensor/resize-sensor.component.ts ***!
  \**********************************************************/
/*! exports provided: MarkdownEditorResizeSensorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditorResizeSensorComponent", function() { return MarkdownEditorResizeSensorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MarkdownEditorResizeSensorComponent = /** @class */ (function () {
    function MarkdownEditorResizeSensorComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.interval = 500;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sizeInfo = {
            width: 0,
            height: 0
        };
    }
    MarkdownEditorResizeSensorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sizeInfo = {
            width: this.resizeSensor.nativeElement.offsetWidth,
            height: this.resizeSensor.nativeElement.offsetHeight
        };
        this._ngZone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.detectSize();
            }, _this.interval);
        });
    };
    MarkdownEditorResizeSensorComponent.prototype.detectSize = function () {
        var _this = this;
        var width = this.resizeSensor.nativeElement.offsetWidth;
        var height = this.resizeSensor.nativeElement.offsetHeight;
        if (this.sizeInfo.width !== width || this.sizeInfo.height !== height) {
            this.sizeInfo = {
                width: width,
                height: height
            };
            this.resize.emit(this.sizeInfo);
        }
        setTimeout(function () {
            _this.detectSize();
        }, this.interval);
    };
    MarkdownEditorResizeSensorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizeSensor', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MarkdownEditorResizeSensorComponent.prototype, "resizeSensor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarkdownEditorResizeSensorComponent.prototype, "interval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MarkdownEditorResizeSensorComponent.prototype, "resize", void 0);
    MarkdownEditorResizeSensorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'md-editor-resize-sensor',
            template: __importDefault(__webpack_require__(/*! raw-loader!./resize-sensor.html */ "./node_modules/raw-loader/dist/cjs.js!./src/lib/resize-sensor/resize-sensor.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./resize-sensor.scss */ "./src/lib/resize-sensor/resize-sensor.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MarkdownEditorResizeSensorComponent);
    return MarkdownEditorResizeSensorComponent;
}());



/***/ }),

/***/ "./src/lib/resize-sensor/resize-sensor.scss":
/*!**************************************************!*\
  !*** ./src/lib/resize-sensor/resize-sensor.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".md-editor-resize-sensor {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvcmVzaXplLXNlbnNvci9GOlxcYXBwbGljYXRpb25cXGNvZGVcXGdpdGh1Ylxcbmd4LW1hcmtkb3duLWVkaXRvci9zcmNcXGxpYlxccmVzaXplLXNlbnNvclxccmVzaXplLXNlbnNvci5zY3NzIiwic3JjL2xpYi9yZXNpemUtc2Vuc29yL3Jlc2l6ZS1zZW5zb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvbGliL3Jlc2l6ZS1zZW5zb3IvcmVzaXplLXNlbnNvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kLWVkaXRvci1yZXNpemUtc2Vuc29yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbiIsIi5tZC1lZGl0b3ItcmVzaXplLXNlbnNvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/public_api.ts":
/*!***************************!*\
  !*** ./src/public_api.ts ***!
  \***************************/
/*! exports provided: MarkdownEditorComponent, MarkdownEditorResizeSensorComponent, LMarkdownEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LMarkdownEditorModule", function() { return LMarkdownEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _lib_md_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/md-editor.component */ "./src/lib/md-editor.component.ts");
/* harmony import */ var _lib_resize_sensor_resize_sensor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/resize-sensor/resize-sensor.component */ "./src/lib/resize-sensor/resize-sensor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditorComponent", function() { return _lib_md_editor_component__WEBPACK_IMPORTED_MODULE_3__["MarkdownEditorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditorResizeSensorComponent", function() { return _lib_resize_sensor_resize_sensor_component__WEBPACK_IMPORTED_MODULE_4__["MarkdownEditorResizeSensorComponent"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var LMarkdownEditorModule = /** @class */ (function () {
    function LMarkdownEditorModule() {
    }
    LMarkdownEditorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _lib_md_editor_component__WEBPACK_IMPORTED_MODULE_3__["MarkdownEditorComponent"],
                _lib_resize_sensor_resize_sensor_component__WEBPACK_IMPORTED_MODULE_4__["MarkdownEditorResizeSensorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            exports: [
                _lib_md_editor_component__WEBPACK_IMPORTED_MODULE_3__["MarkdownEditorComponent"],
                _lib_resize_sensor_resize_sensor_component__WEBPACK_IMPORTED_MODULE_4__["MarkdownEditorResizeSensorComponent"]
            ]
        })
    ], LMarkdownEditorModule);
    return LMarkdownEditorModule;
}());



/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./demo/src/main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\application\code\github\ngx-markdown-editor\demo\src\main.ts */"./demo/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map