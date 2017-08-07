import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../shared/services/jwt.service';
import { UserService } from '../../shared/services/user.service';
import { BaMenuService } from '../../theme';
import { PAGES_MENU } from '../pages.menu';
import { Routes } from '@angular/router';
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {

  constructor(private userService: UserService,
              private router: Router,
              private jwtservice: JwtService,
              private _menuService: BaMenuService) {
  }
  ngOnInit() {

    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);

   /* if (this.jwtservice.getUserToken()) {
      if (this.jwtservice.getMemberRole() !== 'admin') {
        this.router.navigateByUrl('userDashboard');
      }
    }else {
      this.router.navigateByUrl('login');
    }*/
  }
}
