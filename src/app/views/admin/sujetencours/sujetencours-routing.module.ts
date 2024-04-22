import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SujetencoursComponent } from './sujetencours/sujetencours.component';

const routes: Routes = [
  {path:'',component:SujetencoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SujetencoursRoutingModule { }
