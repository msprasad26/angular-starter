import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';
import { routing } from './toneAnalysis.routing';
import { ToneAnalysisComponent } from './toneAnalysis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    ToneAnalysisComponent,
  ],
  providers: [
  ]
})
export class ToneAnalysisModule {}
