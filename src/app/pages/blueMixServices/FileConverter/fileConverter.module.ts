import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../../app.translation.module';
import { NgaModule } from '../../../theme/nga.module';
import { routing } from './fileConverter.routing';
import { FileConverterComponent } from './fileConverter.component';
import { UploadFileComponent } from './fileUploader/UploaderFile.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
    FormsModule,
    AngularMultiSelectModule
  ],
  declarations: [
    UploadFileComponent,
    FileConverterComponent
  ],
  providers: [
  ]
})
export class FileConverterModule {}







