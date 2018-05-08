import { Component } from '@angular/core';
import { NavController, Platform,LoadingController,ToastController,AlertController } from 'ionic-angular';
import { UserEmailId, PasswordValues,PasswordValues1  } from '../../interfaces/user-options';
// import { DashboardPage } from '../dashboard/dashboard';
import { SetupService } from '../../providers/setup.services';
import { NgForm} from '@angular/forms';
import { UserData } from '../../providers/user-data';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
   pet: string = "puppies";
  isAndroid: boolean = false;
  response:any;
	public user:any;
  public email:any;
  public submitted = false;
  public verifyEmail:boolean=false;
       userEmail: UserEmailId = { email: ''};
       passwordValues: PasswordValues = {"userMailId": "","currentPassword": "","newPassword": "", "confirmNewPassword": "" };
        passwordValues1: PasswordValues1 = {"userMailId": "","currentSpendingPassword": "","newSpendingPassword": "", "confirmNewPassword": "" };
       constructor(public navCtrl: NavController,
         public alertCtrl: AlertController,
         public toastCtrl: ToastController,
         public _setupService: SetupService,
         public loadingCtrl: LoadingController,
         public userData: UserData,
         public platform: Platform,

         )
       {
         this.isAndroid = platform.is('android');
        var user =JSON.parse(localStorage.getItem('logindetail'));
         this.email = user.user.email;

    let backAction =  platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
        backAction();

      },)

  }


changeCurrentPassword(Form: NgForm){
  this.passwordValues.userMailId=this.email;
  if (Form.valid) {
       this.userData.send(this.userEmail.email);
       let loading = this.loadingCtrl.create({
      content: 'update password...'
      });
       loading.present();


     this._setupService.changecurrentpasswords(this.passwordValues).subscribe((result) => {

         console.log(this.passwordValues);
          if(result.statusCode== 200){
            // this.responseData = result;
           console.log("update password completed");
           let toast = this.toastCtrl.create({
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
           loading.dismiss();
           this.navCtrl.setRoot(SettingPage);

           }


           else{
               // /this.responseData = result;
               loading.dismiss();
               let toast = this.toastCtrl.create({
               message: this.response.message,
               showCloseButton: true,
               closeButtonText: 'Ok',
               duration: 5000
          });
          toast.present();
    }
  });
}
}
changespendingPassword(Form: NgForm){
  this.passwordValues1.userMailId=this.email;
  if (Form.valid) {
       this.userData.send(this.userEmail.email);
       let loading = this.loadingCtrl.create({
      content: 'update password...'
      });
       loading.present();


     this._setupService.changecurrentspepasswords(this.passwordValues1).subscribe((result) => {

         console.log(this.passwordValues1);
          if(result.statusCode== 200){
            this.response = result;
           console.log("update password completed");
           let toast = this.toastCtrl.create({
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
           loading.dismiss();
           this.navCtrl.setRoot(SettingPage);

           }


           else{
               this.response = result;
               loading.dismiss();
               let toast = this.toastCtrl.create({
               message: this.response.message,
               showCloseButton: true,
               closeButtonText: 'Ok',
               duration: 5000
          });
          toast.present();
    }
  });
}
}
}






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
