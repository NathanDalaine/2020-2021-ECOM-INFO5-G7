import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import {IReservation, Reservation} from "app/shared/model/reservation.model";
import {ReservationService} from "app/entities/reservation/reservation.service";
import * as moment from "moment";
import {Observable} from "rxjs";
import {IUserProfile} from "app/shared/model/user-profile.model";

@Component({
  selector: 'jhi-rendumateriel',
  templateUrl: './renduMateriel.component.html',
  styleUrls: ['renduMateriel.scss']
})
export class RenduMaterielComponent implements OnInit, OnDestroy {
  reservations : IReservation[];
  reservation: IReservation;
  reservationNonRendu : IReservation[];
  currentAccount: any;
  private success: boolean;

  constructor(
    protected reservationService: ReservationService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.reservationService
      .find(1)
      .pipe(
        filter((res: HttpResponse<IReservation>) => res.ok),
        map((res: HttpResponse<IReservation>) => res.body)
      )
      .subscribe(
        (res: IReservation) => {
          this.reservation = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.getReservationNonRendu();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
  }


  ngOnDestroy() {}

  confirm(){
    this.reservation.dateRendu = moment();
    this.subscribeToSaveResponse(this.reservationService.update(this.reservation));
  }

  getReservationNonRendu(){
    this.reservations.forEach(res =>{
      if(res.dateRendu == null){
        this.reservationNonRendu.push(res);
      }
    });
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IReservation>>) {
    result.subscribe(() => {
      this.success = true;
      this.onSuccess("ecomgucvoileApp.renduMateriel.validation")
    }, () => {
      this.success = false;
      this.onError("Rendu Impossible");
    });
  }


  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  protected onSuccess(sucessMessage: string) {
    this.jhiAlertService.success(sucessMessage, null, null);
  }
}
