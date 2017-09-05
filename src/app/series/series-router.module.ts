import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SeriesComponent} from './series.component';
import {SeriesHomeComponent} from './series-home/series-home.component';
import {SerieComponent} from './serie/serie.component';

const seriesRoutes:Routes = [
  {path:'series', component: SeriesComponent, children:[
    {path: '', component:SeriesHomeComponent},
    {path:':serie', component:SerieComponent}
  ]}
] 

@NgModule({
  imports: [RouterModule.forChild(seriesRoutes)],
  exports: [RouterModule]
})

export class SeriesRouterModule { }
