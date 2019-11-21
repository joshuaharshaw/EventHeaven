export interface IEvent {
  eventID:number;
  eventName: string;
  eventType:string;
  eventDateTime:Date;
  eventDescription:string;
}

export interface ISelection {
  eventID:number;
}
