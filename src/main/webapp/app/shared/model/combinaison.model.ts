import { Moment } from 'moment';
import { IReservation } from 'app/shared/model/reservation.model';
import { Taille } from 'app/shared/model/enumerations/taille.model';

export interface ICombinaison {
  id?: number;
  taille?: Taille;
  etat?: string;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  createdAt?: Moment;
  updatedAt?: Moment;
  deletedAt?: Moment;
  reservations?: IReservation[];
}

export class Combinaison implements ICombinaison {
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
    public reservations?: IReservation[]
  ) {}
}
