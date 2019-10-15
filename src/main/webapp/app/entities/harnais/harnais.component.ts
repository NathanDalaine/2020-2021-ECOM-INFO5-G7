import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IHarnais } from 'app/shared/model/harnais.model';
import { AccountService } from 'app/core/auth/account.service';
import { HarnaisService } from './harnais.service';

@Component({
  selector: 'jhi-harnais',
  templateUrl: './harnais.component.html'
})
export class HarnaisComponent implements OnInit, OnDestroy {
  harnais: IHarnais[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected harnaisService: HarnaisService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.harnaisService
      .query()
      .pipe(
        filter((res: HttpResponse<IHarnais[]>) => res.ok),
        map((res: HttpResponse<IHarnais[]>) => res.body)
      )
      .subscribe(
        (res: IHarnais[]) => {
          this.harnais = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInHarnais();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IHarnais) {
    return item.id;
  }

  registerChangeInHarnais() {
    this.eventSubscriber = this.eventManager.subscribe('harnaisListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
