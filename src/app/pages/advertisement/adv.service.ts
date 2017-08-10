import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiAdvServices } from './api.adv.service';
@Injectable()
export class AdvService {
  constructor(private apiAdvServices: ApiAdvServices,
              private http: Http,
              ) { }
 public getAllAdds() {
    const params: URLSearchParams = new URLSearchParams();
    return this.apiAdvServices.get( '/advertisement/all', params , '' )
      .map(data => {
         return data;
      });
  }
  addAdvertisement(params) {
    return this.apiAdvServices.post('/advertisement', JSON.stringify(params), 'raw')
      .map(data => {
      });
  }
  deleteAdvertisement(id) {
    return this.apiAdvServices.delete('/advertisement/' + id )
      .map(data => {
      });
  }
}
