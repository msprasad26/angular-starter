
import { Routes, RouterModule } from '@angular/router';

import { VisualRecognitionComponent } from './VisualRecognition.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: VisualRecognitionComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

