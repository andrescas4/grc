import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowServices} from '../../share/shows.services';
import {MoviesServices} from '../../share/movies.services';
import {YoutubeServices} from '../../share/youtube.services';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  infoShow:any;
  video:string;

  constructor(private route:ActivatedRoute, private showServices: ShowServices, private movieServices:MoviesServices, private youtubeService: YoutubeServices) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.showServices.getShowDetail('tv', params.serie);
      }
    )

    this.movieServices.show.subscribe(
      res =>  {
       this.youtubeService.loadVideos(res.original_name)
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
