import { Injectable } from '@angular/core';
import { Movie } from './movies.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movieListChangedEvent = new Subject<Movie[]>();
  movies: Movie[] = [];
  maxMovieId: number;
  SERVER_URL = "http://localhost:3000/api/movies"

  constructor(private http: HttpClient) {
    this.movies = this.getMovies();
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
    this.http
      .get(this.SERVER_URL)
      .subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
          this.movies.sort((a, b) => +a.year - +b.year);
          this.movieListChangedEvent.next(this.movies.slice());
          this.movies = JSON.parse(JSON.stringify(this.movies));
        },
        (errors: any) => {
          console.error(errors)
        }
      )
      return this.movies.slice();
  }

  getOneMovie(id: number): Movie {
    return this.movies[id];
  }

  updateMovie(originalMovie: Movie, newMovie: Movie) {
    if (!originalMovie || originalMovie === null) {
      return;
    };
    let position = this.movies.indexOf(originalMovie);
    if (position < 0) {
      return;
    };
    newMovie.id = originalMovie.id;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http
      .put(this.SERVER_URL + "/" + newMovie.id,
          newMovie, {headers: headers})
      .subscribe(
        (result) => {
          this.movies[position] = newMovie;
          let movieListClone = this.movies.slice();
          this.movieListChangedEvent.next(movieListClone);
        }
      )
  }

  addMovie(newMovie: Movie) {
    if (!newMovie || newMovie === null) {
        return;
    }
    newMovie.id = this.getMaxId() + 1;
    console.log(newMovie);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http
      .post(this.SERVER_URL, newMovie, {headers: headers})
      .subscribe(
        (response) => {
          this.movies.push(newMovie);
          let movieListClone = this.movies.slice();
          this.movieListChangedEvent.next(movieListClone);
        }
      )
  }

  deleteMovie(movie: Movie) {
    if (!movie || movie === null ) {
      return;
    };
    let position = this.movies.indexOf(movie);
    if (position < 0) {
      return;
    };
    this.http
      .delete(this.SERVER_URL + '/' + movie.id)
      .subscribe(
        (response: Response) => {
          this.movies.splice(position, 1);
          let movieListClone = this.movies.slice();
          this.movieListChangedEvent.next(movieListClone);
        }
      )
  }

}
