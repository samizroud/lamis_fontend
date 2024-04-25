import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TachesnonvalidesComponent } from './tachesnonvalides/tachesnonvalides.component';

const routes: Routes = [
  {path:'',component:TachesnonvalidesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TachesnonvalidesRoutingModule { }
