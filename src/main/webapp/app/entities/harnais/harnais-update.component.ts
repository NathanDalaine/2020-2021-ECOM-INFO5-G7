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
import { IHarnais, Harnais } from 'app/shared/model/harnais.model';
import { HarnaisService } from './harnais.service';
import { IReservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';

@Component({
  selector: 'jhi-harnais-update',
  templateUrl: './harnais-update.component.html'
})
export class HarnaisUpdateComponent implements OnInit {
  isSaving: boolean;

  reservations: IReservation[];

  editForm = this.fb.group({
    id: [],
    taille: [],
    etat: [],
    createdBy: [],
    updatedBy: [],
    deletedBy: [],
    createdAt: [],
    updatedAt: [],
    deletedAt: [],
    reservationId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected harnaisService: HarnaisService,
    protected reservationService: ReservationService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ harnais }) => {
      this.updateForm(harnais);
    });
    this.reservationService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IReservation[]>) => mayBeOk.ok),
        map((response: HttpResponse<IReservation[]>) => response.body)
      )
      .subscribe((res: IReservation[]) => (this.reservations = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(harnais: IHarnais) {
    this.editForm.patchValue({
      id: harnais.id,
      taille: harnais.taille,
      etat: harnais.etat,
      createdBy: harnais.createdBy,
      updatedBy: harnais.updatedBy,
      deletedBy: harnais.deletedBy,
      createdAt: harnais.createdAt != null ? harnais.createdAt.format(DATE_TIME_FORMAT) : null,
      updatedAt: harnais.updatedAt != null ? harnais.updatedAt.format(DATE_TIME_FORMAT) : null,
      deletedAt: harnais.deletedAt != null ? harnais.deletedAt.format(DATE_TIME_FORMAT) : null,
      reservationId: harnais.reservationId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const harnais = this.createFromForm();
    if (harnais.id !== undefined) {
      this.subscribeToSaveResponse(this.harnaisService.update(harnais));
    } else {
      this.subscribeToSaveResponse(this.harnaisService.create(harnais));
    }
  }

  private createFromForm(): IHarnais {
    return {
      ...new Harnais(),
      id: this.editForm.get(['id']).value,
      taille: this.editForm.get(['taille']).value,
      etat: this.editForm.get(['etat']).value,
      createdBy: this.editForm.get(['createdBy']).value,
      updatedBy: this.editForm.get(['updatedBy']).value,
      deletedBy: this.editForm.get(['deletedBy']).value,
      createdAt:
        this.editForm.get(['createdAt']).value != null ? moment(this.editForm.get(['createdAt']).value, DATE_TIME_FORMAT) : undefined,
      updatedAt:
        this.editForm.get(['updatedAt']).value != null ? moment(this.editForm.get(['updatedAt']).value, DATE_TIME_FORMAT) : undefined,
      deletedAt:
        this.editForm.get(['deletedAt']).value != null ? moment(this.editForm.get(['deletedAt']).value, DATE_TIME_FORMAT) : undefined,
      reservationId: this.editForm.get(['reservationId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IHarnais>>) {
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

  trackReservationById(index: number, item: IReservation) {
    return item.id;
  }
}
