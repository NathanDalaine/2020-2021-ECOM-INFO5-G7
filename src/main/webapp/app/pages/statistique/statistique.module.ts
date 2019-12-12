import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { STATISTIQUE_ROUTE } from './statistique.route';
import { StatistiqueComponent } from './statistique.component';
import { CombiSPipe } from 'app/pages/statistique/combiS.pipe';

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([STATISTIQUE_ROUTE])],
  declarations: [StatistiqueComponent, CombiSPipe]
})
export class EcomgucvoileStatistiqueModule {}
