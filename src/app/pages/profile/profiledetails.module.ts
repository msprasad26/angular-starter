import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { routing } from './profiledetails.routing';
import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';

import { ProfileDetails } from './profiledetails.component';



@NgModule({
  imports: [CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
    FormsModule,
    DataTableModule,
    ReactiveFormsModule,
     AngularMultiSelectModule,

    ],
  declarations: [ProfileDetails]
})
export class ProfiledetailsModule {
}
