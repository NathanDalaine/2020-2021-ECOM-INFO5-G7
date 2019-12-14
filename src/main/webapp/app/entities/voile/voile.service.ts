import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IVoile } from 'app/shared/model/voile.model';

type EntityResponseType = HttpResponse<IVoile>;
type EntityArrayResponseType = HttpResponse<IVoile[]>;

@Injectable({ providedIn: 'root' })
export class VoileService {
  public resourceUrl = SERVER_API_URL + 'api/voiles';

  constructor(protected http: HttpClient) {}

  create(voile: IVoile): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(voile);
    return this.http
      .post<IVoile>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(voile: IVoile): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(voile);
    return this.http
      .put<IVoile>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IVoile>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IVoile[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  queryDamaged(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IVoile[]>(this.resourceUrl + '/damaged', { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(voile: IVoile): IVoile {
    const copy: IVoile = Object.assign({}, voile, {
      createdAt: voile.createdAt != null && voile.createdAt.isValid() ? voile.createdAt.toJSON() : null,
      updatedAt: voile.updatedAt != null && voile.updatedAt.isValid() ? voile.updatedAt.toJSON() : null,
      deletedAt: voile.deletedAt != null && voile.deletedAt.isValid() ? voile.deletedAt.toJSON() : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.createdAt = res.body.createdAt != null ? moment(res.body.createdAt) : null;
      res.body.updatedAt = res.body.updatedAt != null ? moment(res.body.updatedAt) : null;
      res.body.deletedAt = res.body.deletedAt != null ? moment(res.body.deletedAt) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((voile: IVoile) => {
        voile.createdAt = voile.createdAt != null ? moment(voile.createdAt) : null;
        voile.updatedAt = voile.updatedAt != null ? moment(voile.updatedAt) : null;
        voile.deletedAt = voile.deletedAt != null ? moment(voile.deletedAt) : null;
      });
    }
    return res;
  }
}
