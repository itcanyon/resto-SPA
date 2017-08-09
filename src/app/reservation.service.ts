import { Injectable } from '@angular/core';
import { Reservation } from './model';
import { LocalStorageService } from 'angular-2-local-storage';
import {Observable} from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ReservationService {

  private _reservations:BehaviorSubject< Reservation[] > = new BehaviorSubject<Reservation[]>(null);
  public  reservations: Observable<Reservation[]>;
  private dataStore: {
    reservations: Reservation[]
  };

  constructor(private localStorageService: LocalStorageService) {
   this.dataStore = {reservations:[]};
   this.reservations = this._reservations.asObservable();

   }


  loadAll(){

   var keys = this.localStorageService.keys();
    keys.forEach(key => {
     var reservation = this.localStorageService.get(key);
     if (reservation !=null){
       console.log(reservation);
       this.dataStore.reservations.push(JSON.parse(reservation.toString()) as Reservation);
       this._reservations.next(Object.assign({}, this.dataStore).reservations);
     }

  });

  }

  addReservation(reservation:Reservation){
    
    this.localStorageService.set(reservation.id.toString(),JSON.stringify(reservation));
  }
  addReservationObservable(reservation: Reservation) : void{

       this.localStorageService.set(reservation.id.toString(),JSON.stringify(reservation));

       var _reservation = this.localStorageService.get(reservation.id.toString());
       this.dataStore.reservations.push(JSON.parse(_reservation.toString()) as Reservation);
       this._reservations.next(Object.assign({},this.dataStore).reservations);  

  }

  update(reservation : Reservation){
     this.localStorageService.set(reservation.id.toString(),JSON.stringify(reservation));

      this.dataStore.reservations.forEach((t, i) => {
          if (t.id === reservation.id) { this.dataStore.reservations[i] = reservation; }
        });

        this._reservations.next(Object.assign({}, this.dataStore).reservations);
  }
}
