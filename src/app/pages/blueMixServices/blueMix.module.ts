import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './blueMix.routing';
import { BlueMixComponent } from './blueMix.component';
import { LanguageTranslatorComponent } from './languageTranslatorModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { ImageUploadModule } from './angular2-image-upload';*/
import { FileUploadComponent } from './VisualRecognitionModule/VisualRecognition.component';
@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    BlueMixComponent,
    LanguageTranslatorComponent,
    FileUploadComponent
  ],
  providers: [
  ]
})
export class BlueMixModule {}







