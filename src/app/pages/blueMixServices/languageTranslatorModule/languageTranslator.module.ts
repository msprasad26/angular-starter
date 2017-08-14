import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../../app.translation.module';
import { NgaModule } from '../../../theme/nga.module';
import { routing } from './languageTranslator.routing';
import { LanguageTranslatorComponent } from './languageTranslator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    LanguageTranslatorComponent,
  ],
  providers: [
  ]
})
export class LanguageTranslatorModule {}
