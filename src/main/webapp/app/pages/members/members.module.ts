import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { MEMBERS_ROUTE } from './members.route';
import { MembersComponent } from './members.component';
@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([MEMBERS_ROUTE])],
  declarations: [MembersComponent]
})
export class EcomgucvoileMembersModule {}
