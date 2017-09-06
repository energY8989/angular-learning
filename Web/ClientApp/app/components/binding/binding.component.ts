import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  private imageUrl = "http://lorempixel.com/400/200";

  private isUnchanged = false;

  constructor() { }

  ngOnInit() {
  }

}
