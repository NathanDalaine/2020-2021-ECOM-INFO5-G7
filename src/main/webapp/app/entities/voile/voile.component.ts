import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IVoile } from 'app/shared/model/voile.model';
import { AccountService } from 'app/core/auth/account.service';
import { VoileService } from './voile.service';

@Component({
  selector: 'jhi-voile',
  templateUrl: './voile.component.html'
})
export class VoileComponent implements OnInit, OnDestroy {
  voiles: IVoile[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected voileService: VoileService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

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
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInVoiles();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IVoile) {
    return item.id;
  }

  registerChangeInVoiles() {
    this.eventSubscriber = this.eventManager.subscribe('voileListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
