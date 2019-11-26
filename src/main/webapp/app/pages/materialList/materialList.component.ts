import {Component, OnInit, OnDestroy} from '@angular/core';
import {AccountService} from 'app/core/auth/account.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import {JhiEventManager, JhiAlertService} from 'ng-jhipster';

import {IVoile} from 'app/shared/model/voile.model';
import {IPlanche} from 'app/shared/model/planche.model';
import {VoileService} from '../../entities/voile/voile.service';
import {PlancheService} from '../../entities/planche/planche.service';
import {FormBuilder} from "@angular/forms";
import {ReservationService} from "app/entities/reservation/reservation.service";
import {ConfirmService} from "app/shared/confirm/confirm.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'jhi-materiallist',
  templateUrl: './materialList.component.html',
  styleUrls: ['materialList.scss']
})
export class MaterialListComponent implements OnInit, OnDestroy {
  success: boolean;
  allPlanches: IPlanche[];
  allVoiles : IPlanche[];
  voiles: IVoile[];
  planches: IPlanche[];
  selectedVoile : IVoile;
  selectedPlanche : IPlanche;
  registerForm = this.fb.group({
    remarques: [''],
    voileId: [null],
    plancheId: [null],
    harnais: [false],
    combinaison: [false]
  });

  constructor(
    protected voileService: VoileService,
    protected plancheService: PlancheService,
    protected reservationService: ReservationService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected  translate: TranslateService,
    private fb: FormBuilder,
    protected confirmService: ConfirmService,
    protected accountService: AccountService
  ) {
  }

  selectVoile(voile: IVoile) {
    if (this.registerForm.get("voileId").value === voile.id) {
      this.registerForm.controls["voileId"].setValue(null);
      this.selectedVoile = null;
    } else {
      this.selectedVoile = voile;
      this.registerForm.controls["voileId"].setValue(voile.id);
    }
  }

  selectPlanche(planche: IPlanche) {
    if (this.registerForm.get("plancheId").value === planche.id) {
      this.registerForm.controls["plancheId"].setValue(null);
      this.selectedPlanche = null;
    } else {
      this.selectedPlanche = planche;
      this.registerForm.controls["plancheId"].setValue(planche.id);
    }
  }

  reserve() {
    this.reservationService.create(this.registerForm.value).subscribe(() => {
        this.success = true;
      },
      response => this.processError(response)
    )
  }

  public openConfirmationDialog() {
    this.confirmService.confirm(this.translate.instant("global.messages.confirm.pleaseConfirm"),this.getReservationRecap() )
      .then((confirmed) => {
          if (confirmed) {

           this.reserve();
          }
        }
      )
      .catch();
  }

  private getReservationRecap() : string {
    let message = this.translate.instant("global.menu.aboutToReserve");
    if(this.selectedVoile != null){
      message = message + this.translate.instant("global.menu.1voile") + this.selectedVoile.libelle+" ";
    }
    if(this.selectedPlanche != null){
      message = message + this.translate.instant("global.menu.1planche")+ this.selectedPlanche.libelle+" ";
    }
    if(this.registerForm.get("harnais").value !== false){
      message = message + this.translate.instant("global.menu.1harnais")+" ";
    }
    if(this.registerForm.get("combinaison").value !== false){
      message = message + this.translate.instant("global.menu.1combinaison")+" ";
    }
    return message + this.translate.instant("global.menu.doYouConfirm");
  }

  loadAll() {
    this.voileService
      .query()
      .pipe(
        filter((res: HttpResponse<IVoile[]>) => res.ok),
        map((res: HttpResponse<IVoile[]>) => res.body)
      )
      .subscribe(
        (res: IVoile[]) => {
          this.allVoiles = res;
          this.voiles = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );

    this.plancheService
      .query()
      .pipe(
        filter((res: HttpResponse<IPlanche[]>) => res.ok),
        map((res: HttpResponse<IPlanche[]>) => res.body)
      )
      .subscribe(
        (res: IPlanche[]) => {
          this.allPlanches = res;
          this.planches = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.success = false;
  }

  ngOnDestroy() {
  }

  trackIdVoile(index: number, item: IVoile) {
    return item.id;
  }

  trackIdPlanche(index: number, item: IPlanche) {
    return item.id;
  }

  private processError(response: HttpErrorResponse) {

  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  searchPlanche(text: string) {
    if(text !== ""){
      const regex = RegExp(text.toLowerCase());
      this.planches = this.allPlanches.filter(res=>{
        return regex.exec(res.libelle.toLocaleLowerCase());
      });
    }else{
      this.planches = this.allPlanches;
    }
  }

  searchVoile(text: string) {
    if(text !== ""){
      const regex = RegExp(text.toLowerCase());
      this.voiles = this.allVoiles.filter(res=>{
        return regex.exec(res.libelle.toLocaleLowerCase());
      });
    }else{
      this.voiles = this.allVoiles;
    }
  }
}
