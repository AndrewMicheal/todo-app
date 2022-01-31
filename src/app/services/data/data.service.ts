import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class DataService {


  private navParams: any = {};
  private baseURL = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  getParams() {
    return this.navParams;
  }

  setParams(body) {
    this.navParams = body;
  }

  getData(endpoint: string) {
    return this.http.get(this.baseURL + endpoint).pipe(take(1));
  }

  postData(endpoint: string , body: any) {
    return this.http.post(this.baseURL + endpoint , body).pipe(take(1));
  }

  updateData(endpoint: string , body: any) {
    return this.http.put(this.baseURL + endpoint , body).pipe(take(1));
  }

  deleteData(endpoint: string) {
    return this.http.delete(this.baseURL + endpoint).pipe(take(1));
  }
}
