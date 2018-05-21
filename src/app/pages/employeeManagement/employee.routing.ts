import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  }
];


export const routing = RouterModule.forChild(routes);
