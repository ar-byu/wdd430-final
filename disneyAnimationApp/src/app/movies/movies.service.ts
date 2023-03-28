import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MOCKMOVIES } from './MOCKMOVIES';
import { Movie } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movieListChangedEvent = new Subject<Movie[]>();
  movies: Movie[] = [];
  maxMovieId: number;

  constructor() {
    this.movies = MOCKMOVIES;
    this.maxMovieId = this.getMaxId();
  }

  getMaxId(): number {
    let maxId = 0;
    for (let movie of this.movies) {
        let currentId = movie.id;
        if (currentId > maxId) {
            maxId = currentId
        }
    }
    return maxId;
}

  getMovies(): Movie[] {
    return this.movies.slice();
  }

  getOneMovie(id: number): Movie {
    return this.movies[id];
  }

  addMovie(newMovie: Movie) {
    if (!newMovie || newMovie === null) {
        return;
    }
    this.maxMovieId++;
    newMovie.id = this.maxMovieId;
    this.movies.push(newMovie);
    let movieListClone = this.movies.slice();
    this.movieListChangedEvent.next(movieListClone);
}

  updateMovie(originalMovie: Movie, newMovie: Movie) {

  }

}
