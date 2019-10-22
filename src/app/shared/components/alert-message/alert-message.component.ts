import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs'



@Component({
  selector: 'alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  @Input() successMessages: string[];
  @Input() warningMessages: string[];
  @Input() failureMessages: string[];

  @Input() successHeading: string;
  @Input() warningHeading: string;
  @Input() failureHeading: string;

  @Input() collectionType: string;
  @Input() autoClose:number;
  @Input() canClose:boolean;

  @Output() onClose = new EventEmitter();
  localAutoClose:number;

  constructor() { 
    
  }

  ngOnInit() {    
    this.localAutoClose = this.autoClose;

    if (this.autoClose !== undefined)
    {
      this.setTimerForOneSec();
    }
  }


  onClosed(event:any):void{
    this.onClose.emit(event);
  }

  setTimerForOneSec() :void {    

    var that = this;
    setTimeout(()=> {
      this.localAutoClose -= 1;

      if (this.localAutoClose > 0)
      {
        that.setTimerForOneSec();
      }
    }, 1000)

  }


  get IsList(): boolean
  {
    return this.collectionType !== undefined && this.collectionType.toLowerCase() === "list";
  }

  get CanClose():boolean{
    return this.canClose !== undefined && this.canClose;
  }

  get CanAutoClose():boolean
  {
    return this.localAutoClose !== undefined;
  }

  get AutoCloseTime() : any 
  {
    if (this.autoClose !== undefined) {
      return (this.autoClose * 1000)
    }
    else{
      return null;
    }

  }

  get SuccessVisiblity():boolean
  {
    return this.successMessages !== undefined && this.successMessages.length > 0;
  }

  get WarningVisiblity(): boolean
  {
    return this.warningMessages !== undefined && this.warningMessages.length > 0;
  }

  get FailureVisiblity(): boolean
  {
    return  this.failureMessages !== undefined && this.failureMessages.length > 0;
  }
}
