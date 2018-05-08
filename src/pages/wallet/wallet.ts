import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController,ToastController,LoadingController,Events, AlertController} from 'ionic-angular';
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

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;

   responseData:any;
   public user:any;
   public date:any;
   public amount:any;
   public txlist:any;
   submitted = false;
   public userName:any;
   public email:any;
   public balance:any;
   public address:any;
   public tx:any;



constructor(public userData: UserData,
  public navCtrl: NavController,
  public nav: NavController,
  public toastCtrl: ToastController,
  public events: Events,
  public menuCtrl: MenuController,
   public navParams: NavParams,
   public setupService: SetupService,
   public loadingCtrl: LoadingController,
   public alertCtrl: AlertController,
    public barcodeScanner: BarcodeScanner,
    public clipboard: Clipboard
   ) {
this.nav = nav
var user =JSON.parse(localStorage.getItem('logindetail'));
this.email = user.user.email;
this.getWallletBalance();
this.getAddress();
this.getTx();

  }


  getWallletBalance(){
      this.setupService.createWalletDetail({userMailId:this.email}).subscribe((result) => {
         this.balance = result.balance;

    });
  }

  getAddress(){
      this.setupService.createAddressDetail({email:this.email}).subscribe((result) => {
        this.address = result.newaddress;
         return this.address;
    });

    }

     getTx(){
      this.setupService.createTransactionDetail({userMailId:this.email}).subscribe((result) => {
        if(result.statusCode==200){
          this.tx = result.tx;

            }
    });

    }

doPrompt(){
   var coinAddress= this.address;
   console.log("btcaddress = ="+this.address);
  let alert = this.alertCtrl.create({
     title: '<div class="center" >My Address</div>',
     subTitle: '<div class="center" (click)="copyAddress()"> <img src="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl='+this.address+'"  alt="QR Code" style="width: 80%;" ></div><div class="center">'+this.address+'<div>',
     
     buttons: [
     {
         text: 'copy',
         handler: data => {   
              this.clipboard.copy(coinAddress);

         }
       },
       {
         text: 'Cancel',
         handler: data => {            
              console.log("hello");
         }
       },]
   });
   alert.present();
   }

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


 openSendPage() {
    this.nav.push(SendPage)
  }















}
