import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {
  errorMessage: string = 'Opps! Algo salió mal. ';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  devolverInicio() {
    this.navCtrl.navigateBack('/inicio');
  }

  devolverLogin() {
    this.navCtrl.navigateBack('/login');
  }
}