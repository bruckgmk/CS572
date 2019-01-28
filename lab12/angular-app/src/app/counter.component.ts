import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      {{message}}
    </p>
    <div>
    <button (click)="deduct()" >{{minus}}</button>
    {{intCount}}    
    <button (click)="add()">{{plus}}</button>

    </div>

    Component counter value = {{intCount}}

  `,
  styles: ['button{width: 30px; height:15px; line-height:5px; text-align:center;}']
})
export class CounterComponent implements OnInit {
  message = "This a window for the counter";
  intCount = 6;
  minus = "-";
  plus = "+";
  constructor() { }

  deduct(){
    this.intCount--;
    console.log("deducted value is "+this.intCount);
  }
  add(){
    this.intCount++;
    console.log("Added value is "+this.intCount);
  }

  ngOnInit() {
    console.log("its working")
  }

}
