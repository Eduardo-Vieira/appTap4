import { Component, OnInit } from '@angular/core';
import { StorageService } from './modelo/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public title = 'Home';
  public menu;
  constructor(private route: Router, private storage: StorageService){
    this.menu = [
      {title: 'Home', link:'/home'},
      {title: 'Linguagens', link:'/linguagens'},
      {title: 'Frameworks', link:'/frameworks'},
    ];
  }

  ngOnInit(){
    // Verificar se o usuário esta logado
    if(this.storage.get('token-app') === null ){
     this.route.navigate(['login']);
    }else{
      this.route.navigate(['home']);
    }
  }

  navPage(page){
    this.title = page.title;
    this.route.navigate([page.link]);
  }
}
