import { ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot } from '@angular/router';

import { RenduMaterielComponent } from './renduMateriel.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ReservationResolve } from 'app/entities/reservation/reservation.route';
import { Injectable } from '@angular/core';
import { IReservation, Reservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { IReservationFull, ReservationFull } from 'app/shared/model/reservationFull.model';

@Injectable({ providedIn: 'root' })
export class ReservationFullResolve implements Resolve<IReservationFull> {
  constructor(private service: ReservationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReservationFull> {
    const id = route.params['id'];
    if (id) {
      return this.service.findFullReservation(id).pipe(
        filter((response: HttpResponse<ReservationFull>) => response.ok),
        map((reservation: HttpResponse<ReservationFull>) => reservation.body)
      );
    }
    return of(new ReservationFull());
  }
}
export const RENDU_MATERIEL_ROUTE: Route = {
  path: 'renduMateriel/:id/view',
  component: RenduMaterielComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'ecomgucvoileApp.renduMateriel.home.title'
  },
  resolve: {
    reservation: ReservationFullResolve
  },
  canActivate: [UserRouteAccessService]
};
