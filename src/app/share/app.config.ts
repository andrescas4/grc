import {OpaqueToken} from '@angular/core';

export let APP_CONFIG = new OpaqueToken("app.config");

export interface AppConfig {
    mdbApiVersion:string;
    mdbApiKey:string;
    mdbUrl:string;
    youTubeUrl:string;
    youTubeApiKey:string;
}

export const CONFIG_APP: AppConfig = {
    mdbApiVersion : '3',
    mdbApiKey : 'ae6525a5887b9a21213f05196bc0969d',
    mdbUrl:'https://api.themoviedb.org/',
    youTubeUrl: 'https://www.googleapis.com/youtube/v3/search?part=id&q=',
    youTubeApiKey: 'AIzaSyCkLPxpx88I2ZP_9nYGu9SC_MTtR0RXZXY'
}