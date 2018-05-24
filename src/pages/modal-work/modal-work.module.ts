import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalWorkPage } from './modal-work';

@NgModule({
  declarations: [
    ModalWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalWorkPage),
  ],
})
export class ModalWorkPageModule {}
