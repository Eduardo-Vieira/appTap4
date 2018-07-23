import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../network/api.service';
import { Linguagens } from '../../modelo/linguagens';
import { Tipos } from '../../modelo/tipos';
import { DialogLinguagensAddComponent } from '../../dialogs/dialog-linguagens-add/dialog-linguagens-add.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frameworks-add',
  templateUrl: './frameworks-add.component.html',
  styleUrls: ['./frameworks-add.component.scss']
})
export class FrameworksAddComponent implements OnInit {

  public linguagens: Linguagens;
  public tipos: Tipos;
  
  public tx_liguagem:string;

  private img:any = {};

  constructor(private router:Router, private api: ApiService, public dialog: MatDialog) {
  
  }

  ngOnInit() {
    this.openLinguagens();
    this.openTipos();
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
  
  openFileImg(event) {
      let reader = new FileReader();
      if(event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.img = {  nameFile: file.name.split('.')[0],
                        typeFile: file.type,
                        sizeFile: file.size,
                        value: reader.result
                      };
          console.log(this.img);
        };
      }
    
  }

  
  doSave(form){
    // Add o objeto imagem no payload
    form['value']['tx_urlimg'] = this.img;
    this.api.post('/frameworks/save/add',form['value']).subscribe(data => {
      if(data.data == 'OK'){
        this.router.navigate(['frameworks']);
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

