import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SearchResultsComponent} from './search-results.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SearchResultsComponent],
  declarations: [SearchResultsComponent]
})
export class SearchResultsModule { }
