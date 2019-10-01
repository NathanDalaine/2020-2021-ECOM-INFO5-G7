import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { EComGucTestModule } from '../../../test.module';
import { HarnaisDetailComponent } from 'app/entities/harnais/harnais-detail.component';
import { Harnais } from 'app/shared/model/harnais.model';

describe('Component Tests', () => {
  describe('Harnais Management Detail Component', () => {
    let comp: HarnaisDetailComponent;
    let fixture: ComponentFixture<HarnaisDetailComponent>;
    const route = ({ data: of({ harnais: new Harnais(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EComGucTestModule],
        declarations: [HarnaisDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(HarnaisDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(HarnaisDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.harnais).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
