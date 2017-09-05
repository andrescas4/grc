import {Subject} from 'rxjs/Subject';

export default class Helper {

    static toggleSearch = new Subject;

    static getHexagecimal(number){
        return number.toString(16).substr(-6);
    }

    static sizeBg(score){
        if(score === 0){
            return 100; 
        }else{
            return score*10;
        }
        
    }

    static changeSearcState(state){
        this.toggleSearch.next(state);
    }
}