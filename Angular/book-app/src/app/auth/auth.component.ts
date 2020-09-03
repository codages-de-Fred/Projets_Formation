import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "./auth-service.service";
import * as jwtDecode from "jwt-decode";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.auth();
  }

  auth() {
    this.authService.auth('test', 'test').subscribe(
      (result: any) => {
        //si on reçoit une réponse >0 on stocke le token récupéré ds le locastorage
        const jwt = {
          token: result.token,
          //playload (charge utile) correspond au corps de notre JWT
          //contenant les infos comme la date d'expiration ou les infos du user
          playload: jwtDecode(result.token)
        };
        console.log('jwt', jwt);
        localStorage.setItem('jwt', JSON.stringify(jwt)); //c'est commeun cooky sauf que le localstorage n'est visible que sur l'ordi de l'utilisateur
        console.log('result.token', jwtDecode(result.token));
      },
      (error: any) => {
        if (error.status == 401) {
          console.log('wrong username and password');
        } else {
          console.log(error);
        }
      }
    );
  }

}
