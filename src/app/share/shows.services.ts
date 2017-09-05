import {Injectable, Inject} from '@angular/core';
import {Http } from '@angular/http';

import { HttpErrorResponse } from '@angular/common/http';
import {APP_CONFIG, CONFIG_APP} from './app.config';

import {MoviesServices} from './movies.services';

@Injectable()

export class ShowServices {
    
    constructor(private http:Http, private moviesServices: MoviesServices, @Inject(APP_CONFIG) private config){}

    /**
     * Get Shows by type
     * @param typeShow Options: movie, tv
     * @param typeCategory Options: latest, popular, top_rated
     */
    getLatestShowsByType(typeShow, typeCategory){
        this.http.get(this.config.mdbUrl+this.config.mdbApiVersion+'/'+typeShow+'/'+typeCategory+'?api_key='+this.config.mdbApiKey).subscribe(
            res => {
                this.moviesServices.setShows(res.json());
                //return res.json()
            },
            (error:HttpErrorResponse) => {
                this.errorHandle(error);
            }
        )
    }

    getShowDetail(showType, showId){
        return this.http.get(this.config.mdbUrl+this.config.mdbApiVersion+'/'+showType+'/'+showId+'?api_key='+this.config.mdbApiKey).subscribe(
            res => {
                this.moviesServices.setShow(res.json());
            },
            (error:HttpErrorResponse) => {
                this.errorHandle(error);
            }
        )
    }

    searchShow(typeShow, query){
        return this.http.get(this.config.mdbUrl+this.config.mdbApiVersion+'/search/'+typeShow+'?api_key='+this.config.mdbApiKey+'&query='+query).subscribe(
            res => this.moviesServices.setSearch(res.json()),
            (error:HttpErrorResponse) => {
                this.errorHandle(error);
            }
        )
    }

    getCredits(movieId){
        this.http.get(this.config.mdbUrl+this.config.mdbApiVersion+'/movie/'+movieId+'/credits?api_key='+this.config.mdbApiKey).subscribe(
            res => {
                const data = res.json();
            },
            (error:HttpErrorResponse) => {
                this.errorHandle(error);
            }
        )
    }
    
    /**
     * Handle errors in requests
     * @param error 
     */
    errorHandle(error){
        if (error.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
    }
    


}