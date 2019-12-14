import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IReservation } from 'app/shared/model/reservation.model';
import { IReservationFull } from 'app/shared/model/reservationFull.model';

type EntityResponseType = HttpResponse<IReservation>;
type EntityArrayResponseType = HttpResponse<IReservation[]>;

@Injectable({ providedIn: 'root' })
export class ReservationService {
  public resourceUrl = SERVER_API_URL + 'api/reservations';

  constructor(protected http: HttpClient) {}

  create(reservation: IReservation): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(reservation);
    return this.http
      .post<IReservation>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(reservation: IReservation): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(reservation);
    return this.http
      .put<IReservation>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  updateFull(reservation: IReservationFull): Observable<EntityResponseType> {
    const copy = this.convertFullDateFromClient(reservation);
    return this.http
      .put<IReservationFull>(this.resourceUrl + 'full', copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IReservation>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  findFullReservation(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IReservationFull>(`${this.resourceUrl + 'full'}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IReservation[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  getAllFullReservation(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IReservationFull[]>(this.resourceUrl + 'full', { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertFullDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(reservation: IReservation): IReservation {
    const copy: IReservation = Object.assign({}, reservation, {
      dateReservation:
        reservation.dateReservation != null && reservation.dateReservation.isValid() ? reservation.dateReservation.toJSON() : null,
      dateRendu: reservation.dateRendu != null && reservation.dateRendu.isValid() ? reservation.dateRendu.toJSON() : null
    });
    return copy;
  }

  protected convertFullDateFromClient(reservation: IReservationFull): IReservationFull {
    const copy: IReservationFull = Object.assign({}, reservation, {
      dateReservation:
        reservation.dateReservation != null && reservation.dateReservation.isValid() ? reservation.dateReservation.toJSON() : null,
      dateRendu: reservation.dateRendu != null && reservation.dateRendu.isValid() ? reservation.dateRendu.toJSON() : null,
      createdAt: reservation.createdAt != null && reservation.createdAt.isValid() ? reservation.createdAt.toJSON() : null,
      updatedAt: reservation.updatedAt != null && reservation.updatedAt.isValid() ? reservation.updatedAt.toJSON() : null,
      deletedAt: reservation.deletedAt != null && reservation.deletedAt.isValid() ? reservation.deletedAt.toJSON() : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateReservation = res.body.dateReservation != null ? moment(res.body.dateReservation) : null;
      res.body.dateRendu = res.body.dateRendu != null ? moment(res.body.dateRendu) : null;
    }
    return res;
  }

  public convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((reservation: IReservation) => {
        reservation.dateReservation = reservation.dateReservation != null ? moment(reservation.dateReservation) : null;
        reservation.dateRendu = reservation.dateRendu != null ? moment(reservation.dateRendu) : null;
      });
    }
    return res;
  }

  public convertFullDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((reservation: IReservationFull) => {
        reservation.dateReservation = reservation.dateReservation != null ? moment(reservation.dateReservation) : null;
        reservation.dateRendu = reservation.dateRendu != null ? moment(reservation.dateRendu) : null;
        reservation.createdAt = reservation.createdAt != null ? moment(reservation.createdAt) : null;
        reservation.updatedAt = reservation.updatedAt != null ? moment(reservation.updatedAt) : null;
        reservation.deletedAt = reservation.deletedAt != null ? moment(reservation.deletedAt) : null;
      });
    }
    return res;
  }
}
