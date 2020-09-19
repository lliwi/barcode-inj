import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InjectPage } from './inject.page';

const routes: Routes = [
  {
    path: '',
    component: InjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InjectPageRoutingModule {}
