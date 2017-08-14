import { Component , OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { USER_PAGES_MENU } from './../pages.menu';
import { BaMenuService } from '../../theme';
import { JwtService } from './../../shared/services/jwt.service';
import { GlobalState } from './../../global.state';


import * as _ from 'lodash';
@Component({
  selector: 'blueMixComponent',
  templateUrl: './blueMix.html',
  styleUrls: ['./blueMix.scss']
})
export class BlueMixComponent implements OnInit {
  data;
  constructor(private menuService: BaMenuService,
              private jwtservice: JwtService,
              private router: Router,
              private _state: GlobalState
             ) {
    this._state.subscribe('serviceResponded', (data) => {
      this.data = data;
      console.log("hi"+ this.data);
    });
  }
  ngOnInit() {
    /*this.menuService.updateMenuByRoutes(<Routes>USER_PAGES_MENU);
    if (!this.jwtservice.getUserToken()) {
      this.router.navigateByUrl('login');
    }*/


    }

  }

