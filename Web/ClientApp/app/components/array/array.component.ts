import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor(private userService: UserService) {

    var users = userService.getUsers();

    users.forEach(user => {
      this.people.push(user);
    });


    userService.getData().subscribe(result => {

      this.people.push(`Neuer Subscibe ${result}`);

    });

  }

  ngOnInit() {

  }

  name = "Paul";

  showName = true;

  people = ["Paul", "Thomas", "Carola", "Jecy"];

  people2 = [
    {
      firstname: "Paul",
      lastname: "Puttich"
    },
    {
      firstname: "Thomas",
      lastname: "Küspert"
    },
    {
      firstname: "Julia",
      lastname: "Merk"
    }
  ];
}
