import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Reservation } from '../model'
import { ReservationService } from '../reservation.service'



@Component({
  selector: 'app-new-reservation-modal',
  templateUrl: './new-reservation-modal.component.html',
  styleUrls: ['./new-reservation-modal.component.css']
})
export class NewReservationModalComponent implements OnInit {

  isOpen:boolean = false;
  submitted:boolean = false;
  reservation: Reservation;
  
  

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservation =  {id :  Date.now(), name:'', date: new Date (), time:'', numberOfPersons : 0, status:"new"};
  }


  open(){
    this.isOpen = true;
  }

  close(){
    this.isOpen = false;
    this.submitted = false;
  }

  createReservation(){
    console.log("Creating a new reservation");
    this.reservationService.addReservationObservable(this.reservation);
    console.log(this.reservation);
    //this.close();
     this.submitted = true;
  }

  onSubmit(){
    this.submitted = true;
  }

}
