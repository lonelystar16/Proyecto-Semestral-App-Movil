import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],

  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistroPage implements OnInit {

  username = '';

  startDate = Date.now();
  // 
  constructor(private router: Router) {
    // 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      user: '';
      pass: '';
    };
    if (state) {
      this.username = state.user;
    }
  }

  ngOnInit() {
  }

}
