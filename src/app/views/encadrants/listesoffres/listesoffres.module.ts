import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListesoffresRoutingModule } from './listesoffres-routing.module';
import { ListesoffresComponent } from './listesoffres/listesoffres.component';


@NgModule({
  declarations: [
    ListesoffresComponent
  ],
  imports: [
    CommonModule,
    ListesoffresRoutingModule
  ]
})
export class ListesoffresModule { }
