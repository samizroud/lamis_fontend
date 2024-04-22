import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiURL = environment.apiUrl;
  constructor(private http:HttpClient) { }


  createSkill(data:any){
    return this.http.post(`${this.apiURL}/skills/create`,data)
  }
getAllSkills(){
  return this.http.get(`${this.apiURL}/skills/getAllSkills`)
}
getSkillById(id:any){
  return this.http.get(`${this.apiURL}/skills/${id}`)
}
updateSkill(data:any,id:any){
  return this.http.put(`${this.apiURL}/skills/updateSkill/${id}`,data)
}
deleteSkill(id:any){
  return this.http.delete(`${this.apiURL}/skills/deleteSkill/${id}`)
}
}
