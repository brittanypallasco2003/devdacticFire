import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(public navCntrl: NavController, private auth: Auth) { }

  ngOnInit() {
  }

  async signup() {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
    );
    return user;
  }

  gotoLogin() {
    this.navCntrl.navigateBack('login');
  }
  // async showAlert(header, message) {
	// 	const alert = await this.alertController.create({
	// 		header,
	// 		message,
	// 		buttons: ['OK']
	// 	});
	// 	await alert.present();
	// }

}
