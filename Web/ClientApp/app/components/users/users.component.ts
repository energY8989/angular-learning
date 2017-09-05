import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { UsersService, User } from './users.service';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    providers: [UsersService]
})
export class UsersComponent {
    public users: User[];

    private _userService: UsersService;

    constructor(private usersService : UsersService)
    {
        this._userService = usersService;

        this.LoadUsers();
    }

    private async LoadUsers()
    {
        this.users = await this._userService.getUsersAsync();
    }

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get(baseUrl + 'api/Users/All').subscribe(result => {
    //        this.users = result.json() as User[];
    //    }, error => console.error(error));
    //}
}


