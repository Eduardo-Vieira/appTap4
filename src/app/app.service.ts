import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export class Data {
  auth: Boolean;
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private dataSource = new BehaviorSubject(new Data());
  public data = this.dataSource.asObservable();
  
  constructor() {
  }

  setDataSelection(data: Data){
    this.dataSource.next(data);
  }

}
