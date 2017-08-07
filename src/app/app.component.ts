import { Component, ViewContainerRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { BaThemeConfig } from './theme/theme.config';
import { layoutPaths } from './theme/theme.constants';
import { UserService } from './shared/services/user.service';
import { JwtService } from './shared/services/jwt.service';
import { Errors } from './shared/models/errors.model';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    
   <main [class.menu-collapsed]="isMenuCollapsed" baThemeRun  >
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main> 
  `,
  providers: [ UserService, JwtService]
})
export class App implements OnInit {

  isMenuCollapsed: boolean = false;
  isLanding: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private viewContainerRef: ViewContainerRef,
              private themeConfig: BaThemeConfig,
              private userservice: UserService,
              private jwtservice: JwtService,
              private route: ActivatedRoute,
              private router: Router
              ) {

    themeConfig.config();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
    this._state.subscribe('menu.isLanding', (isCollapsed) => {
      this.isLanding = true;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load('assets/img/sky-bg.jpg'));
  }

  ngOnInit() {
    if (!this.jwtservice.getClientToken() ) {
      this.userservice.token();
      // this.userservice.signup();
    } else {
      console.log(this.jwtservice.getClientToken());
    }
  }
}
