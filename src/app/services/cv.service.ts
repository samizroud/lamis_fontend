import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiURL}/cvs`)
  }
  getOne(id: any) {
    return this.http.get(`${this.apiURL}/cvs/${id}`)
  }
  create(data: any) {
    return this.http.post(`${this.apiURL}/cvs`, data)
  }
  update(id: any, data: any) {
    return this.http.put(`${this.apiURL}/cvs/${id}`, data)
  }
  delete(id: any) {
    return this.http.delete(`${this.apiURL}/cvs/${id}`)
  }
}
