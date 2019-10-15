import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { IReservation, Reservation } from 'app/shared/model/reservation.model';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'jhi-reservation-update',
  templateUrl: './reservation-update.component.html'
})
export class ReservationUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    dateReservation: [],
    dateRendu: [],
    remarques: [],
    createdAt: [],
    createdBy: [],
    updatedAt: [],
    updatedBy: [],
    deletedAt: [],
    deletedBy: []
  });

  constructor(protected reservationService: ReservationService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ reservation }) => {
      this.updateForm(reservation);
    });
  }

  updateForm(reservation: IReservation) {
    this.editForm.patchValue({
      id: reservation.id,
      dateReservation: reservation.dateReservation != null ? reservation.dateReservation.format(DATE_TIME_FORMAT) : null,
      dateRendu: reservation.dateRendu != null ? reservation.dateRendu.format(DATE_TIME_FORMAT) : null,
      remarques: reservation.remarques,
      createdAt: reservation.createdAt,
      createdBy: reservation.createdBy,
      updatedAt: reservation.updatedAt,
      updatedBy: reservation.updatedBy,
      deletedAt: reservation.deletedAt,
      deletedBy: reservation.deletedBy
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
      createdAt: this.editForm.get(['createdAt']).value,
      createdBy: this.editForm.get(['createdBy']).value,
      updatedAt: this.editForm.get(['updatedAt']).value,
      updatedBy: this.editForm.get(['updatedBy']).value,
      deletedAt: this.editForm.get(['deletedAt']).value,
      deletedBy: this.editForm.get(['deletedBy']).value
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
}
