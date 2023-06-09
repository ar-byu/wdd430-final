import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies.model';
import { MoviesService } from '../movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  private subscription: Subscription;
  isLoading: Boolean = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
    this.isLoading = true;
    this.subscription = this.moviesService.movieListChangedEvent
      .subscribe(
        (movies: Movie[]) => {
          this.isLoading = false;
          this.movies = movies;
        }
      )
  }
}
