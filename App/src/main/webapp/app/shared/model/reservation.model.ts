import { Moment } from 'moment';

export interface IReservation {
  id?: number;
  dateReservation?: Moment;
  dateRendu?: Moment;
  remarques?: string;
  voileId?: number;
  userId?: number;
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
    public voileId?: number,
    public userId?: number,
    public combinaisonId?: number,
    public harnaisId?: number,
    public plancheId?: number
  ) {}
}
