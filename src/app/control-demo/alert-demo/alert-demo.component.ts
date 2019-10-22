import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { isLeapYear } from 'ngx-bootstrap/chronos/units/year';

@Component({
  selector: 'app-alert-demo',
  templateUrl: './alert-demo.component.html',
  styles: []
})
export class AlertDemoComponent implements OnInit {

  successMessages = [];
  successHeading = "Successful";

  successMessages1 = [];
  

  warningMessages = [];
  warningHeading = "Warning";

  errorMessages = [];
  errorHeading = "Error";

  constructor() { }

  ngOnInit() {    
    this.successMessages.push("First success line message")
    this.successMessages.push("Second success line message")

    this.warningMessages.push("First warning line message")
    this.warningMessages.push("Second warning line message")

    this.errorMessages.push("First error line message")
    this.errorMessages.push("Second error line message")

    this.successMessages1.push("This record has been updated successfully.")
  }

  OnAlertClose(event) {
    console.log("Close Alert");
  }

  

}
