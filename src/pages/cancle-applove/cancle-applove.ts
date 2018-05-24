import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApproveDetailPage } from '../approve-detail/approve-detail';
import { LeaveServiceProvider } from '../../providers/show/leave-service';
import { approves_lc } from '../../Models/Data_lc';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the CancleApplovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancle-applove',
  templateUrl: 'cancle-applove.html',
})
export class CancleApplovePage {
  result : any;
  data : any;
  cancledata : approves_lc[];
  Name: String;
  leave_name: String;
  errorMessage: string;
  sub : Subscription; 
  
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public showCtrl: LeaveServiceProvider) {
  }
  ionViewDidLoad() {
    
      console.log('ionViewDidLoad cancleapplove');
      this.getApprove_Lc();
    
    }

    private getApprove_Lc(){
      this.sub = this.showCtrl.getApprove_Lc().subscribe(
        (res) => [this.cancledata = res,
                  console.log(res)],
        (error) =>this.errorMessage = <any> error
      );
    }

    Getdetail(data){
   
     this.navCtrl.push(ApproveDetailPage,{
      data : data,
   

     }
       );
   }

  }
  
  

  

