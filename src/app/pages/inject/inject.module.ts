import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InjectPageRoutingModule } from './inject-routing.module';

import { InjectPage } from './inject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InjectPageRoutingModule
  ],
  declarations: [InjectPage]
})
export class InjectPageModule {}
