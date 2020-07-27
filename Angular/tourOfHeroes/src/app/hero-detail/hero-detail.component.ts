import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@Input permet de préparer un component à recevoir une donnée en entrée lors de son appel
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
