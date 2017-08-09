export class Reservation {
  id : number;
  name:string;
  numberOfPersons:number;
  date:Date;
  time:string;
  status:string; // to be mapped to an enum [fulfilled, cancelled, new]
}