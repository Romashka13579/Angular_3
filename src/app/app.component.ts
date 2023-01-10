import { Component, OnInit } from '@angular/core';
import { UserTask } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular_3';

  valuesNick = '';
  valuesPass = '';

  Nick(event: any) {
    this.valuesNick = event.target.value;
  }
  Pass(event: any) {
    this.valuesPass = event.target.value;
  }
  Username = '';
  Password = '';

  Check(){
    this.Username = this.valuesNick;
    this.Password = this.valuesPass;
  }

  Nick2(item:string) {
    this.Username = item;
  }
  Pass2(item:string) {
    this.Password = item;
  }

  userList: UserTask[] = [];
  romaList: UserTask[] = [];
  emptylist: UserTask[] = [];
  
  ngOnInit(): void{
    this.userList = [
      {    
        name: 'Essay',
        subject: 'English',
        requirements: 'minimum 200 words',
        deadline: new Date('01-12-2023 12:00')
      },
      {    
        name: 'Exam',
        subject: 'Math',
        requirements: 'solve 20 tasks',
        deadline: new Date('01-15-2023 23:59')
      }
    ];
    this.romaList = [
      {    
        name: 'Exam',
        subject: 'L',
        requirements: 'solve 20 tasks',
        deadline: new Date('01-15-2023 23:59')
      },
      {    
        name: 'Presentation',
        subject: 'History',
        requirements: 'use less text and more photoes',
        deadline: new Date('01-16-2023 22:59')
      },
      {    
        name: 'Writing',
        subject: 'Ukrainian language',
        requirements: 'not less than 2 pages',
        deadline: new Date('01-13-2023 10:00')
      }
      ,
      {    
        name: 'Lab',
        subject: 'Chemistry',
        requirements: 'Don`t forget to write a conclusion',
        deadline: new Date('01-17-2023 13:00')
      }
    ]
    this.emptylist = []
  }

}
