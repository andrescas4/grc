import { Component, OnInit } from '@angular/core';
import Helper from '../../share/helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showSearch:boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  toggleSearch(e){
    e.preventDefault();
    Helper.changeSearcState(this.showSearch = !this.showSearch)
  }

}
