import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HlDetailPage } from './hl-detail';

@NgModule({
  declarations: [
    HlDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HlDetailPage),
  ],
})
export class HlDetailPageModule {}
