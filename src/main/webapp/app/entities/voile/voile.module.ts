import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { VoileComponent } from './voile.component';
import { VoileDetailComponent } from './voile-detail.component';
import { VoileUpdateComponent } from './voile-update.component';
import { VoileDeletePopupComponent, VoileDeleteDialogComponent } from './voile-delete-dialog.component';
import { voileRoute, voilePopupRoute } from './voile.route';

const ENTITY_STATES = [...voileRoute, ...voilePopupRoute];

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [VoileComponent, VoileDetailComponent, VoileUpdateComponent, VoileDeleteDialogComponent, VoileDeletePopupComponent],
  entryComponents: [VoileComponent, VoileUpdateComponent, VoileDeleteDialogComponent, VoileDeletePopupComponent]
})
export class EcomgucvoileVoileModule {}
