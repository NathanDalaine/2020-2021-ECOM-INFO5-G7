import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { EcomgucvoileTestModule } from '../../../test.module';
import { PlancheUpdateComponent } from 'app/entities/planche/planche-update.component';
import { PlancheService } from 'app/entities/planche/planche.service';
import { Planche } from 'app/shared/model/planche.model';

describe('Component Tests', () => {
  describe('Planche Management Update Component', () => {
    let comp: PlancheUpdateComponent;
    let fixture: ComponentFixture<PlancheUpdateComponent>;
    let service: PlancheService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EcomgucvoileTestModule],
        declarations: [PlancheUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(PlancheUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PlancheUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PlancheService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Planche(123);
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
        const entity = new Planche();
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
