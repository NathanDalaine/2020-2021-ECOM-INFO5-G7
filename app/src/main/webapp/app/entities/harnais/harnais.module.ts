import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { HarnaisComponent } from './harnais.component';
import { HarnaisDetailComponent } from './harnais-detail.component';
import { HarnaisUpdateComponent } from './harnais-update.component';
import { HarnaisDeletePopupComponent, HarnaisDeleteDialogComponent } from './harnais-delete-dialog.component';
import { harnaisRoute, harnaisPopupRoute } from './harnais.route';

const ENTITY_STATES = [...harnaisRoute, ...harnaisPopupRoute];

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    HarnaisComponent,
    HarnaisDetailComponent,
    HarnaisUpdateComponent,
    HarnaisDeleteDialogComponent,
    HarnaisDeletePopupComponent
  ],
  entryComponents: [HarnaisComponent, HarnaisUpdateComponent, HarnaisDeleteDialogComponent, HarnaisDeletePopupComponent]
})
export class EcomgucvoileHarnaisModule {}
