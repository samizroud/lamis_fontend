import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListesencadrantsComponent } from './listesencadrants/listesencadrants.component';

const routes: Routes = [
  {path:'',component:ListesencadrantsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListesencadrantsRoutingModule { }
