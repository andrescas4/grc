import{Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {YoutubePlayerService} from '../youtube-player/youtube-player.service';
import{Subject} from 'rxjs/Subject';

import { HttpErrorResponse } from '@angular/common/http';
import {APP_CONFIG, CONFIG_APP} from './app.config';

@Injectable()

export class YoutubeServices{

    videoSubject = new Subject<any>();
    constructor(private http:Http, @Inject(APP_CONFIG) private config, private youtubePlayerService:YoutubePlayerService){}

    loadVideos(query){
        return this.http.get(this.config.youTubeUrl+query+'&key='+this.config.youTubeApiKey).subscribe(
            res => this.videoSubject.next(res.json()),
            (error:HttpErrorResponse) =>{
                console.log(error)
            }
        )
    }
}