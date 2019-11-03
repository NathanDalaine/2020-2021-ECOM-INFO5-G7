import { Moment } from 'moment';
import { IReservation } from 'app/shared/model/reservation.model';

export interface IVoile {
  id?: number;
  surface?: number;
  marque?: string;
  modele?: string;
  numero?: string;
  localisation?: string;
  etat?: string;
  libelle?: string;
  gree?: boolean;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  createdAt?: Moment;
  updatedAt?: Moment;
  deletedAt?: Moment;
  reservations?: IReservation[];
}

export class Voile implements IVoile {
  constructor(
    public id?: number,
    public surface?: number,
    public marque?: string,
    public modele?: string,
    public numero?: string,
    public localisation?: string,
    public etat?: string,
    public libelle?: string,
    public gree?: boolean,
    public createdBy?: string,
    public updatedBy?: string,
    public deletedBy?: string,
    public createdAt?: Moment,
    public updatedAt?: Moment,
    public deletedAt?: Moment,
    public reservations?: IReservation[]
  ) {
    this.gree = this.gree || false;
  }
}
