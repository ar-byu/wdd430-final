import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { MoviesComponent } from './movies/movies.component';
import { ErasComponent } from './eras/eras.component';
import { SpinoffsComponent } from './spinoffs/spinoffs.component';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'spinoffs', component: SpinoffsComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'eras', component: ErasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
