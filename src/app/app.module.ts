import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {APP_CONFIG, CONFIG_APP} from './share/app.config';
import { WindowSrv } from './share/window.helper';

import {ShowServices} from './share/shows.services';
import {MoviesServices} from './share/movies.services';
import {YoutubeServices} from './share/youtube.services';

import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app.routing.module';
import {TwitterModule} from './twitter/twitter.module';
import {MoviesModule} from './movies/movies.module';
import {HistoryModule} from './history/history.module';
import {SeriesModule} from './series/series.module';
import { FilterModule } from './filter/filter.module';
import { SearchModule } from './search/search.module';
import { HomeModule } from './home/home.module';
import { SearchResultsModule } from './search-results/search-results.module';
import { YoutubePlayerModule } from './youtube-player/youtube-player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    YoutubePlayerModule,
    BrowserModule,
    HttpModule,
    TwitterModule,
    AppRoutingModule,
    MoviesModule,
    HistoryModule,
    SeriesModule,
    FilterModule,
    SearchModule,
    HomeModule,
    CoreModule,
    SearchResultsModule
  ],
  providers: [
    {provide:APP_CONFIG, useValue:CONFIG_APP},
    { provide: WindowSrv, useValue: window },
    ShowServices,
    MoviesServices,
    YoutubeServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
