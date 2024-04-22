import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DemandesaccepteesComponent } from './demandesacceptees/demandesacceptees.component';

const routes: Routes = [
  {path:'',component:DemandesaccepteesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesaccepteesRoutingModule { }
