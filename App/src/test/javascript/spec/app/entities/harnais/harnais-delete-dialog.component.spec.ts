import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { EComGucTestModule } from '../../../test.module';
import { HarnaisDeleteDialogComponent } from 'app/entities/harnais/harnais-delete-dialog.component';
import { HarnaisService } from 'app/entities/harnais/harnais.service';

describe('Component Tests', () => {
  describe('Harnais Management Delete Component', () => {
    let comp: HarnaisDeleteDialogComponent;
    let fixture: ComponentFixture<HarnaisDeleteDialogComponent>;
    let service: HarnaisService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EComGucTestModule],
        declarations: [HarnaisDeleteDialogComponent]
      })
        .overrideTemplate(HarnaisDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(HarnaisDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(HarnaisService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
