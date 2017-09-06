import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  birthday = new Date(1989,1,24);

  total = 500;
  fee = 0.5;

  constructor() { }

  ngOnInit() {
  }

}
