import { PipeTransform, Pipe } from '@angular/core'
import { IReservation } from 'app/shared/model/reservation.model';


@Pipe({ name: 'value' })
export class ValuesPipe implements PipeTransform {
  transform(reservations : IReservation[]): any {
      return reservations.filter(reservation=>!reservation.dateRendu)
  }
}
