import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      {{message}}
    </p>
    <div>
    <button (click)="deduct()" >{{minus}}</button>
    {{ComponetCounterValue}}   
    <button (click)="add()">{{plus}}</button>

    </div>

    Component counter value = {{ComponetCounterValue}}

  `,
  styles: ['button{width: 30px; height:15px; line-height:5px; text-align:center;}']
})
export class CounterComponent implements OnInit {
  message = "This a window for the counter";
  ComponetCounterValue: number = 6;
  minus = "-";
  plus = "+";
  constructor() { }

  deduct(){
    this.ComponetCounterValue--;
    console.log("deducted value is "+this.ComponetCounterValue);
  }
  add(){
    this.ComponetCounterValue++;
    console.log("Added value is "+this.ComponetCounterValue);
  }

  ngOnInit() {
    console.log("its working")
  }

}
