import { Routes, RouterModule } from '@angular/router';

import { conversationComponent } from './conversation.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: conversationComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
