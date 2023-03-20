import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { SpinoffsComponent } from './spinoffs/spinoffs.component';
import { CharactersComponent } from './characters/characters.component';
import { ErasComponent } from './eras/eras.component';
import { CharacterStartComponent } from './characters/character-start/character-start.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
import { CharacterItemComponent } from './characters/character-item/character-item.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { ErasStartComponent } from './eras/eras-start/eras-start.component';
import { ErasDetailComponent } from './eras/eras-detail/eras-detail.component';
import { ErasEditComponent } from './eras/eras-edit/eras-edit.component';
import { EraEditComponent } from './eras/era-edit/era-edit.component';
import { EraStartComponent } from './eras/era-start/era-start.component';
import { EraDetailComponent } from './eras/era-detail/era-detail.component';
import { EraItemComponent } from './eras/era-item/era-item.component';
import { EraListComponent } from './eras/era-list/era-list.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    SpinoffsComponent,
    CharactersComponent,
    ErasComponent,
    CharacterStartComponent,
    CharacterDetailComponent,
    CharacterEditComponent,
    CharacterItemComponent,
    CharacterListComponent,
    ErasStartComponent,
    ErasDetailComponent,
    ErasEditComponent,
    EraEditComponent,
    EraStartComponent,
    EraDetailComponent,
    EraItemComponent,
    EraListComponent,
    MovieStartComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
