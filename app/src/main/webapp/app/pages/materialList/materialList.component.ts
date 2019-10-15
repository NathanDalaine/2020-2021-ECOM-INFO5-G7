import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';


@Component({
  selector: 'jhi-materiallist',
  templateUrl: './materialList.component.html',
  styleUrls: ['materialList.scss']
})
export class MaterialListComponent implements OnInit, OnDestroy {
 
  currentAccount: any;

  constructor(
    protected accountService: AccountService
   
  ) {}

  ngOnInit() {
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
  }


  ngOnDestroy() {
  }
}
