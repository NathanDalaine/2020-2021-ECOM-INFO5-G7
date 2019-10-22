import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.post<IHarnais>(this.resourceUrl, harnais, { observe: 'response' });
  }

  update(harnais: IHarnais): Observable<EntityResponseType> {
    return this.http.put<IHarnais>(this.resourceUrl, harnais, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IHarnais>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IHarnais[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
