
import { Routes, RouterModule } from '@angular/router';

import { FileConverterComponent } from './fileConverter.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: FileConverterComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

