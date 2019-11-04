import { Route } from '@angular/router';

import { HelpPageComponent } from './helpPage.component';

export const HELP_PAGE_ROUTE: Route = {
  path: 'helpPage',
  component: HelpPageComponent,
  data: {
    authorities: [],
    pageTitle: 'helpPage.title'
  }
};
