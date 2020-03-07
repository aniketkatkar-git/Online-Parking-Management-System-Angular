import { Component, OnInit } from '@angular/core';
import { Manager } from '../manager';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-allmanager',
  templateUrl: './allmanager.component.html',
  styleUrls: ['./allmanager.component.css']
})
export class AllmanagerComponent implements OnInit {
  managers:Manager;
  name:string;
  constructor(private srv:ManagerService) { 
    this.managers=new Manager(0,"","","",0);
  }

  ngOnInit() {
    this.srv.getManager().subscribe(
      usr=>{
        this.managers=usr;
      }
    );
    function getdata()
    {
      this.name="hello";

    }
  }

}
