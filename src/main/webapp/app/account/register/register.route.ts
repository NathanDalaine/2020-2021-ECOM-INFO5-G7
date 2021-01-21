import { Route } from '@angular/router';

import { RegisterComponent } from './register.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

export const registerRoute: Route = {
  path: 'register',
  component: RegisterComponent,
  data: {
    authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
    pageTitle: 'register.title'
  },
  canActivate: [UserRouteAccessService]
};
