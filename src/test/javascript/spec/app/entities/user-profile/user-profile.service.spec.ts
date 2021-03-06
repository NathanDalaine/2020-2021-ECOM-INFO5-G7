import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { UserProfileService } from 'app/entities/user-profile/user-profile.service';
import { IUserProfile, UserProfile } from 'app/shared/model/user-profile.model';
import { TypeAbonnement } from 'app/shared/model/enumerations/type-abonnement.model';
import { Taille } from 'app/shared/model/enumerations/taille.model';
import { Niveau } from 'app/shared/model/enumerations/niveau.model';
import { User } from 'app/core/user/user.model';

describe('Service Tests', () => {
  describe('UserProfile Service', () => {
    let injector: TestBed;
    let service: UserProfileService;
    let httpMock: HttpTestingController;
    let elemDefault: IUserProfile;
    let expectedResult;
    let currentDate: moment.Moment;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(UserProfileService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new UserProfile(
        new User(0),
        0,
        currentDate,
        currentDate,
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        TypeAbonnement.JOURNALIER,
        false,
        Taille.S,
        Taille.S,
        Niveau.DEBUTANT
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            dateEcheance: currentDate.format(DATE_TIME_FORMAT),
            dateNaissance: currentDate.format(DATE_TIME_FORMAT),
            dateAdhesion: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: elemDefault });
      });

      it('should create a UserProfile', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dateEcheance: currentDate.format(DATE_TIME_FORMAT),
            dateNaissance: currentDate.format(DATE_TIME_FORMAT),
            dateAdhesion: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            dateEcheance: currentDate,
            dateNaissance: currentDate,
            dateAdhesion: currentDate
          },
          returnedFromService
        );
        service
          .create(new UserProfile(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a UserProfile', () => {
        const returnedFromService = Object.assign(
          {
            dateEcheance: currentDate.format(DATE_TIME_FORMAT),
            dateNaissance: currentDate.format(DATE_TIME_FORMAT),
            dateAdhesion: currentDate.format(DATE_TIME_FORMAT),
            adresse: 'BBBBBB',
            telephone: 'BBBBBB',
            typeAbonnement: 'BBBBBB',
            materielTechniqueAutorise: true,
            remarque: 'BBBBBB',
            tailleHarnais: 'BBBBBB',
            tailleCombinaison: 'BBBBBB',
            niveau: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dateEcheance: currentDate,
            dateNaissance: currentDate,
            dateAdhesion: currentDate
          },
          returnedFromService
        );
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should return a list of UserProfile', () => {
        const returnedFromService = Object.assign(
          {
            dateEcheance: currentDate.format(DATE_TIME_FORMAT),
            dateNaissance: currentDate.format(DATE_TIME_FORMAT),
            dateAdhesion: currentDate.format(DATE_TIME_FORMAT),
            adresse: 'BBBBBB',
            telephone: 'BBBBBB',
            typeAbonnement: 'BBBBBB',
            materielTechniqueAutorise: true,
            remarque: 'BBBBBB',
            tailleHarnais: 'BBBBBB',
            tailleCombinaison: 'BBBBBB',
            niveau: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            dateEcheance: currentDate,
            dateNaissance: currentDate,
            dateAdhesion: currentDate
          },
          returnedFromService
        );
        service
          .query(expected)
          .pipe(
            take(1),
            map(resp => resp.body)
          )
          .subscribe(body => (expectedResult = body));
        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a UserProfile', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
