import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' },
  {
    path: 'login',
    loadChildren: 'app/pages/advertisement/adv.module#AdvModule'
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
