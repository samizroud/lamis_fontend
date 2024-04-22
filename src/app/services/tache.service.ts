import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  createTask(data: any) {
    return this.http.post(`${this.apiURL}/taches`, data)
  }
  getAllTasks() {
    return this.http.get(`${this.apiURL}/taches`)
  }
  getTaskById(id: any) {
    return this.http.get(`${this.apiURL}/taches/${id}`)
  }
  updateTask(data: any, id: any) {
    return this.http.put(`${this.apiURL}/taches/${id}`, data)
  }
  deleteTask(id: any) {
    return this.http.delete(`${this.apiURL}/taches/${id}`)
  }
}
