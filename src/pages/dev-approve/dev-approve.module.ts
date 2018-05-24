import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevApprovePage } from './dev-approve';

@NgModule({
  declarations: [
    DevApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(DevApprovePage),
  ],
})
export class DevApprovePageModule {}
