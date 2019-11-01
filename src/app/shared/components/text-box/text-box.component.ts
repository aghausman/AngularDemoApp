import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'text-box',
  templateUrl:'./text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit, AfterViewChecked {

  @ViewChild('textbox', {static: false}) inputBox : ElementRef;
  @ViewChild('valuelabel', {static: false}) labelBox : ElementRef;
  @ViewChild('textarea', {static: false}) inputArea : ElementRef;




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
    this.isMultiLine = this.isMultiLine === undefined ? false: this.isMultiLine;

    console.log(this.getUnderlyingControl());

  }

  onTextChange() {
    this.onChange.emit(this.inputModel);
    this.textCount = this.inputModel.length;
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
