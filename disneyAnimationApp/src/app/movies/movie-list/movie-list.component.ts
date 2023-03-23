import { Component, OnInit } from '@angular/core';
import { MOCKMOVIES } from '../MOCKMOVIES';
import { Movie } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }
}
