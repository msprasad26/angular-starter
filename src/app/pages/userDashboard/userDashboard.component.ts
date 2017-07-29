import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/sevices/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { USER_PAGES_MENU } from './../pages.menu';
import { Routes } from '@angular/router';
import { BaMenuService } from '../../theme';
import * as _ from 'lodash';
@Component({
  selector: 'userDashboard',
  templateUrl: './userDashboard.component.html',
  styleUrls: ['./userDashboard.scss']
})
export class UserDashboardComponent {
  constructor(private menuService: BaMenuService) {

  }
  ngOnInit() {
    this.menuService.updateMenuByRoutes(<Routes>USER_PAGES_MENU);
  }
}
