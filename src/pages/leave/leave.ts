import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimelinePage } from '../timeline/timeline';
import { ShowProvider } from './../../providers/show/show';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the LeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html',
})
export class LeavePage {
  result : any;
  data : any;
  arr_leavelists: LeaveDetail[];
  Name: String;
  leave_name: String;
  lhis_id: Number;
  lhis_status: String;
  item : any;
  arr_data_flow:any;
  apfp_bill_id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public showCtrl: ShowProvider, public alertCtrl: AlertController) {

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavePage');    
    this.showCtrl.Show().then((data: any) => {
      this.arr_leavelists = data.data;
      this.arr_leavelists['arr_data_flow'] = data.data_flow;
      console.log(this.arr_leavelists);      
    });
  }

  Getdetail(item){
    console.log('click');
    console.log(item);
    
    this.navCtrl.push(TimelinePage,{
      data : this.data,
      item : item
    });
  }

  remove(no) {
    console.log(no);
    (this.arr_leavelists).splice(no,1);
  }
}


interface LeaveDetail {
  Name: String;
  leave_name : String;
  lhis_id : Number;
  lhis_status : String;
  apfp_bill_id:any;
}
