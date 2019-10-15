import { Moment } from 'moment';
import { IVoile } from 'app/shared/model/voile.model';
import { IUserProfile } from 'app/shared/model/user-profile.model';
import { ICombinaison } from 'app/shared/model/combinaison.model';
import { IHarnais } from 'app/shared/model/harnais.model';
import { IPlanche } from 'app/shared/model/planche.model';

export interface IReservation {
  id?: number;
  dateReservation?: Moment;
  dateRendu?: Moment;
  remarques?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  deletedAt?: string;
  deletedBy?: string;
  voiles?: IVoile[];
  users?: IUserProfile[];
  combinaisons?: ICombinaison[];
  harnais?: IHarnais[];
  planches?: IPlanche[];
}

export class Reservation implements IReservation {
  constructor(
    public id?: number,
    public dateReservation?: Moment,
    public dateRendu?: Moment,
    public remarques?: string,
    public createdAt?: string,
    public createdBy?: string,
    public updatedAt?: string,
    public updatedBy?: string,
    public deletedAt?: string,
    public deletedBy?: string,
    public voiles?: IVoile[],
    public users?: IUserProfile[],
    public combinaisons?: ICombinaison[],
    public harnais?: IHarnais[],
    public planches?: IPlanche[]
  ) {}
}
