import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPlanche } from 'app/shared/model/planche.model';

type EntityResponseType = HttpResponse<IPlanche>;
type EntityArrayResponseType = HttpResponse<IPlanche[]>;

@Injectable({ providedIn: 'root' })
export class PlancheService {
  public resourceUrl = SERVER_API_URL + 'api/planches';

  constructor(protected http: HttpClient) {}

  create(planche: IPlanche): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(planche);
    return this.http
      .post<IPlanche>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(planche: IPlanche): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(planche);
    return this.http
      .put<IPlanche>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IPlanche>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IPlanche[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  queryDamaged(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IPlanche[]>(this.resourceUrl+"/damaged", { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(planche: IPlanche): IPlanche {
    const copy: IPlanche = Object.assign({}, planche, {
      createdAt: planche.createdAt != null && planche.createdAt.isValid() ? planche.createdAt.toJSON() : null,
      updatedAt: planche.updatedAt != null && planche.updatedAt.isValid() ? planche.updatedAt.toJSON() : null,
      deletedAt: planche.deletedAt != null && planche.deletedAt.isValid() ? planche.deletedAt.toJSON() : null
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
      res.body.forEach((planche: IPlanche) => {
        planche.createdAt = planche.createdAt != null ? moment(planche.createdAt) : null;
        planche.updatedAt = planche.updatedAt != null ? moment(planche.updatedAt) : null;
        planche.deletedAt = planche.deletedAt != null ? moment(planche.deletedAt) : null;
      });
    }
    return res;
  }
}
