import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MoviesComponent} from './movies.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { MoviesRouterModule } from './movies-router.module';
import { MoviesListComponent } from './movies-list/movies-list.component';

import {YoutubePlayerModule} from '../youtube-player/youtube-player.module'

@NgModule({
  imports: [
    CommonModule,
    MoviesRouterModule,
    YoutubePlayerModule
  ],
  declarations: [MoviesComponent, MovieComponent, MoviesHomeComponent, MoviesListComponent]
})
export class MoviesModule { }
