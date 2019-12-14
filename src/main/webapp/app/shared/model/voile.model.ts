import { Moment } from 'moment';
import { IReservation } from 'app/shared/model/reservation.model';
import { Niveau } from 'app/shared/model/enumerations/niveau.model';

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
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  deletedAt?: string;
  deletedBy?: string;
  createdAt?: Moment;
  updatedAt?: Moment;
  deletedAt?: Moment;
  niveaurequis?: Niveau;
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
    public createdAt?: string,
    public createdBy?: string,
    public updatedAt?: string,
    public updatedBy?: string,
    public deletedAt?: string,
    public deletedBy?: string,
    public createdAt?: Moment,
    public updatedAt?: Moment,
    public deletedAt?: Moment,
    public niveaurequis?: Niveau,
    public reservations?: IReservation[]
  ) {
    this.gree = this.gree || false;
  }
}
