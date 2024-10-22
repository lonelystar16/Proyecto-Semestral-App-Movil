import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuentraViajesPage } from './encuentra-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: EncuentraViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuentraViajesPageRoutingModule {}
