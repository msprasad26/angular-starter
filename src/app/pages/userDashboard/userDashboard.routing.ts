
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './userDashboard.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

