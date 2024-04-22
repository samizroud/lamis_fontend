import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
apiURL = environment.apiUrl;
  constructor(private http:HttpClient) { }

  signUp(data:any){
    return this.http.post(`${this.apiURL}/users/signup`,data)
  }
  setUserToken (data:any){
    localStorage.setItem("accesstoken",JSON.stringify(data))
  }
  login(data:any){
    return this.http.post(`${this.apiURL}/users/login`,data)
  }
  forgotPassword(data:any){
    return this.http.post(`${this.apiURL}/users/forgot-password`,data)
  }
  resetPassword1(data:any){
    return this.http.post(`${this.apiURL}/users/reset-password-step-one`,data)
  }
  resetPassword2(data:any){
    return this.http.post(`${this.apiURL}/users/reset-password-step-two`,data)
  }
  changePassword(data:any){
    return this.http.patch(`${this.apiURL}/users/change-password`,data)
  }
}
