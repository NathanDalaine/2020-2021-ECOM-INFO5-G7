import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPlanche } from 'app/shared/model/planche.model';
import { PlancheService } from './planche.service';

@Component({
  selector: 'jhi-planche-delete-dialog',
  templateUrl: './planche-delete-dialog.component.html'
})
export class PlancheDeleteDialogComponent {
  planche: IPlanche;

  constructor(protected plancheService: PlancheService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.plancheService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'plancheListModification',
        content: 'Deleted an planche'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-planche-delete-popup',
  template: ''
})
export class PlancheDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ planche }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(PlancheDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.planche = planche;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/planche', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/planche', { outlets: { popup: null } }]);
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
