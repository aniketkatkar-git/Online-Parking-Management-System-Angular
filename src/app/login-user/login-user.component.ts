import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private srv:UserService,private router:Router) { }

  userName:string="";
  password:string="";
  users:User=new User(0,"","","","","",0,"");
  data:any;
  msg:string

  ngOnInit() {
  }
  checkValidation()
  {
    console.log("Hello");
    console.log(this.userName);
    console.log(this.password);
    this.srv.userlogin(this.userName,this.password).subscribe(
      (response:Response)=>{
        console.log(response);
        if(response)
        {
             sessionStorage.setItem('userName',this.userName);
          let sid=sessionStorage.getItem('userName')
          console.log(sid);
          this.router.navigate(["/booking"]);
        }
        else
        {
          alert("Invalid Username or Pasword");
          this.msg="Invalid Username or Pasword"
        }
      }
    )
  }
}