import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styles: []
})
export class SelectDemoComponent implements OnInit {

  @ViewChild('myForm', {static: false}) formElement : ElementRef;


  customconvalue:string = "";
  nativeconvalue:string = "";
  customerName:string = "Jessica Tyndall";
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formElement.nativeElement.status);
  }

}
