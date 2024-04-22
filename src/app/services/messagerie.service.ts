import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }


  envoyerMessage(data: any) {
    return this.http.post(`${this.apiURL}/messages//envoyer-message`, data)
  }
  getMessages(id: any) {
    return this.http.get(`${this.apiURL}/messages/${id}`)
  }
  deleteMessages(id: any) {
    return this.http.delete(`${this.apiURL}/messages//supprimer-message${id}`)
  }
}
