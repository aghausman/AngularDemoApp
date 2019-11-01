import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';


@Directive({
  selector: '[copy-clipboard]'
})
export class CopyClipboardDirective {

  @Input("copy-clipboard")
  public clipBoardText:string;

  @Output("on-copied")
  public onCopied: EventEmitter<string>  = new EventEmitter<string>();


  @HostListener("click", ["$event"])
  public onClick(event: MouseEvent):void {

    event.preventDefault();

    if (!this.clipBoardText)
      return;

    let listener = (e: ClipboardEvent) => {
      let clipboard = e.clipboardData || window["clipboardData"];
      clipboard.setData("text", this.clipBoardText.toString());
      e.preventDefault();

      this.onCopied.emit(this.clipBoardText);
    };

    document.addEventListener("copy", listener, false);
    document.execCommand("copy");
    document.removeEventListener("copy", listener, false)
  }


  constructor() { }

}
