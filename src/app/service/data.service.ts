import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService extends HttpService{

  testApi(): Observable<any> {
    return this.http.get('/api/users', this.getOptions());
  }

}
