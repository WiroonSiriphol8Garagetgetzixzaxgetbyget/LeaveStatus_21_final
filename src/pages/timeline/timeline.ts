import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowProvider } from '../../providers/show/show';
import { LeavePage } from '../../pages/leave/leave';
/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})


export class TimelinePage {
  items: TimelineDetail[];
  head_item:TimelineDetail[];
  result: any;
  data: any;
  Name: String;
  leave_name: String;
  lhis_id: Number;
  apfp_seq: Number;
  apfp_bill_id: any;
  form_send_id: any;
  apfp_approve_date: any;
  apfp_status:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public showCtrl: ShowProvider) {
    this.form_send_id = navParams.data.item;
    console.log(navParams);
    console.log("asdasda" + this.form_send_id);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctypePage');
    this.showCtrl.Show2().then((data: any) => {
      this.items = data.data_flow;
      this.head_item = data.data;
      console.log(this.items);
      console.log(this.head_item);
    });
    // this.showCtrl.Show().then((data: any) => {
    //   
    //   
    // });


  }

  Back() {
    this.navCtrl.push(LeavePage);
  }

}


interface TimelineDetail {
  Name: String;
  leave_name: String;
  lhis_id: Number;
  apfp_seq: any;
  apfp_bill_id: any;
  // apfp_approve_date: any;
  apfp_status_name : String;
  apfp_apdept_name : String;
  apfp_apact_name : String;
  apfp_approve_date : String;
  apfp_status:any;
}