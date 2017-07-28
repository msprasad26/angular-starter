import { Component } from '@angular/core';
import * as jQuery from 'jquery';

import { CalendarService } from './userCalendar.service';

@Component({
  selector: 'userCalendar',
  templateUrl: './userCalendar.html',
  styleUrls: ['./userCalendar.scss']
})
export class UserCalendar {

  public calendarConfiguration: any;
  private _calendar: Object;

  constructor(private _calendarService:CalendarService) {
    this.calendarConfiguration = this._calendarService.getData();
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
  }

  public onCalendarReady(calendar):void {
    this._calendar = calendar;
  }

  private _onSelect(start, end):void {

    if (this._calendar != null) {
      let title = prompt('Event Title:');
      let eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
      }
      jQuery(this._calendar).fullCalendar('unselect');
    }
  }
}
