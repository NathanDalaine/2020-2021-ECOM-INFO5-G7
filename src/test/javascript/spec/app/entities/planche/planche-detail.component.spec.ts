import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { EcomgucvoileTestModule } from '../../../test.module';
import { PlancheDetailComponent } from 'app/entities/planche/planche-detail.component';
import { Planche } from 'app/shared/model/planche.model';

describe('Component Tests', () => {
  describe('Planche Management Detail Component', () => {
    let comp: PlancheDetailComponent;
    let fixture: ComponentFixture<PlancheDetailComponent>;
    const route = ({ data: of({ planche: new Planche(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EcomgucvoileTestModule],
        declarations: [PlancheDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(PlancheDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PlancheDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.planche).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
