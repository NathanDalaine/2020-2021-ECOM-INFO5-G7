import {Pipe, PipeTransform} from "@angular/core";
import {IReservationFull} from "app/shared/model/reservationFull.model";

@Pipe({ name: 'valuefull' })
export class ValuesFullPipe implements PipeTransform {
  transform(reservations : IReservationFull[]): IReservationFull[] {
    return reservations.filter(reservation=>!reservation.dateRendu)
  }
}
