import { Routes, RouterModule } from '@angular/router';

import {ProfileDetails } from './profiledetails.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProfileDetails
  }
];


export const routing = RouterModule.forChild(routes);
