import { Moment } from 'moment';
import { Taille } from 'app/shared/model/enumerations/taille.model';

export interface IHarnais {
  id?: number;
  taille?: Taille;
  etat?: string;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  createdAt?: Moment;
  updatedAt?: Moment;
  deletedAt?: Moment;
  reservationId?: number;
}

export class Harnais implements IHarnais {
  constructor(
    public id?: number,
    public taille?: Taille,
    public etat?: string,
    public createdBy?: string,
    public updatedBy?: string,
    public deletedBy?: string,
    public createdAt?: Moment,
    public updatedAt?: Moment,
    public deletedAt?: Moment,
    public reservationId?: number
  ) {}
}
