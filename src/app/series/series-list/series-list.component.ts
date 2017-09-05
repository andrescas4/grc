import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  @Input() show;
  constructor() { }

  ngOnInit() {
  }

}
