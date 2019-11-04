import { Component, OnInit, Input, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'simple-text-box',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleTextBoxComponent),
      multi: true
    }
  ],
  template: `
    <label>{{Name}}</label>
    <input type='text' [(ngModel)]="value" name='CustomControl1'  />
  `,
  styleUrls: ['./simple-text-box.component.css']
})
export class SimpleTextBoxComponent implements OnInit, ControlValueAccessor {
  

  @Input('value') val:string;

  onChange:any = () => {};
  onTouched:any = () => {};

  @Input() Name:string;
  @Input() InputModel:string;
  @ViewChild("TextControl", {static : false}) TextBoxCon: ElementRef;




  get value() {
    return this.val;
  }

  set value(val)
  {
    this.val = val;
    this.onChange(val);
    this.onTouched();    
  }


  constructor() { }

  ngOnInit() {


  }

  writeValue(value): void {
    if (value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }


 


}
