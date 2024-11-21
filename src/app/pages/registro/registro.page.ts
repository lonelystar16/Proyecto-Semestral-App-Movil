import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticatorService } from 'src/app/Servicios/authenticator.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  alumno = {
    nombre_usuario: '',
    email: '',
    password: ''
  };


  constructor(
    private router: Router,
    private auth: AuthenticatorService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    console.log('ngOnInit Inicializado');
  }

  async registrar() {
    // Verificar si los campos están vacíos
    if (this.alumno.nombre_usuario === '' || this.alumno.email === '' || this.alumno.password === '') {
      this.presentToast('Todos los campos son obligatorios', 'danger');
      return;
    }

    // Validar el formato del email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.alumno.email)) {
      this.presentToast('El formato del email es incorrecto', 'danger');
      return;
    }

    // Registrar al usuario en Json Server usando AuthenticatorService
    this.auth.registrar(this.alumno).subscribe(
      (res) => {
        if (res) {
          this.presentToast('Usuario registrado correctamente', 'success');
          this.router.navigate(['/login']);
        } else {
          this.presentToast('No se pudo registrar al usuario', 'danger');
        }
      },
      (error) => {
        this.presentToast('Error en el servidor', 'danger');
        console.error(error);
      }
    );
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login', { skipLocationChange: true }); 
  }

}
