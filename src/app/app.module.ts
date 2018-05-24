import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Modal } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LeavePage } from '../pages/leave/leave';
import { TimelinePage } from '../pages/timeline/timeline';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';

import { TimelineComponent } from '../components/timeline/timeline';
import { TimelineTimeComponent } from '../components/timeline/timeline';
import { TimelineItemComponent } from '../components/timeline/timeline';
import { ShowProvider } from '../providers/show/show';
import { ServiceLeaveProvider } from '../providers/show/service-leave';

import { HttpModule } from '@angular/http';
import { ModalPage } from '../pages/modal/modal';
import { ModalPageModule } from '../pages/modal/modal.module';
import { ModalSummerPage } from '../pages/modal-summer/modal-summer';
import { ModalUpsetPage } from '../pages/modal-upset/modal-upset';
import { ModalWorkPageModule } from '../pages/modal-work/modal-work.module';
import { ModalWorkPage } from '../pages/modal-work/modal-work';
import { ModalSummerPageModule } from '../pages/modal-summer/modal-summer.module';
import { ModalUpsetPageModule } from '../pages/modal-upset/modal-upset.module';
import { HlApprovePage } from '../pages/hl-approve/hl-approve';
import { DevApprovePage } from '../pages/dev-approve/dev-approve';
import { CancleApplovePage } from '../pages/cancle-applove/cancle-applove';
import { HlApprovePageModule } from '../pages/hl-approve/hl-approve.module';
import { DevApprovePageModule } from '../pages/dev-approve/dev-approve.module';
import { HlDetailPageModule } from '../pages/hl-detail/hl-detail.module';
import { DevDetailPageModule } from '../pages/dev-detail/dev-detail.module';
import { CancleApplovePageModule } from '../pages/cancle-applove/cancle-applove.module';
import { ApproveDetailPageModule } from '../pages/approve-detail/approve-detail.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HlApprovePage,
    DevApprovePage,
    CancleApplovePage,
    LeavePage,
    TimelinePage,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    ModalPageModule,
    ModalSummerPageModule,
    ModalUpsetPageModule,
    ModalWorkPageModule,
    HlApprovePageModule,
    HlDetailPageModule,
    DevApprovePageModule,
    DevDetailPageModule,
    CancleApplovePageModule,
    ApproveDetailPageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LeavePage,
    HlApprovePage,
    DevApprovePage,
    CancleApplovePage,
    TimelinePage,
    ModalPage,
    ModalSummerPage,
    ModalUpsetPage,
    ModalWorkPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShowProvider,
    ServiceLeaveProvider
  ]
})
export class AppModule {}
