import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UslugePage } from './usluge.page';

const routes: Routes = [
  {
    path: '',
    component: UslugePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UslugePageRoutingModule {}
