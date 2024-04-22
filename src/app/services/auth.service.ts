import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  login(data: any) {
    this.http.post<any>(this.apiUrl + '/users/login', data).subscribe((res) => {
      this.setSession(res?.token);
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(res?.token);
      console.log(decodedToken);
      
      alert('log in success')
      switch (decodedToken?.role) {
        case 'admin':{
          this.route.navigateByUrl('/admin');
          break;
        }
        case 'stagiaire':{
          this.route.navigateByUrl('/stagiaires');
          break;
        }
        case 'encadrant':{
          this.route.navigateByUrl('/encadrants');
          break;
        }
        case 'assistant':{
          this.route.navigateByUrl('/assistants');
          break;
        }
        default: {
          this.route.navigateByUrl('/');
          break;
        }
      }
     
    }, (err) => {
      alert('Erreur se produit merci de vérifier vos identhifiants')
    });
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    sessionStorage.setItem('token', authResult);
    sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expires_at');
    this.route.navigateByUrl('/login');
  }

  public isLoggedIn() {
    if (this.getExpiration()) {
      return moment(this.getExpiration()).isBefore()
    }
    else {
      return false
    }

  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = sessionStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }

  getUserId() {
    let token = sessionStorage.getItem('token') || '';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken)
    return decodedToken?.user?._id;
  }
  getRole() {
    let token = sessionStorage.getItem('token') || '';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    return decodedToken.role;
  }
}
