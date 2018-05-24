import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Modal } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
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
import { List1Page } from '../pages/list1/list1';
import { List2Page } from '../pages/list2/list2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    List1Page,
    List2Page,
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
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LeavePage,
    List1Page,
    List2Page,
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
