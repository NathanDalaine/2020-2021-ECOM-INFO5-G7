import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { RESERVATIONLIST_ROUTE } from './reservationList.route';
import { ReservationListComponent } from './reservationList.component';
import { ValuesPipe } from './value.pipe';
import { ValuesFullPipe } from 'app/pages/reservationList/valuefull.pipe';

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([RESERVATIONLIST_ROUTE])],
  declarations: [ReservationListComponent, ValuesPipe, ValuesFullPipe]
})
export class EcomgucvoileReservationListModule {}
