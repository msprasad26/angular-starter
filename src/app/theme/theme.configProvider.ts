import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { colorHelper } from './theme.constants';

import { environment } from '../../environments/environment';


@Injectable()
export class BaThemeConfigProvider {

  private basic: any;
  private colorScheme: any;
  private dashboardColors: any;
  private conf: any;
  private theme:any;
 // value= '{ environment.theme3 }';

  // value= 'mint';

  constructor( ) {

    this.theme = environment.theme;

     if (this.theme === 'mint') {
       this.basic = {
         defaultText: '#8bd22f' }

     } else {
       this.basic = {
         default: '#ffffff',
         defaultText: '#ffffff', //#ffffff
         border: '#dddddd',     //#dddddd
         borderDark: '#aaaaaa',
       };
     }

    // main functional color scheme
    this.colorScheme = {
      primary: '#00abff',
      info: '#40daf1',
      success: '#8bd22f',
      warning: '#e7ba08',
      danger: '#f95372',
    };

    // dashboard colors for charts
    this.dashboardColors = {
      blueStone: '#40daf1',
      surfieGreen: '#00abff',
      silverTree: '#1b70ef',
      gossip: '#3c4eb9',
      white: '#ffffff',
    };

    this.conf = {
      theme: {
        name: 'dark',
      },
      colors: {
        default: this.basic.default,
        defaultText: this.basic.defaultText,
        border: this.basic.border,
        borderDark: this.basic.borderDark,

        primary: this.colorScheme.primary,
        info: this.colorScheme.info,
        success: this.colorScheme.success,
        warning: this.colorScheme.warning,
        danger: this.colorScheme.danger,

        primaryLight: colorHelper.tint(this.colorScheme.primary, 30),
        infoLight: colorHelper.tint(this.colorScheme.info, 30),
        successLight: colorHelper.tint(this.colorScheme.success, 30),
        warningLight: colorHelper.tint(this.colorScheme.warning, 30),
        dangerLight: colorHelper.tint(this.colorScheme.danger, 30),

        primaryDark: colorHelper.shade(this.colorScheme.primary, 15),
        infoDark: colorHelper.shade(this.colorScheme.info, 15),
        successDark: colorHelper.shade(this.colorScheme.success, 15),
        warningDark: colorHelper.shade(this.colorScheme.warning, 15),
        dangerDark: colorHelper.shade(this.colorScheme.danger, 15),

        dashboard: {
          blueStone: this.dashboardColors.blueStone,
          surfieGreen: this.dashboardColors.surfieGreen,
          silverTree: this.dashboardColors.silverTree,
          gossip: this.dashboardColors.gossip,
          white: this.dashboardColors.white,
        },

        custom: {
          dashboardPieChart: colorHelper.hexToRgbA(this.basic.defaultText, 0.8),
          dashboardLineChart: this.basic.defaultText,
        }
      }
    };

  }



  get() {
    return this.conf;
  }



  changeTheme(theme: any) {

    _.merge(this.get().theme, theme);


    // if ( this.get().theme === 'mint') {
    //   return this.conf1;
       // this.defaultText: '#8bd22f'
    // }
    // if ( this.get().theme === 'dark') {
    //   return this.conf;
    // }
    // if ( this.get().theme === 'ng2') {
    //   return this.conf2;
    // }
    // if ( this.get().theme === 'blur') {
    //   return this.conf3;
    // }

  }

  changeColors(colors: any) {
    _.merge(this.get().colors, colors);
  }
}
