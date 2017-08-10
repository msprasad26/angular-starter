import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getClientToken(): String {
    return window.localStorage['clientToken'];
  }

  saveClientToken(token: String) {
    window.localStorage['clientToken'] = token;
  }
  getUserToken(): String {
    return window.localStorage['userToken'];
  }

  saveUserToken(token: String) {
    window.localStorage['userToken'] = token;
  }

  destroyUserToken() {
    window.localStorage.removeItem('userToken');
  }
  destroyClientToken() {
    window.localStorage.removeItem('clientToken');
  }
  destroyUser() {
    window.localStorage.removeItem('user');
  }
  saveUser(user: any) {
    window.localStorage['user'] = JSON.stringify(user);
  }
  getUser(): any {
   return  JSON.parse(window.localStorage['user']);
  }
  setMemberRole(role) {

    window.localStorage['userRole'] = role;
  }
  getMemberRole() {
    return window.localStorage['userRole'];
  }
  destroyRole() {
    window.localStorage.removeItem('userRole');
  }

}
