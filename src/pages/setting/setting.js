var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { SetupService } from '../../providers/setup.services';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, alertCtrl, toastCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.verifyEmail = false;
        this.userEmail = { email: '' };
        this.passwordValue = { "userMailId": "", "currentPassword": "", "newPassword": "", "confirmNewPassword": "" };
        this.otpvalues = { "email": "", "otp": "" };
        this.userdata();
        //this.verifyEmail=false;        
    }
    SettingPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.userEmail.email = this.user.trader.email;
            this.verifyEmail = this.user.trader.verifyEmail;
        }
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    // change current password
    SettingPage.prototype.changeCurrentPassword = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Change Password',
            inputs: [
                {
                    name: 'currentPassword',
                    type: 'password',
                    placeholder: 'Current Password',
                },
                {
                    name: 'newPassword',
                    type: 'password',
                    placeholder: 'New Password',
                },
                {
                    name: 'confirmNewPassword',
                    type: 'password',
                    placeholder: 'Confirm New Password',
                },
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
                            content: 'updating current password...'
                        });
                        loading.present();
                        _this.passwordValue.userMailId = _this.userEmail.email;
                        _this.passwordValue.currentPassword = data.currentPassword;
                        _this.passwordValue.newPassword = data.newPassword;
                        _this.passwordValue.confirmNewPassword = data.confirmNewPassword;
                        _this._setupService.changecurrentpasswords(_this.passwordValue).subscribe(function (response) {
                            if (response.statusCode == 200) {
                                loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: 'Password change successfully',
                                    showCloseButton: true,
                                    closeButtonText: 'Ok',
                                    duration: 5000
                                });
                                toast.present();
                                _this.navCtrl.setRoot(DashboardPage);
                            }
                            else {
                                loading.dismiss();
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
                }
            ],
            enableBackdropDismiss: false
        });
        prompt.present();
    };
    // veryfy email id
    SettingPage.prototype.veryfyEmail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'sending otp in your emailId..'
        });
        loading.present();
        this._setupService.EmailVerifyforAccount(this.userEmail).subscribe(function (response) {
            loading.dismiss();
            var prompt = _this.alertCtrl.create({
                title: 'Enter One Time Password',
                inputs: [
                    {
                        name: 'otp',
                        type: 'password',
                        placeholder: 'One Time Password',
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
                                content: 'verifying OtP...'
                            });
                            loading.present();
                            _this.otpvalues.email = _this.userEmail.email;
                            _this.otpvalues.otp = data.otp;
                            _this._setupService.VerificationEmail(_this.otpvalues).subscribe(function (response) {
                                console.log("RES = = " + JSON.stringify(response));
                                if (response.statusCode == 200) {
                                    loading.dismiss();
                                    localStorage.setItem('logindetail', JSON.stringify(response));
                                    _this.user = JSON.parse(localStorage.getItem('logindetail'));
                                    console.log("this.user.trader.email" + response.trader.email);
                                    console.log("this.user.trader.verifyEmail" + response.trader.verifyEmail);
                                    _this.userEmail.email = _this.user.trader.email;
                                    _this.verifyEmail = _this.user.trader.verifyEmail;
                                    var toast = _this.toastCtrl.create({
                                        message: 'verify email successfully !!',
                                        showCloseButton: true,
                                        closeButtonText: 'Ok',
                                        duration: 5000
                                    });
                                    toast.present();
                                    _this.navCtrl.setRoot(DashboardPage);
                                }
                                else {
                                    loading.dismiss();
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
                    }
                ],
                enableBackdropDismiss: false
            });
            prompt.present();
        });
    };
    SettingPage = __decorate([
        Component({
            selector: 'page-setting',
            templateUrl: 'setting.html',
        }),
        __metadata("design:paramtypes", [NavController, AlertController, ToastController, SetupService, LoadingController])
    ], SettingPage);
    return SettingPage;
}());
export { SettingPage };
//# sourceMappingURL=setting.js.map