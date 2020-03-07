import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit 
{

  constructor(private service:RequestService,) { }
  router: any;
  newrequest:Request=new Request(0,0,"",0,"");
  message:any;

  ngOnInit() {
  }
  public makeRequest()
  {
    console.log(this.newrequest.Rid);
    let resp=this.service.registerRequest(this.newrequest);
    resp.subscribe((data)=>this.message=data)
 
  }
  
 
}



