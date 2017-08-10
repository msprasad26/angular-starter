import { Component , OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { USER_PAGES_MENU } from './../pages.menu';
import { BaMenuService } from '../../theme';
import { JwtService } from './../../shared/services/jwt.service';

import * as _ from 'lodash';
@Component({
  selector: 'userDashboard',
  templateUrl: './userDashboard.component.html',
  styleUrls: ['./userDashboard.scss']
})
export class UserDashboardComponent implements OnInit {
  constructor(private menuService: BaMenuService,
              private jwtservice: JwtService,
              private router: Router) {
  }
  ngOnInit() {
    this.menuService.updateMenuByRoutes(<Routes>USER_PAGES_MENU);
    if (!this.jwtservice.getUserToken()) {
      this.router.navigateByUrl('login');
    }
  }
}
