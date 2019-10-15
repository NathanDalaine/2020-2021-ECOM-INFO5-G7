import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { EcomgucvoileTestModule } from '../../../test.module';
import { PlancheDeleteDialogComponent } from 'app/entities/planche/planche-delete-dialog.component';
import { PlancheService } from 'app/entities/planche/planche.service';

describe('Component Tests', () => {
  describe('Planche Management Delete Component', () => {
    let comp: PlancheDeleteDialogComponent;
    let fixture: ComponentFixture<PlancheDeleteDialogComponent>;
    let service: PlancheService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EcomgucvoileTestModule],
        declarations: [PlancheDeleteDialogComponent]
      })
        .overrideTemplate(PlancheDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PlancheDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PlancheService);
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
