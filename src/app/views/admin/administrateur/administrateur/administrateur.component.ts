import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../../../../services/candidature.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrl: './administrateur.component.css'
})
export class AdministrateurComponent implements OnInit  {
  public candidatures:any[]=[]
constructor(private candidature:CandidatureService){

}

 ngOnInit(): void {
  this.candidature.getAll().subscribe((res:any)=>{
    this.candidatures=res.data.candidatures
  })
}
}
