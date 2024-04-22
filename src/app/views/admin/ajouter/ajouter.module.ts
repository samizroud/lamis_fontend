import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterRoutingModule } from './ajouter-routing.module';
import { AjouterComponent } from './ajouter/ajouter.component';


@NgModule({
  declarations: [
    AjouterComponent
  ],
  imports: [
    CommonModule,
    AjouterRoutingModule
  ]
})
export class AjouterModule { }
