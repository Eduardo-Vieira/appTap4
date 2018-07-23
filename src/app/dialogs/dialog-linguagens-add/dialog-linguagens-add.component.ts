import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ApiService } from '../../network/api.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface DialogData {
  tx_liguagem: string;
}

@Component({
  selector: 'app-dialog-linguagens-add',
  templateUrl: './dialog-linguagens-add.component.html',
  styleUrls: ['./dialog-linguagens-add.component.scss']
})
export class DialogLinguagensAddComponent {

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<DialogLinguagensAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  doSave(form){
    this.api.post('/linguagens/save/add',form['value']).subscribe(data => {
      if(data.data == 'OK'){
        this.dialogRef.close();
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
