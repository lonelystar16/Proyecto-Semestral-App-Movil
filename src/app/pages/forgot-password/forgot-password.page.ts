import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Servicios/api.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
    standalone: false
})
export class ForgotPasswordPage implements OnInit {

  alumnos: any[] = [];

  reset = {
    first_password: '',
    second_password: '',
    email: ''
  };

  ngOnInit() {
    console.log('ForgotPasswordPage cargada');
    this.cargarLista();
  }

  constructor(
    private AlertController: AlertController,
    private router: Router,
    private api: ApiService) { }

    cargarLista() {
      this.api.getAlumnos().subscribe(
        (data) => {
          this.alumnos = data;
          console.log(this.alumnos);
        },
        (error) => {
          console.error('Error en la petición:', error);
        }
      )
    }









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
      message: 'Todos los campos están vacíos.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }

  async presentAlert_EmailNotFound() {
    const alert = await this.AlertController.create({
      cssClass: 'alerta-password-recovery',
      header: 'Error',
      message: 'Correo electrónico no encontrado.',
      buttons: ['Aceptar'],
      backdropDismiss: false
    });
    await alert.present();
  }

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

  validatePassword() {
    if (this.reset.email === '' || this.reset.first_password === '' || this.reset.second_password === '') {
      this.presentAlert_PasswordRecoveryEmpty();
      return;
    }

    if (this.reset.first_password !== this.reset.second_password) {
      this.presentAlert_PasswordRecovery();
      return;
    }

    this.api.getAlumnos().subscribe(
      alumnos => {
        const alumno = alumnos.find((alumno: any) => alumno.email === this.reset.email);
        if (alumno) {
          // Actualizar la contraseña del alumno
          alumno.password = this.reset.first_password;
          this.api.updateAlumno(alumno.id, alumno).subscribe(
            () => {
              this.validatePasswordRecovery();
            },
            error => {
              console.error('Error actualizando contraseña:', error);
            }
          );
        } else {
          this.presentAlert_EmailNotFound();
        }
      },
      error => {
        console.error('Error fetchando alumnos:', error);
      }
    );
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login', { skipLocationChange: true }); 
  }


}