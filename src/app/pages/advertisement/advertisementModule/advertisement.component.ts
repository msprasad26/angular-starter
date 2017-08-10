import { Component, OnInit } from '@angular/core';
import { AdvService } from './../adv.service';
import { FeedService } from './userFeed.service';
import { JwtService } from '../../../shared/services/jwt.service';
import { Router } from '@angular/router';
@Component({
  selector: 'advertisement',
  templateUrl: './advertisement.html',
  styleUrls: ['./advertisement.scss']
})
export class AdvertisementComponent implements OnInit {
   data;
  public feed: Array<Object>;

  constructor(private feedService: FeedService,
              private advService: AdvService,
              private jwtService: JwtService,
              private router: Router) {
  }
  ngOnInit() {
    this._loadFeed();
  }
  expandMessage (message) {
    message.expanded = !message.expanded;
  }
  private _loadFeed() {
    // this.feed = this.feedService.getData();
    this.advService.getAllAdds().subscribe((feed) => {
      this.feed = feed;
      console.log(this.feed);
    });
  }
  deleteAdv(id) {
    if (!this.jwtService.getUserToken()) {
      this.router.navigateByUrl('login');
    }else {
      this.advService.deleteAdvertisement(id).subscribe((data) => {
        this._loadFeed();
      });
    }

  }
  /*updateAdd(id) {
  //  this.advService.updateAdd(id).subscribe((data) => {

    });*/
  // }

}
