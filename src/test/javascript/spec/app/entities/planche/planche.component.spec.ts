import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { EcomgucvoileTestModule } from '../../../test.module';
import { PlancheComponent } from 'app/entities/planche/planche.component';
import { PlancheService } from 'app/entities/planche/planche.service';
import { Planche } from 'app/shared/model/planche.model';

describe('Component Tests', () => {
  describe('Planche Management Component', () => {
    let comp: PlancheComponent;
    let fixture: ComponentFixture<PlancheComponent>;
    let service: PlancheService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EcomgucvoileTestModule],
        declarations: [PlancheComponent],
        providers: []
      })
        .overrideTemplate(PlancheComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PlancheComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PlancheService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Planche(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.planches[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
