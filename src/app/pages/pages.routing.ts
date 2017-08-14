/*import { Routes, RouterModule } from '@angular/router';*/
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'userDashboard',
    loadChildren: 'app/pages/userDashboard/userDashboard.module#UserDashboardModule'
  },
  /*{
    path: 'blueMixServices',
    loadChildren: 'app/pages/blueMixServices/blueMix.module#BlueMixModule'
  },*/
  {
    path: 'profiledetails',
    loadChildren: 'app/pages/profile/profiledetails.module#ProfiledetailsModule'
  },
  {
    path: 'profile',
    loadChildren: 'app/pages/profilepage/profile.module#ProfileModule'
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      { path: 'usersManagement', loadChildren: './userManagement/users.module#UsersModule' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
      { path: 'advertisement', loadChildren: './advertisement/adv.module#AdvModule' },
      { path: 'calander', loadChildren: './calander/calander.module#CalanderModule' },
      { path: 'blueMixServices', loadChildren: './blueMixServices/blueMix.module#BlueMixModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
