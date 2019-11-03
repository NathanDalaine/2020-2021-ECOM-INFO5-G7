import { Moment } from 'moment';
import { IReservation } from 'app/shared/model/reservation.model';
import { TypeAbonnement } from 'app/shared/model/enumerations/type-abonnement.model';
import { Niveau } from 'app/shared/model/enumerations/niveau.model';
import { Taille } from 'app/shared/model/enumerations/taille.model';

export interface IUserProfile {
  id?: number;
  dateEcheance?: Moment;
  dateNaissance?: Moment;
  dateAdhesion?: Moment;
  adresse?: string;
  telephone?: string;
  typeAbonnement?: TypeAbonnement;
  niveau?: Niveau;
  materielTechniqueAutorise?: boolean;
  remarque?: string;
  tailleHarnais?: Taille;
  tailleCombinaison?: Taille;
  reservations?: IReservation[];
}

export class UserProfile implements IUserProfile {
  constructor(
    public id?: number,
    public dateEcheance?: Moment,
    public dateNaissance?: Moment,
    public dateAdhesion?: Moment,
    public adresse?: string,
    public telephone?: string,
    public typeAbonnement?: TypeAbonnement,
    public niveau?: Niveau,
    public materielTechniqueAutorise?: boolean,
    public remarque?: string,
    public tailleHarnais?: Taille,
    public tailleCombinaison?: Taille,
    public reservations?: IReservation[]
  ) {
    this.materielTechniqueAutorise = this.materielTechniqueAutorise || false;
  }
}
