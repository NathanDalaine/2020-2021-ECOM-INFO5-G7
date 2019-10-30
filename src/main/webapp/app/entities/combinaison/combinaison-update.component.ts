import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ICombinaison, Combinaison } from 'app/shared/model/combinaison.model';
import { CombinaisonService } from './combinaison.service';
import { IReservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';

@Component({
  selector: 'jhi-combinaison-update',
  templateUrl: './combinaison-update.component.html'
})
export class CombinaisonUpdateComponent implements OnInit {
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
    protected combinaisonService: CombinaisonService,
    protected reservationService: ReservationService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ combinaison }) => {
      this.updateForm(combinaison);
    });
    this.reservationService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IReservation[]>) => mayBeOk.ok),
        map((response: HttpResponse<IReservation[]>) => response.body)
      )
      .subscribe((res: IReservation[]) => (this.reservations = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(combinaison: ICombinaison) {
    this.editForm.patchValue({
      id: combinaison.id,
      taille: combinaison.taille,
      etat: combinaison.etat,
      createdAt: combinaison.createdAt,
      createdBy: combinaison.createdBy,
      updatedAt: combinaison.updatedAt,
      updatedBy: combinaison.updatedBy,
      deletedAt: combinaison.deletedAt,
      deletedBy: combinaison.deletedBy,
      reservationId: combinaison.reservationId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const combinaison = this.createFromForm();
    if (combinaison.id !== undefined) {
      this.subscribeToSaveResponse(this.combinaisonService.update(combinaison));
    } else {
      this.subscribeToSaveResponse(this.combinaisonService.create(combinaison));
    }
  }

  private createFromForm(): ICombinaison {
    return {
      ...new Combinaison(),
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

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICombinaison>>) {
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