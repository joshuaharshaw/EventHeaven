import { Component } from '@angular/core';
import {IEvent} from '../utilities/interfaces';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers:[]
})
export class EventComponent {
  eventName = "TestEvent";
  eventType = "";
  eventDateTime = new Date("07/01/2019");
  firstEvent = {
    eventID:1,
    eventName: "Orbcomm 2",
    eventType:"SpaceX",
    eventDateTime:new Date('12/21/2015'),
    eventDescription:"The first Landing!"
  } as IEvent;

  constructor() {
    console.log(this.firstEvent);
    this.eventName = this.firstEvent.eventName;
    this.eventDateTime = this.firstEvent.eventDateTime;
  }
}
