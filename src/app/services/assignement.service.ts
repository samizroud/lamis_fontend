import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignementService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }
  createAssignment(data: any) {
    return this.http.post(`${this.apiURL}/assignments/createAssignment`, data);
  }
  getAssignment(id: any) {
    return this.http.get(`${this.apiURL}/assignments/getAssignment/${id}`);
  }
  getAllAssignments() {
    return this.http.get(`${this.apiURL}/assignments/getAllAssignments`);
  }
}
