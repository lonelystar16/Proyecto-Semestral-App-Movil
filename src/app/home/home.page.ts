import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


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

// Constructor
  constructor(private router: Router) {}

  // Método que se ejecuta al hacer clic en el botón
  validar() {
    if (this.user.username.length != 0)
    {
      if (this.user.password.length != 0)
      {
      // Funciona
      this.mensaje = 'Usuario y contraseña correctos';
      // Crear objeto de navegación
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.user.username,
          pass: this.user.password
        },
      };
      // 
      this.router.navigate(['/registro'], navigationExtras);
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

