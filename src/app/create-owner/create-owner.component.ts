import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Owner } from '../Owner';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent implements OnInit {

  constructor(private service:OwnerService){} 
  newowner:Owner=new Owner(0,"","","","","",0,"");
  message:any;

  ngOnInit() {
  }
  public nowRegister(){
    console.log(this.newowner.id);
    let resp=this.service.ownerRegistration(this.newowner);
    resp.subscribe((data)=>this.message=data)
    }

}
