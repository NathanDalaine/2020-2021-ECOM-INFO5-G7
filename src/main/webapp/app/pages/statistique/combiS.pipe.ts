import { PipeTransform, Pipe } from '@angular/core';
import { IReservationFull } from 'app/shared/model/reservationFull.model';
import { Taille } from 'app/shared/model/enumerations/taille.model';

@Pipe({ name: 'combiS' })
export class CombiSPipe implements PipeTransform {
  transform(reservations: IReservationFull[]): any {
    if (reservations == null) {
      return null;
    }
    return reservations.filter(reservation => reservation.combinaison.taille === Taille.S);
  }
}
