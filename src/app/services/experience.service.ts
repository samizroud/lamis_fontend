import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  create(data: any) {
    return this.http.post(`${this.apiURL}/experiences/create`, data)
  }
  getAll() {
    return this.http.get(`${this.apiURL}/experiences/all`)
  }
  getOne(id: any) {
    return this.http.get(`${this.apiURL}/experiences/${id}`)
  }
  updateExperience(data: any, id: any) {
    return this.http.put(`${this.apiURL}/experiences/update/${id}`, data)
  }
  deleteExperience(id: any) {
    return this.http.delete(`${this.apiURL}/experiences/delete/${id}`)
  }
}
