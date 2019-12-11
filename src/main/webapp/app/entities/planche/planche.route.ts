import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Planche } from 'app/shared/model/planche.model';
import { PlancheService } from './planche.service';
import { PlancheComponent } from './planche.component';
import { PlancheDetailComponent } from './planche-detail.component';
import { PlancheUpdateComponent } from './planche-update.component';
import { PlancheDeletePopupComponent } from './planche-delete-dialog.component';
import { IPlanche } from 'app/shared/model/planche.model';

@Injectable({ providedIn: 'root' })
export class PlancheResolve implements Resolve<IPlanche> {
  constructor(private service: PlancheService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPlanche> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Planche>) => response.ok),
        map((planche: HttpResponse<Planche>) => planche.body)
      );
    }
    return of(new Planche());
  }
}

export const plancheRoute: Routes = [
  {
    path: '',
    component: PlancheComponent,
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.planche.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: PlancheDetailComponent,
    resolve: {
      planche: PlancheResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN', 'ROLE_USER'],
      pageTitle: 'ecomgucvoileApp.planche.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: PlancheUpdateComponent,
    resolve: {
      planche: PlancheResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.planche.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: PlancheUpdateComponent,
    resolve: {
      planche: PlancheResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.planche.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const planchePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: PlancheDeletePopupComponent,
    resolve: {
      planche: PlancheResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.planche.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
