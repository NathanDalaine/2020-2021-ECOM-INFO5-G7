import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { IReservation, Reservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { IUserProfile } from 'app/shared/model/user-profile.model';
import { IReservationFull } from 'app/shared/model/reservationFull.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MEMBRE } from 'app/shared/constants/roles.constants';

@Component({
  selector: 'jhi-rendumateriel',
  templateUrl: './renduMateriel.component.html',
  styleUrls: ['renduMateriel.scss']
})
export class RenduMaterielComponent implements OnInit, OnDestroy {
  reservations: IReservation[];
  reservation: IReservationFull;
  secondreservation: IReservation;
  reservationNonRendu: IReservation[];
  currentAccount: any;
  private success: boolean;
  checked: boolean;
  harnais: boolean = false;
  voile: boolean = false;
  combinaison: boolean = false;
  planche: boolean = false;

  constructor(
    protected reservationService: ReservationService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService,
    protected activatedRoute: ActivatedRoute
  ) {}

  loadAll() {
    this.activatedRoute.data.subscribe(({ reservation }) => {
      this.reservation = reservation;
    });
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.checked = false;
  }

  ngOnDestroy() {}

  confirmAll() {
    this.reservation.dateRendu = moment();
    this.subscribeToSaveResponse(this.reservationService.updateFull(this.reservation));
  }

  confirm() {
    this.reservation.dateRendu = moment();
    if (this.reservation.userProfile.dateEcheance < moment()) {
      this.subscribeToSaveResponse(this.reservationService.updateFull(this.reservation));
      return;
    }

    this.secondreservation = new Reservation();
    this.secondreservation.dateReservation = moment();
    if (!this.combinaison && this.reservation.combinaison != null) {
      this.secondreservation.combinaisonId = this.reservation.combinaison.id;
      this.reservation.combinaison = null;
    }
    if (!this.planche && this.reservation.planche != null) {
      this.secondreservation.plancheId = this.reservation.planche.id;
      this.reservation.planche = null;
    }

    if (!this.voile && this.reservation.voile != null) {
      this.secondreservation.voileId = this.reservation.voile.id;
      this.reservation.voile = null;
    }
    if (!this.harnais && this.reservation.harnais != null) {
      this.secondreservation.harnaisId = this.reservation.harnais.id;
      this.reservation.harnais = null;
    }
    if (
      this.secondreservation.voileId != null ||
      this.secondreservation.plancheId != null ||
      this.secondreservation.combinaisonId != null ||
      this.secondreservation.harnaisId != null
    ) {
      this.subscribeToSaveResponse(this.reservationService.create(this.secondreservation));
    }
    this.subscribeToSaveResponse(this.reservationService.updateFull(this.reservation));
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IReservation>>) {
    result.subscribe(
      () => {
        this.success = true;
        this.onSuccess('ecomgucvoileApp.renduMateriel.validation');
      },
      () => {
        this.success = false;
        this.onError('Rendu Impossible');
      }
    );
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  protected onSuccess(sucessMessage: string) {
    this.jhiAlertService.success(sucessMessage, null, null);
  }

  checkboxdamage() {
    this.checked = !this.checked;
  }

  isChecked() {
    return this.checked;
  }
}
