import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagesencoursComponent } from './stagesencours/stagesencours.component';

const routes: Routes = [{path:'',component:StagesencoursComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagesencoursRoutingModule { }
