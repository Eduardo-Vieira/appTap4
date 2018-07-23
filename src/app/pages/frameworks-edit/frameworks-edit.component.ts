import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../network/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Linguagens } from '../../modelo/linguagens';
import { Tipos } from '../../modelo/tipos';
import { DialogLinguagensAddComponent } from '../../dialogs/dialog-linguagens-add/dialog-linguagens-add.component';
import { Frameworks } from '../../modelo/frameworks';

@Component({
  selector: 'app-frameworks-edit',
  templateUrl: './frameworks-edit.component.html',
  styleUrls: ['./frameworks-edit.component.scss']
})
export class FrameworksEditComponent implements OnInit {
  
  public dados: Frameworks = {
                              id_frameworks: '', 
                              id_liguagem: '',
                              tx_liguagem: '', 
                              tx_nome: '', 
                              tx_site: '', 
                              tx_ano: '', 
                              tx_criador: '', 
                              tx_versao: '', 
                              id_tipos: '',
                              tx_tipos: '',  
                              tx_opniao: '', 
                              tx_pros: '', 
                              tx_contra: '', 
                              tx_urlim: ''
                            };

  public linguagens: Linguagens;
  public tipos: Tipos;
  
  public tx_liguagem:string;

  constructor(private router:Router, private pr: ActivatedRoute, private api: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.openLinguagens();
    this.openTipos();
    this.openDados();
  }

  doBack() {
    this.router.navigate(['frameworks']);
  }

  openLinguagens(){
    this.api.get('/linguagens/list',{}).subscribe(data => {
      this.linguagens = data.data;
    },(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.error('Erro do lado do cliente ocorrido.',err);
      } else {
        console.error('Ocorreu um erro no lado do servidor.',err);
      }
    });
  }
  openTipos(){
    this.api.get('/tipos/list',{}).subscribe(data => {
      this.tipos = data.data;
    },(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.error('Erro do lado do cliente ocorrido.',err);
      } else {
        console.error('Ocorreu um erro no lado do servidor.',err);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLinguagensAddComponent, {
      data: {tx_liguagem: this.tx_liguagem}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.tx_liguagem = result;
      this.openLinguagens();
    });
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

  doSave(form){
    this.api.post('/frameworks/save/edit',form['value']).subscribe(data => {
      if(data.data == 'OK'){
        this.router.navigate([`frameworks-detail/${this.pr.params['value'].id}`]);
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
