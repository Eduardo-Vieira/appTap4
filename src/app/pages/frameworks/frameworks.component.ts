import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../network/api.service';
import { Frameworks } from '../../modelo/frameworks';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.scss']
})
export class FrameworksComponent implements OnInit {
  public displayedColumns: string[] = ['id_frameworks','tx_liguagem','tx_nome','tx_site','tx_ano','tx_criador','tx_versao','tx_tipos','tx_opniao','menu'];
  public dataSource = new MatTableDataSource<Frameworks>([]);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private api: ApiService,private router:Router,) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.openList();
  }

  doDetail(id) {
    this.router.navigate([`frameworks-detail/${id}`]);
  }
  doEdit(id){
    this.router.navigate([`frameworks-edit/${id}`]);
  }

  openList(){
    this.api.get('/frameworks/list',{}).subscribe(data => {
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
