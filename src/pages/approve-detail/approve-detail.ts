import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,Platform,LoadingController, AlertController } from 'ionic-angular';
import { LeaveServiceProvider } from '../../providers/show/leave-service';
import { approves_lc } from '../../Models/Data_lc';
import { Subscription } from 'rxjs/Subscription';
import { Approve_save } from '../../Models/Data_save';
// import {OpinionPage} from '../opinion/opinion';

/**
 * Generated class for the ApproveDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approve-detail',
  templateUrl: 'approve-detail.html',
})
export class ApproveDetailPage {
  result : any;
  data : any;
  cancledata : approves_lc[];
  Name: String;
  leave_name: String;
  errorMessage: string;
  sub : Subscription; 
  i : string;
  save_data : Approve_save[]; 
  // psIdapv: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl:LoadingController,
              public alertCtrl : AlertController,
              public LeaveServiceProvider: LeaveServiceProvider) {
                // this.i = navParams.data.i;
                this.i = this.navParams.get('data');
                

                // this.psIdapv = this.navParams.get('psIdapv');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApproveDetailPage');
    this.test();
    // this.getApprove_Lc();
  }

  // private getApprove_Lc(){
  //   this.sub = this.showCtrl.getApprove_Lc().subscribe(
  //     (res) => this.cancledata = res,
  //     (error) =>this.errorMessage = <any> error
  //   );
  // }

  test(){
    console.dir(this.i);
  }

  approve_yes(i){
    // let psIdapv = '1186';
    let psIdapv = '1144';
    // let status_up = this.lhis_status;
    let billId = i.lc_id;
    let billType = 'leavecancel';
    let ps_id_leave = i.lhis_ps_id;
    let alSeq = i.lc_status;
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
            title: "บันทึกเรียบร้อย",
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
    let billId = i.lc_id;
    let billType = 'leavecancel';
    let ps_id_leave = i.lhis_ps_id;
    let alSeq = i.lc_status;
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
            title: "บันทึกเรียบร้อย",
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

  // approve_opinion(){
  //   this.navCtrl.push(OpinionPage,{
  //     data : this.i
  //   });
  // }

 


  

}
