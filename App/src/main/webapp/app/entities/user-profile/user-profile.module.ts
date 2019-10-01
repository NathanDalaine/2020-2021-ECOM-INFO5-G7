import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EComGucSharedModule } from 'app/shared/shared.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileDetailComponent } from './user-profile-detail.component';
import { UserProfileUpdateComponent } from './user-profile-update.component';
import { UserProfileDeletePopupComponent, UserProfileDeleteDialogComponent } from './user-profile-delete-dialog.component';
import { userProfileRoute, userProfilePopupRoute } from './user-profile.route';

const ENTITY_STATES = [...userProfileRoute, ...userProfilePopupRoute];

@NgModule({
  imports: [EComGucSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    UserProfileComponent,
    UserProfileDetailComponent,
    UserProfileUpdateComponent,
    UserProfileDeleteDialogComponent,
    UserProfileDeletePopupComponent
  ],
  entryComponents: [UserProfileComponent, UserProfileUpdateComponent, UserProfileDeleteDialogComponent, UserProfileDeletePopupComponent]
})
export class EComGucUserProfileModule {}
