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
    return this.http.post<IPlanche>(this.resourceUrl, planche, { observe: 'response' });
  }

  update(planche: IPlanche): Observable<EntityResponseType> {
    return this.http.put<IPlanche>(this.resourceUrl, planche, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPlanche>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPlanche[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  queryDamaged(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IPlanche[]>(this.resourceUrl + '/damaged', { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
