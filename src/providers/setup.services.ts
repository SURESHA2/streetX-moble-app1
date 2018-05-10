import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SetupService {

  constructor(public http: Http) {
    this.http = http;
    console.log('Hello ServicesProvider Provider');
  }

     // aendpoint_url : string = 'http://198.187.28.200:3000';

     endpoint_url :string='http://192.168.0.133:3000';


   //create new user account
    createUserAccount(SignUpDetail: any) {
        var response = this.http.post(this.endpoint_url + '/trader/createNewTrader',SignUpDetail ).map(res => res.json());
        return response;

    }
     // verify email
     VerificationEmail(otpDetail: any) {           
        var response = this.http.post(this.endpoint_url + '/trader/verifyEmailAddress',otpDetail ).map(res => res.json());
        return response;
    }


      //sent Otp To Email Verificatation
     EmailVerifyforAccount(email:any){    
          var response =this.http.post(this.endpoint_url +'/trader/sentOtpToEmailVerificatation',email).map(res =>res.json());
          return response;
       }

     // create login
      createLoginDetail(loginDetail: any) {
        var response = this.http.post(this.endpoint_url + '/trader/login',loginDetail ).map(res => res.json());
        return response;
    }

    // help page
    createHelpDetail(helpdetails:any) {

        var response = this.http.post(this.endpoint_url+'/help/helpUser',helpdetails ).map(res => res.json());
        return response;
    }
    // walllet page
    createWalletDetail(userMailId:any) {

        var response = this.http.post(this.endpoint_url+'/coin/getBalBCH',userMailId ).map(res => res.json());
        return response;
    }
    //Address details
     createAddressDetail(email:any) {

        var response = this.http.post(this.endpoint_url+'/coin/getNewBCHAddress',email ).map(res => res.json());
        return response;
    }
    // for date details
    createTransactionDetail(userMailId:any) {

        var response = this.http.post(this.endpoint_url+'/coin/getTxsListBCH',userMailId ).map(res => res.json());
        return response;
    }
   // for send page
    createSendDetail(senddetails:any) {

        var response = this.http.post(this.endpoint_url+'/coin/sendBCH',senddetails).map(res => res.json());

        return response;

    }
    // update current passeword
    changecurrentpasswords(values:any){
     var response =this.http.post(this.endpoint_url +'/trader/updateCurrentPassword',values).map(res =>res.json());
      return response;
    }
    // change current spending password


     changecurrentspepasswords(passwordValues1:any){
     var response =this.http.post(this.endpoint_url +'/user/updateCurrentSpendingPassword', passwordValues1).map(res =>res.json());
      return response;
    }

    // update current location

     sentLocation( position:any){
           var response =this.http.post(this.endpoint_url +'/trader/updatelocation',position).map(res =>res.json());
        return response;
      }


   // get buy data
     getBuydata() {
        var response =this.http.get(this.endpoint_url +'/trader/getRates').map(res =>res.json());
        return response;
       }


    //update price

      updateprice(values:any){
         var response = this.http.post(this.endpoint_url + '/trader/buysellupdate',values).map(res => res.json());
        return response;
      }

      //update  Acceptance

        updateAcceptance(userId:any){
         var response = this.http.get(this.endpoint_url +'/chat/updateAcceptance',userId).map(res => res.json());
         return response;
       }



      // get chat messages

       getChatMessages(chatId:any){
         var response = this.http.post(this.endpoint_url +'/chat/getChatMessages',chatId).map(res => res.json());
         return response;
       }

       //send message to traders

       sendMessage(messageDetail:any){
         var response = this.http.post(this.endpoint_url +'/chat/sendMessage',messageDetail).map(res => res.json());
         return response;
       }


       //get friends list
        getfrienlist(email:any){
         var response = this.http.post(this.endpoint_url +'/chat/getTradersForUser',email).map(res => res.json());
         return response;
        }


        getUserChats(emailId:any){
         var response = this.http.get(this.endpoint_url +'/chat/getUserChats',emailId).map(res => res.json());
         return response;
       }

        forgotPassword(userMailId: any) {
        var response = this.http.post(this.endpoint_url + '/user/sentOtpToEmailForgotPassword',userMailId ).map(res => res.json());
        return response;
        }

       forgotPasswordOTP(otp: any) {
          var response = this.http.post(this.endpoint_url + '/user/verifyOtpToEmailForgotPassord',otp ).map(res => res.json());
          return response;
      }

       updateForgotPassord(newpasswordvalues: any) {
        var response =this.http.post(this.endpoint_url +'/trader/updateForgotPassordAfterVerify',newpasswordvalues).map(res =>res.json());
        return response;
      }


       acceptRequest(data: any){
         var response =this.http.post(this.endpoint_url +'/chat/updateAcceptance',data).map(res =>res.json());
         return response;
       }

       rejectRequest(data: any){
         var response =this.http.post(this.endpoint_url +'/chat/updateAcceptance',data).map(res =>res.json());
         return response;
       }

       getTraderInfo(emailId:any){
          var response = this.http.post(this.endpoint_url +'/trader/getTraderInfo',emailId).map(res => res.json());
         return response;
       }





}
