
import { Route } from '@angular/router';

import { RenduMaterielComponent } from './renduMateriel.component';

export const RENDU_MATERIEL_ROUTE: Route = {
  path: 'renduMateriel',
  component: RenduMaterielComponent,
  data: {
    authorities: [],
    pageTitle: 'ecomgucvoileApp.renduMateriel.home.title'
  }
};
