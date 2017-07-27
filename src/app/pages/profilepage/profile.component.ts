import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { UserService } from '../../shared/sevices/user.service';
import { ProfileModule } from './profile.module';
import { GlobalState } from '../../global.state';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from '../../shared/sevices/jwt.service';
@Component({
  selector: 'profilepage',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
tostr =JSON.stringify;
  public form:FormGroup;
  public firstName:AbstractControl;
  public username:AbstractControl;
  public password:AbstractControl;
  /*public repeatPassword:AbstractControl;
  public passwords:FormGroup;
*/
  public submitted:boolean = false;

  constructor(fb:FormBuilder , private userService: UserService, private route: ActivatedRoute,
              private router: Router,private jwtservice : JwtService) {

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
  ngOnInit(){
   var user=this.jwtservice.getUser()
    console.log(user);
   var firstName= user.member.firstName;
console.log(firstName);
    // this.firstName = this.form.controls['firstName'];

    // const data:any={'firstName':user.member.firstName};
    // this.form = this.initForm(data);

}



  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      console.log(values);

      this.userService.update(values).subscribe(
        data => this.router.navigateByUrl('login'),
      );
    }
  }


}
