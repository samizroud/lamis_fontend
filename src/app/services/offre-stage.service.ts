import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class OffreStageService {
  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }


  create(data: any) {
    return this.http.post(`${this.apiURL}/offrestages/offres-stage`, data)
  }
  getAll() {
    return this.http.get(`${this.apiURL}/offrestages/offres-stage`)

  }
  getOne(id: any) {
    return this.http.get(`${this.apiURL}/offrestages/offres-stage/${id}`)
  }
  updateOffre(data: any, id: any) {
    return this.http.put(`${this.apiURL}/offrestages/offres-stage/${id}`, data)

  }
  deleteOffre(id: any) {
    return this.http.delete(`${this.apiURL}/offrestages/offres-stage/${id}`)
  }
}
