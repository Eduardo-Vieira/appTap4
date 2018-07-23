import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../network/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Frameworks } from '../../modelo/frameworks';

@Component({
  selector: 'app-frameworks-detail',
  templateUrl: './frameworks-detail.component.html',
  styleUrls: ['./frameworks-detail.component.scss']
})
export class FrameworksDetailComponent implements OnInit {
  
  public dados: Frameworks;

  constructor(private router:Router, private pr: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.openDados();
  }

  doBack() {
    this.router.navigate(['frameworks']);
  }

  openDados(){
    this.api.get(`/frameworks/list/${this.pr.params['value'].id}`,{}).subscribe(data => {
      this.dados = data.data[0];
    },(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.error('Erro do lado do cliente ocorrido.',err);
      } else {
        console.error('Ocorreu um erro no lado do servidor.',err);
      }
    });
  }

}
