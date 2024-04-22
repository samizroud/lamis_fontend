import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeattestationRoutingModule } from './listeattestation-routing.module';
import { ListeattestationComponent } from './listeattestation/listeattestation.component';


@NgModule({
  declarations: [
    ListeattestationComponent
  ],
  imports: [
    CommonModule,
    ListeattestationRoutingModule
  ]
})
export class ListeattestationModule { }
