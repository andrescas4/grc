import { Component, OnInit, OnDestroy } from '@angular/core';
import {ShowServices} from '../share/shows.services';
import { Subscription } from 'rxjs/Subscription';

import Helper from '../share/helper';
import {MoviesServices} from '../share/movies.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  theShows :any[] = [];
  showsSubscription:Subscription;

  constructor(private shows:ShowServices, private moviesServices:MoviesServices) { }

  ngOnInit() {
      this.shows.getLatestShowsByType('movie', 'popular');
      
      this.showsSubscription = this.moviesServices.showsSubject.subscribe(
        res => {
          for(let item of res){
            const num = item.popularity;
            item['color'] = '#'+Helper.getHexagecimal(num);
            item['widthSize'] = Helper.sizeBg(item.vote_average) + '%';
          }
          this.theShows = res;
        }
      )

  }

  ngOnDestroy(){
    this.showsSubscription.unsubscribe();
  }

}
