import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';

import { routing } from './profile.routing';
import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing, FormsModule, DataTableModule,ReactiveFormsModule ],
  declarations: [ProfileComponent]
})
export class ProfileModule {
}
