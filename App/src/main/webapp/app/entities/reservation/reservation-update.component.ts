import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IReservation, Reservation } from 'app/shared/model/reservation.model';
import { ReservationService } from './reservation.service';
import { IVoile } from 'app/shared/model/voile.model';
import { VoileService } from 'app/entities/voile/voile.service';
import { IUserProfile } from 'app/shared/model/user-profile.model';
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';
import { ICombinaison } from 'app/shared/model/combinaison.model';
import { CombinaisonService } from 'app/entities/combinaison/combinaison.service';
import { IHarnais } from 'app/shared/model/harnais.model';
import { HarnaisService } from 'app/entities/harnais/harnais.service';
import { IPlanche } from 'app/shared/model/planche.model';
import { PlancheService } from 'app/entities/planche/planche.service';

@Component({
  selector: 'jhi-reservation-update',
  templateUrl: './reservation-update.component.html'
})
export class ReservationUpdateComponent implements OnInit {
  isSaving: boolean;

  voiles: IVoile[];

  users: IUserProfile[];

  combinaisons: ICombinaison[];

  harnais: IHarnais[];

  planches: IPlanche[];

  editForm = this.fb.group({
    id: [],
    dateReservation: [],
    dateRendu: [],
    remarques: [],
    voileId: [],
    userId: [],
    combinaisonId: [],
    harnaisId: [],
    plancheId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected reservationService: ReservationService,
    protected voileService: VoileService,
    protected userProfileService: UserProfileService,
    protected combinaisonService: CombinaisonService,
    protected harnaisService: HarnaisService,
    protected plancheService: PlancheService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ reservation }) => {
      this.updateForm(reservation);
    });
    this.voileService
      .query({ filter: 'reservation-is-null' })
      .pipe(
        filter((mayBeOk: HttpResponse<IVoile[]>) => mayBeOk.ok),
        map((response: HttpResponse<IVoile[]>) => response.body)
      )
      .subscribe(
        (res: IVoile[]) => {
          if (!this.editForm.get('voileId').value) {
            this.voiles = res;
          } else {
            this.voileService
              .find(this.editForm.get('voileId').value)
              .pipe(
                filter((subResMayBeOk: HttpResponse<IVoile>) => subResMayBeOk.ok),
                map((subResponse: HttpResponse<IVoile>) => subResponse.body)
              )
              .subscribe(
                (subRes: IVoile) => (this.voiles = [subRes].concat(res)),
                (subRes: HttpErrorResponse) => this.onError(subRes.message)
              );
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    this.userProfileService
      .query({ filter: 'reservation-is-null' })
      .pipe(
        filter((mayBeOk: HttpResponse<IUserProfile[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUserProfile[]>) => response.body)
      )
      .subscribe(
        (res: IUserProfile[]) => {
          if (!this.editForm.get('userId').value) {
            this.users = res;
          } else {
            this.userProfileService
              .find(this.editForm.get('userId').value)
              .pipe(
                filter((subResMayBeOk: HttpResponse<IUserProfile>) => subResMayBeOk.ok),
                map((subResponse: HttpResponse<IUserProfile>) => subResponse.body)
              )
              .subscribe(
                (subRes: IUserProfile) => (this.users = [subRes].concat(res)),
                (subRes: HttpErrorResponse) => this.onError(subRes.message)
              );
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    this.combinaisonService
      .query({ filter: 'reservation-is-null' })
      .pipe(
        filter((mayBeOk: HttpResponse<ICombinaison[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICombinaison[]>) => response.body)
      )
      .subscribe(
        (res: ICombinaison[]) => {
          if (!this.editForm.get('combinaisonId').value) {
            this.combinaisons = res;
          } else {
            this.combinaisonService
              .find(this.editForm.get('combinaisonId').value)
              .pipe(
                filter((subResMayBeOk: HttpResponse<ICombinaison>) => subResMayBeOk.ok),
                map((subResponse: HttpResponse<ICombinaison>) => subResponse.body)
              )
              .subscribe(
                (subRes: ICombinaison) => (this.combinaisons = [subRes].concat(res)),
                (subRes: HttpErrorResponse) => this.onError(subRes.message)
              );
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    this.harnaisService
      .query({ filter: 'reservation-is-null' })
      .pipe(
        filter((mayBeOk: HttpResponse<IHarnais[]>) => mayBeOk.ok),
        map((response: HttpResponse<IHarnais[]>) => response.body)
      )
      .subscribe(
        (res: IHarnais[]) => {
          if (!this.editForm.get('harnaisId').value) {
            this.harnais = res;
          } else {
            this.harnaisService
              .find(this.editForm.get('harnaisId').value)
              .pipe(
                filter((subResMayBeOk: HttpResponse<IHarnais>) => subResMayBeOk.ok),
                map((subResponse: HttpResponse<IHarnais>) => subResponse.body)
              )
              .subscribe(
                (subRes: IHarnais) => (this.harnais = [subRes].concat(res)),
                (subRes: HttpErrorResponse) => this.onError(subRes.message)
              );
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    this.plancheService
      .query({ filter: 'reservation-is-null' })
      .pipe(
        filter((mayBeOk: HttpResponse<IPlanche[]>) => mayBeOk.ok),
        map((response: HttpResponse<IPlanche[]>) => response.body)
      )
      .subscribe(
        (res: IPlanche[]) => {
          if (!this.editForm.get('plancheId').value) {
            this.planches = res;
          } else {
            this.plancheService
              .find(this.editForm.get('plancheId').value)
              .pipe(
                filter((subResMayBeOk: HttpResponse<IPlanche>) => subResMayBeOk.ok),
                map((subResponse: HttpResponse<IPlanche>) => subResponse.body)
              )
              .subscribe(
                (subRes: IPlanche) => (this.planches = [subRes].concat(res)),
                (subRes: HttpErrorResponse) => this.onError(subRes.message)
              );
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  updateForm(reservation: IReservation) {
    this.editForm.patchValue({
      id: reservation.id,
      dateReservation: reservation.dateReservation != null ? reservation.dateReservation.format(DATE_TIME_FORMAT) : null,
      dateRendu: reservation.dateRendu != null ? reservation.dateRendu.format(DATE_TIME_FORMAT) : null,
      remarques: reservation.remarques,
      voileId: reservation.voileId,
      userId: reservation.userId,
      combinaisonId: reservation.combinaisonId,
      harnaisId: reservation.harnaisId,
      plancheId: reservation.plancheId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const reservation = this.createFromForm();
    if (reservation.id !== undefined) {
      this.subscribeToSaveResponse(this.reservationService.update(reservation));
    } else {
      this.subscribeToSaveResponse(this.reservationService.create(reservation));
    }
  }

  private createFromForm(): IReservation {
    return {
      ...new Reservation(),
      id: this.editForm.get(['id']).value,
      dateReservation:
        this.editForm.get(['dateReservation']).value != null
          ? moment(this.editForm.get(['dateReservation']).value, DATE_TIME_FORMAT)
          : undefined,
      dateRendu:
        this.editForm.get(['dateRendu']).value != null ? moment(this.editForm.get(['dateRendu']).value, DATE_TIME_FORMAT) : undefined,
      remarques: this.editForm.get(['remarques']).value,
      voileId: this.editForm.get(['voileId']).value,
      userId: this.editForm.get(['userId']).value,
      combinaisonId: this.editForm.get(['combinaisonId']).value,
      harnaisId: this.editForm.get(['harnaisId']).value,
      plancheId: this.editForm.get(['plancheId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IReservation>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackVoileById(index: number, item: IVoile) {
    return item.id;
  }

  trackUserProfileById(index: number, item: IUserProfile) {
    return item.id;
  }

  trackCombinaisonById(index: number, item: ICombinaison) {
    return item.id;
  }

  trackHarnaisById(index: number, item: IHarnais) {
    return item.id;
  }

  trackPlancheById(index: number, item: IPlanche) {
    return item.id;
  }
}
