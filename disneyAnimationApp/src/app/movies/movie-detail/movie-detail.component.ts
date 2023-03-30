import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  id: number;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.movie = this.moviesService.getOneMovie(this.id);
      }
    )
  }

  onDelete() {
    this.moviesService.deleteMovie(this.movie);
    this.router.navigate(['/movies'], {relativeTo: this.route});
  }
}
