import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagesencoursRoutingModule } from './stagesencours-routing.module';
import { StagesencoursComponent } from './stagesencours/stagesencours.component';


@NgModule({
  declarations: [
    StagesencoursComponent
  ],
  imports: [
    CommonModule,
    StagesencoursRoutingModule
  ]
})
export class StagesencoursModule { }
