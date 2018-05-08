webpackJsonp([0],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, toastCtrl, menuCtrl, navParams, alertCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.emailId = { email: '' };
        this.otpvalue = { userMailId: '', otp: '', };
        this.submitted = false;
    }
    ForgotpasswordPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    ForgotpasswordPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    ForgotpasswordPage.prototype.forgotPassword = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'sending otp in your mailId...'
            });
            loading_1.present();
            this._setupService.forgotPassword(this.emailId).subscribe(function (response) {
                if (response.statusCode == 200) {
                    _this.responseData = response;
                    loading_1.dismiss();
                    localStorage.setItem('ResponseData', JSON.stringify(response));
                    var toast = _this.toastCtrl.create({
                        message: 'OTP sent to your email id',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    var prompt_1 = _this.alertCtrl.create({
                        title: 'One Time Password',
                        inputs: [
                            {
                                name: 'otp',
                                type: 'password',
                                placeholder: 'One Time Password'
                            }
                        ],
                        buttons: [
                            {
                                text: 'Cancel',
                                handler: function (data) {
                                }
                            },
                            {
                                text: 'submit',
                                handler: function (data) {
                                    var loading = _this.loadingCtrl.create({
                                        content: 'verifying otp...'
                                    });
                                    loading.present();
                                    _this._setupService.forgotPasswordOTP({ "userMailId": response.userMailId, "otp": data.otp
                                    }).subscribe(function (response) {
                                        if (response.statusCode == 200) {
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword__["a" /* ChangepasswordPage */]);
                                            loading.dismiss();
                                        }
                                        else {
                                            var toast_1 = _this.toastCtrl.create({
                                                message: response.message,
                                                showCloseButton: true,
                                                closeButtonText: 'Ok',
                                                duration: 5000
                                            });
                                            toast_1.present();
                                            loading.dismiss();
                                        }
                                    });
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    prompt_1.present();
                }
                else {
                    _this.responseData = response;
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    loading_1.dismiss();
                }
            });
        }
    };
    ForgotpasswordPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotpasswordPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\forgotpassword\forgotpassword.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Forgot Password</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	\n\n\n\n	<form #forgotPasswordForm="ngForm" novalidate>\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked class="button-color">Email id</ion-label>\n\n				<ion-input [(ngModel)]="emailId.userMailId" placeholder="enter userMailId" name="userMailId" type="text" #userMailId="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="userMailId.valid || submitted == false" color="danger" padding-left>\n\n				userMailId is required\n\n			</p>\n\n		</ion-list>\n\n    <ion-row responsive-sm>\n\n          <ion-col>\n\n				<button class="button-backcolor" ion-button (click)="forgotPassword(forgotPasswordForm)" type="submit" block>Submit</button>\n\n			</ion-col>\n\n	</ion-row> \n\n		\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sails_io_js__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sails_io_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sails_io_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { UserData } from '../../providers/user-data';



/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(ngZone, toastCtrl, geolocation, navCtrl, platform, events, navParams, _setupService) {
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.events = events;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.io = __WEBPACK_IMPORTED_MODULE_5_sails_io_js__(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__); //375-384 sails.io.js in nodemodule
        this.submitted = false;
        this.location = { email: '', lat: '', long: '' };
        this.userEmail = { email: '' };
        this.btcValue = { email: '', buyRate: '', currencyType: '', volume: '', sellRate: '' };
        this.inrValue = { email: '', buyRate: '', currencyType: '', volume: '', sellRate: '' };
        this.io.sails.url = 'http://localhost:1337';
        this.userdata();
        this.getCurrencyPrice();
        this.getCurrentPosition();
        this.getTradersSetValue();
    }
    DashboardPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        //  alert("user = = ="+this.user);
        console.log(this.user.user.email);
        if (this.user != null || this.user != undefined) {
            this.userEmail.email = this.user.user.email;
            this.events.publish("shareObject", this.userEmail.email);
        }
    };
    DashboardPage.prototype.getCurrencyPrice = function () {
        var _this = this;
        this._setupService.getBuydata().subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.cexdata = response.data.cex.bid;
                _this.zebPayData = response.data.zeb.buy;
            }
        });
    };
    // get current position
    DashboardPage.prototype.getCurrentPosition = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 3600,
                timeout: 10000
            };
            _this.geolocation.getCurrentPosition(options).then(function (response) {
                _this.location.lat = response.coords.latitude;
                _this.location.long = response.coords.longitude;
                _this.location.email = _this.userEmail.email;
                _this._setupService.sentLocation(_this.location).subscribe(function (response) {
                });
            }).catch(function (error) {
            });
        });
    };
    //get traders updated values
    DashboardPage.prototype.getTradersSetValue = function () {
        var _this = this;
        this._setupService.getTraderInfo(this.userEmail).subscribe(function (response) {
            if (response.data != null) {
                for (var i = 0; i < response.data.length; i++) {
                    switch (response.data[i].currencyType) {
                        case "INRW":
                            _this.inrValue.buyRate = response.data[i].buyRate;
                            _this.inrValue.sellRate = response.data[i].sellRate;
                            _this.inrValue.volume = response.data[i].volume;
                            break;
                        case "BTC":
                            _this.btcValue.buyRate = response.data[i].buyRate;
                            _this.btcValue.sellRate = response.data[i].sellRate;
                            _this.btcValue.volume = response.data[i].volume;
                            break;
                        default:
                            // code...
                            break;
                    }
                }
            }
        });
    };
    // update BTC values
    DashboardPage.prototype.updateBTC = function (form) {
        this.btcValue.currencyType = "BTC";
        this.btcValue.email = this.userEmail.email;
        this.submitted = true;
        var ngZ = this.ngZone;
        var event = this.events;
        if (form.valid) {
            this.io.socket.post('/trader/buySellUpdate', this.btcValue, function (data, response) {
                ngZ.run(function () {
                    event.publish("ShareResponse", response);
                });
            });
            this.listenToDataChangeEvents();
        }
    };
    // update INR values
    DashboardPage.prototype.updateINR = function (form) {
        this.inrValue.currencyType = "INRW";
        this.inrValue.email = this.userEmail.email;
        this.submitted = true;
        var ngZ = this.ngZone;
        var event = this.events;
        if (form.valid) {
            this.io.socket.post('/trader/buySellUpdate', this.inrValue, function (data, response) {
                ngZ.run(function () {
                    event.publish("ShareResponse", response);
                });
            });
            this.listenToDataChangeEvents();
        }
    };
    DashboardPage.prototype.listenToDataChangeEvents = function () {
        var _this = this;
        this.events.subscribe('ShareResponse', function (res) {
            var toast = _this.toastCtrl.create({
                message: res.body.message,
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 2000
            });
            toast.present();
        });
    };
    DashboardPage.prototype.ionViewWillLeave = function () {
        this.io.socket.disconnect();
        delete this.io.sails;
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\dashboard\dashboard.html"*/'<!--\n\n  Generated template for the DashboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Dashboard</ion-title>\n\n   </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n \n\n\n\n<ion-content padding>\n\n  <ion-icon  name="Walllet"></ion-icon>\n\n  <h3 align="center">Coin Walllet</h3>\n\n    \n\n    <div>\n\n      <p align="center">$374.58358000</p>\n\n    </div>\n\n  <br />\n\n   <form #btcForm="ngForm" novalidate>\n\n     <ion-label >\n\n      <ion-row >  \n\n    <ion-col col-6>\n\n        <b><span>BTC VOL:</span></b>\n\n    </ion-col>\n\n     <ion-col col-6>{{cexdata}}</ion-col>\n\n  </ion-row>\n\n  \n\n   <ion-row>\n\n    <ion-col col-6>\n\n      <b><span>STX VOL:</span></b></ion-col>\n\n     <ion-col col-6>{{zebPayData}}</ion-col>\n\n  </ion-row> \n\n</ion-label>  \n\n    <ion-grid>\n\n<ion-card>\n\n  <ion-card-content>\n\n    <ion-row> <h3 class="text_Color" style="margin-top: 2px"><strong>BTC</strong></h3></ion-row>\n\n          <ion-row no-lines class="form-input-fields">\n\n            <ion-col col-4>\n\n\n\n          <ion-input [(ngModel)]="btcValue.buyRate"  placeholder="buy" name="buyRate" type="text" #buyRate="ngModel" spellcheck="false" autocapitalize="off" class="login-input" >\n\n        </ion-input>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n         <ion-input [(ngModel)]="btcValue.sellRate" placeholder="sell" name="sellRate" type="text" #sellRate="ngModel"  class="login-input" >\n\n        </ion-input>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n            <ion-input [(ngModel)]="btcValue.volume" placeholder="volume" name="volume" type="text" #volume="ngModel"  class="login-input" >\n\n        </ion-input>\n\n            </ion-col>\n\n         </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n       <br><br>\n\n    </ion-grid>\n\n </form>\n\n     \n\n\n\n\n\n    <form #inrForm="ngForm" novalidate>\n\n          <ion-grid>\n\n  <ion-card>\n\n  <ion-card-content>\n\n         <ion-row> <ion-row> <h3 class="text_Color" style="margin-top: 5px"><strong>ETH</strong></h3></ion-row></ion-row>\n\n          <ion-row no-lines class="form-input-fields">\n\n            <ion-col col-4>\n\n          <ion-input [(ngModel)]="inrValue.buyRate"  placeholder="buy"name="buyRate" type="text" #buyRate="ngModel" spellcheck="false" autocapitalize="off" class="login-input" >\n\n        </ion-input>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n         <ion-input [(ngModel)]="inrValue.sellRate" placeholder="sell" name="sellRate" type="text" #sellRate="ngModel"  class="login-input" >\n\n        </ion-input>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n            <ion-input [(ngModel)]="inrValue.volume" placeholder="volume" name="volume" type="text" #volume="ngModel"  class="login-input" >\n\n        </ion-input>\n\n            </ion-col>\n\n         </ion-row>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n      </ion-grid>\n\n    \n\n\n\n  </form>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SetupService = (function () {
    function SetupService(http) {
        this.http = http;
        // endpoint_url : string = 'http://198.187.28.200:3000';
        this.helppoint_url = 'http://localhost:1337';
        this.http = http;
        console.log('Hello ServicesProvider Provider');
    }
    //create new user account
    SetupService.prototype.createUserAccount = function (SignUpDetail) {
        var response = this.http.post(this.helppoint_url + '/user/createNewUser', SignUpDetail).map(function (res) { return res.json(); });
        return response;
    };
    // verify email
    SetupService.prototype.VerificationEmail = function (otpDetail) {
        var response = this.http.post(this.helppoint_url + '/user/verifyEmailAddress', otpDetail).map(function (res) { return res.json(); });
        return response;
    };
    //sent Otp To Email Verificatation
    SetupService.prototype.EmailVerifyforAccount = function (userMailId) {
        var response = this.http.post(this.helppoint_url + '/user/verifyOtpToEmailForgotPassord', userMailId).map(function (res) { return res.json(); });
        return response;
    };
    // create login
    SetupService.prototype.createLoginDetail = function (loginDetail) {
        var response = this.http.post(this.helppoint_url + '/user/login', loginDetail).map(function (res) { return res.json(); });
        return response;
    };
    // help page
    SetupService.prototype.createHelpDetail = function (helpdetails) {
        var response = this.http.post(this.helppoint_url + '/help/helpUser', helpdetails).map(function (res) { return res.json(); });
        return response;
    };
    // walllet page
    SetupService.prototype.createWalletDetail = function (email) {
        var response = this.http.post(this.helppoint_url + '/coin/getBalBCH', email).map(function (res) { return res.json(); });
        return response;
    };
    //Address details
    SetupService.prototype.createAddressDetail = function (email) {
        var response = this.http.post(this.helppoint_url + '/coin/getNewBCHAddress', email).map(function (res) { return res.json(); });
        return response;
    };
    // for date details
    SetupService.prototype.createTransactionDetail = function (email) {
        var response = this.http.post(this.helppoint_url + '/coin/getTxsListBCH', email).map(function (res) { return res.json(); });
        return response;
    };
    // for send page
    SetupService.prototype.createSendDetail = function (senddetails) {
        var response = this.http.post(this.helppoint_url + '/coin/sendBCH', senddetails).map(function (res) { return res.json(); });
        return response;
    };
    // update current passeword
    SetupService.prototype.changecurrentpasswords = function (passwordValues) {
        var response = this.http.post(this.helppoint_url + '/user/updateCurrentPassword', passwordValues).map(function (res) { return res.json(); });
        return response;
    };
    // change current spending password
    SetupService.prototype.changecurrentspepasswords = function (passwordValues1) {
        var response = this.http.post(this.helppoint_url + '/user/updateCurrentSpendingPassword', passwordValues1).map(function (res) { return res.json(); });
        return response;
    };
    // update current location
    SetupService.prototype.sentLocation = function (position) {
        var response = this.http.post(this.helppoint_url + '/trader/updatelocation', position).map(function (res) { return res.json(); });
        return response;
    };
    // get buy data
    SetupService.prototype.getBuydata = function () {
        var response = this.http.get(this.helppoint_url + '/trader/getRates').map(function (res) { return res.json(); });
        return response;
    };
    //update price
    SetupService.prototype.updateprice = function (values) {
        var response = this.http.post(this.helppoint_url + '/trader/buysellupdate', values).map(function (res) { return res.json(); });
        return response;
    };
    //update  Acceptance
    SetupService.prototype.updateAcceptance = function (userId) {
        var response = this.http.get(this.helppoint_url + '/chat/updateAcceptance', userId).map(function (res) { return res.json(); });
        return response;
    };
    // get chat messages
    SetupService.prototype.getChatMessages = function (chatId) {
        var response = this.http.post(this.helppoint_url + '/chat/getChatMessages', chatId).map(function (res) { return res.json(); });
        return response;
    };
    //send message to traders
    SetupService.prototype.sendMessage = function (messageDetail) {
        var response = this.http.post(this.helppoint_url + '/chat/sendMessage', messageDetail).map(function (res) { return res.json(); });
        return response;
    };
    //get friends list
    SetupService.prototype.getfrienlist = function (emailId) {
        var response = this.http.post(this.helppoint_url + '/chat/getTradersForUser', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getUserChats = function (emailId) {
        var response = this.http.get(this.helppoint_url + '/chat/getUserChats', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPassword = function (userMailId) {
        var response = this.http.post(this.helppoint_url + '/user/sentOtpToEmailForgotPassword', userMailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPasswordOTP = function (otp) {
        var response = this.http.post(this.helppoint_url + '/user/verifyOtpToEmailForgotPassord', otp).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.updateForgotPassord = function (newpasswordvalues) {
        var response = this.http.post(this.helppoint_url + '/trader/updateForgotPassordAfterVerify', newpasswordvalues).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.acceptRequest = function (data) {
        var response = this.http.post(this.helppoint_url + '/chat/updateAcceptance', data).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.rejectRequest = function (data) {
        var response = this.http.post(this.helppoint_url + '/chat/updateAcceptance', data).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getTraderInfo = function (emailId) {
        var response = this.http.post(this.helppoint_url + '/trader/getTraderInfo1', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SetupService);
    return SetupService;
}());

//# sourceMappingURL=setup.services.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_SENDDED_IN = 'hasSenddedIn';
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.HAS_ADDED_IN = 'hasAddedIn';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.help = function (subject) {
        this.storage.set(this.HAS_SENDDED_IN, true);
        this.setSubject(subject);
        this.events.publish('subject:help');
    };
    ;
    UserData.prototype.walllet = function (coin) {
        this.storage.set(this.HAS_ADDED_IN, true);
        this.setCoin(coin);
        this.events.publish('coin:wallet');
    };
    ;
    UserData.prototype.send = function (address) {
        this.storage.set(this.HAS_SENDDED_IN, true);
        this.setSubject(address);
        this.events.publish('address:send');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setSubject(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.logoutS = function () {
        this.storage.remove(this.HAS_SENDDED_IN);
        this.storage.remove('subject');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.logoutW = function () {
        this.storage.remove(this.HAS_ADDED_IN);
        this.storage.remove('coin');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.setSubject = function (subject) {
        this.storage.set('subject', subject);
    };
    ;
    UserData.prototype.setCoin = function (coin) {
        this.storage.set('coin', coin);
    };
    ;
    UserData.prototype.setsend = function (send) {
        this.storage.set('send', send);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.getSubject = function () {
        return this.storage.get('subject').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.getCoin = function () {
        return this.storage.get('coin').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.hasSenddedIn = function () {
        return this.storage.get(this.HAS_SENDDED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.hasAddedIn = function () {
        return this.storage.get(this.HAS_ADDED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TutorialPage = (function () {
    function TutorialPage(userData, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl, menu, storage) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
        this.login1 = { username: '', password: '' };
        this.loginDetail = { email: '', password: '', ip: '123344', lat: '', long: '' };
        this.submitted = false;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.loginDetail.lat = position.coords.latitude;
                _this.loginDetail.long = position.coords.longitude;
            });
        }
    };
    TutorialPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
        this.storage.set('hasSeenTutorial', 'true');
    };
    TutorialPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
        this.storage.set('hasSeenTutorial', 'true');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\tutorial\tutorial.html"*/'<ion-content no-bounce>\n\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n\n      <img src="assets/img/welcome-1.jpg"  style="width: 100%;height: 100%" />\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/welcome-2.jpg" style="width: 100%;height: 100%" />\n\n    <div style="position: fixed;z-index: 1;margin-top: -45px;margin-left:323px;color: #000000" (click)="startApp()">\n\n         Next &nbsp;<ion-icon name="arrow-forward"  ></ion-icon>\n\n       </div>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, toastCtrl, menuCtrl, alertCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.submitted = false;
        this.newPasswordvalue = { userMailId: '', newPassword: '', confirmNewPassword: '' };
        this.userdata();
    }
    ChangepasswordPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('ResponseData'));
        this.newPasswordvalue.userMailId = this.user.userMailId;
    };
    ChangepasswordPage.prototype.changecurrentPassword = function (form) {
        var _this = this;
        // alert("this.newPasswordvalue "+this.newPasswordvalue.userMailId);
        //     alert("this.newPasswordvalue "+this.newPasswordvalue.newPassword);
        //         alert("this.newPasswordvalue "+this.newPasswordvalue.confirmNewPassword);
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'updating current password...'
            });
            loading_1.present();
            this._setupService.updateForgotPassord(this.newPasswordvalue).subscribe(function (response) {
                if (response.statusCode == 200) {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Password update successfully',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                }
                else {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: response.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\changepassword\changepassword.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Change Password</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-page">\n\n\n\n	\n\n\n\n	<form #changePasswordForm="ngForm" novalidate>\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">New Password</ion-label>\n\n				<ion-input [(ngModel)]="newPasswordvalue.newPassword" placeholder="enter new password"name="fullName" type="text" #fullName="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="fullName.valid || submitted == false" color="danger" padding-left>\n\n				new password is required\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Confirm New Password</ion-label>\n\n				<ion-input [(ngModel)]="newPasswordvalue.confirmNewPassword" placeholder="enter confirm new password" name="password" type="password" #password="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n				confirm new password is required\n\n			</p>\n\n		</ion-list>\n\n		<div padding>\n\n			<button ion-button (click)="changecurrentPassword(changePasswordForm)" type="submit" block>submit</button>\n\n		</div>\n\n	</form>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatuserlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chatroom_chatroom__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatuserlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatuserlistPage = (function () {
    function ChatuserlistPage(geolocation, _setupService, navCtrl, navParams, platform) {
        var _this = this;
        this.geolocation = geolocation;
        this._setupService = _setupService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.userData = [];
        this.nickname = '';
        this.UserId = { email: '' };
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.userdata();
        this.getFriendList();
    }
    ChatuserlistPage.prototype.getFriendList = function () {
        var _this = this;
        this._setupService.getfrienlist({ email: this.UserId.email }).subscribe(function (response) {
            if (response.data.length > 0) {
                var sortData = response.data.sort(function (a, b) {
                    var keyA = a.isAccepted, keyB = b.isAccepted;
                    if (keyA < keyB)
                        return -1;
                    if (keyA > keyB)
                        return 1;
                    return 0;
                });
                _this.friendList = sortData;
                console.log("this.friendList = = " + JSON.stringify(_this.friendList));
            }
        });
    };
    ChatuserlistPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.UserId.email = this.user.trader.email;
        }
    };
    ChatuserlistPage.prototype.openChat = function (senderEmail, receiverEmail, chatId) {
        console.log("receiverEmail = = " + receiverEmail);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_chatroom_chatroom__["a" /* ChatroomPage */], { sender: receiverEmail, receiver: senderEmail, chatId: chatId });
    };
    ChatuserlistPage.prototype.joinChat = function () {
        this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
    };
    ChatuserlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 3600,
                timeout: 10000
            };
            _this.geolocation.getCurrentPosition(options).then(function (response) {
                _this.latitude = response.coords.latitude;
                _this.longitude = response.coords.longitude;
                _this.zoom = 16;
            }).catch(function (error) {
            });
        });
    };
    //Kunvar singh ---Date : 8th Jan, 2018
    ChatuserlistPage.prototype.acceptRequestByTrader = function (chatId) {
        var _this = this;
        var accept = true;
        this._setupService.acceptRequest({ isAccepted: accept, chatId: chatId }).subscribe(function (response) {
            if (response) {
                _this.getFriendList();
            }
        });
    };
    ChatuserlistPage.prototype.rejectRequestByTrader = function (chatId) {
        var _this = this;
        var reject = true;
        this._setupService.rejectRequest({ isRejected: reject, chatId: chatId }).subscribe(function (response) {
            if (response) {
                _this.getFriendList();
            }
        });
    };
    ChatuserlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatuserlist',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\chatuserlist\chatuserlist.html"*/'\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>User List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n<div *ngFor="let friend of friendList" class="row chat-all">\n\n	<div class="col-12" *ngIf="friend.isAccepted === true">\n\n		 <span class="chat-user" (click)="openChat(friend.sender,friend.recipient,friend.chatId)">{{friend.sender}}</span>\n\n  </div>&nbsp;\n\n	  <div *ngIf="friend.isAccepted === false"  class="row ">\n\n	  	<div class="col-sm-9">\n\n	     	<span class="chat-user">{{friend.sender}}</span>\n\n	  	</div>\n\n			 	<div class="col col-6"><button class="button-backcolor" ion-button  type="submit"  (click)="acceptRequestByTrader(friend.chatId)" >Accept</button>\n\n			 	</div>\n\n			 	<div  class="col col-6">\n\n			 	 <button class="button-backcolor"  ion-button  type="submit" (click)="rejectRequestByTrader(friend.chatId)"  >Reject</button></div>\n\n	\n\n	</div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\chatuserlist\chatuserlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], ChatuserlistPage);
    return ChatuserlistPage;
}());

//# sourceMappingURL=chatuserlist.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sails_io_js__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sails_io_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sails_io_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatroomPage = (function () {
    function ChatroomPage(ngZone, events, platform, navCtrl, navParams, _setupService) {
        // debugger;  
        var _this = this;
        this.ngZone = ngZone;
        this.events = events;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.nickname = '';
        this.chatId = '';
        this.io = __WEBPACK_IMPORTED_MODULE_4_sails_io_js__(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
        this.messageDetails = { sender: '', recipient: '', content: '', chatId: '' };
        this.messages = [];
        this.UserId = { email: '' };
        this.chatid = {
            "chatId": ""
        };
        this.myInfo = this.messages[0];
        // this.io.sails.url = this._setupService.endpoint_url;
        this.io.sails.url = 'http://localhost:1337';
        this.userdata();
        this.messageDetails.sender = this.UserId.email;
        this.nickname = this.messageDetails.sender;
        console.log("this.nickname" + this.nickname);
        this.messageDetails.recipient = this.navParams.get('receiver');
        this.messageDetails.chatId = this.navParams.get('chatId');
        this.chatid.chatId = this.messageDetails.chatId;
        console.log("this.chatid.chatId" + this.chatid.chatId);
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        var ngZ = this.ngZone;
        var event = this.events;
        // create connection between user based on chat id 
        this.io.socket.get('/chat/sendMessage', { chatId: this.messageDetails.chatId }, function (data, response) {
        });
        // get old message based on chat id
        this._setupService.getChatMessages({ chatId: this.messageDetails.chatId }).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.messages = response.data;
            }
            else {
            }
        });
        // event listner when any events brodcast messages
        this.io.socket.on('NEWMESSAGE', function (respons) {
            var _this = this;
            console.log("this.messages.content " + respons);
            ngZ.run(function () {
                _this.messages = respons.data;
                event.publish("sharemessage", _this.messages);
            });
        });
        //   this._setupService.getOldMessage().subscribe((response)=>{
        //   this.messages=response.data;    
        // })
        this.listenToDataChangeEvents();
    }
    ChatroomPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.UserId.email = this.user.trader.email;
        }
    };
    ChatroomPage.prototype.listenToDataChangeEvents = function () {
        var _this = this;
        this.events.subscribe('sharemessage', function (userData) {
            _this.messages.push(userData);
            _this.userContent = '';
        });
    };
    ChatroomPage.prototype.sendMessage = function () {
        this.messageDetails.content = this.userContent;
        console.log("this.messageDetails.content = = " + this.messageDetails.content);
        this.io.socket.post('/chat/sendMessage', this.messageDetails, function (data, response) {
            console.log("response  = = " + JSON.stringify(response));
        });
    };
    ChatroomPage.prototype.ionViewWillLeave = function () {
        this.io.socket.disconnect();
        delete this.io.sails;
    };
    ChatroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-room',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\chatroom\chatroom.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{messageDetails.recipient}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row *ngFor="let message of messages "> \n\n \n\n\n\n\n\n      <ion-col offset-3 col-9 *ngIf="message.sender !== nickname" class="message" [ngClass]="{\'my_message\': message.sender === nickname, \'other_message\': message.sender !== nickname}">\n\n        <span class="user_name">{{ message.sender }}</span><br>\n\n        <span>{{ message.content }}</span>\n\n      <div class="time">{{message.createdAt | date:\'hh:MM\'}}</div> \n\n      </ion-col>\n\n      <ion-col col-9 *ngIf="message.sender === nickname" class="message" [ngClass]="{\'my_message\': message.sender === nickname, \'other_message\': message.sender !== nickname}">\n\n        <span class="user_name">{{ message.sender }}</span><br>\n\n        <span>{{ message.content }}</span>\n\n   <div class="time">{{message.createdAt | date:\'hh:MM\'}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-row class="message_row">\n\n      <ion-col col-9>\n\n        <ion-item no-lines>\n\n          <ion-input type="text" placeholder="type your message here..." [(ngModel)]="userContent"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <button ion-button clear class="button-color" (click)="sendMessage()" [disabled]="userContent ==\'\'">\n\n        Send\n\n      </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\chatroom\chatroom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */]])
    ], ChatroomPage);
    return ChatroomPage;
}());

//# sourceMappingURL=chatroom.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { DashboardPage } from '../dashboard/dashboard';


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, alertCtrl, toastCtrl, _setupService, loadingCtrl, userData, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.userData = userData;
        this.platform = platform;
        this.pet = "puppies";
        this.isAndroid = false;
        this.submitted = false;
        this.verifyEmail = false;
        this.userEmail = { email: '' };
        this.passwordValues = { "userMailId": "", "currentPassword": "", "newPassword": "", "confirmNewPassword": "" };
        this.passwordValues1 = { "userMailId": "", "currentSpendingPassword": "", "newSpendingPassword": "", "confirmNewPassword": "" };
        this.isAndroid = platform.is('android');
        var user = JSON.parse(localStorage.getItem('logindetail'));
        this.email = user.user.email;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    SettingPage_1 = SettingPage;
    SettingPage.prototype.changeCurrentPassword = function (Form) {
        var _this = this;
        this.passwordValues.userMailId = this.email;
        if (Form.valid) {
            this.userData.send(this.userEmail.email);
            var loading_1 = this.loadingCtrl.create({
                content: 'update password...'
            });
            loading_1.present();
            this._setupService.changecurrentpasswords(this.passwordValues).subscribe(function (result) {
                console.log(_this.passwordValues);
                if (result.statusCode == 200) {
                    // this.responseData = result;
                    console.log("update password completed");
                    var toast = _this.toastCtrl.create({
                        message: 'update password successfully completed',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    //      let prompt = this.alertCtrl.create({
                    //     message: 'update password successfully completed'
                    //
                    // });
                    loading_1.dismiss();
                    _this.navCtrl.setRoot(SettingPage_1);
                }
                else {
                    // /this.responseData = result;
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: _this.response.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    SettingPage.prototype.changespendingPassword = function (Form) {
        var _this = this;
        this.passwordValues1.userMailId = this.email;
        if (Form.valid) {
            this.userData.send(this.userEmail.email);
            var loading_2 = this.loadingCtrl.create({
                content: 'update password...'
            });
            loading_2.present();
            this._setupService.changecurrentspepasswords(this.passwordValues1).subscribe(function (result) {
                console.log(_this.passwordValues1);
                if (result.statusCode == 200) {
                    _this.response = result;
                    console.log("update password completed");
                    var toast = _this.toastCtrl.create({
                        message: 'update password successfully completed',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    //      let prompt = this.alertCtrl.create({
                    //     message: 'update password successfully completed'
                    //
                    // });
                    loading_2.dismiss();
                    _this.navCtrl.setRoot(SettingPage_1);
                }
                else {
                    _this.response = result;
                    loading_2.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: _this.response.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    SettingPage = SettingPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\setting\setting.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n  	 <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<!-- /////////////////////////////////////////// -->\n\n\n\n\n\n  <br><br><br><br>\n\n  <ion-toolbar [color]="currentColor">\n\n    <ion-segment [(ngModel)]="pet">\n\n      <ion-segment-button value="puppies">Password\n\n      </ion-segment-button>\n\n      <ion-segment-button value="kittens">\n\n        SpendingPassword\n\n      </ion-segment-button>\n\n     </ion-segment>\n\n  </ion-toolbar>\n\n\n\n\n\n\n\n  <ion-content padding>\n\n       <form #pForm="ngForm" novalidate>\n\n        <ion-list no-lines class="form-input-fields">\n\n\n\n  <div [ngSwitch]="pet">\n\n    <ion-list *ngSwitchCase="\'puppies\'">\n\n\n\n<br><br><br><br>\n\n      <ion-item>\n\n       <ion-input [(ngModel)]="passwordValues.currentPassword" placeholder="Enter Current Password" name="currentPassword" type="password" #currentPassword="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n       <p ion-text [hidden]="currentPassword.valid || submitted == false" color="danger" padding-left>\n\n       currentPassword is required\n\n      </p>\n\n\n\n      <ion-item>\n\n      <ion-input [(ngModel)]="passwordValues.newPassword" placeholder="Enter New Password" name="newPassword" type="password" #newPassword="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p ion-text [hidden]="newPassword.valid || submitted == false" color="danger" padding-left>\n\n        newPassword is required\n\n      </p>\n\n\n\n      <ion-item>\n\n      <ion-input [(ngModel)]="passwordValues.confirmNewPassword" placeholder="Enter Confirm Password" name="confirmNewPassword" type="password" #confirmNewPassword="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p ion-text [hidden]="confirmNewPassword.valid || submitted == false" color="danger" padding-left>\n\n       confirmNewPassword is required\n\n      </p>\n\n\n\n      <ion-row responsive-sm>\n\n        <ion-col >\n\n          <button class="button-backcolor" ion-button (click)="changeCurrentPassword(pForm)" type="submit" block>Submit</button>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n\n\n</div></ion-list></form>\n\n\n\n        <form #psForm="ngForm" novalidate>\n\n        <ion-list no-lines class="form-input-fields">\n\n        <div [ngSwitch]="pet">\n\n       <ion-list *ngSwitchCase="\'kittens\'">\n\n\n\n     <br><br><br><br>\n\n      <ion-item>\n\n      <ion-input [(ngModel)]="passwordValues1.currentSpendingPassword" placeholder="Enter currentSpendingPassword" name="currentSpendingPassword" type="password" #currentSpendingPassword="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n       <p ion-text [hidden]="currentSpendingPassword.valid || submitted == false" color="danger" padding-left>\n\n       currentSpendingPassword is required\n\n      </p>\n\n\n\n     <ion-item>\n\n      <ion-input [(ngModel)]="passwordValues1.newSpendingPassword" placeholder="Enter newSpendingPassword" name="newSpendingPassword" type="password" #newSpendingPassword="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p ion-text [hidden]="newSpendingPassword.valid || submitted == false" color="danger" padding-left>\n\n        newSpendingPassword is required\n\n      </p>\n\n\n\n     <ion-item>\n\n      <ion-input [(ngModel)]="passwordValues1.confirmNewPassword" placeholder="Enter confirmSpendingPassword" name="confirmNewPassword" type="password" #confirmNewPassword="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p ion-text [hidden]="confirmNewPassword.valid || submitted == false" color="danger" padding-left>\n\n       confirmSpendingPassword is required\n\n      </p>\n\n\n\n      <button class="button-backcolor" ion-button (click)="changespendingPassword(psForm)" type="submit" block>Submit</button>\n\n</ion-list>\n\n</div>\n\n</ion-list>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], SettingPage);
    return SettingPage;
    var SettingPage_1;
}());

//  changespendingPassword(Form: NgForm){
//   this.passwordValues.userMailId=this.email;
//   this.submitted = true;
//   if (Form.valid) {
//        this.userData.send(this.userEmail.email);
//
//
//
//      this._setupService.changecurrentspendingpasswords(this.passwordValues1).subscribe((result) => {
//
//          console.log(this.passwordValues1);
//           if(result.statusCode== 200){
//
//               // localStorage.setItem('senddetails',JSON.stringify(this.responseData));
//               // this.user=JSON.parse(localStorage.getItem('senddetails'));
//
//
//       }
//     });
//     }
// }
//
// }
//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
// import { SignupPage } from '../signup/signup';
// import { DashboardPage } from '../dashboard/dashboard';

var HelpPage = (function () {
    function HelpPage(userData, navCtrl, 
        // public events: Events,
        menuCtrl, navParams, _setupService, alertCtrl, toastCtrl, loadingCtrl, platform) {
        var _this = this;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.submitted = false;
        this.help = { subject: '', message: '' };
        this.helpdetails = { subject: '', message: '' };
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    HelpPage_1 = HelpPage;
    HelpPage.prototype.onsend = function (Form) {
        var _this = this;
        this.submitted = true;
        if (Form.valid) {
            this.userData.help(this.help.subject);
            var loading_1 = this.loadingCtrl.create({
                content: 'Sending feedback...'
            });
            loading_1.present();
            this._setupService.createHelpDetail(this.helpdetails).subscribe(function (result) {
                console.log(result);
                if (result.statusCode == 200) {
                    if (result.statusCode == 200) {
                        _this.responseData = result;
                        console.log("feeedback send");
                        var toast = _this.toastCtrl.create({
                            message: 'feedback send completely',
                            showCloseButton: true,
                            closeButtonText: 'Ok',
                            duration: 5000
                        });
                        toast.present();
                        //      let prompt = this.alertCtrl.create({
                        //     message: 'feedback send completely'
                        //
                        // });
                        loading_1.dismiss();
                        _this.navCtrl.setRoot(HelpPage_1);
                    }
                    else {
                        _this.responseData = result;
                        loading_1.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: _this.responseData.message,
                            showCloseButton: true,
                            closeButtonText: 'Ok',
                            duration: 5000
                        });
                        toast.present();
                    }
                    // localStorage.setItem('senddetails',JSON.stringify(this.responseData));
                    // this.user=JSON.parse(localStorage.getItem('senddetails'));
                }
            });
        }
    };
    HelpPage = HelpPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\help\help.html"*/'<!--\n\n  Generated template for the HelpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	  <ion-navbar>\n\n  	 <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Help</ion-title>\n\n  </ion-navbar>\n\n </ion-header>\n\n\n\n<form #helpForm="ngForm" novalidate>\n\n    <ion-list no-lines class="form-input-fields">\n\n\n\n      <br /> <br /> <br /><br /> <br /><br /><br /><br />\n\n      <ion-item>\n\n\n\n        <ion-input [(ngModel)]="helpdetails.subject" placeholder="Type Your Subject " name="subject" type="text" #subject="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p ion-text [hidden]="subject.valid || submitted == false" color="danger" padding-left>\n\n        subject is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="helpdetails.message" placeholder="Type Your Message" name="message" type="ion-textarea" #message="ngModel" required class="login-input" >\n\n        </ion-input>\n\n      </ion-item>\n\n      <p ion-text [hidden]="message.valid || submitted == false" color="danger" padding-left>\n\n        Message is required\n\n      </p>\n\n\n\n      <ion-row responsive-sm>\n\n        <ion-col >\n\n          <button class="button-backcolor" ion-button (click)="onsend(helpForm)" type="submit" block>Send</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr>\n\n\n\n    </ion-list>\n\n\n\n\n\n  </form>\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], HelpPage);
    return HelpPage;
    var HelpPage_1;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__send_send__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletPage = (function () {
    function WalletPage(userData, navCtrl, nav, toastCtrl, events, menuCtrl, navParams, setupService, loadingCtrl, alertCtrl, barcodeScanner, clipboard) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.setupService = setupService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.clipboard = clipboard;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        this.submitted = false;
        this.nav = nav;
        var user = JSON.parse(localStorage.getItem('logindetail'));
        this.email = user.user.email;
        this.getWallletBalance();
        this.getAddress();
        this.getTx();
    }
    WalletPage.prototype.getWallletBalance = function () {
        var _this = this;
        this.setupService.createWalletDetail({ userMailId: this.email }).subscribe(function (result) {
            _this.balance = result.balance;
        });
    };
    WalletPage.prototype.getAddress = function () {
        var _this = this;
        this.setupService.createAddressDetail({ email: this.email }).subscribe(function (result) {
            _this.address = result.newaddress;
            return _this.address;
        });
    };
    WalletPage.prototype.getTx = function () {
        var _this = this;
        this.setupService.createTransactionDetail({ userMailId: this.email }).subscribe(function (result) {
            if (result.statusCode == 200) {
                _this.tx = result.tx;
            }
        });
    };
    WalletPage.prototype.doPrompt = function () {
        var _this = this;
        var coinAddress = this.address;
        console.log("btcaddress = =" + this.address);
        var alert = this.alertCtrl.create({
            title: '<div class="center" >My Address</div>',
            subTitle: '<div class="center" (click)="copyAddress()"> <img src="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=' + this.address + '"  alt="QR Code" style="width: 80%;" ></div><div class="center">' + this.address + '<div>',
            buttons: [
                {
                    text: 'copy',
                    handler: function (data) {
                        _this.clipboard.copy(coinAddress);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log("hello");
                    }
                },
            ]
        });
        alert.present();
    };
    // //   doPrompt() {
    //    var disableFlag=true;
    // //   let prompt = this.alertCtrl.create({
    // //         title: 'Address',
    // //         subTitle:'<img src="http://chart.apis.google.com/chart?chs=150x150&amp;cht=qr&amp;chl='+this.address+'&amp;choe=UTF-8" alt="my alt" />',
    // //         inputs: [
    // //       {
    // //         name: 'address',
    // //         value: this.addres,
    //            disable:disableFlag
    // //       },
    // //     ],
    // //     buttons: [
    // //       {
    // //         text: 'Cancel',
    // //         handler: data => {
    // //           console.log('Cancel clicked');
    // //         }
    // //       },
    // //       {
    // //         text: 'Save',
    // //         handler: data => {
    // //           console.log('Saved clicked');
    // //         }
    // //       }
    // //     ]
    // //   });
    // //   prompt.present();
    // // }
    WalletPage.prototype.openSendPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__send_send__["a" /* SendPage */]);
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\wallet\wallet.html"*/'<!--\n\n  Generated template for the WalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Wallet</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n    \n\n<ion-content padding>\n\n     <ion-list>\n\n      <h3 align="center">My Balance</h3>\n\n    <div>\n\n      <p align="center">{{balance}}</p>\n\n    </div>\n\n\n\n      \n\n      <!-- <h3 align="center">Address</h3>\n\n     <div>\n\n      <p align="center">{{address}}</p>\n\n    </div> -->\n\n  <button class="button-backcolor" ion-button type="submit" block (click)="openSendPage(SendPage)">Send</button>\n\n   <button class="button-backcolor" ion-button type="submit" block (click)="doPrompt(send-amount)">Recieve</button>\n\n</ion-list>\n\n<h3 align="center">Transaction list</h3>\n\n \n\n      <ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n      Date\n\n\n\n    </ion-col>\n\n    <ion-col>\n\n      Amount\n\n    </ion-col>\n\n    <ion-col>\n\n      Transaction list\n\n     \n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-grid>\n\n <ion-row *ngFor="let item of tx">\n\n    <ion-col>\n\n      {{item.time | date : \'shortDate\'}}\n\n    </ion-col>\n\n    <ion-col>\n\n     {{item.amount}}\n\n    </ion-col>\n\n    <ion-col>\n\n     {{(item.txid | slice:0:10)+".."}}\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n    </ion-content>\n\n\n\n\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__["a" /* Clipboard */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendPage = (function () {
    function SendPage(userData, navCtrl, navParams, _setupService, alertCtrl, toastCtrl, loadingCtrl, platform) {
        var _this = this;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.submitted = false;
        this.senddetails = { userMailId: '', amount: '', address: '', spendingPassword: '' };
        this.send = { amount: '', spendingPassword: '' };
        var user = JSON.parse(localStorage.getItem('logindetail'));
        this.email = user.user.email;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    SendPage_1 = SendPage;
    SendPage.prototype.onsendBalance = function (Form) {
        var _this = this;
        this.senddetails.userMailId = this.email;
        this.submitted = true;
        if (Form.valid) {
            this.userData.send(this.send.amount);
            var loading_1 = this.loadingCtrl.create({
                content: 'transaction is procced...'
            });
            loading_1.present();
            this._setupService.createSendDetail(this.senddetails).subscribe(function (result) {
                console.log(_this.senddetails);
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    console.log("transactions completed");
                    var toast = _this.toastCtrl.create({
                        message: 'transaction successfully completed',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    //      let prompt = this.alertCtrl.create({
                    //     message: 'transaction successfully completed'
                    //
                    // });
                    loading_1.dismiss();
                    _this.navCtrl.setRoot(SendPage_1);
                }
                else {
                    _this.responseData = result;
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
                // localStorage.setItem('senddetails',JSON.stringify(this.responseData));
                // this.user=JSON.parse(localStorage.getItem('senddetails'));
            });
        }
    };
    SendPage = SendPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\send\send.html"*/'<ion-header>\n\n    <ion-navbar>\n\n     <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Send</ion-title>\n\n  </ion-navbar>\n\n </ion-header>\n\n<ion-content>\n\n<form #sForm="ngForm" novalidate>\n\n    <ion-list no-lines class="form-input-fields">\n\n  <br /><br /><br /><br /><br />\n\n\n\n    <ion-item>\n\n      <ion-input [(ngModel)]="senddetails.amount" placeholder="Enter Amount" name="amount" type="text" #amount="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n\n\n      <p ion-text [hidden]="amount.valid || submitted == false" color="danger" padding-left>\n\n       Amount is required\n\n      </p>\n\n\n\n      <ion-item>\n\n\n\n        <ion-input [(ngModel)]="senddetails.address" placeholder="Enter Address" name="address" type="text" #address="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n          required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p ion-text [hidden]="address.valid || submitted == false" color="danger" padding-left>\n\n        Address is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="senddetails.spendingPassword" placeholder="Enter Spending Password" name="spendingPassword" type="password" #spendingPassword="ngModel" required class="login-input" >\n\n        </ion-input>\n\n      </ion-item>\n\n      <p ion-text [hidden]="spendingPassword.valid || submitted == false" color="danger" padding-left>\n\n        SpendingPassword is required\n\n      </p>\n\n\n\n      <ion-row responsive-sm>\n\n        <ion-col >\n\n          <button class="button-backcolor" ion-button (click)="onsendBalance(sForm)" type="submit" block>Send</button>\n\n          <!-- <button class="button-backcolor" ion-button (click)="onsendBalance1(sForm)" type="submit" block>Resset</button> -->\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr>\n\n\n\n    </ion-list>\n\n\n\n\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\send\send.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], SendPage);
    return SendPage;
    var SendPage_1;
}());

//# sourceMappingURL=send.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(270);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_help_help__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_wallet_wallet__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_send_send__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_conference_data__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_qrcode2__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_barcode_scanner__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_clipboard__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_send_send__["a" /* SendPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */], name: 'ForgotpasswordPage', segment: 'forgotpassword' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */], name: 'ChangepasswordPage', segment: 'changepassword' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */], name: 'ChatuserlistPage', segment: 'Chatuserlist' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */], name: 'ChatroomPage', segment: 'chatroom' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */], name: 'DashboardPage', segment: 'dashboard' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */], name: 'SettingPage', segment: 'setting' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */], name: 'HelpPage', segment: 'help' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_wallet_wallet__["a" /* WalletPage */], name: 'WalletPage', segment: 'wallet' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_send_send__["a" /* SendPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_16__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_clipboard__["a" /* Clipboard */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chatuserlist_chatuserlist__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_conference_data__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen, app, alertCtrl, statusBar, loadingCtrl) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.loggedInPages = [
            { title: 'Dashboard', name: 'DashboardPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: 'md-browsers' },
            { title: 'Chat', name: 'ChatuserlistPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */], icon: 'chatbubbles' },
            { title: 'Setting', name: 'SettingPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */], icon: 'settings' },
            { title: 'Help', name: 'HelpPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */], icon: 'md-help' },
            { title: 'Wallet', name: 'WalletPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */], icon: 'md-cash' },
            { title: 'Logout', name: null, component: null, icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        // this.io.sails.url = "http://198.187.28.200:3000";
        this.registerBackButtonAction();
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
        events.subscribe('shareObject', function (userData) {
            localStorage.setItem('userprofileEmailId', JSON.stringify(userData));
            _this.userEmail = JSON.parse(localStorage.getItem('userprofileEmailId'));
            _this.emailId = _this.userEmail;
        });
    }
    ConferenceApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            if (activeView.name === "DashboardPage") {
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'App termination',
                        message: 'Do you want to close the app?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Application exit prevented!');
                                }
                            }, {
                                text: 'Close App',
                                handler: function () {
                                    _this.platform.exitApp(); // Close this application
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
        });
    };
    ConferenceApp.prototype.openPage = function (page) {
        var _this = this;
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.nav.setRoot(page.component, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            var loading = this.loadingCtrl.create({
                content: 'Logout please wait...'
            });
            loading.present();
            localStorage.removeItem("logindetail");
            localStorage.removeItem("userprofileEmailId");
            setTimeout(function () { return _this.welcomeToBack(); }, loading.dismiss(), 1000);
        }
    };
    ConferenceApp.prototype.welcomeToBack = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    // openTutorial() {
    //   this.nav.setRoot(TutorialPage);
    // }
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#001f38');
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\app\app.template.html"*/'<ion-split-pane>\n\n\n\n \n\n\n\n  <!-- logged in menu -->\n\n  <ion-menu id="loggedInMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n         <ion-title style="color: #fff; padding: 0 20px 1px;" text-left> <ion-icon name="contact" class="icon-chat-user">     \n\n          </ion-icon><br>\n\n          <small class="white-text">{{this.emailId}}</small>\n\n       </ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <!-- <ion-list-header>\n\n          Account\n\n        </ion-list-header> -->\n\n        <button class="sidemenu-item" ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n\n\n  <!-- main navigation -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n\n\n</ion-split-pane>\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_14__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_13__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_setup_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(userData, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.login = { username: '', password: '' };
        // loginDetail: LoginDetail = { email: '', password: '', lat:'', long:'' };
        this.loginDetail = { email: '', password: '', ip: '123344', lat: '', long: '' };
        this.submitted = false;
        this.setCurrentPosition();
    }
    LoginPage.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.loginDetail.lat = position.coords.latitude;
                _this.loginDetail.long = position.coords.longitude;
            });
        }
    };
    LoginPage.prototype.onlogin1 = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            var loading_1 = this.loadingCtrl.create({
                content: 'login please wait...'
            });
            loading_1.present();
            this._setupService.createLoginDetail(this.loginDetail).subscribe(function (result) {
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    // console.log(this.responseData.user.email);          
                    localStorage.setItem('logindetail', JSON.stringify(_this.responseData));
                    _this.user = JSON.parse(localStorage.getItem('logindetail'));
                    // alert("this.user = = "+this.user);
                    _this.userName = _this.responseData.user.email;
                    _this.events.publish("shareObject", _this.userName);
                    loading_1.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    _this.responseData = result;
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    LoginPage.prototype.onlogin11 = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.userName = this.loginDetail.email;
            this.events.publish("shareObject", this.userName);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\login\login.html"*/'\n\n\n\n<ion-content>\n\n	<div  text-center style=" margin-top: 26px;">\n\n		<img src="assets/img/streetx-logo.png" alt="Ionic logo" class="brand-logo">\n\n	</div>\n\n	<ion-row class="logo" text-center>\n\n		 <ion-col col-12 style="    font-size: 2em;    margin-top: 10px;    color: #3896ea;" >\n\n		 	<ion-icon name="contact" class="icon-chat-user"></ion-icon></ion-col>\n\n		 <ion-col col-12><h3 class="text_Color"><strong >Sign In</strong></h3></ion-col>\n\n	</ion-row>\n\n	<form #loginForm="ngForm" novalidate>\n\n		<ion-list no-lines class="form-input-fields">\n\n			<ion-item>\n\n				<ion-input  autocomplete="on" [(ngModel)]="loginDetail.email" placeholder="Enter Your Emailid" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n\n				email is required\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-input [(ngModel)]="loginDetail.password" placeholder="Enter Your Password" name="password" type="password" #password="ngModel" required class="login-input" >\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n				Password is required\n\n			</p>\n\n			<ion-row>\n\n				<ion-col text-right>\n\n			      <a style="font-size: 0.8em; color: #bdbdbd;" (click)="forgotPassword()">Forgot password?</a>\n\n			    </ion-col>\n\n			</ion-row>\n\n			<ion-row responsive-sm>\n\n				<ion-col >\n\n					<button class="button-backcolor" ion-button (click)="onlogin1(loginForm)" type="submit" block>Login</button>\n\n				</ion-col>\n\n			</ion-row>\n\n			<hr>\n\n			<ion-row>\n\n				<ion-col text-center  style="font-size: 0.8em; color: #bdbdbd;">\n\n					Not a member? <a class="text_Color" (click)="onSignup()">Create an account</a>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-list>\n\n\n\n\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, loadingCtrl, userData, alertCtrl, menuCtrl, navParams, _setupService, toastCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.signup1 = { username: '', password: '' };
        this.signup = { name: '', email: '', password: '', confirmpassword: '', spendingpassword: '', confirmspendingpassword: '', mobileNumber: '' };
        this.otp = { email: '', otp: '' };
        this.submitted = false;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup1.username);
            var loading_1 = this.loadingCtrl.create({
                content: 'account creating...'
            });
            loading_1.present();
            this._setupService.createUserAccount(this.signup).subscribe(function (result) {
                console.log(_this.signup);
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    loading_1.dismiss();
                    localStorage.setItem('signUp', JSON.stringify(_this.responseData));
                    var response_1 = JSON.parse(localStorage.getItem('signUp'));
                    var toast = _this.toastCtrl.create({
                        message: 'OTP sent to your email id',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    var prompt_1 = _this.alertCtrl.create({
                        title: 'One Time Password',
                        inputs: [
                            {
                                name: 'otp',
                                type: 'password',
                                placeholder: 'One Time Password'
                            }
                        ],
                        buttons: [
                            {
                                text: 'Cancel',
                                handler: function (data) {
                                    var toast = _this.toastCtrl.create({
                                        message: 'account created please login and verify !!',
                                        showCloseButton: true,
                                        closeButtonText: 'Ok',
                                        duration: 5000
                                    });
                                    toast.present();
                                    console.log("data " + data);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                                }
                            },
                            {
                                text: 'submit',
                                handler: function (data) {
                                    if (!data.otp) {
                                        var toast_1 = _this.toastCtrl.create({
                                            message: 'Otp should be required please signUp retry',
                                            showCloseButton: true,
                                            closeButtonText: 'Ok',
                                            duration: 5000
                                        });
                                        toast_1.present();
                                    }
                                    else {
                                        var loading_2 = _this.loadingCtrl.create({
                                            content: 'verifying otp...'
                                        });
                                        loading_2.present();
                                        _this._setupService.VerificationEmail({ "email": response_1.userMailId, "otp": data.otp
                                        }).subscribe(function (result) {
                                            console.log("1111" + result);
                                            loading_2.dismiss();
                                            if (result.statusCode == 200) {
                                                var toast_2 = _this.toastCtrl.create({
                                                    message: 'SignUp successfully',
                                                    showCloseButton: true,
                                                    closeButtonText: 'Ok',
                                                    duration: 5000
                                                });
                                                toast_2.present();
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                                            }
                                        });
                                    }
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    prompt_1.present();
                }
                else {
                    loading_1.dismiss();
                    _this.responseData = result;
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    SignupPage.prototype.onLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"F:\Sails\streetX-moble-app\src\pages\signup\signup.html"*/'\n\n<ion-content>\n\n\n\n	<div  text-center style=" margin-top: 0 	px;">\n\n		<img src="assets/img/streetx-logo.png" alt="Ionic logo" class="brand-logo">\n\n	</div>\n\n	<ion-row class="logo" text-center>\n\n		 <ion-col col-12 style="    font-size: 2em;    margin-top: 0px;    color: #3896ea;"><ion-icon name="create" class="icon-chat-user"></ion-icon></ion-col>\n\n		 <ion-col col-12><h3 class="button-color" ><strong>Create Account</strong></h3></ion-col>\n\n	</ion-row>\n\n	<form #signupForm="ngForm" novalidate>\n\n		<ion-list no-lines class="form-input-fields">\n\n			<ion-row>\n\n				<ion-col col-6 class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.name" placeholder="Full name" name="name" type="text" #name="ngModel" required class="login-input">\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n\n						Name is required\n\n					</p>\n\n				</ion-col>\n\n				<ion-col col-6 class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.mobileNumber" placeholder="Enter mobile number" name="mobileNumber" number="number" #mobileNumber="ngModel" required class="login-input">\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="mobileNumber.valid || submitted == false" color="danger" padding-left>\n\n						mobileNumber is required\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<ion-row>\n\n				<ion-col class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.email" placeholder="Enter emailid" name="email" type="email" #email="ngModel" required class="login-input" >\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n\n						email is required\n\n					</p>\n\n\n\n\n\n				</ion-col>\n\n			</ion-row>\n\n			<ion-row>\n\n\n\n				<ion-col col-6 class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.password" placeholder="Enter password" name="password" type="password" #password="ngModel" required class="login-input" >\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n						Password is required\n\n					</p>\n\n				</ion-col>\n\n				<ion-col col-6 class="padding0">\n\n					<ion-item class="padding0">\n\n						<ion-input [(ngModel)]="signup.confirmpassword" placeholder="Re-enter password" name="confirmpassword" type="password" #confirmpassword="ngModel" required class="login-input">\n\n						</ion-input>\n\n					</ion-item>\n\n					<p ion-text [hidden]="confirmpassword.valid || submitted == false" color="danger" padding-left>\n\n						confirm password is required\n\n					</p>\n\n						</ion-col>\n\n			            </ion-row>\n\n					<ion-input [(ngModel)]="signup.spendingpassword" placeholder="Enter spending password" name="spendingpassword" type="password" #spendingpassword="ngModel" required class="login-input" >\n\n						</ion-input>\n\n						\n\n						<ion-input [(ngModel)]="signup.confirmspendingpassword" placeholder="Enter  confirmspendingpassword" name="confirmspendingpassword" type="password" #confirmspendingpassword="ngModel" required class="login-input" >\n\n						</ion-input>\n\n			\n\n\n\n			<ion-row responsive-sm>\n\n				<ion-col >\n\n					<button class="button-backcolor"  ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n\n				</ion-col>\n\n			</ion-row>\n\n			<hr>\n\n			<ion-row>\n\n				<ion-col text-center  style="font-size: 0.8em; color: #bdbdbd;">\n\n					Already a member? <a class="button-color" (click)="onLogin()">Login</a>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-list>\n\n\n\n\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Sails\streetX-moble-app\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[247]);
//# sourceMappingURL=main.js.map