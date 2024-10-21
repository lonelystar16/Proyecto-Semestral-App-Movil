import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControladorApiPageRoutingModule } from './controlador-api-routing.module';

import { ControladorApiPage } from './controlador-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControladorApiPageRoutingModule
  ],
  declarations: [ControladorApiPage]
})
export class ControladorApiPageModule {}
