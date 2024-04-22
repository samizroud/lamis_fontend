import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListesstagiairesRoutingModule } from './listesstagiaires-routing.module';
import { ListesstagiairesComponent } from './listesstagiaires/listesstagiaires.component';


@NgModule({
  declarations: [
    ListesstagiairesComponent
  ],
  imports: [
    CommonModule,
    ListesstagiairesRoutingModule
  ]
})
export class ListesstagiairesModule { }
