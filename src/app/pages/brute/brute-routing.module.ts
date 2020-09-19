import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrutePage } from './brute.page';

const routes: Routes = [
  {
    path: '',
    component: BrutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrutePageRoutingModule {}
