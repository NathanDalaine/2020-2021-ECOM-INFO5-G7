import { ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot } from '@angular/router';

import { StatistiqueComponent } from './statistique.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

export const STATISTIQUE_ROUTE: Route = {
  path: 'reinscription',
  component: StatistiqueComponent,
  data: {
    authorities: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_GESTIONNAIRE'],
    pageTitle: 'ecomgucvoileApp.statistique.home.title'
  },
  canActivate: [UserRouteAccessService]
};
