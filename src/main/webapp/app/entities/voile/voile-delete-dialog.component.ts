import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IVoile } from 'app/shared/model/voile.model';
import { VoileService } from './voile.service';

@Component({
  selector: 'jhi-voile-delete-dialog',
  templateUrl: './voile-delete-dialog.component.html'
})
export class VoileDeleteDialogComponent {
  voile: IVoile;

  constructor(protected voileService: VoileService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.voileService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'voileListModification',
        content: 'Deleted an voile'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-voile-delete-popup',
  template: ''
})
export class VoileDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ voile }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(VoileDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.voile = voile;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/voile', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/voile', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          }
        );
      }, 0);
    });
  }

  ngOnDestroy() {
    this.ngbModalRef = null;
  }
}
