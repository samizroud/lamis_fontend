import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { GestiondeprofileComponent } from './gestiondeprofile/gestiondeprofile.component';

const routes: Routes =[{path:'',component:GestiondeprofileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestiondeprofileRoutingModule { }
