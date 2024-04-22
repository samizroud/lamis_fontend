import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  apiURL = environment.apiUrl;
  constructor(private http:HttpClient) { }

  createProjet(data:any){
    return this.http.post(`${this.apiURL}/projets/createprojet`,data)
  }

  getAllProjet(){
    return this.http.get(`${this.apiURL}/projets/getallprojets`)
  }
  getOneProjet(id:any){
    return this.http.get(`${this.apiURL}/projets/${id}`)
  }
  updateProjet(data:any,id:any){
    return this.http.put(`${this.apiURL}/projets/updateprojet/${id}`,data)
  }
  deleteProjet(id:any){
    return this.http.delete(`${this.apiURL}/projets/deleteprojet/${id}`)
  }

}
