import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LeavePage } from '../pages/leave/leave';
import { HlApprovePage } from '../pages/hl-approve/hl-approve';
import { DevApprovePage } from '../pages/dev-approve/dev-approve';
import { CancleApplovePage } from '../pages/cancle-applove/cancle-applove';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ข้อมูลทั่วไป', component: HomePage },
      { title: 'List', component: HlApprovePage },
      { title: 'List1', component: DevApprovePage },
      { title: 'List2', component: CancleApplovePage },
      { title: 'สถานะใบลา', component: LeavePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
