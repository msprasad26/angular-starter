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
  public buttonshow: boolean= true;
  constructor(private feedService: FeedService,
              private advService: AdvService,
              private jwtService: JwtService,
              private router: Router) {
  }
  ngOnInit() {
    this.buttonshow = false;
    this._loadFeed();
  }
  expandMessage (message) {
    message.expanded = !message.expanded;
  }
  private _loadFeed() {
    this.buttonshow = true;
    $('#loader').show();

    // this.feed = this.feedService.getData();
    this.advService.getAllAdds().subscribe((feed) => {
      $('#loader').hide();
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
