import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriquesstagiairesComponent } from './historiquesstagiaires/historiquesstagiaires.component';

const routes: Routes = [
  {path:'',component:HistoriquesstagiairesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriquesstagiairesRoutingModule { }
