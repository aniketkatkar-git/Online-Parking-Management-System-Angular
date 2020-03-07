import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private srv:AdminService,private router:Router) { }
  userName:string="";
  password:string="";

  admin:Admin=new Admin("","","","");
  data:any;
  msg:string;


  ngOnInit() {
  }
  checkValidation()
  {
    console.log(this.userName);
    console.log(this.password);
    this.srv.adminlogin(this.userName,this.password).subscribe(
      (response:Response)=>{
        if(response)
        {
          sessionStorage.setItem('userName',this.userName);
          let aname=sessionStorage.getItem('userName');
          console.log(aname);
          this.router.navigate(["/homeadmin"]);
        }
        else
        {
          alert("Invalid Username or Pasword");
          this.msg="Invalid Username or Pasword";
        }
      
      }
    )
  }

}

 