import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControladorApiPage } from './controlador-api.page';

const routes: Routes = [
  {
    path: '',
    component: ControladorApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControladorApiPageRoutingModule {}
