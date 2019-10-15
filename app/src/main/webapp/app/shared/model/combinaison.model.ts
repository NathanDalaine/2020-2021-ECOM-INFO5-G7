import { Taille } from 'app/shared/model/enumerations/taille.model';

export interface ICombinaison {
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

export class Combinaison implements ICombinaison {
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
