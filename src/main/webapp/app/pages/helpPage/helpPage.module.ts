import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { HELP_PAGE_ROUTE } from './helpPage.route';
import { HelpPageComponent } from './helpPage.component';

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([HELP_PAGE_ROUTE])],
  declarations: [HelpPageComponent]
})
export class EcomgucvoileHelpPageModule {}
