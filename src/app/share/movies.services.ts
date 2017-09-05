import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()   

export class MoviesServices {

    showsSubject = new Subject<any>();
    show = new Subject<any>();
    shows:any[] = [];

    searchResult = new Subject<any>();
    theSearchResults:any[] = [];

    constructor(){}

    /**
     * Get the response of the request and set a copy on the response in showSubject.
     * @param theShows Object :: Contains the result
     */
    setShows(theShows){
        this.shows = theShows.results;
        this.showsSubject.next(this.shows);
    }

    setShow(theShow){
        this.show.next(theShow); 
    }

    setSearch(result){
            this.theSearchResults = result.results;
            this.searchResult.next(this.theSearchResults);
    }
    
}