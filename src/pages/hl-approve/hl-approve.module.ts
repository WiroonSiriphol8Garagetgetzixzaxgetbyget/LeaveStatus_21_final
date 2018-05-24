import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HlApprovePage } from './hl-approve';

@NgModule({
  declarations: [
    HlApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(HlApprovePage),
  ],
})
export class HlApprovePageModule {}
