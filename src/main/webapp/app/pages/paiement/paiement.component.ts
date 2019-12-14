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
  selector: 'jhi-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['paiement.scss']
})
export class PaiementComponent implements OnInit {
  currentAccount: any;
  currentUserProfile: IUserProfile;
  isSaving: boolean;
  handler: any = null;

  constructor(protected accountService: AccountService, protected userProfileService: UserProfileService) {}

  ngOnInit() {
    this.loadStripe();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.loadAll();
  }

  loadAll() {
    this.userProfileService
      .findCurrentUser()
      .pipe(
        filter((res: HttpResponse<IUserProfile>) => res.ok),
        map((res: HttpResponse<IUserProfile>) => res.body)
      )
      .subscribe((res: IUserProfile) => {
        this.currentUserProfile = res;
      });
  }

  pay(amount) {
    const handler = (window as any).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto'
    });

    handler.open({
      name: 'Paiement',
      description: '2 widgets',
      amount: amount * 100
    });

    this.update(amount);
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (window as any).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto'
        });
      };

      window.document.body.appendChild(s);
    }
  }

  update(amount) {
    this.isSaving = true;

    this.currentUserProfile.dateAdhesion = moment();
    this.currentUserProfile.dateEcheance = moment().add(365, 'days');
    if (amount === 20) {
      this.currentUserProfile.typeAbonnement = TypeAbonnement.JOURNALIER;
    } else if (amount === 50) {
      this.currentUserProfile.typeAbonnement = TypeAbonnement.ETUDIANT;
    } else if (amount === 80) {
      this.currentUserProfile.typeAbonnement = TypeAbonnement.ADULTE;
    } else if (amount === 120) {
      this.currentUserProfile.typeAbonnement = TypeAbonnement.FAMILLE;
    }

    this.subscribeToSaveResponse(this.userProfileService.update(this.currentUserProfile));
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IUserProfile>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }

  previousState() {
    window.history.back();
  }
}
