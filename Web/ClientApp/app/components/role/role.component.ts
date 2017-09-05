import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private dataService:DataService) { }

  private Name: string = "Paul";

  private Hobbies: string[];

  private Role: Role;

  ngOnInit() {

    this.Hobbies = ["Programmieren", "MTB-Fahren"];

    this.Role = {
      Name: "Admin",
      IsAdmin: true,
      Description: "Administrator"
    };

    this.dataService.getPosts().subscribe(item => {
      console.log(item);
    });

  }

  onClick() {
    this.Name = "Button clicked!";
  }

  protected deleteHobby(value: string) {
    this.Hobbies = this.Hobbies.filter((hobby, index) => {
      return hobby != value;
    });
  }

  protected addHobby(value: string) {
    this.Hobbies.unshift(value);
  }

}

interface Role {
  Name: string;
  Description: string;
  IsAdmin: boolean;
}

