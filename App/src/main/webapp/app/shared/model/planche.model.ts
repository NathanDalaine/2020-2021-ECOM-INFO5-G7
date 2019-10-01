export interface IPlanche {
  id?: number;
  marque?: string;
  modele?: string;
  numero?: string;
  localisation?: string;
  etat?: string;
  libelle?: string;
  volume?: number;
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
    public volume?: number
  ) {}
}
