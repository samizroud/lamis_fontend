import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresdestagesComponent } from './offresdestages/offresdestages.component';

const routes: Routes = [{path:'',component:OffresdestagesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresdestagesRoutingModule { }
