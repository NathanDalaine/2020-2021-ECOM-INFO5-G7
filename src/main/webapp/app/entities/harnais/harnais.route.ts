import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Harnais } from 'app/shared/model/harnais.model';
import { HarnaisService } from './harnais.service';
import { HarnaisComponent } from './harnais.component';
import { HarnaisDetailComponent } from './harnais-detail.component';
import { HarnaisUpdateComponent } from './harnais-update.component';
import { HarnaisDeletePopupComponent } from './harnais-delete-dialog.component';
import { IHarnais } from 'app/shared/model/harnais.model';

@Injectable({ providedIn: 'root' })
export class HarnaisResolve implements Resolve<IHarnais> {
  constructor(private service: HarnaisService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHarnais> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Harnais>) => response.ok),
        map((harnais: HttpResponse<Harnais>) => harnais.body)
      );
    }
    return of(new Harnais());
  }
}

export const harnaisRoute: Routes = [
  {
    path: '',
    component: HarnaisComponent,
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.harnais.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: HarnaisDetailComponent,
    resolve: {
      harnais: HarnaisResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.harnais.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: HarnaisUpdateComponent,
    resolve: {
      harnais: HarnaisResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.harnais.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: HarnaisUpdateComponent,
    resolve: {
      harnais: HarnaisResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.harnais.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const harnaisPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: HarnaisDeletePopupComponent,
    resolve: {
      harnais: HarnaisResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.harnais.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
