import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Reservation } from '../model'
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {

  @Input()
  reservation: Reservation;

  @Output()
  isFulfilling = new EventEmitter();
  @Output()
  isCancelling = new EventEmitter();

  constructor() { }

  ngOnInit() {

     console.log("From item :" + this.reservation);
  }

  fulfill() {
  this.isFulfilling.emit(this.reservation);
   console.log("emiting fulfill event for ::" + this.reservation.id)
 }
  cancel() {
   this.isCancelling.emit(this.reservation);
   console.log("emiting cancell event for ::" + this.reservation.id)
 }
 
}
