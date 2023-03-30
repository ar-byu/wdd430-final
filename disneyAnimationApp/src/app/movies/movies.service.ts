import { Injectable } from '@angular/core';
import { Movie } from './movies.model';
import { MOCKMOVIES } from './MOCKMOVIES';
import { Subject } from 'rxjs';

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
            maxId = currentId;
        };
    };
    return maxId;
}

  getMovies(): Movie[] {
    return this.movies.slice();
  }

  getOneMovie(id: number): Movie {
    return this.movies[id];
  }

  updateMovie(originalMovie: Movie, newMovie: Movie) {

  }

  addMovie(newMovie: Movie) {
    if (!newMovie || newMovie === null) {
        return;
    }
    this.maxMovieId++;
    newMovie.id = this.maxMovieId;
    this.movies.push(newMovie);
    console.log(this.movies)
    let movieListClone = this.movies.slice();
    this.movieListChangedEvent.next(movieListClone);
  }

}
