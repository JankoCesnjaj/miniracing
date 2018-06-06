import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterServiceProvider } from '../../providers/register-service/register-service';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user_profile: any;
  user = { body: {username: '', password: ''}};
  constructor(public navCtrl: NavController, public navParams: NavParams, public registerServiceProvider: RegisterServiceProvider) {
    this.user_profile = { username: '', email: '', password: '', firstname: '', lastname: '', birthday: ''};
  }

  tryLogin(){
    this.registerServiceProvider.tryLogin(this.user).then(data => {
      this.user_profile = data;
      console.log(this.user_profile);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
