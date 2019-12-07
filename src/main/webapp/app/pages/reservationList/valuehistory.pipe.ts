import {IReservationFull} from "app/shared/model/reservationFull.model";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'valuehistory' })
export class ValuesHistoryPipe implements PipeTransform {
  transform(reservations: IReservationFull[]): IReservationFull[] {
    return reservations.filter(reservation => reservation.dateRendu);
  }
}
