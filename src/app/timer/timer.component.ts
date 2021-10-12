import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {TimerService} from "./timer.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 0;

  private countdownEndSubscription: Subscription | null = null;
  private countdownSubscription: Subscription | null = null;
  public countdown: number = 0;

  get progress () {
    return (this.init - this.countdown)/this.init*100;
  }

  constructor(public timer: TimerService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);

    this.countdownEndSubscription = this.timer.countdownEnds$.subscribe( () => {
      this.onComplete.emit();
    })

    this.countdownSubscription = this.timer.countdown$.subscribe((data) => {
      this.countdown = data;
      this.cdRef.markForCheck();
    })
  }

  ngOnDestroy(): void {
    this.timer.destroy();
    // this.countdownEndSubscription.unsubscribe();
    // this.countdownSubscription.unsubscribe();
  }
}
