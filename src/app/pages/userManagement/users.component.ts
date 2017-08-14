import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { UsersModule } from './users.module';
import { GlobalState } from '../../global.state';
import { Routes } from '@angular/router';
import { PAGES_MENU } from '../pages.menu';
import { BaMenuService } from '../../theme';
import { JwtService } from '../../shared/services/jwt.service';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'usersManagement',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
    this.userService.getAllUsers().subscribe((data) => {
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
  getUserDetails(id) {
      this.uid = id;
      if (this.jwtservice.getMemberRole() === 'admin') {
        this.selectedItems = [];
        this.userService.getUserRole(this.uid).subscribe((data) => {
          const roles = _.map(data , 'uRoleName');
          let that = this;
          _.each(roles, function (value) {
            that.selectedItems.push({ 'id' : value, 'itemName': value });
          });
          $('#openModalButton').click();
        });
      }
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
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    if (!this.jwtservice.getUserToken()) {
      this.router.navigateByUrl('login');
    }

    this.userService.getTenantRoles(environment.tenant_id).subscribe( (data) => {
      let that = this;
      const allRoles = _.map(data, 'uRoleName');
      _.each(allRoles, function(role) {
        that.dropdownList.push({ 'id': role, 'itemName': role } );
      });
    });
    this.dropdownSettings = {
      singleSelection: false,
      // text:"Select Countries",
      // selectAllText: 'UnSelect All',
     // unSelectAllText:'UnSelect All',
     //  enableSearchFilter: true
    };

  }
}


