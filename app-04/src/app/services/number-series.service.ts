import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { filter,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {

    const seriesGenerator = (observer:Observer<number>) =>{

      if(lb>ub){
        observer.error(`Lower Bound ${lb} is greater than Upper Bound ${ub} and the series can not be generated`);
        return;
      }

      let n = lb;
      let handle = setInterval(() => {
        observer.next(n);
        n++;
        if(n>ub){
          clearInterval(handle);
          observer.complete();
        }
      },500);
    }

    return new Observable( seriesGenerator );
  }

  generateEvenSeries(lb:number,ub:number) : Observable<number> {
    return this.generateSeries(lb,ub).pipe( filter( n => n%2===0 ) );
  }

  generateSquaredSeries(lb:number,ub:number) : Observable<number> {
    return this.generateSeries(lb,ub).pipe( map( n => n*n ) );
  }

  generateEvenSquaredSeries(lb:number,ub:number) : Observable<number> {
    return this.generateSeries(lb,ub).pipe( filter( n => n%2===0 ), map( n => n*n ) );
  }
}
