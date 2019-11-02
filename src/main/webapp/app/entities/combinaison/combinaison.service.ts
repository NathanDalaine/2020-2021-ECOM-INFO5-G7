import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICombinaison } from 'app/shared/model/combinaison.model';

type EntityResponseType = HttpResponse<ICombinaison>;
type EntityArrayResponseType = HttpResponse<ICombinaison[]>;

@Injectable({ providedIn: 'root' })
export class CombinaisonService {
  public resourceUrl = SERVER_API_URL + 'api/combinaisons';

  constructor(protected http: HttpClient) {}

  create(combinaison: ICombinaison): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(combinaison);
    return this.http
      .post<ICombinaison>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(combinaison: ICombinaison): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(combinaison);
    return this.http
      .put<ICombinaison>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICombinaison>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICombinaison[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(combinaison: ICombinaison): ICombinaison {
    const copy: ICombinaison = Object.assign({}, combinaison, {
      createdAt: combinaison.createdAt != null && combinaison.createdAt.isValid() ? combinaison.createdAt.toJSON() : null,
      updatedAt: combinaison.updatedAt != null && combinaison.updatedAt.isValid() ? combinaison.updatedAt.toJSON() : null,
      deletedAt: combinaison.deletedAt != null && combinaison.deletedAt.isValid() ? combinaison.deletedAt.toJSON() : null
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
      res.body.forEach((combinaison: ICombinaison) => {
        combinaison.createdAt = combinaison.createdAt != null ? moment(combinaison.createdAt) : null;
        combinaison.updatedAt = combinaison.updatedAt != null ? moment(combinaison.updatedAt) : null;
        combinaison.deletedAt = combinaison.deletedAt != null ? moment(combinaison.deletedAt) : null;
      });
    }
    return res;
  }
}
