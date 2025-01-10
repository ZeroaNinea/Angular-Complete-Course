import { Routes } from '@angular/router';
import { SearchClicksFormComponent } from './search-clicks-form/search-clicks-form.component';
import { ClicksResultComponent } from './clicks-result/clicks-result.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchClicksFormComponent,
  },
  {
    path: 'result',
    component: ClicksResultComponent,
  },
];
