import { Component , OnInit } from '@angular/core';
import { HomeModule } from './home.module';
import { GlobalState } from '../global.state';
import * as $ from 'jquery';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private _state: GlobalState) {

    this._state.notifyDataChanged('menu.isLanding', true);
  }
}





