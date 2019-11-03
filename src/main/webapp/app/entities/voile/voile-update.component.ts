import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { IVoile, Voile } from 'app/shared/model/voile.model';
import { VoileService } from './voile.service';

@Component({
  selector: 'jhi-voile-update',
  templateUrl: './voile-update.component.html'
})
export class VoileUpdateComponent implements OnInit {
  isSaving: boolean;

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
    createdBy: [],
    updatedBy: [],
    deletedBy: [],
    createdAt: [],
    updatedAt: [],
    deletedAt: []
  });

  constructor(protected voileService: VoileService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ voile }) => {
      this.updateForm(voile);
    });
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
      createdBy: voile.createdBy,
      updatedBy: voile.updatedBy,
      deletedBy: voile.deletedBy,
      createdAt: voile.createdAt != null ? voile.createdAt.format(DATE_TIME_FORMAT) : null,
      updatedAt: voile.updatedAt != null ? voile.updatedAt.format(DATE_TIME_FORMAT) : null,
      deletedAt: voile.deletedAt != null ? voile.deletedAt.format(DATE_TIME_FORMAT) : null
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
      createdBy: this.editForm.get(['createdBy']).value,
      updatedBy: this.editForm.get(['updatedBy']).value,
      deletedBy: this.editForm.get(['deletedBy']).value,
      createdAt:
        this.editForm.get(['createdAt']).value != null ? moment(this.editForm.get(['createdAt']).value, DATE_TIME_FORMAT) : undefined,
      updatedAt:
        this.editForm.get(['updatedAt']).value != null ? moment(this.editForm.get(['updatedAt']).value, DATE_TIME_FORMAT) : undefined,
      deletedAt:
        this.editForm.get(['deletedAt']).value != null ? moment(this.editForm.get(['deletedAt']).value, DATE_TIME_FORMAT) : undefined
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
}
