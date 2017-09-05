import { Injectable, Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService
{

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string)
    {
        this._http = http;
        this._baseUrl = baseUrl;
    }

    private _http: Http;
    private _baseUrl: string;


    getUsersAsync(): Promise<User[]>
    {
        return new Promise<User[]>(resolve => {

            this._http.get(this._baseUrl + 'api/Users/All').subscribe(result => {

                resolve(result.json() as User[]);

            }, error => console.error(error));

        });
    }
}


export interface User {
    UserId: number;
    Username: string;
    Email: string;
    Firstname: string;
    Lastname: string;
}