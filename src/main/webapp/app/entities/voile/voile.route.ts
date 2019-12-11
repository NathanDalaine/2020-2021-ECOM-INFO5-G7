import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Voile } from 'app/shared/model/voile.model';
import { VoileService } from './voile.service';
import { VoileComponent } from './voile.component';
import { VoileDetailComponent } from './voile-detail.component';
import { VoileUpdateComponent } from './voile-update.component';
import { VoileDeletePopupComponent } from './voile-delete-dialog.component';
import { IVoile } from 'app/shared/model/voile.model';

@Injectable({ providedIn: 'root' })
export class VoileResolve implements Resolve<IVoile> {
  constructor(private service: VoileService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IVoile> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Voile>) => response.ok),
        map((voile: HttpResponse<Voile>) => voile.body)
      );
    }
    return of(new Voile());
  }
}

export const voileRoute: Routes = [
  {
    path: '',
    component: VoileComponent,
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.voile.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: VoileDetailComponent,
    resolve: {
      voile: VoileResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN', 'ROLE_USER'],
      pageTitle: 'ecomgucvoileApp.voile.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: VoileUpdateComponent,
    resolve: {
      voile: VoileResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.voile.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: VoileUpdateComponent,
    resolve: {
      voile: VoileResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.voile.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const voilePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: VoileDeletePopupComponent,
    resolve: {
      voile: VoileResolve
    },
    data: {
      authorities: ['ROLE_GESTIONNAIRE', 'ROLE_ADMIN'],
      pageTitle: 'ecomgucvoileApp.voile.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
