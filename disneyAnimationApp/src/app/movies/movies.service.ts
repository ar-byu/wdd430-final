import { Injectable } from '@angular/core';
import { MOCKMOVIES } from './MOCKMOVIES';
import { Movie } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [];

  constructor() {
    this.movies = MOCKMOVIES;
  }

  getMovies(): Movie[] {
    return this.movies.slice();
  }

  getOneMovie(id: number): Movie {
    return this.movies[id];
  }

}
