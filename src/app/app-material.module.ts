import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatSnackBarModule, MatSidenavModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [BrowserAnimationsModule, MatTableModule, MatSidenavModule, MatSnackBarModule , MatPaginatorModule, MatDialogModule,MatIconModule, MatListModule, MatDividerModule, MatCardModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatExpansionModule,MatButtonModule, MatCheckboxModule],
  exports: [BrowserAnimationsModule, MatTableModule ,MatSidenavModule, MatSnackBarModule, MatPaginatorModule, MatDialogModule,MatIconModule, MatListModule, MatDividerModule, MatCardModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatExpansionModule, MatButtonModule, MatCheckboxModule],
})
export class AppMaterialModule { }