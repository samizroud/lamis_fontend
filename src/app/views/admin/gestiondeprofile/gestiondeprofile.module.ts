import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestiondeprofileRoutingModule } from './gestiondeprofile-routing.module';
import { GestiondeprofileComponent } from './gestiondeprofile/gestiondeprofile.component';


@NgModule({
  declarations: [
    GestiondeprofileComponent
  ],
  imports: [
    CommonModule,
    GestiondeprofileRoutingModule
  ]
})
export class GestiondeprofileModule { }
