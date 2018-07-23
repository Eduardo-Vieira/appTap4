import { Injectable, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  public get(key): string {
    return this.storage.get(key);
  }
  
  public set(key: string, value:string): void {
    this.storage.set(key,value);
  }
}