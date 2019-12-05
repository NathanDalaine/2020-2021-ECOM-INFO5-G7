import { Route } from '@angular/router';

import { MaterialListComponent } from './materialList.component';
import {UserRouteAccessService} from "app/core/auth/user-route-access-service";

export const MATERIAL_LIST_ROUTE: Route = {
  path: 'materialList',
  component: MaterialListComponent,
  data: {
    authorities: ['ROLE_USER','ROLE_ADMIN','ROLE_GESTIONNAIRE'],
    pageTitle: 'ecomgucvoileApp.materialList.home.title'
  },
  canActivate: [UserRouteAccessService]
};
