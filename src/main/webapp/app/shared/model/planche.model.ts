import { Moment } from 'moment';
import { IReservation } from 'app/shared/model/reservation.model';

export interface IPlanche {
  id?: number;
  marque?: string;
  modele?: string;
  numero?: string;
  localisation?: string;
  etat?: string;
  libelle?: string;
  volume?: number;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  createdAt?: Moment;
  updatedAt?: Moment;
  deletedAt?: Moment;
  reservationId?: number;
  reservations?: IReservation[];
}

export class Planche implements IPlanche {
  constructor(
    public id?: number,
    public marque?: string,
    public modele?: string,
    public numero?: string,
    public localisation?: string,
    public etat?: string,
    public libelle?: string,
    public volume?: number,
    public createdBy?: string,
    public updatedBy?: string,
    public deletedBy?: string,
    public createdAt?: Moment,
    public updatedAt?: Moment,
    public deletedAt?: Moment,
    public reservationId?: number,
    public reservations?: IReservation[]
  ) {}
}
