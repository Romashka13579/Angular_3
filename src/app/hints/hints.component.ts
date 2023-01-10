import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.css']
})
export class HintsComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newItemEvent2 = new EventEmitter<string>();

  addNewItem(item1: string, item2: string) {
    this.newItemEvent.emit(item1);
    this.newItemEvent2.emit(item2);
  }
}
