import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryComponent } from './history.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HistoryListComponent, HistoryComponent]
})
export class HistoryModule { }
