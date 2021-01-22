import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { HttpResponse } from '@angular/common/http';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { IReservation, Reservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { IReservationFull } from 'app/shared/model/reservationFull.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'jhi-rendumateriel',
  templateUrl: './renduMateriel.component.html',
  styleUrls: ['renduMateriel.scss']
})
export class RenduMaterielComponent implements OnInit, OnDestroy {
  reservations: IReservation[];
  reservation: IReservationFull;
  secondreservation: IReservation;
  currentAccount: any;
  success: boolean;
  error = false;
  splitError = false;
  checked: boolean;
  harnais = false;
  voile = false;
  combinaison = false;
  planche = false;
  degatPlanche = false;
  degatVoile = false;
  textDegatPlanche = '';
  textDegatVoile = '';
  constructor(
    protected reservationService: ReservationService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
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

  confirm() {
    this.reservation.dateRendu = moment();
    if (this.reservation.userProfile.dateEcheance < moment()) {
      this.subscribeToSaveResponse(this.reservationService.updateFull(this.reservation));
      return;
    }
    this.secondreservation = new Reservation();
    this.secondreservation.dateReservation = moment();
    this.secondreservation.userProfileId = this.reservation.userProfile.id;
    if (!this.combinaison && this.reservation.combinaison != null) {
      this.secondreservation.combinaisonId = this.reservation.combinaison.id;
      this.reservation.combinaison = null;
    }
    if (!this.planche && this.reservation.planche != null) {
      this.secondreservation.plancheId = this.reservation.planche.id;
      this.reservation.planche = null;
    } else if (this.degatPlanche) {
      this.reservation.planche.etat = this.textDegatPlanche;
    }
    if (!this.voile && this.reservation.voile != null) {
      this.secondreservation.voileId = this.reservation.voile.id;
      this.reservation.voile = null;
    } else if (this.degatVoile) {
      this.reservation.voile.etat = this.textDegatVoile;
    }
    if (!this.harnais && this.reservation.harnais != null) {
      this.secondreservation.harnaisId = this.reservation.harnais.id;
      this.reservation.harnais = null;
    }
    this.reservationService.updateFull(this.reservation).subscribe(
      () => {
        this.success = true;
        if (
          this.secondreservation.voileId != null ||
          this.secondreservation.plancheId != null ||
          this.secondreservation.combinaisonId != null ||
          this.secondreservation.harnaisId != null
        ) {
          this.subscribeToSaveResponse(this.reservationService.create(this.secondreservation));
        }
        setTimeout(() => {
          this.router.navigate(['reservationList']);
        }, 3000);
      },
      () => {
        this.success = false;
        this.error = true;
        this.splitError = false;
      }
    );
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IReservation>>) {
    result.subscribe(
      () => {
        this.success = true;
        this.error = false;
        this.splitError = false;
      },
      () => {
        this.success = false;
        this.splitError = true;
        this.error = false;
      }
    );
  }
}
