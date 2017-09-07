import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private data: Observable<number>;

    private users: string[];

    constructor() {
        this.users = ["Paul", "Thomas"];
    }

    getData() {
        this.data = new Observable(observer => {

            setTimeout(function () {

                observer.next(1);

            }, 500);

            setTimeout(function () {

                observer.next(2);

            }, 1000);

            setTimeout(function () {

                observer.next(3);

            }, 1500);

            setTimeout(function () {

                observer.complete();

            }, 2000);

        });

        return this.data;
    }

    getUsers(): string[] {
        return this.users;
    }

}