import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';

import { AppComponent }  from './app.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule, routing ],
  declarations: [ AppComponent, MoviesComponent, MovieComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
