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

  email_regex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  recordarPassword = false;

  ngOnInit() { }

  constructor(private router: Router, private AlertController: AlertController, private AuthenticatorService: AuthenticatorService) { }

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

  validarLogin() {
    this.cambiarSpinner(true);

    setTimeout(() => {
      if (this.alumno.email.match(this.email_regex)) {
        if (this.alumno.password.length >= 6) {
          const emailFormateado = this.alumno.email.split('@')[0];

          // Llama al servicio de autenticación
          if (this.AuthenticatorService.login(emailFormateado, this.alumno.password)) {
            this.mensaje_login = 'Correo y contraseña válidos';

            let navigationExtras: NavigationExtras = {
              state: {
                email: emailFormateado,
                password: this.alumno.password,
              },
            };

            setTimeout(() => {
              this.router.navigate(['/inicio'], navigationExtras);
              this.cambiarSpinner(false);
            }, 1000);
          } else {
            this.cambiarSpinner(false);
            setTimeout(() => {
              this.presentAlert_Autenticacion('Error de autenticación');
            }, 500);
          }
        } else {
          this.cambiarSpinner(false);
          setTimeout(() => {
            this.presentAlert_Password();
          }, 500);
        }
      } else {
        this.cambiarSpinner(false);
        setTimeout(() => {
          this.presentAlert_Email();
        }, 500);
      }
    }, 100);
  }
}

