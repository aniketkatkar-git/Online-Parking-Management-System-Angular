import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';
import { Owner } from '../Owner';

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent implements OnInit {

  constructor(private srv:OwnerService,private router:Router) { }
  ownerUsername:string="";
  password:string="";
  owner:Owner=new Owner(0,"","","","","",0,"");
  data:any;
  msg:string

  ngOnInit() {
  }
  checkValidation()
  {
    console.log("Hello");
    console.log(this. ownerUsername);
    console.log(this.password);
    this.srv.login(this.ownerUsername,this.password).subscribe(
      (response:Response)=>{
        console.log(response);
        if(response)
        {
          console.log("login");
          sessionStorage.setItem('username',this.ownerUsername);
          let sid=sessionStorage.getItem('username')
          console.log(sid);
          this.router.navigate(['/homeOwner']);
        }
        else
        {
          alert("Invalid Ownername or Pasword ");
          this.msg="Invalid Ownername or Pasword"
        }
      }
    )
  }

}
