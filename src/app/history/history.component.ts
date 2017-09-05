import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  noHistory:boolean = true;
  history:any[] = [];

  constructor() {}

  ngOnInit() {
    const history = sessionStorage.getItem('history');
    if(!history){
      this.noHistory = true;
    }else{
      this.noHistory = false;
      const historyResults = JSON.parse(sessionStorage.getItem('history')); 

      this.history = historyResults.map((obj) => {
        return JSON.parse(obj);
      })
    }
    //console.log(this.history)
  }

}
