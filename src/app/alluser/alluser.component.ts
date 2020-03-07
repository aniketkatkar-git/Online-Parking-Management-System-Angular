import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {
  users:User;
  name:string;
  constructor(private srv:UserService) { 
    this.users=new User(0,"","","","","",0,"");
  }

  ngOnInit() {

    this.srv.getUser().subscribe(
      usr=>{
        this.users=usr;
      }
    );
    function getdata()
    {
      this.name="hello";

    }
  }

}
