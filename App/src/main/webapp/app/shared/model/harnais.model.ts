import { Taille } from 'app/shared/model/enumerations/taille.model';

export interface IHarnais {
  id?: number;
  taille?: Taille;
  nombre?: number;
}

export class Harnais implements IHarnais {
  constructor(public id?: number, public taille?: Taille, public nombre?: number) {}
}
