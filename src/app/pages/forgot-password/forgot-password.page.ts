import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  // Objeto que almacena los datos del formulario de recuperación de contraseña
  reset = {
    first_password: '',
    second_password: ''
  };

  ngOnInit() {
  }


  constructor(private AlertController: AlertController) { }

  async presentAlert_PasswordRecovery() {
    const alert = await this.AlertController.create({
      cssClass: 'alerta-password-recovery',
      header: 'Error',
      message: 'Las contraseñas no coinciden.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }

  async presentAlert_PasswordRecoveryEmpty() {
    const alert = await this.AlertController.create({
      cssClass: 'alerta-password-recovery',
      header: 'Error',
      message: 'Ambos campos están vacíos.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }

  // Función para mostrar que las contraseñas se han cambiado correctamente
  async validatePasswordRecovery() {
    const alert = await this.AlertController.create({
      cssClass: 'alerta-password-recovery',
      header: 'Éxito',
      message: 'Contraseñas cambiadas correctamente.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }



  // Validar que las contraseñas sean iguales
  // Validar de que si ambos campos están vacíos,se muestre el mensaje de error
  validatePassword() {
    if (this.reset.first_password === this.reset.second_password) {
      if (this.reset.first_password === '' && this.reset.second_password === '') {
        this.presentAlert_PasswordRecoveryEmpty();
      } else {
        this.validatePasswordRecovery();
      }     
    } else {
      this.presentAlert_PasswordRecovery();
    }
  }












}
