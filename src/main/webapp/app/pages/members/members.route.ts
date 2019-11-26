import { Route } from '@angular/router';

import { MembersComponent } from './members.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

export const MEMBERS_ROUTE: Route = {
  path: 'members',
  component: MembersComponent,
  data: {
    authorities: ['ROLE_GESTIONNAIRE'],
    pageTitle: 'ecomgucvoileApp.members.home.title'
  },
  canActivate: [UserRouteAccessService]
};
