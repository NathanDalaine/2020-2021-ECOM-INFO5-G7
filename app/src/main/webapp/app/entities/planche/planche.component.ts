import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IPlanche } from 'app/shared/model/planche.model';
import { AccountService } from 'app/core/auth/account.service';
import { PlancheService } from './planche.service';

@Component({
  selector: 'jhi-planche',
  templateUrl: './planche.component.html'
})
export class PlancheComponent implements OnInit, OnDestroy {
  planches: IPlanche[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected plancheService: PlancheService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
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
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInPlanches();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPlanche) {
    return item.id;
  }

  registerChangeInPlanches() {
    this.eventSubscriber = this.eventManager.subscribe('plancheListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
