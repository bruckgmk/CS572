import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p>
    </p>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

//  public course = {  name:"Modern Web Application",
//               code:572,
//               room:115, 
//               professor: "Assad",
//               students:22
//             }
public course = ["MWA","WAP","EA","WAA","Algorithm"];
  @Output() evtEmitter = new EventEmitter();
  constructor() {
    console.log("Smarting...")
    setTimeout(() => this.evtEmitter.emit(this.course), 1);
      //this.evtEmitter.emit(this.course);
      console.log("SMT")
   }

  ngOnInit() {
  }

}
