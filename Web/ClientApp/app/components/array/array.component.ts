import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor() { }

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
