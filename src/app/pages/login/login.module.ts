import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
