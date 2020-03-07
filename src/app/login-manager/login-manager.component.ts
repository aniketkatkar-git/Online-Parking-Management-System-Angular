import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';
import { Manager } from '../manager';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {

  constructor(private srv:ManagerService, private router:Router) { }
  mUserName:string="";
  mPassword:string="";
  manager:Manager=new Manager(0,"","","",0);
  data:any;
  msg:string;

  ngOnInit() {
  }
  
  checkValidation()
  {
    console.log(this.mUserName);
    console.log(this.mPassword);
    this.srv.managerlogin(this.mUserName,this.mPassword).subscribe(
      (response:Response)=>{
        console.log(response);
        if(response)
        {
          sessionStorage.setItem('mUserName',this.mUserName)
          let mname=sessionStorage.getItem('mUserName');
          console.log(mname);
          this.router.navigate(["/homemanager"]);
        }
        else
        {
          alert("Invalid Manger Usernaem or Pasword ");
          this.msg="Invalid mUserName or mPassword"
        }
      }
    )
  }

}
