import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

  constructor(public http: Http) { }

  getPosts() : Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .map(resp => {
        return resp.json();
      });
  }


}
