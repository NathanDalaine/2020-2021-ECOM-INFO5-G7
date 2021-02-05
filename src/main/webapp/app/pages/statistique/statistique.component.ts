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
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';
import { TypeAbonnement } from 'app/shared/model/enumerations/type-abonnement.model';
import { Taille } from 'app/shared/model/enumerations/taille.model';
import { PlancheService } from 'app/entities/planche/planche.service';
import { VoileService } from 'app/entities/voile/voile.service';
import { IVoile } from 'app/shared/model/voile.model';

@Component({
  selector: 'jhi-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['statistique.scss']
})
export class StatistiqueComponent implements OnInit {
  reservations: IReservationFull[];
  reservationsInProgress: IReservationFull[];

  reservationsCombiS: IReservationFull[];
  reservationsCombiM: IReservationFull[];
  reservationsCombiL: IReservationFull[];
  reservationsCombiXL: IReservationFull[];

  reservationsHarnaisS: IReservationFull[];
  reservationsHarnaisM: IReservationFull[];
  reservationsHarnaisL: IReservationFull[];
  reservationsHarnaisXL: IReservationFull[];

  voilesDamaged: IVoile[];

  constructor(
    protected reservationService: ReservationService,
    protected jhiAlertService: JhiAlertService,
    protected voileService: VoileService
  ) {}

  ngOnInit() {
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
          this.reservationsCombiS = this.reservations.filter(
            reservations => reservations.combinaison != null && reservations.combinaison.taille === Taille.S
          );
          this.reservationsCombiM = this.reservations.filter(
            reservations => reservations.combinaison != null && reservations.combinaison.taille === Taille.M
          );
          this.reservationsCombiL = this.reservations.filter(
            reservations => reservations.combinaison != null && reservations.combinaison.taille === Taille.L
          );
          this.reservationsCombiXL = this.reservations.filter(
            reservations => reservations.combinaison != null && reservations.combinaison.taille === Taille.XL
          );

          this.reservationsHarnaisS = this.reservations.filter(
            reservations => reservations.harnais != null && reservations.harnais.taille === Taille.S
          );
          this.reservationsHarnaisM = this.reservations.filter(
            reservations => reservations.harnais != null && reservations.harnais.taille === Taille.M
          );
          this.reservationsHarnaisL = this.reservations.filter(
            reservations => reservations.harnais != null && reservations.harnais.taille === Taille.L
          );
          this.reservationsHarnaisXL = this.reservations.filter(
            reservations => reservations.harnais != null && reservations.harnais.taille === Taille.XL
          );
          this.reservationsInProgress = this.reservations.filter(reservation => !reservation.dateRendu);
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );

    this.voileService
      .queryDamaged()
      .pipe(
        filter((voiles: HttpResponse<IVoile[]>) => voiles.ok),
        map((voiles: HttpResponse<IVoile[]>) => voiles.body)
      )
      .subscribe(
        (voiles: IVoile[]) => {
          this.voilesDamaged = voiles;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
