import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })// ,
    // withCredentials: true
  }

  constructor(public http: HttpClient) { }

  getOptions() {
    return this.httpOptions;
  }
}
