import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../../app.translation.module';
import { NgaModule } from '../../../theme/nga.module';
import { routing } from './VisualRecognition.routing';
import { VisualRecognitionComponent } from './VisualRecognition.component';
import { FileUploadComponent } from './fileUploader/fileUploader.component';
@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    FileUploadComponent,
    VisualRecognitionComponent
  ],
  providers: [
  ]
})
export class VisualRecognitionModule {}







