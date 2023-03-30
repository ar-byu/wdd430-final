import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  originalMovie: Movie;
  movie: Movie;
  editMode: boolean = false;
  id: number;

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (!this.id || this.id === null) {
          this.editMode = false;
          return;
        }
        this.originalMovie = this.moviesService.getOneMovie(this.id);
        if (!this.originalMovie || this.originalMovie === null) {
          this.editMode = false;
          return;
        }
        this.editMode = true;
        this.movie = JSON.parse(JSON.stringify(this.originalMovie));
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newMovie = new Movie(value.id, value.title, value.promoImage, value.year, value.era, 
      value.length, value.trailerLink, value.trivia, value.category);
    if (this.editMode === true) {
      this.moviesService.updateMovie(this.originalMovie, newMovie);
    } else {
      this.moviesService.addMovie(newMovie);
    }
    this.router.navigate(['/movies'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['/movies'], {relativeTo: this.route});
  }

}
