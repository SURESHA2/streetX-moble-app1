
export interface UserOptions {
  username: string,
  password: string
}


export interface HelpOption {
  subject: string,
  message: string
}

export interface WalletOptions {
  coin: string

}

export interface SendOption {
  amount: string,
  spendingPassword: string,


}
export interface LoginDetail {
  email: string,
  password: string,
  ip:any;
  lat?:any,
  long?:any
}
export interface HelpDetails {
  subject: string,
  message: string

}
export interface WalletDetails {
  userMailId: string

}

export interface SendDetail{

  address:string,
  amount:string,
  spendingPassword:any,
  userMailId:any
  }
  export interface otpDetail{

    email:string,
    otp:string
    }

export interface SignUpDetails{

  name:string,
	email:string,
	password:string,
	confirmpassword?:string,
	spendingpassword?:string,
  confirmspendingpassword?:string,
  mobileNumber?:string

}
export interface Otpvalue{
      userMailId: string,
      otp: string
  }

  export interface Markers{

    lat: number;
    lng: number;
    label?: string;
    title: string;
    draggable: boolean;
    icon: string;
}
export interface Trader{
  fullName:string;
  traderId:string;
  buyPrice:number;
  salePrice:number;
  latitude:string;
  longitude:string;
  profileImagePath:string;
  mobileNumber:string;
  address:string;
  volume:number;
  email:string;
  coin:string;
  verifyEmail:boolean;
  message:string;
}

export interface SendMessageWithContent {
  sender:string;
  recipient:string;
  content?:string;
  chatId?:string;
}
export interface ChatRequest {
  sender:string;
  recipient:string;
}
export interface UserEmailId{
  
  email:string;
}

   export interface NewPasswordvalue{
    "userMailId": "",
    "newPassword": "",
    "confirmNewPassword": ""
  }


  export interface updateValue{
    "email":string;
    "buyRate": any;
    "sellRate": any;
    "volume":any;
    "currencyType":string;
  }




  export interface PasswordValues{
    "userMailId": string;
    "currentPassword": string;
    "newPassword": string;
    "confirmNewPassword": string;

  }

  export interface PasswordValues1{
    "userMailId": string;
    "currentSpendingPassword": string;
    "newSpendingPassword": string;
    "confirmNewPassword": string;

  }

  export interface Location{
   "email":string;
   "lat":any;
   "long":any;
   //"name":any;

  }
