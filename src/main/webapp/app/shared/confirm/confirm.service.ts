import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from 'app/shared/confirm/confirm.component';
import { IVoile } from 'app/shared/model/voile.model';
import { IPlanche } from 'app/shared/model/planche.model';

@Injectable()
export class ConfirmService {
  constructor(private modalService: NgbModal) {}

  public confirm(
    title: string,
    message: string,
    voile: IVoile = null,
    planche: IPlanche = null,
    combinaison = false,
    harnais = false,
    voileOK = true,
    plancheOK= true,
    btnOkText = 'OK',
    btnCancelText = 'Cancel',
    dialogSize: 'sm' | 'lg' = 'sm'
  ): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.voile = voile;
    modalRef.componentInstance.planche = planche;
    modalRef.componentInstance.combinaison = combinaison;
    modalRef.componentInstance.harnais = harnais;
    modalRef.componentInstance.voileOK = voileOK;
    modalRef.componentInstance.plancheOK = plancheOK;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    return modalRef.result;
  }
}
