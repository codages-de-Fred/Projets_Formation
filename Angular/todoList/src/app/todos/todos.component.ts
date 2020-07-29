import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  id: number = 0;
  nom: string;
  liste: any[] = [];
  line: boolean = false; 
  constructor() { }

  ngOnInit(): void {
    this.liste;
  }
  addTask(id, nom, line) {
    this.liste.push({id, nom, line});
    this.id++;
    line = this.line;
  }
  del(x) {
    //il vaut mieux chercher par l'id que par l'objet entier
    let search = this.liste.findIndex((value) => value.id === x.id);
    this.liste.splice(search, 1);
  }
  changeClass(todo) {
    //la propriété line de l'objet cliqué sera inversée
    todo.line = !todo.line;
  }
}
