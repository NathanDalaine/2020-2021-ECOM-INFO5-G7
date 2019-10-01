import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { EComGucTestModule } from '../../../test.module';
import { VoileDeleteDialogComponent } from 'app/entities/voile/voile-delete-dialog.component';
import { VoileService } from 'app/entities/voile/voile.service';

describe('Component Tests', () => {
  describe('Voile Management Delete Component', () => {
    let comp: VoileDeleteDialogComponent;
    let fixture: ComponentFixture<VoileDeleteDialogComponent>;
    let service: VoileService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EComGucTestModule],
        declarations: [VoileDeleteDialogComponent]
      })
        .overrideTemplate(VoileDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(VoileDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(VoileService);
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
