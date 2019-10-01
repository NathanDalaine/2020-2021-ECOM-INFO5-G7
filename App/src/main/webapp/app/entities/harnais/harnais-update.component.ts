import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IHarnais, Harnais } from 'app/shared/model/harnais.model';
import { HarnaisService } from './harnais.service';

@Component({
  selector: 'jhi-harnais-update',
  templateUrl: './harnais-update.component.html'
})
export class HarnaisUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    taille: [],
    nombre: []
  });

  constructor(protected harnaisService: HarnaisService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ harnais }) => {
      this.updateForm(harnais);
    });
  }

  updateForm(harnais: IHarnais) {
    this.editForm.patchValue({
      id: harnais.id,
      taille: harnais.taille,
      nombre: harnais.nombre
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
      nombre: this.editForm.get(['nombre']).value
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
}
