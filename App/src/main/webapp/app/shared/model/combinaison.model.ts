import { Taille } from 'app/shared/model/enumerations/taille.model';

export interface ICombinaison {
  id?: number;
  taille?: Taille;
  nombre?: number;
}

export class Combinaison implements ICombinaison {
  constructor(public id?: number, public taille?: Taille, public nombre?: number) {}
}
