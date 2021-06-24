import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UslugePageRoutingModule } from './usluge-routing.module';

import { UslugePage } from './usluge.page';
import { SearchbarModule } from '../components/searchbar/searchbar.module';
import { CategoryItemModule } from '../components/category-item/category.item.module';
import { UslugeCardModule } from '../components/usluge-card/usluge-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UslugePageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    UslugeCardModule,
  ],
  declarations: [UslugePage]
})
export class UslugePageModule {}
