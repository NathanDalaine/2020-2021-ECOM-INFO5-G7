import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { MATERIAL_LIST_ROUTE } from './materialList.route';
import { MaterialListComponent } from './materialList.component';
import {FlexModule} from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([MATERIAL_LIST_ROUTE]), FormsModule,FlexModule],
  declarations: [MaterialListComponent]
})
export class EcomgucvoileMaterialListModule {
}
