import { Component, OnInit } from '@angular/core';
import { OffreStageService } from '../../../../services/offre-stage.service';

@Component({
  selector: 'app-offresdestages',
  templateUrl: './offresdestages.component.html',
  styleUrl: './offresdestages.component.css'
})
export class OffresdestagesComponent implements OnInit {
offres:any[]=[]

  constructor(private offreService:OffreStageService){

  }
  ngOnInit(): void {
    this.offreService.getAll().subscribe((res:any)=>{
      this.offres=res.data.offresStage
    })
    
  }
}
