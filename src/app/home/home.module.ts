import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';


import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { HomeComponent } from './home.component';
import { routing } from './home.routing';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [HomeComponent]
})
export class HomeModule { }
