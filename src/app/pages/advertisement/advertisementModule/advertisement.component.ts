import { Component, OnInit } from '@angular/core';

import { FeedService } from './userFeed.service';

@Component({
  selector: 'advertisement',
  templateUrl: './advertisement.html',
  styleUrls: ['./advertisement.scss']
})
export class AdvertisementComponent implements OnInit {

  public feed: Array<Object>;

  constructor(private feedService: FeedService) {
  }

  ngOnInit() {
    this._loadFeed();
  }

  expandMessage (message) {
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this.feedService.getData();
  }
}
