import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../network/api.service';

@Component({
  selector: 'app-linguagens-add',
  templateUrl: './linguagens-add.component.html',
  styleUrls: ['./linguagens-add.component.scss']
})
export class LinguagensAddComponent implements OnInit {
  
  constructor(private p: ActivatedRoute, private r: Router, private api: ApiService) {
    
  }
  
  ngOnInit() {
  }

  doSave(form){
    this.api.post('/linguagens/save/add',form['value']).subscribe(data => {
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
