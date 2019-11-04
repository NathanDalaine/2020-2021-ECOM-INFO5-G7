import {Component, OnInit, OnDestroy} from '@angular/core';
import {AccountService} from 'app/core/auth/account.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import {JhiEventManager, JhiAlertService} from 'ng-jhipster';

import {IVoile} from 'app/shared/model/voile.model';
import {IPlanche} from 'app/shared/model/planche.model';
import {VoileService} from '../../entities/voile/voile.service';
import {PlancheService} from '../../entities/planche/planche.service';
import {FormBuilder} from "@angular/forms";
import {ReservationService} from "app/entities/reservation/reservation.service";
import {IReservation} from "app/shared/model/reservation.model";
import {ConfirmService} from "app/shared/confirm/confirm.service";

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
    remarques: [''],
    voileId: [null],
    plancheId: [null],
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
    protected confirmService: ConfirmService,
    protected accountService: AccountService
  ) {
  }

  selectVoile(voileId: number) {
    if (this.registerForm.get("voileId").value === voileId) {
      this.registerForm.controls["voileId"].setValue(null);
    } else {
      this.registerForm.controls["voileId"].setValue(voileId);
    }
  }

  selectPlanche(plancheId: number) {
    if (this.registerForm.get("plancheId").value === plancheId) {
      this.registerForm.controls["plancheId"].setValue(null);
    } else {
      this.registerForm.controls["plancheId"].setValue(plancheId);
    }
  }

  reserver() {
    /* eslint-disable no-console */
    console.log(this.registerForm.value);
    /* eslint-enable no-console */
    this.reservationService.create(this.registerForm.value).subscribe(() => {
        this.success = true;
      },
      response => this.processError(response)
    )
  }

  public openConfirmationDialog() {
    this.confirmService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
          if (confirmed) {
           this.reserver();
          }
        }
      )
      .catch();
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
        filter((res: HttpResponse<IPlanche[]>) => res.ok),
        map((res: HttpResponse<IPlanche[]>) => res.body)
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
    this.success = false;
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
