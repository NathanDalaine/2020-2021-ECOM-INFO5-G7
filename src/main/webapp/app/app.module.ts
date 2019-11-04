import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import './vendor';
import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { EcomgucvoileSharedModule } from 'app/shared/shared.module';
import { EcomgucvoileCoreModule } from 'app/core/core.module';
import { EcomgucvoileAppRoutingModule } from './app-routing.module';
import { EcomgucvoileHomeModule } from './home/home.module';
import { EcomgucvoileReservationListModule } from './pages/reservationList/reservationList.module';

import { EcomgucvoileMaterialListModule } from './pages/materialList/materialList.module';
import { EcomgucvoileEntityModule } from './entities/entity.module';

// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule, // Angular Flex Layout
    EcomgucvoileSharedModule,
    EcomgucvoileCoreModule,
    EcomgucvoileHomeModule,
    EcomgucvoileReservationListModule,
    EcomgucvoileMaterialListModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EcomgucvoileEntityModule,
    EcomgucvoileAppRoutingModule,
    
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [JhiMainComponent]
})
export class EcomgucvoileAppModule {}
