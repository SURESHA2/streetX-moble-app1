var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone, } from '@angular/core';
import { IonicPage, NavParams, Platform, NavController, Events } from 'ionic-angular';
import { SetupService } from '../../providers/setup.services';
import * as socketIOClient from 'socket.io-client';
import * as sailsIOClient from 'sails.io.js';
var ChatroomPage = /** @class */ (function () {
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
        this.io = sailsIOClient(socketIOClient);
        this.messageDetails = { sender: '', recipient: '', content: '', chatId: '' };
        this.messages = [];
        this.UserId = { email: '' };
        this.chatid = {
            "chatId": ""
        };
        this.myInfo = this.messages[0];
        // this.io.sails.url = this._setupService.endpoint_url;
        this.io.sails.url = "http://198.187.28.200:3000";
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
        IonicPage(),
        Component({
            selector: 'page-chat-room',
            templateUrl: 'chatroom.html',
        }),
        __metadata("design:paramtypes", [NgZone, Events, Platform, NavController, NavParams, SetupService])
    ], ChatroomPage);
    return ChatroomPage;
}());
export { ChatroomPage };
//# sourceMappingURL=chatroom.js.map