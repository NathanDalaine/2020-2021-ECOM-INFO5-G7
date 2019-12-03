import { AfterViewInit, Component, ElementRef, OnInit, Renderer } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiLanguageService } from 'ng-jhipster';
import { EMAIL_ALREADY_USED_TYPE, INVALID_AUTHORITY, LOGIN_ALREADY_USED_TYPE } from 'app/shared/constants/error.constants';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { Register } from './register.service';
import { Taille } from 'app/shared/model/enumerations/taille.model';
import { SelectItem } from 'primeng/api';
import { TypeAbonnement } from 'app/shared/model/enumerations/type-abonnement.model';
import { Niveau } from 'app/shared/model/enumerations/niveau.model';
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';
import { ADMINISTRATEUR, GESTIONNAIRE, MEMBRE } from 'app/shared/constants/roles.constants';
import { AccountService } from 'app/core/auth/account.service';

@Component({
  selector: 'jhi-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, AfterViewInit {
  doNotMatch: string;
  error: string;
  errorEmailExists: string;
  errorUserExists: string;
  errorInvalidAuthority: string;
  success: boolean;
  modalRef: NgbModalRef;
  tailles: SelectItem[];
  abonnements: SelectItem[];
  niveaux: SelectItem[];

  registerForm = this.fb.group({
    authoritie: [MEMBRE],
    langKey: ['fr'],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    telephone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    tailleHarnais: ['', [Validators.required]],
    tailleCombinaison: ['', [Validators.required]],
    typeAbonnement: ['', Validators.required],
    niveau: ['', Validators.required],
    dateNaissance: [],
    adresse: [''],
    user: this.fb.group({
      login: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')]]
    }),
    materielTechniqueAutorise: [false]
  });

  roles: SelectItem[];
  constructor(
    private languageService: JhiLanguageService,
    private loginModalService: LoginModalService,
    private registerService: Register,
    private elementRef: ElementRef,
    private renderer: Renderer,
    private fb: FormBuilder,
    private accountService: AccountService,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit() {
    this.success = false;
    this.tailles = [
      { label: 'S', value: Taille.S },
      { label: 'M', value: Taille.M },
      { label: 'L', value: Taille.L },
      { label: 'XL', value: Taille.XL }
    ];
    this.abonnements = [
      { label: 'Etudiant', value: TypeAbonnement.ETUDIANT },
      { label: 'Adulte', value: TypeAbonnement.ADULTE },
      { label: 'Famille', value: TypeAbonnement.FAMILLE },
      { label: 'Journalier', value: TypeAbonnement.JOURNALIER }
    ];
    this.niveaux = [
      { label: 'Debutant', value: Niveau.DEBUTANT },
      { label: 'Debutant+', value: Niveau.DEBUTANTPLUS },
      { label: 'Performance', value: Niveau.PERF },
      { label: 'Funboard', value: Niveau.FUNBOARD }
    ];
    this.authoritiesAvailable();
  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
  }

  authoritiesAvailable() {
    this.accountService.hasAuthority(ADMINISTRATEUR).then(res => {
      if (res) {
        this.roles = [
          { label: 'Membre', value: MEMBRE },
          { label: 'Gestionnaire', value: GESTIONNAIRE },
          { label: 'Administrateur', value: ADMINISTRATEUR }
        ];
      } else {
        this.accountService.hasAuthority(GESTIONNAIRE).then(res2 => {
          if (res2) {
            this.roles = [{ label: 'Membre', value: MEMBRE }, { label: 'Gestionnaire', value: GESTIONNAIRE }];
          } else {
            this.roles = [{ label: 'Membre', value: MEMBRE }];
          }
        });
      }
    });
  }

  register() {
    const password = this.registerForm.get(['password']).value;
    if (password !== this.registerForm.get(['confirmPassword']).value) {
      this.doNotMatch = 'ERROR';
    } else {
      this.doNotMatch = null;
      this.error = null;
      this.errorUserExists = null;
      this.errorEmailExists = null;
      this.errorInvalidAuthority = null;
      this.userProfileService.create(this.registerForm.value).subscribe(
        () => {
          this.success = true;
        },
        response => this.processError(response)
      );
    }
  }

  openLogin() {
    this.modalRef = this.loginModalService.open();
  }

  private processError(response: HttpErrorResponse) {
    this.success = null;
    if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
      this.errorUserExists = 'ERROR';
    } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
      this.errorEmailExists = 'ERROR';
    } else if (response.status === 400 && response.error.type === INVALID_AUTHORITY) {
      this.errorInvalidAuthority = 'ERROR';
    } else {
      this.error = 'ERROR';
    }
  }
}
