import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/Servicios/authenticator.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  email = '';

  constructor(private router: Router,
              private auth: AuthenticatorService
  ) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      email: '';
    };
    if (state) {
      this.email = state.email;
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
  }

}
