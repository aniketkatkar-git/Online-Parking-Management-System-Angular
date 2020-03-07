import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { RequestService } from '../request.service';
import {Request} from '../request';


@Component({
  selector: 'app-allrequest',
  templateUrl: './allrequest.component.html',
  styleUrls: ['./allrequest.component.css']
})
export class AllrequestComponent implements OnInit {
request:Request;
name:string;
constructor(private srv:RequestService) 
{
   this.request=new Request(0,0,"",0,"");
}

  
  ngOnInit() {
    this.srv.getRequest().subscribe(
      req=>{
        this.request=req;
      }
    );
    function getdata()
    {
      this.name="hello";
 
    }
 
  }

}
