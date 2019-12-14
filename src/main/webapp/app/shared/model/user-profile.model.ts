import { Moment } from 'moment';
import { Taille } from 'app/shared/model/enumerations/taille.model';
import { TypeAbonnement } from 'app/shared/model/enumerations/type-abonnement.model';
import { Taille } from 'app/shared/model/enumerations/taille.model';
import { Niveau } from 'app/shared/model/enumerations/niveau.model';
import { IUser } from 'app/core/user/user.model';

export interface IUserProfile {
  user?: IUser;
  id?: number;
  localisation?: string;
  dateEcheance?: Moment;
  dateNaissance?: Moment;
  dateAdhesion?: Moment;
  prefTaille?: Taille;
  adresse?: string;
  telephone?: string;
  typeAbonnement?: TypeAbonnement;
  materielTechniqueAutorise?: boolean;
  tailleHarnais?: Taille;
  tailleCombinaison?: Taille;
  niveau?: Niveau;
  reservations?: IReservation[];
}

export class UserProfile implements IUserProfile {
  constructor(
    public user?: IUser,
    public id?: number,
    public localisation?: string,
    public dateEcheance?: Moment,
    public dateNaissance?: Moment,
    public dateAdhesion?: Moment,
    public prefTaille?: Taille,
    public adresse?: string,
    public telephone?: string,
    public typeAbonnement?: TypeAbonnement,
    public materielTechniqueAutorise?: boolean,
    public tailleHarnais?: Taille,
    public tailleCombinaison?: Taille,
    public niveau?: Niveau,
    public reservations?: IReservation[]
  ) {
    this.materielTechniqueAutorise = this.materielTechniqueAutorise || false;
  }
}
