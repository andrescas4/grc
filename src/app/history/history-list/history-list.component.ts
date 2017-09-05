import { Component, OnInit, Input } from '@angular/core';
import {ShowServices} from '../../share/shows.services';
import {MoviesServices} from '../../share/movies.services';

import {Router} from '@angular/router';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {

  @Input() result;

  constructor(private showServices:ShowServices, private movieServices:MoviesServices, private router:Router) { }

  ngOnInit() {
  }

  searchResult(e,type, query){
    e.preventDefault();
    this.showServices.searchShow(type, query);
    this.router.navigate(['search']);
  }

}
