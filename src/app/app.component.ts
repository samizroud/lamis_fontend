import { Component, OnInit } from '@angular/core';
import { CandidatureService } from './services/candidature.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'projetPFE';
   candidatures:any[]=[]
    constructor(private candidature:CandidatureService) {
    
    }
    
     ngOnInit(): void {
      this.candidature.getAll().subscribe((res:any)=>{
        this.candidatures=res.data.candidature
      })
    }

  }

