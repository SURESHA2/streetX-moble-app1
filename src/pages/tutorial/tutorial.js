var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, ToastController, LoadingController, Events, Slides } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { SignupPage } from '../signup/signup';
import { SetupService } from '../../providers/setup.services';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
var TutorialPage = /** @class */ (function () {
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
        this.loginDetail = { email: '', password: '', lat: '', long: '' };
        this.submitted = false;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(LoginPage).then(function () {
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
        this.navCtrl.push(SignupPage);
        this.storage.set('hasSeenTutorial', 'true');
    };
    TutorialPage.prototype.forgotPassword = function () {
        this.navCtrl.push(ForgotpasswordPage);
        this.storage.set('hasSeenTutorial', 'true');
    };
    __decorate([
        ViewChild('slides'),
        __metadata("design:type", Slides)
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Component({
            selector: 'page-tutorial',
            templateUrl: 'tutorial.html'
        }),
        __metadata("design:paramtypes", [UserData, NavController, ToastController, Events, MenuController,
            NavParams, SetupService, LoadingController,
            MenuController,
            Storage])
    ], TutorialPage);
    return TutorialPage;
}());
export { TutorialPage };
//# sourceMappingURL=tutorial.js.map