import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,Platform,LoadingController, AlertController } from 'ionic-angular';
import { LeaveServiceProvider } from '../../providers/show/leave-service';
import { approve_dev } from '../../Models/Data_dev';
import { Subscription } from 'rxjs/Subscription';
import { Approve_save } from '../../Models/Data_save';

/**
 * Generated class for the DevDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dev-detail',
  templateUrl: 'dev-detail.html',
})
export class DevDetailPage {
  result : any;
  data : any;
  cancledata : approve_dev[];
  Name: String;
  leave_name: String;
  errorMessage: string;
  sub : Subscription; 
  i : string;
  save_data : Approve_save[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl:LoadingController,
              public alertCtrl : AlertController,
              public LeaveServiceProvider: LeaveServiceProvider) {
                this.i = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevDetailPage');
    this.test();
  }

  test(){
    console.dir(this.i);
  }

  approve_yes(i){
    let psIdapv = '1144';
    // let status_up = this.lhis_status;
    let billId = i.dev_id;
    let billType = 'develop';
    let ps_id_leave = i.dev_ps_id;
    let alSeq = i.dev_status;
    let yesB = 'yesB';
    // let noB
    // let alOpinion

    //แสดง loading controller
    let loader = this.loadingCtrl.create({
      content: "กําลังบันทึกข้อมูล..."
    });  loader.present();

    this.LeaveServiceProvider.getApprovesave(psIdapv,
                                             billId,
                                             billType,
                                             ps_id_leave,
                                             alSeq,
                                             yesB
                                              ).subscribe(res => {
        this.data = res;
        if (this.data.status_up == 1) {
          let alert = this.alertCtrl.create({
            title: "รายการเสร็จสิ้น",
            buttons: [{
             text: 'ตกลง',
             handler: () => {
                     'Hello'
             }
         }]
            });
            alert.present();
          } else {
          let alert = this.alertCtrl.create({
            title: "ไม่สามารถบันทึกได้",
             buttons: ['ตกลง']
            });
            alert.present();
          }
        },
        error => {
          this.errorMessage = <any> error
          //console.log(this.errorMessage);
           loader.dismiss();
           let alert = this.alertCtrl.create({
             title: "เกิดข้อผิดพลาด",
             buttons:['ตกลง']
           });
           alert.present();
      },
      () => {
        loader.dismiss();
      }
    );
   
                                              
  }

  approve_no(i){
    let psIdapv = '1144';
    // let status_up = this.lhis_status;
    let billId = i.dev_id;
    let billType = 'develop';
    let ps_id_leave = i.dev_ps_id;
    let alSeq = i.dev_status;
    let noB = 'noB';
    // let noB
    // let alOpinion

    //แสดง loading controller
    let loader = this.loadingCtrl.create({
      content: "กําลังบันทึกข้อมูล..."
    });  loader.present();

    this.LeaveServiceProvider.getNo_Approvesave(psIdapv,
                                             billId,
                                             billType,
                                             ps_id_leave,
                                             alSeq,
                                             noB
                                              ).subscribe(res => {
        this.data = res;
        if (this.data.status_up == 1) {
          let alert = this.alertCtrl.create({
            title: "รายการเสร็จสิ้น",
            buttons: [{
             text: 'ตกลง',
             handler: () => {
                     'Hello'
             }
         }]
            });
            alert.present();
          } else {
          let alert = this.alertCtrl.create({
            title: "ไม่สามารถบันทึกได้",
             buttons: ['ตกลง']
            });
            alert.present();
          }
        },
        error => {
          this.errorMessage = <any> error
          //console.log(this.errorMessage);
           loader.dismiss();
           let alert = this.alertCtrl.create({
             title: "เกิดข้อผิดพลาด",
             buttons:['ตกลง']
           });
           alert.present();
      },
      () => {
        loader.dismiss();
      }
    );
   
                                              
  }

}
