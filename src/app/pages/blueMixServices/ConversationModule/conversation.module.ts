import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';
import { routing } from './conversation.routing';
import { conversationComponent } from './conversation.component';
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
    conversationComponent,
  ],
  providers: [
  ]
})
export class ConversationModule {}
