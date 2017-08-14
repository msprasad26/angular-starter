
import { Routes, RouterModule } from '@angular/router';

import { BlueMixComponent } from './blueMix.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: BlueMixComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

