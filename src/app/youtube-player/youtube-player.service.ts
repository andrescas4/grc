import { Injectable, Inject } from '@angular/core';
import { WindowSrv } from '../share/window.helper';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class YoutubePlayerService {

  private iframeScriptId: string = "yt-iframe-api";
  public YTplayerSubject = new Subject<any>();
  
  done:boolean = false;

  constructor(@Inject(WindowSrv) private _Window: Window) {
   
  }

  loadApi(){

    if(this._Window.document.getElementById(this.iframeScriptId) == null ) {
        // Create scripte element and load API
        let apiScriptTag = this._Window.document.createElement("script");
        apiScriptTag.type = "text/javascript";
        apiScriptTag.src = "https://www.youtube.com/iframe_api";
        apiScriptTag.id = this.iframeScriptId;
        this._Window.document.body.appendChild(apiScriptTag);
    }
  }

  setApi(){

    const onYouTubeIframeAPIReady = () => {
      if(this._Window){
          this.YTplayerSubject.next(this._Window['YT']);
      }
    }

    this._Window['onYouTubeIframeAPIReady'] = onYouTubeIframeAPIReady;

  }

  setPlayer(htmlId, videoID){
    return new this._Window['YT'].Player(htmlId, {
      height: '360',
      width: '100%',
      videoId: videoID,
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  }

  generateUniqueId () {
    const len = 7;
    return Math.random().toString(35).substr(2, len);
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  onPlayerStateChange(event) {
    if (event.data == this._Window['YT'].PlayerState.PLAYING && !this.done) {
      setTimeout(this.stopVideo, 6000);
      this.done = true;
    }
  }

  stopVideo() {
    this.stopVideo();
  }

}
