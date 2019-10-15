import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IPlanche, Planche } from 'app/shared/model/planche.model';
import { PlancheService } from './planche.service';
import { IReservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';

@Component({
  selector: 'jhi-planche-update',
  templateUrl: './planche-update.component.html'
})
export class PlancheUpdateComponent implements OnInit {
  isSaving: boolean;

  reservations: IReservation[];

  editForm = this.fb.group({
    id: [],
    marque: [],
    modele: [],
    numero: [],
    localisation: [],
    etat: [],
    libelle: [],
    volume: [],
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
    protected plancheService: PlancheService,
    protected reservationService: ReservationService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ planche }) => {
      this.updateForm(planche);
    });
    this.reservationService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IReservation[]>) => mayBeOk.ok),
        map((response: HttpResponse<IReservation[]>) => response.body)
      )
      .subscribe((res: IReservation[]) => (this.reservations = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(planche: IPlanche) {
    this.editForm.patchValue({
      id: planche.id,
      marque: planche.marque,
      modele: planche.modele,
      numero: planche.numero,
      localisation: planche.localisation,
      etat: planche.etat,
      libelle: planche.libelle,
      volume: planche.volume,
      createdAt: planche.createdAt,
      createdBy: planche.createdBy,
      updatedAt: planche.updatedAt,
      updatedBy: planche.updatedBy,
      deletedAt: planche.deletedAt,
      deletedBy: planche.deletedBy,
      reservationId: planche.reservationId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const planche = this.createFromForm();
    if (planche.id !== undefined) {
      this.subscribeToSaveResponse(this.plancheService.update(planche));
    } else {
      this.subscribeToSaveResponse(this.plancheService.create(planche));
    }
  }

  private createFromForm(): IPlanche {
    return {
      ...new Planche(),
      id: this.editForm.get(['id']).value,
      marque: this.editForm.get(['marque']).value,
      modele: this.editForm.get(['modele']).value,
      numero: this.editForm.get(['numero']).value,
      localisation: this.editForm.get(['localisation']).value,
      etat: this.editForm.get(['etat']).value,
      libelle: this.editForm.get(['libelle']).value,
      volume: this.editForm.get(['volume']).value,
      createdAt: this.editForm.get(['createdAt']).value,
      createdBy: this.editForm.get(['createdBy']).value,
      updatedAt: this.editForm.get(['updatedAt']).value,
      updatedBy: this.editForm.get(['updatedBy']).value,
      deletedAt: this.editForm.get(['deletedAt']).value,
      deletedBy: this.editForm.get(['deletedBy']).value,
      reservationId: this.editForm.get(['reservationId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPlanche>>) {
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
