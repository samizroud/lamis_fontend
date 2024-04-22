import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendrierRoutingModule } from './calendrier-routing.module';
import { CalendrierComponent } from './calendrier/calendrier.component';


@NgModule({
  declarations: [
    CalendrierComponent
  ],
  imports: [
    CommonModule,
    CalendrierRoutingModule
  ]
})
export class CalendrierModule { }
