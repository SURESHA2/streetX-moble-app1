import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController,Platform, NavParams,AlertController,LoadingController,MenuController,ToastController} from 'ionic-angular';
import { UserData} from '../../providers/user-data';
import { HelpDetails,HelpOption} from '../../interfaces/user-options';
// import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
// import { SignupPage } from '../signup/signup';
// import { DashboardPage } from '../dashboard/dashboard';
import { SetupService } from '../../providers/setup.services';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})

export class HelpPage {
  user:any;
  public subject:any;
  public message:any;
  submitted = false;
  responseData:any;
  help: HelpOption = { subject:'', message:'' };
  helpdetails: HelpDetails = { subject:'', message:'' };


constructor(public userData: UserData,
  public navCtrl: NavController,
  // public events: Events,
  public menuCtrl: MenuController,
   public navParams: NavParams,
   public _setupService: SetupService,
   public alertCtrl: AlertController,
   public toastCtrl: ToastController,
   public loadingCtrl: LoadingController,
   public platform: Platform) {
  let backAction =  platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
        backAction();
      },)


  }



onsend(Form: NgForm){
  this.submitted = true;
  if (Form.valid) {
       this.userData.help(this.help.subject);
        let loading = this.loadingCtrl.create({
       content: 'Sending feedback...'
      });
        loading.present();

     this._setupService.createHelpDetail(this.helpdetails).subscribe((result) => {

         console.log(result);
          if(result.statusCode== 200){
            if(result.statusCode== 200){
              this.responseData = result;
  console.log("feeedback send");
  let toast = this.toastCtrl.create({
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
  loading.dismiss();
  this.navCtrl.setRoot(HelpPage);

  }
  else{
                 this.responseData = result;
                 loading.dismiss();
                 let toast = this.toastCtrl.create({
                 message: this.responseData.message,
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
  }
}
