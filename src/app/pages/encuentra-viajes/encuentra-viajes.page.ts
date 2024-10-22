import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuentra-viajes',
  templateUrl: './encuentra-viajes.page.html',
  styleUrls: ['./encuentra-viajes.page.scss'],
})
export class EncuentraViajesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // Aquí puedes agregar la lógica para cargar el mapa (Google Maps o Leaflet)
  }

  confirmarViaje() {
    // Aquí iría la lógica para confirmar los puntos seleccionados en el mapa
  }
}
