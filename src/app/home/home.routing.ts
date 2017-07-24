import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent ,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
