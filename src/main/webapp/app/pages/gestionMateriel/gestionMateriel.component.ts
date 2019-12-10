import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { IReservation, Reservation } from 'app/shared/model/reservation.model';
import { ReservationService } from 'app/entities/reservation/reservation.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { IUserProfile } from 'app/shared/model/user-profile.model';
import { IReservationFull } from 'app/shared/model/reservationFull.model';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';
import { TypeAbonnement } from 'app/shared/model/enumerations/type-abonnement.model';

@Component({
  selector: 'jhi-gestionMateriel',
  templateUrl: './gestionMateriel.component.html',
  styleUrls: ['gestionMateriel.scss']
})
export class GestionMaterielComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
