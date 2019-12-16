import { Component, OnInit } from '@angular/core';
import { IPlanche } from 'app/shared/model/planche.model';
import { IVoile } from 'app/shared/model/voile.model';
import { VoileService } from 'app/entities/voile/voile.service';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { JhiAlertService } from 'ng-jhipster';
import { PlancheService } from 'app/entities/planche/planche.service';

@Component({
  selector: 'jhi-gestionmateriel',
  templateUrl: './gestionMateriel.component.html',
  styleUrls: ['gestionMateriel.scss']
})
export class GestionMaterielComponent implements OnInit {
  allPlanches: IPlanche[];
  allVoiles: IPlanche[];
  voiles: IVoile[];
  planches: IPlanche[];

  constructor(protected voileService: VoileService, protected plancheService: PlancheService, protected jhiAlertService: JhiAlertService) {}

  loadAll() {
    this.voileService
      .queryDamaged()
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
      .queryDamaged()
      .pipe(
        filter((res: HttpResponse<IVoile[]>) => res.ok),
        map((res: HttpResponse<IVoile[]>) => res.body)
      )
      .subscribe(
        (res: IVoile[]) => {
          this.allPlanches = res;
          this.planches = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
  }

  searchPlanche(text: string) {
    if (text !== '') {
      const regex = RegExp(text.toLowerCase());
      this.planches = this.allPlanches.filter(res => {
        return regex.exec(res.libelle.toLocaleLowerCase());
      });
    } else {
      this.planches = this.allPlanches;
    }
  }

  searchVoile(text: string) {
    if (text !== '') {
      const regex = RegExp(text.toLowerCase());
      this.voiles = this.allVoiles.filter(res => {
        return regex.exec(res.libelle.toLocaleLowerCase());
      });
    } else {
      this.voiles = this.allVoiles;
    }
  }

  trackIdVoile(index: number, item: IVoile) {
    return item.id;
  }

  trackIdPlanche(index: number, item: IPlanche) {
    return item.id;
  }

  setVoileEnEtat(voile: IVoile) {
    voile.etat = '';
    this.voileService.update(voile).subscribe(() => this.loadAll());
  }

  setPlancheEnEtat(planche: IPlanche) {
    planche.etat = null;
    this.plancheService.update(planche).subscribe(() => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
