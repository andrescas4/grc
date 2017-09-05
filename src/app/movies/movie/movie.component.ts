import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowServices} from '../../share/shows.services';
import {MoviesServices} from '../../share/movies.services';
import {YoutubeServices} from '../../share/youtube.services';


import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  infoShow:any;
  video:string;
  
  constructor(private route:ActivatedRoute, private showServices: ShowServices, private movieServices:MoviesServices, private youtubeService: YoutubeServices) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.showServices.getShowDetail('movie', params.movie);
      }
    )

    this.movieServices.show.subscribe(
      res =>  {
        this.youtubeService.loadVideos(res.original_title) 
        this.infoShow = res
      }
    )

    this.getVideos()

  }

  getVideos(){
    this.youtubeService.videoSubject.subscribe(
      res => {console.log(res.items[0].id.videoId); this.video = res.items[0].id.videoId}
    )
  }

}
