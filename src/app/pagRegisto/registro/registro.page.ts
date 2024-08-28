import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username = '';

  // 
  constructor(private router: Router) {
    // 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      user: '';
      pass: '';
    };
    this.username = state.user;
  }
  ngOnInit() {
  }

}
