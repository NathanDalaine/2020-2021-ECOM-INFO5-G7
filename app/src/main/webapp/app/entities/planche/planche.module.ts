import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { PlancheComponent } from './planche.component';
import { PlancheDetailComponent } from './planche-detail.component';
import { PlancheUpdateComponent } from './planche-update.component';
import { PlancheDeletePopupComponent, PlancheDeleteDialogComponent } from './planche-delete-dialog.component';
import { plancheRoute, planchePopupRoute } from './planche.route';

const ENTITY_STATES = [...plancheRoute, ...planchePopupRoute];

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    PlancheComponent,
    PlancheDetailComponent,
    PlancheUpdateComponent,
    PlancheDeleteDialogComponent,
    PlancheDeletePopupComponent
  ],
  entryComponents: [PlancheComponent, PlancheUpdateComponent, PlancheDeleteDialogComponent, PlancheDeletePopupComponent]
})
export class EcomgucvoilePlancheModule {}
