import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Combinaison } from 'app/shared/model/combinaison.model';
import { CombinaisonService } from './combinaison.service';
import { CombinaisonComponent } from './combinaison.component';
import { CombinaisonDetailComponent } from './combinaison-detail.component';
import { CombinaisonUpdateComponent } from './combinaison-update.component';
import { CombinaisonDeletePopupComponent } from './combinaison-delete-dialog.component';
import { ICombinaison } from 'app/shared/model/combinaison.model';

@Injectable({ providedIn: 'root' })
export class CombinaisonResolve implements Resolve<ICombinaison> {
  constructor(private service: CombinaisonService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICombinaison> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Combinaison>) => response.ok),
        map((combinaison: HttpResponse<Combinaison>) => combinaison.body)
      );
    }
    return of(new Combinaison());
  }
}

export const combinaisonRoute: Routes = [
  {
    path: '',
    component: CombinaisonComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'ecomgucvoileApp.combinaison.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: CombinaisonDetailComponent,
    resolve: {
      combinaison: CombinaisonResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'ecomgucvoileApp.combinaison.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: CombinaisonUpdateComponent,
    resolve: {
      combinaison: CombinaisonResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'ecomgucvoileApp.combinaison.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: CombinaisonUpdateComponent,
    resolve: {
      combinaison: CombinaisonResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'ecomgucvoileApp.combinaison.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const combinaisonPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: CombinaisonDeletePopupComponent,
    resolve: {
      combinaison: CombinaisonResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'ecomgucvoileApp.combinaison.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
