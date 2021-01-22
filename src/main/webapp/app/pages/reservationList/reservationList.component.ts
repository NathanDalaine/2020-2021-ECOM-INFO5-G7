import { DUE_DATE_PASSED } from './../../shared/constants/error.constants';
import { ALREADY_RESERVED } from './../../shared/constants/error.constants';
import { NO_HARNESS_AVAILABLE } from './../../shared/constants/error.constants';
import { NO_WETSUIT_AVAILABLE } from './../../shared/constants/error.constants';
import { Reservation } from './../../shared/model/reservation.model';
import { IReservation } from './../../shared/model/reservation.model';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { JhiAlertService } from 'ng-jhipster';
import { ReservationService } from 'app/entities/reservation/reservation.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { IReservationFull } from 'app/shared/model/reservationFull.model';
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';
import { IUserProfile } from 'app/shared/model/user-profile.model';
import { ADMINISTRATEUR, GESTIONNAIRE } from 'app/shared/constants/roles.constants';
import { ConfirmService } from 'app/shared/confirm/confirm.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-reservationlist',
  templateUrl: './reservationList.component.html',
  styleUrls: ['reservationList.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReservationListComponent implements OnInit, OnDestroy {
  success: boolean;
  currentAccount: any;
  reservations: IReservationFull[];
  pastReservation: IReservationFull[];
  currentUserProfile: IUserProfile;
  newReservation: IReservation;

  errorNoWetSuitAvailable: string;
  errorNoHarnessAvailable: string;
  errorAlreadyReserved: string;
  errorDueDatePassed: string;
  error: string;

  constructor(
    protected accountService: AccountService,
    protected userProfileService: UserProfileService,
    protected reservationService: ReservationService,
    protected jhiAlertService: JhiAlertService,
    protected confirmService: ConfirmService,
    protected translate: TranslateService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.loadAll();
  }

  reserve() {
    this.reservationService.create(this.newReservation).subscribe(
      () => {
        this.success = true;
      },
      response => this.processError(response)
    );
  }

  private processError(response: HttpErrorResponse) {
    this.success = false;
    if (response.status === 400 && response.error.type === NO_WETSUIT_AVAILABLE) {
      this.errorNoWetSuitAvailable = 'ERROR';
    } else if (response.status === 400 && response.error.type === NO_HARNESS_AVAILABLE) {
      this.errorNoHarnessAvailable = 'ERROR';
    } else if (response.status === 400 && response.error.type === ALREADY_RESERVED) {
      this.errorAlreadyReserved = 'ERROR';
    } else if (response.status === 400 && response.error.type === DUE_DATE_PASSED) {
      this.errorDueDatePassed = 'ERROR';
    } else {
      this.error = 'ERROR';
    }
  }

  public openConfirmationDialog(reservation: IReservationFull) {
    this.confirmService
      .confirm(
        this.translate.instant('global.messages.confirm.pleaseConfirm'),
        '',
        reservation.voile,
        reservation.planche,
        !(reservation.combinaison == null),
        !(reservation.harnais == null),
        true,
        true
      )
      .then(confirmed => {
        this.newReservation = new Reservation();
        if (reservation.combinaison == null) {
          this.newReservation.combinaisonId = null;
        } else {
          this.newReservation.combinaisonId = reservation.combinaison.id;
        }
        if (reservation.harnais == null) {
          this.newReservation.harnaisId = null;
        } else {
          this.newReservation.harnaisId = reservation.harnais.id;
        }
        if (reservation.voile == null) {
          this.newReservation.voileId = null;
        } else {
          this.newReservation.voileId = reservation.voile.id;
        }
        if (reservation.planche == null) {
          this.newReservation.plancheId = null;
        } else {
          this.newReservation.plancheId = reservation.planche.id;
        }
        this.newReservation.userProfileId = reservation.userProfile.id;
        if (confirmed) {
          this.reserve();
        }
      })
      .catch();
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
    this.userProfileService
      .findReservationsFull()
      .pipe(
        filter((res: HttpResponse<IReservationFull[]>) => res.ok),
        map((res: HttpResponse<IReservationFull[]>) => res.body)
      )
      .subscribe(
        (res: IReservationFull[]) => {
          this.pastReservation = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  checkUserReservation(res: IReservationFull, user: IUserProfile) {
    if (user != null) {
      if (user.user.authorities.includes(GESTIONNAIRE) || user.user.authorities.includes(ADMINISTRATEUR)) {
        return true;
      } else if (res != null) {
        if (res.userProfile.id === user.id) {
          return true;
        }
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
