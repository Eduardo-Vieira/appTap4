import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DataResponse } from '../modelo/dataresponse';
import { StorageService } from '../modelo/storage.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BASE_URL = "http://localhost:8080/api";
  token: string;
  constructor(private http: HttpClient, private storage: StorageService) { 
    this.token = this.storage.get('token-app');
  }
  
  public get(url: string,data: any){
    httpOptions.headers = httpOptions.headers.set('Authorization', this.token);
    return this.http.get<DataResponse>(this.BASE_URL.concat(url),httpOptions);
  }

  public post(url: string,data: any){
    httpOptions.headers = httpOptions.headers.set('Authorization', this.token);
    return this.http.post<DataResponse>(this.BASE_URL.concat(url),data,httpOptions);
  }

  public auth(data){
    return this.http.post<DataResponse>(this.BASE_URL.concat('/auth'), data);
  }

}
