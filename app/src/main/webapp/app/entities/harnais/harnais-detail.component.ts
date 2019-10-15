import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IHarnais } from 'app/shared/model/harnais.model';

@Component({
  selector: 'jhi-harnais-detail',
  templateUrl: './harnais-detail.component.html'
})
export class HarnaisDetailComponent implements OnInit {
  harnais: IHarnais;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ harnais }) => {
      this.harnais = harnais;
    });
  }

  previousState() {
    window.history.back();
  }
}
