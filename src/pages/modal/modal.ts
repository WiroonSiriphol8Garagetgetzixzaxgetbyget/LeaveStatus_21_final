import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  attention_person : any;
  count_attention_person : {};
  NOT_attention_person : NOT_attention_person[];
  count_NOT_attention_person : {};
  date_NOT_attention : {};
  count_all : {};
  tio_id : number;
  ws_name : String;

  constructor(public navCtrl: NavController, public navParams: NavParams,private view : ViewController) {
    this.attention_person = navParams.get("attention_person");
    this.count_attention_person = navParams.get("count_attention_person");
    this.NOT_attention_person = navParams.get("NOT_attention_person");
    this.count_NOT_attention_person = navParams.get("count_NOT_attention_person");
    this.date_NOT_attention = navParams.get("date_NOT_attention");
    this.count_all = navParams.get("count_all");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  close_modal(){
    this.view.dismiss();
  }
}
interface NOT_attention_person {
  tio_id : number;
  ws_name : String;
}

interface date_NOT_attention{

}

