// inicio.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/Servicios/authenticator.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
    standalone: false
})
export class InicioPage implements OnInit {
  
  email = '';
  nombre_usuario = '';

  constructor(private router: Router,
              private auth: AuthenticatorService) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      email: string;
      nombre_usuario: string;
    };
    if (state) {
      this.email = state.email;
      this.nombre_usuario = state.nombre_usuario;
      console.log('Datos recibidos en InicioPage correctamente'); // Imprimir los datos recibidos
    }
  }

  irAEncuentraViajes() {
    this.router.navigate(['/encuentra-viajes']); 
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  
  ngOnInit() {
    console.log('ngOnInit InicioPage');
  }

}