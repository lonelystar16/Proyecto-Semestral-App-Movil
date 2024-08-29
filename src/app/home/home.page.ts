import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Objeto JSON que se enviará a la página de detalles
  user = {
    username: '',
    password: ''
  };
  // Mensaje 
  mensaje = '';
  spinner = false;


  // Constructor
  constructor(private router: Router, private animationController: AnimationController) { }

  // Generar animación
  generarAnimacion() {
    const elemento = document.querySelector('#GwenIcon') as HTMLElement;
    // Crear animación
    const animacion = this.animationController.create()
      .addElement(elemento)
      .duration(3000)
      .iterations(Infinity)
      .fromTo('scale', '1', '0.5');

    // Reproducir animación
    animacion.play();
  }
  ngAfterContentInit() {
    this.generarAnimacion();
  }



  // Método que se ejecuta al hacer clic en el botón
  cambiarSpinner() {
    this.spinner = !this.spinner;
  }


  validar() {
    if (this.user.username.length != 0) {
      if (this.user.password.length != 0) {
        // Funciona
        this.mensaje = 'Usuario y contraseña correctos';
        // Crear objeto de navegación
        let navigationExtras: NavigationExtras = {
          state: {
            user: this.user.username,
            pass: this.user.password
          },
        };
        this.cambiarSpinner()
        setTimeout(() => {
          this.router.navigate(['/registro'], navigationExtras);
          this.cambiarSpinner();
          this.mensaje = '';
        }, 3000);
        // 
      } else {
        // No funciona
        this.mensaje = 'Contraseña incorrecta';
      }
    } else {
      // No funciona
      this.mensaje = 'Usuario incorrecto';
    }
  }
}

