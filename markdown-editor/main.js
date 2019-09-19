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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.options = {
            showPreviewPanel: false,
            enablePreviewContentClick: false,
            resizable: true
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
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./demo/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./demo/src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./demo/src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./demo/src/app/app.component.ts");
/* harmony import */ var _src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../src/public_api */ "./src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./demo/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./demo/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./demo/src/app/app.component.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./demo/src/app/app.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px\">\r\n  <form novalidate #form=\"ngForm\">\r\n    <md-editor #md=\"ngModel\" name=\"Content\" [upload]=\"doUpload\" [(ngModel)]=\"content\" [mode]=\"mode\" [options]=\"options\"\r\n      required maxlength=\"600\" height=\"400px\"></md-editor>\r\n  </form>\r\n  <div class=\"well well-sm\">\r\n    <button class=\"btn btn-default btn-primary\" (click)=\"togglePreviewPanel()\">\r\n      {{ options?.showPreviewPanel ? 'Hide' : 'Show' }} Preview Panel\r\n    </button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"btn btn-default btn-primary\" (click)=\"changeMode()\">Change Mode (Current: {{ mode }})</button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"btn btn-default btn-primary\" (click)=\"togglePreviewClick()\">\r\n      {{ options?.enablePreviewContentClick ? 'Disable' : 'Enable' }} PreviewContentClick\r\n    </button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"btn btn-default btn-primary\" (click)=\"toggleResizeAble()\">\r\n      {{ options?.resizable ? 'Disable' : 'Enable' }} Resizeable\r\n    </button>\r\n  </div>\r\n  <br>\r\n  <div class=\"well well-sm\">\r\n    <label class=\"control-label\">NgModel:</label>\r\n    <textarea class=\"form-control\" rows=\"10\" readonly [value]=\"content\"></textarea>\r\n  </div>\r\n  <div class=\"well well-sm\">\r\n    <label class=\"control-label\">Form validate:</label>\r\n    <p>Required: {{ md?.errors?.required }}</p>\r\n    <p>Maxlength: {{ md?.errors?.maxlength | json }}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/md-editor.html":
/*!**********************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/md-editor.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-editor-container\" [class.font-awesome5]=\"options?.usingFontAwesome5\" [class.fullscreen]=\"isFullScreen\" [class.md-editor-resizable]=\"options?.resizable\"\r\n  [style.height]=\"height\">\r\n  <div class=\"md-layout\">\r\n    <div class=\"tool-bar\" *ngIf=\"!hideToolbar && mode != 'preview'\">\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Bold\" (click)=\"insertContent('Bold')\"\r\n          *ngIf=\"!hideIcons.Bold\">\r\n          <i class=\"fa fa-bold\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Italic\" (click)=\"insertContent('Italic')\"\r\n          *ngIf=\"!hideIcons.Italic\">\r\n          <i class=\"fa fa-italic\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Heading\" (click)=\"insertContent('Heading')\"\r\n          *ngIf=\"!hideIcons.Heading\">\r\n          <i class=\"fa fa-header\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Refrence\" (click)=\"insertContent('Refrence')\"\r\n          *ngIf=\"!hideIcons.Refrence\">\r\n          <i class=\"fa fa-quote-left\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Link\" (click)=\"insertContent('Link')\"\r\n          *ngIf=\"!hideIcons.Link\">\r\n          <i class=\"fa fa-link\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Image\" (click)=\"insertContent('Image')\"\r\n          *ngIf=\"!hideIcons.Image\">\r\n          <i class=\"fa fa-image\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Unordered List\" (click)=\"insertContent('Ul')\"\r\n          *ngIf=\"!hideIcons.Ul\">\r\n          <i class=\"fa fa-list-ul\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Ordered List\" (click)=\"insertContent('Ol')\"\r\n          *ngIf=\"!hideIcons.Ol\">\r\n          <i class=\"fa fa-list-ol\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Code Block\" (click)=\"insertContent('Code')\"\r\n          *ngIf=\"!hideIcons.Code\">\r\n          <i class=\"fa fa-file-code-o\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\"\r\n          [attr.title]=\"showPreviewPanel ? 'Hide Preview' : 'Show Preview'\" (click)=\"togglePreview()\"\r\n          *ngIf=\"!hideIcons.TogglePreview\">\r\n          <i class=\"fa\" [class.fa-eye]=\"!showPreviewPanel\" [class.fa-eye-slash]=\"showPreviewPanel\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group pull-right hide-split\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [class.active]=\"isFullScreen\" (click)=\"fullScreen()\"\r\n          *ngIf=\"!hideIcons.FullScreen\">\r\n          <i class=\"fa\" [class.fa-arrows-alt]=\"!options?.usingFontAwesome5 || !isFullScreen\" [class.fa-compress]=\"options?.usingFontAwesome5 && isFullScreen\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"editor-container\">\r\n      <div [class.dragover]=\"dragover\" [style.display]=\"mode == 'preview' ? 'none' : null\"\r\n        (dragover)=\"onDragover($event)\">\r\n        <div class=\"drag-container\">\r\n          <div class=\"upload-loading\">\r\n            <i class=\"fa fa-upload\" *ngIf=\"!isUploading\"></i>\r\n            <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"isUploading\"></i>\r\n            <div class=\"text\">{{ isUploading ? 'Uploading' : 'Drag it here' }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"drag-container drag-container-mask\" (drop)=\"onDrop($event)\" (dragleave)=\"onDragleave($event)\"></div>\r\n        <div class=\"editor-panel\">\r\n          <div class=\"ace-editor\" #aceEditor></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"preview-container\"[style.display]=\"showPreviewPanel ? 'block' : 'none'\" (click)=\"previewPanelClick($event)\">\r\n        <div class=\"preview-panel\" [innerHtml]=\"previewHtml\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"md-footer\" *ngIf=\"maxlength > 0 && mode != 'preview'\">\r\n      <div class=\"text-right length-view\">\r\n        {{ markdownValue?.length }} / {{ maxlength }}\r\n      </div>\r\n      <div class=\"resize-btn\"></div>\r\n    </div>\r\n  </div>\r\n  <md-editor-resize-sensor *ngIf=\"options?.resizable\" (resize)=\"mdEditorResize($event)\"></md-editor-resize-sensor>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/resize-sensor/resize-sensor.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/resize-sensor/resize-sensor.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-editor-resize-sensor\" #resizeSensor></div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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



var MarkdownEditorComponent = /** @class */ (function () {
    function MarkdownEditorComponent(required, maxlength, _renderer, _domSanitizer) {
        if (required === void 0) { required = false; }
        if (maxlength === void 0) { maxlength = -1; }
        this.required = required;
        this.maxlength = maxlength;
        this._renderer = _renderer;
        this._domSanitizer = _domSanitizer;
        this.hideToolbar = false;
        this.height = "300px";
        this._options = {};
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
        markedRender.image = function (href, title, text) {
            var out = "<img style=\"max-width: 100%;\" src=\"" + href + "\" alt=\"" + text + "\"";
            if (title) {
                out += " title=\"" + title + "\"";
            }
            out += this.options.xhtml ? "/>" : ">";
            console.log(out);
            return out;
        };
        markedRender.code = function (code, language) {
            var validLang = !!(language && hljs.getLanguage(language));
            var highlighted = validLang ? hljs.highlight(language, code).value : code;
            return "<pre style=\"padding: 0; border-radius: 0;\"><code class=\"hljs " + language + "\">" + highlighted + "</code></pre>";
        };
        markedRender.table = function (header, body) {
            return "<table class=\"table table-bordered\">\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
        };
        markedRender.listitem = function (text, task, checked) {
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
        this._renderer.setElementStyle(document.body, 'overflowY', this.isFullScreen ? 'hidden' : 'auto');
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
    var MarkdownEditorComponent_1;
    MarkdownEditorComponent.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['required',] }] },
        { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['maxlength',] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"] },
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
    MarkdownEditorComponent = MarkdownEditorComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'md-editor',
            template: __webpack_require__(/*! raw-loader!./md-editor.html */ "./node_modules/raw-loader/index.js!./src/lib/md-editor.html"),
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
            styles: [__webpack_require__(/*! ./md-editor.scss */ "./src/lib/md-editor.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('required')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('maxlength')),
        __metadata("design:paramtypes", [Boolean, Number, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], MarkdownEditorComponent);
    return MarkdownEditorComponent;
}());



/***/ }),

/***/ "./src/lib/md-editor.scss":
/*!********************************!*\
  !*** ./src/lib/md-editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.md-editor-container {\n  position: relative;\n  height: 100%;\n  margin-bottom: 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.md-editor-container.fullscreen {\n  margin: 0;\n  position: fixed;\n  border: 0;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n  height: 100% !important;\n  z-index: 99999999;\n}\n.md-editor-container.md-editor-resizable:not(.fullscreen) {\n  resize: both;\n  overflow: hidden;\n  display: inline-block;\n  width: 100%;\n}\n.md-editor-container.md-editor-resizable:not(.fullscreen) .md-layout .editor-container {\n  height: calc(100% - 70px);\n}\n.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer {\n  z-index: -1;\n}\n.md-editor-container.font-awesome5 .fa.fa-header::before {\n  content: \"\";\n}\n.md-editor-container.font-awesome5 .fa.fa-file-code-o::before {\n  content: \"\";\n}\n.md-editor-container.font-awesome5 .fa.fa-arrows-alt::before {\n  content: \"\";\n}\n.md-editor-container .md-layout {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.md-editor-container .md-layout .tool-bar {\n  background-color: whitesmoke;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.md-editor-container .md-layout .tool-bar .btn-group {\n  padding: 6px;\n}\n.md-editor-container .md-layout .tool-bar .btn-group:first-child > .btn:first-child::before {\n  display: none;\n}\n.md-editor-container .md-layout .tool-bar .btn-group > .btn:first-child::before {\n  content: \" \";\n  background-color: darkgray;\n  width: 1px;\n  height: 24px;\n  left: -9px;\n  top: 2px;\n  position: absolute;\n}\n.md-editor-container .md-layout .tool-bar .btn-group.hide-split > .btn:first-child::before {\n  display: none;\n}\n.md-editor-container .md-layout .tool-bar .btn {\n  margin-bottom: 0;\n}\n.md-editor-container .md-layout .editor-container {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  height: calc(100% - 100px);\n}\n.md-editor-container .md-layout .editor-container > div {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.md-editor-container .md-layout .editor-container > div .drag-container {\n  display: none;\n}\n.md-editor-container .md-layout .editor-container > div.dragover {\n  position: relative;\n}\n.md-editor-container .md-layout .editor-container > div.dragover .drag-container {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 50px;\n  color: white;\n}\n.md-editor-container .md-layout .editor-container > div.dragover .drag-container.drag-container-mask {\n  background-color: transparent;\n  z-index: 11;\n}\n.md-editor-container .md-layout .editor-container > div.dragover .drag-container .upload-loading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.md-editor-container .md-layout .editor-container > div.dragover .drag-container .upload-loading .text {\n  font-size: 20px;\n  margin-top: 10px;\n}\n.md-editor-container .md-layout .editor-container .editor-panel {\n  height: 100%;\n}\n.md-editor-container .md-layout .editor-container .editor-panel .ace-editor {\n  height: 100%;\n  min-height: 100%;\n}\n.md-editor-container .md-layout .preview-container {\n  overflow: auto;\n}\n.md-editor-container .md-layout .preview-container .preview-panel {\n  height: 100%;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: white;\n  padding: 10px;\n}\n.md-editor-container .md-layout .md-footer {\n  background-color: #f0f0f0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.md-editor-container .md-layout .md-footer .length-view {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 4px 2px 0 2px;\n  font-size: 12px;\n  line-height: 16px;\n}\n.md-editor-container .md-layout .md-footer .resize-btn {\n  width: 17px;\n}\n.md-editor-container .pull-right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvbWQtZWRpdG9yLnNjc3MiLCJzcmMvbGliL0Y6XFxhcHBsaWNhdGlvblxcY29kZVxcZ2l0aHViXFxuZ3gtbWFya2Rvd24tZWRpdG9yL3NyY1xcbGliXFxtZC1lZGl0b3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FERUY7QUNBRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBRENKO0FDQ0k7RUFDRSx5QkFBQTtBRENOO0FDRUk7RUFDRSxXQUFBO0FEQU47QUNVTTtFQUNFLFlBQUE7QURSUjtBQ3FCTTtFQUNFLFlBQUE7QURuQlI7QUMwQk07RUFDRSxZQUFBO0FEeEJSO0FDaUNFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBRC9CSjtBQ2lDSTtFQUNFLDRCQUFBO0VBQ0EsMkNBQUE7QUQvQk47QUNpQ007RUFDRSxZQUFBO0FEL0JSO0FDaUNRO0VBQ0UsYUFBQTtBRC9CVjtBQ2tDUTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBRGhDVjtBQ21DUTtFQUNFLGFBQUE7QURqQ1Y7QUNxQ007RUFDRSxnQkFBQTtBRG5DUjtBQ3VDSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO0FEckNOO0FDdUNNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FEckNSO0FDd0NNO0VBQ0UsYUFBQTtBRHRDUjtBQ3lDTTtFQUNFLGtCQUFBO0FEdkNSO0FDeUNRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUR2Q1Y7QUN5Q1U7RUFDRSw2QkFBQTtFQUNBLFdBQUE7QUR2Q1o7QUMwQ1U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEeENaO0FDMENZO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEeENkO0FDOENNO0VBQ0UsWUFBQTtBRDVDUjtBQzhDUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBRDVDVjtBQ2lESTtFQUNFLGNBQUE7QUQvQ047QUNpRE07RUFDRSxZQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUQvQ1I7QUNtREk7RUFDRSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRGpETjtBQ21ETTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEakRSO0FDb0RNO0VBQ0UsV0FBQTtBRGxEUjtBQ3VERTtFQUNFLFlBQUE7QURyREoiLCJmaWxlIjoic3JjL2xpYi9tZC1lZGl0b3Iuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5tZC1lZGl0b3ItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyLmZ1bGxzY3JlZW4ge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyOiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5OTk5OTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyLm1kLWVkaXRvci1yZXNpemFibGU6bm90KC5mdWxsc2NyZWVuKSB7XG4gIHJlc2l6ZTogYm90aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyLm1kLWVkaXRvci1yZXNpemFibGU6bm90KC5mdWxsc2NyZWVuKSAubWQtbGF5b3V0IC5lZGl0b3ItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyLm1kLWVkaXRvci1yZXNpemFibGU6bm90KC5mdWxsc2NyZWVuKSAubWQtZm9vdGVyIHtcbiAgei1pbmRleDogLTE7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lci5mb250LWF3ZXNvbWU1IC5mYS5mYS1oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74ecXCI7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lci5mb250LWF3ZXNvbWU1IC5mYS5mYS1maWxlLWNvZGUtbzo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhKFcIjtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyLmZvbnQtYXdlc29tZTUgLmZhLmZhLWFycm93cy1hbHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74GlXCI7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAudG9vbC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAudG9vbC1iYXIgLmJ0bi1ncm91cCB7XG4gIHBhZGRpbmc6IDZweDtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLnRvb2wtYmFyIC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQgPiAuYnRuOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAudG9vbC1iYXIgLmJ0bi1ncm91cCA+IC5idG46Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBsZWZ0OiAtOXB4O1xuICB0b3A6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAudG9vbC1iYXIgLmJ0bi1ncm91cC5oaWRlLXNwbGl0ID4gLmJ0bjpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLnRvb2wtYmFyIC5idG4ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciA+IGRpdiB7XG4gIGZsZXg6IDE7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IC5lZGl0b3ItY29udGFpbmVyID4gZGl2IC5kcmFnLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IC5lZGl0b3ItY29udGFpbmVyID4gZGl2LmRyYWdvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciA+IGRpdi5kcmFnb3ZlciAuZHJhZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLmVkaXRvci1jb250YWluZXIgPiBkaXYuZHJhZ292ZXIgLmRyYWctY29udGFpbmVyLmRyYWctY29udGFpbmVyLW1hc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTE7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IC5lZGl0b3ItY29udGFpbmVyID4gZGl2LmRyYWdvdmVyIC5kcmFnLWNvbnRhaW5lciAudXBsb2FkLWxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciA+IGRpdi5kcmFnb3ZlciAuZHJhZy1jb250YWluZXIgLnVwbG9hZC1sb2FkaW5nIC50ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciAuZWRpdG9yLXBhbmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAuZWRpdG9yLWNvbnRhaW5lciAuZWRpdG9yLXBhbmVsIC5hY2UtZWRpdG9yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAucHJldmlldy1jb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5tZC1sYXlvdXQgLnByZXZpZXctY29udGFpbmVyIC5wcmV2aWV3LXBhbmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IC5tZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1kLWVkaXRvci1jb250YWluZXIgLm1kLWxheW91dCAubWQtZm9vdGVyIC5sZW5ndGgtdmlldyB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDRweCAycHggMCAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4ubWQtZWRpdG9yLWNvbnRhaW5lciAubWQtbGF5b3V0IC5tZC1mb290ZXIgLnJlc2l6ZS1idG4ge1xuICB3aWR0aDogMTdweDtcbn1cbi5tZC1lZGl0b3ItY29udGFpbmVyIC5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSIsIi5tZC1lZGl0b3ItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAmLmZ1bGxzY3JlZW4ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gIH1cclxuXHJcbiAgJi5tZC1lZGl0b3ItcmVzaXphYmxlOm5vdCguZnVsbHNjcmVlbikge1xyXG4gICAgcmVzaXplOiBib3RoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5tZC1sYXlvdXQgLmVkaXRvci1jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZC1mb290ZXIge1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9udC1hd2Vzb21lNSB7XHJcbiAgICAuZmEge1xyXG4gICAgICAmLmZhLWJvbGQge31cclxuXHJcbiAgICAgICYuZmEtaXRhbGljIHt9XHJcblxyXG4gICAgICAmLmZhLWhlYWRlcjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlxcZjFkY1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmZhLXF1b3RlLWxlZnQge31cclxuXHJcbiAgICAgICYuZmEtbGluayB7fVxyXG5cclxuICAgICAgJi5mYS1pbWFnZSB7fVxyXG5cclxuICAgICAgJi5mYS1saXN0LXVsIHt9XHJcblxyXG4gICAgICAmLmZhLWxpc3Qtb2wge31cclxuXHJcbiAgICAgICYuZmEtZmlsZS1jb2RlLW86OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcXGYxMjFcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5mYS1leWUge31cclxuXHJcbiAgICAgICYuZmEtZXllLXNsYXNoIHt9XHJcblxyXG4gICAgICAmLmZhLWFycm93cy1hbHQ6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcXGYwNjVcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5mYS11cGxvYWQge31cclxuXHJcbiAgICAgICYuZmEtc3Bpbm5lciB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1kLWxheW91dCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAudG9vbC1iYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAgICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkPi5idG46Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJj4uYnRuOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgbGVmdDogLTlweDtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5oaWRlLXNwbGl0Pi5idG46Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0b3ItY29udGFpbmVyIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcblxyXG4gICAgICAmPmRpdiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJj5kaXYgLmRyYWctY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmPmRpdi5kcmFnb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuZHJhZy1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgJi5kcmFnLWNvbnRhaW5lci1tYXNrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51cGxvYWQtbG9hZGluZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lZGl0b3ItcGFuZWwge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgLmFjZS1lZGl0b3Ige1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJldmlldy1jb250YWluZXIge1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgIC5wcmV2aWV3LXBhbmVsIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZC1mb290ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmxlbmd0aC12aWV3IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAycHggMCAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVzaXplLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wdWxsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
            template: __webpack_require__(/*! raw-loader!./resize-sensor.html */ "./node_modules/raw-loader/index.js!./src/lib/resize-sensor/resize-sensor.html"),
            styles: [__webpack_require__(/*! ./resize-sensor.scss */ "./src/lib/resize-sensor/resize-sensor.scss")]
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-editor-resize-sensor {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvcmVzaXplLXNlbnNvci9GOlxcYXBwbGljYXRpb25cXGNvZGVcXGdpdGh1Ylxcbmd4LW1hcmtkb3duLWVkaXRvci9zcmNcXGxpYlxccmVzaXplLXNlbnNvclxccmVzaXplLXNlbnNvci5zY3NzIiwic3JjL2xpYi9yZXNpemUtc2Vuc29yL3Jlc2l6ZS1zZW5zb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvbGliL3Jlc2l6ZS1zZW5zb3IvcmVzaXplLXNlbnNvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kLWVkaXRvci1yZXNpemUtc2Vuc29yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbiIsIi5tZC1lZGl0b3ItcmVzaXplLXNlbnNvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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