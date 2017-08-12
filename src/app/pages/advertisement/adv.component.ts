import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '@angular/router';
import { BaMenuService } from '../../theme';
import * as _ from 'lodash';
import { AdvService } from './adv.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { GlobalState } from '../../global.state';
import { JwtService } from './../../shared/services/jwt.service';
import * as jQuery from 'jquery';
import { ViewChild } from '@angular/core';
import { AdvertisementComponent } from './advertisementModule/advertisement.component';
@Component({ /*<adv></adv>*/
  selector: 'adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.scss']
})
export class AdvComponent implements OnInit {
  users;
  data;
  feed;
  @ViewChild(AdvertisementComponent) child;
   form: FormGroup;
   name: AbstractControl;
   type: AbstractControl;
   description: AbstractControl;
   location: AbstractControl;
  constructor(private menuService: BaMenuService,
              private _state: GlobalState,
              fb: FormBuilder,
              private advService: AdvService,
             private jwtService: JwtService,
             private router: Router,
             /* private modalService: NgbModal*/) {
    this._state.notifyDataChanged('menu.isLanding', true);
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'description': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'location': ['', Validators.compose([Validators.required, Validators.minLength(3)])]
     // 'type': ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
    this.name = this.form.controls['name'];
    this.description = this.form.controls['description'];
    this.location = this.form.controls['location'];
    this.type = this.form.controls['type'];
  }
  onSubmit(values) {
      const userObj = this.jwtService.getUser();
      values['users'] = { 'id' : userObj.member.id } ;
      $('#closeModal').click();
      this.advService.addAdvertisement(values).subscribe((data) => {
        this.data = data;
        this.child._loadFeed();
        this.form.reset();
      });
}
  checkRole() {
    if (!this.jwtService.getUserToken()) {
    this.router.navigateByUrl('login');
    }
  }
  ngOnInit() {
  }
}
