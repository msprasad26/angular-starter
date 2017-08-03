import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { PAGES_MENU } from './../pages.menu';
import { Routes } from '@angular/router';
import { BaMenuService } from '../../theme';
import * as _ from 'lodash';
import { AdvService } from './adv.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { GlobalState } from '../../global.state';
import { JwtService } from './../../shared/services/jwt.service';

//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { DefaultModal } from '../ui/components/modals/default-modal/default-modal.component';
@Component({
  selector: 'adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.scss']
})

export class AdvComponent implements OnInit {
  users;
  data;
  public form: FormGroup;
  public name: AbstractControl;
  public type: AbstractControl;
  public description: AbstractControl;
  public location: AbstractControl;
  constructor(private menuService: BaMenuService,
              private _state: GlobalState,
              fb: FormBuilder,
              private advService: AdvService,
             private jwtService: JwtService,
             /* private modalService: NgbModal*/) {

    this._state.notifyDataChanged('menu.isLanding', true);

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'description': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'location': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'type': ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

    this.name = this.form.controls['name'];
    this.description = this.form.controls['description'];
    this.location = this.form.controls['location'];
    this.type = this.form.controls['type'];

  }
  public onSubmit(values: Object) {
    const userObj = this.jwtService.getUser();
    values['users'] = { 'id' : userObj.member.id } ;
    console.log(values);
    this.advService.addAdvertisement(values).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
}
  ngOnInit() {
  }
}
