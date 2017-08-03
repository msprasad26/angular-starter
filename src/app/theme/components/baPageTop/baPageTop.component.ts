import {Component} from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import {GlobalState} from '../../../global.state';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState, private userService: UserService, private route: ActivatedRoute,
              private router: Router ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
  public signout() {
    this.userService.logout();
    this.router.navigateByUrl('home');
  }
}
