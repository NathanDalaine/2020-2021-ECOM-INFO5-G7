import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICombinaison } from 'app/shared/model/combinaison.model';
import { CombinaisonService } from './combinaison.service';

@Component({
  selector: 'jhi-combinaison-delete-dialog',
  templateUrl: './combinaison-delete-dialog.component.html'
})
export class CombinaisonDeleteDialogComponent {
  combinaison: ICombinaison;

  constructor(
    protected combinaisonService: CombinaisonService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.combinaisonService.delete(id).subscribe(response => {
      this.eventManager.broadcast({
        name: 'combinaisonListModification',
        content: 'Deleted an combinaison'
      });
      this.activeModal.dismiss(true);
    });
  }
}

@Component({
  selector: 'jhi-combinaison-delete-popup',
  template: ''
})
export class CombinaisonDeletePopupComponent implements OnInit, OnDestroy {
  protected ngbModalRef: NgbModalRef;

  constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ combinaison }) => {
      setTimeout(() => {
        this.ngbModalRef = this.modalService.open(CombinaisonDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
        this.ngbModalRef.componentInstance.combinaison = combinaison;
        this.ngbModalRef.result.then(
          result => {
            this.router.navigate(['/combinaison', { outlets: { popup: null } }]);
            this.ngbModalRef = null;
          },
          reason => {
            this.router.navigate(['/combinaison', { outlets: { popup: null } }]);
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
