import { Component, OnInit } from '@angular/core';
import { OffreStageService } from '../../../../services/offre-stage.service';

@Component({
  selector: 'app-historiquedestagiaires',
  templateUrl: './historiquedestagiaires.component.html',
  styleUrls:[ './historiquedestagiaires.component.css']
})
export class HistoriquedestagiairesComponent implements OnInit {
  allStages:any[]=[]
  constructor(private stageS:OffreStageService) { }
  ngOnInit(): void {

    this.stageS.getAll().subscribe((res:any)=>{
      this.allStages=res.data.offresStage
      console.log(res);
    })
    
  }

}
