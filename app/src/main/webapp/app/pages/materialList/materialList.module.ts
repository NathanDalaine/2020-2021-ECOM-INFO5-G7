import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { MATERIAL_LIST_ROUTE } from './materialList.route';
import { MaterialListComponent } from './materialList.component';
import { TableModule } from 'primeng/table'

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([MATERIAL_LIST_ROUTE]),TableModule],
  declarations: [MaterialListComponent]
})
export class EcomgucvoileMaterialListModule {}
