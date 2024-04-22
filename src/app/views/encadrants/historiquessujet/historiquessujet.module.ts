import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriquessujetRoutingModule } from './historiquessujet-routing.module';
import { HistoriquessujetComponent } from './historiquessujet/historiquessujet.component';


@NgModule({
  declarations: [
    HistoriquessujetComponent
  ],
  imports: [
    CommonModule,
    HistoriquessujetRoutingModule
  ]
})
export class HistoriquessujetModule { }
