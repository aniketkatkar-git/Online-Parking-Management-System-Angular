import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Owner } from '../Owner';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-updateowner',
  templateUrl: './updateowner.component.html',
  styleUrls: ['./updateowner.component.css']
})
export class UpdateownerComponent implements OnInit {

  newOwner:Owner;
  message:any;
  constructor(private service:OwnerService) {
this.newOwner=new Owner(0,"","","","","",0,"");
   }

  ngOnInit() {
  }
  public nowUpdate(){
    console.log(this.newOwner.id);
    let resp=this.service.updateOwner(this.newOwner);
    resp.subscribe((data)=>this.message=data)

  }


}
