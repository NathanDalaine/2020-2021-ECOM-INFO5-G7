import { Moment } from 'moment';
import { IVoile } from 'app/shared/model/voile.model';
import { IUserProfile } from 'app/shared/model/user-profile.model';
import { ICombinaison } from 'app/shared/model/combinaison.model';
import { IHarnais } from 'app/shared/model/harnais.model';
import { IPlanche } from 'app/shared/model/planche.model';

export interface IReservationFull {
  id?: number;
  dateReservation?: Moment;
  dateRendu?: Moment;
  remarques?: string;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
  createdAt?: Moment;
  updatedAt?: Moment;
  deletedAt?: Moment;
  voile?: IVoile;
  userProfile?: IUserProfile;
  combinaison?: ICombinaison;
  harnais?: IHarnais;
  planche?: IPlanche;
}

export class Reservation implements IReservationFull {
  constructor(
    public id?: number,
    public dateReservation?: Moment,
    public dateRendu?: Moment,
    public remarques?: string,
    public createdBy?: string,
    public updatedBy?: string,
    public deletedBy?: string,
    public createdAt?: Moment,
    public updatedAt?: Moment,
    public deletedAt?: Moment,
    public voileId?: number,
    public userProfileId?: number,
    public combinaisonId?: number,
    public harnaisId?: number,
    public plancheId?: number
  ) {}
}
