import { Route } from '@angular/router';

import { ReservationListComponent } from './reservationList.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

export const RESERVATIONLIST_ROUTE: Route = {
  path: 'reservationList',
  component: ReservationListComponent,
  data: {
    authorities: ['ROLE_USER','ROLE_ADMIN','ROLE_GESTIONNAIRE'],
    pageTitle: 'reservationList.title'
  },
  canActivate: [UserRouteAccessService]
};
