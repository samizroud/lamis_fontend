import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  create(data: any) {
    return this.http.post(`${this.apiURL}/labs`, data)
  }
  getAll() {
    return this.http.get(`${this.apiURL}/labs`)
  }
  getById(id: any) {
    return this.http.get(`${this.apiURL}/labs/${id}`)
  }

  updateLab(data: any, id: any) {
    return this.http.put(`${this.apiURL}/labs/${id}`, data)
  }
  deleteLab(id: any) {
    return this.http.delete(`${this.apiURL}/labs/${id}`)
  }

  addUserToLab(labId: any, userId: any) {
    return this.http.post(`${this.apiURL}/labs/${labId}/users/${userId}`, {})
  }
  removeUserFromLab(labId: any, userId: any) {
    return this.http.post(`${this.apiURL}/labs/${labId}/users/${userId}`, {})
  }
}
