import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../network/api.service';
import { Linguagens } from '../../modelo/linguagens';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-linguagens-edit',
  templateUrl: './linguagens-edit.component.html',
  styleUrls: ['./linguagens-edit.component.scss']
})
export class LinguagensEditComponent implements OnInit {

  public dados: Linguagens = {id_liguagem: '',
                              tx_liguagem: ''
                             };
  
  constructor(private p: ActivatedRoute, private r: Router, private api: ApiService) {
    
  }

  ngOnInit() {
    this.openDados(); 
  }

  openDados(){
    this.api.get(`/linguagens/list/${this.p.params['value'].id}`,{}).subscribe(data => {
      this.dados = data.data[0];
    },(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.error('Erro do lado do cliente ocorrido.',err);
      } else {
        console.error('Ocorreu um erro no lado do servidor.',err);
      }
    });
  }

  doSave(form){
    this.api.post(`/linguagens/save/edit`,this.dados).subscribe(data => {
      if(data.data == 'OK'){
        this.r.navigate(['linguagens']);
      }
    },(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.error('Erro do lado do cliente ocorrido.',err);
      } else {
        console.error('Ocorreu um erro no lado do servidor.',err);
      }
    });
  }

}
