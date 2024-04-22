import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriquesstagiairesRoutingModule } from './historiquesstagiaires-routing.module';
import { HistoriquesstagiairesComponent } from './historiquesstagiaires/historiquesstagiaires.component';


@NgModule({
  declarations: [
    HistoriquesstagiairesComponent
  ],
  imports: [
    CommonModule,
    HistoriquesstagiairesRoutingModule
  ]
})
export class HistoriquesstagiairesModule { }
