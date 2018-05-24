import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServiceLeaveProvider } from '../../providers/show/service-leave';
import { ModalPage } from '../modal/modal';
import { ModalUpsetPage } from '../modal-upset/modal-upset';
import { ModalWorkPage } from '../modal-work/modal-work';
import { ModalSummerPage } from '../modal-summer/modal-summer';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public arr_leave_person: Leave_person[];
  public attention_person: {};
  public count_attention_person: {};
  public NOT_attention_person: {};
  public count_NOT_attention_person: person[];
  public date_NOT_attention: {};
  // public count_all: {};
  public profile : person[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private leave_person_provider: ServiceLeaveProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.leave_person_provider.get_Leave_person2().then((data: any) => {
      this.attention_person = data.attention_person;
      this.count_attention_person = data.count_attention_person;
      this.NOT_attention_person = data.NOT_attention_person;
      this.count_NOT_attention_person = data.count_NOT_attention_person
      this.date_NOT_attention = data.date_NOT_attention;
      // this.count_all = data.count_all;
      this.profile = data.profile;
      console.log(this.profile);
    });
  }

  show_modal(arr_leave_person) {
    const myModal = this.modal.create(ModalWorkPage, {
      attention_person: this.attention_person,
      count_attention_person: this.count_attention_person,
      NOT_attention_person: this.NOT_attention_person,
      count_NOT_attention_person: this.count_NOT_attention_person,
      date_NOT_attention: this.date_NOT_attention,
      // count_all: this.count_all,
    });
    myModal.present();
  }

  show_modal_work() {
    const myModal = this.modal.create(ModalPage, {
      attention_person: this.attention_person,
      count_attention_person: this.count_attention_person,
      NOT_attention_person: this.NOT_attention_person,
      count_NOT_attention_person: this.count_NOT_attention_person,
      date_NOT_attention: this.date_NOT_attention,
      // count_all: this.count_all,
    });
    myModal.present();
  }

  show_modal_upset(event, $arr_leave_person) {
    const myModal = this.modal.create(ModalUpsetPage, {
      attention_person: this.attention_person,
      count_attention_person: this.count_attention_person,
      NOT_attention_person: this.NOT_attention_person,
      count_NOT_attention_person: this.count_NOT_attention_person,
      date_NOT_attention: this.date_NOT_attention,
      // count_all: this.count_all,
    });
    myModal.present();
  }

  show_modal_summer() {
    const myModal = this.modal.create(ModalSummerPage, {
      attention_person: this.attention_person,
      count_attention_person: this.count_attention_person,
      NOT_attention_person: this.NOT_attention_person,
      count_NOT_attention_person: this.count_NOT_attention_person,
      date_NOT_attention: this.date_NOT_attention,
      // count_all: this.count_all,
    });
    myModal.present();
  }

}
interface Leave_person {
  attention_person: {};
  count_attention_person: {};
  NOT_attention_person: {};
  count_NOT_attention_person: {};
  date_NOT_attention: {};
  count_all: {};
}

interface person {
  NAME: String;
  hire_name: String;
  time_start: String;
  time_end: String;
  time_now : String;
}