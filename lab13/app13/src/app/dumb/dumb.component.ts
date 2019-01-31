import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
 
  <div >
    <h2>List of Courses</h2>
    <ul >
      <li *ngFor = "let course of inputCourse" >{{course}}</li>
    </ul>
  </div>
  <button (click)=showHide() appIsVisible appLoggable [isVisible]="isVisible">Click Me</button>
  `,
  styles: []
})
export class DumbComponent implements OnInit {

  public isVisible: boolean = true;

  @Input() inputCourse ;
  constructor() { }

  ngOnInit() {
  }

  showHide(){
    if(this.isVisible==true)this.isVisible = false;
    else this.isVisible = true;
    console.log(this.isVisible)
  }
}
