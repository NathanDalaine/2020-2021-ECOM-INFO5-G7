import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { RESERVATIONLIST_ROUTE } from './reservationList.route';
import { ReservationListComponent } from './reservationList.component';
import { ValuesFullPipe } from 'app/pages/reservationList/valuefull.pipe';
import { ValuesHistoryPipe } from 'app/pages/reservationList/valuehistory.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import {ValuesPipe} from "app/pages/reservationList/value.pipe";

@NgModule({
  imports: [EcomgucvoileSharedModule, RouterModule.forChild([RESERVATIONLIST_ROUTE]), MatTabsModule],
  declarations: [ReservationListComponent, ValuesFullPipe, ValuesHistoryPipe, ValuesPipe]
})
export class EcomgucvoileReservationListModule {}
