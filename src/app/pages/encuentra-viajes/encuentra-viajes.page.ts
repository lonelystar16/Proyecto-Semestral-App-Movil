/// <reference types="@types/google.maps" />
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-encuentra-viajes',
  templateUrl: './encuentra-viajes.page.html',
  styleUrls: ['./encuentra-viajes.page.scss'],
})
export class EncuentraViajesPage {
  @ViewChild('map', { static: false }) mapRef!: ElementRef; // Referencia al map
  map!: GoogleMap;

  constructor() {}

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement, // Uso correcto de ViewChild
      forceCreate: true,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }
}

