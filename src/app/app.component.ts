import { Component, OnInit } from '@angular/core';
import { UserData } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular_3';

  status1 = 'User';
  status2 = 'Roma';
  statusAuto = 'none';
  statusPicked = this.statusAuto;

  Choose1(a:number) { 
    if(a == 1){this.statusPicked = this.status1;}
    else if(a == 2){this.statusPicked = this.status2;}
    else if(a == 3){this.statusPicked = this.statusAuto;}
  }

  userList: UserData[] = [];
  
  ngOnInit(): void{
    this.userList = [
      {    
        name: 'Roman',
        surname: 'Rudenko',
        age: 16,
        hobbies: 'programming and playing the guitar',
        born: new Date('03-26-2006')
      },
      {    
        name: 'User',
        surname: 'none',
        age: 'unknown',
        hobbies: 'unknown',
        born: new Date('00-00-0000')
      }
    ]
  }

}
