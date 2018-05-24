import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LeavePage } from '../pages/leave/leave';
import { TimelinePage } from '../pages/timeline/timeline';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TimelineComponent } from '../components/timeline/timeline';
import { TimelineTimeComponent } from '../components/timeline/timeline';
import { TimelineItemComponent } from '../components/timeline/timeline';
import { ShowProvider } from '../providers/show/show';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LeavePage,
    TimelinePage,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LeavePage,
    TimelinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShowProvider
  ]
})
export class AppModule {}
