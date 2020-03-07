import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';
import { City } from '../city';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginUserComponent } from '../login-user/login-user.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 
  Cid:any;
  cityid:any;

  data;
  city:any;
  ct:City;
  constructor(private router:Router,private service:BookingService) { 
  }
  book:Booking=new Booking(0,"","","","","",0,"","","");
  message:any;
  username:any;
  public nowRegisterBooking(){
    console.log(this.book.Aname);
    let resp=this.service.bookingRegistration(this.book);
    resp.subscribe((data)=>this.message=data)
  }
   
      ngOnInit() 
     {
       this.service.getCities().subscribe(data=> this.city=data);
        this.username=sessionStorage.getItem('userName');
       console.log(this.username);
     }

 /*getAllArea(Cid)
{
console.log(this.Cid);
        if(Cid)
        {
          this.service.getArea(Cid).subscribe(data=>
            {
             this.area=data; 
            }        
          );
        }
        else
        {
          this.city = null;
        }
     }*/
     public LogOut(){
      sessionStorage.removeItem('userName');
      this.router.navigate(['/login']);
    }
}


     /*submit(Cid)
     {
       console.log(Cid);
       sessionStorage.setItem('Cid',Cid);
        this.router.navigate(["/allArea",{Cid}]);
     } *.
}*/




