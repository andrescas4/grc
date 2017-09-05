import { Component, OnInit, OnDestroy } from '@angular/core';
import {MoviesServices} from '../share/movies.services';
import { Subscription } from 'rxjs/Subscription';

import Helper from '../share/helper';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  searchSubscription:Subscription;
  search:any[] =[];
  constructor(private moviesServices:MoviesServices) { }

  ngOnInit() {

    this.searchSubscription = this.moviesServices.searchResult.subscribe(
      res => {
        for(let item of res){
            const num = item.popularity;
            item['color'] = '#'+Helper.getHexagecimal(num);
            item['widthSize'] = Helper.sizeBg(item.vote_average) + '%';
          }
        this.search = res}
    )
  }

  ngOnDestroy(){
    this.searchSubscription.unsubscribe();
  }



}
