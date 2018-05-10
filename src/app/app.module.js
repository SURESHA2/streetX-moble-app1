var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { ConferenceApp } from './app.component';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LoginPage } from '../pages/login/login';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { SignupPage } from '../pages/signup/signup';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ChatuserlistPage } from '../pages/chatuserlist/chatuserlist';
import { ChatroomPage } from '../pages/chatroom/chatroom';
import { SetupService } from '../providers/setup.services';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SettingPage } from '../pages/setting/setting';
import { HelpPage } from '../pages/help/help';
import { WalletPage } from '../pages/wallet/wallet';
import { SendPage } from '../pages/send/send';
import { Geolocation } from '@ionic-native/geolocation';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clipboard } from '@ionic-native/clipboard';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                ConferenceApp,
                TutorialPage,
                ChatuserlistPage,
                ChatroomPage,
                LoginPage,
                ForgotpasswordPage,
                ChangepasswordPage,
                SignupPage,
                DashboardPage,
                SettingPage,
                HelpPage,
                WalletPage,
                SendPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(ConferenceApp, {}, {
                    links: [
                        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
                        { component: LoginPage, name: 'LoginPage', segment: 'login' },
                        { component: ForgotpasswordPage, name: 'ForgotpasswordPage', segment: 'forgotpassword' },
                        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
                        { component: ChangepasswordPage, name: 'ChangepasswordPage', segment: 'changepassword' },
                        { component: ChatuserlistPage, name: 'ChatuserlistPage', segment: 'Chatuserlist' },
                        { component: ChatroomPage, name: 'ChatroomPage', segment: 'chatroom' },
                        { component: DashboardPage, name: 'DashboardPage', segment: 'dashboard' },
                        { component: SettingPage, name: 'SettingPage', segment: 'setting' },
                        { component: HelpPage, name: 'HelpPage', segment: 'help' },
                        { component: WalletPage, name: 'WalletPage', segment: 'wallet' },
                    ]
                }),
                IonicStorageModule.forRoot(),
                NgxQRCodeModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                ConferenceApp,
                TutorialPage,
                ChatuserlistPage,
                ChatroomPage,
                LoginPage,
                ForgotpasswordPage,
                ChangepasswordPage,
                SignupPage,
                DashboardPage,
                SettingPage,
                HelpPage,
                WalletPage,
                SendPage
            ],
            providers: [
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                ConferenceData, Geolocation,
                UserData, SetupService, StatusBar,
                InAppBrowser,
                SplashScreen,
                BarcodeScanner, Clipboard
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map