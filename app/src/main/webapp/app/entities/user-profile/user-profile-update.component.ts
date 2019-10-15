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
import { IUserProfile, UserProfile } from 'app/shared/model/user-profile.model';
import { UserProfileService } from './user-profile.service';
import { IReservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';

@Component({
  selector: 'jhi-user-profile-update',
  templateUrl: './user-profile-update.component.html'
})
export class UserProfileUpdateComponent implements OnInit {
  isSaving: boolean;

  reservations: IReservation[];

  editForm = this.fb.group({
    id: [],
    localisation: [],
    dateEcheance: [],
    dateNaissance: [],
    dateAdhesion: [],
    prefTaille: [],
    adresse: [],
    telephone: [],
    typeAbonnement: [],
    niveau: [],
    materielTechniqueAutorise: [],
    remarque: [],
    reservationId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected userProfileService: UserProfileService,
    protected reservationService: ReservationService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ userProfile }) => {
      this.updateForm(userProfile);
    });
    this.reservationService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IReservation[]>) => mayBeOk.ok),
        map((response: HttpResponse<IReservation[]>) => response.body)
      )
      .subscribe((res: IReservation[]) => (this.reservations = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(userProfile: IUserProfile) {
    this.editForm.patchValue({
      id: userProfile.id,
      localisation: userProfile.localisation,
      dateEcheance: userProfile.dateEcheance != null ? userProfile.dateEcheance.format(DATE_TIME_FORMAT) : null,
      dateNaissance: userProfile.dateNaissance != null ? userProfile.dateNaissance.format(DATE_TIME_FORMAT) : null,
      dateAdhesion: userProfile.dateAdhesion != null ? userProfile.dateAdhesion.format(DATE_TIME_FORMAT) : null,
      prefTaille: userProfile.prefTaille,
      adresse: userProfile.adresse,
      telephone: userProfile.telephone,
      typeAbonnement: userProfile.typeAbonnement,
      niveau: userProfile.niveau,
      materielTechniqueAutorise: userProfile.materielTechniqueAutorise,
      remarque: userProfile.remarque,
      reservationId: userProfile.reservationId
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
      localisation: this.editForm.get(['localisation']).value,
      dateEcheance:
        this.editForm.get(['dateEcheance']).value != null ? moment(this.editForm.get(['dateEcheance']).value, DATE_TIME_FORMAT) : undefined,
      dateNaissance:
        this.editForm.get(['dateNaissance']).value != null
          ? moment(this.editForm.get(['dateNaissance']).value, DATE_TIME_FORMAT)
          : undefined,
      dateAdhesion:
        this.editForm.get(['dateAdhesion']).value != null ? moment(this.editForm.get(['dateAdhesion']).value, DATE_TIME_FORMAT) : undefined,
      prefTaille: this.editForm.get(['prefTaille']).value,
      adresse: this.editForm.get(['adresse']).value,
      telephone: this.editForm.get(['telephone']).value,
      typeAbonnement: this.editForm.get(['typeAbonnement']).value,
      niveau: this.editForm.get(['niveau']).value,
      materielTechniqueAutorise: this.editForm.get(['materielTechniqueAutorise']).value,
      remarque: this.editForm.get(['remarque']).value,
      reservationId: this.editForm.get(['reservationId']).value
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
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackReservationById(index: number, item: IReservation) {
    return item.id;
  }
}
