import { Injectable } from '@angular/core';
import { environmentTodo } from '../../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { JwtService } from '../../../shared/services/jwt.service';

@Injectable()
export class ApiAdvServices {
  constructor(
    private http: Http,
    private jwtService: JwtService
  ) {}

  private setHeaders(contentType, useClientToken = false): Headers {
    let headersConfig;
    switch (contentType) {
      case 'xform':

        headersConfig = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };
        break;

      default:
        headersConfig = {
          'Content-Type': 'application/json'
        };
        break;
    }
    if (this.jwtService.getUserToken() && !useClientToken ) {
      headersConfig['Authorization'] = `Bearer ${this.jwtService.getUserToken()}`;
    } else if (this.jwtService.getClientToken()) {
      headersConfig['Authorization'] = `Bearer ${this.jwtService.getClientToken()}`;
    }
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams(), type: string): Observable<any> {
    return this.http.get(`${environmentTodo.api_url}${path}`, { headers: this.setHeaders(type), search: params })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}, type: string): Observable<any> {
    return this.http.put(
      `${environmentTodo.api_url}${path}`, body,
      { headers: this.setHeaders(type) }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}, type: string, useToken: Boolean = false): Observable<any> {
    return this.http.post(
      `${environmentTodo.api_url}${path}`, body,
      { headers: this.setHeaders(type) }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environmentTodo.api_url}${path}`,
      { headers: this.setHeaders('') }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }
}
