import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Components
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';

//Utilities && Pipes
import {specialDatePipe} from './utilities/pipes'

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    specialDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
