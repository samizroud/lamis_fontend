import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriquedestagiairesRoutingModule } from './historiquedestagiaires-routing.module';
import { HistoriquedestagiairesComponent } from './historiquedestagiaires/historiquedestagiaires.component';


@NgModule({
  declarations: [
    HistoriquedestagiairesComponent
  ],
  imports: [
    CommonModule,
    HistoriquedestagiairesRoutingModule
  ]
})
export class HistoriquedestagiairesModule { }
