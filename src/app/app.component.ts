import { Component, OnInit } from '@angular/core';
import { StorageService } from './modelo/storage.service';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public title = 'Home';
  public ico = 'home';
  public menu;  
  public showmenu;

  public auth: Boolean;

  constructor(private app:AppService, private route: Router, private storage: StorageService){

    this.menu = [
      {title: 'Home', ico: 'home', link:'/home', roule: 'user'},
      {title: 'Linguagens', ico:'list', link:'/linguagens', roule:'admin'},
      {title: 'Frameworks', ico:'reorder', link:'/frameworks', roule:'admin'},
    ];
  }

  doExit(){
    this.storage.set('token-app',null)
    this.app.setDataSelection({auth:false});
    this.route.navigate(['login']);
  }

  ngOnInit(){
    this.app.data.subscribe(data => {
      // use os dados aqui
      this.auth = data.auth;
    });
    // Verificar se o usuário esta logado
    if(this.storage.get('token-app') === null ){
     this.route.navigate(['login']);
    }else{
      this.app.setDataSelection({auth:true})
      this.getMenu('admin');
      this.route.navigate(['home']);
    }
  }

  navPage(page){
    this.title = page.title;
    this.ico = page.ico;
    this.route.navigate([page.link]);
  }

  getMenu(value: string) {
      
    // set val to the value of the searchbar
    const val = value;
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      if(val !='admin'){
        this.showmenu = this.menu.filter((item) => {
        return (item.roule.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }else{
        this.showmenu = this.menu;
      }
    }
  }
  
}
