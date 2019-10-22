import { Route } from '@angular/router';

import { MaterialListComponent } from './materialList.component';

export const MATERIAL_LIST_ROUTE: Route = {
  path: 'materialList',
  component: MaterialListComponent,
  data: {
    authorities: [],
    pageTitle: 'materialList.title'
  }
};
