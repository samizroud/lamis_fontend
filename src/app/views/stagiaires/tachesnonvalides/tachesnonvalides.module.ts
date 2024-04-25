import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TachesnonvalidesRoutingModule } from './tachesnonvalides-routing.module';
import { TachesnonvalidesComponent } from './tachesnonvalides/tachesnonvalides.component';


@NgModule({
  declarations: [
    TachesnonvalidesComponent
  ],
  imports: [
    CommonModule,
    TachesnonvalidesRoutingModule
  ]
})
export class TachesnonvalidesModule { }
