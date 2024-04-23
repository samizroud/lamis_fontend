import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../../../../services/candidature.service';
import { OffreStageService } from '../../../../services/offre-stage.service';

@Component({
  selector: 'app-historiquesstagiaires',
  templateUrl: './historiquesstagiaires.component.html',
  styleUrl: './historiquesstagiaires.component.css'
})
export class HistoriquesstagiairesComponent implements OnInit {
  candidatures:any[] = [];
  constructor(private candidaS:CandidatureService,private offreS:OffreStageService){

  }
  ngOnInit(): void {
    // this.candidaS.accepted().subscribe((res)=>{
    //   this.candidatures = res.data.stagiairesAcceptes;
    //   console.log(this.candidatures);
    // })
    this.offreS.getAll().subscribe((res:any)=>{
      this.candidatures = res.data.offresStage;
      console.log(this.candidatures);
    })
  }

}
