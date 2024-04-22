import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiURL = environment.apiUrl;
  constructor(private http:HttpClient) { }

  createProfile(data:any){
    return this.http.post(`${this.apiURL}/profiles/createprofile`,data)
  }
  getAllProfile(){
    return this.http.get(`${this.apiURL}/profiles/getallprofiles`)
  }
  getProfile(id:number){
    return this.http.get(`${this.apiURL}/profiles/${id}`)
  }
  updateProfile(data:any,id:any){
    return this.http.put(`${this.apiURL}/profiles/updateprofile/${id}`,data)
  }
  deleteProfile(id:any){
    return this.http.delete(`${this.apiURL}/profiles/deleteprofile/${id}`)
  }
}
