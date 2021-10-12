import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {

  @Output() onDecrease = new EventEmitter<number>();
  public counter: number = 0;

  constructor() {
  }
}
