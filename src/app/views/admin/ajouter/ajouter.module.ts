import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterRoutingModule } from './ajouter-routing.module';
import { AjouterComponent } from './ajouter/ajouter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AjouterComponent
  ],
  imports: [
    CommonModule,
    AjouterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AjouterModule { }
