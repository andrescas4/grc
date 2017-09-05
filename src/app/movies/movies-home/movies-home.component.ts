import { Component, OnInit, OnDestroy } from '@angular/core';
import {ShowServices} from '../../share/shows.services';
import {MoviesServices} from '../../share/movies.services';
import { Subscription } from 'rxjs/Subscription';

import Helper from '../../share/helper';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit, OnDestroy {

  shows:any[] = [];
  showsSubscription:Subscription;
  
  constructor(private showsServices:ShowServices, private movieServices:MoviesServices) { }

  ngOnInit() {
    this.showsServices.getLatestShowsByType('movie', 'popular');

    this.showsSubscription = this.movieServices.showsSubject.subscribe(
      res => {
          for(let item of res){
            const num = item.popularity;
            item['color'] = '#'+Helper.getHexagecimal(num);
            item['widthSize'] = Helper.sizeBg(item.vote_average) + '%';
          }
          this.shows = res;
        }
    )
  }

  ngOnDestroy(){
    this.showsSubscription.unsubscribe();
  }

}
