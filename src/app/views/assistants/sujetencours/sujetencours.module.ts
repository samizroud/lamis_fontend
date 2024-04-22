import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SujetencoursRoutingModule } from './sujetencours-routing.module';
import { SujetencoursComponent } from './sujetencours/sujetencours.component';


@NgModule({
  declarations: [
    SujetencoursComponent
  ],
  imports: [
    CommonModule,
    SujetencoursRoutingModule
  ]
})
export class SujetencoursModule { }
