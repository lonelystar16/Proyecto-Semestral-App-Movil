// login.page.ts
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

  recordarDatos = false;

  ngOnInit() { }

  constructor(
    private router: Router,
    private AlertController: AlertController, 
    private auth: AuthenticatorService,
    ) { }

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
      message: 'Usuario no registrado en el sistema. Favor registrarse.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }

  cambiarSpinner(estado: boolean) {
    this.spinner = estado;
  }

  async validarLogin() {
    this.cambiarSpinner(true);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (this.alumno.email === '' || this.alumno.password === '') {
      await this.presentAlert_Autenticacion('Error: Campos vacíos');
      this.cambiarSpinner(false);
      return;
    }

    if (!emailPattern.test(this.alumno.email)) {
      await this.presentAlert_Autenticacion('Error: Formato de correo no válido');
      this.cambiarSpinner(false);
      return;
    }

    try {
      const response = await this.auth.loginBD(this.alumno.email, this.alumno.password).toPromise();
      if (response && response.success) {
        const emailSinDominio = this.alumno.email.split('@')[0];
        let navigationExtras: NavigationExtras = {
          state: {
            email: emailSinDominio,
            nombre_usuario: response.nombre_usuario,
            password: this.alumno.password
          }
        };
        this.router.navigate(['/inicio'], navigationExtras);
      } else {
        await this.presentAlert_Autenticacion('Error: Credenciales incorrectas');
      }
    } catch (error) {
      console.log('Error en la conexión con JSON Server:', error);
      await this.presentAlert_Autenticacion('Error al conectar con el servidor');
    } finally {
      this.cambiarSpinner(false);
    }
  }
}