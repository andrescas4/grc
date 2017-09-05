import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesComponent } from './series.component';
import { SeriesHomeComponent } from './series-home/series-home.component';
import { SerieComponent } from './serie/serie.component';
import {SeriesRouterModule} from './series-router.module';

import {YoutubePlayerModule} from '../youtube-player/youtube-player.module'

@NgModule({
  imports: [
    CommonModule,
    SeriesRouterModule,
    YoutubePlayerModule
  ],
  declarations: [SeriesListComponent, SeriesComponent, SeriesHomeComponent, SerieComponent]
})
export class SeriesModule { }
