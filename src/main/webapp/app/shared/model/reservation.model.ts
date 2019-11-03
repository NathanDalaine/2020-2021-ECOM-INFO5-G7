import { Moment } from 'moment';

export interface IReservation {
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
  voileId?: number;
  userProfileId?: number;
  combinaisonId?: number;
  harnaisId?: number;
  plancheId?: number;
}

export class Reservation implements IReservation {
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
