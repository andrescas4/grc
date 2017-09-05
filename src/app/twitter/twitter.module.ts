import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TwitterComponent} from './twitter.component';
import {TwittsComponent} from './twitts/twitts.component';

@NgModule({
  imports: [CommonModule],
  exports: [TwitterComponent],
  declarations: [TwitterComponent,TwittsComponent]
})
export class TwitterModule { }
