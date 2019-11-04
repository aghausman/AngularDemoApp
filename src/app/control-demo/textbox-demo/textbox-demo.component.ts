import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-textbox-demo',
  templateUrl: './textbox-demo.component.html',
  styles: []
})
export class TextboxDemoComponent implements OnInit {

  @ViewChild('myForm', {static: false}) inputBox : ElementRef;

  customerName:string = "Jessica Tyndall";
  address:string = "";

  numberOfSeats: string = "";
  comments:string = "";
  price:number;

  constructor() { }

  wasValidated:boolean = false;

  ngOnInit() {
  }

  onSubmit(){
    this.wasValidated = true;
  }

}
