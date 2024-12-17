import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
<<<<<<< Updated upstream:src/app/home/home.module.ts
  declarations: [HomePage]
=======
  declarations: [EncuentraViajesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
>>>>>>> Stashed changes:src/app/pages/encuentra-viajes/encuentra-viajes.module.ts
})
export class HomePageModule {}
