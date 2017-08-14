
import { Routes, RouterModule } from '@angular/router';

import { LanguageTranslatorComponent } from './languageTranslator.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: LanguageTranslatorComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

