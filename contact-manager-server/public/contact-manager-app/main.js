(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_gaurd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.gaurd */ "./src/app/auth.gaurd.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout-btn{\n        padding: 0 14px;  \n}\n.example-spacer {\n    flex: 1 1 auto;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    \n  <mat-toolbar color=\"primary\">\n   \n   <mat-toolbar-row>\n      <span>{{title}} </span>\n      <span class=\"example-spacer\"></span>\n      <button class=\"logout-btn\" *ngIf=\"loginStatus\" mat-raised-button (click)=\"logout()\" color=\"warn\">Logout</button>\n     \n    </mat-toolbar-row>\n  </mat-toolbar>\n  \n</div>\n\n<div>\n <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Contact Manager';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authStatus.subscribe(function (data) {
            console.log(data);
            _this.loginStatus = data;
        });
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newcontact_newcontact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newcontact/newcontact.component */ "./src/app/newcontact/newcontact.component.ts");
/* harmony import */ var _contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-view/contact-view.component */ "./src/app/contact-view/contact-view.component.ts");
/* harmony import */ var _auth_gaurd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.gaurd */ "./src/app/auth.gaurd.ts");
/* harmony import */ var _edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-contact-dialog/edit-contact-dialog.component */ "./src/app/edit-contact-dialog/edit-contact-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _newcontact_newcontact_component__WEBPACK_IMPORTED_MODULE_10__["NewcontactComponent"],
                _contact_view_contact_view_component__WEBPACK_IMPORTED_MODULE_11__["ContactViewComponent"],
                _edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_13__["EditContactDialogComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
            ],
            entryComponents: [_edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_13__["EditContactDialogComponent"]],
            providers: [_auth_gaurd__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.gaurd.ts":
/*!*******************************!*\
  !*** ./src/app/auth.gaurd.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            console.log("canActivate");
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.updateAuthStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.authStatus = this.updateAuthStatus.asObservable();
    }
    AuthenticationService.prototype.changeAuthStatus = function (authFlag) {
        this.updateAuthStatus.next(authFlag);
    };
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('http://localhost:3000/api/v1/auth', { username: username, password: password }).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthenticationService.prototype.logout = function () {
        this.changeAuthStatus(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(["/login"]);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/contact-view/contact-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-view/contact-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    display: flex;\n  }\n  \n  input {\n    border: none;\n    background: none;\n    padding: 0;\n    outline: none;\n    font: inherit;\n    text-align: center;\n  }\n  \n  span {\n    opacity: 0;\n    transition: opacity 200ms;\n  }\n  \n  :host.floating span {\n    opacity: 1;\n  }\n  \n  table {\n    width: 100%;\n  }\n  \n  .econtact-view-container {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .contact-view-container > * {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/contact-view/contact-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-view/contact-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-view-container\">\n  <mat-card>\n\n    <mat-card-title>\n\n    </mat-card-title>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <mat-card-content>\n      <div class=\"mat-elevation-z8\">\n\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n\n          <!-- ID Column -->\n          <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n            <td mat-cell *matCellDef=\"let row; let i = index;\"> {{i+1}} </td>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"Name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.firstName}} </td>\n          </ng-container>\n\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"Email\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n          </ng-container>\n\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"Status\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.status}} </td>\n          </ng-container>\n          <!-- Color Column -->\n          <ng-container matColumnDef=\"Contact No\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact No. </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.contactNo}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Action\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n            <td mat-cell *matCellDef=\"let row;  \">\n              <button mat-raised-button (click)=\"removeContact(row._id['$oid'])\">Delete </button>\n              <button mat-raised-button (click)=\"updateContact(row._id['$oid'])\">Edit </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n          </tr>\n        </table>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <mat-paginator [pageSizeOptions]=\"[ 10, 25, 100]\"></mat-paginator>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/contact-view/contact-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-view/contact-view.component.ts ***!
  \********************************************************/
/*! exports provided: ContactViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactViewComponent", function() { return ContactViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contactinfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contactinfo.service */ "./src/app/contactinfo.service.ts");
/* harmony import */ var _edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-contact-dialog/edit-contact-dialog.component */ "./src/app/edit-contact-dialog/edit-contact-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactViewComponent = /** @class */ (function () {
    function ContactViewComponent(contactInfoService, dialog) {
        this.contactInfoService = contactInfoService;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'Email', 'Contact No', 'Status', 'Action'];
    }
    ContactViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactInfoService.contactListObserver.subscribe(function (data) {
            _this.getContactInfo();
        });
    };
    ContactViewComponent.prototype.ngOnChanges = function (changes) {
    };
    ContactViewComponent.prototype.getContactInfo = function () {
        var _this = this;
        this.contactInfoService.getContactInfo()
            .subscribe(function (data) {
            _this.contactInfo = data;
            console.log(data);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.contactInfo);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.contactInfoService.setContactInfo(_this.contactInfo);
        }, //Bind to view
        function (//Bind to view
        err) {
            // Log errors if any
            console.log(err);
        });
        // return this.contactInfo;
    };
    ContactViewComponent.prototype.removeContact = function (id) {
        var _this = this;
        this.contactInfoService.deleteContact(id).subscribe(function (data) {
            _this.getContactInfo();
        }, //Bind to view
        function (//Bind to view
        err) {
            // Log errors if any
            console.log(err);
        });
    };
    ContactViewComponent.prototype.updateContact = function (id) {
        this.openDialog(id);
    };
    ContactViewComponent.prototype.openDialog = function (id) {
        var dialogRef = this.dialog.open(_edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EditContactDialogComponent"], {
            width: '700px',
            height: '300px',
            data: this.contactInfoService.getContactById(id)
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ContactViewComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ContactViewComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ContactViewComponent.prototype, "sort", void 0);
    ContactViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-view',
            template: __webpack_require__(/*! ./contact-view.component.html */ "./src/app/contact-view/contact-view.component.html"),
            styles: [__webpack_require__(/*! ./contact-view.component.css */ "./src/app/contact-view/contact-view.component.css")]
        }),
        __metadata("design:paramtypes", [_contactinfo_service__WEBPACK_IMPORTED_MODULE_2__["ContactinfoService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ContactViewComponent);
    return ContactViewComponent;
}());



/***/ }),

/***/ "./src/app/contactinfo.service.ts":
/*!****************************************!*\
  !*** ./src/app/contactinfo.service.ts ***!
  \****************************************/
/*! exports provided: ContactinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactinfoService", function() { return ContactinfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//All URL's for server
var endpoints = {
    contactList: "http://localhost:3000/api/v1/contactlist",
    contact: "http://localhost:3000/api/v1/contact"
};
var ContactinfoService = /** @class */ (function () {
    function ContactinfoService(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.updateListSrc = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('UpdateOperation');
        this.contactListObserver = this.updateListSrc.asObservable();
    }
    ContactinfoService.prototype.updateCompleted = function (msg) {
        this.updateListSrc.next(msg);
    };
    ContactinfoService.prototype.getContactInfo = function () {
        return this.http.get(endpoints.contactList, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    //update contact
    ContactinfoService.prototype.updateContactInfo = function (contactData) {
        return this.http.put(endpoints.contact, contactData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    //Add new contact
    ContactinfoService.prototype.addContact = function (contactData) {
        console.log(contactData);
        return this.http.post(endpoints.contact, contactData, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    //setContactInfo
    ContactinfoService.prototype.setContactInfo = function (contactData) {
        this.contactInfo = contactData;
    };
    //remove record
    ContactinfoService.prototype.deleteContact = function (id) {
        console.log("id", id);
        return this.http.delete(endpoints.contact + ("/" + id), this.options);
        //.pipe(
        //  map((res:Response)=>res.json()),
        // );
    };
    //Get Contact by id
    ContactinfoService.prototype.getContactById = function (id) {
        var foundContact;
        console.log(id);
        this.contactInfo.map(function (contactItem) {
            if (contactItem['_id']['$oid'] == id) {
                console.log(contactItem);
                foundContact = contactItem;
            }
        });
        return foundContact;
    };
    ContactinfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ContactinfoService);
    return ContactinfoService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container col-md-1\">\n    \n  <mat-tab-group color=\"primary\" backgroundColor=\"accent\">\n        <mat-tab label=\"Contact List\" >\n          <ng-template matTabContent>\n            <app-contact-view></app-contact-view>\n          </ng-template>\n        </mat-tab>\n        <mat-tab label=\"Add Contact\">\n          <ng-template matTabContent>            \n            <app-newcontact></app-newcontact>\n          </ng-template>\n        </mat-tab>\n      </mat-tab-group>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.listId = 'CONTACT_COMPONENT_LIST';
        this.editId = 'CONTACT_COMPONENT_EDIT';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit-contact-dialog/edit-contact-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/edit-contact-dialog/edit-contact-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-contact-dialog/edit-contact-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/edit-contact-dialog/edit-contact-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-dialog-container\">\n<h1 mat-dialog-title>Edit Contact</h1>\n<div mat-dialog-content>\n  <div class=\"edit-contact-container\">\n    <form [formGroup]=\"contactDetailsForm\">\n      <mat-form-field>\n        <input matInput placeholder=\"First Name\" formControlName=\"firstName\" >\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Email\" formControlName=\"email\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Contact No\" formControlName=\"contactNo\">\n      </mat-form-field>\n\n   <!--   <mat-form-field>\n        <input matInput placeholder=\"Department\" formControlName=\"department\">\n      </mat-form-field>-->\n      <mat-form-field>\n      <mat-select placeholder=\"Select\" formControlName=\"status\">\n        <mat-option value=\"active\">Active</mat-option>\n        <mat-option value=\"inactive\">Inactive</mat-option>\n      </mat-select>\n      </mat-form-field>\n      </form>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"data.name\" (click)=\"saveEditedContact(contactDetailsForm.value)\" cdkFocusInitial>Save</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/edit-contact-dialog/edit-contact-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/edit-contact-dialog/edit-contact-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditContactDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactDialogComponent", function() { return EditContactDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contactinfo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contactinfo.service */ "./src/app/contactinfo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_employee_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/employee.contact */ "./src/app/model/employee.contact.ts");
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





var EditContactDialogComponent = /** @class */ (function () {
    function EditContactDialogComponent(contactInfoService, dialogRef, data) {
        this.contactInfoService = contactInfoService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.firstName),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.lastName),
            contactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.contactNo),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.email),
            //   department: new FormControl(),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.status)
        });
        this.prevContactData = data;
    }
    EditContactDialogComponent_1 = EditContactDialogComponent;
    EditContactDialogComponent.prototype.ngOnInit = function () {
    };
    EditContactDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    //save edited data
    EditContactDialogComponent.prototype.saveEditedContact = function (contact) {
        var _this = this;
        console.log("Edited Contact:", contact);
        if (this.compareContactDetails(contact)) {
            contact._id = this.prevContactData._id;
            this.contactInfoService.updateContactInfo(contact).subscribe(function (data) {
                console.log("Update success:", data);
                _this.contactInfoService.updateCompleted(data);
            }, //Bind to view
            function (//Bind to view
            err) {
                // Log errors if any
                console.log(err);
            });
            ;
        }
        console.log("Record edited:" + this.compareContactDetails(contact));
    };
    //Check id object being edited
    EditContactDialogComponent.prototype.compareContactDetails = function (newContactData) {
        var editFlag = false;
        for (var key in this.prevContactData) {
            var result = "";
            if (this.prevContactData.hasOwnProperty(key) && key != '_id') {
                if (this.prevContactData[key] != newContactData[key]) {
                    editFlag = true;
                }
            }
        }
        return editFlag;
    };
    EditContactDialogComponent = EditContactDialogComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-contact-dialog',
            template: __webpack_require__(/*! ./edit-contact-dialog.component.html */ "./src/app/edit-contact-dialog/edit-contact-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-contact-dialog.component.css */ "./src/app/edit-contact-dialog/edit-contact-dialog.component.css")],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldControl"], useExisting: EditContactDialogComponent_1 }],
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_contactinfo_service__WEBPACK_IMPORTED_MODULE_1__["ContactinfoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _model_employee_contact__WEBPACK_IMPORTED_MODULE_4__["EmployeeContactData"]])
    ], EditContactDialogComponent);
    return EditContactDialogComponent;
    var EditContactDialogComponent_1;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container-login {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .container-login > * {\n    width: 100%;\n  }\n  \n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-login\">\n  <div class=\"card\">\n      <form [formGroup]=\"loginForm\">\n      <mat-form-field>\n          <input matInput placeholder=\"Username\" type=\"text\" class=\"example-right-align\" formControlName=\"username\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Enter your password\" [type]=\"password\" formControlName=\"password\">    </mat-form-field>\n        <div mat-dialog-actions>\n          <button mat-raised-button  (click)=\"authenticate(loginForm.value)\" [disabled]=\"!loginForm.valid\">Login</button>\n        </div>\n        </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        //  this.hide=true;
    }
    LoginComponent_1 = LoginComponent;
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    LoginComponent.prototype.authenticate = function (loginData) {
        var _this = this;
        console.log(loginData);
        this.loading = true;
        this.authService.login(loginData.username, loginData.password).subscribe(function (data) {
            console.log(data);
            if (data && data["token"]) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(data));
            }
            _this.authService.changeAuthStatus(true);
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            // this.alertService.error(error);
            console.log(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return "Incorrect EmailId";
    };
    LoginComponent = LoginComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldControl"], useExisting: LoginComponent_1 }],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
    var LoginComponent_1;
}());



/***/ }),

/***/ "./src/app/model/employee.contact.ts":
/*!*******************************************!*\
  !*** ./src/app/model/employee.contact.ts ***!
  \*******************************************/
/*! exports provided: EmployeeContactData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeContactData", function() { return EmployeeContactData; });
var EmployeeContactData = /** @class */ (function () {
    function EmployeeContactData(id, firstName, lastName, email, contactNo, status) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNo = contactNo;
        this.status = status;
    }
    return EmployeeContactData;
}());



/***/ }),

/***/ "./src/app/newcontact/newcontact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/newcontact/newcontact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: table;\n    flex-direction: column;\n  }\n  \n  .example-container > * {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/newcontact/newcontact.component.html":
/*!******************************************************!*\
  !*** ./src/app/newcontact/newcontact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-contact-container\">\n  <mat-card>\n    <mat-card-title>\n      Create New Contact\n    </mat-card-title>\n    <mat-card-content>\n      <div class=\"example-container\">\n        <form [formGroup]=\"contactDetailsForm\">\n          <mat-form-field>\n            <input matInput placeholder=\"First Name\" formControlName=\"firstName\" >\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Email\" formControlName=\"email\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Contact No\" formControlName=\"contactNo\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Department\" formControlName=\"department\">\n          </mat-form-field>\n          <mat-form-field>\n          <mat-select placeholder=\"Select\" formControlName=\"status\">\n            <mat-option value=\"active\">Active</mat-option>\n            <mat-option value=\"inactive\">Inactive</mat-option>\n          </mat-select>\n          </mat-form-field>\n          </form>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"contactDetailsForm.reset()\">\n        Clear\n      </button>\n      <button mat-raised-button (click)=\"addContact(contactDetailsForm.value)\" [disabled]=\"!contactDetailsForm.valid\">\n        Save\n      </button>\n    </mat-card-actions>\n    <mat-card-footer>\n      Contact Added Successfully\n    </mat-card-footer>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/newcontact/newcontact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newcontact/newcontact.component.ts ***!
  \****************************************************/
/*! exports provided: NewcontactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcontactComponent", function() { return NewcontactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contactinfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contactinfo.service */ "./src/app/contactinfo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewcontactComponent = /** @class */ (function () {
    function NewcontactComponent(contactInfoService, snackBar) {
        this.contactInfoService = contactInfoService;
        this.snackBar = snackBar;
        this.contactDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]),
            contactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    NewcontactComponent.prototype.ngOnInit = function () {
    };
    NewcontactComponent.prototype.addContact = function (newContact) {
        var _this = this;
        console.log(this.contactDetailsForm);
        this.contactInfoService.addContact(newContact).subscribe(function (res) {
            _this.openSnackBar("New Contact Added", "OK");
            console.log(res);
        });
    };
    NewcontactComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    NewcontactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newcontact',
            template: __webpack_require__(/*! ./newcontact.component.html */ "./src/app/newcontact/newcontact.component.html"),
            styles: [__webpack_require__(/*! ./newcontact.component.css */ "./src/app/newcontact/newcontact.component.css")]
        }),
        __metadata("design:paramtypes", [_contactinfo_service__WEBPACK_IMPORTED_MODULE_2__["ContactinfoService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], NewcontactComponent);
    return NewcontactComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
//import './polyfills';




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/personal files /contact-manager/contact-manager-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map