import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cssclass',
  templateUrl: './cssclass.component.html',
  styleUrls: ['./cssclass.component.css']
})
export class CssclassComponent implements OnInit {

  isSpecial = false;
  canSave = true;
  currentClasses = {};

  setCurrentClasses()
  {
    this.currentClasses = {
      saveable: this.canSave,
      special: this.isSpecial
    };
  }

  constructor() {

    this.setCurrentClasses();

   }

  ngOnInit() {
  }



}
