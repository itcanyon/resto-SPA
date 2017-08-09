import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewReservationModalComponent } from './new-reservation-modal/new-reservation-modal.component';
import { PopupConfirmationComponent } from './popup-confirmation/popup-confirmation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationItemComponent } from './reservation-item/reservation-item.component';

 import { ReservationService } from './reservation.service'
 import { LocalStorageModule } from 'angular-2-local-storage';
  import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

 
 

@NgModule({
  declarations: [
    AppComponent,
    NewReservationModalComponent,
    PopupConfirmationComponent,
    ReservationListComponent,
    ReservationItemComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
            prefix: 'restoSPA',
            storageType: 'localStorage'
        }),
  NguiDatetimePickerModule
  
  ],
  providers: [ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
