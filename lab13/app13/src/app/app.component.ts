import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app13';

  public smartData;
  showSmartData(data){
    this.smartData = data;
    console.log("Testing if it works...")
    console.log(this.smartData);
  }
}
