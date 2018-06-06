import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RaceServiceProvider {

  apiUrl = 'http://localhost:8000';
  constructor(public http: HttpClient) {
    console.log('Hello RegisterServiceProvider Provider');
  }

  SimulateRace(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/race/simulate').subscribe(data => {
        resolve(data);
      }), err => {
        console.log(err);
      }
    })
  }

}
