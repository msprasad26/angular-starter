import { Component , OnInit } from '@angular/core';
import { HomeModule } from './home.module';
import { GlobalState } from '../global.state';
import * as $ from 'jquery';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { Errors } from '../shared/models/errors.model';
import { JwtService } from '../shared/services/jwt.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{



  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public shouldshow: boolean= false;
  public buttonshow: boolean= false;

  constructor(private _state: GlobalState,
              fb: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private errors: Errors,
              private jwtservice: JwtService

  ) {
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


 ngOnInit() {
   if (this.jwtservice.getUserToken()) {
     this.buttonshow = true;
   }
 }

  public onSubmit(values: Object) {
    this.submitted = true;
    if (this.form.valid) {
      this.userService.login(values).subscribe(
        response => {


          $('#closeModal').click();
          this.form.reset();
          this.userService.getUserRole(response.member.id).subscribe(

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
        } ,

        err => {
          this.errors = err;
          console.log(err);
          /* $('#over').modal('show');


           setTimeout(function() {
             $('#over').modal('hide');
           }, 1500);
 */
          this.shouldshow = true;
        },
      );
    }
  }
  logout() {
    this.userService.logout();
    this.buttonshow = false;
  }
}

