import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ICombinaison } from 'app/shared/model/combinaison.model';
import { AccountService } from 'app/core/auth/account.service';
import { CombinaisonService } from './combinaison.service';

@Component({
  selector: 'jhi-combinaison',
  templateUrl: './combinaison.component.html'
})
export class CombinaisonComponent implements OnInit, OnDestroy {
  combinaisons: ICombinaison[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected combinaisonService: CombinaisonService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.combinaisonService
      .query()
      .pipe(
        filter((res: HttpResponse<ICombinaison[]>) => res.ok),
        map((res: HttpResponse<ICombinaison[]>) => res.body)
      )
      .subscribe(
        (res: ICombinaison[]) => {
          this.combinaisons = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInCombinaisons();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: ICombinaison) {
    return item.id;
  }

  registerChangeInCombinaisons() {
    this.eventSubscriber = this.eventManager.subscribe('combinaisonListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
