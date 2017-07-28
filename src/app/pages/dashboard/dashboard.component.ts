import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JwtService } from './../../shared/sevices/jwt.service';
import { UserService } from '../../shared/sevices/user.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(private userService: UserService,
              private router: Router, private jwtservice: JwtService) {
  }
  ngOnInit() {
    if (this.jwtservice.getUserToken()) {
      if (this.jwtservice.getMemberRole() !== 'admin') {
        this.router.navigateByUrl('userDashboard');
      }
    }else {
      this.router.navigateByUrl('login');
    }
  }
}
