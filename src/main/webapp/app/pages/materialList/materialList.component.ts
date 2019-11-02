import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import {IVoile} from 'app/shared/model/voile.model';
import {IPlanche} from 'app/shared/model/planche.model';
import { VoileService } from '../../entities/voile/voile.service';
import { PlancheService } from '../../entities/planche/planche.service';
import {FormBuilder} from "@angular/forms";
import {ReservationService} from "app/entities/reservation/reservation.service";
import {IReservation} from "app/shared/model/reservation.model";

@Component({
  selector: 'jhi-materiallist',
  templateUrl: './materialList.component.html',
  styleUrls: ['materialList.scss']
})
export class MaterialListComponent implements OnInit, OnDestroy {
  success: boolean;
  voiles: IVoile[];
  planches: IPlanche[];
  currentAccount: any;
  registerForm = this.fb.group({
    voile: [''],
    planche: [''],
    harnais: [false],
    combinaison: [false]
  });


  constructor(
    protected voileService: VoileService,
    protected plancheService: PlancheService,
    protected reservationService: ReservationService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    private fb: FormBuilder,
    protected accountService: AccountService
  ) {}

  selectVoile(voile:IVoile){
    if(this.registerForm.get("voile").value === voile){
      this.registerForm.controls["voile"].setValue(null);
    }else{
      this.registerForm.controls["voile"].setValue(voile);
    }
  }

  reserver(reservation : IReservation){
    this.success = true; //pour les tests à sup
    this.reservationService.create(reservation).subscribe(
      () => {
        this.success = true;
      },
      response => this.processError(response)
    );
  }

  loadAll() {
    this.voileService
      .query()
      .pipe(
        filter((res: HttpResponse<IVoile[]>) => res.ok),
        map((res: HttpResponse<IVoile[]>) => res.body)
      )
      .subscribe(
        (res: IVoile[]) => {
          this.voiles = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );

    this.plancheService
    .query()
    .pipe(
      filter((res: HttpResponse<IVoile[]>) => res.ok),
      map((res: HttpResponse<IVoile[]>) => res.body)
    )
    .subscribe(
      (res: IPlanche[]) => {
        this.planches = res;
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
  }

  ngOnDestroy() {
  }

  trackIdVoile(index: number, item: IVoile) {
    return item.id;
  }

  trackIdPlanche(index: number, item: IPlanche) {
    return item.id;
  }

  private processError(response: HttpErrorResponse) {

  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}

