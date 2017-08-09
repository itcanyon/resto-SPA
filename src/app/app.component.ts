import { Component,ViewChild } from '@angular/core';
import { NewReservationModalComponent } from './new-reservation-modal/new-reservation-modal.component'
import { ReservationService } from './reservation.service'
 
declare var ModalEffects: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  showModal:boolean = false;
  @ViewChild(NewReservationModalComponent) newReservationModalComponent: NewReservationModalComponent
    constructor(public reservationService: ReservationService){ 
  }
 
  showCreateReservation(){
    console.log("showing create reservation dialog");
    this.showModal = true;
    this.newReservationModalComponent.open();
  }

 

}


