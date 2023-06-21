import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CONNREFUSED } from 'dns';
import { ToastrService } from 'ngx-toastr';
import { Login } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { ApiService } from '../shared/api.service';
import { GlobalUrl } from '../shared/globalurl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  listOfLogin: any = [];
  constructor(public loginservice: ProductService, public toast: ToastrService , public apiservice: ApiService ) { }

  // modalVisible = false;
  ngOnInit(): void {
    
    this.loginservice.getLogin().subscribe(data => {
      this.loginservice.LoginList = data; 
    });

    this.GetLognApi();
  }

  populateLogin(SelectedLogin: Login) {
    console.log(SelectedLogin);
    this.loginservice.LoginData = SelectedLogin;
  }

  deleteLogin(id: Number) {
    if (confirm('Are You Really want to delete this record')) {
      this.loginservice.DeleteLogin(id).subscribe(data => {
        this.toast.error('Success', 'Record Deleted');
        console.log('Record Deleted');
        this.loginservice.getLogin().subscribe(data => {
          this.loginservice.LoginList = data;
        });

      }, err => {
        console.log('Record not Deleted');
      })
    }
  }

  // delete(id: Number) {
  //   if (confirm('Are You Really want to delete this record')) {
  //     this.loginservice.DeleteLogin(id).subscribe(data => {
  //       this.toast.success('Success', 'Record Deleted');
  //       console.log('Record Deleted');

  //     }, err => {
  //       console.log('Record not Deleted');
  //     });
  //   }
  // }

  submit(form: NgForm) {
    console.log("test");
    if (this.loginservice.LoginData.id == 0)
      
      this.InsertLogin(form);
    else
      this.UpdateLogin(form);


  }

  InsertLogin(myform: NgForm) {
    this.loginservice.saveLogin().subscribe(d => {
      this.ResetFrm(myform);
      this.RefreshData();
      this.toast.success('Success', 'Record Save');
      console.log("save");

    });
  }

  UpdateLogin(myform: NgForm) {
    this.loginservice.UpdateLogin().subscribe(update => {
      this.ResetFrm(myform);
      this.RefreshData();
      this.toast.warning('Success', 'Record Updated');
      // this.modalVisible = true;
      console.log("UpdateData");
    });

  }

  ResetFrm(myform: NgForm) {
    myform.form.reset();
    this.loginservice.LoginData = new Login();
  }

  RefreshData() {
    this.loginservice.getLogin().subscribe(data => {
      this.loginservice.LoginList = data;
    });
  }

  GetLognApi()
  {
      console.log("Get Login Testing");
      this.apiservice.getAllDetails(GlobalUrl.GetLogin).subscribe(res => {

        console.log(" listOfBranchData res=======>", res);
        this.listOfLogin = res;

      })
      
  }


  PostLognApi()
  {
      console.log("Get Login Testing");
      this.apiservice.getAllDetails(GlobalUrl.GetLogin).subscribe(res => {

        console.log(" listOfBranchData res=======>", res);
        this.listOfLogin = res;

      })
      
  }

} 
