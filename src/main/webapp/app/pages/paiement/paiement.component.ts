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

@Component({
  selector: 'jhi-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['paiement.scss']
})
export class PaiementComponent implements OnInit {
  constructor() {}
  handler: any = null;
  ngOnInit() {
    this.loadStripe();
  }

  pay(amount) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function(token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Paiement',
      description: '2 widgets',
      amount: amount * 100
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function(token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token);
            alert('Payment Success!!');
          }
        });
      };

      window.document.body.appendChild(s);
    }
  }
}
