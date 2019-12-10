import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { GESTION_MATERIEL_ROUTE } from './gestionMateriel.route';
import { GestionMaterielComponent } from './gestionMateriel.component';

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([GESTION_MATERIEL_ROUTE])],
  declarations: [GestionMaterielComponent]
})
export class EcomgucvoileGestionMaterielModule {}
