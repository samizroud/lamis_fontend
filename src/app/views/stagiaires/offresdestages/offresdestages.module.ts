import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresdestagesRoutingModule } from './offresdestages-routing.module';
import { OffresdestagesComponent } from './offresdestages/offresdestages.component';


@NgModule({
  declarations: [
    OffresdestagesComponent
  ],
  imports: [
    CommonModule,
    OffresdestagesRoutingModule
  ]
})
export class OffresdestagesModule { }
