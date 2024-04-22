import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListestagiairesaccepteesRoutingModule } from './listestagiairesacceptees-routing.module';
import { ListestagiairesaccepteesComponent } from './listestagiairesacceptees/listestagiairesacceptees.component';


@NgModule({
  declarations: [
    ListestagiairesaccepteesComponent
  ],
  imports: [
    CommonModule,
    ListestagiairesaccepteesRoutingModule
  ]
})
export class ListestagiairesaccepteesModule { }
