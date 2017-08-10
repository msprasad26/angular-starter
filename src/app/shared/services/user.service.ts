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
  constructor(private apiService: ApiService,
              private http: Http,
              private jwtService: JwtService) {
  }
  token() {
    let params = 'client_id=' + `${environment.client_id}` + '&client_secret=' + `${environment.client_secret}`;
    params += '&grant_type=client_credentials';
    this.apiService.post('/oauth/token', params, 'xform')
      .subscribe(data => {
        this.jwtService.saveClientToken(data.access_token);
      });
  }
  login(params) {
    /*const params = {'username' : 'inayath', 'password' : 'inayath'};*/
    return this.apiService.post('/api/identity/v0/auth/login', JSON.stringify(params), 'raw').map(
      response => {
        this.jwtService.saveUserToken(response.token.access_token);
        this.jwtService.saveUser(response);
        return response;
      }
    );
  }
  getUserRole(id) {
    const pObj: URLSearchParams = new URLSearchParams();
    return this.apiService.get('/api/identity/v0/tenants/' + `${environment.tenant_id}` + '/members/' + id + '/roles', pObj, '')
      .map(data => {
        console.log(data);
        return data;
      });
  }
  updateUserRole(item, id) {
    return this.apiService.post('/api/identity/v0/tenants/' + `${environment.tenant_id}` + '/members/' + id + '/roles', JSON.stringify(item), 'raw')
      .map( data => {
      return data;
    });
  }
  removeRole(item, id) {
    return this.apiService.deleteRole('/api/identity/v0/tenants/' + `${environment.tenant_id}` + '/members/' + id + '/roles', JSON.stringify(item), 'raw')
      .map( data => {return data})
  }
  getTenantRoles(tenantId) {
    const pObj: URLSearchParams = new URLSearchParams();
      return this.apiService.get('/api/identity/v0/tenants/'+ tenantId +'/roles', pObj, '').map( data => {
        return data;
      });
  }
  logout() {
    this.jwtService.destroyUserToken();
    this.jwtService.destroyUser();
    this.jwtService.destroyRole();
  }
  update(params) {
    return this.apiService.put('/api/identity/v0/users/' + params.uid, JSON.stringify(params), 'raw')
      .map(data => {
        console.log(data);
        let user = this.jwtService.getUser();
        user.member = data;
        this.jwtService.saveUser(user);
      });
  }
  signup(params) {
    return this.apiService.post('/api/identity/v0/users/signup', JSON.stringify(params), 'raw')
      .map(data => {
        console.log(data);
      });
  }
  getAllUsers() {
    const params: URLSearchParams = new URLSearchParams();
    return this.apiService.get('/api/identity/v0/tenants/' + `${environment.tenant_id}` + '/members', params, '')
      .map(data => {
        return data;
      });
  }
  setRole(role) {
    this.jwtService.setMemberRole(role);
  }
  resetpassword() {
    const params = {}
    return this.apiService.post('api/identity/v0/auth/changePassword/', JSON.stringify(params), 'raw').map(
      data => {
        this.jwtService.saveUserToken(data.token.access_token);
        this.jwtService.saveUser(data);
        return data;
      }
    );
  }
}
