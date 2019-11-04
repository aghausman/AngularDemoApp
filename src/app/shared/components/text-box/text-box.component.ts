import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef, forwardRef   } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { NgxMaskModule } from 'ngx-mask'

@Component({
  selector: 'text-box',
  templateUrl:'./text-box.component.html',
  styleUrls: ['./text-box.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> TextBoxComponent) ,
    multi:true
  }]
})



export class TextBoxComponent implements OnInit, AfterViewChecked, ControlValueAccessor {

  writeValue(obj: any): void
  {
    if ( this.getUnderlyingControl() && obj) {
      this.getUnderlyingControl().nativeElement.value = obj;
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


  onTouched = () => {};
  onChange = ()=> {};



  @ViewChild('textbox', {static: false}) inputBox : ElementRef;
  @ViewChild('valuelabel', {static: false}) labelBox : ElementRef;
  @ViewChild('textarea', {static: false}) inputArea : ElementRef;


  @Input() id:string;
  @Input() caption:string;
  @Input() icon:string;
  @Input() maxLength:number;
  @Input() isRequired:boolean;
  @Input() hintRequired:boolean;
  @Input() isMultiLine:boolean;
  @Input() inputModel:string;
  @Input() hideFeedback:boolean;
  @Input() readonly:boolean;
  @Input() format:string;


  textCount: number;
  clipBoardTipText: string;
  suffix:string;
  prefix:string;
  thousandSeparator:string;
  mask:string;



  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewChecked()
  {
    this.cdr.detectChanges();

  }

  ngOnInit() {
    this.textCount = this.inputModel === undefined ? 0 : this.inputModel.length;
    this.hideFeedback = this.hideFeedback === undefined ? false : this.hideFeedback;
    this.readonly = this.readonly === undefined ? false: this.readonly;
    this.isMultiLine = this.isMultiLine === undefined ? false: this.isMultiLine;
    this.parseTextFormat();
  }


  parseTextFormat():void {
    this.format = this.format === undefined ? "regular" : this.format;

    switch(this.format.toLowerCase())
    {

      case "currency":{

        this.mask = "separator.2";
        this.prefix = "$";
        this.thousandSeparator = ",";
        break;
      }
      case "phone": {
        this.mask = "ph";
        break;
      }
      case "number": {
        this.mask = "0";
        break;
      }
      case "alphanumeric":{
        this.mask = "A";
        break;
      }
      case "letter":{
        this.mask = "S";
        break;
      }
      default: {
        this.mask = "";
        break;
      }
    }


  }

  onLabelTextCopied(event: any) : void {
    this.clipBoardTipText = "Copied"
  }

  getUnderlyingControl() : ElementRef  {
    if (this.readonly == false && this.isMultiLine == false)
    {
      return this.inputBox;
    }
    else if (this.readonly == false && this.isMultiLine == true)
    {
      return this.inputArea;
    }
    else
    {
      return this.labelBox;
    }
  }
}
