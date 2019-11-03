import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { IUserProfile, UserProfile } from 'app/shared/model/user-profile.model';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'jhi-user-profile-update',
  templateUrl: './user-profile-update.component.html'
})
export class UserProfileUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    dateEcheance: [],
    dateNaissance: [],
    dateAdhesion: [],
    adresse: [],
    telephone: [],
    typeAbonnement: [],
    niveau: [],
    materielTechniqueAutorise: [],
    remarque: [],
    tailleHarnais: [],
    tailleCombinaison: []
  });

  constructor(protected userProfileService: UserProfileService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ userProfile }) => {
      this.updateForm(userProfile);
    });
  }

  updateForm(userProfile: IUserProfile) {
    this.editForm.patchValue({
      id: userProfile.id,
      dateEcheance: userProfile.dateEcheance != null ? userProfile.dateEcheance.format(DATE_TIME_FORMAT) : null,
      dateNaissance: userProfile.dateNaissance != null ? userProfile.dateNaissance.format(DATE_TIME_FORMAT) : null,
      dateAdhesion: userProfile.dateAdhesion != null ? userProfile.dateAdhesion.format(DATE_TIME_FORMAT) : null,
      adresse: userProfile.adresse,
      telephone: userProfile.telephone,
      typeAbonnement: userProfile.typeAbonnement,
      niveau: userProfile.niveau,
      materielTechniqueAutorise: userProfile.materielTechniqueAutorise,
      remarque: userProfile.remarque,
      tailleHarnais: userProfile.tailleHarnais,
      tailleCombinaison: userProfile.tailleCombinaison
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const userProfile = this.createFromForm();
    if (userProfile.id !== undefined) {
      this.subscribeToSaveResponse(this.userProfileService.update(userProfile));
    } else {
      this.subscribeToSaveResponse(this.userProfileService.create(userProfile));
    }
  }

  private createFromForm(): IUserProfile {
    return {
      ...new UserProfile(),
      id: this.editForm.get(['id']).value,
      dateEcheance:
        this.editForm.get(['dateEcheance']).value != null ? moment(this.editForm.get(['dateEcheance']).value, DATE_TIME_FORMAT) : undefined,
      dateNaissance:
        this.editForm.get(['dateNaissance']).value != null
          ? moment(this.editForm.get(['dateNaissance']).value, DATE_TIME_FORMAT)
          : undefined,
      dateAdhesion:
        this.editForm.get(['dateAdhesion']).value != null ? moment(this.editForm.get(['dateAdhesion']).value, DATE_TIME_FORMAT) : undefined,
      adresse: this.editForm.get(['adresse']).value,
      telephone: this.editForm.get(['telephone']).value,
      typeAbonnement: this.editForm.get(['typeAbonnement']).value,
      niveau: this.editForm.get(['niveau']).value,
      materielTechniqueAutorise: this.editForm.get(['materielTechniqueAutorise']).value,
      remarque: this.editForm.get(['remarque']).value,
      tailleHarnais: this.editForm.get(['tailleHarnais']).value,
      tailleCombinaison: this.editForm.get(['tailleCombinaison']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IUserProfile>>) {
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
