import { Component, OnInit , ViewChild} from '@angular/core';
import { Reservation } from '../model';
import { PopupConfirmationComponent } from '../popup-confirmation/popup-confirmation.component'

import { ReservationService } from '../reservation.service'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/fromPromise';
 
@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations :Observable< Reservation[]>;
  @ViewChild(PopupConfirmationComponent) popupConfirmation: PopupConfirmationComponent

  constructor(private reservationService: ReservationService) {
   
   }

  ngOnInit() {
     console.log(this.reservations);
     // this.getReservations();
     // this.reservations = this.getReservationsObservable();
     this.reservations = this.reservationService.reservations;  // subscribe to entire reservations collection
     this.reservationService.loadAll();
  }

  handleFulfillment(reservation: Reservation){
    console.log("Fulfilling reservation id:" + reservation.id);
    this.openPopup(reservation,"fulfill");
  }

  openPopup(reservation:Reservation,action){
    this.popupConfirmation.action = action;
    this.popupConfirmation.reservation = reservation
    this.popupConfirmation.open();
  }

  handleCancellation(reservation: Reservation){
     this.openPopup(reservation, "cancel");
     console.log("Cancelling reservation id:" + reservation.id);
  }

  // getReservations():  void{
  //    this.reservationService.getReservations().then(
  //           reservations => this.reservations = reservations
  //   );
  // }


  //   getReservationsObservable():Observable<Reservation[]>{
  //   return Observable.fromPromise( this.reservationService.getReservations());
  // }
 private handleError(error: any) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}
