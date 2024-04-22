import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  create(data: any) {
    return this.http.post(`${this.apiURL}/educations`, data)
  }
  getAll() {
    return this.http.get(`${this.apiURL}/educations`)
  }
  getOne(id: any) {
    return this.http.get(`${this.apiURL}/educations/${id}`)
  }
  update(id: any, data: any) {
    return this.http.patch(`${this.apiURL}/educations/${id}`, data)
  }
  delete(id: any) {
    return this.http.delete(`${this.apiURL}/educations/${id}`)
  }
}
