import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrutePageRoutingModule } from './brute-routing.module';
import { BrutePage } from './brute.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrutePageRoutingModule
  ],
  declarations: [BrutePage]
})
export class BrutePageModule {}
