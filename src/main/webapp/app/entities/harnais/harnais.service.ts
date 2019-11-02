import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IHarnais } from 'app/shared/model/harnais.model';

type EntityResponseType = HttpResponse<IHarnais>;
type EntityArrayResponseType = HttpResponse<IHarnais[]>;

@Injectable({ providedIn: 'root' })
export class HarnaisService {
  public resourceUrl = SERVER_API_URL + 'api/harnais';

  constructor(protected http: HttpClient) {}

  create(harnais: IHarnais): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(harnais);
    return this.http
      .post<IHarnais>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(harnais: IHarnais): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(harnais);
    return this.http
      .put<IHarnais>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IHarnais>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IHarnais[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(harnais: IHarnais): IHarnais {
    const copy: IHarnais = Object.assign({}, harnais, {
      createdAt: harnais.createdAt != null && harnais.createdAt.isValid() ? harnais.createdAt.toJSON() : null,
      updatedAt: harnais.updatedAt != null && harnais.updatedAt.isValid() ? harnais.updatedAt.toJSON() : null,
      deletedAt: harnais.deletedAt != null && harnais.deletedAt.isValid() ? harnais.deletedAt.toJSON() : null
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
      res.body.forEach((harnais: IHarnais) => {
        harnais.createdAt = harnais.createdAt != null ? moment(harnais.createdAt) : null;
        harnais.updatedAt = harnais.updatedAt != null ? moment(harnais.updatedAt) : null;
        harnais.deletedAt = harnais.deletedAt != null ? moment(harnais.deletedAt) : null;
      });
    }
    return res;
  }
}
