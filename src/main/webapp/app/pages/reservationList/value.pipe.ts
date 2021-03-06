import { PipeTransform, Pipe } from '@angular/core';
import { IReservationFull } from 'app/shared/model/reservationFull.model';

@Pipe({ name: 'value' })
export class ValuesPipe implements PipeTransform {
  transform(reservations: IReservationFull[]): any {
    if (reservations == null) {
      return null;
    }
    return reservations.filter(reservation => !reservation.dateRendu);
  }
}
