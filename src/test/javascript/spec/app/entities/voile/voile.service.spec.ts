import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take, map } from 'rxjs/operators';
import { VoileService } from 'app/entities/voile/voile.service';
import { IVoile, Voile } from 'app/shared/model/voile.model';
import { Niveau } from 'app/shared/model/enumerations/niveau.model';

describe('Service Tests', () => {
  describe('Voile Service', () => {
    let injector: TestBed;
    let service: VoileService;
    let httpMock: HttpTestingController;
    let elemDefault: IVoile;
    let expectedResult;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(VoileService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new Voile(
        0,
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        false,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        currentDate,
        currentDate,
        currentDate,
        Niveau.DEBUTANT
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: elemDefault });
      });

      it('should create a Voile', () => {
        const returnedFromService = Object.assign(
          {
            id: 0
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .create(new Voile(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a Voile', () => {
        const returnedFromService = Object.assign(
          {
            surface: 1,
            marque: 'BBBBBB',
            modele: 'BBBBBB',
            numero: 'BBBBBB',
            localisation: 'BBBBBB',
            etat: 'BBBBBB',
            libelle: 'BBBBBB',
            gree: true,
            createdAt: 'BBBBBB',
            createdBy: 'BBBBBB',
            updatedAt: 'BBBBBB',
            updatedBy: 'BBBBBB',
            deletedBy: 'BBBBBB',
            createdAt: currentDate.format(DATE_TIME_FORMAT),
            updatedAt: currentDate.format(DATE_TIME_FORMAT),
            deletedAt: currentDate.format(DATE_TIME_FORMAT),
            niveaurequis: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should return a list of Voile', () => {
        const returnedFromService = Object.assign(
          {
            surface: 1,
            marque: 'BBBBBB',
            modele: 'BBBBBB',
            numero: 'BBBBBB',
            localisation: 'BBBBBB',
            etat: 'BBBBBB',
            libelle: 'BBBBBB',
            gree: true,
            createdAt: 'BBBBBB',
            createdBy: 'BBBBBB',
            updatedAt: 'BBBBBB',
            updatedBy: 'BBBBBB',
            deletedBy: 'BBBBBB',
            createdAt: currentDate.format(DATE_TIME_FORMAT),
            updatedAt: currentDate.format(DATE_TIME_FORMAT),
            deletedAt: currentDate.format(DATE_TIME_FORMAT),
            niveaurequis: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
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

      it('should delete a Voile', () => {
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
