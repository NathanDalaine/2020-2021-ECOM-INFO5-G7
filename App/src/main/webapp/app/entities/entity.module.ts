import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'combinaison',
        loadChildren: () => import('./combinaison/combinaison.module').then(m => m.EComGucCombinaisonModule)
      },
      {
        path: 'harnais',
        loadChildren: () => import('./harnais/harnais.module').then(m => m.EComGucHarnaisModule)
      },
      {
        path: 'planche',
        loadChildren: () => import('./planche/planche.module').then(m => m.EComGucPlancheModule)
      },
      {
        path: 'voile',
        loadChildren: () => import('./voile/voile.module').then(m => m.EComGucVoileModule)
      },
      {
        path: 'reservation',
        loadChildren: () => import('./reservation/reservation.module').then(m => m.EComGucReservationModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('./user-profile/user-profile.module').then(m => m.EComGucUserProfileModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: []
})
export class EComGucEntityModule {}
