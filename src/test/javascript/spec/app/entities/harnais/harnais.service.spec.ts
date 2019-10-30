import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take, map } from 'rxjs/operators';
import { HarnaisService } from 'app/entities/harnais/harnais.service';
import { IHarnais, Harnais } from 'app/shared/model/harnais.model';
import { Taille } from 'app/shared/model/enumerations/taille.model';

describe('Service Tests', () => {
  describe('Harnais Service', () => {
    let injector: TestBed;
    let service: HarnaisService;
    let httpMock: HttpTestingController;
    let elemDefault: IHarnais;
    let expectedResult;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = {};
      injector = getTestBed();
      service = injector.get(HarnaisService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new Harnais(0, Taille.S, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA');
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

      it('should create a Harnais', () => {
        const returnedFromService = Object.assign(
          {
            id: 0
          },
          elemDefault
        );
        const expected = Object.assign({}, returnedFromService);
        service
          .create(new Harnais(null))
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject({ body: expected });
      });

      it('should update a Harnais', () => {
        const returnedFromService = Object.assign(
          {
            taille: 'BBBBBB',
            etat: 'BBBBBB',
            createdAt: 'BBBBBB',
            createdBy: 'BBBBBB',
            updatedAt: 'BBBBBB',
            updatedBy: 'BBBBBB',
            deletedAt: 'BBBBBB',
            deletedBy: 'BBBBBB'
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

      it('should return a list of Harnais', () => {
        const returnedFromService = Object.assign(
          {
            taille: 'BBBBBB',
            etat: 'BBBBBB',
            createdAt: 'BBBBBB',
            createdBy: 'BBBBBB',
            updatedAt: 'BBBBBB',
            updatedBy: 'BBBBBB',
            deletedAt: 'BBBBBB',
            deletedBy: 'BBBBBB'
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

      it('should delete a Harnais', () => {
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