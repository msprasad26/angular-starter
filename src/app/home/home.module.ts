import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { HomeComponent } from './home.component';
import { routing } from './home.routing';

import { ListerrorModule } from '../shared/listerror.module'
@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing, FormsModule, ReactiveFormsModule,ListerrorModule],
  declarations: [HomeComponent],
})
export class HomeModule { }
