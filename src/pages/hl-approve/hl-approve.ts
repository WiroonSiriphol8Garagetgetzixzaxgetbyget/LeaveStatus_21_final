import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { approve_hl } from '../../Models/Data_hl';
import { Subscription } from 'rxjs/Subscription';
import { HlDetailPage } from '../hl-detail/hl-detail';
import { LeaveServiceProvider } from '../../providers/show/leave-service';


/**
 * Generated class for the HlApprovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hl-approve',
  templateUrl: 'hl-approve.html',
})
export class HlApprovePage {
  result : any;
  data : any;
  approveHl : approve_hl[];
  Name: String;
  leave_name: String;
  errorMessage: string;
  sub : Subscription; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public showCtrl: LeaveServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HlApprovePage');
    this.getApprove_hl();
  }

  private getApprove_hl(){
    this.sub = this.showCtrl.getApprove_hl().subscribe(
    (res) => [this.approveHl = res,
            console.log(res)],
    (error) =>this.errorMessage = <any> error
    );
    }
    
    Getdetail(data){
       
      this.navCtrl.push(HlDetailPage,{
       data : data,
      }
        );
    }

}
