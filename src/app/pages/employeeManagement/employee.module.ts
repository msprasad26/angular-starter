import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataFilterPipe } from './data-filter.pipe';
import { DataTableModule } from 'angular2-datatable';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { routing } from './employee.routing';
import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [CommonModule,
            AppTranslationModule,
            NgaModule,
            routing,
            FormsModule,
            DataTableModule,
            AngularMultiSelectModule],

  declarations: [EmployeeComponent, DataFilterPipe]
})
export class EmployeeModule {
}
