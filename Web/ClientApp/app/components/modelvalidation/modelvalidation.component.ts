import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modelvalidation',
  templateUrl: './modelvalidation.component.html',
  styleUrls: ['./modelvalidation.component.css']
})
export class ModelvalidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  user = {
    name:"",
    phone:"",
    email:""
  };

  onSubmit(data:data){

    if(data.valid)
      {
        console.log(data.value);
      }
      else
        {console.log("Form is Invalid")};

  }

}

interface data
{
  value:any;
  valid:boolean;
}
