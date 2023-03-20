import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  numbers: Array<number>;

  constructor() {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }
}
