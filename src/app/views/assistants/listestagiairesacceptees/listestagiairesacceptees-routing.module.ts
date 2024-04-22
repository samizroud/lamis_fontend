import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListestagiairesaccepteesComponent } from './listestagiairesacceptees/listestagiairesacceptees.component';

const routes: Routes = [
  {path:'',component:ListestagiairesaccepteesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListestagiairesaccepteesRoutingModule { }
