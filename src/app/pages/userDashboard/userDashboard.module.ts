

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { UserDashboardComponent } from './userDashboard.component';
import { routing } from './userDashboard.routing';



import { UserCalendar } from './userCalendar';
import { UserFeed } from './userFeed';
import { UserTodo } from './userTodo';
import { CalendarService } from '../userDashboard/userCalendar/userCalendar.service';
import { FeedService } from '../userDashboard/userFeed/userFeed.service';
import { TodoService } from '../userDashboard/userTodo/userTodo.service';


import { DashboardModule } from '../dashboard/dashboard.module';
import { Dashboard } from '../dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    //TodoModule
  ],
  declarations: [
    UserDashboardComponent,
    UserFeed,
    UserCalendar,
    UserTodo

  ],
  providers: [
    CalendarService,
    FeedService,
    TodoService
  ]
})
export class UserDashboardModule {}







