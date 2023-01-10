import { Component, Input } from '@angular/core';
import { UserTask } from '../app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  @Input() tasklist: UserTask[] = [];
  @Input() item = '';
}
