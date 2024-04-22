import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriquedesujetComponent } from './historiquedesujet/historiquedesujet.component';

const routes: Routes = [
  {path:'',component:HistoriquedesujetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriquedesujetRoutingModule { }
