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
    username: '',
    email: '',
    password: ''
  };


  constructor(
    private router: Router,
    private auth: AuthenticatorService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async registrar() {
    console.log(this.alumno);
    this.auth
    .registrar(this.alumno)
    .then((res) => {
      this.router.navigate(['/login']);
      return this.toastController.create({
        message: 'Usuario registrado con éxito',
        duration: 2000,
        position: 'bottom',
        color: 'success'
      });
    })
    .then((toast) => toast.present())
    .catch((error) => {
      return this.toastController.create({
        message: 'Error al registrar usuario',
        duration: 2000,
        position: 'bottom',
        color: 'danger'
      })
      .then((toast) => toast.present())
    })
  }


}
