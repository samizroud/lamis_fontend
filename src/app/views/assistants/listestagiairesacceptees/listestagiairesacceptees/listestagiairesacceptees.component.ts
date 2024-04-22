import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../../../../services/candidature.service';

@Component({
  selector: 'app-listestagiairesacceptees',
  templateUrl: './listestagiairesacceptees.component.html',
  styleUrl: './listestagiairesacceptees.component.css'
})
export class ListestagiairesaccepteesComponent  implements OnInit {
  listAccepted:any[]=[]
  constructor(private candidatureS:CandidatureService){}
  
  ngOnInit(): void {
    this.candidatureS.accepted().subscribe((res:any)=>{
      this.listAccepted=res.data.stagiairesAcceptes
      console.log(res)
    })
  }
}
