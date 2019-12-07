import { ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot } from '@angular/router';

import { PaiementComponent } from './paiement.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

export const PAIEMENT_ROUTE: Route = {
  path: 'paiementList',
  component: PaiementComponent,
  data: {
    authorities: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_GESTIONNAIRE'],
    pageTitle: 'ecomgucvoileApp.paiement.home.title'
  },
  canActivate: [UserRouteAccessService]
};
