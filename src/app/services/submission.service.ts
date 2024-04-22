import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  apiURL = environment.apiUrl;
  constructor(private http:HttpClient) { }
  createSubmission(data:any){
    return this.http.post(`${this.apiURL}/submissions`,data)
  }
getSubmissionById(id:any){
  return this.http.get(`${this.apiURL}/submissions/${id}`)
}
}
