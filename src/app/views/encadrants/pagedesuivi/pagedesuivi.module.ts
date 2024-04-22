import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagedesuiviRoutingModule } from './pagedesuivi-routing.module';
import { PagedesuiviComponent } from './pagedesuivi/pagedesuivi.component';


@NgModule({
  declarations: [
    PagedesuiviComponent
  ],
  imports: [
    CommonModule,
    PagedesuiviRoutingModule
  ]
})
export class PagedesuiviModule { }
