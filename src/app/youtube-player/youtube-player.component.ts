import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import {YoutubePlayerService} from './youtube-player.service';
import {YoutubeServices} from '../share/youtube.services';


@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements AfterViewInit {
  
  @Input() video;
  @ViewChild('ytPlayerContainer') public ytPlayerContainer: ElementRef;
  showsSubscription;


  constructor(private youtubePlayerService:YoutubePlayerService, private youtubeService: YoutubeServices) { }

  ngAfterViewInit() {
    console.log(this.video)
    const htmlId = this.youtubePlayerService.generateUniqueId();
    this.ytPlayerContainer.nativeElement.setAttribute('id', htmlId);

    
    this.youtubePlayerService.loadApi();
    
    this.youtubePlayerService.setApi();

    setTimeout(() => {
      this.youtubePlayerService.setPlayer(htmlId, this.video);
    }, 1000)

      
    
  }

}
