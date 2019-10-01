import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { EComGucTestModule } from '../../../test.module';
import { HarnaisComponent } from 'app/entities/harnais/harnais.component';
import { HarnaisService } from 'app/entities/harnais/harnais.service';
import { Harnais } from 'app/shared/model/harnais.model';

describe('Component Tests', () => {
  describe('Harnais Management Component', () => {
    let comp: HarnaisComponent;
    let fixture: ComponentFixture<HarnaisComponent>;
    let service: HarnaisService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EComGucTestModule],
        declarations: [HarnaisComponent],
        providers: []
      })
        .overrideTemplate(HarnaisComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(HarnaisComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(HarnaisService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Harnais(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.harnais[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
