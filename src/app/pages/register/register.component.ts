import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors } from '../../shared/models/errors.model';


@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
  errors: Errors = new Errors();

  public shouldshow:boolean=false;
  public form:FormGroup;
  public firstName:AbstractControl;
  public username:AbstractControl;
  public password:AbstractControl;
  /*public repeatPassword:AbstractControl;
  public passwords:FormGroup;
*/
  public submitted:boolean = false;

  constructor(fb:FormBuilder , private userService: UserService, private route: ActivatedRoute,
              private router: Router) {

    this.form = fb.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      /*'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})*/
    });

    this.firstName = this.form.controls['firstName'];
    this.username = this.form.controls['username'];
   /* this.passwords = <FormGroup> this.form.controls['passwords'];*/
    this.password = this.form.controls['password'];
    /*this.repeatPassword = this.passwords.controls['repeatPassword'];*/
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
       console.log(values);

      this.userService.signup(values).subscribe(
        data => this.router.navigateByUrl('login'),

        err => {
          this.errors = err;
          console.log(err);

          $('#over').modal('show');

          setTimeout(function() {
            $('#over').modal('hide');
          }, 1500);

          this.shouldshow = true;


        }



        );
    }
  }
}
