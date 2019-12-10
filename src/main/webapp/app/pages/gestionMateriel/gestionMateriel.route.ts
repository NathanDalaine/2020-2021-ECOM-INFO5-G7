import { ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot } from '@angular/router';

import { GestionMaterielComponent } from './gestionMateriel.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

export const GESTION_MATERIEL_ROUTE: Route = {
  path: 'reinscription',
  component: GestionMaterielComponent,
  data: {
    authorities: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_GESTIONNAIRE'],
    pageTitle: 'ecomgucvoileApp.gestionMateriel.home.title'
  },
  canActivate: [UserRouteAccessService]
};
