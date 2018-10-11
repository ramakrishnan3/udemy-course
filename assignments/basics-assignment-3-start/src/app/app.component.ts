import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: boolean = true;
  clicks: Date[] = [];
  logClicks(){
    this.clicks.push(new Date());
  }
  getColor(i){
    return i >= 4 ? 'blue': '';
  }
  getClass(i){
    return i >= 4;
  }
}
