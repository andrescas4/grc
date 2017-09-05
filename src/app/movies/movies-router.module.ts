import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MoviesComponent} from './movies.component';
import {MoviesHomeComponent} from './movies-home/movies-home.component';
import {MovieComponent} from './movie/movie.component';

const moviesRoutes: Routes = [

    {path: 'movies', component:MoviesComponent, children:[
        {path:'', component:MoviesHomeComponent},
        {path:':movie', component:MovieComponent}
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(moviesRoutes)],
    exports : [RouterModule]
})

export class MoviesRouterModule { }
