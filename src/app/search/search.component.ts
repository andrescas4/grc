import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Router} from '@angular/router';

import Helper from '../share/helper';
import {ShowServices} from '../share/shows.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  hide:any = true;
  typeShows = ['movie', 'tv'];
  selectedTypeShow = 'movie';

  @ViewChild('searchForm')  searchForm:NgForm;
  constructor(private showServices:ShowServices, private router:Router) { }

  ngOnInit() {
    Helper.toggleSearch.subscribe(
      res =>  this.hide = res
    )
  }

  onSubmit(e:NgForm){
    const query = this.searchForm.value.search.trim().replace(' ', '+');
    const title = this.searchForm.value.search;
    const typeShow = this.searchForm.value.typeShow;
    const history = sessionStorage.getItem('history');
    
    let item = '{"title":"'+title+'", "query":"'+query+'", "type":"'+typeShow+'"}';
    
    this.showServices.searchShow(typeShow, query);

    this.searchForm.controls['search'].setValue('');
    this.router.navigate(['search']);

    this.pushAndSaveArray(history, item);
  }

  pushAndSaveArray(history, item){
    
    if(!history){
      let toString = JSON.stringify(item);
      sessionStorage.setItem('history', `[${toString}]`);
    }else{
      const getHistory = history;
      const toArray = JSON.parse(getHistory);
      toArray.push(item);

      let toString = JSON.stringify(toArray)

      sessionStorage.setItem('history', `${toString}`);
      
    }
  }

}
