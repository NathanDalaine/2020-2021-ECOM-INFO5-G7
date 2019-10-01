import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICombinaison, Combinaison } from 'app/shared/model/combinaison.model';
import { CombinaisonService } from './combinaison.service';

@Component({
  selector: 'jhi-combinaison-update',
  templateUrl: './combinaison-update.component.html'
})
export class CombinaisonUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    taille: [],
    nombre: []
  });

  constructor(protected combinaisonService: CombinaisonService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ combinaison }) => {
      this.updateForm(combinaison);
    });
  }

  updateForm(combinaison: ICombinaison) {
    this.editForm.patchValue({
      id: combinaison.id,
      taille: combinaison.taille,
      nombre: combinaison.nombre
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
      nombre: this.editForm.get(['nombre']).value
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
}
