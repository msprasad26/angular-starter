import { Component , OnInit } from '@angular/core';
import { HomeModule } from './home.module';
import { GlobalState } from '../global.state';
import * as $ from 'jquery';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/sevices/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(private _state: GlobalState,
              fb: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this._state.notifyDataChanged('menu.isLanding', true);

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];

  }

 /* public onSubmit(values: Object) {
    this.submitted = true;
    if (this.form.valid) {
      this.userService.login(values).subscribe(
        data => this.router.navigateByUrl('pages'),
      );
    }
  }*/
  public onSubmit(values: Object) {
    this.submitted = true;
    if (this.form.valid) {
      this.userService.login(values).subscribe(
        response => {
          this.userService.getUserRole(response).subscribe(
            data => {
              console.log(data);
              let userRole = 'guest';
              if (data.length > 0 ) {

                const roles = _.map(data, 'uRoleName');
                if ( _.map(roles, 'role:app.tenant.admin') ) {
                  userRole = 'admin';
                  this.userService.setRole(userRole);
                  this.router.navigateByUrl('pages');
                }
              }else {
                /* alert(userRole);*/
                this.userService.setRole(userRole);
                this.router.navigateByUrl('userDashboard');
              }
            });
        });
    }
  }

}







