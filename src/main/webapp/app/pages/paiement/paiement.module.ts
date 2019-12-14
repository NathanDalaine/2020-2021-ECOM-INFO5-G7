import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { PAIEMENT_ROUTE } from './paiement.route';
import { PaiementComponent } from './paiement.component';

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([PAIEMENT_ROUTE])],
  declarations: [PaiementComponent]
})
export class EcomgucvoilePaiementModule {}
