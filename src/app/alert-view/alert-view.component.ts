import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-view',
  templateUrl: './alert-view.component.html',
  styleUrls: ['./alert-view.component.scss']
})
export class AlertViewComponent implements OnInit {
  @Input() itemHidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
