import {Component} from '@angular/core';

import {FeedService} from './userFeed.service';

@Component({
  selector: 'userFeed',
  templateUrl: './userFeed.html',
  styleUrls: ['./userFeed.scss']
})
export class UserFeed {

  public feed:Array<Object>;

  constructor(private _feedService:FeedService) {
  }

  ngOnInit() {
    this._loadFeed();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this._feedService.getData();
  }
}
