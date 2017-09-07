import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    constructor(public http: Http) {



    }

    getUsers(){

        return this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(response => response.json());

    }

    addUser(user:any)
    {
        return this.http.post('https://jsonplaceholder.typicode.com/users', user)
        .map(resp=> resp.json());
    }

    deleteUser(id:number)
    {
        return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id)
        .map(resp=> resp.json());
    }

}