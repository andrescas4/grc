import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YoutubePlayerComponent} from './youtube-player.component';
import {YoutubePlayerService} from './youtube-player.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YoutubePlayerComponent],
  providers:[YoutubePlayerService],
  exports:[YoutubePlayerComponent]
})
export class YoutubePlayerModule { }
