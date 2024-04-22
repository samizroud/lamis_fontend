import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeattestationComponent } from './listeattestation/listeattestation.component';

const routes: Routes = [
  {path:'',component:ListeattestationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeattestationRoutingModule { }
