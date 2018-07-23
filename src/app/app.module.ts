import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule, PagesComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppMaterialModule } from './app-material.module';
import { TypicodeInterceptor } from './network/typicode.interceptor';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,    
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TypicodeInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
