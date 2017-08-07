import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment, environmentAdv } from '../../../../environments/environment';
import { ApiAdvServices } from './api.todo.service';

@Injectable()

export class TodoService  {
  constructor(
              private http: Http,
              private apiAdvServices: ApiAdvServices
  ) {}


  getAllTodos() {
    const params: URLSearchParams = new URLSearchParams();
    return this.apiAdvServices.get('/api/todo/v0/todos', params,'')
      .map(data => {
        console.log(data);
        return data;
      });
  }


}
