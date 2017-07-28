
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { UserDashboardComponent } from './userDashboard.component';
import { routing } from './userDashboard.routing';

/*import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';*/


/*import { Todo } from '../dashboard/todo';
import { Calendar } from '../dashboard/calendar';
import { CalendarService } from '../dashboard/calendar/calendar.service';
import { FeedService } from '../dashboard/feed/feed.service';*/
//import { TodoService } from '../dashboard/todo/todo.service';



@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    UserDashboardComponent,
   // Todo,
   // Calendar
  ],
  providers: [
   // CalendarService,
    //FeedService,
   // TodoService
  ]
})
export class UserDashboardModule {}






