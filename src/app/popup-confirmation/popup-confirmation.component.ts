import { Component, OnInit } from '@angular/core';

import { ReservationService } from '../reservation.service'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/fromPromise';
import { Reservation } from '../model';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.css']
})
export class PopupConfirmationComponent implements OnInit {

  isOpen :boolean = false;
  message : string;
  reservation: Reservation;
  action:string ="";

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

  open(){
    this.isOpen = true;
    this.message = this.action =="fulfill"?"Are you sure you want to fulfill this order?" : "Are you sure you want to cancel this order?"
    console.log("trying to open popup for reservation" + this.reservation.id);
  }
  close(){
    this.isOpen = false;
    console.log("closing the popup for reservation" + this.reservation.id);
  }
  confirmAction(){
     //Call the data service to update the status of the reservation
     console.log("confirming ::" + this.action + " for reservation" + this.reservation.id);
     switch(this.action)
    {
      case 'cancel':
        this.reservation.status =  "cancelled"
      break;
      case 'fulfill':
      this.reservation.status =  "fulfilled"
      break;
      default:
      break;
    }    
     this.reservationService.update(this.reservation);
     this.close();
  }
}
