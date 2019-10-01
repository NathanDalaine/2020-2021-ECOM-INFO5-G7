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
    public gree?: boolean
  ) {
    this.gree = this.gree || false;
  }
}
