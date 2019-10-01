import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { EComGucTestModule } from '../../../test.module';
import { HarnaisUpdateComponent } from 'app/entities/harnais/harnais-update.component';
import { HarnaisService } from 'app/entities/harnais/harnais.service';
import { Harnais } from 'app/shared/model/harnais.model';

describe('Component Tests', () => {
  describe('Harnais Management Update Component', () => {
    let comp: HarnaisUpdateComponent;
    let fixture: ComponentFixture<HarnaisUpdateComponent>;
    let service: HarnaisService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EComGucTestModule],
        declarations: [HarnaisUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(HarnaisUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(HarnaisUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(HarnaisService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Harnais(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new Harnais();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
