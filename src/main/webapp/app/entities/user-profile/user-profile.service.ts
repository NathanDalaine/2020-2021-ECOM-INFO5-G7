import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IUserProfile } from 'app/shared/model/user-profile.model';
import { IReservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';

type EntityResponseType = HttpResponse<IUserProfile>;
type EntityArrayResponseType = HttpResponse<IUserProfile[]>;

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  public resourceUrl = SERVER_API_URL + 'api/user-profiles';

  constructor(protected http: HttpClient, protected reservationService: ReservationService) {}

  create(userProfile: IUserProfile): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(userProfile);
    return this.http
      .post<IUserProfile>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  findReservations(): Observable<EntityArrayResponseType> {
    return this.http
      .get<IReservation[]>(`${this.resourceUrl}` + '/reservations', { observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.reservationService.convertDateArrayFromServer(res)));
  }

  update(userProfile: IUserProfile): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(userProfile);
    return this.http
      .put<IUserProfile>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IUserProfile>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IUserProfile[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(userProfile: IUserProfile): IUserProfile {
    const copy: IUserProfile = Object.assign({}, userProfile, {
      dateEcheance: userProfile.dateEcheance != null && userProfile.dateEcheance.isValid() ? userProfile.dateEcheance.toJSON() : null,
      dateNaissance: userProfile.dateNaissance != null && userProfile.dateNaissance.isValid() ? userProfile.dateNaissance.toJSON() : null,
      dateAdhesion: userProfile.dateAdhesion != null && userProfile.dateAdhesion.isValid() ? userProfile.dateAdhesion.toJSON() : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateEcheance = res.body.dateEcheance != null ? moment(res.body.dateEcheance) : null;
      res.body.dateNaissance = res.body.dateNaissance != null ? moment(res.body.dateNaissance) : null;
      res.body.dateAdhesion = res.body.dateAdhesion != null ? moment(res.body.dateAdhesion) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((userProfile: IUserProfile) => {
        userProfile.dateEcheance = userProfile.dateEcheance != null ? moment(userProfile.dateEcheance) : null;
        userProfile.dateNaissance = userProfile.dateNaissance != null ? moment(userProfile.dateNaissance) : null;
        userProfile.dateAdhesion = userProfile.dateAdhesion != null ? moment(userProfile.dateAdhesion) : null;
      });
    }
    return res;
  }
}
