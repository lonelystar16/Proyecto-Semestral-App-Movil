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

  // Modelo de datos del usuario que va a iniciar sesión
  alumno = {
    email: '',
    password: ''
  };

  // Variable para mostrar o no el spinner
  spinner = false;

  // Checkbox para recordar contraseña
  recordarPassword = false;

  constructor(
    private router: Router,
    private AlertController: AlertController,
    private auth: AuthenticatorService
  ) {}

  ngOnInit() {}

  // Mostrar alerta cuando el correo no es válido
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

  // Mostrar alerta cuando la contraseña es incorrecta
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

  // Mostrar alerta de error de autenticación genérica
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

  // Cambiar el estado del spinner (mostrar/ocultar)
  cambiarSpinner(estado: boolean) {
    this.spinner = estado;
  }

  // Función para validar el login
  async validarLogin() {
    this.cambiarSpinner(true); // Mostrar el spinner al iniciar la validación

    // Expresión regular para validar el formato del correo
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Verificar si los campos están vacíos
    if (this.alumno.email === '' || this.alumno.password === '') {
      // Invocar alerta de campos vacíos
      await this.presentAlert_Autenticacion('Error');
      this.cambiarSpinner(false); // Ocultar el spinner
      return;
    }

    // Validar el formato del correo con la expresión regular
    if (!emailPattern.test(this.alumno.email)) {
      // Invocar alerta de formato de correo inválido
      await this.presentAlert_Autenticacion('Correo no válido');
      this.cambiarSpinner(false); // Ocultar el spinner
      return;
    }

    // Llamada al servicio de autenticación
    const login = await this.auth.loginBD(this.alumno.email, this.alumno.password);
    
    // Si el login es exitoso, redirigir a la página de inicio
    if (login) {
      // Extraer la parte antes del símbolo "@"
      const emailSinDominio = this.alumno.email.split('@')[0];

      // Pasar los datos del usuario al estado de navegación
      let navigationExtras: NavigationExtras = {
        state: {
          email: emailSinDominio, // Pasar solo la parte antes de "@"
          password: this.alumno.password
        },
      };

      // Redirigir al usuario a la página de inicio
      this.router.navigate(['/inicio'], navigationExtras);
    } else {
      // Si el login falla, mostrar alerta de error
      await this.presentAlert_Autenticacion('Error');
    }

    this.cambiarSpinner(false); // Ocultar el spinner después de la validación
  }

}
