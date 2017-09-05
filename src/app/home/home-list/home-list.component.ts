import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  @Input() show;
  constructor() { }

  ngOnInit() {
  }

}
