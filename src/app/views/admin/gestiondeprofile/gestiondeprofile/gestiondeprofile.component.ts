import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { ProfileService } from '../../../../services/profile.service';

@Component({
  selector: 'app-gestiondeprofile',
  templateUrl: './gestiondeprofile.component.html',
  styleUrls: ['./gestiondeprofile.component.css']
})
export class GestiondeprofileComponent implements OnInit {
  users:any[]=[]
  constructor(private _profileS:ProfileService){

  }
  ngOnInit(): void {
    this._profileS.getAllProfile().subscribe((res:any) =>{
      
      this.users = res.data.profils;
      console.log(this.users)
    })
  }
}
