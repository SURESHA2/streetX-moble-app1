var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, Events, Platform, ToastController } from 'ionic-angular';
import { SetupService } from '../../providers/setup.services';
import { Geolocation } from '@ionic-native/geolocation';
import * as socketIOClient from 'socket.io-client';
import * as sailsIOClient from 'sails.io.js';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(ngZone, toastCtrl, geolocation, navCtrl, platform, events, navParams, _setupService) {
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.events = events;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.io = sailsIOClient(socketIOClient); //375-384 sails.io.js in nodemodule 
        this.submitted = false;
        this.location = { email: '', lat: '', long: '' };
        this.userEmail = { email: '' };
        this.btcValue = { email: '', buyRate: '', currencyType: '', volume: '', sellRate: '' };
        this.inrValue = { email: '', buyRate: '', currencyType: '', volume: '', sellRate: '' };
        this.io.sails.url = "http://192.168.0.133:3000";
        this.userdata();
        this.getCurrencyPrice();
        this.getCurrentPosition();
        this.getTradersSetValue();
    }
    DashboardPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.userEmail.email = this.user.trader.email;
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
        Component({
            selector: 'page-dashboard',
            templateUrl: 'dashboard.html',
        }),
        __metadata("design:paramtypes", [NgZone, ToastController, Geolocation, NavController,
            Platform, Events, NavParams, SetupService])
    ], DashboardPage);
    return DashboardPage;
}());
export { DashboardPage };
//# sourceMappingURL=dashboard.js.map