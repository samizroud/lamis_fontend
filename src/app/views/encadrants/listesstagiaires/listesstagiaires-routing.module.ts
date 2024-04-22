import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListesstagiairesComponent } from './listesstagiaires/listesstagiaires.component';

const routes: Routes = [
  {path:'',component:ListesstagiairesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListesstagiairesRoutingModule { }
