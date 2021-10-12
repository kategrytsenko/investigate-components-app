import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // counterProgress: number = 0;
  public isAddTimerVisible: boolean = false;
  public time: number = 0;

  constructor() {
  }

  logCountdownEnd() {
    console.log('Finish');
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
  }

  public hideAddTimer() {
    this.isAddTimerVisible = false;
  }
}
