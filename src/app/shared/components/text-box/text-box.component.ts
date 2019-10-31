import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'text-box',
  templateUrl:'./text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit, AfterViewChecked {

  @ViewChild('control', {static: false}) inputBox : ElementRef;
  @ViewChild('valuelabel', {static: false}) labelBox : ElementRef;
  



  @Input() id:string;
  @Input() caption:string;
  @Input() icon:string;
  @Input() maxLength:number;
  @Input() class:string;
  @Input() isRequired:boolean;
  @Input() hintRequired:boolean;
  @Input() isMultiLine:boolean;
  @Input() inputModel:string;
  @Input() hideFeedback:boolean;
  @Input() readonly:boolean;


  @Output() onChange = new EventEmitter<string>();

  textCount: number;  


  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewChecked()
  {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.textCount = this.inputModel === undefined ? 0 : this.inputModel.length;    
    this.hideFeedback = this.hideFeedback === undefined ? false : this.hideFeedback;
    this.readonly = this.readonly === undefined ? false: this.readonly;    
  }

  onTextChange() {
    this.onChange.emit(this.inputModel);
    this.textCount = this.inputModel.length;
  }

  getValidationSpanVisiblity() :boolean{
    let control =  this.getUnderlyingControl();

    if (control != undefined)
    {
      console.log("control is not undefined");
      
      if (control["invalid"] != undefined)
      {
          console.log("control has required property");
          return (control["invalid"] && this.hideFeedback === false);
      }
    }
    
    return false;    
  }

  getValidationErrorVisiblity(propertyName: string): boolean
  {
    let control =  this.getUnderlyingControl();

    if (control != undefined)
    {
      if (control["errors"])
      {
        return control["errors"][propertyName];
      }
    }
    
    return false;
  }

  getUnderlyingControl() : ElementRef  {
    if (this.readonly == false)
    {           
      return this.inputBox;      
    }
    else
    { 
      return this.labelBox;
    }    
  }
}
