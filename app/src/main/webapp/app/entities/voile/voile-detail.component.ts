import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IVoile } from 'app/shared/model/voile.model';

@Component({
  selector: 'jhi-voile-detail',
  templateUrl: './voile-detail.component.html'
})
export class VoileDetailComponent implements OnInit {
  voile: IVoile;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ voile }) => {
      this.voile = voile;
    });
  }

  previousState() {
    window.history.back();
  }
}
