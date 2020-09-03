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

  //abstraction de la récupération de notre JWT ds le localStorage
  public getJWT(): any {
    const jwt =  JSON.parse(localStorage.getItem('jwt'));
    if(jwt) {
      //cela ns permet de tester si le JWT est ewpiré av de le renvoyer
      if (Date.now()/1000 > jwt.playload.exp) {
        //s'il est expiré on le retire du localStorage et on renvoie null
        localStorage.removeItem('jwt');
        return null;
      } else {
        return jwt;
      }
    }
  }
    
}
