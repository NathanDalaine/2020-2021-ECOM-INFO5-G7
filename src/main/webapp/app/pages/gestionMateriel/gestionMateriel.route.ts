import {Route } from '@angular/router';

import { GestionMaterielComponent } from './gestionMateriel.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

export const GESTION_MATERIEL_ROUTE: Route = {
  path: 'gestionMateriel',
  component: GestionMaterielComponent,
  data: {
    authorities: ['ROLE_ADMIN', 'ROLE_GESTIONNAIRE'],
    pageTitle: 'ecomgucvoileApp.gestionMateriel.home.title'
  },
  canActivate: [UserRouteAccessService]
};
