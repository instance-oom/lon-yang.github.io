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

/***/ "./demo/src/app/app.component.html":
/*!*****************************************!*\
  !*** ./demo/src/app/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px\">\r\n  <form novalidate #form=\"ngForm\">\r\n    <md-editor #md=\"ngModel\" name=\"Content\" [upload]=\"doUpload\" [(ngModel)]=\"content\" [mode]=\"mode\" [options]=\"options\" required maxlength=\"500\"></md-editor>\r\n  </form>\r\n  <div class=\"well well-sm\">\r\n    <button class=\"btn btn-default\" (click)=\"changeMode()\">Change Mode (Current: {{ mode }})</button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"btn btn-default\" (click)=\"togglePreviewClick()\">\r\n      {{ options?.enablePreviewContentClick ? 'Disable' : 'Enable' }} PreviewContentClick\r\n    </button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"btn btn-default\" (click)=\"toggleResizeAble()\">\r\n      {{ options?.resizable ? 'Disable' : 'Enable' }} Resizeable\r\n    </button>\r\n  </div>\r\n  <div class=\"well well-sm\">\r\n    <label class=\"control-label\">NgModel:</label>\r\n    <textarea class=\"form-control\" rows=\"10\" readonly [value]=\"content\"></textarea>\r\n  </div>\r\n  <div class=\"well well-sm\">\r\n    <label class=\"control-label\">Form validate:</label>\r\n    <p>Required: {{ md?.errors?.required }}</p>\r\n    <p>Maxlength: {{ md?.errors?.maxlength | json }}</p>\r\n  </div>\r\n</div>\r\n"

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
        contentArr.push('');
        contentArr.push('[Link](https://www.google.com)');
        contentArr.push('');
        this.content = contentArr.join('\r\n');
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
            template: __webpack_require__(/*! ./app.component.html */ "./demo/src/app/app.component.html"),
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
            showBorder: true,
            hideIcons: [],
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
        markedRender.code = function (code, language) {
            var validLang = !!(language && hljs.getLanguage(language));
            var highlighted = validLang ? hljs.highlight(language, code).value : code;
            return "<pre style=\"padding: 0; border-radius: 0;\"><code class=\"hljs " + language + "\">" + highlighted + "</code></pre>";
        };
        markedRender.table = function (header, body) {
            return "<table class=\"table table-bordered\">\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
        };
        markedRender.listitem = function (text) {
            if (/^\s*\[[x ]\]\s*/.test(text)) {
                text = text
                    .replace(/^\s*\[ \]\s*/, '<i class="fa fa-square-o" style="margin: 0 0.2em 0.25em -1.6em;"></i> ')
                    .replace(/^\s*\[x\]\s*/, '<i class="fa fa-check-square" style="margin: 0 0.2em 0.25em -1.6em;"></i> ');
                return "<li style=\"list-style: none;\">" + text + "</li>";
            }
            else {
                return "<li>" + text + "</li>";
            }
        };
        var markedjsOpt = {
            renderer: markedRender,
            highlight: function (code) { return hljs.highlightAuto(code).value; }
        };
        this._markedOpt = Object.assign({}, this.options.markedjsOpt, markedjsOpt);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aceEditor'),
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
            template: __webpack_require__(/*! ./md-editor.html */ "./src/lib/md-editor.html"),
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

/***/ "./src/lib/md-editor.html":
/*!********************************!*\
  !*** ./src/lib/md-editor.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-editor-container\" [class.fullscreen]=\"isFullScreen\" [class.md-editor-resizable]=\"options?.resizable\"\r\n  [style.height]=\"height\">\r\n  <div class=\"md-layout\">\r\n    <div class=\"tool-bar\" *ngIf=\"!hideToolbar && mode != 'preview'\">\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Bold\" (click)=\"insertContent('Bold')\"\r\n          *ngIf=\"!hideIcons.Bold\">\r\n          <i class=\"fa fa-bold\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Italic\" (click)=\"insertContent('Italic')\"\r\n          *ngIf=\"!hideIcons.Italic\">\r\n          <i class=\"fa fa-italic\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Heading\" (click)=\"insertContent('Heading')\"\r\n          *ngIf=\"!hideIcons.Heading\">\r\n          <i class=\"fa fa-header\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Refrence\" (click)=\"insertContent('Refrence')\"\r\n          *ngIf=\"!hideIcons.Refrence\">\r\n          <i class=\"fa fa-quote-left\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Link\" (click)=\"insertContent('Link')\"\r\n          *ngIf=\"!hideIcons.Link\">\r\n          <i class=\"fa fa-link\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Image\" (click)=\"insertContent('Image')\"\r\n          *ngIf=\"!hideIcons.Image\">\r\n          <i class=\"fa fa-image\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Unordered List\" (click)=\"insertContent('Ul')\"\r\n          *ngIf=\"!hideIcons.Ul\">\r\n          <i class=\"fa fa-list-ul\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Ordered List\" (click)=\"insertContent('Ol')\"\r\n          *ngIf=\"!hideIcons.Ol\">\r\n          <i class=\"fa fa-list-ol\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Code Block\" (click)=\"insertContent('Code')\"\r\n          *ngIf=\"!hideIcons.Code\">\r\n          <i class=\"fa fa-file-code-o\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\"\r\n          [attr.title]=\"showPreviewPanel ? 'Hide Preview' : 'Show Preview'\" (click)=\"togglePreview()\"\r\n          *ngIf=\"!hideIcons.TogglePreview\">\r\n          <i class=\"fa\" [class.fa-eye]=\"!showPreviewPanel\" [class.fa-eye-slash]=\"showPreviewPanel\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"btn-group pull-right hide-split\">\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [class.active]=\"isFullScreen\" (click)=\"fullScreen()\"\r\n          *ngIf=\"!hideIcons.FullScreen\">\r\n          <i class=\"fa fa-arrows-alt\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"editor-container\">\r\n      <div [class.dragover]=\"dragover\" [style.display]=\"mode == 'preview' ? 'none' : null\"\r\n        (dragover)=\"onDragover($event)\">\r\n        <div class=\"drag-container\">\r\n          <div class=\"upload-loading\">\r\n            <i class=\"fa fa-upload\" *ngIf=\"!isUploading\"></i>\r\n            <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"isUploading\"></i>\r\n            <div class=\"text\">{{ isUploading ? 'Uploading' : 'Drag it here' }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"drag-container drag-container-mask\" (drop)=\"onDrop($event)\" (dragleave)=\"onDragleave($event)\"></div>\r\n        <div class=\"editor-panel\">\r\n          <div class=\"ace-editor\" #aceEditor></div>\r\n        </div>\r\n      </div>\r\n      <div [style.display]=\"showPreviewPanel ? 'block' : 'none'\" (click)=\"previewPanelClick($event)\">\r\n        <div class=\"preview-panel\" [innerHtml]=\"previewHtml\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"md-footer\" *ngIf=\"maxlength > 0 && mode != 'preview'\">\r\n      <div class=\"text-right length-view\">\r\n        {{ markdownValue?.length }} / {{ maxlength }}\r\n      </div>\r\n      <div class=\"resize-btn\"></div>\r\n    </div>\r\n  </div>\r\n  <md-editor-resize-sensor *ngIf=\"options?.resizable\" (resize)=\"mdEditorResize($event)\"></md-editor-resize-sensor>\r\n</div>\r\n"

/***/ }),

/***/ "./src/lib/md-editor.scss":
/*!********************************!*\
  !*** ./src/lib/md-editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-editor-container {\n  position: relative;\n  height: 100%;\n  margin-bottom: 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n  .md-editor-container.fullscreen {\n    margin: 0;\n    position: fixed;\n    border: 0;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    height: 100% !important;\n    z-index: 99999999; }\n  .md-editor-container.md-editor-resizable:not(.fullscreen) {\n    resize: both;\n    overflow: auto;\n    display: inline-block;\n    width: 100%; }\n  .md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer {\n      z-index: -1; }\n  .md-editor-container .md-layout {\n    height: 100%;\n    display: flex;\n    flex-direction: column; }\n  .md-editor-container .md-layout .tool-bar {\n      background-color: whitesmoke;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  .md-editor-container .md-layout .tool-bar .btn-group {\n        padding: 6px; }\n  .md-editor-container .md-layout .tool-bar .btn-group:first-child > .btn:first-child::before {\n          display: none; }\n  .md-editor-container .md-layout .tool-bar .btn-group > .btn:first-child::before {\n          content: ' ';\n          background-color: darkgray;\n          width: 1px;\n          height: 24px;\n          left: -9px;\n          top: 2px;\n          position: absolute; }\n  .md-editor-container .md-layout .tool-bar .btn-group.hide-split > .btn:first-child::before {\n          display: none; }\n  .md-editor-container .md-layout .tool-bar .btn {\n        margin-bottom: 0; }\n  .md-editor-container .md-layout .editor-container {\n      flex: 1;\n      display: flex; }\n  .md-editor-container .md-layout .editor-container > div {\n        flex: 1; }\n  .md-editor-container .md-layout .editor-container > div .drag-container {\n        display: none; }\n  .md-editor-container .md-layout .editor-container > div.dragover {\n        position: relative; }\n  .md-editor-container .md-layout .editor-container > div.dragover .drag-container {\n          display: block;\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          z-index: 10;\n          background-color: rgba(0, 0, 0, 0.4);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          font-size: 50px;\n          color: white; }\n  .md-editor-container .md-layout .editor-container > div.dragover .drag-container.drag-container-mask {\n            background-color: transparent;\n            z-index: 11; }\n  .md-editor-container .md-layout .editor-container > div.dragover .drag-container .upload-loading {\n            display: flex;\n            flex-direction: column;\n            align-items: center; }\n  .md-editor-container .md-layout .editor-container > div.dragover .drag-container .upload-loading .text {\n              font-size: 20px;\n              margin-top: 10px; }\n  .md-editor-container .md-layout .editor-container .editor-panel {\n        height: 100%; }\n  .md-editor-container .md-layout .editor-container .editor-panel .ace-editor {\n          height: 100%;\n          min-height: 100%; }\n  .md-editor-container .md-layout .preview-panel {\n      height: 100%;\n      border-left: 1px solid rgba(0, 0, 0, 0.1);\n      background-color: white;\n      padding: 10px;\n      overflow-y: auto; }\n  .md-editor-container .md-layout .md-footer {\n      background-color: #f0f0f0;\n      border-top: 1px solid rgba(0, 0, 0, 0.1);\n      display: flex;\n      align-items: center; }\n  .md-editor-container .md-layout .md-footer .length-view {\n        flex: 1;\n        padding: 4px 2px 0 2px;\n        font-size: 12px;\n        line-height: 16px; }\n  .md-editor-container .md-layout .md-footer .resize-btn {\n        width: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvQzpcXFBlcnNvbmFsXFxHaXRodWJcXHByaXZhdGVcXG5neC1tYXJrZG93bi1lZGl0b3Ivc3JjXFxsaWJcXG1kLWVkaXRvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIscUNBQW9DLEVBd0hyQztFQTVIRDtJQU1JLFVBQVM7SUFDVCxnQkFBZTtJQUNmLFVBQVM7SUFDVCxPQUFNO0lBQ04sUUFBTztJQUNQLHVCQUFzQjtJQUN0Qix3QkFBdUI7SUFDdkIsa0JBQWlCLEVBQ2xCO0VBZEg7SUFnQkksYUFBWTtJQUNaLGVBQWM7SUFDZCxzQkFBcUI7SUFDckIsWUFBVyxFQUlaO0VBdkJIO01BcUJNLFlBQVcsRUFDWjtFQXRCTDtJQXlCSSxhQUFZO0lBQ1osY0FBYTtJQUNiLHVCQUFzQixFQWdHdkI7RUEzSEg7TUE2Qk0sNkJBQTRCO01BQzVCLDRDQUEyQyxFQXNCNUM7RUFwREw7UUFnQ1EsYUFBWSxFQWdCYjtFQWhEUDtVQWtDVSxjQUFhLEVBQ2Q7RUFuQ1Q7VUFxQ1UsYUFBWTtVQUNaLDJCQUEwQjtVQUMxQixXQUFVO1VBQ1YsYUFBWTtVQUNaLFdBQVU7VUFDVixTQUFRO1VBQ1IsbUJBQWtCLEVBQ25CO0VBNUNUO1VBOENVLGNBQWEsRUFDZDtFQS9DVDtRQWtEUSxpQkFBZ0IsRUFDakI7RUFuRFA7TUFzRE0sUUFBTztNQUNQLGNBQWEsRUE2Q2Q7RUFwR0w7UUF5RFEsUUFBTyxFQUNSO0VBMURQO1FBNERRLGNBQWEsRUFDZDtFQTdEUDtRQStEUSxtQkFBa0IsRUE2Qm5CO0VBNUZQO1VBaUVVLGVBQWM7VUFDZCxtQkFBa0I7VUFDbEIsUUFBTztVQUNQLE9BQU07VUFDTixTQUFRO1VBQ1IsVUFBUztVQUNULFlBQVc7VUFDWCxxQ0FBb0M7VUFDcEMsY0FBYTtVQUNiLG9CQUFtQjtVQUNuQix3QkFBdUI7VUFDdkIsZ0JBQWU7VUFDZixhQUFZLEVBY2I7RUEzRlQ7WUErRVksOEJBQTZCO1lBQzdCLFlBQVcsRUFDWjtFQWpGWDtZQW1GWSxjQUFhO1lBQ2IsdUJBQXNCO1lBQ3RCLG9CQUFtQixFQUtwQjtFQTFGWDtjQXVGYyxnQkFBZTtjQUNmLGlCQUFnQixFQUNqQjtFQXpGYjtRQThGUSxhQUFZLEVBS2I7RUFuR1A7VUFnR1UsYUFBWTtVQUNaLGlCQUFnQixFQUNqQjtFQWxHVDtNQXNHTSxhQUFZO01BQ1osMENBQXlDO01BQ3pDLHdCQUF1QjtNQUN2QixjQUFhO01BQ2IsaUJBQWdCLEVBQ2pCO0VBM0dMO01BNkdNLDBCQUF5QjtNQUN6Qix5Q0FBd0M7TUFDeEMsY0FBYTtNQUNiLG9CQUFtQixFQVVwQjtFQTFITDtRQWtIUSxRQUFPO1FBQ1AsdUJBQXNCO1FBQ3RCLGdCQUFlO1FBQ2Ysa0JBQWlCLEVBQ2xCO0VBdEhQO1FBd0hRLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvbGliL21kLWVkaXRvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kLWVkaXRvci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgJi5mdWxsc2NyZWVuIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICB9XHJcbiAgJi5tZC1lZGl0b3ItcmVzaXphYmxlOm5vdCguZnVsbHNjcmVlbikge1xyXG4gICAgcmVzaXplOiBib3RoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5tZC1mb290ZXIge1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgLm1kLWxheW91dCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC50b29sLWJhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIC5idG4tZ3JvdXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkPi5idG46Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmPi5idG46Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnICc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBsZWZ0OiAtOXB4O1xyXG4gICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaGlkZS1zcGxpdD4uYnRuOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVkaXRvci1jb250YWluZXIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAmPmRpdiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgICAmPmRpdiAuZHJhZy1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgJj5kaXYuZHJhZ292ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuZHJhZy1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAmLmRyYWctY29udGFpbmVyLW1hc2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXBsb2FkLWxvYWRpbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmVkaXRvci1wYW5lbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC5hY2UtZWRpdG9yIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJldmlldy1wYW5lbCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm1kLWZvb3RlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5sZW5ndGgtdmlldyB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMnB4IDAgMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAucmVzaXplLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resizeSensor'),
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
            template: __webpack_require__(/*! ./resize-sensor.html */ "./src/lib/resize-sensor/resize-sensor.html"),
            styles: [__webpack_require__(/*! ./resize-sensor.scss */ "./src/lib/resize-sensor/resize-sensor.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MarkdownEditorResizeSensorComponent);
    return MarkdownEditorResizeSensorComponent;
}());



/***/ }),

/***/ "./src/lib/resize-sensor/resize-sensor.html":
/*!**************************************************!*\
  !*** ./src/lib/resize-sensor/resize-sensor.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-editor-resize-sensor\" #resizeSensor></div>\r\n"

/***/ }),

/***/ "./src/lib/resize-sensor/resize-sensor.scss":
/*!**************************************************!*\
  !*** ./src/lib/resize-sensor/resize-sensor.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-editor-resize-sensor {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvcmVzaXplLXNlbnNvci9DOlxcUGVyc29uYWxcXEdpdGh1YlxccHJpdmF0ZVxcbmd4LW1hcmtkb3duLWVkaXRvci9zcmNcXGxpYlxccmVzaXplLXNlbnNvclxccmVzaXplLXNlbnNvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxTQUFRO0VBQ1IsT0FBTTtFQUNOLFVBQVM7RUFDVCxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2xpYi9yZXNpemUtc2Vuc29yL3Jlc2l6ZS1zZW5zb3Iuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZC1lZGl0b3ItcmVzaXplLXNlbnNvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4iXX0= */"

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

module.exports = __webpack_require__(/*! C:\Personal\Github\private\ngx-markdown-editor\demo\src\main.ts */"./demo/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map