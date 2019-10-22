import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { JhiAlertService } from 'ng-jhipster';
import { ReservationService } from '../../entities/reservation/reservation.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { IReservation } from 'app/shared/model/reservation.model';



@Component({
  selector: 'jhi-reservationlist',
  templateUrl: './reservationList.component.html',
  styleUrls: ['reservationList.scss']
})
export class ReservationListComponent implements OnInit, OnDestroy {
  currentAccount: any;
    reservations: IReservation[];


  constructor(
    protected accountService: AccountService,
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
      .query()
      .pipe(
        filter((res: HttpResponse<IReservation[]>) => res.ok),
        map((res: HttpResponse<IReservation[]>) => res.body)
      )
      .subscribe(
        (res: IReservation[]) => {
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

  ngOnDestroy() {
  }

}
