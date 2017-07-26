import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/sevices/user.service';
import { UsersModule } from './users.module';
import { GlobalState } from '../../global.state';
@Component({
  selector: 'usersManagement',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'email';
    sortOrder = 'asc';

    constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }

}