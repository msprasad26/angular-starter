import { Component } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss']
})
export class CalanderComponent {
}
