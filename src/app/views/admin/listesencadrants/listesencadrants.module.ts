import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListesencadrantsRoutingModule } from './listesencadrants-routing.module';
import { ListesencadrantsComponent } from './listesencadrants/listesencadrants.component';


@NgModule({
  declarations: [
    ListesencadrantsComponent
  ],
  imports: [
    CommonModule,
    ListesencadrantsRoutingModule
  ]
})
export class ListesencadrantsModule { }
