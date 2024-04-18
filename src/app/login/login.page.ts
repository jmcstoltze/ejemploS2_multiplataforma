import { Component, OnInit } from '@angular/core';

// segÚn procedimental de S3
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public route: Router,
    public alert: AlertController
  ) { }

  ngOnInit() {
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    });
    await alert.present();
  }

  async login() {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
      this.route.navigate(['logeado'])

    } catch(err) {
      console.dir(err);
      /*if(err) {
        this.showAlert("Error!", err);
      }*/
      if(err.code === "auth/invalid-email") {
        this.showAlert("Error", "El nombre de usuario o contraseña es incorrecto");
      }
      if(err.code === "auth/user-not-found") {
        this.showAlert("Error", "No se encuentra usuario");
      }
    }
  }

}
