import { Routes, RouterModule } from '@angular/router';

import { CalanderComponent } from './calander.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CalanderComponent
  }
];


export const routing = RouterModule.forChild(routes);
