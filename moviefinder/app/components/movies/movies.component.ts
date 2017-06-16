import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent { 
    popularList:Array<Object>;
    theatersList:Array<Object>;
    searchStr: string;
    searchRes:Array<Object>;
    
    constructor(private _movieService: MovieService){
        this._movieService.getPopular().subscribe(res => {
            this.popularList = res.results;
        });
        
        this._movieService.getInTheaters().subscribe(res => {
            this.theatersList = res.results;
        });
    }
    
    searchMovies(){
        this._movieService.searchMovies(this.searchStr).subscribe(res => {
            this.searchRes = res.results;
        });
    }
}
