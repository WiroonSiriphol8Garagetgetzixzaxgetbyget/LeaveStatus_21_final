import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the ShowProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShowProvider {

  constructor(public http: Http) {
    console.log('Hello ShowProvider Provider');
  }

  Show() {
    return new Promise((resolve, reject) => {
      let url = 'https://10.80.39.23/pcksite/index.php/hr/leaves/Service_Test_team7';
      return this.http.get(url).map((res) => res.json()).subscribe(data => {
        this.Show = data;
        resolve(data);
        console.log(data);
      },
        error => {
          reject(error);
        });
    }); 
  }
  Show2() {
    return new Promise((resolve, reject) => {
      let url = 'https://10.80.39.23/pcksite/index.php/hr/leaves/Service_Test_team7';
      return this.http.get(url).map((res) => res.json()).subscribe(data => {
        this.Show = data;
        resolve(data);
        console.log(data);
      },
        error => {
          reject(error);
        });
    }); 
  }

}