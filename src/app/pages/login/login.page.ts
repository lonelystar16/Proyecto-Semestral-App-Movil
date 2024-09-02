/*
  * Importaciones
  */
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

  //Variables
  alumno = {
    email: '',
    password: ''
  };
  // Mensaje
  mensaje_login = '';
  // Spinner
  spinner = false;

  email_regex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  recordarPassword = false;

  ngOnInit() {
  }

  
  // Constructor
  constructor(private router: Router, private AlertController: AlertController) {}
  
  
  // Funcion para mostrar alerta de error
  async presentAlert_Email() {
    const alert = await this.AlertController.create({
      cssClass: '.alerta-login',
      header: 'Error',
      message: 'Correo ingresado no válido y/o no registrado.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }

  async presentAlert_Password() {
    const alert = await this.AlertController.create({
      cssClass: '.alerta-login',
      header: 'Error',
      message: 'Contraseña ingresada no valida y/o erróneo.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }
  // 
  
  // Spinner
    cambiarSpinner() {
      this.spinner = !this.spinner;
    }

    validarLogin() {
      // Validar correo con expresión regular
      if (this.alumno.email.match(this.email_regex)) {
        // Validar contraseña
        if (this.alumno.password.length >= 6) {
          this.mensaje_login = 'Correo y contraseña válidos';
          let navigationExtras: NavigationExtras = {
            state: {
              user: this.alumno.email,
              password: this.alumno.password
            },
          };
          this.cambiarSpinner();
          setTimeout(() => {
            this.router.navigate(['/home'], navigationExtras);
            this.cambiarSpinner();
            
          }, 2500);
          
        } else {
          setTimeout(() => {
            this.presentAlert_Password();
          }, 1500);
        }
      } else {
        setTimeout(() => {
          this.presentAlert_Email();
        }, 1500);
        }
      } 

      
    



  }

  