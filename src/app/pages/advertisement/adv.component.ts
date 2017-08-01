import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { PAGES_MENU } from './../pages.menu';
import { Routes } from '@angular/router';
import { BaMenuService } from '../../theme';
import * as _ from 'lodash';

@Component({
  selector: 'adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.scss']
})

export class AdvComponent implements OnInit {
  constructor(private menuService: BaMenuService) {}

  ngOnInit() {
    // this.menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
