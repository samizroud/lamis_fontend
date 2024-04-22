import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getSubmission(id: string) {
    return this.http.get(`${this.apiURL}/feedbacks/submissions/${id}`)
  }

  updateFeedback(id: any, data: any) {
    return this.http.put(`${this.apiURL}/feedbacks/${id}`, data)
  }
  deleteFeedback(id: any) {
    return this.http.delete(`${this.apiURL}/feedbacks/${id}`)
  }
}
