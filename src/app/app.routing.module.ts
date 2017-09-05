import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HistoryComponent} from './history/history.component';
import {SearchResultsComponent} from './search-results/search-results.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchResultsComponent},
    {path:'history', component:HistoryComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}