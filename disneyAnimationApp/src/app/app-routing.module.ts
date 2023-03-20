import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { MoviesComponent } from './movies/movies.component';
import { ErasComponent } from './eras/eras.component';
import { SpinoffsComponent } from './spinoffs/spinoffs.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { SpinoffEditComponent } from './spinoffs/spinoff-edit/spinoff-edit.component';
import { SpinoffStartComponent } from './spinoffs/spinoff-start/spinoff-start.component';
import { SpinoffDetailComponent } from './spinoffs/spinoff-detail/spinoff-detail.component';
import { CharacterStartComponent } from './characters/character-start/character-start.component';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { EraStartComponent } from './eras/era-start/era-start.component';
import { EraDetailComponent } from './eras/era-detail/era-detail.component';
import { EraEditComponent } from './eras/era-edit/era-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent, children: [
    {path: '', component: MovieStartComponent},
    {path: 'new', component: MovieEditComponent},
    {path: ':id', component: MovieDetailComponent},
    {path: ':id/edit', component: MovieEditComponent}
  ]},
  {path: 'spinoffs', component: SpinoffsComponent, children: [
    {path: '', component: SpinoffStartComponent},
    {path: 'new', component: SpinoffEditComponent},
    {path: ':id', component: SpinoffDetailComponent},
    {path: ':id/edit', component: SpinoffEditComponent}
  ]},
  {path: 'characters', component: CharactersComponent, children: [
    {path: '', component: CharacterStartComponent},
    {path: 'new', component: CharacterEditComponent},
    {path: ':id', component: CharacterDetailComponent},
    {path: ':id/edit', component: CharacterEditComponent}
  ]},
  {path: 'eras', component: ErasComponent, children: [
    {path: '', component: EraStartComponent},
    {path: ':id', component: EraDetailComponent},
    {path: ':id/edit', component: EraEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
