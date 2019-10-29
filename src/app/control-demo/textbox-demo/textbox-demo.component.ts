import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-textbox-demo',
  templateUrl: './textbox-demo.component.html',
  styles: []
})
export class TextboxDemoComponent implements OnInit {

  data1:string = "Textbox";
  data2:string = "";

  data3:string = "This is readonly textbox";

  constructor() { }

  wasValidated:boolean = false;

  ngOnInit() {
  }

  onSubmit(){
    this.wasValidated = true;
  }

}
