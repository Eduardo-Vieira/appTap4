import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../network/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Linguagens } from '../../modelo/linguagens';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Router } from '@angular/router';

@Component({
  selector: 'app-linguagens',
  templateUrl: './linguagens.component.html',
  styleUrls: ['./linguagens.component.scss']
})
export class LinguagensComponent implements OnInit {

  public displayedColumns: string[] = ['id_liguagem','tx_liguagem','menu'];
  public dataSource = new MatTableDataSource<Linguagens>([]);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  //public dados: Linguagens;
  
  constructor(private api: ApiService,private router:Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.openList();
  }

  doDetail(id) {
    this.router.navigate([`frameworks-detail/${id}`]);
  }
  doEdit(id){
    this.router.navigate([`linguagens-edit/${id}`]);
  }

  openList(){
    this.api.get('/linguagens/list',{}).subscribe(data => {
      //this.dados = data.data;
      this.dataSource.data = data.data;
    },(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.error('Erro do lado do cliente ocorrido.',err);
      } else {
        console.error('Ocorreu um erro no lado do servidor.',err);
      }
    });
  }

}
