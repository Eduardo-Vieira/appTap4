import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../network/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Linguagens } from '../../modelo/linguagens';

@Component({
  selector: 'app-linguagens',
  templateUrl: './linguagens.component.html',
  styleUrls: ['./linguagens.component.scss']
})
export class LinguagensComponent implements OnInit {
  
  public dados: Linguagens;
  
  constructor(private api: ApiService,) { }

  ngOnInit() {
    this.openList();
  }

  openList(){
    this.api.get('/linguagens/list',{}).subscribe(data => {
      this.dados = data.data;
    },(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.error('Erro do lado do cliente ocorrido.',err);
      } else {
        console.error('Ocorreu um erro no lado do servidor.',err);
      }
    });
  }

}
