import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private url = "https://localhost:8000/login_check";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    //lors de l'initialisation du service on créé les headers
    this.headers = new HttpHeaders();
    //et on ajoute un en-tête Content-type: application/json
    this.headers.append('Content-Type', 'application/json');
  }

  public auth(username: string, password: string): Observable<any> {
    //on construit le corps de notre requête
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.url, body, {headers: this.headers});
  }

  public logout(): void {
    //on vide le localstorage
    localStorage.removeItem('jwt');
  }
    
}
