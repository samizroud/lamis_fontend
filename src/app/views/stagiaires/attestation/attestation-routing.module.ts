import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttestationComponent } from './attestation/attestation.component';

const routes: Routes = [
  {path:'',component:AttestationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttestationRoutingModule { }
