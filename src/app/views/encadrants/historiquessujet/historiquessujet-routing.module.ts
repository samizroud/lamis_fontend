import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriquessujetComponent } from './historiquessujet/historiquessujet.component';

const routes: Routes = [
  {path:'',component:HistoriquessujetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriquessujetRoutingModule { }
