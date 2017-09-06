import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private text:string = "Hallo Welt!";

  private value = true;

  protected changeValue()
  {
    this.text = "Hallo Paul!";
    this.value = !this.value;
  }

  protected fireEvent(e:any, greeting:any)
  {
    console.log("Clicked!");
  }

}
