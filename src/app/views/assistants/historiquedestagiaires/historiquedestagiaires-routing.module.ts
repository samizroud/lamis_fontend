import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriquedestagiairesComponent } from './historiquedestagiaires/historiquedestagiaires.component';

const routes: Routes = [
  {path:'',component:HistoriquedestagiairesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriquedestagiairesRoutingModule { }
