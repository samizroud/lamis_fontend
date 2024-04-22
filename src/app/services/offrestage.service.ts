import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffrestageService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  createOffreStage(data: any) { 
    return this.http.post(`${this.apiURL}/offrestages/offres-stage`, data);
  }
  getAllOffresStage() { 
    return this.http.get(`${this.apiURL}/offrestages/offres-stage`);
  }
  getOffreStageById(id: any) { 
    return this.http.get(`${this.apiURL}/offrestages/offres-stage/${id}`);
  }
  updateOffreStage(data: any, id: any) {
    return this.http.put(`${this.apiURL}/offrestages/offres-stage/${id}`, data);
   }
  deleteOffreStage(id: any) { 
    return this.http.delete(`${this.apiURL}/offrestages/offres-stage/${id}`);
  }
}
