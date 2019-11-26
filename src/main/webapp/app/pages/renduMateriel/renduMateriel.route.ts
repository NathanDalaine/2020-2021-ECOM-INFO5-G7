import { Route } from '@angular/router';

import { RenduMaterielComponent } from './renduMateriel.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

export const RENDU_MATERIEL_ROUTE: Route = {
  path: 'renduMateriel',
  component: RenduMaterielComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'ecomgucvoileApp.renduMateriel.home.title'
  },
  canActivate: [UserRouteAccessService]
};
