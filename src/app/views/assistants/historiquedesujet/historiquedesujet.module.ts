import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriquedesujetRoutingModule } from './historiquedesujet-routing.module';
import { HistoriquedesujetComponent } from './historiquedesujet/historiquedesujet.component';


@NgModule({
  declarations: [
    HistoriquedesujetComponent
  ],
  imports: [
    CommonModule,
    HistoriquedesujetRoutingModule
  ]
})
export class HistoriquedesujetModule { }
