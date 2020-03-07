
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  router: any;

  constructor(private service:UserService) { }
  newuser:User=new User(0,"","","","","",0,"");
  message:any;

  ngOnInit() {
  }

  public nowUpdate(){
    console.log(this.newuser.id);
    let response=this.service.updateUser(this.newuser);
    response.subscribe((data)=>this.message=data);
    if(response)
    {
      alert("Profile updated Successfully");
      this.router.navigate(["/booking"]);

    }
    else
    {
     // alert("Incorrect Details, please check again.");
    this.message="Incorrect Details, please check again."

    }
   
  }
}

