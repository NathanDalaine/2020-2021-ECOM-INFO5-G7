
import {Route, Routes} from '@angular/router';

import { RenduMaterielComponent } from './renduMateriel.component';
import {RenduMaterielDetailComponent} from "app/pages/renduMateriel/renduMateriel-detail.component";

export const RENDU_MATERIEL_ROUTE: Route = {
  path: 'renduMateriel',
  component: RenduMaterielComponent,
  data: {
    authorities: [],
    pageTitle: 'ecomgucvoileApp.renduMateriel.home.title'
  }
}
  /*,{
    path: ':id/rendu',
    component: RenduMaterielDetailComponent,
    data:{
      authorities: [],
      pageTitle: 'ecomgucvoileApp.renduMateriel.home.title'
    }
  }*/;
