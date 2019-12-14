import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-helppage',
  templateUrl: './helpPage.component.html',
  styleUrls: []
})
export class HelpPageComponent implements OnInit, OnDestroy {
  account: Account;


  constructor(
    private accountService: AccountService,

  ) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });

  }




  ngOnDestroy() {
  }
}
