import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IVoile, Voile } from 'app/shared/model/voile.model';
import { VoileService } from './voile.service';
import { IReservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';

@Component({
  selector: 'jhi-voile-update',
  templateUrl: './voile-update.component.html'
})
export class VoileUpdateComponent implements OnInit {
  isSaving: boolean;

  reservations: IReservation[];

  editForm = this.fb.group({
    id: [],
    surface: [],
    marque: [],
    modele: [],
    numero: [],
    localisation: [],
    etat: [],
    libelle: [],
    gree: [],
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
    protected voileService: VoileService,
    protected reservationService: ReservationService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ voile }) => {
      this.updateForm(voile);
    });
    this.reservationService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IReservation[]>) => mayBeOk.ok),
        map((response: HttpResponse<IReservation[]>) => response.body)
      )
      .subscribe((res: IReservation[]) => (this.reservations = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(voile: IVoile) {
    this.editForm.patchValue({
      id: voile.id,
      surface: voile.surface,
      marque: voile.marque,
      modele: voile.modele,
      numero: voile.numero,
      localisation: voile.localisation,
      etat: voile.etat,
      libelle: voile.libelle,
      gree: voile.gree,
      createdAt: voile.createdAt,
      createdBy: voile.createdBy,
      updatedAt: voile.updatedAt,
      updatedBy: voile.updatedBy,
      deletedAt: voile.deletedAt,
      deletedBy: voile.deletedBy,
      reservationId: voile.reservationId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const voile = this.createFromForm();
    if (voile.id !== undefined) {
      this.subscribeToSaveResponse(this.voileService.update(voile));
    } else {
      this.subscribeToSaveResponse(this.voileService.create(voile));
    }
  }

  private createFromForm(): IVoile {
    return {
      ...new Voile(),
      id: this.editForm.get(['id']).value,
      surface: this.editForm.get(['surface']).value,
      marque: this.editForm.get(['marque']).value,
      modele: this.editForm.get(['modele']).value,
      numero: this.editForm.get(['numero']).value,
      localisation: this.editForm.get(['localisation']).value,
      etat: this.editForm.get(['etat']).value,
      libelle: this.editForm.get(['libelle']).value,
      gree: this.editForm.get(['gree']).value,
      createdAt: this.editForm.get(['createdAt']).value,
      createdBy: this.editForm.get(['createdBy']).value,
      updatedAt: this.editForm.get(['updatedAt']).value,
      updatedBy: this.editForm.get(['updatedBy']).value,
      deletedAt: this.editForm.get(['deletedAt']).value,
      deletedBy: this.editForm.get(['deletedBy']).value,
      reservationId: this.editForm.get(['reservationId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IVoile>>) {
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
