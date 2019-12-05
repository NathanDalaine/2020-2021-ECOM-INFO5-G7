import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IUserProfile } from 'app/shared/model/user-profile.model';
import { AccountService } from 'app/core/auth/account.service';
import { UserProfileService } from '../../entities/user-profile/user-profile.service';
import { MEMBRE } from '../../shared/constants/roles.constants';

@Component({
  selector: 'jhi-members',
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit, OnDestroy {
  userProfiles: IUserProfile[];
  tmp: IUserProfile[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected userProfileService: UserProfileService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.userProfileService
      .query()
      .pipe(
        filter((res: HttpResponse<IUserProfile[]>) => res.ok),
        map((res: HttpResponse<IUserProfile[]>) => res.body)
      )
      .subscribe(
        (res: IUserProfile[]) => {
          this.userProfiles = [];
          res.forEach(r => {
            if (r.user != null && r.user.authorities != null && r.user.authorities.includes(MEMBRE)) {
              this.userProfiles.push(r);
            }
          });
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInUserProfiles();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IUserProfile) {
    return item.id;
  }

  registerChangeInUserProfiles() {
    this.eventSubscriber = this.eventManager.subscribe('userProfileListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
