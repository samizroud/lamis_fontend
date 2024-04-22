import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrl: './auth-admin-layout.component.css'
})
export class AuthAdminLayoutComponent implements OnInit {
auth:{email:string,password:string}={email:'',password:''}
  constructor(private userService:AuthService){

  }

  ngOnInit(): void {
    
  }

  login(){
    this.userService.login(this.auth)
  }
}
