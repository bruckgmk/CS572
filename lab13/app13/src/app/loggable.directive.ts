
import { Directive, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

 
  constructor() { }

  // @HostListener('dbclick') ondblclick()  {
  //   console.log('DIV element has been clicked');
  // }

    @HostListener('mouseenter') onMouseEnter() {
    console.log('DIV element has been clicked');
  }
}