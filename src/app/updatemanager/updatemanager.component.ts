import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
;
import { Manager } from '../manager';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-updatemanager',
  templateUrl: './updatemanager.component.html',
  styleUrls: ['./updatemanager.component.css']
})
export class UpdatemanagerComponent implements OnInit {
newManager:Manager;
message:any;
  constructor(private service:ManagerService) { 
    this.newManager=new Manager(0,"","","",0);
  
  }

  ngOnInit() {
  }
  public nowUpdate(){
    console.log(this.newManager.mId);
    let resp=this.service.updateManager(this.newManager);
    resp.subscribe((data)=>this.message=data)

  }

}
