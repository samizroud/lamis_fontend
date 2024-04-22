import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListesoffresComponent } from './listesoffres/listesoffres.component';

const routes: Routes = [
  {path:'',component:ListesoffresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListesoffresRoutingModule { }
