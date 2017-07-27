import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable()

export class UserService {
  constructor (
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService
  ) {}
  token() {
    let params = 'client_id=' + `${environment.client_id}` + '&client_secret=' + `${environment.client_secret}`;
    params += '&grant_type=client_credentials';
    this.apiService.post('/oauth/token', params, 'xform')
      .subscribe(data => {
        console.log(data);
        this.jwtService.saveClientToken(data.access_token);
      });
  }
    login(params) {
     /*const params = {'username' : 'inayath', 'password' : 'inayath'};*/
      return  this.apiService.post('/api/identity/v0/auth/login', JSON.stringify(params), 'raw').map(
        response => {
         this.jwtService.saveUserToken(response.token.access_token);
         this.jwtService.saveUser( response);
         // console.log( response);
         return response;

         /*const pObj: URLSearchParams = new URLSearchParams();
         return this.apiService.get('/api/identity/v0/tenants/' + `${environment.tenant_id}` + '/members/'+ response.member.id + '/roles', pObj, '')
           .subscribe(data => {
             console.log(data);
             return data;
           });
*/

       }
     );
    }

    getUserRole(user) {
      const pObj: URLSearchParams = new URLSearchParams();
      return this.apiService.get('/api/identity/v0/tenants/' + `${environment.tenant_id}` + '/members/'+ user.member.id + '/roles', pObj, '')
        .map(data => {
          console.log(data);
          return data;
        });
    }

    logout() {
      this.jwtService.destroyUserToken();
      this.jwtService.destroyUser();
    }

    update(user) {
      const params = {'description': 'test user1', 'firstName': 'L B user32', 'lastName': 'Share', 'phone': 234234234 };
      this.apiService.put('/api/identity/v0/users/' + user.member.id, JSON.stringify(params), 'raw')
       .subscribe(data => {
         console.log(data);
       });
    }

    signup(params) {
         /*const params = {'username': 'inayath', 'password': 'inayath',  'firstName': 'inayt' };*/

        return this.apiService.post('/api/identity/v0/users/signup', JSON.stringify(params), 'raw')
           .map(data => {
             console.log(data);
       });
    }

    getAllUsers() {
      const params: URLSearchParams = new URLSearchParams();
      return  this.apiService.get('/api/identity/v0/tenants/' + `${environment.tenant_id}` + '/members', params, '')
        .map(data => {
          return data;

        });
    }

  /*http://{{URL}}/api/identity/v0/tenants/TNT:STA-quvnya91/members
*/
}
