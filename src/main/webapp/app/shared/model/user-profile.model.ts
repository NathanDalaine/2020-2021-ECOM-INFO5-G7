import { Moment } from 'moment';
import { Taille } from 'app/shared/model/enumerations/taille.model';
import { TypeAbonnement } from 'app/shared/model/enumerations/type-abonnement.model';
import { Niveau } from 'app/shared/model/enumerations/niveau.model';

export interface IUserProfile {
  id?: number;
  localisation?: string;
  dateEcheance?: Moment;
  dateNaissance?: Moment;
  dateAdhesion?: Moment;
  prefTaille?: Taille;
  adresse?: string;
  telephone?: string;
  typeAbonnement?: TypeAbonnement;
  niveau?: Niveau;
  materielTechniqueAutorise?: boolean;
  remarque?: string;
  reservationId?: number;
}

export class UserProfile implements IUserProfile {
  constructor(
    public id?: number,
    public localisation?: string,
    public dateEcheance?: Moment,
    public dateNaissance?: Moment,
    public dateAdhesion?: Moment,
    public prefTaille?: Taille,
    public adresse?: string,
    public telephone?: string,
    public typeAbonnement?: TypeAbonnement,
    public niveau?: Niveau,
    public materielTechniqueAutorise?: boolean,
    public remarque?: string,
    public reservationId?: number
  ) {
    this.materielTechniqueAutorise = this.materielTechniqueAutorise || false;
  }
}
