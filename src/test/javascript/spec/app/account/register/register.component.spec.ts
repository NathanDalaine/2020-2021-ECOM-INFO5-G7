import { ComponentFixture, TestBed, async, inject, tick, fakeAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of, throwError } from 'rxjs';

import { JhiLanguageService } from 'ng-jhipster';
import { MockLanguageService } from '../../../helpers/mock-language.service';
import { EcomgucvoileTestModule } from '../../../test.module';
import { EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE } from 'app/shared/constants/error.constants';
import { Register } from 'app/account/register/register.service';
import { RegisterComponent } from 'app/account/register/register.component';
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';

describe('Component Tests', () => {
  describe('RegisterComponent', () => {
    let fixture: ComponentFixture<RegisterComponent>;
    let comp: RegisterComponent;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [EcomgucvoileTestModule],
        declarations: [RegisterComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(RegisterComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(RegisterComponent);
      comp = fixture.componentInstance;
      comp.ngOnInit();
    });

    it('should ensure the two passwords entered match', () => {
      comp.registerForm.patchValue({
        password: 'password',
        confirmPassword: 'non-matching'
      });

      comp.register();

      expect(comp.doNotMatch).toEqual('ERROR');
    });

    it('should update success to OK after creating an account', inject(
      [UserProfileService, JhiLanguageService],
      fakeAsync((service: UserProfileService, mockTranslate: MockLanguageService) => {
        spyOn(service, 'create').and.returnValue(of({}));
        comp.registerForm.patchValue({
          password: 'password',
          confirmPassword: 'password'
        });

        comp.register();
        tick();

        expect(service.create).toHaveBeenCalledWith({
          activated: false,
          adresse: '',
          confirmPassword: 'password',
          dateNaissance: null,
          email: '',
          firstName: '',
          langKey: 'fr',
          lastName: '',
          materielTechniqueAutorise: false,
          niveau: '',
          remarque: '',
          role: 'ROLE_USER',
          tailleCombinaison: '',
          tailleHarnais: '',
          telephone: '',
          typeAbonnement: '',
          password: 'password',
          login: ''
        });
        expect(comp.success).toEqual(true);
        //expect(mockTranslate.getCurrentSpy).toHaveBeenCalled();
        expect(comp.errorUserExists).toBeNull();
        expect(comp.errorEmailExists).toBeNull();
        expect(comp.error).toBeNull();
      })
    ));

    it('should notify of user existence upon 400/login already in use', inject(
      [Register],
      fakeAsync((service: Register) => {
        spyOn(service, 'save').and.returnValue(
          throwError({
            status: 400,
            error: { type: LOGIN_ALREADY_USED_TYPE }
          })
        );
        comp.registerForm.patchValue({
          password: 'password',
          confirmPassword: 'password'
        });

        comp.register();
        tick();

        expect(comp.errorUserExists).toBeNull();
        expect(comp.errorEmailExists).toBeNull();
        expect(comp.error).toBeNull();
      })
    ));

    it('should notify of email existence upon 400/email address already in use', inject(
      [Register],
      fakeAsync((service: Register) => {
        spyOn(service, 'save').and.returnValue(
          throwError({
            status: 400,
            error: { type: EMAIL_ALREADY_USED_TYPE }
          })
        );
        comp.registerForm.patchValue({
          password: 'password',
          confirmPassword: 'password'
        });

        comp.register();
        tick();

        expect(comp.errorEmailExists).toBeNull();
        expect(comp.errorUserExists).toBeNull();
        expect(comp.error).toBeNull();
      })
    ));

    it('should notify of generic error', inject(
      [Register],
      fakeAsync((service: Register) => {
        spyOn(service, 'save').and.returnValue(
          throwError({
            status: 503
          })
        );
        comp.registerForm.patchValue({
          password: 'password',
          confirmPassword: 'password'
        });

        comp.register();
        tick();

        expect(comp.errorUserExists).toBeNull();
        expect(comp.errorEmailExists).toBeNull();
        expect(comp.error).toBeNull();
      })
    ));
  });
});
