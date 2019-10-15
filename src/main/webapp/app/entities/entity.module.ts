import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'combinaison',
        loadChildren: () => import('./combinaison/combinaison.module').then(m => m.EcomgucvoileCombinaisonModule)
      },
      {
        path: 'harnais',
        loadChildren: () => import('./harnais/harnais.module').then(m => m.EcomgucvoileHarnaisModule)
      },
      {
        path: 'planche',
        loadChildren: () => import('./planche/planche.module').then(m => m.EcomgucvoilePlancheModule)
      },
      {
        path: 'voile',
        loadChildren: () => import('./voile/voile.module').then(m => m.EcomgucvoileVoileModule)
      },
      {
        path: 'reservation',
        loadChildren: () => import('./reservation/reservation.module').then(m => m.EcomgucvoileReservationModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('./user-profile/user-profile.module').then(m => m.EcomgucvoileUserProfileModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: []
})
export class EcomgucvoileEntityModule {}
