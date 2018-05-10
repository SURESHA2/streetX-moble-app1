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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController, ToastController, LoadingController, Events, AlertController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { SetupService } from '../../providers/setup.services';
import { SendPage } from '../send/send';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clipboard } from '@ionic-native/clipboard';
/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletPage = /** @class */ (function () {
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
        this.nav.push(SendPage);
    };
    WalletPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-wallet',
            templateUrl: 'wallet.html',
        }),
        __metadata("design:paramtypes", [UserData,
            NavController,
            NavController,
            ToastController,
            Events,
            MenuController,
            NavParams,
            SetupService,
            LoadingController,
            AlertController,
            BarcodeScanner,
            Clipboard])
    ], WalletPage);
    return WalletPage;
}());
export { WalletPage };
//# sourceMappingURL=wallet.js.map