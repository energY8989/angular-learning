import { Component, OnInit } from '@angular/core';

import {HttpService} from '../../services/http.service';

@Component({
  selector: 'http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(public httpService:HttpService) { }

  users:any[];
  user = {
    name:"",
    email:"",
    phone:""
  };

  ngOnInit() {

    this.httpService.getUsers().subscribe(users => {

      this.users = users;

    })

  }

  deleteUser(id:number)
  {
    this.httpService.deleteUser(id).subscribe(result => {

      for (let i = 0; i < this.users.length; i++)
        {
          if(this.users[i].id == id)
            {
              this.users.splice(i, 1);
            }
        }

    });
  }

  onSubmit()
  {
    this.httpService.addUser(this.user).subscribe(user => {
      console.log(user);
      this.users.unshift(user);
    });
  }

}
