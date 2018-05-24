import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { approve_dev } from '../../Models/Data_dev';
import { Subscription } from 'rxjs/Subscription';
import { DevDetailPage } from '../dev-detail/dev-detail';
import { LeaveServiceProvider } from '../../providers/show/leave-service';



/**
 * Generated class for the DevApprovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dev-approve',
  templateUrl: 'dev-approve.html',
})
export class DevApprovePage {

  result : any;
  data : any;
  approveDev : approve_dev[];
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
this.getApprove_Dev();

}

private getApprove_Dev(){
this.sub = this.showCtrl.getApprove_Dev().subscribe(
(res) => [this.approveDev = res,
        console.log(res)],
(error) =>this.errorMessage = <any> error
);
}

Getdetail(data){
   
  this.navCtrl.push(DevDetailPage,{
   data : data,
  }
    );
}


}
