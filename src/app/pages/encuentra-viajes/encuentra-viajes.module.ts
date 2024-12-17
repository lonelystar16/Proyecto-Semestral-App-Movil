import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuentraViajesPageRoutingModule } from './encuentra-viajes-routing.module';

import { EncuentraViajesPage } from './encuentra-viajes.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuentraViajesPageRoutingModule
  ],
  declarations: [EncuentraViajesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EncuentraViajesPageModule {}
