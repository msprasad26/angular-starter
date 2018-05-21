import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { EmployeeModule } from './employee.module';
import { GlobalState } from '../../global.state';
import { Routes } from '@angular/router';
import { PAGES_MENU } from '../pages.menu';
import { BaMenuService } from '../../theme';
import { JwtService } from '../../shared/services/jwt.service';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'employeeManagement',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    data;
    uid;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  userRoles = {};
  params = {};

    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'email';
    sortOrder = 'asc';

    constructor(
      private userService: UserService,
      private _menuService: BaMenuService,
      private router: Router,
      private jwtservice: JwtService
    ) {
    this.userService.getAllEmployees().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
  toInt(num: string) {
        return +num;
    }
  sortByWordLength = (a: any) => {
        return a.city.length;
    }
  onItemSelect(item) {
    this.params['uRoleName'] = item.itemName;
    this.userService.updateUserRole(this.params, this.uid).subscribe( (data) => {
    })
  }
  OnItemDeSelect(item) {
    this.params['uRoleName'] = item.itemName;
    this.userService.removeRole(this.params, this.uid).subscribe( (data) => {})
  }

  ngOnInit() {
    

  }
}


