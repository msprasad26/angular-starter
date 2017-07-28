import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { UserService } from '../../shared/sevices/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from '../../shared/sevices/jwt.service';
@Component({
  selector: 'profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.scss']
})
export class ProfileDetails {
  public form:FormGroup;
  public firstName:AbstractControl;
  public lastName:AbstractControl;
  public phone:AbstractControl;
  public email:AbstractControl;
  // public password:AbstractControl;
  public uid:AbstractControl;
  //
  public description:AbstractControl;
  public socialAccounts:AbstractControl;

  public submitted:boolean = false;

  constructor(fb:FormBuilder , private userService: UserService, private route: ActivatedRoute,
              private router: Router,private jwtservice : JwtService) {

    this.form = fb.group({
      'firstName': ['', Validators.compose([Validators.required])],
      'lastName': ['', Validators.compose([Validators.required])],
      'description': ['', Validators.compose([Validators.required])],


      'email': ['', Validators.compose([Validators.required])],
      // 'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],

      'uid': ['', Validators.compose([Validators.required])],
      'phone': ['', Validators.compose([Validators.required])],
      'socialAccounts': ['', Validators.compose([Validators.required])],
    });

    this.firstName = this.form.controls['firstName'];
    this.email = this.form.controls['email'];
    this.lastName = this.form.controls['lastName'];
    this.phone = this.form.controls['phone'];
    // this.password = this.form.controls['password'];
    // this.uid = this.form.controls['uid'];
    //
    this.description = this.form.controls['description'];
    this.socialAccounts = this.form.controls['socialAccounts'];
  }
  ngOnInit(){
    var user=this.jwtservice.getUser()
    console.log(user);


    this.firstName= user.member.firstName;
    // this.username= user.member.username;
    this.uid = user.member.id;
    this.email = user.member.email;
    this.lastName= user.member.lastName;
    this.phone= user.member.phone;
    this.description= user.member.description;
    this.socialAccounts= user.member.socialAccounts;

    this.form.patchValue({firstName:this.firstName});
    this.form.patchValue({uid:this.uid});
    this.form.patchValue({email:this.email});
    this.form.patchValue({lastName:this.lastName});
    this.form.patchValue({phone:this.phone});
    this.form.patchValue({description:this.description});
    this.form.patchValue({socialAccounts:this.socialAccounts});
  }



  public onSubmit() {
    console.log("hi");
    this.router.navigateByUrl('profile');




    /*this.submitted = true;

    this.userService.getDetails(values).subscribe(
      data => this.router.navigateByUrl('dashboard'));

    // if (this.form.valid) {
    //   console.log(values);
    //
    //   this.userService.update(values).subscribe(
    //     data => this.router.navigateByUrl('login'),
    //   );
    // }*/
  }


}
