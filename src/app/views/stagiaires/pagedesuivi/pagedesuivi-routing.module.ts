import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagedesuiviComponent } from './pagedesuivi/pagedesuivi.component';

const routes: Routes = [
  {path:'',component:PagedesuiviComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagedesuiviRoutingModule { }
