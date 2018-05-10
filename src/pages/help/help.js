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
import { NavController, Platform, NavParams, AlertController, LoadingController, MenuController, ToastController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
// import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
// import { SignupPage } from '../signup/signup';
// import { DashboardPage } from '../dashboard/dashboard';
import { SetupService } from '../../providers/setup.services';
var HelpPage = /** @class */ (function () {
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
        Component({
            selector: 'page-help',
            templateUrl: 'help.html'
        }),
        __metadata("design:paramtypes", [UserData,
            NavController,
            MenuController,
            NavParams,
            SetupService,
            AlertController,
            ToastController,
            LoadingController,
            Platform])
    ], HelpPage);
    return HelpPage;
    var HelpPage_1;
}());
export { HelpPage };
//# sourceMappingURL=help.js.map