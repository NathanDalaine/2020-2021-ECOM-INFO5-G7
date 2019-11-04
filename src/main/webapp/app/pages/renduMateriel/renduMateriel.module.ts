import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { RENDU_MATERIEL_ROUTE } from './renduMateriel.route';
import { RenduMaterielComponent } from './renduMateriel.component';

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([RENDU_MATERIEL_ROUTE])],
  declarations: [RenduMaterielComponent]
})
export class EcomgucvoileRenduMaterielModule {}
