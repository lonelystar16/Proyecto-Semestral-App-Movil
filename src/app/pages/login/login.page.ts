import { AuthenticatorService } from './../../Servicios/authenticator.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  alumno = {
    email: '',
    password: ''
  };
  mensaje_login = '';
  spinner = false;


  recordarPassword = false;

  ngOnInit() { }

  constructor(private router: Router, private AlertController: AlertController, private auth: AuthenticatorService) { }

  async presentAlert_Email() {
    const alert = await this.AlertController.create({
      cssClass: 'alerta-login',
      header: 'Error',
      message: 'Correo ingresado no válido y/o no registrado.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }

  async presentAlert_Password() {
    const alert = await this.AlertController.create({
      cssClass: 'alerta-login',
      header: 'Error',
      message: 'Contraseña ingresada no válida y/o errónea.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }

  async presentAlert_Autenticacion(titulo: string) {
    const alert = await this.AlertController.create({
      cssClass: 'alerta-login',
      header: titulo,
      message: 'Correo y/o contraseña no válidos.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }



  cambiarSpinner(estado: boolean) {
    this.spinner = estado;
  }
  // * Funcion para validar el login
  
  async validarLogin() {
    this.cambiarSpinner(true);
    
    // Expresión regular para validar el formato del correo
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (this.alumno.email === '' || this.alumno.password === '') {
      // Invocar alerta de campos vacíos
      await this.presentAlert_Autenticacion('Error');
      this.cambiarSpinner(false);
      return;
    }
  
    // Validar el formato del correo con la expresión regular
    if (!emailPattern.test(this.alumno.email)) {
      // Invocar alerta de formato de correo inválido
      await this.presentAlert_Autenticacion('Correo no válido');
      this.cambiarSpinner(false);
      return;
    }
  
    const login = await this.auth.loginBD(this.alumno.email, this.alumno.password);
    if (login) {
      // Extraer la parte antes del símbolo "@"
      const emailSinDominio = this.alumno.email.split('@')[0];
  
      let navigationExtras: NavigationExtras = {
        state: {
          email: emailSinDominio, // Pasar solo la parte antes de "@"
          password: this.alumno.password
        },
      };
      this.router.navigate(['/inicio'], navigationExtras);
    } else {
      await this.presentAlert_Autenticacion('Error');
    }
    
    this.cambiarSpinner(false);
  }
  
  

}