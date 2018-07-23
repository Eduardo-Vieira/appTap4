import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../network/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StorageService } from '../../modelo/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public hide = true;
  
  public errInput = '';

  constructor(private api: ApiService, private route: Router, private storage: StorageService) { }

  ngOnInit() {

  }
  
  /**
   *  Auth com api
   * @param form 
   */
  doLogin(form){
    if(form.value.tx_login !='' || form.value.tx_password !=''){
      this.api.auth(form.value).subscribe(data => {
        if(data.code == 200){
          this.storage.set('token-app',data.data.token);
          this.route.navigate(['home']);
        }else {
          this.errInput = data.mensage;
        }
      },(err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.error('Erro do lado do cliente ocorrido.',err);
        } else {
          console.error('Ocorreu um erro no lado do servidor.',err);

        }
      });
    }else{
      this.errInput = "Os campos de Usuário e Senha são obrigatórios.";
    }
  }

}
