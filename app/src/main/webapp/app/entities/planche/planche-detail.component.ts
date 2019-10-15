import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPlanche } from 'app/shared/model/planche.model';

@Component({
  selector: 'jhi-planche-detail',
  templateUrl: './planche-detail.component.html'
})
export class PlancheDetailComponent implements OnInit {
  planche: IPlanche;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ planche }) => {
      this.planche = planche;
    });
  }

  previousState() {
    window.history.back();
  }
}
