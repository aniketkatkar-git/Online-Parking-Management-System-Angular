import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Manager } from '../manager';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent implements OnInit {

  constructor(private service:ManagerService){}
  newmanager:Manager=new Manager(0,"","","",0);
  message:any;

  ngOnInit() {
  }
  
public nowRegister(){
  console.log(this.newmanager.mId);
  let resp=this.service.managerRegistration(this.newmanager);
  resp.subscribe((data)=>this.message=data)
  }

}
