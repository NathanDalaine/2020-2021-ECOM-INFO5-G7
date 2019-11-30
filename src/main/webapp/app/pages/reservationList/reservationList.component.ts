import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { JhiAlertService } from 'ng-jhipster';
import { ReservationService } from 'app/entities/reservation/reservation.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { IReservation } from 'app/shared/model/reservation.model';
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';
import {IReservationFull} from "app/shared/model/reservationFull.model";

@Component({
  selector: 'jhi-reservationlist',
  templateUrl: './reservationList.component.html',
  styleUrls: ['reservationList.scss']
})
export class ReservationListComponent implements OnInit, OnDestroy {
  currentAccount: any;
  reservations: IReservationFull[];

  constructor(
    protected accountService: AccountService,
    protected userProfileService: UserProfileService,
    protected reservationService: ReservationService,
    protected jhiAlertService: JhiAlertService
  ) {}

  ngOnInit() {
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.loadAll();
  }

  loadAll() {
    this.reservationService
      .getAllFullReservation()
      .pipe(
        filter((res: HttpResponse<IReservationFull[]>) => res.ok),
        map((res: HttpResponse<IReservationFull[]>) => res.body)
      )
      .subscribe(
        (res: IReservationFull[]) => {
          this.reservations = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  trackDate(index: number, item: IReservation) {
    return item.dateReservation;
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  ngOnDestroy() {}
}
