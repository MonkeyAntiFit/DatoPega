import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MensajeriaPageRoutingModule } from './mensajeria-routing.module';
import { MensajeriaPage } from './mensajeria.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeriaPageRoutingModule,
    SharedModule
  ],
  declarations: [MensajeriaPage]
})
export class MensajeriaPageModule {}
