import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { JhiAlertService } from 'ng-jhipster';
import { ReservationService } from 'app/entities/reservation/reservation.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { IReservationFull } from 'app/shared/model/reservationFull.model';
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';
import { IUserProfile } from 'app/shared/model/user-profile.model';

@Component({
  selector: 'jhi-reservationlist',
  templateUrl: './reservationList.component.html',
  styleUrls: ['reservationList.scss']
})
export class ReservationListComponent implements OnInit, OnDestroy {
  currentAccount: any;
  reservations: IReservationFull[];
  currentUserProfile: IUserProfile;

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
    this.userProfileService
      .findCurrentUser()
      .pipe(
        filter((res: HttpResponse<IUserProfile>) => res.ok),
        map((res: HttpResponse<IUserProfile>) => res.body)
      )
      .subscribe(
        (res: IUserProfile) => {
          this.currentUserProfile = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  checkUserReservation(res: IReservationFull, user: IUserProfile) {
    if (user != null && res != null) {
      if (res.userProfile.id === user.id) {
        return true;
      }
    }
    return false;
  }

  trackDate(index: number, item: IReservationFull) {
    return item.dateReservation;
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  ngOnDestroy() {}
}
