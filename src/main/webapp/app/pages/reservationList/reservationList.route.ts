import { Route } from '@angular/router';

import { ReservationListComponent } from './reservationList.component';

export const RESERVATIONLIST_ROUTE: Route = {
  path: 'reservationList',
  component: ReservationListComponent,
  data: {
    authorities: [],
    pageTitle: 'reservationList.title'
  }
};
