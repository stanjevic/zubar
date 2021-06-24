import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UslugeDetailPageRoutingModule } from './usluge-detail-routing.module';

import { UslugeDetailPage } from './usluge-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UslugeDetailPageRoutingModule
  ],
  declarations: [UslugeDetailPage]
})
export class UslugeDetailPageModule {}
