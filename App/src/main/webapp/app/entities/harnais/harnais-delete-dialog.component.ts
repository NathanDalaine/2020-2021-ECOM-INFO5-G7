import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IHarnais } from 'app/shared/model/harnais.model';
import { HarnaisService } from './harnais.service';

@Component({
  selector: 'jhi-harnais-delete-dialog',
  templateUrl: './harnais-delete-dialog.component.html'
})
export class HarnaisDeleteDialogComponent {
  harnais: IHarnais;

  constructor(protected harnaisService: HarnaisService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.harnaisService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'harnaisListModification',
        content: 'Deleted an harnais'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-harnais-delete-popup',
  template: ''
})
export class HarnaisDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ harnais }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(HarnaisDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.harnais = harnais;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/harnais', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/harnais', { outlets: { popup: null } }]);
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
