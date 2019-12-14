import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Voile } from 'app/shared/model/voile.model';
import { Planche } from 'app/shared/model/planche.model';

@Component({
  selector: 'jhi-confirmation-dialog',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() voile: Voile;
  @Input() planche: Planche;
  @Input() combinaison = false;
  @Input() voileOK = true;
  @Input() plancheOK = true;
  @Input() harnais = false;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {}

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
