import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
//récupère les fonctionnalités des forms
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//on importe des fctionnalités avec le protocole HTTP (ex : requêtes GET, POST)
import { HttpClientModule } from '@angular/common/http';
//permet de simuler un serveur d'api stocké ds la mémoire de l'application pour tester les requêtes HTTP comme un véritable serveur
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ne pas oublié de le rajouter ds les imports (relancer le server)
    FormsModule,
    //le clientModule pour la gestion de requêtes
    HttpClientModule,
    //simule un serveur stocké ds la mémoire
    //il interceptera les requêtes et servira à la place des données définies ds le inMemoryDataService

    HttpClientInMemoryWebApiModule.forRoot(
      //on lui donne la route pour aller chercher les données
      InMemoryDataService
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
