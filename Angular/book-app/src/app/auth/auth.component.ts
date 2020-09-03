import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "./auth-service.service";

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
        localStorage.setItem('jwt', result.token); //c'est commeun cooky sauf que le localstorage n'est visible que sur l'ordi de l'utilisateur
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
