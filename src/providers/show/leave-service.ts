import { Http, RequestOptions,Response,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { approves_lc } from '../../Models/Data_lc';
import { Approve_save } from '../../Models/Data_save';
import { approve_dev } from '../../Models/Data_Dev';
import { approve_hl } from '../../Models/Data_hl';

/*
  Generated class for the LeaveServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaveServiceProvider {

  constructor(public http: Http) {
    // console.log('Hello LeaveServiceProvider Provider');
  }

  //ดึงข้อมูลหน้าอนุมัติยกเลิกการลา
  getApprove_Lc():Observable<approves_lc[]> {

    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/JSON');
    let header = new RequestOptions({ headers: myHeader });

    let data_input = {psIdapv :1144};
    console.log(data_input);

  return this.http.post('https://10.80.39.23/pcksite/index.php/hr/leaves/Service_Test_team7/approveList', data_input,header)
  .map((res: Response) =>{
  let data = res.json().rs_lc;
  return data;
  }).catch(this.handleError);
}
private handleError(error:any) {
  return Observable.throw(error.json().errorMessage || 'error Server');
}

//End ยกเลิกการลา
///////////////////////////////

//////////////////////////////
//ดึงข้อมูลอนุมัติลาปกติ
getApprove_hl():Observable<approve_hl[]> {

  let myHeader = new Headers();
  myHeader.append('Content-Type', 'application/JSON');
  let header = new RequestOptions({ headers: myHeader });

  let data_input = {psIdapv :1144};
  console.log(data_input);

return this.http.post('https://10.80.39.23/pcksite/index.php/hr/leaves/Service_Test_team7/approveList', data_input,header)
.map((res: Response) =>{
let data = res.json().rs_hl;
return data;
}).catch(this.handleError);
}


// END getApprove_Dev
////////////////////////////////////////////////////////////////

//////////////////////////////
//ดึงข้อมูลอนุมัติลาไปราชการ
getApprove_Dev():Observable<approve_dev[]> {

  let myHeader = new Headers();
  myHeader.append('Content-Type', 'application/JSON');
  let header = new RequestOptions({ headers: myHeader });

  let data_input = {psIdapv :1144};
  console.log(data_input);

return this.http.post('https://10.80.39.23/pcksite/index.php/hr/leaves/Service_Test_team7/approveList', data_input,header)
.map((res: Response) =>{
let data = res.json().rs_dev;
return data;
}).catch(this.handleError);
}
private HandleError(error:any) {
return Observable.throw(error.json().errorMessage || 'error Server');
}

// END getApprove_Dev
////////////////////////////////////////////////////////////////

//////////////////////////////////////
//อนุมัติ/ไม่อนุมัติ ยกเลิกใบลา//////////////
/////////////////////////////////////
getApprovesave(
  psIdapv : string,
  billId : string,
  billType : string,
  ps_id_leave : string,
  alSeq : string,
  yesB : string,
):Observable<Approve_save[]> {

  let myHeader = new Headers();
  myHeader.append('Content-Type', 'application/JSON');
  let header = new RequestOptions({ headers: myHeader });

  let data_input = {psIdapv :1144};
  console.log(data_input);

  let save_data = {
    psIdapv : psIdapv,
    billId : billId,
    billType :billType,
    ps_id_leave : ps_id_leave,
    alSeq : alSeq,
    yesB : yesB
  }
  console.dir(save_data);

return this.http.post('https://10.80.39.23/pcksite/index.php/hr/leaves/Service_Test_team7/approveSave', save_data,header)
.map((res: Response) =>{
let data = res.json();
return data;
}).catch(this.handleError);
}

getNo_Approvesave(
  psIdapv : string,
  billId : string,
  billType : string,
  ps_id_leave : string,
  alSeq : string,
  noB : string,
):Observable<Approve_save[]> {

  let myHeader = new Headers();
  myHeader.append('Content-Type', 'application/JSON');
  let header = new RequestOptions({ headers: myHeader });

  let data_input = {psIdapv :1144};
  console.log(data_input);

  let save_data = {
    psIdapv : psIdapv,
    billId : billId,
    billType :billType,
    ps_id_leave : ps_id_leave,
    alSeq : alSeq,
    noB : noB
  }
  console.dir(save_data);

return this.http.post('https://10.80.39.23/pcksite/index.php/hr/leaves/Service_Test_team7/approveSave', save_data,header)
.map((res: Response) =>{
let data = res.json();
return data;
}).catch(this.handleError);
}
//จบการอนุมัติยกเลิกใบลา
////////////////////////////////////////////////////////////////////
approveOpinion(
  psIdapv : string,
  billId : string,
  billType : string,
  ps_id_leave : string,
  alSeq : string,
  alOpinion : string,
):Observable<Approve_save> {

  let myHeader = new Headers();
  myHeader.append('Content-Type', 'application/JSON');
  let header = new RequestOptions({ headers: myHeader });

  let data_input = {psIdapv :1186};
  console.log(data_input);

  let save_data = {
    psIdapv : psIdapv,
    billId : billId,
    billType :billType,
    ps_id_leave : ps_id_leave,
    alSeq : alSeq,
    alOpinion : alOpinion
  }
  console.dir(save_data);

return this.http.post('https://10.80.39.23/pcksite/index.php/hr/leaves/Service_Approvedoc/ressonForEdit', save_data,header)
.map((res: Response) =>{
let data = res.json();
return data;
}).catch(this.handleError);
}
   
}
