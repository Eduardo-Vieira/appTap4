import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { LinguagensComponent } from './pages/linguagens/linguagens.component';
import { FrameworksComponent } from './pages/frameworks/frameworks.component';
import { HomeComponent } from './pages/home/home.component';
import { LinguagensAddComponent } from './pages/linguagens-add/linguagens-add.component';
import { LinguagensEditComponent } from './pages/linguagens-edit/linguagens-edit.component';
import { FrameworksDetailComponent } from './pages/frameworks-detail/frameworks-detail.component';
import { FrameworksEditComponent } from './pages/frameworks-edit/frameworks-edit.component';
import { FrameworksAddComponent } from './pages/frameworks-add/frameworks-add.component';
import { DialogLinguagensAddComponent } from './dialogs/dialog-linguagens-add/dialog-linguagens-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'linguagens', component: LinguagensComponent },
  { path: 'linguagens-add', component: LinguagensAddComponent },
  { path: 'linguagens-edit/:id', component: LinguagensEditComponent },
  { path: 'frameworks', component: FrameworksComponent },
  { path: 'frameworks-add', component: FrameworksAddComponent },
  { path: 'frameworks-edit/:id', component: FrameworksEditComponent },
  { path: 'frameworks-detail/:id', component: FrameworksDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents:[DialogLinguagensAddComponent]
})
export class AppRoutingModule { }
export const PagesComponent = [
                               HomeComponent, 
                               LoginComponent, 
                               LinguagensComponent,
                               LinguagensAddComponent,
                               LinguagensEditComponent, 
                               FrameworksComponent,
                               FrameworksDetailComponent,
                               FrameworksAddComponent,
                               FrameworksEditComponent,
                               DialogLinguagensAddComponent ];
