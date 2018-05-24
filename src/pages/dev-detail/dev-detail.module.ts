import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevDetailPage } from './dev-detail';

@NgModule({
  declarations: [
    DevDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DevDetailPage),
  ],
})
export class DevDetailPageModule {}
