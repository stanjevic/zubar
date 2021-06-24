import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UslugeDetailPage } from './usluge-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UslugeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UslugeDetailPageRoutingModule {}
