import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,

  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule { }
