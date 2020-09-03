import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    //un httpInterceptor sert à intercepter les requêtes sortantes de notre application
    //la méthode intercept permet de définir ce qui doit arriver à la reqête lorsqu'elle est interceptée
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //lr rôle de notre authInterceptor est de v"rifier la présence d'un jwt ds notre localStorage,
        //si c'est le cas, le rajouter ds un en-tête Authorization avant d'envoyer la reqête interceptée
        //d'abord, on vérifie si le tolken est présent ds locaStorage
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            //un objet httpRequest étant immuable on ne peut pas le changer directement
            //on doit donc cloner la requête sortante et y ajouter le header
            const cloned = req.clone({ headers: req.headers.append('Authorization', `Bearer ${jwt}`)});
            //on envoie ensuite la requête clonée à httpHandler
            return next.handle(cloned);
        }
        //ds le cas par défaut, pas jwt, on envoie la requête sans modifications
        return next.handle(req);//on la laisse passer sans rien faire
        //on aura donc un 401 non autorisé
    }
}