import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EComGucSharedModule } from 'app/shared/shared.module';
import { CombinaisonComponent } from './combinaison.component';
import { CombinaisonDetailComponent } from './combinaison-detail.component';
import { CombinaisonUpdateComponent } from './combinaison-update.component';
import { CombinaisonDeletePopupComponent, CombinaisonDeleteDialogComponent } from './combinaison-delete-dialog.component';
import { combinaisonRoute, combinaisonPopupRoute } from './combinaison.route';

const ENTITY_STATES = [...combinaisonRoute, ...combinaisonPopupRoute];

@NgModule({
  imports: [EComGucSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CombinaisonComponent,
    CombinaisonDetailComponent,
    CombinaisonUpdateComponent,
    CombinaisonDeleteDialogComponent,
    CombinaisonDeletePopupComponent
  ],
  entryComponents: [CombinaisonComponent, CombinaisonUpdateComponent, CombinaisonDeleteDialogComponent, CombinaisonDeletePopupComponent]
})
export class EComGucCombinaisonModule {}
