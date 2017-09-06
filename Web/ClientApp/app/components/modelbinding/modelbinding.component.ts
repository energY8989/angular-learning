import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modelbinding',
  templateUrl: './modelbinding.component.html',
  styleUrls: ['./modelbinding.component.css']
})
export class ModelbindingComponent implements OnInit {


  name: string = "";
  age: number = 0;

  users: string[] = ["paul", "Thomas", "Roberth"];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.users.push(this.name);

    this.name = "";

  }

}
