import { Component, OnInit } from '@angular/core';
import { MOCKMOVIES } from '../MOCKMOVIES';
import { Movie } from '../movies.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movies: Movie[] = [];

  constructor() {}

  ngOnInit() {
    this.movies = MOCKMOVIES;
  }
}
