import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService extends HttpService{

  lock = false;


  hero(page): Observable<any> {
    return this.http.get('/api/heroes?page=' + page, this.getOptions());
  }

  lockUi() {
    this.lock = true;
  }

  unlockUi() {
    this.lock = false;
  }
}
