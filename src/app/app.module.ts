import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerComponent } from './timer/timer.component';
import { DisplayComponent } from './display/display.component';
import { AlertViewComponent } from './alert-view/alert-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    ProgressBarComponent,
    TimerComponent,
    DisplayComponent,
    AlertViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
