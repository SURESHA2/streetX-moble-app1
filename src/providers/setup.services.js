var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SetupService = /** @class */ (function () {
    function SetupService(http) {
        this.http = http;
        // aendpoint_url : string = 'http://198.187.28.200:3000';
        this.endpoint_url = 'http://192.168.0.133:3000';
        this.http = http;
        console.log('Hello ServicesProvider Provider');
    }
    //create new user account
    SetupService.prototype.createUserAccount = function (SignUpDetail) {
        var response = this.http.post(this.endpoint_url + '/trader/createNewTrader', SignUpDetail).map(function (res) { return res.json(); });
        return response;
    };
    // verify email
    SetupService.prototype.VerificationEmail = function (otpDetail) {
        var response = this.http.post(this.endpoint_url + '/trader/verifyEmailAddress', otpDetail).map(function (res) { return res.json(); });
        return response;
    };
    //sent Otp To Email Verificatation
    SetupService.prototype.EmailVerifyforAccount = function (email) {
        var response = this.http.post(this.endpoint_url + '/trader/sentOtpToEmailVerificatation', email).map(function (res) { return res.json(); });
        return response;
    };
    // create login
    SetupService.prototype.createLoginDetail = function (loginDetail) {
        var response = this.http.post(this.endpoint_url + '/trader/login', loginDetail).map(function (res) { return res.json(); });
        return response;
    };
    // help page
    SetupService.prototype.createHelpDetail = function (helpdetails) {
        var response = this.http.post(this.endpoint_url + '/help/helpUser', helpdetails).map(function (res) { return res.json(); });
        return response;
    };
    // walllet page
    SetupService.prototype.createWalletDetail = function (email) {
        var response = this.http.post(this.endpoint_url + '/coin/getBalBCH', email).map(function (res) { return res.json(); });
        return response;
    };
    //Address details
    SetupService.prototype.createAddressDetail = function (email) {
        var response = this.http.post(this.endpoint_url + '/coin/getNewBCHAddress', email).map(function (res) { return res.json(); });
        return response;
    };
    // for date details
    SetupService.prototype.createTransactionDetail = function (email) {
        var response = this.http.post(this.endpoint_url + '/coin/getTxsListBCH', email).map(function (res) { return res.json(); });
        return response;
    };
    // for send page
    SetupService.prototype.createSendDetail = function (senddetails) {
        var response = this.http.post(this.endpoint_url + '/coin/sendBCH', senddetails).map(function (res) { return res.json(); });
        return response;
    };
    // update current passeword
    SetupService.prototype.changecurrentpasswords = function (values) {
        var response = this.http.post(this.endpoint_url + '/trader/updateCurrentPassword', values).map(function (res) { return res.json(); });
        return response;
    };
    // change current spending password
    SetupService.prototype.changecurrentspepasswords = function (passwordValues1) {
        var response = this.http.post(this.endpoint_url + '/user/updateCurrentSpendingPassword', passwordValues1).map(function (res) { return res.json(); });
        return response;
    };
    // update current location
    SetupService.prototype.sentLocation = function (position) {
        var response = this.http.post(this.endpoint_url + '/trader/updatelocation', position).map(function (res) { return res.json(); });
        return response;
    };
    // get buy data
    SetupService.prototype.getBuydata = function () {
        var response = this.http.get(this.endpoint_url + '/trader/getRates').map(function (res) { return res.json(); });
        return response;
    };
    //update price
    SetupService.prototype.updateprice = function (values) {
        var response = this.http.post(this.endpoint_url + '/trader/buysellupdate', values).map(function (res) { return res.json(); });
        return response;
    };
    //update  Acceptance
    SetupService.prototype.updateAcceptance = function (userId) {
        var response = this.http.get(this.endpoint_url + '/chat/updateAcceptance', userId).map(function (res) { return res.json(); });
        return response;
    };
    // get chat messages
    SetupService.prototype.getChatMessages = function (chatId) {
        var response = this.http.post(this.endpoint_url + '/chat/getChatMessages', chatId).map(function (res) { return res.json(); });
        return response;
    };
    //send message to traders
    SetupService.prototype.sendMessage = function (messageDetail) {
        var response = this.http.post(this.endpoint_url + '/chat/sendMessage', messageDetail).map(function (res) { return res.json(); });
        return response;
    };
    //get friends list
    SetupService.prototype.getfrienlist = function (email) {
        var response = this.http.post(this.endpoint_url + '/chat/getTradersForUser', email).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getUserChats = function (emailId) {
        var response = this.http.get(this.endpoint_url + '/chat/getUserChats', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPassword = function (userMailId) {
        var response = this.http.post(this.endpoint_url + '/user/sentOtpToEmailForgotPassword', userMailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPasswordOTP = function (otp) {
        var response = this.http.post(this.endpoint_url + '/user/verifyOtpToEmailForgotPassord', otp).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.updateForgotPassord = function (newpasswordvalues) {
        var response = this.http.post(this.endpoint_url + '/trader/updateForgotPassordAfterVerify', newpasswordvalues).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.acceptRequest = function (data) {
        var response = this.http.post(this.endpoint_url + '/chat/updateAcceptance', data).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.rejectRequest = function (data) {
        var response = this.http.post(this.endpoint_url + '/chat/updateAcceptance', data).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getTraderInfo = function (emailId) {
        var response = this.http.post(this.endpoint_url + '/trader/getTraderInfo', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], SetupService);
    return SetupService;
}());
export { SetupService };
//# sourceMappingURL=setup.services.js.map