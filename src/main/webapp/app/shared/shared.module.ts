import { NgModule } from '@angular/core';
import { EcomgucvoileSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { JhiAlertComponent } from './alert/alert.component';
import { JhiAlertErrorComponent } from './alert/alert-error.component';
import { JhiLoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import {ConfirmComponent} from "app/shared/confirm/confirm.component";
import {ConfirmService} from "app/shared/confirm/confirm.service";

@NgModule({
  imports: [EcomgucvoileSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, ConfirmComponent,JhiAlertErrorComponent, JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent,ConfirmComponent],
  providers: [ConfirmService],
  exports: [
    EcomgucvoileSharedLibsModule,
    FindLanguageFromKeyPipe,
    JhiAlertComponent,
    JhiAlertErrorComponent,
    ConfirmComponent,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective
  ]
})
export class EcomgucvoileSharedModule {}
