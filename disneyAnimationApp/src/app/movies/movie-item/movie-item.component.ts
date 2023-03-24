import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie: Movie;
  @Input() index: number;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {}
}
