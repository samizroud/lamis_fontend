import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  create(data: any) {
    return this.http.post(`${this.apiURL}/certifications/certifications/create`, data)
  }
  getAll() {
    return this.http.get(`${this.apiURL}/certifications/certifications`)
  }
  getByid(id: any) {
    return this.http.get(`${this.apiURL}/certifications/certifications/${id}`)
  }
  update(data: any) {
    return this.http.put(`${this.apiURL}/certifications/certifications/update/${data._id}`, data)
  }
  delete(id: any) {
    return this.http.delete(`${this.apiURL}/certifications/certifications/delete/${id}`)
  }
}
