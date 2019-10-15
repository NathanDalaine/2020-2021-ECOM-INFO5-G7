import { Taille } from 'app/shared/model/enumerations/taille.model';

export interface IHarnais {
  id?: number;
  taille?: Taille;
  etat?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  deletedAt?: string;
  deletedBy?: string;
  reservationId?: number;
}

export class Harnais implements IHarnais {
  constructor(
    public id?: number,
    public taille?: Taille,
    public etat?: string,
    public createdAt?: string,
    public createdBy?: string,
    public updatedAt?: string,
    public updatedBy?: string,
    public deletedAt?: string,
    public deletedBy?: string,
    public reservationId?: number
  ) {}
}
