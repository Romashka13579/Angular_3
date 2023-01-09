import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_3';
  status1 = 'User';
  status2 = 'Roma';
  statusAuto = 'none';
  statusPicked = this.statusAuto;
  Choose1() {this.statusPicked = this.status1;}
  Choose2() {this.statusPicked = this.status2;}
  Choose3() {this.statusPicked = this.statusAuto;}
}
