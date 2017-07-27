import {Component,Input } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../shared/sevices/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors } from '../../shared/models/errors.model';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  errors: Errors = new Errors();
  public form:FormGroup;
  public username:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public shouldshow:boolean=false;

  constructor(fb:FormBuilder , private userService: UserService, private route: ActivatedRoute,
              private router: Router) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object) {
    this.submitted = true;
    this.errors = new Errors();
    if (this.form.valid) {
      this.userService.login(values).subscribe(
        data => this.router.navigateByUrl('pages'),
        err => {
          this.errors = err;
          console.log(err);

          // setTimeout(function() {
          //   $('.alert').fadeOut('slow');}, 3000
          // );


          $('#over').modal('show');

          setTimeout(function() {
            $('#over').modal('hide');
          }, 1500);

          this.shouldshow=true;
        }
      );
    }
  }
}
