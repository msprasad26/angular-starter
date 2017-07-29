import { Component , OnInit } from '@angular/core';
import { HomeModule } from './home.module';
import { GlobalState } from '../global.state';
import * as $ from 'jquery';
import { JwtService } from './../shared/sevices/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private _state: GlobalState , private jwtservice: JwtService , private router: Router) {

    this._state.notifyDataChanged('menu.isLanding', true);
  }
  /*public start() {
    if (this.jwtservice.getUserToken()) {
      if (this.jwtservice.getMemberRole() === 'admin') {
        this.router.navigateByUrl('pages');
      }else {
        this.router.navigateByUrl('pages/userDashboard');
      }
    }else {
      this.router.navigateByUrl('login');
    }
  }*/
}





