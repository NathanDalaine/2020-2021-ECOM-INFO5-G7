import {IReservationFull} from "app/shared/model/reservationFull.model";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'valuehistory' })
export class ValuesHistoryPipe implements PipeTransform {
  transform(reservations: IReservationFull[]): IReservationFull[] {
    if(reservations != null){
      return reservations.filter(reservation => reservation.dateRendu);
    }
    return null;
  }
}
