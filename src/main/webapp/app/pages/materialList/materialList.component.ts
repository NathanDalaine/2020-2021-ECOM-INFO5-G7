import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';
import { IVoile, Voile } from 'app/shared/model/voile.model';
import { IPlanche, Planche } from 'app/shared/model/planche.model';
import { VoileService } from '../../entities/voile/voile.service';
import { PlancheService } from '../../entities/planche/planche.service';
import { FormBuilder } from '@angular/forms';
import { ReservationService } from 'app/entities/reservation/reservation.service';
import { ConfirmService } from 'app/shared/confirm/confirm.service';
import { TranslateService } from '@ngx-translate/core';
import { ALREADY_RESERVED, DUE_DATE_PASSED, NO_HARNESS_AVAILABLE, NO_WETSUIT_AVAILABLE } from 'app/shared/constants/error.constants';
import { IUserProfile } from 'app/shared/model/user-profile.model';
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';
import { Niveau } from 'app/shared/model/enumerations/niveau.model';

@Component({
  selector: 'jhi-materiallist',
  templateUrl: './materialList.component.html',
  styleUrls: ['materialList.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MaterialListComponent implements OnInit, OnDestroy {
  success: boolean;
  allPlanches: IPlanche[];
  allVoiles: IPlanche[];
  voiles: IVoile[];
  planches: IPlanche[];
  selectedVoile: IVoile;
  selectedPlanche: IPlanche;
  users: IUserProfile[];
  registerForm = this.fb.group({
    remarques: [''],
    voileId: [null],
    plancheId: [null],
    harnais: [false],
    combinaison: [false],
    harnaisId: null,
    combinaisonId: null,
    userProfileId: [null]
  });
  errorNoWetSuitAvailable: string;
  errorNoHarnessAvailable: string;
  errorAlreadyReserved: string;
  errorDueDatePassed: string;
  error: string;

  sortTypeVoile = 'libelle';
  sortTypePlanche = 'libelle';

  constructor(
    protected voileService: VoileService,
    protected plancheService: PlancheService,
    protected reservationService: ReservationService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected translate: TranslateService,
    private fb: FormBuilder,
    protected confirmService: ConfirmService,
    protected accountService: AccountService,
    protected userProfileService: UserProfileService
  ) {}

  selectVoile(voile: IVoile) {
    if (this.registerForm.get('voileId').value === voile.id) {
      this.registerForm.controls['voileId'].setValue(null);
      this.selectedVoile = null;
    } else {
      this.selectedVoile = voile;
      this.registerForm.controls['voileId'].setValue(voile.id);
    }
  }

  selectPlanche(planche: IPlanche) {
    if (this.registerForm.get('plancheId').value === planche.id) {
      this.registerForm.controls['plancheId'].setValue(null);
      this.selectedPlanche = null;
    } else {
      this.selectedPlanche = planche;
      this.registerForm.controls['plancheId'].setValue(planche.id);
    }
  }

  reserve() {
    if (this.registerForm.get('harnais').value === true) {
      this.registerForm.controls['harnaisId'].setValue(1);
    } else {
      this.registerForm.controls['harnaisId'].setValue(null);
    }
    if (this.registerForm.get('combinaison').value === true) {
      this.registerForm.controls['combinaisonId'].setValue(1);
    } else {
      this.registerForm.controls['combinaisonId'].setValue(null);
    }
    this.error = null;
    this.errorNoWetSuitAvailable = null;
    this.errorNoHarnessAvailable = null;
    this.errorAlreadyReserved = null;
    this.errorDueDatePassed = null;
    this.reservationService.create(this.registerForm.value).subscribe(
      () => {
        this.success = true;
      },
      response => this.processError(response)
    );
  }

  private checkLevelPlanche(planche: IPlanche): boolean {
    if (planche != null) {
      const id = Number(this.registerForm.get('userProfileId').value);
      const thisuser: IUserProfile = this.users.find(user => user.id === id);
      switch (planche.niveaurequis) {
        case Niveau.DEBUTANT:
          break;
        case Niveau.DEBUTANTPLUS:
          if (thisuser.niveau === Niveau.DEBUTANT) {
            return false;
          }
          break;
        case Niveau.PERF:
          if (thisuser.niveau === Niveau.DEBUTANT || thisuser.niveau === Niveau.DEBUTANTPLUS) {
            return false;
          }
          break;
        case Niveau.FUNBOARD:
          if (thisuser.niveau !== Niveau.FUNBOARD) {
            return false;
          }
          break;
      }
    }
    return true;
  }

  private checkLevelVoile(voile: IVoile): boolean {
    if (voile != null) {
      const id = Number(this.registerForm.get('userProfileId').value);
      const thisuser: IUserProfile = this.users.find(element => element.id === id);
      switch (voile.niveaurequis) {
        case Niveau.DEBUTANT:
          break;
        case Niveau.DEBUTANTPLUS:
          if (thisuser.niveau === Niveau.DEBUTANT) {
            return false;
          }
          break;
        case Niveau.PERF:
          if (thisuser.niveau === Niveau.DEBUTANT || thisuser.niveau === Niveau.DEBUTANTPLUS) {
            return false;
          }
          break;
        case Niveau.FUNBOARD:
          if (thisuser.niveau !== Niveau.FUNBOARD) {
            return false;
          }
          break;
      }
    }
    return true;
  }

  public openConfirmationDialog() {
    this.confirmService
      .confirm(
        this.translate.instant('global.messages.confirm.pleaseConfirm'),
        '',
        this.selectedVoile,
        this.selectedPlanche,
        this.registerForm.get('combinaison').value,
        this.registerForm.get('harnais').value,
        this.checkLevelVoile(this.selectedVoile).valueOf(),
        this.checkLevelPlanche(this.selectedPlanche).valueOf()
      )
      .then(confirmed => {
        if (confirmed) {
          this.reserve();
        }
      })
      .catch();
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
          this.sortAvailableVoile(res);
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
          this.sortAvailablePlanche(res);
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );

    this.userProfileService
      .query()
      .pipe(
        filter((res: HttpResponse<IUserProfile[]>) => res.ok),
        map((res: HttpResponse<IUserProfile[]>) => res.body)
      )
      .subscribe(
        (res: IUserProfile[]) => {
          this.users = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
    this.userProfileService
      .findCurrentUser()
      .pipe(
        filter((res: HttpResponse<IUserProfile>) => res.ok),
        map((res: HttpResponse<IUserProfile>) => res.body)
      )
      .subscribe(
        (res: IUserProfile) => {
          if (this.registerForm.get('userProfileId').value === null) {
            this.registerForm.controls['userProfileId'].setValue(res.id);
          }
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  ngOnInit() {
    this.loadAll();
    this.success = false;
  }

  sortAvailableVoile(voiles: IVoile[]) {
    let keep = true;
    this.voiles = new Array<Voile>();
    if (voiles != null) {
      voiles.forEach(v => {
        if (v.etat !== null && v.etat !== '') {
          keep = false;
        } else if (v.reservations != null) {
          v.reservations.forEach(r => {
            if (r.dateRendu == null) {
              keep = false;
            }
          });
        }
        if (keep) {
          this.voiles.push(v);
        }
        keep = true;
      });
    }
    this.allVoiles = this.voiles;
  }

  ngOnDestroy() {}

  trackIdVoile(index: number, item: IVoile) {
    return item.id;
  }

  trackIdPlanche(index: number, item: IPlanche) {
    return item.id;
  }

  trackVolumePlanche(index: number, item: IPlanche) {
    return item.volume;
  }

  trackSurfaceVoile(index: number, item: IVoile) {
    return item.surface;
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  private processError(response: HttpErrorResponse) {
    this.success = false;
    if (response.status === 400 && response.error.type === NO_WETSUIT_AVAILABLE) {
      this.errorNoWetSuitAvailable = 'ERROR';
    } else if (response.status === 400 && response.error.type === NO_HARNESS_AVAILABLE) {
      this.errorNoHarnessAvailable = 'ERROR';
    } else if (response.status === 400 && response.error.type === ALREADY_RESERVED) {
      this.errorAlreadyReserved = 'ERROR';
    } else if (response.status === 400 && response.error.type === DUE_DATE_PASSED) {
      this.errorDueDatePassed = 'ERROR';
    } else {
      this.error = 'ERROR';
    }
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

  private sortAvailablePlanche(planches: IPlanche[]) {
    let keep = true;
    this.planches = new Array<Planche>();
    if (planches != null) {
      planches.forEach(v => {
        if (v.etat !== null && v.etat !== '') {
          keep = false;
        } else if (v.reservations != null) {
          v.reservations.forEach(r => {
            if (r.dateRendu == null) {
              keep = false;
            }
          });
        }
        if (keep) {
          this.planches.push(v);
        }
        keep = true;
      });
    }
    this.allPlanches = this.planches;
  }
}
