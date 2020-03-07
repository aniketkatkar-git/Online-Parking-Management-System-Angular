import { Component, OnInit } from '@angular/core';
import { Owner } from '../Owner';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-allowner',
  templateUrl: './allowner.component.html',
  styleUrls: ['./allowner.component.css']
})
export class AllownerComponent implements OnInit {
  owners:Owner;
  name:string;
  constructor(private srv:OwnerService) {
    this.owners=new Owner(0,"","","","","",0,"");
   }

  ngOnInit() {
    this.srv.getOwner().subscribe(
      usr=>{
        this.owners=usr;
      }
    );
    function getdata()
    {
      this.name="hello";
 
    }
  }

}
