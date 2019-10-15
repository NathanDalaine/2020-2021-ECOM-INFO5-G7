import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
    createdAt: [],
    createdBy: [],
    updatedAt: [],
    updatedBy: [],
    deletedAt: [],
    deletedBy: [],
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
      createdAt: harnais.createdAt,
      createdBy: harnais.createdBy,
      updatedAt: harnais.updatedAt,
      updatedBy: harnais.updatedBy,
      deletedAt: harnais.deletedAt,
      deletedBy: harnais.deletedBy,
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
      createdAt: this.editForm.get(['createdAt']).value,
      createdBy: this.editForm.get(['createdBy']).value,
      updatedAt: this.editForm.get(['updatedAt']).value,
      updatedBy: this.editForm.get(['updatedBy']).value,
      deletedAt: this.editForm.get(['deletedAt']).value,
      deletedBy: this.editForm.get(['deletedBy']).value,
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
