import { TestBed, inject } from '@angular/core/testing';

import { ReservationService } from './reservation.service';

describe('ReservationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationService]
    });
  });

  it('should ...', inject([ReservationService], (service: ReservationService) => {
    expect(service).toBeTruthy();
  }));
});
