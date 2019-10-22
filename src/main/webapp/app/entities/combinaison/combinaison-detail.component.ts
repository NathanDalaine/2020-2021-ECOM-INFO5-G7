import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICombinaison } from 'app/shared/model/combinaison.model';

@Component({
  selector: 'jhi-combinaison-detail',
  templateUrl: './combinaison-detail.component.html'
})
export class CombinaisonDetailComponent implements OnInit {
  combinaison: ICombinaison;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ combinaison }) => {
      this.combinaison = combinaison;
    });
  }

  previousState() {
    window.history.back();
  }
}
