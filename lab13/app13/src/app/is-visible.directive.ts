import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  // tslint:disable-next-line:no-input-rename
 // @Input('isVisible') value: boolean;
 public value: boolean;
  @Input() isVisible;
  constructor(private element: ElementRef) {

   }
  ngOnChanges(){
    console.log("Color is "+this.isVisible);
        if (this.isVisible == true) {
      this.element.nativeElement.style.color = 'blue';
      console.log("is visible running....")
    } else {
      console.log("invisible running...")
      this.element.nativeElement.style.color = 'red';
    }
  }
  // tslint:disable-next-line:use-life-cycle-interface


}
